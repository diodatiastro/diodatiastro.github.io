<%*

// Template Templater per creazione automatica
// di link Hugo al dizionario.
//
// Seleziona testo → scegli voce → scegli
// pagina principale, sezione o sottosezione.
//
// Genera automaticamente relref Hugo
// con eventuale anchor di sezione.
//
// Struttura prevista:
// content/dizionario/nome-voce/index.md

// ------------------------------------------------------
// Cerca la cartella principale del dizionario
// ------------------------------------------------------

let cartella =
    app.vault.getAbstractFileByPath("content/dizionario");


if (!cartella) {

    tR += "Cartella dizionario non trovata";
    return;

}


// ------------------------------------------------------
// Funzione per estrarre il titolo dal front matter Hugo
// ------------------------------------------------------

function estraiTitolo(contenuto) {

    let risultato =
        contenuto.match(/title\s*=\s*"([^"]+)"/);


    if (risultato) {

        return risultato[1];

    }

    return null;
}


// ------------------------------------------------------
// Costruzione elenco delle pagine
// ------------------------------------------------------

let pagine = [];


for (let elemento of cartella.children) {


    // ignora eventuali file

    if (!elemento.children) {
        continue;
    }


    let file =
        app.vault.getAbstractFileByPath(
            elemento.path + "/index.md"
        );


    if (!file) {
        continue;
    }


    let contenuto =
        await app.vault.read(file);


    let titolo =
        estraiTitolo(contenuto);


    if (titolo) {

        pagine.push({

            nome: titolo,

            slug: elemento.name,

            contenuto: contenuto

        });

    }

}


// ------------------------------------------------------
// Mostra il menu delle pagine
// ------------------------------------------------------

let scelta =
    await tp.system.suggester(

        pagine.map(p => p.nome),

        pagine

    );


if (!scelta) {

    tR += "Operazione annullata";

    return;

}

// ------------------------------------------------------
// Estrazione delle sezioni della pagina scelta
// ------------------------------------------------------

function estraiSezioni(contenuto) {

    let sezioni = [];

    let righe = contenuto.split("\n");


    for (let riga of righe) {


        let livello2 =
            riga.match(/^##\s+(.+)/);


        let livello3 =
            riga.match(/^###\s+(.+)/);



        if (livello2) {

            sezioni.push({

                titolo: livello2[1]
                    .trim()
                    .replace(/\\([.,])/g, "$1"),

                livello: 2

            });

        }


        else if (livello3) {

            sezioni.push({

                titolo: livello3[1]
                    .trim()
                    .replace(/\\([.,])/g, "$1"),

                livello: 3

            });

        }

    }


    return sezioni;

}

// ------------------------------------------------------
// Crea il menu gerarchico
// ------------------------------------------------------

let sezioni =
    estraiSezioni(scelta.contenuto);


// Aggiunge la possibilità di scegliere la pagina principale

sezioni.unshift({

    titolo: "Pagina principale",

    livello: 1,

    principale: true

});


// Crea l'elenco visualizzato nel menu

let elencoSezioni =
    sezioni.map(s => {


        if (s.livello === 3) {

            return "   └─ " + s.titolo;

        }


        return s.titolo;

    });



// ------------------------------------------------------
// Mostra il selettore delle sezioni
// ------------------------------------------------------

let sceltaSezione =
    await tp.system.suggester(

        elencoSezioni,

        sezioni

    );


if (!sceltaSezione) {

    tR += "Operazione annullata";

    return;

}



// ------------------------------------------------------
// Recupera il testo selezionato nella pagina
// ------------------------------------------------------

let testoSelezionato = tp.file.selection();


if (!testoSelezionato) {

    tR += "ERRORE: nessun testo selezionato";

    return;

}


// ------------------------------------------------------
// Funzione per creare lo slug Hugo dell'ancora
// ------------------------------------------------------

function creaSlug(testo) {

    return testo
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/['’]/g, "")
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");

}


// ------------------------------------------------------
// Generazione del link Hugo finale
// ------------------------------------------------------

if (sceltaSezione.principale) {


    tR +=

    `[${testoSelezionato}]({{< relref "/dizionario/${scelta.slug}/" >}})`;


}

else {


    let ancora =
        creaSlug(sceltaSezione.titolo);


    tR +=

    `[${testoSelezionato}]({{< relref "/dizionario/${scelta.slug}/" >}}#${ancora})`;

}
%>
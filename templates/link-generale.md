<%*

// ======================================================
// TEMPLATE TEMPLATER
// Link Hugo a Dizionario o Stelle
//
// Seleziona un testo
// → scegli la sezione del sito
// → scegli la voce
// → scegli pagina principale, sezione o sottosezione
//
// Genera automaticamente:
//
// {{< relref "/dizionario/..." >}}
// oppure
// {{< relref "/stelle/..." >}}
//
// ======================================================


// ------------------------------------------------------
// Scelta della sezione del sito
// ------------------------------------------------------

let sezione = await tp.system.suggester(
    ["Dizionario", "Stelle"],
    [
        {
            nome: "Dizionario",
            cartella: "content/dizionario",
            relref: "/dizionario"
        },
        {
            nome: "Stelle",
            cartella: "content/stelle",
            relref: "/stelle"
        }
    ]
);

if (!sezione) {
    tR += "Operazione annullata";
    return;
}


// ------------------------------------------------------
// Cerca la cartella scelta
// ------------------------------------------------------

let cartella =
    app.vault.getAbstractFileByPath(sezione.cartella);

if (!cartella) {

    tR += "Cartella non trovata";

    return;
}


// ------------------------------------------------------
// Estrae il titolo dal front matter
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

    if (!elemento.children)
        continue;

    let file =
        app.vault.getAbstractFileByPath(
            elemento.path + "/index.md"
        );

    if (!file)
        continue;

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
// Menu delle pagine
// ------------------------------------------------------

pagine.sort((a,b)=>a.nome.localeCompare(b.nome,"it"));

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
// Estrae sezioni e sottosezioni
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
// Menu gerarchico
// ------------------------------------------------------

let sezioni =
    estraiSezioni(scelta.contenuto);

sezioni.unshift({

    titolo: "Pagina principale",

    livello: 1,

    principale: true

});

let elencoSezioni =
    sezioni.map(s => {

        if (s.livello === 3)
            return "   └─ " + s.titolo;

        return s.titolo;

    });


// ------------------------------------------------------
// Selezione sezione
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
// Testo selezionato
// ------------------------------------------------------

let testoSelezionato =
    tp.file.selection();

if (!testoSelezionato) {

    tR += "ERRORE: nessun testo selezionato";

    return;

}


// ------------------------------------------------------
// Slug Hugo
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
// Link finale
// ------------------------------------------------------

if (sceltaSezione.principale) {

    tR +=
`[${testoSelezionato}]({{< relref "${sezione.relref}/${scelta.slug}/" >}})`;

}

else {

    let ancora =
        creaSlug(sceltaSezione.titolo);

    tR +=
`[${testoSelezionato}]({{< relref "${sezione.relref}/${scelta.slug}/" >}}#${ancora})`;

}

%>
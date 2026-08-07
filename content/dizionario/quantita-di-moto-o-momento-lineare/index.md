+++
title = "Quantità di moto (o momento lineare)"
date = "2026-07-26"
draft = false
+++

{{< katex />}}

## Etimologia e storia

Il termine italiano **quantità di moto** traduce alla lettera il latino *quantitas motus*, l'espressione con cui la grandezza fu introdotta nella fisica moderna. La denominazione alternativa **momento lineare** è invece un calco dall'inglese *linear momentum*, dove *momentum*, contrazione di *movimentum*, dal verbo *movēre*, indicava il movimento e la spinta.

Il concetto nasce con René Descartes, che nei *Principia philosophiae* (1644) definisce la *quantitas motus* come prodotto della "grandezza" di un corpo per la sua velocità e ne afferma la conservazione nell'universo. L'intuizione è corretta, la formulazione no: Descartes tratta la grandezza come uno *scalare*, tenendo conto della sola rapidità e non della direzione, e applicata agli urti la sua legge produce previsioni sbagliate. La correzione arriva negli anni Sessanta del Seicento con John Wallis e Christiaan Huygens, che riconoscono la quantità di moto come grandezza *orientata*. Newton la eredita già emendata e la colloca in posizione fondativa nei *Principia* (1687): la *Definizione II* la introduce come misura che nasce congiuntamente dalla velocità e dalla quantità di materia, e la seconda legge del moto è enunciata proprio come proporzionalità tra la forza impressa e la *variazione* di questa grandezza, non nella forma $F = ma$ dei manuali scolastici, ma in quella che vedremo nel prossimo paragrafo.

{{% box tipo="definizione" titolo="" %}} 
Il **momento lineare** è una grandezza fisica *vettoriale* che misura la **quantità di moto** posseduta da un corpo: quanto moto, cioè, quel corpo può trasferire ad altri corpi in un'interazione. Per un corpo puntiforme di massa $m$ che si muove con velocità $\vec{v}$, è definito come:

$$
\vec{p} = m\vec{v}
$$

Il senso della formula è che la quantità di moto è il prodotto della **massa** per la **velocità**. 
{{% /box %}}


## Unità di misura

Poiché il momento lineare è un vettore, ha la stessa direzione e lo stesso verso del vettore velocità, e le sue unità di misura nel Sistema Internazionale sono:

$$
\text{kg}\;\text{m}\;\text{s}^{-1}
$$

## Alcune avvertenze preliminari

Conviene chiarire subito un possibile equivoco: il momento lineare **non** misura la tendenza di un corpo a conservare il proprio stato di moto. Quella proprietà è l'*inerzia*, ed è misurata dalla sola massa. Il momento misura invece la quantità di moto effettivamente posseduta, ovvero ciò che negli urti passa da un corpo all'altro.

Un secondo avvertimento riguarda il nome. Esistono vari tipi di momento oltre quello lineare: il momento di una forza, il momento angolare, il momento d'inerzia, il momento di dipolo. Per evitare ambiguità, in questa voce la forma abbreviata _momento_, quando compare da sola, va sempre intesa come _momento lineare_; useremo la forma estesa o il sinonimo _quantità di moto_ ogni volta che il contesto potrebbe generare equivoci.

Infine, una precisazione sulla notazione. Negli esempi numerici seguenti i moti si svolgono sempre lungo un'unica direzione: useremo perciò i **moduli** dei vettori, o le loro componenti lungo l'asse del moto, scrivendoli senza freccia ($p$, $v$, $F$) e riservando la notazione vettoriale $(\vec{p}{,}\; \vec{v}{,}\; \vec{F})$ alle formule generali. Il segno algebrico indicherà il verso.

## Nelle collisioni il momento si trasferisce

In una collisione, il momento si *trasferisce* da un corpo all'altro. La legge che governa questo trasferimento è la seconda legge di Newton nella sua forma originaria: la forza applicata a un corpo è pari al *tasso di variazione* del suo momento lineare, cioè

$$
\vec{F} = \frac{d\vec{p}}{dt}
$$

in cui $d\vec p / dt$ indica la variazione istantanea del momento nel tempo. Quando la forza non è costante, e in un urto non lo è mai, è comodo lavorare con la *forza media* esercitata nell'intervallo $\Delta t$, che si ottiene sostituendo alla variazione istantanea la variazione finita:

$$
\vec{F}_{\text{media}} = \frac{\Delta\vec{p}}{\Delta t}
$$

in cui la lettera greca $\Delta$ (delta) indica la variazione del momento e del tempo.

## La nozione di impulso

Da questa relazione discende immediatamente la definizione di **impulso** $\vec{J}$, cioè *il prodotto della forza per il tempo* durante il quale essa agisce. L'impulso misura *quanto* momento una forza riesce a trasferire, e coincide per definizione con la variazione del momento subita dal corpo:

$$
\vec{J} = \vec{F}_{\text{media}}\,\Delta t = \Delta\vec{p}
$$

La formula ha una conseguenza pratica di enorme importanza, che è il tema del prossimo paragrafo: a parità di momento da azzerare, la forza in gioco è *inversamente proporzionale* al tempo impiegato ad azzerarlo.

## Un esempio pratico: un incidente stradale

Per capire l'importanza del *tempo* nel determinare il tasso di trasferimento del momento, possiamo fare l'esempio di un incidente stradale. Un conducente di $80\,\mathrm{kg}$ finisce contro un muro di cemento viaggiando a $30\,\mathrm{m/s}$ $(108\,\mathrm{km/h})$. La variazione di momento, in modulo, è:

$$
\Delta p = 80 \times 30 = 2\,400 \; \text{kg}\;\text{m}\;\text{s}^{-1}
$$

Contro una struttura rigida il tempo di arresto è brevissimo:

$$
\Delta t = 0{,}01 \, \text{s}
$$

Ne consegue un urto violentissimo, che sprigiona un'enorme forza media:

$$
F = \frac{2\,400}{0{,}01} = 240\,000 \; \text{N}
$$

Per farsi un'idea della potenza di un simile impatto, $240\,000$ newton corrispondono al peso di circa $24{,}5$ tonnellate. Ma il dato più eloquente è l'accelerazione (in questo caso una decelerazione) subita dal corpo:

$$
a = \frac{F}{m} = \frac{240\,000}{80} = 3\,000\;\text{m}\,\text{s}^{-2} \approx 306\,g
$$

cioè oltre *trecento* volte l'accelerazione di gravità terrestre: un valore a cui nessun organismo può sopravvivere. Poniamo ora il caso che l'urto contro il muro sia attutito da un grande airbag, che aumenta di dieci volte il tempo di arresto ($0{,}1$ secondi, invece di $0{,}01$):

$$
F = \frac{2\,400}{0{,}1} = 24\,000 \; \text{N}
$$

Si ottiene stavolta una forza pari al peso di $2{,}45$ tonnellate, corrispondente per un uomo di $80\,\mathrm{kg}$ a un'accelerazione di

$$
a = \frac{24\,000}{80} = 300\;\text{m}\,\text{s}^{-2} \approx 30{,}6\,g
$$

Trenta volte la gravità terrestre resta un valore elevatissimo, ma non necessariamente letale: nelle corse automobilistiche si sopravvive regolarmente a picchi di questa entità e a volte superiori. Va però chiarito che la sopravvivenza non dipende dall'allenamento del pilota, come si sente talvolta ripetere, bensì dalla *distribuzione del carico* sul corpo: cinture a sei punti, sedile avvolgente e vari dispositivi dedicati a produrre un assorbimento progressivo dell'impatto ripartiscono la forza su ampie superfici e su tempi ancora più lunghi, evitando che si concentri su punti fragili.

L'esempio dimostra che ciò che può essere fatale in un incidente stradale, o in qualsiasi altro tipo di incidente, è la *forza media* che agisce sul corpo, che dipende dalla *rapidità* con cui il momento lineare viene azzerato. Più breve è il tempo di arresto, maggiore è la forza generata, maggiore il danno subito. Ecco perché gli airbag salvano vite: allungano il tempo di arresto, riducendo la forza prodotta dall'azzeramento del momento lineare, o meglio dal trasferimento della quantità di moto dal corpo in movimento alla superficie colpita.

## In un sistema isolato il momento lineare totale si conserva

Una proprietà fondamentale del momento lineare è che, in un *sistema isolato*, non soggetto cioè a forze esterne, la quantità di moto *totale* del sistema **si conserva sempre**. Ciò vuol dire che in un'interazione tra due corpi la quantità di moto può essere scambiata fra l'uno e l'altro, ma la somma vettoriale resta immutata.

Occorre insistere sull'aggettivo *totale*: il momento lineare dei singoli corpi può benissimo azzerarsi. Due masse uguali che si scontrano frontalmente con velocità opposte e restano incastrate l'una nell'altra si fermano entrambe, e il momento lineare di ciascuna diventa zero. Ma il momento lineare *totale* era zero già prima dell'urto, ed è rimasto tale. Ciò che la legge di conservazione vieta non è che un corpo perda la propria quantità di moto, bensì che la quantità di moto complessiva di un sistema isolato cambi.

Per comprendere questa legge di natura, immaginiamo il caso di un fucile che spara un proiettile. Ai fini dell'esempio, consideriamo il sistema *proiettile + fucile* come isolato nell'istante dello sparo (trascuriamo per ora l'interazione con il corpo di chi spara e con il terreno). Prima dello sparo, tutto è fermo, sicché il momento lineare iniziale totale $\vec p_i$ è zero:

$$
\vec{p}_i = \vec{0}
$$

Lo sparo è generato dall'espansione dei gas di combustione della polvere, una forza *interna* al sistema che, per la **terza legge di Newton** (principio di azione e reazione), spinge il proiettile e il fucile con la stessa intensità, ma in *direzioni opposte*. Essendo una forza interna, non altera il momento lineare totale.

Detta $m$ la massa del proiettile, $\vec v$ la sua velocità di uscita dalla canna, $M$ la massa del fucile e $\vec V$ la sua velocità di rinculo, la conservazione del momento lineare impone:

$$
\vec{0} = m\vec{v} + M\vec{V}
$$

da cui deriva:

$$
\vec{V} = -\frac{m}{M}\,\vec{v}
$$

Il segno negativo indica che il fucile si muove in direzione opposta rispetto al proiettile.

## Un esempio pratico di conservazione del momento lineare

Per trasformare la formula in un esempio realistico, usiamo i valori tipici per un fucile di medio calibro:

- massa del proiettile: $m \approx 10\,\text{g} = 0{,}01\,\text{kg}$;
- velocità di uscita dalla canna: $v \approx 800\,\text{m/s}$;
- massa del fucile: $M \approx 4\,\text{kg}$.

La quantità di moto del proiettile è uguale a:

$$
p = mv = 0{,}01 \times 800 = 8\;\text{kg}\,\text{m}\,\text{s}^{-1}
$$

Applichiamo ora la formula per calcolare la velocità di rinculo del fucile, prendendo come positivo il verso di uscita del proiettile:

$$
V = -\frac{m}{M}\,v = -\frac{0{,}01}{4}\times 800 = -2\;\text{m/s}
$$

Otteniamo una velocità di rinculo di $2$ metri al secondo. Il segno meno indica, come sopra, che il verso della spinta è opposto al moto del proiettile. Verifichiamo ora che il momento lineare sia effettivamente conservato:

$$
mv + MV = (0{,}01)(800) + (4)(-2) = 8 - 8 = 0
$$

Dopo lo sparo la quantità di moto totale è *zero*, così come era zero prima dello sparo: la conservazione della quantità di moto è dimostrata.

Come accennato sopra, nei calcoli precedenti abbiamo trattato il sistema proiettile + fucile come isolato, per rendere l'esempio più immediato. Ma, nella realtà, il fucile è impugnato da una persona, i cui piedi sono a contatto con il terreno tramite attrito. Quando si imbraccia saldamente l'arma, il sistema che effettivamente assorbe il rinculo non è il fucile da solo, ma il fucile più il corpo di chi spara più, in ultima analisi, la Terra stessa, su cui poggiano i piedi o il corpo della persona.

Poiché la massa di questo sistema più ampio è molto maggiore di quella del solo fucile, la velocità di rinculo effettivamente percepita è inferiore a quella calcolata sopra. Il principio fisico, però, resta identico: la **conservazione del momento lineare** del sistema isolato proiettile + fucile (e tutto ciò che è rigidamente collegato a esso nell'istante dello sparo) è ciò che determina la relazione tra le due velocità, quella del proiettile e quella del rinculo.

## Differenze e relazioni tra quantità di moto ed energia cinetica

L'esempio dello sparo è utile anche per chiarire una confusione comune quando si parla di momento lineare. Un corpo in movimento possiede non solo una quantità di moto, ma anche **energia cinetica**, che è la capacità di compiere lavoro: per esempio di generare calore, suono, deformazione o distruzione nei corpi coinvolti in una collisione. Proprio a causa di queste trasformazioni, l'energia cinetica, a differenza della quantità di moto, in genere **non si conserva** in un urto. L'energia *totale* naturalmente si conserva sempre, ma una parte di quella cinetica si converte in altre forme e non è più disponibile come moto.

La formula per calcolare l'energia cinetica mette in gioco le stesse due grandezze, massa e velocità, ma con un peso molto diverso:

$$
E_k = \frac{1}{2}mv^2
$$

L'energia cinetica è proporzionale alla metà della massa, ma cresce con il **quadrato** della velocità, il che fa una differenza enorme. Nel Sistema Internazionale si misura in joule ($\text{J}$). Se partiamo dal momento lineare, abbiamo la formula equivalente:

$$
E_k = \frac{p^2}{2m}
$$

Quest'ultima relazione, valida in regime non relativistico[^1], è la chiave per interpretare i due esempi che seguono, perché dice una cosa tutt'altro che ovvia: *a parità di momento lineare, l'energia cinetica è inversamente proporzionale alla massa*. Uno stesso "slancio" costa pochissima energia a un corpo massiccio e lento, e moltissima a un corpo leggero e veloce.

Va anche detto, per evitare un errore frequente, che le due grandezze *non sono confrontabili direttamente tra loro*: hanno dimensioni fisiche diverse ($\text{kg}\,\text{m}\,\text{s}^{-1}$ contro $\text{kg}\,\text{m}^2\,\text{s}^{-2}$), e chiedersi se il momento lineare di un corpo sia "maggiore" della sua energia cinetica non ha più senso che chiedersi se un oggetto sia più lungo che pesante. Ciò che si può confrontare è la quantità di moto con un'altra quantità di moto, l'energia con un'altra energia, e soprattutto il *rapporto* fra le due in situazioni diverse. È esattamente ciò che faremo ora.

## A parità di momento, energie cinetiche molto diverse

Nell'esempio precedente il proiettile e il fucile hanno lo stesso momento lineare in modulo, $8\;\text{kg}\,\text{m}\,\text{s}^{-1}$, ma energie cinetiche molto differenti:

$$\begin{aligned}
E_{k,\text{proiettile}} &= \frac{1}{2}mv^2 = \frac{1}{2}(0{,}01)(800)^2 = 3\,200\,\text{J} \\
E_{k,\text{fucile}} &= \frac{1}{2}MV^2 = \frac{1}{2}(4)(2)^2 = 8\,\text{J}
\end{aligned}$$

Il rapporto è di $400$ a $1$, ed è esattamente il rapporto inverso fra le due masse ($4\,\text{kg}$ contro $0{,}01\,\text{kg}$), come prevede la formula $E_k = p^2/2m$.

La spinta impartita dal calcio del fucile, con i suoi $8\,\text{J}$ di energia cinetica, può dare alla spalla di chi preme il grilletto una "botta" chiaramente avvertibile, ma tutto sommato modesta, facile da assorbire. Viceversa, il proiettile, con la sua energia cinetica di $3\,200\,\text{J}$, può produrre danni devastanti in un essere vivente. Infatti, quell'energia cinetica si trasformerebbe istantaneamente in altre forme di **lavoro** dagli effetti potenzialmente letali, tra cui:

- **cavitazione temporanea.** L'energia cinetica compie il lavoro meccanico di lacerare i tessuti. L'onda d'urto generata dall'energia espande violentemente i tessuti circostanti creando una cavità temporanea enorme, che distrugge organi e strutture anche lontano dal piccolo foro di passaggio del proiettile;
- **frammentazione e deformazione**. Una parte dell'energia viene spesa per deformare il proiettile stesso (o per frantumarlo), aumentando la superficie d'impatto e massimizzando il rilascio di energia residua all'interno del bersaglio;
- **calore d'attrito.** Una frazione si trasforma istantaneamente in calore a causa dell'attrito fortissimo generato nel penetrare materiali solidi o semi-solidi.

È insomma l'energia cinetica la causa del *potere distruttivo* del proiettile, non la sua quantità di moto che, nel caso che abbiamo calcolato, potrebbe impartire solo una piccola spinta al corpo colpito, non certamente farlo volare via, come spesso si vede negli irrealistici film d'azione americani.

## Il caso opposto: momento grande, energia cinetica trascurabile

All'estremo opposto si collocano i corpi enormemente massicci e lentissimi, in cui la stessa formula lavora nell'altro verso. È il caso, per esempio, di un grande ghiacciaio che si muove di poche decine di metri all'anno.

Prendiamo un ghiacciaio alpino con una massa tipica di $10$ miliardi di tonnellate ($10^{13}\,\text{kg}$), che si sposta di circa $50$ metri all'anno, pari approssimativamente a $1{,}58 \times 10^{-6}\,\text{m/s}$. La quantità di moto è la seguente:

$$
p = mv = 10^{13} \times 1{,}58 \times 10^{-6} \approx 1{,}6 \times 10^7 \;\text{kg}\,\text{m}\,\text{s}^{-1}
$$

Sono circa $16$ milioni di $\text{kg}\,\text{m}\,\text{s}^{-1}$: un momento lineare paragonabile a quello di una nave da carico di alcune decine di migliaia di tonnellate che manovri all'ormeggio a una frazione di metro al secondo. L'energia cinetica del ghiacciaio è invece:

$$
E_k = \frac{1}{2}mv^2 = \frac{1}{2}\left(10^{13}\right)\left(1{,}58 \times 10^{-6}\right)^2 \approx 12{,}5\;\text{J}
$$

Poco più dell'energia cinetica del rinculo del fucile ($8\;\text{J}$), o di quella di un libro che cade da un tavolo. Il confronto è istruttivo se lo si tiene rigorosamente fra grandezze omogenee: *il ghiacciaio ha una quantità di moto due milioni di volte maggiore di quella del proiettile, ma un'energia cinetica duecentocinquanta volte minore*. La ragione sta tutta in $E_k = p^2/2m$: la massa mostruosa che rende grande il momento è la stessa che, comparendo al denominatore, rende minuscola l'energia.

In breve, nel determinare l'energia cinetica di un corpo la **velocità** conta molto più della **massa**; nel determinare il momento lineare, le due grandezze pesano allo stesso modo.

## La conservazione del momento lineare a velocità relativistiche

E, a proposito di velocità, un ultimo caso da considerare circa la conservazione del momento lineare è cosa accade quando un corpo si muove a **velocità relativistiche**, cioè prossime a quella della luce (quasi $300\,000\,\text{km/s}$).

Il momento lineare di un sistema isolato si conserva anche in queste condizioni estreme, ma, in base alla **relatività ristretta** di Einstein, la formula comunemente usata per calcolare il momento lineare a velocità "normali" viene modificata con l'introduzione del cosiddetto **fattore di Lorentz**[^2], indicato in fisica con la lettera greca $\gamma$ (gamma). Quindi la quantità di moto $p$ non è più il prodotto solo di massa per velocità, ma diventa:

$$
\vec p = \gamma \, m_0 \, \vec v
$$

in cui $m_0$ è la massa a riposo del corpo (detta anche massa invariante) e $\gamma$ corrisponde a:

$$
\gamma = \frac{1}{\sqrt{1 - v^2/c^2}}
$$

in cui $c$ è la velocità della luce. Se si svolgono i calcoli, si nota che alle *basse velocità* (per esempio quella di un'auto o di un aereo) il valore di $v$ è piccolissimo rispetto a $c$, quindi $\gamma \approx 1$. Ciò significa che $\gamma$ è *ininfluente* alle basse velocità, ragion per cui la formula per il calcolo del momento lineare torna a essere $p = m_0 v$, perfettamente equivalente a quella valida nella fisica classica.

La situazione cambia radicalmente quando ci avviciniamo alla velocità della luce. Prendiamo un protone accelerato al $99{,}999999\%$ della velocità della luce nel Large Hadron Collider (LHC) del CERN di Ginevra. Svolgendo i calcoli, otteniamo un fattore $\gamma \approx 7\,071$[^3]. Ciò significa che il momento lineare di quel protone è circa settemila volte maggiore di quello che si otterrebbe applicando *alla stessa velocità* la formula classica $p = m_0 v$. Gli enormi e potentissimi magneti installati lungo l'anello dell'LHC servono proprio a questo: a esercitare forze adeguate a mantenere confinate particelle dotate di una quantità di moto gigantesca.

Va precisato che, con l'aumentare di $\gamma$, ciò che cresce non è la *massa*. La massa $m_0$ è per definizione un invariante, uguale in ogni sistema di riferimento; a crescere senza limite all'avvicinarsi di $v$ a $c$ sono il **momento** e l'**energia**. Parlare di "massa che aumenta" è fuorviante anche per una ragione tecnica: la resistenza che un corpo relativistico oppone a essere accelerato non è la stessa lungo la direzione del moto e trasversalmente a essa, quindi non esiste alcuna singola grandezza che possa fungere da "massa inerziale" relativistica. Il limite della velocità della luce rimane in ogni caso irraggiungibile per qualsiasi corpo dotato di massa[^4].

## L'eccezione dei fotoni

Questo limite non vale, però, per i [fotoni]({{< relref "/dizionario/fotone/" >}}), i quanti di luce, che rappresentano un'eccezione alla regola. La massa dei fotoni è **esattamente nulla**, e *proprio per questo* essi viaggiano sempre alla velocità della luce: non esiste alcun sistema di riferimento in cui un fotone sia fermo, e non perché "non si fermi mai", ma perché una particella priva di massa non può muoversi ad altra velocità che $c$. Nonostante ciò, i fotoni trasportano momento lineare ed energia.

Dalla relatività ristretta e dalla meccanica quantistica deriva che la quantità di moto di un fotone di frequenza $\nu$ (o lunghezza d'onda $\lambda$) è:

$$
p = \frac{h\nu}{c} = \frac{h}{\lambda}
$$

dove $h$ è la costante di Planck e $c$ la velocità della luce. Ma da dove vengono queste uguaglianze? Il punto di partenza è la relazione:

$$
E = h\nu
$$

Fu introdotta da Max Planck nel 1900 per spiegare la radiazione di [corpo nero]({{< relref "/dizionario/corpo-nero/" >}}) e poi interpretata da Einstein come espressione del fatto che i fotoni sono quanti (pacchetti indivisibili) di radiazione, ognuno dotato di una sua caratteristica energia, dipendente dalla [frequenza]({{< relref "/dizionario/frequenza/" >}}).

Dalla relatività ristretta deriva poi la formula generale che lega energia, quantità di moto e massa:

$$
E^2 = (pc)^2 + (m_0c^2)^2
$$

Questa relazione è la generalizzazione relativistica dell'$E_k = p^2/2m$ che abbiamo incontrato sopra, e definisce la massa $m_0$ in modo perfettamente rigoroso anche per particelle che non sono mai in quiete. Per una particella di massa nulla come il fotone, il secondo termine si annulla e la formula generale diventa:

$$
E^2 = (pc)^2
$$

da cui deriva banalmente:

$$
E = pc
$$

Ne consegue che possiamo descrivere l'energia del fotone in modo equivalente come:

$$
E = h\nu \quad \text{e} \quad E = pc
$$

Da questa equivalenza deriva in modo diretto che:

$$
h\nu = pc
$$

Ma la frequenza $\nu$ è uguale alla velocità della luce $c$ diviso la lunghezza d'onda $\lambda$. Effettuando l'opportuna sostituzione, otteniamo:

$$
h\frac{c}{\lambda} = pc
$$

da cui si ricava la formula della quantità di moto del fotone:

$$
p = \frac{h}{\lambda}
$$

cioè la costante di Planck $h$ divisa per la lunghezza d'onda $\lambda$ del fotone. In modo simile, sempre dall'uguaglianza $h\nu = pc$, si ricava un'altra formula del tutto equivalente:

$$
p = \frac{h\nu}{c}
$$

## Calcoliamo il momento di un fotone

Passiamo ora a un esempio realistico, applicando quest'ultima formula per calcolare la quantità di moto di un fotone. Usiamo un fotone di luce verde, che ha una lunghezza d'onda intorno ai $550 \,\text{nm}$. Per prima cosa trasformiamo i nanometri in metri, che sono l'unità di misura della lunghezza nel calcolo del momento lineare:

$$
\lambda \approx 550 \,\text{nm} = 5{,}5 \times 10^{-7}\,\text{m}
$$

Poi ricaviamo la frequenza del fotone, dividendo la velocità della luce per la lunghezza d'onda del fotone:

$$
\nu = \frac{c}{\lambda}
= \frac{3{,}0 \times 10^{8}}{5{,}5 \times 10^{-7}}
\approx 5{,}45 \times 10^{14}\ \text{Hz}
$$

La costante di Planck $h$ vale:

$$
h \approx 6{,}626 \times 10^{-34} \;\text{J}\,\text{s}
$$

Abbiamo ora tutti i valori che ci servono per calcolare il momento lineare del fotone:

$$
p = \frac{(6{,}626 \times 10^{-34})(5{,}45 \times 10^{14})}{3{,}0 \times 10^{8}} \approx 1{,}2 \times 10^{-27}\;\text{kg}\,\text{m}\,\text{s}^{-1}
$$

Otteniamo un valore minuscolo, $27$ ordini di grandezza minore di un $\text{kg}\,\text{m}\,\text{s}^{-1}$ [^5]. Ma bisogna considerare il numero. L'energia di un singolo fotone verde è $E = h\nu \approx 3{,}6 \times 10^{-19}\,\text{J}$: ne consegue che una sorgente che irradiasse $100\,\text{W}$ interamente a $550\,\text{nm}$ emetterebbe circa $2{,}8 \times 10^{20}$ fotoni al secondo, un laser da $1\,\text{W}$ circa $2{,}8 \times 10^{18}$ e un modesto puntatore da $5\,\text{mW}$ ancora $1{,}4 \times 10^{16}$. Ciascuno di quegli innumerevoli fotoni porta con sé quella minuscola quantità di moto, e tutti insieme creano una spinta che, con opportuni strumenti, è possibile misurare.

## Rapporto tra frequenza, energia e quantità di moto dei fotoni

Un altro punto importante da tenere presente è che le formule che abbiamo usato fin qui evidenziano una proprietà fisica fondamentale: *aumentando la frequenza aumentano proporzionalmente sia l'energia sia la quantità di moto del fotone*.

Per esempio, un fotone ultravioletto ha una frequenza circa doppia di quella di un fotone visibile rosso; di conseguenza possiede circa il doppio dell'energia e il doppio del momento lineare. Questo è uno dei motivi per cui la pressione di radiazione esercitata da una sorgente luminosa dipende non solo dal *numero* di fotoni emessi, ma anche dalla loro *frequenza*.

## Il momento lineare in astronomia e astrofisica

La conservazione del momento lineare non è un principio confinato ai laboratori: è uno degli strumenti più usati per interpretare i fenomeni celesti, e vale la pena elencare almeno i casi principali.

### Pressione di radiazione

Poiché ogni fotone trasporta una quantità di moto, la luce esercita una spinta su qualunque superficie che la assorba o la rifletta. È questo il meccanismo che spazza via i grani di polvere dagli inviluppi delle stelle evolute, che modella la coda di polveri delle comete orientandola sempre in direzione opposta al Sole, e che consente la propulsione delle vele solari. Su scala stellare, l'equilibrio fra la quantità di moto trasferita dai fotoni verso l'esterno e l'attrazione gravitazionale verso l'interno definisce la [luminosità di Eddington]({{< relref "/dizionario/limite-di-eddington/" >}}), cioè la massima luminosità che una sorgente può avere senza disgregare gli strati che la circondano.

### Rinculo delle stelle di neutroni

L'esempio del fucile ha un analogo cosmico spettacolare. Molte pulsar si allontanano dal luogo in cui sono nate con velocità di centinaia di chilometri al secondo, molto superiori a quelle delle stelle progenitrici: sono i cosiddetti *natal kick*, impressi durante il collasso gravitazionale da un'espulsione asimmetrica di materia e neutrini. Il momento lineare è rigorosamente conservato, e la stella di neutroni rincula rispetto al materiale espulso esattamente come il fucile rincula rispetto al proiettile. Per una stella di neutroni di $1{,}4\,M_\odot$ $(\approx 2{,}8 \times 10^{30}\,\text{kg})$ che si allontani a $400\,\text{km/s}$:

$$
p = 2{,}8 \times 10^{30} \times 4 \times 10^{5} \approx 1{,}1 \times 10^{36}\;\text{kg}\,\text{m}\,\text{s}^{-1}
$$

Un momento lineare identico e di verso opposto deve essere stato impresso all'inviluppo espulso. Se questo ha una massa di circa $10\,M_\odot$ ($2 \times 10^{31}\,\text{kg}$), la componente asimmetrica della sua velocità dev'essere dell'ordine di $56\,\text{km/s}$: una modestissima anisotropia dell'esplosione basta a scagliare via la stella di neutroni.

### Propulsione a razzo

Lo stesso principio governa il moto di qualunque sonda spaziale. Un razzo accelera espellendo massa a grande velocità e acquistando un momento lineare uguale e contrario, e la relazione fra la velocità di scarico e la velocità finale raggiungibile è descritta dall'equazione di Tsiolkovsky.

### Fionda gravitazionale

Quando una sonda transita vicino a un pianeta, l'interazione gravitazionale reciproca le trasferisce una quantità di moto e la accelera rispetto al Sole. Non si tratta di energia gratuita: il momento lineare acquistato dalla sonda è sottratto al moto orbitale del pianeta, che rallenta di una quantità inversamente proporzionale alla propria massa e dunque al di sotto di qualsiasi possibilità di misurazione.

### Getti relativistici

Nei nuclei galattici attivi e nei microquasar, il flusso di momento lineare trasportato dai getti (materia espulsa a velocità prossime a $c$, dove la formula $p = \gamma m_0 v$ è pienamente in gioco) è il parametro che determina la loro penetrazione nel mezzo intergalattico e la capacità di scavare cavità nel gas caldo degli ammassi.

In conclusione, il momento lineare è un pilastro della fisica, un concetto unificante che va dalla meccanica classica di un semplice proiettile alla fisica quantistica della luce e alle alte energie del cosmo.

[^1]: La relazione $E_k = p^2/2m$ si ricava sostituendo $v = p/m$ nella formula $E_k = \frac{1}{2}mv^2$. Vale nel solo regime classico: a velocità relativistiche va sostituita dalla relazione generale $E^2 = (pc)^2 + (m_0c^2)^2$, introdotta più avanti in questa voce.

[^2]: Il fattore di Lorentz descrive in che modo intervalli di tempo e di spazio misurati su un corpo in moto si modificano rispetto a quelli misurati da un osservatore che vede il corpo muoversi: più la velocità si avvicina a $c$, più il tempo si dilata e le distanze si contraggono. È importante sottolineare che si tratta di relazioni *fra sistemi di riferimento*, non di proprietà intrinseche del corpo: nel proprio sistema di riferimento il corpo non misura alcuna dilatazione o contrazione.

[^3]: Per $v/c = 0{,}99999999$ si ha $1 - v^2/c^2 = (1 - v/c)(1 + v/c) \approx 2 \times 10^{-8}$, la cui radice quadrata vale circa $1{,}414 \times 10^{-4}$; il reciproco è $\gamma \approx 7\,071$. Una verifica indipendente: poiché l'energia totale è $E = \gamma m_0 c^2$ e la massa a riposo del protone equivale a $0{,}938\,\text{GeV}$, si ottiene $E \approx 6{,}6\,\text{TeV}$, in buon accordo con l'energia di fascio effettivamente raggiunta dall'LHC.

[^4]: Se si raggiungesse esattamente la velocità della luce ($v = c$), il denominatore della frazione con cui si calcola il fattore di Lorentz diventerebbe zero, quindi $\gamma$ tenderebbe all'infinito. Ecco perché nessun oggetto dotato di massa può raggiungere la velocità della luce: servirebbe un'energia infinita per spingerlo.

[^5]: Basta fare gli opportuni calcoli per verificare che si sarebbe ottenuto esattamente lo stesso risultato anche usando l'altra formula per il momento dei fotoni, cioè $p = h/\lambda$.
+++
title = "Albedo"
date = "2026-07-17"
draft = false
+++

{{< katex />}}

Il termine deriva dal latino *albedo*, "bianchezza", a sua volta derivato da *albus*, "bianco". Fu introdotto in astronomia da Johann Heinrich Lambert nel XVIII secolo.

{{% box tipo="definizione" titolo="" %}} 
L'**albedo** è il rapporto tra la quantità di radiazione elettromagnetica riflessa da un corpo celeste che non emette luce propria e la quantità di radiazione incidente sulla sua superficie o sulla sua atmosfera. Misura l'efficienza con cui un pianeta, un satellite, un asteroide, una cometa o un altro corpo celeste riflette la luce ricevuta, generalmente quella proveniente dalla propria stella.
{{% /box %}}

Dal punto di vista fisico, si tratta di una *grandezza adimensionale*: non possiede unità di misura perché è il rapporto tra due flussi radiativi espressi nella stessa unità. Si definisce come un valore decimale compreso tra $0$ e $1$ oppure in **percentuale** (da $0\%$ a $100\%$).

- Se l'albedo è $0\; (0\%)$, vuol dire che il corpo è un assorbitore perfetto, un "corpo nero" ideale, che non riflette alcuna luce.
- Se l'albedo è $1\; (100\%)$, vuol dire che il corpo è un riflettore perfetto che rimanda nello spazio tutta la luce che riceve.

Poiché il modo in cui la radiazione viene riflessa dipende dalla geometria di illuminazione e di osservazione, in astronomia si distinguono diversi tipi di albedo, di cui i più utilizzati sono i tre descritti di seguito.

## Albedo geometrica

Indicata solitamente con $p_V$, è il rapporto tra la luminosità apparente di un corpo celeste alla *fase zero*, cioè quando è completamente illuminato e osservato nella stessa direzione da cui proviene la luce incidente, e quella di un disco piano perfettamente riflettente (detto *disco di Lambert*) avente lo stesso raggio e posto alla stessa distanza.

È la misura più utilizzata in **fotometria astronomica**. È utile per stimare le dimensioni o la composizione superficiale di oggetti distanti come gli asteroidi o le comete. Calcolando l'albedo a diverse lunghezze d'onda (infrarosso, visibile, ultravioletto), gli scienziati possono dedurre la composizione chimica e la struttura della superficie del corpo osservato: se è rocciosa, ghiacciata, sabbiosa, o ricoperta di metalli.

L'albedo geometrica può assumere talvolta valori maggiori di $1$, poiché alcuni materiali o atmosfere diffondono la luce preferenzialmente nella direzione della sorgente luminosa (fenomeno di *backscattering*). Per esempio, l'albedo geometrica di Encelado nel visibile è circa $1,4$.

## Albedo sferica

Indicata con $A_{s}$, è detta anche **albedo integrale**. È la frazione della radiazione incidente che un corpo riflette complessivamente in tutte le direzioni. Viene definita in genere per una determinata lunghezza d'onda o banda fotometrica.

Albedo geometrica e sferica non sono due misure indipendenti: sono legate da un fattore di conversione chiamato **integrale di fase**, indicato con $q$. Mentre l'albedo geometrica, come abbiamo visto, cattura la luminosità del corpo in un'unica configurazione geometrica privilegiata (la fase "piena"), l'integrale di fase $q$ descrive come la luce riflessa da quel corpo si distribuisce nello spazio al variare dell'angolo di fase $\alpha$, cioè quanta luce esso diffonde in tutte le altre direzioni possibili. Il legame tra i tre concetti è il seguente:  

$$
A_s(\lambda) = p(\lambda) \times q(\lambda)
$$L'albedo sferica $A$s($\lambda$) è il prodotto dell'albedo geometrica per l'integrale di fase: un solo numero che rappresenta la *riflettività totale*, in tutte le direzioni, a una data lunghezza d'onda.

## Albedo di Bond

Indicata con $A$ o $A_B$, detta anche **albedo bolometrica**, è la media dell'albedo sferica pesata sulla distribuzione spettrale della radiazione incidente. Rappresenta la frazione di radiazione incidente che viene riflessa nello spazio, tenendo conto di *tutte le direzioni di riflessione e di tutte le lunghezze d'onda* dello spettro elettromagnetico[^1]. Detto diversamente, è la quantità totale di energia che un corpo riceve ma *non assorbe* ed è il parametro fondamentale per determinare l'equilibrio energetico e la temperatura di equilibrio dell'oggetto in questione. Un corpo celeste con albedo alta - come Venere, coperto da nubi bianche, o il satellite di Saturno Encelado coperto di ghiacci - riflette molta radiazione e si riscalda meno[^2]. Un corpo con bassa albedo, come la Luna o Mercurio, assorbe più radiazione e diventa molto più caldo.

Per riassumere le differenze, i tre concetti possono essere interpretati come tre livelli successivi:

- l'albedo **geometrica** descrive quanto appare brillante un corpo visto in opposizione;
- l'albedo **sferica** descrive quanta luce viene riflessa complessivamente in tutte le direzioni in una data lunghezza d'onda;
- l'albedo **di Bond** descrive quanta energia viene riflessa considerando l'intero spettro elettromagnetico.

Di seguito una tabella illustrativa con i valori approssimativi di albedo di Bond per alcuni corpi del Sistema Solare.

| Corpo celeste              | Albedo di Bond | Aspetto e Note                                                                                                                |
| -------------------------- | -------------: | ----------------------------------------------------------------------------------------------------------------------------- |
| Encelado (luna di Saturno) |           0.99 | Altissima; superficie di ghiaccio puro e fresco estremamente riflettente                                                      |
| Venere                     |           0.77 | Molto alta per via delle dense nubi di acido solforico molto riflettenti                                                      |
| Terra                      |           0.30 | Media; varia tra oceani scuri e nuvole o ghiacci chiari                                                                       |
| Luna                       |           0.11 | Bassa; superficie scura e polverosa (regolite)                                                                                |
| Mercurio                   |           0.09 | Molto bassa; rocce scure senza atmosfera                                                                                      |
| Nuclei cometari            |           0.04 | Estremamente bassa. Sono tra gli oggetti più scuri del sistema solare a causa dei composti organici complessi e delle polveri |
| Asteroidi di tipo C        |     ~0.03-0.06 | Estremamente bassa; composizione carbonacea con superfici scurissime                                                          |
## Come si separa la misura del diametro da quella dell'albedo

Date queste definizioni di albedo, sorge una domanda spontanea. Se si osserva al telescopio un corpo lontano che brilla di luce riflessa come un asteroide o un satellite di un pianeta esterno del Sistema Solare, tutto ciò che si vede è un puntino luminoso. Ricavando l'orbita e la distanza del corpo, possiamo determinare la sua magnitudine assoluta $H$, ma rimane pur sempre un puntino luminoso. Come possiamo sapere quanta parte del flusso di luce che riceviamo sulla Terra dipende dalla grandezza del corpo osservato e quanta parte dalla sua albedo? Potrebbe essere un oggetto grande e scuro, con un'albedo bassa, oppure un oggetto piccolo e molto riflettente, con un'albedo alta. La verità è che, conoscendo solo la sua magnitudine assoluta, non abbiamo modo di determinare né il diametro né l'albedo del corpo osservato. Come fanno dunque gli astronomi a risolvere il problema?

Esistono diversi metodi. Il più comune e potente è il **metodo radiometrico**, basato sulla misurazione dell'**emissione termica** del corpo osservato. Un asteroide o una cometa assorbono parte della radiazione solare incidente e la riemettono successivamente come radiazione termica nell'**infrarosso**. Con appositi telescopi si misura il flusso infrarosso, che dice quanto è "caldo" l'oggetto. Da questa informazione, si ottiene una stima indipendente del **diametro** (o dell'area emittente) del corpo osservato.

Una volta noto il diametro, si usa la magnitudine assoluta $H$, cioè la luminosità nel visibile, per calcolare l'albedo. La relazione matematica classica tra albedo geometrica $p_V$, diametro $D$ e magnitudine assoluta $H$ è la seguente:

$$
p_V \approx \left(\frac{1329}{D}\right)^2 \times 10^{-0.4H}
$$

o, riarrangiata per estrarre $D$:

$$
D \approx \frac{1329}{\sqrt{p_V}} \times 10^{-H/5} \quad (\text{con}\; D\; \text{in km})
$$

Questa formula è un'approssimazione classica; modelli più avanzati considerano anche la rotazione, la forma non sferica e le proprietà termiche della superficie.

Un progetto come NEOWISE, basato sulle osservazioni del telescopio spaziale a infrarossi WISE, ha misurato diametro e albedo di migliaia di asteroidi proprio con questo sistema[^3].

Il principio alla base del metodo è semplice:

- la luce riflessa dipende dall'albedo;
- il calore emesso dipende invece dall'energia assorbita.

Se un corpo riflette molta luce (cioè ha un'albedo elevata), assorbe poca energia e quindi emette meno nell'infrarosso. Se invece è scuro, assorbe più energia e diventa più caldo. Quindi, misurando contemporaneamente la luce visibile riflessa e la radiazione infrarossa emessa, si possono ricavare sia il diametro sia l'albedo.

Questo è il principio che usano i modelli termici come il **NEATM** (*Near-Earth Asteroid Thermal Model*), oggi largamente utilizzato nella caratterizzazione degli asteroidi cosiddetti *Near-Earth*, quelli che orbitano relativamente vicino alla Terra.

Un altro metodo efficace è quello delle **occultazioni stellari**. Quando un asteroide passa davanti a una stella, il tempo durante il quale la stella scompare permette di ricostruire con grande precisione il diametro (e spesso anche la forma) dell'asteroide. In genere vari osservatori distribuiti in diverse parti del mondo contribuiscono a rilevare forma e dimensioni esatte del corpo occultante. Una volta noto il diametro, la luminosità misurata fornisce direttamente l'albedo tramite la formula vista prima.

Per gli asteroidi che transitano relativamente vicini alla Terra, è possibile usare anche le **osservazioni radar**. Il tempo impiegato dall'eco radar e la sua distribuzione consentono di stimare dimensioni e forma del corpo, da cui si ottiene poi l'albedo. Grandi osservatori come quello di Arecibo (ormai fuori uso dal 2020) hanno permesso di ottenere dettagliate immagini radar di numerosi asteroidi, in grado di fornire preziose informazioni non solo sulla loro grandezza, ma anche sulla loro forma e rotazione.

{{< figura src="immagini/3200-phaeton.jpg" alt="Immagini radar dell'asteroide _near-Earth_ 3200 Phaethon." caption="Immagini radar dell'asteroide near-Earth 3200 Phaethon. Le osservazioni furono condotte ad Arecibo dal 15 al 19 dicembre 2017. Al momento del massimo avvicinamento, avvenuto il 16 dicembre alle 23:00 UTC, l'asteroide si trovava a una distanza di circa 10,3 milioni di chilometri, pari a circa 27 volte la distanza tra la Terra e la Luna. Questo incontro rappresenta il massimo avvicinamento dell'oggetto alla Terra da qui fino al 2093. Crediti: Arecibo Observatory/NASA/NSF" >}}

Il metodo che fornisce i risultati migliori in assoluto per calcolare l'albedo di un corpo celeste è ovviamente quello di **visitarlo direttamente** con una sonda spaziale. Ma è anche il metodo più costoso e difficile da applicare. Comunque sia, negli ultimi decenni diversi asteroidi e comete sono stati studiati in grande dettaglio da missioni quali Hayabusa, OSIRIS-REx, Dawn, Rosetta e altre ancora. Le immagini catturate hanno permesso di stimare i diametri di asteroidi come Ryugu, Bennu e altri con assoluta precisione. L'albedo è stata ricavata semplicemente confrontando la luminosità osservata con quella prevista per un corpo delle dimensioni misurate.

È possibile ricavare l'albedo anche di alcuni **esopianeti** che presentano una geometria orbitale favorevole per l'osservazione da Terra. Se, infatti, essi **transitano** davanti al disco della loro stella, si può dedurre il loro raggio dalla profondità e dalla durata del calo nella curva di luce della stella durante il transito. Successivamente, osservando la variazione di luce al termine del transito o, anche, la differenza di emissione termica durante l'eclissi secondaria, è possibile inferire l'albedo del pianeta.

## Il calcolo dell'albedo con la radiometria

In conclusione di questa voce, può essere utile aggiungere un approfondimento sulla differenza tra **albedo sferica** e **albedo di Bond** nel calcolo dei diametri degli asteroidi per mezzo della **radiometria**.

Innanzitutto, occorre precisare la differenza tra fotometria e radiometria. La fotometria risponde alla domanda: *quanto è luminoso questo corpo?* La radiometria, invece, risponde alla domanda: *quanta energia riceve, riflette, assorbe ed emette questo corpo?*

Mentre la fotometria misura la luminosità in una o più bande dello spettro (per esempio: banda $V$, banda $R$, banda $I$), la radiometria considera tutta la radiazione come **trasporto di energia**. Per ogni lunghezza d'onda esiste:

- un flusso incidente;
- una parte riflessa;
- una parte assorbita.

Quindi l'albedo diventa una funzione della lunghezza d'onda $\lambda$ (lambda):

$$
A_s(\lambda)
$$

Questa distinzione è importante perché una superficie *non riflette tutte le lunghezze d'onda allo stesso modo*. Ad esempio un pianeta potrebbe avere albedo differenti a seconda della regione dello spettro analizzata:

| Regione dello spettro | Albedo sferica | Note |
|---|---|---|
| Ultravioletto (UV) | 0.90 | Alta riflettività nell'UV |
| Visibile | 0.20 | Riflettività moderata nella luce visibile |
| Infrarosso vicino | 0.10 | Bassa riflettività nell'infrarosso |

Leggendo questa tabella viene naturale chiedersi quale sia l'albedo del pianeta. Beh, la domanda non ha una risposta univoca. Dipende dalla lunghezza d'onda.

Qui entra in gioco la stella che illumina il corpo di cui vorremmo ricavare l'albedo di Bond, cioè l'energia totale che riceve ma *non assorbe*. Le stelle non emettono la stessa quantità di energia in tutte le lunghezze d'onda. Il Sole, ad esempio, emette moltissima radiazione nel visibile (il che spiega anche perché i nostri occhi sono adattati a quel tipo di luce), emette meno nell'ultravioletto (UV), ma parecchio nel vicino infrarosso. Se ci limitassimo a fare una semplice media aritmetica dei valori nella tabella, otterremmo un risultato inaffidabile:

$$\frac{0,90+0,20+0,10}{3}=0,40$$

Un'albedo totale di $0,40$ non tiene conto del fatto che il Sole emette pochissima energia nell'UV. L'albedo sferica di $0,90$ nell'UV incide poco sul bilancio energetico reale, ma moltissimo sulla media aritmetica. Ecco perché in radiometria il calcolo dell'albedo di Bond si basa sulla **media pesata** dei valori suddivisi per lunghezze d'onda e non sulla media aritmetica.

Il concetto è che bisogna *pesare* ogni lunghezza d'onda con l'energia realmente emessa dal Sole in quella finestra dello spettro. La formula è la seguente:

$$
A_B=\frac{\displaystyle\int_0^\infty A_s(\lambda)\, F_\odot(\lambda)\, d\lambda}{\displaystyle\int_0^\infty F_\odot(\lambda)\, d\lambda}.
$$

In questa formula, $A_B$ è l'albedo di Bond, cioè un numero compreso tra $0$ e $1$. $A_s(\lambda)$ è l'albedo sferica alla lunghezza d'onda $\lambda$. Il suo significato fisico è "Se arriva energia proprio a questa lunghezza d'onda, quale frazione viene riflessa?" Si tratta di una funzione. Potrebbe essere, ad esempio:

$$
A_s(450\;\text{nm})=0,62\quad \text{o}\quad A_s(700\;\text{nm})=0,18
$$

$F_{\odot}(\lambda)$ è il flusso spettrale della stella. Esprime quanta energia arriva per ogni intervallo di lunghezza d'onda. L'unità tipica è:

$$
\mathrm{W\,m^{-2}\,\mu m^{-1}}
$$

oppure:

$$
\mathrm{W\,m^{-2}\,nm^{-1}}.
$$

Più grande è $F_{\odot}(\lambda)$ più quella lunghezza d'onda contribuisce al bilancio energetico. Il prodotto:

$$
A_s(\lambda)\, F_\odot(\lambda)
$$

ha un significato fisico intuitivo: è la potenza riflessa a quella data lunghezza d'onda. Per esempio, se sul corpo analizzato arrivano $100\;\text{W/m}^2$ nella banda del visibile e la relativa albedo vale $0,30$, vuol dire che per quel valore di $\lambda$ vengono riflessi $30\;\text{W/m}^2$.

L'integrale al **numeratore** somma tutta l'energia riflessa su tutte le lunghezze d'onda:

$$
\int A_s(\lambda) F_\odot(\lambda) d\lambda
$$

L'integrale al **denominatore** somma tutta l'energia incidente. È semplicemente la potenza totale ricevuta:

$$
\int F_\odot(\lambda) d\lambda.
$$

In conclusione, il rapporto che questa frazione esprime è:

$$
\frac{\text{energia riflessa}}{\text{energia incidente}},
$$

che è proprio la definizione di albedo di Bond.

L'analisi di questa formula ci rivela una proprietà sottile di questo parametro così importante in astronomia. L'albedo di Bond *non è una proprietà intrinseca* di un corpo celeste; non dipende unicamente dalle caratteristiche fisiche della sua superficie o della sua atmosfera. Dipende invece anche dallo **spettro della radiazione incidente**. Un pianeta con la stessa struttura superficiale potrebbe avere un valore leggermente diverso di albedo di Bond, se orbitasse attorno a una stella più fredda o più calda del Sole, perché la distribuzione di energia $F_{\odot}(\lambda)$ cambierebbe e modificherebbe il peso relativo delle varie regioni dello spettro. Questo è uno dei motivi per cui, nello studio degli esopianeti, l'albedo di Bond è strettamente legata sia alle proprietà della superficie o dell'atmosfera del pianeta sia al *tipo spettrale* della stella ospite.



[^1]: Nella letteratura astronomica molti autori usano i termini *albedo sferica* e *albedo di Bond* come sinonimi, sottintendendo direttamente la definizione bolometrica. Altri, soprattutto nei trattamenti radiometrici, distinguono invece l'albedo sferica (di solito riferita a una specifica lunghezza d'onda) dall'albedo di Bond, ottenuta come media spettrale dell'albedo sferica. In questo dizionario ci atterremo a questa seconda convenzione.

[^2]: Tuttavia, la temperatura superficiale effettiva dipende anche da altri fattori, come l'effetto serra: Venere, nonostante la sua alta albedo, è il pianeta più caldo del Sistema Solare proprio per la sua densa atmosfera, che intrappola la radiazione solare.

[^3]: Il numero **1329** che compare nelle due formule riportate non è un numero magico, ma semplicemente un coefficiente di conversione che nasce dalla combinazione di diversi parametri: 1) la definizione di magnitudine assoluta $H$ degli asteroidi; 2) la legge dell'inverso del quadrato della distanza; 3) la luminosità del Sole nel filtro $V$ ($m_{\odot,V} \approx -26.76$); 4) il fatto che il diametro $D$ è espresso in chilometri; 5) il fatto che l'albedo geometrica $p_V$ è riferita alla banda fotometrica $V$.
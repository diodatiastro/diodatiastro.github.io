+++
title = "Fotosfera"
date = "2026-07-23"
draft = false
+++

{{< katex />}}

## Etimologia e definizione

La *fotosfera* (dal greco *φῶς*, *phōs*, «luce», e *σφαῖρα*, *sphaira*, «sfera») è la regione più interna dell'atmosfera stellare e quella dalla quale proviene la quasi totalità della luce e della radiazione termica emessa da un astro. Per questa particolarità, rappresenta la **superficie visibile** di una stella, anche se non si tratta di una superficie in senso stretto, ma di uno strato fluido, essendo le stelle costituite di plasma.

## Lo scattering e la profondità ottica

Per capire perché la luce stellare proviene proprio dalla fotosfera, bisogna introdurre il concetto di **profondità ottica**, indicato in astrofisica con la lettera greca $\tau$ (tau).

Partiamo dal fatto che, all'interno di una stella, la materia è tanto più densa e calda quanto più ci si avvicina al nucleo. I [fotoni]({{< relref "/dizionario/fotone/" >}}) (i "pacchetti" di radiazione) prodotti dalle reazioni di fusione nucleare non viaggiano liberamente. Al contrario, interagiscono di continuo con le particelle cariche (elettroni, protoni, ioni) che incontrano sul loro cammino e vengono deviati, assorbiti e riemessi altrettanto di continuo. Questo processo si chiama **scattering**.

Per essere più precisi, nel nucleo, le reazioni di fusione nucleare producono fotoni ad altissima energia (**raggi gamma**), ma questi, interagendo con la materia circostante, vengono rapidamente assorbiti e riemessi innumerevoli volte, trasferendo progressivamente la loro energia al plasma. A causa di questo processo di **termalizzazione**, l'energia originaria della fusione si trasforma in un flusso di fotoni con uno spettro che, alla fotosfera, corrisponde a quello di un corpo nero a circa $5.700\; \mathrm{K}$.

In pratica, all'interno del Sole o di un altra stella, un fotone *non* viaggia in linea retta dal nucleo alla superficie. Fa un percorso a zig-zag, rimbalzando da una particella all'altra, come un ubriaco che tenta di uscire da un bar affollato. Possono volerci migliaia di anni, o addirittura milioni secondo alcuni calcoli, perché un fotone prodotto nel nucleo riesca a farsi strada fino alla superficie stellare. In realtà non è mai lo *stesso* fotone a compiere l'intero viaggio: è l'energia che, attraverso continui assorbimenti e riemissioni, si trasferisce gradualmente verso l'esterno, emergendo infine come luce visibile a energie molto inferiori rispetto ai raggi gamma originari.

Questa lentissima avanzata verso l'esterno dipende dal gradiente di densità di una stella. Nelle regioni profonde del Sole, dove la densità è altissima, il **cammino libero medio**, cioè la distanza media che un fotone percorre tra uno scattering e il successivo, è piccolissimo, nell'ordine delle frazioni di millimetro.

A mano a mano che si sale verso la superficie, la densità della materia diminuisce e il cammino libero medio aumenta proporzionalmente. A un certo punto, esso diventa *maggiore* dello spessore rimanente dell'atmosfera, cioè della distanza che manca per uscire completamente dalla stella. Ci sarà un punto in cui un fotone compie *l'ultimo scattering* (l'ultimo urto con una particella di materia stellare), dopo di ché sarà libero di fuggire verso l'esterno e di raggiungere, per esempio, un telescopio sulla Terra come luce visibile, portando con sé molte informazioni sulla natura fisica e chimica dell'ultima materia stellare con cui ha interagito.

La profondità ottica $\tau$ è una misura di quanti scattering in media subisce un fotone prima di uscire da una stella. In altre parole è una misura dell'**opacità stellare**. Un valore di $\tau = 0$ indica la **trasparenza** completa: significa che nessuna interazione residua impedisce al fotone di uscire dalla stella. Al contrario, una valore di $\tau$ molto maggiore di $1$ significa **opacità totale**: la materia stellare è così densa da non consentire alla luce di uscire all'esterno.

In termini più rigorosi, la profondità ottica è definita come l'integrale del coefficiente di assorbimento $\kappa_{\lambda}$​ lungo la linea di vista:

$$ \tau_\lambda = \int_0^s \kappa_\lambda \rho \, ds' $$

dove $\rho$ è la densità della materia, $ds′$ è l'elemento di percorso lungo il raggio di luce e $\kappa_{\lambda}$ è il coefficiente di opacità, che misura l'efficienza con cui il gas assorbe o diffonde la radiazione a una data lunghezza d'onda $\lambda$. Un valore di $\tau$ alto significa che, lungo quel percorso, i fotoni incontrano molte particelle che li assorbono o diffondono.

Questa definizione formale mette in luce un aspetto cruciale: la profondità ottica **dipende dalla lunghezza d'onda** $\lambda$ della radiazione. Un gas stellare può essere opaco (ovvero avere $\tau \gg 1$) per una certa lunghezza d'onda e trasparente (con $\tau \approx 0$) per un'altra. Ciò significa che, osservando una stella a diverse frequenze, si "vedono" strati atmosferici a profondità diverse. Questa proprietà è alla base di effetti come l'[oscuramento al bordo]({{< relref "/dizionario/fotosfera/" >}}#oscuramento-al-bordo-limb-darkening) (_limb darkening_), più marcato nel blu che nel rosso, e dello studio delle righe di assorbimento.

## Definizione convenzionale di fotosfera

La fotosfera è convenzionalmente definita come il luogo in cui la profondità ottica nella banda visibile è $\tau ≈ 2/3$. Questo è il livello in cui si calcola il **raggio stellare** e da cui proviene il flusso radiativo che determina la **temperatura efficace** della stella ($T_\text{eff}$), calcolata seconda la legge di Stefan-Boltzmann:

$$L = 4\pi R^2 \sigma T^4_{eff}$$

Ma perché proprio $2/3$ e non, per esempio, $1$? Se $\tau = 1$, la probabilità che un fotone riesca a uscire dall'atmosfera senza essere assorbito è data dal fattore di trasmissione:

$$e^{-1}$$

in cui $e$ è il numero di Nepero $\approx 2{,}718$. Elevando a potenza, otteniamo $\approx 0{,}3679$. Significa che a una profondità ottica $\tau = 1$ circa il $37\%$ dei fotoni avrebbe probabilità di uscire dalla stella e il $63\%$ no. Usando, invece, $\tau \approx 2/3$, abbiamo:

$$e^{-2/3} \approx 0{,}5134$$

## Il miglior compromesso tra densità e opacità

In questo caso, la probabilità che un fotone si liberi e fugga verso l'esterno sale a circa il $51\%$. Ma perché, allora, non usare $\tau = 0$ per definire il confine della fotosfera, visto che lì la trasparenza è completa? La ragione risiede nella scelta del miglior **compromesso** tra densità e opacità. Nel luogo dell'atmosfera stellare dove $\tau = 0$ ci sono troppo pochi fotoni per avere un'emissione di radiazione significativa. Alla profondità ottica di $\tau\approx 2/3$ abbiamo invece il miglior rapporto possibile tra la probabilità che la radiazione sfugga all'esterno e la densità di fotoni presenti.

In sintesi, la profondità ottica è la grandezza che determina dove si trova, in senso fisico, la «superficie» di una stella: è il livello in cui il plasma passa dall'essere opaco all'essere trasparente. La fotosfera, pertanto, è lo strato di una stella che fa da confine tra i livelli interni, opachi alla radiazione, e gli strati più esterni dell'atmosfera stellare, poco densi e trasparenti alla radiazione.

## La fotosfera solare

Il Sole, essendo di gran lunga la stella più vicina alla Terra e l'unica di cui possiamo osservare la superficie con grandissimo dettaglio, è la palestra di studio ideale per analizzare la struttura della fotosfera.

Questo strato fondamentale dell'atmosfera è estremamente sottile nella nostra stella. Ha una **profondità** di non più di $400-500\;\mathrm{km}$, una frazione di poco superiore allo $0{,}07\%$ del raggio solare, che è di circa $696.000\;\mathrm{km}$. Il passaggio dalla zona di opacità a quella di trasparenza avviene, dunque, in modo netto in uno spazio ridottissimo rispetto alla grandezza totale della stella.

Un altro dato notevole è che la **densità** della fotosfera solare è bassissima rispetto a quella dell'atmosfera terrestre. I valori tipici sono riportati nella seguente tabella.

### Densità della fotosfera solare

| Regione | Densità $(\mathrm{kg/m^3})$ |
| --- | --- |
| Base della fotosfera | $0{,}0003$ |
| Livello $\tau = 2/3$ | $0{,}0002$ |
| Sommità della fotosfera | $0{,}000001$ |
| Atmosfera terrestre (livello del mare) | $1{,}225$ |

## Perché un mezzo così rarefatto è opaco

La base della fotosfera solare è circa $4.000$ volte più rarefatta dell'atmosfera terrestre. La sommità è addirittura $1{,}2$ milioni di volte più rarefatta. Viene naturale chiedersi come sia possibile che la fotosfera solare sia in parte opaca alla radiazione con una densità così bassa. La risposta sta nel fatto che il cammino libero medio dei fotoni non dipende soltanto dalla densità del gas, ma anche dalla sua composizione e dalle interazioni radiative. Nella fotosfera, gli ioni, e soprattutto gli ioni idrogeno negativi $(H^−)$, assorbono e diffondono la luce visibile in modo molto efficiente, rendendo opaco un gas che, in termini di densità, sarebbe considerato un vuoto quasi perfetto secondo gli standard terrestri. La "superficie" del Sole è costituita, dunque, da un plasma che è *migliaia di volte meno denso dell'aria che respiriamo*, ma che risulta comunque sufficientemente opaco da impedire di vedere gli strati più profondi della stella.

{{< figura 
src="immagini/fotosfera-solare.jpg" 
alt="Immagine totale della fotosfera solare. Sono visibili vari gruppi di macchie solari." 
caption="Immagine totale della fotosfera solare acquisita dal satellite SOHO (Solar and Heliospheric Observatory satellite) della NASA nel 2003. Sono visibili vari gruppi di macchie solari. Si apprezza inoltre il fenomeno dell'oscuramento al bordo, discusso più sotto"
>}}

## Caratteristiche della fotosfera solare

La fotosfera del Sole ha diverse caratteristiche di rilievo dal punto di vista astrofisico. Eccone un breve elenco.

### Temperatura

Alla base della fotosfera la temperatura è di circa $6.600\,\mathrm{K}$. Scende rapidamente intorno a $4.400\,\mathrm{K}$ alla sommità, cioè $500\,\mathrm{km}$ più in alto. La temperatura efficace del Sole $T_\text{eff}$, calcolata alla profondità ottica $\tau \approx 2/3$, è di circa $5.770\,\mathrm{K}$ (con alcune fonti che riportano $5.772\,\mathrm{K}$, altre $5.777\,\mathrm{K}$ e altre ancora $5.778\,\mathrm{K}$).

### Granulazione

La fotosfera appare coperta da celle convettive dette *granuli*, larghe tipicamente $1000-2000\,\mathrm{km}$, con vita media di $8–10$ minuti. Ciascun granulo corrisponde a una cella di convezione: il plasma caldo risale dall'interno della stella verso il centro del granulo, si espande, si raffredda irradiando energia e ridiscende lungo i bordi, che appaiono pertanto più scuri.

{{< figura 
src="immagini/granulazione.jpg" 
alt="Immagine ad altissima risoluzione di granuli sulla fotosfera solare ripresa dal Daniel K. Inouye Solar Telescope." 
caption="Immagine ad altissima risoluzione di granuli sulla fotosfera solare ripresa dal Daniel K. Inouye Solar Telescope alla lunghezza d'onda di $789\,\mathrm{nm}$. L'immagine copre un'area di $36.500 \times 36.500\,\mathrm{km}$. Ogni lato è circa tre volte il diametro della Terra. Crediti: NSO/NSF/AURA"
>}}

### Supergranulazione
Consiste in una rete di celle convettive molto più grandi, con diametro di $20.000\; -\; 40.000\,\mathrm{km}$ ognuna, la cui durata totale è di circa uno o due giorni. Il fenomeno fu scoperto negli anni Cinquanta grazie a misure dell'effetto Doppler sulla superficie solare. Benché il meccanismo non sia ancora pienamente compreso, si ritiene che la supergranulazione sia fondamentale per il trasporto del plasma e per l'organizzazione del campo magnetico sulla superficie del Sole.

### Macchie solari
Sono regioni più fredde della fotosfera circostante, con temperatura media di circa $3.500\; -\; 4.500\,\mathrm{K}$. La loro minore luminosità è dovuta alla minore temperatura, che a sua volta dipende dalla presenza di intensi [campi magnetici]({{< relref "/dizionario/campo-magnetico/" >}}) locali che inibiscono il trasporto convettivo di [energia]({{< relref "/dizionario/energia/" >}}). La loro apparizione e scomparsa sulla fotosfera è soggetta a un ciclo di undici anni.

### Facole
Sono regioni relativamente brillanti, associate a concentrazioni intense di campo magnetico. Appaiono come aree più luminose rispetto alla fotosfera circostante e sono spesso osservate in prossimità delle macchie solari, anche se possono esistere indipendentemente da esse. Sono particolarmente evidenti vicino al bordo del disco solare (il cosiddetto *limbo*), dove la geometria della visione permette di osservare meglio il contrasto tra le facole e la fotosfera circostante. 

Queste strutture hanno dimensioni tipiche di alcune migliaia fino a decine di migliaia di chilometri e possono persistere per giorni o settimane. Sono prodotte da intensi campi magnetici concentrati in sottili tubi di flusso magnetico immersi nel plasma fotosferico. Poiché il plasma nei tubi è meno denso, diventa più trasparente e l'osservatore può vedere strati leggermente più profondi e più caldi della fotosfera. Questo fa apparire la regione più luminosa rispetto all'ambiente circostante. Insomma, le facole non brillano di più perché producono più energia, ma perché permettono di osservare regioni più calde dell'atmosfera solare.

{{< figura 
src="immagini/faculae.jpg" 
alt="Facole (latino faculae) sulla fotosfera solare." 
caption="Facole (latino *faculae*) sulla fotosfera solare. Crediti: Pete Lawrence"
>}}

### Oscuramento al bordo (*limb darkening*)

La fotosfera appare più brillante al centro del disco solare e progressivamente più scura verso il bordo. Questo effetto riflette la sua struttura **tridimensionale**: quando si osserva il centro del disco si guardano strati più profondi e più caldi, mentre verso il bordo la linea di vista, quasi tangenziale alla superficie solare, attraversa solo strati superficiali più freddi e meno luminosi. L'effetto è più marcato nel blu che nel rosso, perché la maggiore opacità della fotosfera alle lunghezze d'onda corte fa sì che già a inclinazioni intermedie si vedano esclusivamente gli strati alti e freddi. Con le dovute differenze di meccanismi fisici sottostanti, l'oscuramento al bordo della fotosfera è paragonabile all'arrossamento dell'atmosfera terrestre al tramonto, dovuto al fatto che la luce solare attraversa uno spessore maggiore di atmosfera lungo una linea di vista obliqua.

## La fotosfera di stelle diverse dal Sole

Lo studio della fotosfera di stelle diverse dal Sole è ovviamente molto più complicato, perché anche i telescopi più potenti vedono le altre stelle semplicemente come puntini luminosi sfocati. Non sono in grado di risolvere otticamente i dischi stellari e osservarne le caratteristiche, se non con qualche rarissima eccezione. Il telescopio spaziale Hubble, per esempio, riuscì nel 1995 a osservare direttamente alcune caratteristiche fisiche della fotosfera della supergigante rossa Betelgeuse. Negli ultimi decenni, poi, diverse stelle sono state risolte a livello di disco usando la tecnica dell'interferometria, che combina il potere risolutivo di più telescopi, riuscendo a raggiungere risoluzioni altissime, nell'ordine dei millesimi di secondo d'arco. Tuttavia, le immagini ottenute con l'interferometria sono più grafici che immagini in senso stretto e non possono fornire la ricchezza di dettagli che la vicinanza del Sole ci permette di ottenere.

{{< figura 
src="immagini/betelgeuse.jpg" 
alt="La prima immagine diretta della superficie di una stella diversa dal Sole, la supergigante rossa Betelgeuse. Fu ripresa dal telescopio spaziale Hubble nel 1995." 
caption="La prima immagine diretta della superficie di una stella diversa dal Sole, la supergigante rossa Betelgeuse. Fu ripresa dal telescopio spaziale Hubble nel 1995. L'immagine rivela un'atmosfera asimmetrica e una struttura enorme e molto brillante al di sotto del centro della stella, probabilmente una cella di convezione estesa per milioni di km. Crediti: A. Dupree (CfA), R. Gilliland (STScI), FOC, HST, NASA."
>}}

## Spettroscopia e righe di Fraunhofer

Ciò premesso, lo studio delle fotosfere stellari è comunque possibile ed è anzi in grado di fornire agli astronomi un'immensa quantità di informazioni. Lo strumento adoperato a tal fine è la spettroscopia, in particolare lo studio delle **righe di assorbimento** negli spettri delle stelle osservate, come le **righe di Fraunhofer**, che prendono il nome dal fisico tedesco Joseph von Fraunhofer (1787-1826).

Nel 1814 questi mappò sistematicamente oltre $570$ righe scure nello spettro solare e le denominò con lettere maiuscole ($A$, $B$, $C$, $D$, $E$, $F$, $G$, $H$, $K$, ecc.). Ci vollero altri $45$ anni perché Gustav Kirchhoff riuscisse a comprendere che erano dovute all'assorbimento da parte di elementi presenti nell'atmosfera solare, confrontandole con righe di emissione prodotte in laboratorio (es. la riga $D$ del sodio).

Le righe di Fraunhofer sono osservabili prevalentemente nel visibile e nel vicino ultravioletto e si producono quando la radiazione proveniente dagli strati inferiori e più caldi della fotosfera attraversa gli strati superiori, più freddi e meno densi, dove alcuni elementi chimici (idrogeno, calcio, ferro, sodio, magnesio, ecc.) [assorbono selettivamente fotoni a specifiche lunghezze d'onda]({{< relref "/dizionario/fotoionizzazione/" >}}). Ogni riga corrisponde a una transizione elettronica tra livelli energetici discreti di un particolare atomo o ione. Poniamo ad esempio che degli atomi di calcio nella fotosfera abbiano assorbito fotoni di una precisa lunghezza d'onda. Gli atomi di calcio si eccitano e passano a un livello energetico superiore. I fotoni assorbiti vengono poi riemessi in tutte le direzioni (scattering isotropo), ma *non più nella direzione originale verso l'osservatore*. Si crea così una "voragine" nel continuo dello spettro osservato: la riga scura osservata da Fraunhofer.

{{< figura 
src="immagini/righe-di-fraunhofer.png" 
alt="Righe di Fraunhofer nello spettro solare." 
caption="Righe di Fraunhofer nello spettro solare. Tutte le righe rappresentano transizioni atomiche, tranne la riga $G$ attorno a $430–431\,\mathrm{nm}$, che è in realtà una banda molecolare dominata dal radicale $CH$, ma con contributi anche da righe del ferro ($Fe \,I$) e del titanio ($Ti\, II$)."
>}}

Le righe di assorbimento e, in alcuni casi, le **righe di emissione** consentono di determinare numerose proprietà fisiche della **fotosfera stellare** e degli strati immediatamente superiori dell'atmosfera di una stella. Le informazioni ottenibili derivano dalla posizione, dall'intensità, dalla larghezza e dalla forma delle righe spettrali.

## Proprietà fotosferiche stimabili attraverso la spettroscopia

Tra le proprietà della fotosfera che possono essere stimate tramite l'analisi spettroscopica vi sono:

- **Temperatura effettiva**. La temperatura influenza il grado di eccitazione e ionizzazione degli atomi. L'intensità relativa delle diverse righe permette quindi di determinare la temperatura della fotosfera. Ad esempio, le righe dell'idrogeno raggiungono la massima intensità nelle stelle di tipo A, mentre nelle stelle più fredde predominano righe di atomi neutri e bande molecolari.

- **Composizione chimica**. Ogni elemento chimico produce righe a lunghezze d'onda caratteristiche. L'identificazione e la misura dell'intensità delle righe consentono di determinare quali elementi sono presenti nella fotosfera e in quali proporzioni. In questo modo si ricavano le abbondanze chimiche e la metallicità della stella osservata.

- **Gravità superficiale**. La gravità superficiale influenza la pressione del gas fotosferico. Una pressione maggiore provoca un allargamento delle righe per effetto delle collisioni tra particelle. Dalla larghezza e dalla forma di determinate righe si può quindi stimare il parametro $g$ (indicatore della gravità superficiale), distinguendo ad esempio una nana da una gigante o da una supergigante.

- **Densità e pressione del gas**. La densità delle particelle nella fotosfera genera un allargamento caratteristico delle righe spettrali, ragion per cui l'analisi dettagliata dei profili spettrali permette di stimare la pressione e la densità degli strati in cui le righe si formano. Ad esempio, le righe di assorbimento di una stella nana sono più larghe di quelle di una gigante con la stessa temperatura, perché la pressione e la densità fotosferica di una nana sono nettamente maggiori di quelle di una gigante.

- **Velocità di rotazione**. La rotazione di una stella produce un allargamento delle righe dovuto all'effetto Doppler. Da tale effetto si ricava il parametro $v \sin i$, che fornisce la velocità equatoriale della stella proiettata lungo la linea di vista dell'osservatore.

- **Turbolenza e moti convettivi**. La forma delle righe contiene informazioni sui movimenti del plasma fotosferico. Fenomeni come la granulazione, la convezione e la turbolenza producono ulteriori allargamenti o asimmetrie nei profili delle righe.

- **Campi magnetici**. Campi magnetici sufficientemente intensi provocano la scissione delle righe attraverso un fenomeno denominato *effetto Zeeman*. L'analisi di tale effetto consente di stimare l'intensità e la distribuzione dei campi magnetici presenti nella fotosfera. Alcune righe particolarmente sensibili, come le righe $H$ e $K$ del calcio ionizzato, permettono di valutare il livello di attività magnetica di una stella e la presenza di regioni attive, facole e fenomeni analoghi.

- **Velocità radiale**. Lo spostamento globale delle righe rispetto alle loro lunghezze d'onda di laboratorio rivela il moto della stella lungo la linea di vista mediante l'effetto Doppler.

Una volta ottenuti i dati su temperatura, gravità superficiale e composizione chimica, tali parametri possono essere combinati con osservazioni fotometriche e modelli di evoluzione stellare per stimare altre grandezze stellari fondamentali quali **massa**, **raggio**, **luminosità** ed **età**.

{{< figura 
src="immagini/eso1741a.jpg" 
alt="immagine diretta della fotosfera di una stella diversa dal Sole, la gigante rossa $\pi^1$ Gruis. Questa gigante dista $530$ anni luce dalla Terra ed è circa $350$ volte più grande del Sole." 
caption="Un'altra immagine diretta della fotosfera di una stella diversa dal Sole, la gigante rossa $\pi^1$ Gruis. Questa gigante dista $530$ anni luce dalla Terra ed è circa $350$ volte più grande del Sole. L'immagine è stata acquisita con lo strumento PIONIER del Very Large Telescope dell'ESO in Cile e mostra la presenza sulla superficie stellare di enormi celle di convezione. Ognuna di queste celle copre circa un quarto del diametro stellare e misura intorno a $120$ milioni di $\mathrm{km}$. Crediti: ESO"
>}}

## Differenze fotosferiche in base al tipo di stella

In linea generale, per **qualsiasi stella**, la fotosfera è definita in modo analogo al Sole, come il livello atmosferico da cui emerge la radiazione visibile (o nella banda spettrale di interesse). Le proprietà quantitative, tuttavia, variano enormemente in funzione della massa, dell'età e della composizione chimica:

### Stelle di sequenza principale

**Stelle calde e massicce** di tipo O, B: hanno fotosfere con temperature $>\; 30.000\,\mathrm{K}$, densità molto basse (gas rarefatto) ma pressioni elevate per via dell'altissima temperatura, spesso paragonabili o superiori a quella della fotosfera solare.

**Stelle come il Sole** (tipo G): $T\sim 5.000 - 6.000\,\mathrm{K}$, densità e pressione paragonabili a quelle del Sole.

**Stelle fredde rosse** di tipo M: hanno $T\sim 2.500 - 3.500\,\mathrm{K}$ e fotosfere più estese e dense, spesso con molecole stabili come l'ossido di titanio (TiO) e l'ossido di vanadio (VO), che dominano lo spettro visibile.

### Giganti e supergiganti
Hanno fotosfere molto estese e rarefatte con raggi che possono essere enormi (nell'ordine dei milioni di $\mathrm{km}$). Hanno bassa gravità superficiale, con temperature simili a quelle di stelle più piccole. La definizione di fotosfera diventa più sfumata a causa di estese regioni di transizione.

### Nane bianche
Hanno fotosfere estremamente sottili, con temperature superficiali anche maggiori di $100.000\,\mathrm{K}$; la gravità è altissima e comprime lo strato fotosferico in uno spessore compreso tra qualche decina di metri e qualche centinaio di metri, raramente superiore a circa $1\,\mathrm{km}$.

### Stelle di neutroni

L'assottigliamento della fotosfera raggiunge il suo estremo nelle stelle di neutroni. Pur avendo una massa di circa $1{,}4$ masse solari, il loro raggio è di appena $11-13\,\mathrm{km}$, il che si traduce in una gravità superficiale dell'ordine di $10^{11}$ volte quella terrestre. Lo strato fotosferico si riduce a spessori compresi tra pochi millimetri e poche decine di centimetri, a seconda della temperatura superficiale, che spazia tipicamente da alcune centinaia di migliaia di kelvin fino a milioni di kelvin. Un caso emblematico è la stella di neutroni al centro del resto di supernova Cassiopea A, la cui atmosfera, misurata dal telescopio spaziale Chandra, risultò spessa appena una decina di centimetri, con una temperatura di circa $2$ milioni di kelvin.
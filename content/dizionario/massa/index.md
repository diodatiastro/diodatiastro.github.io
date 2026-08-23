+++
title = "Massa"
date = "2026-08-22"
draft = false
+++

{{< katex />}}

## Etimologia

Il termine **massa** deriva dal latino *massa*, «pasta, impasto», a sua volta derivato dal greco antico μᾶζα (*mâza*), «focaccia d'orzo, pasta di farina». In era cristiana Sant'Agostino usò la parola in senso metaforico, indicando con *massa peccati* l'umanità intera come un unico "impasto" segnato dal peccato originale. Ma il salto verso il significato tecnico attuale, "quantità di materia di cui un corpo è composto", si deve a Newton, che nei *Philosophiae Naturalis Principia Mathematica* (1687) apre la trattazione con la **Definizione I**: *«Quantitas materiae est mensura ejusdem orta ex illius densitate et magnitudine conjunctim»*. Ovvero: «la quantità di materia è la misura della stessa, derivante congiuntamente dalla sua densità e dal suo volume». È la prima definizione operativa di massa come grandezza *distinta* dal peso.

{{% box tipo="definizione" titolo="" %}} 
La **massa**, indicata con $m$, è una grandezza fisica scalare che misura la quantità di materia in un corpo. La sua unità di misura è il chilogrammo ($\text{kg}$).

La massa si manifesta sotto due aspetti concettualmente distinti ma sperimentalmente identici: 
- come **massa inerziale**, cioè la resistenza di un corpo a variare il proprio stato di moto sotto l'azione di una forza ([seconda legge di Newton]({{< relref "/dizionario/inerzia/" >}}#moto-traslatorio-secondo-principio-della-dinamica)), e 
- come [massa gravitazionale](#massa-gravitazionale), cioè la capacità di un corpo di generare e subire l'attrazione gravitazionale. 

A questi due aspetti la relatività ristretta ne aggiunge un terzo: la massa è anche equivalente a una forma di energia altamente concentrata, secondo la celebre relazione $E=mc^2$. Nella fisica delle particelle elementari, però, l'*ordine si capovolge*: è la massa, insieme allo spin, a essere una **proprietà costitutiva** delle particelle stesse, mentre "corpo" e "materia" *emergono* solo dopo, come descrizioni macroscopiche di configurazioni composte da un numero immenso di tali particelle (si veda [più avanti](#problemi-di-definizione-il-capovolgimento-del-concetto-di-massa) per una spiegazione più completa).
{{% /box %}}

## Cenni storici

Prima di Newton non esisteva un concetto fisico di massa distinto dal **peso**: nella fisica aristotelica un corpo era semplicemente più o meno "pesante", e la pesantezza era una proprietà intrinseca legata alla tendenza dei corpi a raggiungere il proprio "luogo naturale", cioè a cadere una volta esaurita la spinta che li aveva messi in moto. Fu proprio la definizione newtoniana di *quantitas materiae* a rendere per la prima volta concettualmente distinguibili **massa** e **peso**: un oggetto ha la stessa massa sulla Terra e sulla Luna, pur pesando circa sei volte meno sulla seconda. La definizione di Newton rendeva la massa *indipendente* dal luogo in cui il corpo si trova, a differenza del peso, che varia con l'intensità della gravità locale.

Fin dai *Principia*, tuttavia, restava aperta una domanda tutt'altro che ovvia: perché la massa descritta dalla seconda legge del moto ($F=m_i a$), che indica la resistenza all'accelerazione, coincide sperimentalmente con la massa che agisce nella [legge di gravitazione universale](#massa-gravitazionale)? Lo stesso Newton verificò questa **uguaglianza** con pendoli di materiali diversi, trovandola valida entro circa una parte su mille. Nel 1889, il fisico ungherese **Loránd Eötvös**, con una bilancia di torsione di sua invenzione, spinse la verifica sperimentale fino a una precisione di $1$ parte su $20$ milioni e, in una lunga serie di misure condotte con Dezső Pekár e Jenő Fekete tra il 1906 e il 1909 (quattromila ore di osservazioni), fino a $1$ parte su $100$ milioni[^eotvos]. Fu questo risultato a ispirare a Einstein il **principio di equivalenza**, pietra angolare della relatività generale (1915): l'equivalenza tra massa inerziale e gravitazionale non è più, in quella teoria, una mera e fortuita coincidenza sperimentale, ma un postulato fondamentale, secondo cui la gravità stessa è una manifestazione della curvatura dello spaziotempo prodotta dalla massa e dall'energia.

Un altro capitolo importante della storia del concetto di massa riguarda la sua misurazione su scala planetaria. Nel 1797-98 **Henry Cavendish**, utilizzando una sensibilissima bilancia di torsione ideata dal reverendo John Michell, misurò per la prima volta in laboratorio la debolissima attrazione gravitazionale fra masse note, ricavandone la **densità media** della Terra. I suoi dati implicavano un valore di $5{,}448$ volte quella dell'acqua, anche se un errore aritmetico — scoperto solo nel 1821 dall'astronomo Francis Baily — fece pubblicare a Cavendish, nel suo articolo originale, il valore leggermente diverso di $5{,}480$, comunque non lontano da quello oggi accettato di $5{,}514$. Con un esperimento ingegnoso, Cavendish era riuscito a calcolare la massa dell'intero pianeta: per questo, l'esperimento passò alla storia con il nome, forse improprio ma efficace, di "pesare la Terra".

Il capitolo più recente nella storia della massa riguarda la sua origine a livello subatomico. Nel 1905 Einstein, nell'articolo intitolato "L'inerzia di un corpo dipende dal suo contenuto di energia?"[^tito], stabilì un caposaldo della fisica del Novecento: l'equivalenza fra massa ed energia, intese come due forme diverse di un'unica realtà sottostante. La prima verifica sperimentale diretta arrivò nel 1932, quando John Cockcroft ed Ernest Walton, "spaccando" nuclei di litio con protoni accelerati, misurarono un difetto di massa nei prodotti di reazione che era perfettamente in accordo con l'energia cinetica liberata secondo l'equazione $E=\Delta m\,c^2$. 

Restava però da spiegare perché le particelle elementari stesse (elettroni, quark) possiedano una massa propria: la risposta, proposta indipendentemente nel 1964 da Peter Higgs e altri fisici, è il cosiddetto **meccanismo di Higgs**, secondo cui le particelle acquistano massa interagendo con un **campo** che permea l'intero universo. La particella associata a questo campo, il **bosone di Higgs**, con una massa di circa $125\,\text{GeV}/c^2$, è stata scoperta il 4 luglio 2012 al CERN di Ginevra dagli esperimenti ATLAS e CMS del Large Hadron Collider, chiudendo con successo una ricerca durata quasi mezzo secolo.

<div id="platino"></div>

Da ricordare, infine, che la Conferenza Generale dei Pesi e delle Misure, riunitasi il 16 novembre 2018, votò una ridefinizione storica dell'unità di massa del Sistema Internazionale, entrata poi in vigore il 20 maggio 2019, nella Giornata Mondiale della Metrologia. Il chilogrammo, la cui massa era stata per oltre un secolo ancorata a quella di un cilindro di platino-iridio conservato a Sèvres (il celebre "Grande K"), venne ridefinito in termini puramente matematici, come un valore esatto della costante di Planck, esattamente $h = 6{,}62607015\times10^{-34}\,\text{J}\,\text{s}$. Questa decisione ha svincolato per la prima volta il chilogrammo come unità di misura dalla materia fisica, cioè da quel cilindro inevitabilmente soggetto a usura e contaminazione.

## Problemi di definizione: il capovolgimento del concetto di massa

"La massa è la grandezza fisica che misura la quantità di materia di un corpo": è la definizione più o meno universale di massa riportata da dizionari e manuali di base. L'abbiamo ripresa anche noi [più sopra](#box-definizione), perché è il modo più intuitivo di introdurre il concetto di massa. Purtroppo è una definizione che non regge a un esame rigoroso, ed è bene esserne consapevoli invece di darla per scontata.

Sebbene sembri un concetto intuitivo, dire cosa sia la massa è tutt'altro che banale. Persino Newton incappò in una definizione circolare, che fu notata già dai suoi contemporanei. Nella Definizione I dei *Principia* si legge, infatti, che la *quantitas materiae* (la massa) corrisponde a densità per volume, ma la densità è a sua volta definita come massa diviso volume. Il ragionamento circolare è immediatamente evidente: $\text{massa} = (\text{massa}/\text{volume}) \times \text{volume}$.

Si va incontro a un analogo tipo di ragionamento circolare se facciamo leva sul concetto di  "corpo" anziché su quello di densità. Un corpo, intuitivamente, è "qualcosa che possiede una certa massa". Ora, se definiamo la massa come "la quantità di materia di un corpo", rischiamo di girare intorno ai due concetti - massa e corpo - senza aggiungere alcuna informazione nuova, che ci dica cos'è l'una e cos'è l'altro. Per evitare di rimanere intrappolati in questo ragionamento circolare, abbiamo bisogno di definire il concetto di corpo in modo del tutto indipendente dalla massa.

Una via d'uscita da questo rimando incrociato fu proposta da **Ernst Mach** nella sua *Meccanica* (1883): una **definizione operativa** della massa che non fa alcun riferimento a una problematica "quantità di materia", ma solo a grandezze direttamente misurabili. Egli propose di considerare due corpi isolati, identificandoli non tramite la massa ma tramite criteri puramente percettivi e pre-fisici: un **contorno** che li distingue dall'ambiente circostante, la **coesione** delle loro parti (che si muovono solidalmente le une con le altre) e la possibilità di seguirli con continuità nello spazio e nel tempo lungo una **traiettoria**, senza che "spariscano" per poi "ricomparire" altrove. Due sfere di legno potrebbero essere esempi validi di questa definizione. Facciamo interagire fra loro i due corpi, per urto diretto o tramite una molla che li collega. Ciascuno imprime all'altro un'accelerazione; *il rapporto tra le loro masse si **definisce** come il rapporto inverso tra le accelerazioni misurate:*
$$
\frac{m_1}{m_2} \equiv -\frac{a_2}{a_1}
$$
Si noti che questa procedura non presuppone di sapere già *quanta inerzia* abbia ciascun corpo: costruisce la nozione da zero, a partire dal rapporto fra le accelerazioni osservate. È così che l'inerzia riceve, per la prima volta, un significato operativo preciso, invece di essere data per scontata come nella definizione tradizionale di quantità di materia.

Fissata per convenzione la massa di un corpo campione[^corpo], la relazione proposta da Mach permette di assegnare un valore numerico alla massa di qualunque altro corpo, senza mai dover rispondere alla domanda «cos'è la materia?». Non basta però che il rapporto fra le masse di due corpi risulti coerente cambiando il tipo di interazione fra loro (urto meccanico, molla, attrazione reciproca): per una coppia isolata, questa coerenza è già garantita dalla terza legge di Newton, e non richiede alcuna verifica sperimentale ulteriore. La vera condizione, tutt'altro che scontata, è che il valore di massa assegnato a un corpo tramite un tipo di interazione — un urto con il corpo campione, per esempio — resti valido quando quello stesso corpo entra in gioco con un'interazione di natura diversa, magari con un partner diverso: un urto meccanico oggi, un'attrazione gravitazionale domani, con un terzo corpo mai coinvolto prima. Questa coerenza più profonda non è garantita dalla definizione in sé: è la fisica sperimentale a confermarla, ed è proprio questa conferma a rendere la massa una grandezza fisica ben definita e universale, non un fattore arbitrario legato al metodo particolare con cui è stata misurata.

<div id="criterio"></div>

Il criterio di Mach ha ovviamente anche dei limiti. Funziona perfettamente per due corpi isolati. Ma cosa succede se vogliamo definire la massa di un corpo in un sistema di tre corpi? O se vogliamo definire la massa di un singolo corpo quando non c'è un secondo corpo con cui farlo interagire? Quella di Mach è una definizione *relazionale* e vale per la scala dei corpi **macroscopici**, siano essi carrelli, palle da biliardo o pianeti.

Ma la fisica moderna, e in particolare la teoria dei campi, ha cercato e trovato una definizione *intrinseca* di massa valida alla **scala subatomica**, una definizione che elimina del tutto la nozione di "corpo" come concetto primitivo. Nella **teoria quantistica dei campi**, ciò che chiamiamo "corpo" non è un oggetto elementare ma una **struttura emergente**, ovvero la descrizione macroscopica di una configurazione legata[^legata] e localizzata di campi quantistici: elettroni e quark, tenuti insieme dai campi di forza che ne mediano le rispettive interazioni (fotoni per il legame elettromagnetico che lega gli elettroni al nucleo, gluoni per il legame forte che lega i quark all'interno di protoni e neutroni). La massa, in questo contesto, non è "quanta materia" contenga quella configurazione, ma una **proprietà invariante** che caratterizza direttamente le particelle elementari stesse[^casimir]. "Corpo" e "materia" arrivano dopo, come proprietà emergenti di strutture che appartengono a un livello più basilare della realtà, non prima.

### Corpo e materia come nozioni emergenti: il caso del Sole

Può essere interessante chiarire con un esempio concreto cosa significhi dire che "corpo" e "materia" emergono dalla massa e non viceversa. Il [Sole]({{< relref "/stelle/sole/" >}}) è una configurazione di circa $10^{57}$ particelle, tenuta insieme dalla propria attrazione gravitazionale: è fatto soprattutto di protoni, neutroni ed elettroni legati nel plasma. Fa parte del Sole anche un numero enorme di [fotoni]({{< relref "/dizionario/fotone/" >}}), che restano intrappolati all'interno per centinaia di migliaia di anni prima di trovare una via di fuga[^neutri].

Il Sole, dunque, *non* è un'entità elementare: è una struttura composta, il cui "corpo" (delimitato dalla fotosfera) e la cui "materia" (il plasma di cui è fatto) sono descrizioni *macroscopiche emergenti*. Esse appartengono, cioè, a un livello di realtà che emerge dal comportamento collettivo delle particelle che lo costituiscono, ciascuna già definita "per natura" dalla propria massa, come illustrato [sopra](#criterio).

Esiste peraltro una misura molto precisa della massa del Sole:
$$
M_{\odot}\simeq 1,9885 \times 10^{30}\,\text{kg}
$$
Ma che cos'è, dunque, questa "massa del Sole"? Abbiamo visto più sopra che, nel caso delle particelle elementari, la massa, insieme allo spin, è un **invariante** (un invariante di Casimir), cioè una proprietà intrinseca che le caratterizza in modo univoco, definendo la loro stessa natura: gli elettroni come elettroni, i quark come quark. Ma questa nozione di massa non è applicabile a un sistema *legato e composito* come il Sole. La massa di un sistema composito non è la semplice somma delle masse dei suoi costituenti, ma è *l'energia totale del sistema nel proprio sistema di riferimento a riposo, divisa per la velocità della luce al quadrato* $c^2$.

In altre parole, entra anche qui in gioco l'*equivalenza relativistica* di massa ed energia. La massa del Sole è una forma legata di **energia** che corrisponde alla somma delle energie a riposo dei suoi costituenti, *più* la loro energia cinetica (l'agitazione termica del plasma), *meno* l'energia di legame gravitazionale, cioè l'energia che servirebbe per separare tutti i costituenti e disperderli all'infinito[^legravi]. Nel caso del Sole, in proporzione alla massa totale, questa energia di legame vale:
$$
\frac{U_{\text{grav}}}{M_\odot c^2} \approx \frac{(3/5)\,GM_\odot^2/R_\odot}{M_\odot c^2} \approx 1{,}3\times10^{-6}
$$
cioè circa un milionesimo di massa solare: in chilogrammi, poco più di $2{,}5\times10^{24}\,\text{kg}$, ovvero circa quattro decimi di una massa terrestre. Molto poco rispetto alla massa totale del Sole.

Tuttavia, il concetto da portare a casa è che, benché la massa del Sole sia oggi ben approssimabile dalla somma delle masse dei suoi costituenti, in realtà tutto ciò che avviene al suo interno è un gioco di energie: dall'agitazione termica del plasma alla radiazione gamma prodotta dalle reazioni di fusione, fino all'energia di legame gravitazionale che tiene insieme tutto il sistema. 

Quanto alla "materia", nella fisica moderna non è più una categoria fisicamente distinta da "energia" o "[radiazione]({{< relref "/dizionario/luce-radiazione-elettromagnetica/" >}})": è un'etichetta convenzionale per i campi **fermionici** (elettroni, protoni, neutroni, a loro volta composti da quark) che danno struttura e volume alle cose quotidiane, contrapposti ai **bosoni** mediatori delle forze (fotoni, gluoni, ecc.). Ma un fotone è, dal punto di vista della **teoria dei campi**, un'eccitazione fondamentale quanto un elettrone: entrambi sono increspature di **campi quantistici**, e il Sole non è fatto di "materia" in un senso ontologicamente diverso dalla luce che emette: è fatto di campi quantistici eccitati, alcuni dei quali chiamiamo per tradizione "materia" e altri "radiazione". La distinzione resta utile, ma non è più, come nella fisica pre-relativistica, una differenza fra due sostanze fisicamente diverse.

## Massa invariante e massa a riposo

Nella fisica moderna, la massa di una particella o di un sistema composto è una grandezza invariante relativistica. Per una particella è definita come la norma invariante del suo quadrimpulso[^quadri]; per un sistema composto, come la norma invariante del quadrimpulso totale del sistema[^fotoni]. In entrambi i casi, il suo valore non dipende dal sistema di riferimento. Il termine **massa a riposo**, ancora ampiamente usato, indica la stessa grandezza e sottolinea il particolare *sistema di riferimento* nel quale il corpo è a riposo. Non si tratta quindi di due masse diverse: la massa è una proprietà invariante, mentre «a riposo» indica il sistema di riferimento nel quale la relazione tra massa ed energia assume la forma più semplice.

Energia $E$ e quantità di moto $\vec p$ dipendono invece dal sistema di riferimento. Le tre grandezze sono legate dalla relazione:
$$  
E^2=p^2c^2+m^2c^4  
$$
dove $p=|\vec p|$. Nel sistema di riferimento in cui il corpo è a riposo, $p=0$ e si ottiene:
$$  
E_0=mc^2  
$$
dove $E_0$ è l'**energia a riposo**. La celebre relazione $E=mc^2$ esprime dunque, più precisamente, l'equivalenza tra la massa e l'energia *a riposo* di un sistema.

Questa distinzione è importante perché **la massa non aumenta quando un corpo viene accelerato**, come riportano erroneamente molte fonti non specialistiche. Aumentano invece la sua energia totale e la sua quantità di moto. L'espressione «massa relativistica», un tempo usata per indicare la quantità $E/c^2$ di un corpo in movimento, è oggi generalmente evitata: identificare la massa con $E/c^2$ farebbe infatti confondere una grandezza dipendente dal sistema di riferimento con una proprietà invariante del corpo.


## Formalismo matematico minimo

### Unità di misura della massa

Nel Sistema Internazionale l'unità di massa è il **chilogrammo** ($\text{kg}$), oggi definito tramite la costante di Planck. In fisica atomica e nucleare si usa spesso l'**unità di massa atomica** $u$ (o dalton), definita come $1/12$ della massa di un atomo di carbonio-12: $1\,u = 1{,}66054\times10^{-27}\,\text{kg}$, equivalente a $931{,}494\,\text{MeV}/c^2$. In fisica delle particelle le masse si esprimono direttamente in $\text{eV}/c^2$ (o suoi multipli, come nel caso del bosone di Higgs). In astrofisica l'unità naturale è la **massa solare** $M_\odot \approx 1{,}989\times10^{30}\,\text{kg}$.

### Massa inerziale (seconda legge di Newton)

La massa [inerziale]({{< relref "/dizionario/inerzia/" >}}) $m_i$ è definita operativamente dalla seconda legge di Newton:
$$
\vec{F} = m_i\vec{a}
$$
A parità di forza applicata, l'accelerazione prodotta è inversamente proporzionale alla massa. La massa è anche il moltiplicatore della velocità nella [quantità di moto]({{< relref "/dizionario/quantita-di-moto-o-momento-lineare/" >}}) $\vec p = m\vec v$ e, nel moto rotatorio, incide sul [momento angolare]({{< relref "/dizionario/momento-angolare/" >}}) e sul [momento d'inerzia]({{< relref "/dizionario/momento-dinerzia/" >}}) $I$ (che tiene conto anche di come la massa è distribuita rispetto all'asse di rotazione).

### Massa gravitazionale

La massa gravitazionale $m_g$ compare invece nella legge di gravitazione universale:
$$
F = G\,\frac{m_g M}{r^2}
$$
dove $G = 6{,}674\times10^{-11}\,\text{m}^3\,\text{kg}^{-1}\,\text{s}^{-2}$ è la costante di gravitazione universale. 

### Principio di equivalenza

Il **principio di equivalenza** afferma che $m_i = m_g$ per ogni corpo, indipendentemente dalla sua composizione: è per questo che, in assenza di attrito, tutti i corpi cadono con la stessa accelerazione $g$, qualunque sia la loro massa[^gali]. Un corpo di cento chili viene attratto dalla Terra con una forza dieci volte maggiore di un corpo di dieci chili, ma possiede anche un'inerzia dieci volte maggiore, cioè oppone una resistenza dieci volte più grande a essere messo in movimento. Le due differenze si compensano *esattamente*, ed è per questo che entrambi i corpi, lasciati cadere insieme, toccano terra nello stesso istante.

In termini formali, il secondo principio della dinamica lega la forza $F$ all'accelerazione $a$ tramite la massa inerziale: $F = m_i \cdot a$. La legge di gravitazione universale, invece, lega la stessa forza alla massa gravitazionale del corpo: $F = GM \cdot m_g / r^2$, dove $M$ è la massa della Terra e $r$ la distanza dal suo centro. Uguagliando le due espressioni si ottiene:
$$
a = (m_g / m_i) \cdot G M / r^2
$$
Se il principio di equivalenza è vero, cioè se $m_g = m_i$ per ogni corpo, il rapporto $m_g/m_i$ vale sempre $1$, qualunque sia la massa del corpo: l'accelerazione $a = GM/r^2$ non dipende più da $m$, ma solo dalla massa della Terra e dalla distanza dal suo centro. 

Come dimostrazione, applichiamo i numeri all'esempio teorico descritto sopra, usando il valore medio dell'accelerazione di gravità alla superficie terrestre, pari a $GM/r^2 \approx 9{,}8\,\text{m}/\text{s}^2$:

- per un corpo da $10\,\text{kg}$: $F = 10 \cdot 9,8 = 98\,\text{N} \rightarrow a = 98/10 = 9{,}8\,\text{m}/\text{s}^2$
- per un corpo da $100\,\text{kg}$: $F = 100 \cdot 9{,}8 = 980\,\text{N} \rightarrow a = 980/100 = 9{,}8\,\text{m}/\text{s}^2$

Le forze differiscono di un fattore dieci, ma l'accelerazione risultante è la stessa[^terza].

### Difetto di massa ed energia di legame nucleare

Quando protoni e neutroni si legano a formare un nucleo atomico, la massa del nucleo risulta sempre leggermente **inferiore** alla somma delle masse dei nucleoni[^nucleo] separati. Questa differenza, il **difetto di massa** $\Delta m$, corrisponde all'**energia di legame** $B$ che tiene insieme il nucleo:
$$
B = \Delta m\, c^2 = \left[Zm_p + Nm_n - M_{\text{nucleo}}\right]c^2
$$
È lo stesso principio fisico che alimenta la fusione nucleare nel Sole (si veda l'esempio numerico [più sotto](#il-difetto-di-massa-nella-fusione-dellidrogeno)) e la fissione nei reattori nucleari.

### Relatività Generale

Nelle equazioni di campo di Einstein, la massa-energia, descritta dal tensore energia-impulso $T_{\mu\nu}$, è la sorgente della curvatura dello spaziotempo:
$$R_{\mu\nu} - \frac{1}{2} R g_{\mu\nu} + \Lambda g_{\mu\nu} = \frac{8\pi G}{c^4} T_{\mu\nu}$$
Il membro di sinistra descrive la geometria dello spaziotempo: quanto e come si curva in un dato punto, tenendo conto anche dell'effetto della costante cosmologica $\Lambda$ (*Lambda*). Il membro di destra descrive, in quello stesso punto, la densità di energia e di quantità di moto presenti: non solo quella legata alla massa a riposo dei corpi, ma qualunque forma di energia — cinetica, di radiazione, di pressione — secondo l'equivalenza massa-energia stabilita dalla relatività ristretta ($E = mc^2$). La costante $8\pi G/c^4$ è il fattore che lega le due grandezze. In sintesi: è la distribuzione di energia, di cui la massa è solo una forma, a determinare come si curva lo spaziotempo, e la curvatura dello spaziotempo, a sua volta, determina come quell'energia si muove.

## Esempi numerici

### La massa della Terra dalla legge di gravitazione

Dall'accelerazione di gravità in superficie $g = 9{,}81\,\text{m/s}^2$ e dal raggio terrestre medio $R_\oplus = 6{,}371\times10^6\,\text{m}$, risolvendo per la massa a partire da $g = GM_\oplus/R_\oplus^2$, si ottiene:
$$
M_\oplus = \frac{gR_\oplus^2}{G} = \frac{9{,}81 \times (6{,}371\times10^6)^2}{6{,}674\times10^{-11}} \approx 5{,}97\times10^{24}\,\text{kg}
$$
in ottimo accordo con il valore oggi accettato di $5{,}972\times10^{24}\,\text{kg}$. È concettualmente lo stesso procedimento con cui Cavendish "pesò la Terra" nel 1798.

### Attrazione gravitazionale tra corpi di piccola massa
   
Due sfere di massa $m = 1\,\mathrm{kg}$ poste a distanza $r = 0{,}1\,\mathrm{m}$ si attraggono con forza pari a:   
$$
   F = G \frac{m^2}{r^2} \approx 6{,}67 \times 10^{-9}\,\mathrm{N}
$$
È una forza minore di $7$ miliardesimi di newton, estremamente debole, tipica delle interazioni gravitazionali su scala umana. Per capire quanto sia piccola questa forza, basta considerare che bisogna esercitare la forza di un newton per tenere in mano, qui sulla Terra, una mela di medie dimensioni.

### Differenza tra massa e peso

Un errore comune è confondere la massa di un corpo con il suo peso. Non sono la stessa cosa. La massa (su scala macroscopica) è una proprietà intrinseca dei corpi, che non varia in base alla loro posizione nello spazio. Il peso, invece, è una forza - definita appunto **forza peso** - che corrisponde al prodotto della massa per l'accelerazione di gravità. 

Sulla Terra, per esempio, dove l'accelerazione di gravità $g$ vale approssimativamente $9{,}8 \, \text{m/s}^2$, un uomo di $70 \, \text{kg}$ ha una forza peso di:
$$ F_p = m \cdot g = 70 \cdot 9{,}8 = 686 \, \text{N} 
$$
Sulla Luna, invece, dove $g \approx 1{,}6 \, \text{m/s}^2$, quello stesso uomo avrebbe una forza peso di:
$$ F_p = m \cdot g = 70 \cdot 1{,}6 = 112 \, \text{N} 
$$
Ciò vuol dire che, nel campo gravitazionale della Luna, quell'uomo avrebbe un peso circa sei volte inferiore a quello che avrebbe sulla Terra. La sua massa sarebbe però sempre $70 \, \text{kg}$. E se ne accorgerebbe facilmente, se fosse lanciato in moto orizzontale su un veicolo che venisse arrestato di colpo da un ostacolo. Il tempo di arresto sarebbe *uguale* a quello misurato sulla Terra nella medesima situazione: la forza necessaria a fermarlo, infatti, sarebbe la stessa, perché dipende dalla [massa inerziale](#massa-inerziale-seconda-legge-di-newton) del corpo, non dal suo peso, che sulla Luna è invece sei volte inferiore.

{{< figura 
src="immagini/massa-peso.svg" 
width="" 
alt="Differenza tra massa e peso" 
caption="Differenza tra massa e peso"
>}}

### La massa del Sole dalla terza legge di Keplero

Conoscendo il periodo orbitale della Terra ($T = 3{,}156\times10^7\,\text{s}$, cioè un anno) e il semiasse maggiore dell'orbita terrestre (una [unità astronomica]({{< relref "/dizionario/unita-astronomica/" >}}): $a = 1{,}496\times10^{11}\,\text{m}$), la terza legge di Keplero, nella forma newtoniana, dà:
$$
M_\odot = \frac{4\pi^2 a^3}{GT^2} = \frac{4\pi^2\,(1{,}496\times10^{11})^3}{(6{,}674\times10^{-11})\,(3{,}156\times10^7)^2} \approx 1{,}99\times10^{30}\,\text{kg}
$$
È lo stesso metodo, applicato alle orbite delle lune o dei pianeti, con cui si misura la massa di qualunque corpo celeste dotato di un compagno orbitante, comprese le stelle doppie e i buchi neri supermassicci al centro delle galassie.

### Il difetto di massa nella fusione dell'idrogeno

Nella catena protone-protone che alimenta il Sole, quattro nuclei di idrogeno[^masse] si fondono in un nucleo di elio-4:
$$
\Delta m = 4\,m(^1\text{H}) - m(^4\text{He}) = 6{,}6943\times10^{-27} - 6{,}6466\times10^{-27} = 0{,}0477\times10^{-27}\,\text{kg}
$$
pari a circa lo $0{,}71\%$ della massa di partenza: una frazione minuscola, ma sufficiente — moltiplicata per l'enorme numero di reazioni che avvengono ogni secondo nel nucleo solare — a [tenere acceso il Sole]({{< relref "/stelle/sole/" >}}#eventi-rarissimi-hanno-bisogno-di-numeri-grandissimi) per miliardi di anni.

### Il difetto di massa ed energia di legame nucleare del deuterio

Consideriamo il nucleo di Deuterio ($^2\text{H}$), composto da $1$ protone e $1$ neutrone:

- Massa del protone libero ($m_p$): $1{,}007276\text{ u} \approx 1{,}67262 \times 10^{-27}\text{ kg}$
- Massa del neutrone libero ($m_n$): $1{,}008665\text{ u} \approx 1{,}67493 \times 10^{-27}\text{ kg}$
- Somma delle masse dei nucleoni liberi: $m_{\text{liberi}} = m_p + m_n = 2{,}015941\text{ u}$
- Massa misurata del nucleo di deuterio ($m_d$): $2{,}013553\text{ u}$

Il difetto di massa $\Delta m$ è:
$$\Delta m = m_{\text{liberi}} - m_d = 2{,}015941\text{ u} - 2{,}013553\text{ u} = 0{,}002388\text{ u} \approx 3{,}965 \times 10^{-30}\text{ kg}$$
L'energia di legame nucleare equivalente $E_b$ rilasciata è:
$$E_b = \Delta m \cdot c^2 = (3{,}965 \times 10^{-30}\text{ kg}) \times (2{,}998 \times 10^8\text{ m/s})^2 \approx 3{,}56 \times 10^{-13}\text{ J} \approx 2{,}224\text{ MeV}$$
### L'energia a riposo di un elettrone

Con $m_e = 9{,}109\times10^{-31}\,\text{kg}$:
$$
E_0 = m_ec^2 = (9{,}109\times10^{-31})\times(2{,}998\times10^8)^2 \approx 8{,}187\times10^{-14}\,\text{J} = 0{,}511\,\text{MeV}
$$
È l'energia liberata sotto forma di due fotoni gamma in ogni evento di annichilazione elettrone-positrone. È lo stesso valore, non a caso, dei fotoni gamma prodotti nella [catena p-p]({{< relref "/stelle/sole/" >}}#leffetto-tunnel-e-il-picco-di-gamow) all'interno del Sole.

### La massa è una forma super-concentrata di energia

Lasciamo per ultimo l'esempio numericamente più sorprendente. Se una massa di $1$ solo grammo ($0{,}001 \text{ kg}$) venisse *interamente* convertita in energia, per esempio in un'annichilazione tra materia e antimateria, avremmo la seguente produzione di energia, basata sull'equazione di Einstein $E=mc^2$:
$$
E = 0{,}001 \text{ kg} \times (3 \times 10^8 \text{ m/s})^2 = 9 \times 10^{13} \text{ J}
$$
Il prodotto dell'annichilazione sarebbe pari a $90\,000$ miliardi di joule, un'energia equivalente a poco più di $21$ chilotoni di TNT, simile all'esplosione della bomba atomica che distrusse Nagasaki: una dimostrazione di quanta energia sia "immagazzinata" in una massa minuscola. Convertite in pura energia una piccola graffetta metallica e libererete in una frazione di secondo il potere distruttivo di una bomba atomica.

## Campi di applicazione

| Ambito                          | Applicazione                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Astronomia                      | Le masse in gioco determinano l'intensità dell'interazione gravitazionale reciproca e governano la dinamica orbitale su ogni scala, da quella dei pianeti fino agli ammassi di galassie.                                                                                                                                                             |
| Astrofisica e cosmologia        | La massa determina il cammino evolutivo di una stella dalla sequenza principale fino al destino finale di nana bianca, stella di neutroni o buco nero; la massa gravitazionale dedotta dalle curve di rotazione delle galassie eccede sistematicamente quella stimata dalla materia visibile: è il problema, ancora irrisolto, della materia oscura. |
| Fisica delle particelle         | La ricerca del bosone di Higgs e, più in generale, lo studio dell'origine della massa delle particelle elementari sono tra i programmi centrali degli acceleratori come il Large Hadron Collider del CERN.                                                                                                                                           |
| Chimica                         | La massa atomica e molecolare, e il concetto correlato di mole[^avo], sono alla base di tutta la stechiometria.                                                                                                                                                                                                                                      |
| Relatività e GPS                | La corretta sincronizzazione degli orologi atomici dei satelliti GPS richiede di tenere conto sia della dilatazione temporale relativistica dovuta alla velocità sia di quella gravitazionale dovuta alla massa terrestre, secondo la relatività generale.                                                                                           |
| Meccanica classica e ingegneria | La massa determina l'inerzia di veicoli, strutture e macchine, ed è alla base della progettazione di ogni sistema meccanico, dai freni di un'automobile ai razzi vettori.                                                                                                                                                                            |
| Metrologia                      | La ridefinizione del 2019 rende il chilogrammo, per la prima volta nella storia, riproducibile in qualunque laboratorio del mondo attrezzato con una bilancia di Kibble[^kib], senza fare più riferimento a un prototipo fisico deteriorabile.                                                                                                       |


[^eotvos]: I risultati completi degli esperimenti furono pubblicati nel 1922, dopo la morte di Eötvös nel 1919. La [verifica](https://arxiv.org/abs/2209.15487) più precisa mai condotta, quella del satellite francese MICROSCOPE, attivo dal 2016 al 2018, ha spinto il limite a circa $1$ parte su $10^{15}$. È quanto di più vicino esista alla certezza che massa inerziale e massa gravitazionale si corrispondano in modo assoluto.

[^tito]: *Ist die Trägheit eines Körpers von seinem Energieinhalt abhängig?* era il titolo originale tedesco (per chi volesse arrischiarsi a pronunciarlo).

[^casimir]: Tecnicamente la massa è un invariante di Casimir del gruppo di Poincaré, lo stesso tipo di numero che classifica anche lo spin. Il gruppo di Poincaré è il gruppo delle simmetrie dello spaziotempo della relatività ristretta: le traslazioni spaziali e temporali, più le trasformazioni di Lorentz, che comprendono sia le rotazioni sia i *boost* (i cambi di velocità relativa), per un totale di dieci parametri. Riguardano il modo in cui energia, quantità di moto, spin di un oggetto si trasformano passando da sistema di riferimento all'altro. Un **invariante** di Casimir, come dice il nome, è qualcosa che *non varia*, una sorta di **etichetta** che descrive in modo **univoco** *un'intera categoria* di particelle subatomiche, indipendentemente da quali trasformazioni spaziotemporali ciascuna di esse abbia subito o possa subire. Per esempio, ogni singolo protone (uno nel nucleo del Sole, uno in un atomo di ferro della tua scrivania, uno in una galassia lontana) ha una sua storia individuale — una posizione, una quantità di moto, magari un'orientazione dello spin diverse dagli altri — ma tutti condividono *esattamente* la **stessa massa** e lo **stesso spin**, perché tutti appartengono alla stessa classe individuata dal gruppo di Poincaré (tecnicamente, la stessa **rappresentazione irriducibile**): quella che chiamiamo, appunto, "protone". In pratica, un invariante di Casimir si applica a ogni possibile stato quantistico della stessa particella. Il gruppo di Poincaré ne possiede due, indipendenti fra loro: il primo, costruito dal quadrimpulso $P^\mu$ ($P^\mu P_\mu = m^2c^2$), è proprio la **massa**; il secondo, costruito a partire dal quadrivettore di spin di Pauli-Lubanski, è lo **spin**. Fu il fisico **Eugene Wigner**, nel 1939, a dimostrare che ogni particella elementare corrisponde a una rappresentazione irriducibile del gruppo di Poincaré, classificata esattamente da questi due numeri — massa e spin — indipendentemente da ogni altra sua proprietà, senza distinzione fra **fermioni** (elettroni, quark, neutrini) e **bosoni** (fotoni, gluoni, bosoni W/Z, bosone di Higgs).

[^legata]: "Legata" descrive una condizione dinamica, verificata istante per istante, non un'appartenenza fissata una volta per tutte a un insieme immutabile di particelle. Un corpo può continuamente perdere e acquisire costituenti restando comunque, in ogni dato istante, un'entità ben definita: ciò che ne fissa il confine non è quali particelle specifiche la compongano nel tempo, ma **quali campi risultano legati** insieme in quel momento. Il Sole, per esempio, perde continuamente massa sia tramite il vento solare sia tramite la radiazione: le particelle del vento solare fanno parte del "corpo" del Sole finché restano *gravitazionalmente* legate, e cessano di esserlo nell'istante in cui superano la velocità di fuga; i fotoni prodotti nel nucleo restano invece intrappolati nel plasma per centinaia di migliaia di anni, assorbiti e riemessi ripetutamente, e ne fanno parte finché dura questo stato di cattura. Nell'istante in cui attraversano la fotosfera e sfuggono liberi nello spazio, cessano di appartenere al Sole. Lo stesso principio, su una scala completamente diversa, regola il corpo di un organismo vivente: gli atomi e le cellule che lo compongono vengono di continuo sostituiti (tramite *turnover* cellulare, metabolismo), eppure il corpo resta legato, localizzato e riconoscibile. È lo stesso individuo dalla nascita alla morte, non perché conservi sempre le stesse particelle, ma perché la *configurazione* che le tiene insieme resta, istante dopo istante, una configurazione *legata*. Questa persistenza di un confine chiaro e riconoscibile a dispetto dei cambiamenti funziona, però, solo dove esiste un vero criterio fisico binario di legame: uno stato quantistico legato o del continuo, un'energia orbitale negativa o positiva. Per altri oggetti che sono "corpi" nel linguaggio comune — una nuvola, per esempio, con i suoi bordi sempre sfumati — questo criterio fisico non basta più a tracciare un confine netto. Dove finisca "la nuvola" e dove cominci il vapore acqueo circostante dipende da una soglia convenzionale di densità, non da alcuna forza di legame che separi nettamente le due regioni. In questo caso il confine non è un punto che la fisica possa definire in linea di principio con esattezza matematica. È più che altro una scelta di classificazione, un problema quasi filosofico (come nel paradosso del sorite: quanti granelli di sabbia ci vogliono per fare un "mucchio"?).

[^corpo]: Storicamente il [prototipo di platino-iridio](#platino) del chilogrammo, oggi sostituito dalla definizione tramite la costante di Planck.

[^neutri]: Nel nucleo del Sole si producono, attraverso le reazioni della catena protone-protone, quantità enormi di neutrini: circa $2\times10^{38}$ al secondo. Ma, a differenza dei fotoni, che restano intrappolati nel plasma per tempi lunghissimi, i neutrini interagiscono con la materia così debolmente da attraversare l'intero Sole quasi senza ostacoli, uscendone in pochi secondi: non sono mai, in alcun senso significativo, legati alla struttura solare.

[^legravi]: L'energia di legame si sottrae perché tenere gli elementi costituenti legati insieme costa meno energia che tenerli separati.

[^gali]: Galileo aveva compreso questa legge di natura decenni prima di Newton. Nel corso di esperimenti compiuti tra il 1604 e il 1609, fece rotolare delle sfere lungo piani inclinati con pendenze diverse. Annotando i tempi, sia pure con la scarsa precisione consentita dai mezzi dell'epoca, si rese conto che lo spazio percorso dalle sfere cresceva col quadrato del tempo, indipendentemente dal peso dei corpi utilizzati. Newton avrebbe poi collocato questa osservazione all'interno della sua meccanica, nella quale l'uguaglianza tra massa inerziale e massa gravitazionale (un'ipotesi che lui stesso mise alla prova con esperimenti su pendoli di materiali diversi) gioca un ruolo fondamentale.

[^nucleo]: Nucleone è un nome collettivo che indica indifferentemente un protone o un neutrone, i due costituenti del nucleo atomico, tenuti insieme dalla forza nucleare forte.

[^terza]: Il calcolo qui presentato presuppone che la massa della Terra $M$ non risenta affatto della presenza di corpi in caduta. Tuttavia, per la terza legge di Newton, anche la Terra è soggetta in linea di principio all'accelerazione di gravità che essi le imprimono. Ma la massa della Terra ($\sim6 \times 10^{24}\,\text{kg}$) è così enormemente maggiore di quella di un corpo da $10$ o da $100\,\text{kg}$ che questa accelerazione è, ad ogni fine pratico, del tutto trascurabile. È per questo che $GM/r^2$ può essere considerato un valore *fisso*, uguale per entrambi i corpi in caduta sulla Terra.

[^masse]: Le masse atomiche riportate sono comprensive di elettroni, per tenere conto anche dell'annichilazione dei due positroni emessi.

[^avo]: Definita, dal 2019, fissando il numero di Avogadro $N_A = 6{,}02214076\times10^{23}\,\text{mol}^{-1}$.

[^kib]: Strumento che misura una massa bilanciandola con una forza elettromagnetica anziché con un campione materiale, collegando così la massa alla costante di Planck $h$. Ideata nel 1975 dal fisico Bryan Kibble (che la chiamò "bilancia del watt"), è lo strumento alla base della ridefinizione del chilogrammo del 2019.

[^fotoni]: Il concetto è più generale di quanto sembri a prima vista: due fotoni che si allontanano in direzioni diverse hanno, individualmente, massa nulla, ma il sistema che formano ha una massa invariante positiva, legata alla loro energia e ai loro impulsi combinati. In generale, la massa invariante di un sistema composto non è la somma delle masse dei suoi costituenti.

[^quadri]: Il quadrimpulso è la versione relativistica della [quantità di moto]({{< relref "/dizionario/quantita-di-moto-o-momento-lineare/" >}}): un oggetto a quattro componenti - una legata all'energia, le altre tre alla quantità di moto ordinaria $\vec p$ - che nella teoria della relatività si comportano come un'unica entità, un "quadrivettore" nello spaziotempo. Le sue componenti dipendono dal sistema di riferimento, esattamente come $E$ e $\vec p$ singolarmente; ma la sua "lunghezza" nello spaziotempo, cioè la grandezza invariante che si ottiene combinandole secondo $E^2−p^2c^2$, no: è la stessa in ogni sistema di riferimento, ed è proprio quella grandezza, divisa per $c^4$, a definire la massa.
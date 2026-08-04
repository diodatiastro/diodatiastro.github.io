+++
title = "Astrosismologia"
date = "2026-08-03"
draft = false
+++

{{< katex />}}

## Etimologia 

Dal greco _ástron_ (ἄστρον, "stella") e _seismós_ (σεισμός, "scossa, tremore"), con il suffisso _-logia_ (-λογία, "studio di"): letteralmente "studio delle vibrazioni stellari". Il termine ricalca direttamente quello di sismologia, lo studio dei terremoti terrestri, di cui l'astrosismologia riprende il principio metodologico: inferire la struttura interna di un corpo, altrimenti inaccessibile all'osservazione diretta, studiando la propagazione al suo interno di onde meccaniche.

{{% box tipo="definizione" titolo="" %}} 
L’astrosismologia (talvolta detta anche asterosismologia) è la disciplina che studia la struttura interna delle stelle attraverso l’analisi delle loro oscillazioni globali, cioè di pulsazioni periodiche della superficie stellare generate da onde stazionarie che si propagano e si riflettono all’interno della stella.
{{% /box %}}

Tali oscillazioni si manifestano come minuscole variazioni di luminosità dell'ordine di poche parti per milione. La possibilità di rilevare tali variazioni a distanze di centinaia o migliaia di anni luce è un progresso recente dell'astrofisica che ha richiesto lo sviluppo di strumenti avanzatissimi per la [fotometria]({{< relref "/dizionario/fotometria/" >}}), come i telescopi spaziali CoRoT, Kepler e Tess, e [spettroscopi]({{< relref "/dizionario/spettroscopia/" >}}) con risoluzione spettrale elevatissima, in grado di rilevare variazioni della velocità radiale delle stelle osservate nell'ordine dei metri al secondo [^nasce].

Ogni stella ha i suoi "modi" di vibrare, paragonabili alle diverse note che uno strumento musicale può produrre. La frequenza e l'ampiezza di queste oscillazioni sono direttamente collegate allo stato fisico, alla composizione chimica e alla densità degli strati stellari che attraversano. Ciò rende l'astrosismologia uno strumento fondamentale per comprendere l'evoluzione stellare e determinare parametri come massa, raggio, età e rotazione interna delle stelle.

La disciplina ha assunto di recente un'importanza ancora maggiore perché, nel caso di stelle isolate dotate di sistemi planetari, consente di ricavare con precisione i parametri stellari e di derivare da essi alcuni parametri fondamentali degli esopianeti da cui è orbitata (per esempio, il raggio, nel caso di pianeti che transitano davanti al disco stellare).

{{< figura 
src="immagini/astrosismologia.png" 
width="" 
alt="Una grafica che riassume i concetti fondamentali dell'astrosismologia." 
caption="Una grafica che riassume i concetti fondamentali dell'astrosismologia. Crediti: Chat GPT"
>}}

## Onde stazionarie

Le oscillazioni studiate dall'astrosismologia sono onde stazionarie. A differenza di un'onda progressiva, che trasporta forma ed energia da un punto all'altro dello spazio, un'**onda stazionaria** *non si propaga*: il suo profilo spaziale resta fisso. Ciò che varia nel tempo è soltanto l'ampiezza dell'oscillazione in ogni punto. Matematicamente, la variabile spaziale e quella temporale si separano (si dice che l'onda è "separabile"):

$$ y(x,t) = A\sin(kx)\cos(\omega t) $$

Qui $\sin(kx)$ descrive una forma spaziale fissa, che non trasla mai, mentre $\cos(\omega t)$ modula nel tempo, in fase ovunque, l'ampiezza di quella forma. Il risultato è che ogni punto del mezzo oscilla su e giù (o dentro e fuori, nel caso di onde di pressione) restando nella propria posizione, con un'ampiezza che dipende da dove si trova.

Questo produce due tipi di punti caratteristici:

- i **nodi**, punti dove $\sin(kx)=0$ e l'ampiezza di oscillazione è sempre nulla. Quel punto non si muove mai;
- i **ventri** (o antinodi), punti dove $|\sin(kx)|=1$ e l'ampiezza di oscillazione è massima.

Fisicamente, un'onda stazionaria nasce quasi sempre dall'**interferenza di due onde progressive identiche che viaggiano in direzioni opposte**, tipicamente un'onda originaria e la sua riflessione ai bordi del mezzo (il caso classico è una corda di chitarra fissata alle due estremità, o una colonna d'aria in un tubo). Le due onde viaggianti, sommandosi, si cancellano esattamente in certi punti (i nodi) e si rinforzano in altri (i ventri), producendo un pattern stabile.

La condizione perché questo pattern sia stabile è che le dimensioni del mezzo impongano una relazione precisa tra la lunghezza d'onda e le condizioni al contorno (per esempio, gli estremi fissi di una corda devono essere nodi): questo è ciò che definisce un insieme discreto di frequenze permesse — le **frequenze di risonanza**, o modi normali — invece di un continuo di frequenze possibili.

Ed è proprio questo il motivo per cui il concetto è al centro dell'**astrosismologia**: l'interno di una stella si comporta come una **cavità risonante tridimensionale**. Le onde di pressione (o di gravità) che vi si propagano vengono riflesse ai bordi della zona in cui possono esistere fisicamente (per esempio, alla fotosfera per i modi *p*, o ai confini della zona radiativa per i modi *g*), e solo le combinazioni che soddisfano le condizioni al contorno sopravvivono come oscillazioni stazionarie stabili. Le frequenze osservate nello **spettro di potenza**[^spe] sono esattamente le frequenze di questi modi stazionari globali, non di onde che "viaggiano" attraverso la stella in un'unica direzione.

## Modi di pulsazione

Esistono due modi principali di pulsazione studiati dall'astrosismologia:
- i modi *p* (onde di pressione) e
- i modi *g* (onde di gravità).

###  Modi *p* (modi di pressione o acustici)

Sono oscillazioni nelle quali la **forza di richiamo**[^ric] è fornita dal gradiente di pressione del plasma. Costituiscono i modi predominanti nelle stelle simili al Sole e in molte stelle pulsanti della striscia di instabilità, anche se possono essere eccitati da meccanismi fisici differenti (turbolenze convettive nelle stelle di tipo solare, fenomeni legati alla variazione dell'opacità nelle zone di parziale ionizzazione dell'inviluppo - meccanismo κ - nelle stelle pulsanti). 

Le particelle del plasma oscillano prevalentemente in direzione radiale e le onde che ne derivano si propagano all'interno della stella come onde acustiche. Le loro frequenze dipendono dalla struttura interna della stella e, in particolare, dalla distribuzione della velocità del suono nel plasma. Quando queste oscillazioni si manifestano alla fotosfera, producono piccolissime variazioni della luminosità e della velocità radiale della stella, misurabili con strumenti di adeguata precisione. I modi *p* hanno frequenze relativamente alte e sono particolarmente utili per studiare l'involucro stellare. Le stelle del tipo **δ Scuti** sono note per pulsare prevalentemente in modi *p*.

## Frequenza di taglio acustico ($\nu_{\text{cut-off}}$)

Affinché le onde acustiche possano formare modi stazionari intrappolati all'interno della stella, è necessario che vengano *riflesse* quando raggiungono la superficie stellare. È la [fotosfera]({{< relref "/dizionario/fotosfera/" >}}) ad agire come barriera riflettente, ma solo per le onde con frequenza inferiore alla **frequenza di taglio acustico** (indicata con $\nu_{\text{cut-off}}$ o $\nu_{\text{ac}}$):
$$\nu_{\text{cut-off}} \propto \frac{g}{\sqrt{T_{\text{eff}}}},$$
dove $g$ è la gravità superficiale e $T_{\text{eff}}$ è la temperatura efficace della stella.

Se la frequenza di un'onda acustica è **inferiore** a $\nu_{\text{cut-off}}$, la brusca caduta di densità alla fotosfera impedisce all'onda di propagarsi ulteriormente verso l'esterno: l'onda viene riflessa verso l'interno, rimanendo intrappolata nella cavità risonante stellare, dove genera un modo stazionario *p*. Se invece la frequenza **supera** $\nu_{\text{cut-off}}$, l'onda ha energia sufficiente per dissiparsi nell'atmosfera esterna (cromosfera e corona) come onda progressiva smorzata, senza contribuire allo spettro di risonanza della stella.

###  Modi *g* (modi di gravità)

Sono onde interne guidate dalla forza di galleggiamento (la spinta di Archimede)[^1]. Queste onde si propagano nelle regioni profonde, nelle regioni radiative e nel nucleo, e hanno periodi più lunghi e, di conseguenza, frequenze più basse. Sono strumenti preziosi per sondare il nucleo stellare. Le stelle del tipo **γ Doradus** e le **subnane calde di tipo B (sdB)** sono esempi di stelle che mostrano pulsazioni di tipo *g*. Il loro studio ha permesso di ottenere informazioni sulla rotazione del nucleo e sulla convezione al suo interno. L'analisi di questo tipo di oscillazioni consente inoltre di desumere lo stadio evolutivo della stella (se per esempio sta bruciando idrogeno o elio nel nucleo).

{{< figura 
src="immagini/modip-modig.png" 
width="" 
alt="La differenza tra modi p e modi g." 
caption="La differenza tra modi *p* e modi *g* e la loro diffusione nell'interno stellare. Crediti: Chat GPT."
>}}

### Modi *f* e modi misti

Esistono anche altri modi di oscillazione, oltre i due precedentemente elencati. I modi *f* sono onde superficiali, analoghe alle onde che si propagano sulla superficie di un lago. Le loro caratteristiche principali sono la mancanza di nodi radiali e la sensibilità alla gravità superficiale e al raggio della stella.

Uno dei maggiori successi dell'astrosismologia moderna è stato però lo studio dei **modi misti**. Essi si comportano come modi *g* nel nucleo e come modi *p* negli strati esterni.

In altre parole riescono a "collegare" il centro della stella con la sua superficie. Data questa caratteristica unica, sono preziosi da un punto di vista conoscitivo, perché permettono di ricavare informazioni contemporaneamente sul nucleo e sull'involucro stellare.    

Grazie ai modi misti si è scoperto, ad esempio, che nelle stelle giganti rosse il nucleo ruota in genere più velocemente degli strati esterni.

## Formalismo matematico

Le oscillazioni stellari sono, come detto più sopra, onde stazionarie tridimensionali. Sono descritte matematicamente come sovrapposizioni di armoniche sferiche caratterizzate da **tre numeri quantici**: 

- il grado angolare $l$, 
- l'ordine azimutale $m$[^azi] e 
- l'ordine radiale $n$. 

Lo spettro di frequenze osservato è dunque la somma di questi modi individuali. Uno dei parametri più importanti che se ne ricava è la _grande separazione_ (in inglese _large frequency separation_), indicata con il simbolo $\Delta\nu$. Essa rappresenta la differenza di frequenza tra due modi di pressione (modi _p_) consecutivi aventi lo stesso grado angolare ($l$) ma ordine radiale ($n$) differente di un’unità.

In termini matematici:
$$
\Delta\nu \simeq \nu_{n+1,l}-\nu_{n,l}.
$$
In una stella simile al Sole, i modi di pressione producono infatti uno spettro di frequenze quasi regolarmente spaziato, per cui la distanza tra due picchi consecutivi risulta pressoché costante. Questa distanza è appunto la **grande separazione**.

## Origine fisica della grande separazione

Essa è legata al tempo impiegato da un'onda sonora per attraversare il diametro della stella.

Un'onda acustica rimbalza continuamente tra gli strati superficiali e quelli più profondi; le frequenze ammesse sono quelle che permettono la formazione di onde stazionarie. Maggiore è il tempo necessario per attraversare la stella, minore sarà la distanza tra le frequenze consentite.

Per questo motivo, $\Delta\nu$ dipende principalmente dalle dimensioni della stella e dalla velocità del suono al suo interno.

## Relazione con la densità media

Uno dei risultati più importanti conseguiti dall'astrosismologia è l'aver stabilito la stretta correlazione tra la grande separazione e la **densità media** della stella. In buona approssimazione vale infatti la relazione:
$$
\Delta\nu \propto \sqrt{\bar{\rho}},
$$
  
dove $\bar{\rho}$ è la densità media. Poiché
$$
\bar{\rho}=\frac{3M}{4\pi R^3},
$$
si ottiene anche:
$$
\Delta\nu \propto \sqrt{\frac{M}{R^3}}.
$$
Questo significa che:

- una stella **più compatta** possiede una grande separazione più ampia; 
- una stella **più estesa**, come una gigante rossa, presenta una grande separazione molto più piccola.

## Grande separazione ed esopianeti

La grande separazione $\Delta\nu$ è spesso il primo parametro estratto dallo spettro di potenza di una stella, e funge da **chiave di accesso** ai suoi parametri globali. La sua importanza pratica emerge con chiarezza quando si affronta la caratterizzazione di sistemi planetari: se una stella ospita un esopianeta che transita sul suo disco, la profondità del transito fornisce solo il rapporto tra i raggi del pianeta e della stella $(R_p/R_\star)$. Per ottenere il raggio assoluto del pianeta è però indispensabile conoscere con precisione $R_\star$, e qui l'astrosismologia offre un vantaggio difficilmente replicabile con altri metodi. 

La relazione $\Delta\nu \propto \sqrt{\bar{\rho}}$, combinata con la frequenza di massima potenza $\nu_{\max}$ (ricavabile dallo stesso spettro) permette di determinare indipendentemente la **densità media** della stella e, tramite i modelli evolutivi, la sua **massa** e il suo **raggio**. Un margine di errore del $3\%$ sul raggio stellare, ottenuto analizzando minuscole variazioni di luminosità di un astro distante centinaia di anni luce, rappresenta un grado di precisione eccezionale. 

Con i metodi classici, come la classificazione spettrale o le relazioni massa-raggio empiriche, l'incertezza sul raggio può facilmente superare il $10-15\%$. L'astrosismologia riduce questo margine a pochi punti percentuali, trasformando il raggio planetario da una stima approssimativa in una misura affidabile. Questo salto di precisione è decisivo quando si valuta, per esempio, se un pianeta roccioso rientri nelle dimensioni terrestri o se una super-Terra possieda un'atmosfera estesa: una differenza di pochi centesimi nel rapporto $R_p​/R_{\star}$​ , propagata con un raggio stellare noto a meno del $3\%$, può cambiare la classificazione di un corpo celeste da "terrestre" a "sub-Nettuniano gassoso".

Oltre alla geometria del sistema, $\Delta\nu$ offre un vincolo potente sulla **datazione stellare**. Poiché la densità media evolve drasticamente nel tempo - una stella di massa solare aumenta il proprio raggio di un ordine di grandezza durante la fase di gigante rossa - la misura di $\Delta\nu$ consente di collocare la stella sulla sequenza evolutiva corretta con un'incertezza inferiore al $10\%$, spesso migliore di quella ottenibile dalla fotometria o dallo spettro da soli. Questo è fondamentale per stimare l'età del sistema planetario e, di conseguenza, il tempo a disposizione per l'evoluzione atmosferica o per lo sviluppo di condizioni abitabili sui pianeti orbitanti.

Per questi motivi, la grande separazione è considerata uno dei principali **parametri astrosismici globali**. Tuttavia, se $\Delta\nu$ descrive l'architettura generale della stella, non basta a distinguere dettagli fini della struttura interna: per questo si ricorre a un secondo parametro, la piccola separazione.

## Grande e piccola separazione

Esiste anche una **piccola separazione**, indicata con $\delta\nu$.

Mentre la grande separazione confronta modi consecutivi con lo **stesso grado angolare**, la piccola separazione confronta modi aventi **gradi angolari differenti a parità di ordine radiale**. Quest'ultima è molto sensibile alle condizioni del nucleo stellare e costituisce un eccellente indicatore dell'età della stella.
Riassumendo:

- la **grande separazione** $\Delta\nu$ misura soprattutto la **densità media** della stella;    
- la **piccola separazione** $\delta\nu$ fornisce informazioni sulla **struttura e sull'evoluzione del nucleo**.    

La combinazione di questi due parametri costituisce uno degli strumenti più potenti dell'astrosismologia moderna, perché permette di determinare con elevata precisione le proprietà fondamentali delle stelle semplicemente analizzando il loro spettro di oscillazioni.

##  Formalismo matematico per i modi *g*

Dopo aver visto in dettaglio le implicazioni della grande separazione, vediamo ora il formalismo equivalente per i modi *g*, la cui forza di richiamo è la spinta di galleggiamento. 

I modi *g* si propagano nelle regioni radiative dell'interno stellare, tipicamente nel nucleo, e sono caratterizzati dalla frequenza di Brunt–Väisälä $N$ [^Brunt]. A differenza dei modi *p*, nel regime asintotico sono equispaziati in **periodo**, non in frequenza. La formula di riferimento è la seguente:
$$ \Delta\Pi_l = \frac{2\pi^2}{\sqrt{l(l+1)}}\left(\int \frac{N}{r}\,dr\right)^{-1} $$
La formula dice che, se prendiamo due modi *g* consecutivi con lo stesso grado $l$ (per esempio due modi dipolari, $l=1$), la differenza tra i loro **periodi** ($\Pi = 1/\nu$, non le frequenze) è, nel regime asintotico ad alto ordine[^2], sempre la stessa quantità costante $\Delta\Pi_l$, determinata unicamente dalla struttura interna della stella, non dal particolare modo scelto. È l'esatto analogo concettuale di $\Delta\nu$: come $\Delta\nu$ è il tempo di andata e ritorno di un'onda sonora attraverso il diametro stellare, $\Delta\Pi_l$​ è una quantità globale legata al tempo che un'onda di galleggiamento impiega ad attraversare la zona in cui i modi *g* possono esistere.

Nel Sole i modi *g* non sono mai stati rilevati con certezza in superficie, perché smorzati nell’attraversare l’inviluppo convettivo esterno. Nelle giganti rosse, invece, l’accoppiamento tra modi *p* (dominanti nell’inviluppo) e modi *g* (dominanti nel nucleo denso) genera i modi misti già menzionati, che ereditano la sensibilità dei modi *g* alle condizioni del nucleo pur restando osservabili in superficie con l’ampiezza tipica dei modi *p*. È questo il motivo per cui l’astrosismologia delle giganti rosse è oggi uno strumento privilegiato per la datazione stellare.

## Un paio di esempi numerici

Nel Sole i valori di riferimento più comunemente adottati sono $\Delta\nu_\odot \approx 134{,}9\,\mu\text{Hz}$ e $\nu_{\text{max},\odot}\approx 3.090\,\mu\text{Hz}$. In una gigante rossa evoluta l’espansione del raggio e la diminuzione della gravità superficiale spostano lo spettro verso frequenze molto più basse: nella gigante rossa [KIC 10001167](https://www.aanda.org/articles/aa/full_html/2025/07/aa53347-24/aa53347-24.html) ($R \approx 13\,R_{\odot}$) si misura $\nu_\text{max} \approx 19{,}8\,\mu\text{Hz}$, circa $155$ volte inferiore a quello solare. Tale differenza mostra come la frequenza di oscillazione sia un eccellente indicatore delle dimensioni stellari.


[^nasce]: La disciplina nasce negli anni '70 con le osservazioni eliosismologiche; il salto verso le stelle diverse dal Sole arriva con il satellite CoRoT, nel 2006, e soprattutto con il telescopio spaziale Kepler, nel 2009.

[^spe]: Lo spettro di potenza è la rappresentazione di un segnale variabile nel tempo (nel nostro caso la curva di luce di una stella, cioè la sua luminosità misurata in funzione del tempo), non più nel dominio del tempo, ma nel **dominio della frequenza**. Esso mostra quanta "potenza" - energia per unità di tempo - del segnale originale è associata a ciascuna frequenza di oscillazione.

[^ric]: La forza di richiamo è quella forza che spinge un oggetto (o un elemento di fluido) a tornare alla sua posizione di equilibrio, quando qualcosa lo allontana da quella posizione. È l'ingrediente fisico che rende possibile qualunque oscillazione: senza una forza di richiamo, un sistema spostato dall'equilibrio non tornerebbe mai indietro, semplicemente resterebbe dov'è finito. L'esempio più semplice è una molla: se la allunghi, la tensione elastica la richiama verso la lunghezza di riposo; superata quella posizione per inerzia, la compressione la richiama di nuovo indietro nell'altro verso. 

[^1]: Il meccanismo della **spinta di galleggiamento** (forza di Archimede) è questo: se in una regione radiativa stabilmente stratificata, dove la densità diminuisce con il raggio più lentamente di quanto farebbe un elemento di gas spostato adiabaticamente, sposti verticalmente un elemento di fluido, questo si ritrova più denso — o meno denso — dell'ambiente circostante. La differenza di densità genera una forza di richiamo che lo fa oscillare attorno alla posizione di equilibrio, con una frequenza caratteristica data dalla frequenza di Brunt–Väisälä $N$. È lo stesso principio fisico delle onde interne che si osservano nell'oceano, all'interfaccia tra strati d'acqua di densità diversa, o nell'atmosfera in presenza di forte stratificazione termica. Non c'è compressione del mezzo nel senso acustico, ma un moto oscillatorio di galleggiamento.

[^azi]: Per ogni grado angolare $l$, l'**ordine azimutale $m$** (che può assumere $2l+1$ valori interi compresi tra $-l$ e $+l$) descrive la simmetria geometrica dell'oscillazione rispetto all'asse di rotazione della stella. In una stella perfettamente sferica e statica, la frequenza di oscillazione dipende soltanto da $n$ e da $l$: i diversi valori di $m$ condividono tutti esattamente la stessa frequenza (in fisica si dice che lo stato è **degenerato**). Tuttavia, la presenza di una rotazione stellare o di campi magnetici rompe la simmetria sferica e "rompe la degenerazione": l'unica frequenza originaria si separa *(splitting)* in una serie di frequenze distinte ma vicine tra loro, corrispondenti ai diversi valori di $m$. Misurare questa separazione tra i picchi nello spettro di frequenza permette agli astrosismologi di determinare la **velocità di rotazione** interna della stella e la sua **inclinazione** rispetto alla nostra linea di vista.

[^Brunt]: La **frequenza di Brunt–Väisälä** (spesso indicata con $N$) descrive quanto "galleggia" o "rimbalza" una particella di fluido (o di gas) quando viene spostata dalla sua posizione di equilibrio in un ambiente stratificato. In astrofisica e geofisica, viene anche chiamata **frequenza di galleggiamento** (_buoyancy frequency_), ed è la grandezza fondamentale che governa la nascita e la propagazione delle **onde di gravità** (o modi $g$). In astrosismologia, la frequenza $N$ definisce il **limite superiore di frequenza** per la propagazione delle onde di gravità (modi $g$). Un'onda di gravità può propagarsi all'interno della stella solo se la sua frequenza $\omega$ è minore di $N$ ($\omega < N$). Poiché $N$ raggiunge i suoi valori più alti nelle regioni profonde vicine al nucleo (dove i gradienti di densità e di composizione chimica sono molto forti), le onde $g$ forniscono una "sonda" eccezionale per studiare i nuclei stellari.

[^2]: Si dice regime asintotico ad alto ordine una condizione nella quale le oscillazioni della stella diventano sufficientemente regolari da poter essere descritte con formule matematiche semplici, rendendo più agevole lo studio della sua struttura interna.
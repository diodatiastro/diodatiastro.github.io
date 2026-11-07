+++
title = "Curva di luce"
date = "2026-11-06"
draft = false
+++

{{< katex />}}

{{% box tipo="definizione" titolo="" %}}
Una **curva di luce** è un grafico che mostra come varia nel tempo la luminosità apparente di un corpo celeste. Sull'asse orizzontale si riporta il tempo, su quello verticale la luce ricevuta, espressa in [magnitudini apparenti]({{< relref "/dizionario/magnitudine-apparente/" >}}) oppure come [flusso di radiazione]({{< relref "/dizionario/flusso-di-radiazione/" >}}). È il prodotto più diretto della [fotometria]({{< relref "/dizionario/fotometria/" >}}) quando le misure vengono ripetute nel tempo. Da una curva di luce si ricavano periodi di rotazione e di rivoluzione, dimensioni relative di stelle e pianeti, la presenza di pulsazioni stellari e l'evoluzione di novae e supernove. Non va confusa con la [curva di fase]({{< relref "/dizionario/curva-di-fase/" >}}), che riporta la luminosità in funzione dell'[angolo di fase]({{< relref "/dizionario/angolo-di-fase/" >}}) e non del tempo.
{{% /box %}}

## Come si legge una curva di luce

Il tempo è di solito espresso in **giorni giuliani**[^giuliana], che permettono di confrontare senza ambiguità osservazioni separate da anni o da secoli. Quando la luminosità è espressa in magnitudini, l'asse verticale è rovesciato: le magnitudini più piccole, che corrispondono agli oggetti più brillanti, stanno in alto. Nelle curve di luce ottenute dallo spazio si preferisce invece il flusso normalizzato, posto uguale a $1$ quando la stella è al suo livello abituale. Le variazioni più piccole si esprimono allora in parti per milione (**ppm**).

[^giuliana]: Il **giorno giuliano** è un sistema di datazione usato in astronomia, che indica ogni istante con il numero di giorni, comprese le frazioni, trascorsi dal mezzogiorno del 1° gennaio 4713 a.C. del calendario giuliano. Una data espressa con un solo numero evita le complicazioni dei calendari e permette di calcolare direttamente l'intervallo fra due osservazioni. Nelle misure più precise il tempo viene corretto per il ritardo con cui la luce raggiunge la Terra nelle diverse posizioni della sua orbita, riferendolo al centro del Sole (data giuliana **eliocentrica**) o al baricentro del Sistema Solare (data giuliana **baricentrica**).

Quasi sempre la luminosità di una stella si misura per confronto. La foschia, le nubi sottili e l'altezza sull'orizzonte indeboliscono della stessa frazione la luce di tutte le stelle di un piccolo campo. Se, per esempio, una velatura fa calare del $10\%$ la luce di ciascuna rispetto a quella che si riceverebbe a cielo limpido, il rapporto fra la luminosità della stella in studio e quella delle stelle vicine resta lo stesso e così pure la loro differenza di magnitudine. Per questo la stella sotto osservazione si misura rispetto ad alcune stelle vicine: nel confronto gli effetti dell'atmosfera si annullano e restano solo le reali variazioni di luminosità dell'oggetto studiato. È la **fotometria differenziale**. Le stelle di confronto devono però essere davvero costanti. Nel 1999 Gregory Henry e colleghi, mentre cercavano il transito[^transito] del pianeta di HD 209458, [scartarono](https://doi.org/10.1086/312458) una delle tre stelle di confronto che avevano scelto, perché si rivelò a sua volta variabile, con un'ampiezza di circa un centesimo di magnitudine.

[^transito]: Si dice **transito** il passaggio di un corpo celeste davanti al disco di un altro più grande, dal punto di vista dell'osservatore. Quando un pianeta transita davanti alla sua stella, ne copre una piccola parte e la luce che riceviamo diminuisce di una frazione misurabile per tutta la durata del passaggio.

Quando una variazione si ripete con regolarità, la sequenza completa di cambiamenti che torna ogni volta uguale si chiama **ciclo**, mentre il tempo che un ciclo impiega a compiersi si chiama **periodo**. Il ciclo indica che cosa accade alla luce della stella, il periodo quanto tempo serve perché il ciclo si compia: i cicli si contano, il periodo si misura in unità di tempo. Le misure raccolte in molti cicli si possono allora sovrapporre in un unico ciclo, costruendo la **curva di luce in fase**. A ogni istante di osservazione $t$ si associa la frazione di ciclo trascorsa da un istante di riferimento $t_0$, per esempio un minimo:

$$
\varphi = \frac{t - t_0}{P} - \left\lfloor \frac{t - t_0}{P} \right\rfloor
$$

dove $P$ è il periodo, espresso nella stessa unità di tempo di $t$ e $t_0$, e le parentesi $\lfloor\;\rfloor$ indicano la parte intera. La fase $\varphi$ varia quindi fra $0$ e $1$.

Consideriamo a titolo di esempio Algol, nota anche come *Beta Persei*. È in realtà un sistema di più stelle: due di esse ruotano l'una intorno all'altra in un'orbita stretta e si eclissano a vicenda, mentre una terza, più lontana, non partecipa alle eclissi. Il periodo delle due stelle centrali è di $2{,}867$ giorni: in ogni ciclo la più debole passa una volta davanti alla più brillante e la luce che riceviamo cala vistosamente per alcune ore, mentre per il resto del ciclo resta quasi costante. Fissiamo come istante di riferimento $t_0$ uno di questi minimi, osservato nel giorno giuliano $2\,460\,000{,}0$. Una misura eseguita dieci giorni dopo, al giorno giuliano $2\,460\,010{,}0$, ha fase:

$$\begin{align*}
\varphi &= \frac{2\,460\,010{,}0 - 2\,460\,000{,}0}{2{,}867} - \left\lfloor \frac{2\,460\,010{,}0 - 2\,460\,000{,}0}{2{,}867} \right\rfloor \\
&= \frac{10}{2{,}867} - \left\lfloor \frac{10}{2{,}867} \right\rfloor = 3{,}488 - 3 = 0{,}488
\end{align*}$$

In quei dieci giorni Algol ha compiuto tre cicli completi, e la misura cade poco prima della metà del quarto. Nella curva in fase questo punto va quindi a $\varphi = 0{,}488$, vicino a tutte le altre misure con fase uguale o simile, anche se raccolte in cicli diversi.

{{< figura 
src="immagini/algol-tess-lightcurve.png" 
width="70%" 
alt="La curva di luce di Algol, con il suo periodo di 2,867 giorni, registrata durante novembre 2019 dal telescopio spaziale della NASA TESS." 
caption="La curva di luce di Algol, con il suo periodo di $2{,}867$ giorni, registrata durante novembre 2019 dal telescopio spaziale della NASA TESS. Il minimo più profondo è dato dal passaggio della stella più fioca davanti a quella più luminosa. Il minimo secondario, a metà tra due minimi profondi, è dato dal passaggio della stella più debole dietro quella più brillante. Crediti: Warrickball, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.it), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Algol_TESS_lightcurve.png)."
>}}

Il periodo di Algol era già noto da tempo. Quando, invece, una stella variabile è stata appena scoperta, il periodo è proprio ciò che si cerca. Di solito le misure sono sparse, interrotte dal giorno, dal maltempo e dalla stagione, per cui ciascuna notte di osservazione coglie solo un frammento di ciclo. Si calcola allora la fase di ogni misura con molti periodi di prova. Con il periodo giusto ogni misura viene associata alla fase corrispondente al punto del ciclo in cui la stella si trovava davvero e i punti raccolti in cicli diversi si dispongono lungo una curva netta. Con un periodo sbagliato le fasi non corrispondono e i punti si disperdono nel grafico. Scegliere il periodo che produce la curva più ordinata è uno dei modi più semplici per trovare il periodo di una stella variabile. Questo tipo di fase, che misura il tempo all'interno di un ciclo, non ha nulla a che vedere con l'angolo di fase, che è invece una grandezza geometrica.

{{< figura
src="immagini/periodo-giusto-sbagliato.svg"
alt="Due grafici affiancati con le stesse misure di una binaria a eclisse simile ad Algol, riportate in fase con due periodi diversi."
caption="Le stesse $443$ misure di una binaria a eclisse simile ad Algol (dati simulati), riportate in fase con due periodi di prova. A sinistra, con un periodo sbagliato di $2{,}750$ giorni, i punti raccolti durante le eclissi si disperdono senza disegnare alcun ciclo. A destra, con il periodo giusto di $2{,}867$ giorni, tutte le misure si dispongono lungo la stessa curva, con l'eclisse principale al centro. L'istante di riferimento è stato scelto mezzo periodo prima di un minimo principale, in modo che l'eclisse cada a metà del grafico. Crediti: Michele Diodati/Claude"
>}}

## Dall'occhio ai rivelatori

Nella seconda metà del Seicento Geminiano Montanari, a Bologna, aveva notato che Algol appariva di grandezza diversa in anni diversi. Fu però John Goodricke, un giovane astronomo inglese, a scoprire la regolarità del fenomeno. In una lettera letta alla Royal Society il 15 maggio 1783, Goodricke [riferì](https://doi.org/10.1098/rstl.1783.0027) di aver visto la stella cambiare luminosità per la prima volta il 12 novembre 1782. Dalla fine di dicembre l'aveva seguita in ogni notte serena, confrontandola con le stelle vicine, e l'amico Edward Pigott ne aveva confermato le osservazioni. Algol restava per la maggior parte del tempo alla sua luminosità abituale, quella di una stella di seconda grandezza. Poi, in circa tre ore e mezza, scendeva fino a circa la quarta grandezza e in altrettanto tempo tornava come prima: l'intero calo durava quindi circa sette ore. Goodricke si accorse che questi cali si ripetevano a intervalli regolari. Per stabilirne il periodo, cioè il tempo che separa l'inizio di un calo da quello successivo, divise gli intervalli fra i minimi osservati per il numero di ripetizioni avvenute nel frattempo, e ottenne ogni volta circa $2$ giorni, $20$ ore e tre quarti. Come causa avanzò due ipotesi: un grande corpo in orbita intorno alla stella, che la oscurava periodicamente, oppure una rotazione di Algol, che portava verso la Terra una parte della sua superficie coperta di macchie. Precisò comunque che il suo scopo era comunicare fatti e non congetture. Quella di Goodricke era una curva di luce raccontata a parole e senza alcun grafico, ma conteneva già il procedimento essenziale: confronti con stelle di riferimento e ricerca del periodo attraverso il confronto dei tempi dei minimi.

Nell'Ottocento le stime a occhio divennero un metodo codificato, il "metodo dei gradini" che prende il nome dall'astronomo tedesco Friedrich Argelander, in cui la luminosità della variabile si stima per piccoli scarti rispetto a stelle di confronto. Lo usano ancora oggi gli osservatori amatoriali di stelle variabili. Come [ricostruisce](https://arxiv.org/abs/astro-ph/0106313) Kevin Krisciunas nella sua storia della fotometria, nel 1850 John Adams Whipple ottenne all'Osservatorio di Harvard la prima fotografia di una stella. Pochi anni dopo, nel 1856, Norman Pogson diede alla scala delle magnitudini la definizione matematica moderna. Nei decenni seguenti la lastra fotografica permise di misurare insieme molte stelle e di conservarne la registrazione. Proprio sulle lastre di Harvard Henrietta Leavitt studiò le variabili della Piccola Nube di Magellano. Nel 1912 [pubblicò](https://scixplorer.org/abs/1912HarCi.173....1L/abstract) i periodi di $25$ di esse, ricavati dalle loro curve di luce: diminuivano lentamente di luminosità, restavano a lungo vicino al minimo e risalivano molto in fretta fino a un breve massimo. Leavitt notò inoltre che le variabili più brillanti avevano i periodi più lunghi, una relazione che si rivelò fondamentale per misurare le distanze.

La svolta successiva venne dai rivelatori elettrici. Joel Stebbins, dell'Università dell'Illinois, mise una cella al selenio, raffreddata nel ghiaccio, al fuoco di un rifrattore da dodici pollici. Dopo una curva di luce della Luna pubblicata nel 1907 con F. C. Brown, nel 1910 Stebbins [misurò](https://doi.org/10.1086/141796) quella di Algol con un errore probabile di circa sei millesimi di magnitudine fuori dall'eclisse principale, una precisione che nessun metodo visuale o fotografico aveva mai raggiunto. Le velocità radiali[^velocita] misurate da Hermann Carl Vogel avevano già dimostrato che Algol è una binaria a eclisse. Stebbins scoprì un minimo secondario[^secondario] profondo appena sei centesimi di magnitudine, che gli osservatori visuali avevano cercato invano, e ne concluse che la compagna non è un corpo oscuro, ma una stella meno luminosa di Algol. Notò anche una lenta variazione continua fra un minimo e l'altro, che attribuì all'emisfero della compagna illuminato da Algol, visibile in misura diversa durante l'orbita.

[^velocita]: La **velocità radiale** è la componente della velocità di un astro lungo la linea di vista, misurata attraverso lo spostamento Doppler delle righe del suo spettro. In un sistema binario varia con il periodo orbitale.

[^secondario]: In una binaria a eclisse, il **minimo secondario** è il calo di luce che si produce quando la compagna meno luminosa passa dietro la stella principale e ne viene nascosta in tutto o in parte. È meno profondo del minimo principale, quando è la compagna a passare davanti alla stella principale, perché la superficie che sparisce alla vista è più fredda e quindi meno brillante. Nel caso di Algol la stella principale ha una temperatura superficiale di circa $12\,500$ kelvin, la compagna di circa $4900$.

Dopo il 1945 il fotomoltiplicatore[^fotomoltiplicatore] sostituì la lastra come strumento principale della fotometria. Nel 1953 Harold Johnson e William Morgan definirono il sistema di filtri UBV[^ubv]. Nel 1970 fu presentato il CCD, un sensore che registra fino al $70\%$ e oltre dei fotoni che lo colpiscono, mentre una lastra fotografica ne registra di solito circa l'$1\%$. L'ultimo passo è stato portare i rivelatori nello spazio, lontano dalla turbolenza dell'atmosfera, dove le variazioni misurabili sono scese a poche decine di parti per milione.

[^fotomoltiplicatore]: Un **fotomoltiplicatore** è un tubo a vuoto che trasforma la luce in un segnale elettrico. Un fotone che colpisce il catodo, una superficie fotosensibile, può liberarne un elettrone: nei tubi usati in fotometria a metà Novecento succedeva al massimo a un fotone su dieci circa. Una serie di elettrodi a tensione crescente moltiplicava poi gli elettroni a cascata, fino a produrre un impulso di corrente abbastanza intenso da essere misurato. In fotometria misurava la luce di una sola stella alla volta.

[^ubv]: Il **sistema UBV** è un sistema fotometrico basato su tre filtri, ciascuno dei quali lascia passare una banda di [lunghezze d'onda]({{< relref "/dizionario/lunghezza-donda/" >}}): *U* nel vicino ultravioletto, intorno ai $360$ nanometri; *B* e *V* nel visibile (*B* nel blu intorno ai $440$ nanometri; *V* nel giallo-verde, intorno ai $550$). Misurare la magnitudine di una stella in bande diverse permette di confrontarne i colori: la differenza fra le magnitudini in due bande, detta **indice di colore**, dipende soprattutto dalla temperatura della stella.

{{< figura
src="immagini/fotomoltiplicatore.jpg"
width="60%"
alt="Un fotomoltiplicatore RCA di tipo 1P21 del 1948, con lo zoccolo e il cavo per il collegamento a un fotometro."
caption="Un fotomoltiplicatore RCA di tipo 1P21, prodotto nel 1948, con lo zoccolo e il cavo per collegarlo a un fotometro. È lo stesso tipo di tubo su cui Johnson e Morgan basarono il sistema UBV. Crediti: Michael L. Umbricht / Ladd Observatory, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.it), via Wikimedia Commons."
>}}

## Che cosa racconta una curva di luce

Nelle **binarie a eclisse** ogni periodo orbitale contiene due minimi, uno per ciascuna stella eclissata. La profondità dei minimi dipende dalla luminosità superficiale della stella nascosta, mentre la loro durata e la loro forma dipendono dai raggi delle due stelle rispetto alle dimensioni dell'orbita e dall'inclinazione dell'orbita rispetto alla linea di vista. Unita alle velocità radiali, la curva di luce permette di ricavare masse e raggi delle due stelle in unità assolute: è il metodo più diretto che si conosca per misurare i parametri principali delle stelle.

Nelle **variabili pulsanti**, come le Cefeidi e le RR Lyrae, la stella si espande e si contrae. La curva di luce assume la forma asimmetrica descritta da Leavitt, con una salita rapida e una discesa lenta. Oscillazioni molto più piccole, presenti anche in stelle come il Sole e nelle giganti rosse, sono l'oggetto dell'[astrosismologia]({{< relref "/dizionario/astrosismologia/" >}}), che dalle loro frequenze ricostruisce la struttura interna della stella.

{{< figura
src="immagini/cefeide-v1154-cyg.svg"
alt="La curva di luce della Cefeide V1154 Cygni misurata da Kepler, in funzione del tempo e in fase."
caption="La curva di luce della Cefeide V1154 Cygni, ricavata dalle misure del telescopio spaziale Kepler tra giugno e settembre 2009. A sinistra, trenta giorni di osservazioni: in ogni ciclo la luce sale fino al massimo in circa un giorno e mezzo, poi scende lentamente per più di tre giorni. L'interruzione intorno all'undicesimo giorno corrisponde a una pausa nella raccolta dei dati. A destra, le misure di tre mesi sovrapposte in un unico ciclo con il periodo di $4{,}925$ giorni. Dati: NASA, missione Kepler (archivio MAST). Crediti: Michele Diodati/Claude"
>}}

La **rotazione** lascia anch'essa una traccia nelle curve di luce. Le macchie di una stella attiva entrano ed escono dal disco visibile e modulano la luce con il periodo di rotazione. Un asteroide di forma irregolare mostra all'osservatore superfici di estensione diversa mentre ruota, e la sua curva di luce presenta di solito due massimi e due minimi per ogni giro. Le curve di luce raccolte in notti diverse sono poi il materiale da cui si costruisce la curva di fase.

Il **transito** di un pianeta davanti alla sua stella produce un calo di luce piccolo, regolare e dal fondo arrotondato, che si ripete a ogni orbita. È oggi il metodo con cui è stato scoperto il maggior numero di pianeti extrasolari o esopianeti.

Le **esplosioni stellari** hanno curve di luce che salgono rapidamente fino a un massimo e poi declinano nel corso di settimane o mesi.

Nelle **novae**[^nova] una stella di solito debole aumenta di $8\text{-}20$ magnitudini e raggiunge il massimo in pochi giorni. Poi declina abbastanza in fretta, nell'arco di settimane o mesi, e infine più lentamente, fino a tornare alla luminosità di quiete. La rapidità del declino si esprime con i tempi $t_2$ e $t_3$, cioè con i giorni che la nova impiega a scendere di $2$ o $3$ magnitudini sotto il massimo. Già negli anni Trenta Fritz Zwicky e Dean McLaughlin la misero in relazione con la luminosità al massimo: le novae più luminose sembravano essere anche quelle che declinano più in fretta. Si sperava così di usare le novae per misurare le distanze. Nel 2010 Richard Strope, Bradley Schaefer e Arne Henden [classificarono](https://doi.org/10.1088/0004-6256/140/1/34) $93$ curve di luce ben osservate in base alla loro forma. Distinsero per esempio le curve regolari, quelle con un tratto piatto e quelle con "buchi di polvere": in queste la luce crolla all'improvviso, perché nel gas espulso si forma polvere che nasconde la stella, e risale quando l'involucro, espandendosi, si dirada. Nel 2018 Schaefer, con le distanze misurate dalla sonda Gaia, [giudicò](https://doi.org/10.1093/mnras/sty2388) la relazione fra luminosità e rapidità del declino troppo imprecisa per essere usata come "calibro" per le distanze.

[^nova]: Una **nova** è l'aumento improvviso e temporaneo della luminosità di una stella, che per qualche tempo appare come una "stella nuova", da cui il nome, derivato dal latino. Avviene in un sistema binario stretto, in cui una nana bianca, il residuo compatto di una stella che ha esaurito il combustibile nucleare, sottrae gas alla compagna. Quando lo strato di gas accumulato sulla superficie della nana bianca raggiunge una pressione e una temperatura sufficienti, si innesca una fusione nucleare esplosiva. La nana bianca sopravvive all'esplosione e il fenomeno può ripetersi.

Per le **supernove di tipo Ia**[^supernova-ia] la storia andò diversamente. Yuri Pskovskii aveva proposto fin dagli anni Settanta un legame fra la luminosità al massimo e la rapidità del declino, ma il risultato era stato messo in dubbio. Nel 1993 Mark Phillips lo [confermò](https://doi.org/10.1086/186970) su nove supernove con curve di luce precise e ben campionate: le più luminose al massimo sono quelle che declinano più lentamente, all'opposto di quanto si era osservato per le novae. Da allora la forma della curva di luce serve a correggere la luminosità di queste supernove, che diventano così indicatori di distanza molto più affidabili.

[^supernova-ia]: Una **supernova di tipo Ia** è l'esplosione che distrugge completamente una nana bianca in un sistema binario. Secondo il modello classico, la nana bianca acquista massa dalla compagna finché si avvicina al limite di circa $1{,}4$ masse solari, oltre il quale la [pressione di degenerazione]({{< relref "/dizionario/pressione-di-degenerazione/" >}}) degli elettroni non è più in grado di resistere alla gravità. A quel punto il carbonio e l'ossigeno di cui la stella è composta si trasformano in pochi secondi, con una fusione nucleare incontrollata, in elementi più pesanti. La luce della supernova è alimentata dal decadimento radioattivo del nichel prodotto nell'esplosione e, nei mesi successivi al massimo, da quello del cobalto in cui il nichel si trasforma. La sigla deriva dallo [spettro]({{< relref "/dizionario/spettro-elettromagnetico/" >}}): il tipo I non mostra righe dell'idrogeno, il sottotipo Ia ha una forte riga del silicio.

{{< figura
src="immagini/supernova-2011fe.svg"
alt="La curva di luce della supernova di tipo Ia SN 2011fe nelle bande B e V, dall'esplosione a circa cinque mesi dopo il massimo."
caption="La curva di luce di SN 2011fe, una supernova di tipo Ia esplosa nella galassia M101, nelle bande B (blu) e V (visibile). Il momento dell'esplosione, il 23 agosto 2011, non fu osservato direttamente: è stato ricavato a ritroso dall'andamento della salita. Nelle prime misure, tre giorni dopo, la supernova era più debole di oltre quattro magnitudini rispetto al massimo, che raggiunse l'11 settembre a magnitudine $10$ circa. Poi la luce declinò, prima rapidamente e dopo un mese più lentamente e con regolarità. Nei $15$ giorni successivi al massimo la banda B perde $1{,}21$ magnitudini: è la grandezza che, secondo la relazione di Phillips, indica la luminosità intrinseca della supernova. Dati: Richmond e Smith, [JAAVSO 40, 872 (2012)](https://app.aavso.org/jaavso/article/2883/). Crediti: Michele Diodati/Claude"
>}}

## Il transito di un pianeta

Se, rispetto al nostro punto di osservazione, un pianeta di raggio $R_p$ passa davanti a una stella di raggio $R_\star$, il pianeta copre una frazione del disco stellare pari al rapporto fra le aree dei due dischi. La profondità del transito $\delta$, cioè la frazione di flusso che viene a mancare, vale quindi:

$$
\delta = \frac{\Delta F}{F} \simeq \left(\frac{R_p}{R_\star}\right)^2
$$

La formula vale per un disco stellare di luminosità uniforme (l'elevazione al quadrato della frazione tra parentesi ci ricorda che si tratta di un rapporto tra aree). Il disco reale è più scuro verso il bordo[^bordo], e per questo il fondo della curva di transito non è piatto ma arrotondato. In magnitudini, la stessa profondità corrisponde a:

$$
\Delta m = -2{,}5\,\log_{10}(1-\delta)
$$

[^bordo]: L'**oscuramento al bordo** è la diminuzione della luminosità superficiale di una stella dal centro verso il bordo del disco. Verso il bordo la linea di vista attraversa gli strati esterni della [fotosfera]({{< relref "/dizionario/fotosfera/" >}}) in direzione obliqua e la radiazione che raggiunge l'osservatore proviene da strati meno profondi e più freddi, da cui la minore luminosità osservata.

Per un pianeta come Giove ($R_p = 71\,492\;\mathrm{km}$) in transito davanti a una stella come il Sole ($R_\star = 695\,700\;\mathrm{km}$):

$$
\delta = \left(\frac{71\,492\;\mathrm{km}}{695\,700\;\mathrm{km}}\right)^2 = (0{,}1028)^2 \simeq 0{,}0106
$$

si osserva, cioè, un calo della luminosità di circa l'$1\%$, pari a:

$$
\Delta m = -2{,}5\,\log_{10}(1-0{,}0106) = -2{,}5 \times (-0{,}00463) \simeq 0{,}012\;\text{magnitudini}
$$

Per un pianeta come la Terra ($R_p = 6\,378\;\mathrm{km}$):

$$
\delta = \left(\frac{6\,378\;\mathrm{km}}{695\,700\;\mathrm{km}}\right)^2 = (0{,}00917)^2 \simeq 8{,}4 \times 10^{-5}
$$

il calo di luminosità è di appena $84$ parti per milione, meno di un decimillesimo di magnitudine. La differenza tra un transito di Giove e uno della Terra spiega perché i primi pianeti scoperti con questo metodo fossero tutti giganti gassosi e perché, per trovare pianeti di taglia terrestre, siano stati necessari i telescopi spaziali.

Il ragionamento si può anche rovesciare: dalla profondità misurata si ricava il raggio del pianeta, purché si conosca quello della stella. Henry e colleghi [osservarono](https://doi.org/10.1086/312458) l'inizio di un transito di HD 209458 b la notte del 7 novembre 1999, con un telescopio automatico da $0{,}80$ metri in Arizona. Misurarono un calo di $0{,}017$ magnitudini, pari all'$1{,}58\%$ del flusso. Con un raggio stellare calcolato in $1{,}15$ raggi solari si ottiene:

$$
R_p = R_\star\sqrt{\delta} = 1{,}15 \times 695\,700\;\mathrm{km} \times \sqrt{0{,}0158} = 800\,055\;\mathrm{km} \times 0{,}1257 \simeq 100\,600\;\mathrm{km}
$$

circa $1{,}4$ volte il raggio di Giove, in accordo con il valore di $1{,}42$ raggi gioviani pubblicato dagli autori. Qualche settimana prima, David Charbonneau e colleghi [osservarono](https://doi.org/10.1086/312457) due transiti completi dello stesso pianeta, il 9 e il 16 settembre 1999, con una piccola camera Schmidt di circa $10$ centimetri di apertura. Con un modello che teneva conto dell'oscuramento al bordo e dell'inclinazione dell'orbita e con un raggio stellare di $1{,}1$ raggi solari, ottennero $1{,}27$ raggi gioviani. La differenza tra i due valori mostra quanto il risultato dipenda dalla completezza della curva, dal modello adottato e soprattutto dal raggio della stella, che gli stessi autori indicarono come la principale fonte di incertezza.

{{< figura
src="immagini/transito-hd209458b.png"
alt="La curva di luce di HD 209458 misurata da TESS nel 2022, con otto transiti del pianeta HD 209458 b, e i transiti sovrapposti in fase."
caption="I transiti di HD 209458 b misurati dal telescopio spaziale TESS tra settembre e ottobre 2022. A sinistra, quasi un mese di osservazioni: ogni $3{,}5$ giorni circa la luce della stella cala per circa tre ore (vuol dire che un anno del pianeta dura appena $3{,}5$ giorni terrestri). A destra, gli otto transiti sovrapposti; i punti verdi sono medie su intervalli di dieci minuti. Il calo al centro è dell'$1{,}58\%$ e il fondo è arrotondato dall'oscuramento al bordo della stella. Dati: NASA, missione TESS (archivio MAST). Crediti: Michele Diodati/Claude"
>}}

## Gli strumenti

Per i giganti gassosi in orbite strette bastano telescopi piccoli, come mostra il caso di HD 209458. Per riuscire a registrare curve di luce con cali della luminosità di poche decine di parti per milione serve un telescopio spaziale.

CoRoT, una missione dell'agenzia spaziale francese CNES con la partecipazione dell'ESA, fu lanciato il 27 dicembre 2006 con un telescopio di $27$ centimetri e raccolse le curve di luce di circa $160\,000$ stelle.

Kepler, della NASA, fu lanciato nel marzo 2009 su un'orbita intorno al Sole che lo allontanava gradualmente dalla Terra. Aveva un correttore di $0{,}95$ metri di apertura, uno specchio primario di $1{,}4$ metri e puntava un campo di $115$ gradi quadrati fra le costellazioni del Cigno e della Lira. [Osservò](https://doi.org/10.1126/science.1185402) quasi senza interruzioni circa $150\,000$ stelle per quattro anni. Era stato progettato per rivelare il singolo transito, della durata di $6{,}5$ ore, di un pianeta grande come la Terra davanti a una stella di magnitudine $12$ simile al Sole: proprio il calo di circa $84$ parti per milione calcolato sopra. Dopo un guasto avvenuto nel 2013, che impedì al telescopio di continuare a puntare con precisione la regione designata per le sue osservazioni, continuò a lavorare con la missione K2, osservando campi diversi lungo il piano dell'eclittica, fino al ritiro, il 30 ottobre 2018. Gli si deve la scoperta di oltre $2\,600$ esopianeti.

TESS, lanciato dalla NASA il 18 aprile 2018, adotta la strategia opposta: invece di fissare a lungo un solo campo, scruta gran parte del cielo alla ricerca di pianeti intorno alle stelle più vicine e brillanti, più facili da studiare in seguito con altri strumenti. Le sue quattro camere hanno lenti di $10{,}5$ centimetri di apertura e coprono ciascuna $24 \times 24$ gradi; insieme [formano](https://doi.org/10.1117/1.JATIS.1.1.014003) una striscia di $24 \times 96$ gradi. TESS osserva ogni striscia, detta settore, per $27{,}4$ giorni, pari a due giri della sua orbita intorno alla Terra, poi passa alla successiva.

Il prossimo grande strumento spaziale sarà PLATO, dell'ESA, dotato di $26$ camere: il lancio è previsto nel 2027 e il suo obiettivo principale saranno i pianeti di taglia terrestre nella zona abitabile di stelle simili al Sole.

{{< figura
src="immagini/plato-camere.jpg"
alt="Le 26 camere del telescopio spaziale PLATO viste dall'alto, all'interno della camera di simulazione spaziale del centro di prova dell'ESA."
caption="Le $26$ camere di PLATO fotografate dall'alto all'interno del Large Space Simulator, la grande camera del centro di prova dell'ESA che riproduce le condizioni dello spazio, al termine di una serie di test. Molte delle prove dovevano verificare che le camere rispettassero i requisiti della missione, che sorveglierà contemporaneamente oltre $150\,000$ stelle brillanti. Crediti: [ESA](https://www.esa.int/ESA_Multimedia/Images/2026/04/Close-up_of_Plato_s_cameras)"
>}}

## Tre casi esemplari

### Kepler-16: un pianeta con due soli

La stella KIC 12644769 era già nota come binaria a eclisse con un periodo di $41$ giorni. Durante l'eclisse principale la stella più piccola, B, copre in parte la più grande, A, e la luce del sistema cala di circa il $13\%$. Durante l'eclisse secondaria, B scompare per intero dietro A e la luce cala dell'$1{,}6\%$. Nella curva di luce di Kepler comparvero poi altri tre cali, separati da intervalli diversi, di $230{,}3$ e $221{,}5$ giorni. Laurance Doyle e colleghi [notarono](https://doi.org/10.1126/science.1210923) che quei cali erano dell'$1{,}7\%$: più della riduzione di flusso dovuta all'eclisse di B. Non potevano quindi essere dovuti alla stella secondaria del sistema. La causa dell'eccesso di riduzione del flusso doveva essere il passaggio di un terzo corpo davanti ad A. 

Gli intervalli irregolari si spiegavano con un'orbita intorno a entrambe le stelle, che a ogni passaggio si trovavano in punti diversi della loro orbita reciproca. Gli autori individuarono poi cali molto più deboli, dello $0{,}1\%$, dovuti al passaggio del terzo corpo davanti a B, e ne previdero altri due, che furono trovati nei dati. Restava da stabilire se il terzo corpo fosse un pianeta o una piccola stella. Lo decisero i tempi delle eclissi delle due stelle, che si discostavano dalla periodicità perfetta di circa un minuto: un modello gravitazionale a tre corpi mostrò che il terzo corpo doveva avere meno massa di Giove. Avevano scoperto un pianeta circumbinario, **Kepler-16 b**, simile a Saturno per massa e dimensioni, che percorre in $229$ giorni un'orbita intorno a due stelle di $0{,}69$ e $0{,}20$ masse solari. Tutto questo fu ricavato da una sola curva di luce, completata dalle velocità radiali.

### Betelgeuse: che cosa una curva di luce non può dire

Fra la fine del 2019 e l'inizio del 2020 la luminosità di Betelgeuse scese fino alla magnitudine visuale $+1{,}6$, il valore più basso dall'inizio delle misure strumentali, come racconta l'[articolo dedicato alla stella]({{< relref "/stelle/betelgeuse/" >}}). La curva di luce misurava con precisione quanta luce mancava, ma non poteva dire perché, dal momento che registra la luce dell'intero disco stellare: un raffreddamento della superficie o una nube di polvere davanti alla stella potevano produrre lo stesso calo. Per capire la causa del fenomeno servirono le immagini. Miguel Montargès e colleghi [osservarono](https://doi.org/10.1038/s41586-021-03546-8) il disco della stella con lo strumento SPHERE del Very Large Telescope, prima e durante l'oscuramento: a dicembre 2019 e a gennaio 2020 l'emisfero meridionale della stella era oltre dieci volte meno brillante di quello settentrionale. Gli autori conclusero che una zona della fotosfera si era raffreddata e che il gas al di sopra, raffreddandosi a sua volta, aveva formato una nube di polvere che oscurava parte della stella. In altre parole, SPHERE aveva potuto risolvere il disco di Betelgeuse, mentre, per gli strumenti che registrano la curva di luce, ogni stella, anche la più brillante, resta solo un punto luminoso.

### KIC 8462852: una curva di luce senza modello

Nel 2016 Tabetha Boyajian e colleghi [descrissero](https://doi.org/10.1093/mnras/stw218) la curva di luce di una stella osservata da Kepler, segnalata dai volontari del progetto *Planet Hunters*. Accanto a piccoli cali dello $0{,}5\text{-}1\%$ comparivano due episodi profondi: un calo del $15\%$ verso il giorno $800$ della missione e una serie di cali, il più profondo del $22\%$, dopo il giorno $1500$. Ogni episodio durava da pochi giorni a quasi tre mesi, i cali avevano forme irregolari e non si ripetevano con alcun periodo. Un pianeta o una stella compagna avrebbero prodotto cali periodici e di forma regolare. Osservazioni successive in più bande di colore [mostrarono](https://doi.org/10.3847/2041-8213/aaa405) che i cali sono più profondi nel blu che nel rosso, come accade quando la luce attraversa una nube di polvere fine e non quando viene bloccata da un corpo solido: l'ipotesi oggi più accreditata è quindi la polvere, anche se la sua origine resta da chiarire. Il caso di questa stella singolare resta comunque un esempio di come una curva di luce non serva soltanto a fornire i dati di appoggio per ragionare su fenomeni noti, ma anche a segnalare fenomeni che sfidano la comprensione, comportamenti che non rientrano in alcun modello conosciuto.

{{< figura
src="immagini/kic8462852.png"
alt="La curva di luce di KIC 8462852 nei quattro anni della missione Kepler, con due ingrandimenti sui cali di luce vicino al giorno 800 e dopo il giorno 1500."
caption="La curva di luce di **KIC 8462852** nei quattro anni della missione principale di Kepler, dal 2009 al 2013. Per quasi tutto il tempo la luce della stella restò costante, con variazioni di pochi millesimi; poi crollò due volte, in modo irregolare, senza alcuna periodicità riconoscibile. In basso, gli ingrandimenti dei due episodi: il calo isolato vicino al giorno $800$ e la serie di cali di forma e durata diverse dopo il giorno $1500$. I giorni sono contati nella scala temporale di Kepler, la stessa usata nello studio di Boyajian e colleghi. Dati: NASA, missione Kepler (archivio MAST). Crediti: Michele Diodati/Claude"
>}}
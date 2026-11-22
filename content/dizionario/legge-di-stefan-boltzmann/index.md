+++
title = "Legge di Stefan-Boltzmann"
date = "2026-11-20"
draft = false
+++

{{< katex />}}

{{% box tipo="definizione" titolo="" %}}
La legge di Stefan-Boltzmann stabilisce che la potenza[^potenza] irradiata da ogni metro quadrato della superficie di un [corpo nero]({{< relref "/dizionario/corpo-nero/" >}}), sommata su tutte le lunghezze d'onda, è proporzionale alla quarta potenza della sua temperatura assoluta[^temperaturaassoluta]: $F = \sigma T^4$. Il fattore di proporzionalità $\sigma$ (sigma) è la costante di Stefan-Boltzmann.
{{% /box %}}

[^potenza]: In fisica la **potenza** è l'[energia]({{< relref "/dizionario/energia/" >}}) emessa, trasferita o consumata nell'unità di tempo. Si misura in watt: un watt equivale a un joule al secondo. La luminosità di una stella è la potenza che irradia dall'intera superficie.

[^temperaturaassoluta]: La **temperatura assoluta** è la temperatura misurata a partire dallo zero assoluto, il valore più basso possibile, pari a $-273{,}15\,^\circ\mathrm{C}$. Si esprime in kelvin ($\mathrm{K}$): un kelvin ha la stessa ampiezza di un grado Celsius, quindi per passare dai gradi Celsius ai kelvin basta aggiungere $273{,}15$. È la scala da usare nelle leggi fisiche, perché è proporzionale all'energia cinetica media delle particelle.

## Prima della legge

A metà dell'Ottocento la relazione fra la temperatura di un corpo e la quantità di calore[^calore] che irradia era nota solo attraverso formule empiriche. La più usata era quella che Pierre Louis Dulong e Alexis Thérèse Petit avevano ricavato dal raffreddamento di un grosso termometro a mercurio: secondo la loro formula, quando la temperatura cresce in modo uniforme, il calore irradiato cresce in progressione geometrica. La formula riproduceva bene le misure, ma era stata verificata solo fra $0$ e $280$ gradi Celsius.

[^calore]: **Temperatura** e **calore** non sono la stessa cosa. La temperatura misura l'energia media con cui si agitano le particelle che compongono un corpo e non dipende da quanto il corpo è grande. La somma delle energie di tutte quelle particelle è l'**energia termica** del corpo, che dipende quindi sia dalla temperatura sia dalla quantità di materia. Il calore è la parte di energia termica che passa da un corpo a un altro perché hanno temperature diverse, per contatto o sotto forma di radiazione, e si misura in joule come ogni energia: è il calore irradiato di cui parlano Stefan e i suoi predecessori. Una scintilla ha una temperatura molto più alta di una pentola d'acqua tiepida, ma contiene così poche particelle che la sua energia termica è minima: l'acqua può cedere molto più calore. Nell'uso comune, e spesso anche nei testi di astrofisica, si dice che un corpo accumula calore, intendendo la sua energia termica.

Applicata a temperature molto più alte, dava risultati irrealistici. Claude Pouillet la usò per stimare la temperatura del Sole a partire dalle sue misure del calore solare e ottenne, a seconda delle ipotesi, $1461$ oppure $1761$ gradi Celsius. Valori così bassi spinsero a dubitare della formula e gli esperimenti di John Ericsson e di Jacques-Louis Soret mostrarono che alle alte temperature non era utilizzabile.

## La legge empirica di Stefan

Nel 1879 il fisico austriaco Josef Stefan [presentò](https://viewer.acdh.oeaw.ac.at/viewer/metadata/MN_2Abt_79_1879/1/-/) all'Accademia delle Scienze di Vienna una formula diversa, altrettanto semplice: il calore irradiato da un corpo è proporzionale alla **quarta potenza** della sua temperatura assoluta. Stefan racconta che l'idea gli era venuta leggendo il manuale di fisica di Adolph Wüllner, che riportava gli esperimenti di John Tyndall con un filo di platino reso incandescente dalla corrente elettrica. Tyndall misurava l'intensità della radiazione con una termopila, uno strumento sensibilissimo che trasforma il calore ricevuto in una corrente elettrica, mentre la temperatura del filo non la misurava affatto: indicava soltanto il colore dell'incandescenza. Wüllner [osservava](https://www.digitale-sammlungen.de/de/view/bsb11320713?page=227) che, passando dal rosso debole, a circa $525$ gradi Celsius, al bianco pieno, a circa $1200$ gradi, l'intensità della radiazione cresceva da $10{,}4$ a $122$ unità, cioè di quasi $12$ volte. Stefan ricalcolò il valore con più precisione, $11{,}7$, e notò che il rapporto fra le due temperature assolute, elevato alla quarta potenza, dà quasi lo stesso numero:

$$
\left( \frac{273 + 1200}{273 + 525} \right)^4 = \left( \frac{1473}{798} \right)^4 = (1{,}846)^4 \approx 11{,}6
$$

Wüllner aveva ricavato quelle temperature dagli esperimenti di John William Draper, ma erano troppo incerte per una prova decisiva e Stefan stesso le considerava solo uno spunto. La verifica vera la fece sulle misure di raffreddamento di Dulong e Petit, condotte con termometri precisi fra $0$ e $280$ gradi. Stefan non scrisse la legge con una costante universale, come si fa oggi: nei suoi calcoli confrontava differenze di quarte potenze delle temperature, misurando il calore in unità pratiche riferite a un centimetro quadrato di superficie nera e a un minuto di tempo. Esaminò anche gli esperimenti ad alta temperatura di Draper e di Ericsson, nei quali le temperature erano stimate in modo approssimativo: la sua formula li riproduceva abbastanza bene, mentre quella di Dulong e Petit se ne discostava di molto. In conclusione, la legge di Stefan riproduceva le misure precise ottenute da Dulong e Petit a bassa temperatura altrettanto bene della loro formula, mentre era la sola ad accordarsi anche con le misure ottenute ad alta temperatura negli esperimenti di Draper e di Ericsson. 

Stefan la applicò infine al Sole. Combinando la legge con le misure di Soret, che aveva confrontato il riscaldamento di un termometro esposto prima al Sole e poi a un disco incandescente della stessa grandezza apparente, ricavò per la superficie solare una temperatura assoluta compresa fra $5\,580$ e $5\,838$ gradi. È un intervallo che contiene il valore di $5\,772\,\text{K}$, oggi adottato per la [temperatura efficace]({{< relref "/dizionario/temperatura-efficace/" >}}) del Sole.

## La derivazione di Boltzmann

La legge di Stefan restava una regola empirica, senza una giustificazione teorica. Nel 1884 Ludwig Boltzmann, che di Stefan era stato allievo, la [dedusse](https://doi.org/10.1002/andp.18842580616) dalla fisica allora nota. Boltzmann immaginò uno spazio vuoto racchiuso da pareti a temperatura uniforme[^pareti] e trattò la radiazione che lo riempie come un gas. Dalla teoria elettromagnetica di Maxwell prese il risultato che la radiazione esercita sulle pareti una [pressione]({{< relref "/dizionario/pressione-di-radiazione/" >}}) pari a un terzo della sua **densità di energia**, cioè dell'energia contenuta in ogni metro cubo. Applicando a questo sistema il secondo principio della termodinamica[^secondo], dimostrò che la densità di energia deve crescere con la quarta potenza della temperatura assoluta e, con essa, la radiazione emessa dalle pareti.

[^pareti]: La forma e le dimensioni dello spazio, come il materiale delle pareti, non hanno alcun ruolo. Già Gustav Kirchhoff aveva mostrato che in uno spazio chiuso da pareti alla stessa temperatura la radiazione raggiunge l'equilibrio, e allora le sue proprietà dipendono soltanto dalla temperatura. È questa universalità a fare della radiazione di cavità, cioè della radiazione di corpo nero, l'oggetto di una legge generale. Nel calcolo della pressione conta solo che la radiazione arrivi sulle pareti in egual misura da tutte le direzioni, cioè che sia isotropa. Boltzmann immaginò per comodità lo spazio come un cubo, ma ottenne lo stesso risultato anche con un ragionamento più generale, sommando i raggi che giungono su un tratto di parete da tutte le direzioni.

[^secondo]: Il **secondo principio della termodinamica** stabilisce, in una delle sue formulazioni, che il calore non può passare spontaneamente da un corpo più freddo a uno più caldo. Da esso deriva il concetto di **entropia**, la grandezza che in un sistema isolato non può diminuire.

Boltzmann stesso definì notevole il risultato, pur riconoscendo il carattere provvisorio di molti passaggi del calcolo. Il suo ragionamento spiegava perché la radiazione segue la quarta potenza della temperatura, ma non permetteva di calcolare il valore della costante: per questo occorreva conoscere la forma dello [spettro]({{< relref "/dizionario/spettro-elettromagnetico/" >}}) del corpo nero, che Max Planck avrebbe trovato solo nel 1900.

## La legge nella sua forma attuale

Oggi la legge si esprime in termini di [flusso]({{< relref "/dizionario/flusso-di-radiazione/" >}}) $F$, cioè la **potenza** emessa da ogni metro quadrato della superficie di un corpo nero:

$$
F = \sigma T^4
$$

dove $T$ è la temperatura assoluta in kelvin e $\sigma$ è la costante di Stefan-Boltzmann, di cui parleremo più avanti. Per un corpo sferico di raggio $R$, come una stella, la **potenza totale**, cioè la [luminosità]({{< relref "/dizionario/luminosita/" >}}), si ottiene moltiplicando il flusso per l'area della superficie:

$$
L = 4\pi R^2 \sigma T^4
$$

È la relazione su cui si fonda la definizione della temperatura efficace delle stelle.

Un corpo reale emette meno di un corpo nero alla stessa temperatura. Il motivo sta nella [legge di Kirchhoff]({{< relref "/dizionario/corpo-nero/#la-legge-di-kirchhoff" >}}): un corpo in equilibrio termico emette, a ogni lunghezza d'onda, nella stessa misura in cui assorbe. Il corpo nero assorbe *tutta* la radiazione che lo colpisce, mentre un corpo reale ne riflette o ne lascia passare una parte: deve quindi anche emetterne di meno. Se, infatti, un corpo emettesse più di quanto assorbe, posto in una cavità con pareti alla sua stessa temperatura cederebbe loro energia: il corpo si raffredderebbe e le pareti si scalderebbero. Fra corpi che avevano la stessa temperatura nascerebbe così spontaneamente una differenza di temperatura, cosa che il secondo principio della termodinamica esclude. Di ciò tiene conto l'**emissività** $\varepsilon$, un numero compreso fra $0$ e $1$ che esprime la frazione della radiazione di corpo nero effettivamente emessa[^emissivitastelle]:

[^emissivitastelle]: Per le stelle l'emissività non si usa. Una stella non ha una superficie solida: la radiazione che osserviamo proviene da strati di gas che si trovano a profondità e temperature diverse e che assorbono ed emettono in modo diverso alle varie lunghezze d'onda. Per questo lo spettro di una stella si discosta da quello di un corpo nero. Per descrivere l'emissione complessiva si usa invece la temperatura efficace, cioè la temperatura che dovrebbe avere un corpo nero con lo stesso raggio per irradiare la stessa luminosità. Nella formula della luminosità riportata sopra, $T$ è proprio la temperatura efficace: tutte le differenze rispetto al corpo nero sono già comprese nel suo valore e l'emissività non compare.

$$
F = \varepsilon \sigma T^4
$$

In generale l'emissività cambia con la lunghezza d'onda: nella formula, $\varepsilon$ rappresenta il valore medio dell'emissività sull'intero spettro.

La legge si può scrivere anche per la **densità di energia** $u$ della radiazione all'interno di una cavità, la grandezza da cui era partito Boltzmann. Anche questa cresce con la quarta potenza della temperatura e il suo coefficiente si ricava direttamente dalla costante di Stefan-Boltzmann:

$$
u = a T^4 \qquad \text{con} \qquad a = \frac{4\sigma}{c} = 7{,}566 \times 10^{-16}\,\text{J}\,\text{m}^{-3}\,\text{K}^{-4}
$$

La grandezza $a$, chiamata **costante di radiazione**, compare nel calcolo della pressione di radiazione all'interno delle stelle.

## La costante di Stefan-Boltzmann

Per tutto l'Ottocento la costante si poteva conoscere soltanto misurandola, ma misurarla era difficile. Servivano una sorgente che approssimasse molto bene un corpo nero e uno strumento capace di misurare la potenza irradiata in unità assolute, non solo in letture relative come quelle di Tyndall. Nessuna superficie reale ha un'emissività pari a $1$: neppure la superficie esterna di un contenitore, per quanto annerita, emette come un corpo nero. 

All'interno di una cavità chiusa da pareti a temperatura uniforme, invece, la radiazione emessa e riflessa dalle pareti raggiunge l'equilibrio e ha lo spettro di un corpo nero, qualunque sia il materiale di cui le pareti sono fatte. Ogni tratto di parete **emette** per conto suo meno di un corpo nero, ma **riflette** anche una parte della radiazione che gli arriva da tutti gli altri tratti: all'equilibrio la somma dei due contributi è esattamente la radiazione di corpo nero, perché *ciò che manca all'emissione è compensato dalla riflessione*. Per misurarla bisogna farne uscire un campione attraverso un **foro**, che deve essere piccolo per non alterare l'equilibrio all'interno. La cavità con il suo foro forma così un unico corpo nero e il foro è l'unica via d'uscita della radiazione contenuta all'interno. Quella che entra dal foro rimbalza molte volte sulle pareti interne e viene quasi tutta assorbita prima di poter uscire. Per la legge di Kirchhoff, ciò che esce dal foro è quindi quasi esattamente la radiazione di un corpo nero alla temperatura delle pareti.

{{< figura
src="immagini/cavita-corpo-nero.svg"
alt="Schema in due parti di una cavità con un piccolo foro: a sinistra la luce entra e viene assorbita dalle pareti, a destra le pareti riscaldate dall'esterno emettono radiazione che esce dal foro verso un bolometro."
caption="A sinistra, la luce che entra dal piccolo foro rimbalza sulle pareti e a ogni urto viene in gran parte assorbita: la cavità si comporta come un assorbitore quasi perfetto. A destra, le pareti sono mantenute a temperatura uniforme da una sorgente di calore esterna e la loro superficie interna assorbe ed emette radiazione in ogni punto. Per la legge di Kirchhoff, la radiazione che esce dal foro ha lo spettro di un corpo nero alla temperatura delle pareti e non dipende dalla luce entrata."
>}}

La prima misura assoluta la [ottenne](https://doi.org/10.1002/andp.18983010805) nel 1898 Ferdinand Kurlbaum, alla Physikalisch-Technische Reichsanstalt di Berlino, l'istituto metrologico tedesco. Kurlbaum usò un **bolometro**, una sottile striscia metallica annerita la cui resistenza elettrica cambia quando si scalda. Prima esponeva la striscia alla radiazione e ne misurava la resistenza. Poi toglieva la sorgente e aumentava la corrente elettrica che attraversava la striscia, finché il solo calore prodotto dalla corrente non riportava la resistenza allo stesso valore. A quel punto la potenza elettrica, che si poteva calcolare con precisione, era uguale alla potenza della radiazione assorbita. Come sorgente usò un corpo nero scaldato dal vapore di acqua bollente e poi raffreddato con ghiaccio fondente: le due temperature, $100$ e $0$ gradi Celsius, erano definite con precisione senza bisogno di misurarle. Il risultato fu $\sigma = 5{,}32 \times 10^{-8}\,\text{W}\,\text{m}^{-2}\,\text{K}^{-4}$, circa il $6\%$ in meno del valore attuale.

Il significato della costante si legge nella sua unità di misura, watt al metro quadrato per kelvin alla quarta: $\sigma$ è il flusso emesso da un corpo nero alla temperatura di $1\,\text{K}$. È un valore minuscolo, ma a qualunque altra temperatura il flusso si ottiene moltiplicandolo per $T^4$, che cresce molto rapidamente. Con il valore attuale della costante, riportato più avanti, un corpo nero alla temperatura ambiente di circa $300\,\text{K}$ emette:

$$
F = 5{,}670 \times 10^{-8} \times 300^4 = 5{,}670 \times 10^{-8} \times 8{,}1 \times 10^{9} \approx 459\,\text{W/m}^2
$$

Pochi anni dopo la costante servì a un altro scopo: ricavare il valore di altre due costanti. Alla fine del 1900 Max Planck trovò la legge che descrive lo spettro del corpo nero. Nella sua formula comparivano due costanti nuove, quelle che oggi chiamiamo costante di Planck, $h$, e costante di Boltzmann, $k$. Nell'articolo del 1901 in cui presentò la teoria completa, Planck ne [ricavò](https://doi.org/10.1002/andp.19013090310) i valori da due misure: la costante di Stefan-Boltzmann di Kurlbaum e la costante della legge di Wien[^wien], misurata da Otto Lummer ed Ernst Pringsheim. Ottenne $h = 6{,}55 \times 10^{-34}\,\text{J}\,\text{s}$ e $k = 1{,}346 \times 10^{-23}\,\text{J/K}$, valori che differiscono da quelli attuali di circa l'$1\%$ e il $2{,}5\%$.

[^wien]: La **legge di Wien**, formulata da Wilhelm Wien nel 1893, stabilisce che la lunghezza d'onda alla quale un corpo nero emette la massima intensità è inversamente proporzionale alla sua temperatura assoluta: $\lambda_{\max} T = b$. La costante $b$ vale circa $2{,}898 \times 10^{-3}\,\text{m}\,\text{K}$. Quanto più un corpo è caldo, tanto più il picco della sua emissione si sposta verso le lunghezze d'onda corte: per questo le stelle più calde appaiono azzurre e quelle più fredde rossastre. La legge è trattata nella voce sul [corpo nero]({{< relref "/dizionario/corpo-nero/#la-legge-di-wien" >}}).

Oggi il ragionamento si fa nel senso opposto: non è più la costante di Stefan-Boltzmann a servire per ricavare $h$ e $k$, ma sono queste due costanti, insieme alla velocità della luce, a dare il valore di $\sigma$. Integrando[^integrare] lo spettro di Planck su tutte le lunghezze d'onda si ottiene proprio la quarta potenza della temperatura. Il fattore che la moltiplica dipende soltanto da costanti fondamentali:

[^integrare]: **Integrare** significa, in questo caso, sommare un numero infinito di contributi infinitamente piccoli. La legge di Planck dice quanta potenza emette un corpo nero in ogni piccolo intervallo di lunghezze d'onda. Sommando i contributi di tutti gli intervalli, dalle lunghezze d'onda più corte alle più lunghe, si ottiene la potenza totale. Graficamente è l'area racchiusa sotto la curva dello spettro: più il corpo è caldo, più la curva si alza e più cresce quell'area, in proporzione alla quarta potenza della temperatura.

$$
\sigma = \frac{2\pi^5 k^4}{15\, h^3 c^2}
$$

dove $k$ è la costante di Boltzmann, $h$ la costante di Planck e $c$ la velocità della luce nel vuoto. Ognuna di queste costanti porta nella formula un aspetto della radiazione termica. La costante di Boltzmann lega la temperatura all'energia tipica delle particelle. La costante di Planck esprime il fatto che la radiazione è fatta di quanti di energia e fissa quanti [fotoni]({{< relref "/dizionario/fotone/" >}}) di ogni frequenza possono esserci a una data temperatura. La velocità della luce dice quanto in fretta la radiazione lascia la superficie.

La velocità della luce ha un valore esatto per definizione dal 1983, quando fu usata per definire il metro. Con la revisione del Sistema Internazionale di unità entrata in vigore nel 2019, anche la costante di Planck e la costante di Boltzmann hanno ricevuto valori esatti, fissati per definire il chilogrammo e il kelvin. Di conseguenza anche $\sigma$, che si calcola soltanto da queste tre costanti, ha oggi un valore esatto e non più misurato. Sostituendo i valori:

$$
\sigma = \frac{2\pi^5 \times (1{,}380\,649 \times 10^{-23})^4}{15 \times (6{,}626\,070\,15 \times 10^{-34})^3 \times (299\,792\,458)^2} = \frac{2{,}2239 \times 10^{-89}}{3{,}9219 \times 10^{-82}}
$$

si ottiene

$$
\sigma = 5{,}670\,374\,419\ldots \times 10^{-8}\,\text{W}\,\text{m}^{-2}\,\text{K}^{-4}
$$

I puntini indicano che il valore, pur esatto, ha infinite cifre decimali: è il valore riportato nella [raccolta](https://pml.nist.gov/cuu/pdf/wallet_2022.pdf) delle costanti fisiche pubblicata nel 2022 dal CODATA, il comitato internazionale che ne stabilisce i valori raccomandati. Nei calcoli pratici basta il valore arrotondato $5{,}670 \times 10^{-8}\,\text{W}\,\text{m}^{-2}\,\text{K}^{-4}$.

## Un esempio: Rigel e il Sole

La quarta potenza rende il flusso estremamente sensibile alla temperatura. [Rigel]({{< relref "/stelle/rigel/" >}}) ha una temperatura efficace di circa $12\,100\,\text{K}$, poco più del doppio di quella del Sole. Il rapporto fra i flussi emessi da un metro quadrato delle due superfici stellari è:

$$
\frac{F_{\text{Rigel}}}{F_\odot} = \left( \frac{12\,100}{5\,772} \right)^4 = (2{,}096)^4 \approx 19{,}3
$$

Ogni metro quadrato della superficie di Rigel irradia dunque circa $19$ volte più energia di un metro quadrato della superficie del Sole, anche se la sua temperatura non arriva a due volte e mezza quella del Sole.

{{< figura
src="immagini/legge-stefan-boltzmann-area-sotto-la-curva.svg"
alt="Spettri di corpo nero del Sole e di Rigel in scala reale, con un riquadro che ingrandisce lo spettro del Sole e due quadrati che confrontano l'energia emessa da un metro quadrato delle due stelle."
caption="Spettri di corpo nero del Sole, a $5\,772\,\text{K}$, e di Rigel, a $12\,100\,\text{K}$, disegnati nella stessa scala. L'area sotto ciascuna curva è il flusso emesso da un metro quadrato di superficie: quella di Rigel è circa 19 volte maggiore, come mostrano i quadrati a destra. Nel riquadro, la curva del Sole con la scala verticale ingrandita 20 volte."
>}}

## Differenza tra flusso e luminosità

Flusso e luminosità sono grandezze legate ma diverse. Il flusso si misura in watt al metro quadrato e descrive quanto intensamente emette ogni porzione della superficie: per un corpo nero dipende soltanto dalla temperatura. La luminosità si misura in watt e descrive quanta potenza emette l'oggetto nel suo insieme. Il metro quadrato che compare nell'unità del flusso non è la superficie dell'oggetto, ma l'unità di superficie a cui la potenza viene riferita: il flusso è una potenza per metro quadrato, così come il prezzo di un prodotto venduto a peso è un costo per chilogrammo. Il prezzo al chilogrammo è lo stesso, che si compri un etto o un quintale. La spesa totale invece dipende dalla quantità acquistata: si ottiene moltiplicando il prezzo per il numero di chilogrammi, che nel prodotto si semplificano lasciando soltanto gli euro. Allo stesso modo, moltiplicando il flusso, in watt al metro quadrato, per l'area della superficie, in metri quadrati, i metri quadrati si semplificano e resta la luminosità, in watt:

$$
L = F \times A \qquad \Rightarrow \qquad \text{W} = \frac{\text{W}}{\cancel{\text{m}^2}} \times \cancel{\text{m}^2}
$$

Nel caso del Sole il flusso alla superficie, calcolato con la temperatura efficace di $5\,772\,\text{K}$, è $\sigma T^4 = 6{,}294 \times 10^{7}\,\text{W/m}^2$, e l'area della superficie solare è $6{,}082 \times 10^{18}\,\text{m}^2$. Moltiplicando le due grandezze si ottiene la luminosità:

$$
L_\odot = 6{,}294 \times 10^{7}\,\frac{\text{W}}{\cancel{\text{m}^2}} \times 6{,}082 \times 10^{18}\,\cancel{\text{m}^2} = 3{,}828 \times 10^{26}\,\text{W}
$$

## La cavità come corpo nero

Nella sezione sulla costante si è visto che la radiazione contenuta in una cavità a temperatura uniforme ha lo spettro di un corpo nero, qualunque sia il materiale delle pareti. Questa indipendenza è più ampia di quanto possa sembrare. La superficie interna delle pareti può essere fatta di materiali diversi e nella cavità possono trovarsi oggetti di qualunque tipo: per la legge di Kirchhoff, all'equilibrio la radiazione è sempre la stessa.

Servono però tre condizioni:

- le pareti e gli eventuali oggetti all'interno devono avere tutti la stessa temperatura;
- le pareti devono essere opache in tutto il loro spessore, cioè non devono lasciar passare la radiazione né dall'interno verso l'esterno né in senso opposto;
- all'interno della cavità deve esserci qualcosa che assorba almeno un poco a ogni lunghezza d'onda, sulla superficie interna delle pareti o negli oggetti contenuti.

Opaco non vuol dire assorbente: anche uno specchio è opaco, perché rimanda indietro la radiazione invece di lasciarla passare. La superficie esterna delle pareti non ha alcun ruolo nella radiazione che si forma all'interno.

La terza condizione è la più sottile. In una cavità con la superficie interna *perfettamente riflettente* le pareti non emetterebbero e non assorbirebbero nulla: la radiazione potrebbe conservare per sempre qualunque spettro. Max Planck [osservò](https://archive.org/details/theheatradiation00planrich/page/n63/mode/1up) che, per trasformarla in radiazione di corpo nero, basterebbe introdurvi un minuscolo granello di carbone. Il granello assorbe ed emette, così ridistribuisce fra le varie lunghezze d'onda l'energia che la radiazione già possiede, finché lo spettro diventa quello di corpo nero. L'energia termica del granello è però trascurabile rispetto a quella della radiazione, che resta in pratica costante. La temperatura finale è quindi quella che corrisponde all'energia presente all'inizio, secondo la relazione $u = aT^4$, e non dipende dalle pareti, con cui la radiazione non scambia energia. Se la cavità contenesse poca radiazione, si otterrebbe radiazione di corpo nero fredda anche con le pareti roventi.

Con una superficie interna assorbente le cose vanno diversamente. La radiazione scambia continuamente energia con le pareti, che sono un grande serbatoio di calore mantenuto alla temperatura voluta dal riscaldamento esterno. La radiazione si adegua alle pareti: se le si scalda, si scalda con loro.

I due casi servono a scopi diversi. In laboratorio occorrono pareti assorbenti, perché solo così si ottiene radiazione di corpo nero a una temperatura scelta e nota. Per questo le cavità sperimentali sono scaldate con precisione, come quella usata da Kurlbaum con il vapore e il ghiaccio fondente, e la loro superficie interna viene annerita. L'annerimento non cambia lo spettro all'equilibrio, ma migliora la qualità del foro come corpo nero: se la superficie interna riflettesse molto, la radiazione entrata dal foro troverebbe più facilmente la via d'uscita prima di essere assorbita. Nella teoria è invece utile la cavità a specchio, un esperimento ideale che isola la radiazione e permette di studiarla come un sistema a sé, con una propria energia, una propria temperatura e una propria entropia. È lo stesso tipo di ragionamento seguito da Boltzmann, che trattò la radiazione racchiusa in una cavità come un gas.

+++
title = "Temperatura efficace"
date = "2026-11-19"
draft = false
+++

{{< katex />}}

{{% box tipo="definizione" titolo="" %}}
La **temperatura efficace** di una stella è la temperatura che dovrebbe avere un [corpo nero]({{< relref "/dizionario/corpo-nero/" >}}) delle stesse dimensioni della stella per emettere, in tutto lo spettro, la stessa quantità di energia per unità di tempo. Si indica con $T_{\text{eff}}$ e si misura in kelvin.
{{% /box %}}

## Una temperatura che non si misura in nessun punto

Quando un catalogo o un articolo attribuisce a una stella una temperatura, quasi sempre si tratta della temperatura efficace. Non è però la temperatura di un luogo preciso della stella. La [fotosfera]({{< relref "/dizionario/fotosfera/" >}}) del Sole, per esempio, passa da circa $6\,600\,\text{K}$ alla base a circa $4\,400\,\text{K}$ alla sommità e lo spettro solare, solcato da migliaia di righe di assorbimento, non coincide con quello di un corpo nero.

La temperatura efficace aggira il problema con una definizione di comodo. Si immagina un **corpo nero ideale**, grande quanto la stella, e ci si chiede quale temperatura dovrebbe avere per irradiare la stessa potenza[^potenza] complessiva. Il risultato non è la temperatura di un punto preciso, ma corrisponde all'incirca a quella degli strati della fotosfera da cui la radiazione riesce a sfuggire nello spazio.

[^potenza]: In fisica la **potenza** è l'energia emessa, trasferita o consumata nell'unità di tempo. Si misura in watt: un watt equivale a un joule al secondo. La luminosità di una stella è la potenza che irradia dall'intera superficie.

L'aggettivo "efficace" può trarre in inganno. Nell'uso comune indica qualcosa che ottiene il risultato voluto: un'analogia efficace chiarisce bene un concetto, una misura economica efficace raggiunge il suo scopo. In fisica la parola ha un altro significato, ereditato dall'inglese *effective*: *designa il valore di una grandezza ideale e semplice che produce lo stesso effetto di una situazione reale più complicata*. L'esempio più familiare è la tensione della rete elettrica domestica. I $230$ volt non sono il valore della tensione in un istante qualsiasi, perché la tensione alternata oscilla di continuo, ma il valore di una tensione costante che fornirebbe a una stufa elettrica la stessa potenza media. Nella temperatura efficace la complicazione non riguarda il tempo, ma lo spazio. La temperatura di una stella non oscilla intorno a un valore medio: cambia da uno strato all'altro della fotosfera. La temperatura efficace riassume questa stratificazione in un solo numero, quello del corpo nero che irradierebbe la stessa energia della stella.

## Matematica essenziale della temperatura efficace

Per un corpo nero, la **legge di Stefan-Boltzmann** lega la [luminosità]({{< relref "/dizionario/luminosita/" >}}) $L$ al raggio $R$ e alla temperatura $T$:

$$
L = 4\pi R^2 \sigma T^4
$$

dove $4\pi R^2$ è l'area della superficie e $\sigma = 5{,}670 \times 10^{-8}\,\text{W}\,\text{m}^{-2}\,\text{K}^{-4}$ è la **costante di Stefan-Boltzmann**. Per una stella la stessa relazione diventa la **definizione** della temperatura efficace:

$$
T_{\text{eff}} = \left( \frac{L}{4\pi R^2 \sigma} \right)^{1/4}
$$

Elevare un numero alla potenza $1/4$ equivale a estrarne la radice quarta, quindi la stessa formula si può scrivere anche così:

$$
T_{\text{eff}} = \sqrt[4]{\frac{L}{4\pi R^2 \sigma}}
$$

Nel seguito useremo la prima forma, perché lavorare con le potenze è più comodo che con le radici.

Dalla stessa legge si ricava il [flusso di radiazione]({{< relref "/dizionario/flusso-di-radiazione/" >}}) che esce da ogni metro quadrato della superficie stellare. Il flusso è per definizione la potenza che attraversa un'unità di superficie. Nel Sistema Internazionale l'unità di superficie è il metro quadrato: il flusso si misura quindi in watt al metro quadrato. La luminosità è l'energia emessa ogni secondo dall'intera superficie della stella, che è una sfera di area $4\pi R^2$. Dividendo la luminosità per quell'area si ottiene il flusso alla superficie, $F_{\text{sup}}$:

$$
F_{\text{sup}} = \frac{L}{4\pi R^2} = \frac{4\pi R^2 \sigma T_{\text{eff}}^4}{4\pi R^2} = \sigma T_{\text{eff}}^4
$$

Anche le unità di misura tornano: la costante $\sigma$ si misura in $\text{W}\,\text{m}^{-2}\,\text{K}^{-4}$ e, moltiplicata per una temperatura elevata alla quarta, cioè per $\text{K}^4$, dà proprio watt al metro quadrato. Il flusso che esce da ogni metro quadrato dipende quindi soltanto dalla temperatura efficace e non dalle dimensioni della stella. La dipendenza dalla quarta potenza rende la luminosità molto sensibile alla temperatura: una stella grande come il Sole ma con una temperatura efficace doppia sarebbe $2^4 = 16$ volte più luminosa.

## La coerenza dei valori nominali adottati per il Sole

Gli astronomi esprimono spesso luminosità, raggi e temperature delle stelle in **unità solari**, indicate con il simbolo del Sole, $\odot$: $L_\odot$, $R_\odot$ e $T_{\text{eff},\odot}$ sono la luminosità, il raggio e la temperatura efficace del [Sole]({{< relref "/stelle/sole/" >}}). Fino a pochi anni fa, però, ogni autore usava per il Sole valori leggermente diversi, tratti da misure diverse, il che aveva come conseguenza che i risultati di studi differenti non erano sempre confrontabili con precisione. Per rimediare, nel 2015 l'Unione Astronomica Internazionale (IAU) ha [adottato](https://doi.org/10.3847/0004-6256/152/2/41) un insieme di valori nominali. Non sono valori scelti a caso: corrispondono, arrotondati, alle migliori misure disponibili. A differenza delle misure, però, non vengono aggiornati a ogni nuovo risultato: restano gli stessi finché l'IAU non decide di rivederli. Nel frattempo tutti usano la stessa unità di riferimento. Fra i valori nominali ci sono la luminosità, $3{,}828 \times 10^{26}\,\text{W}$, il raggio, $6{,}957 \times 10^{8}\,\text{m}$, e la temperatura efficace, $5\,772\,\text{K}$. I tre numeri sono coerenti fra loro, come si verifica con la formula.

Calcoliamo prima l'area della superficie solare:

$$
4\pi R_\odot^2 = 4\pi \times (6{,}957 \times 10^{8})^2 = 6{,}082 \times 10^{18}\,\text{m}^2
$$

Sostituiamo poi i valori nella formula della temperatura efficace:

$$
T_{\text{eff},\odot} = \left( \frac{3{,}828 \times 10^{26}}{6{,}082 \times 10^{18} \times 5{,}670 \times 10^{-8}} \right)^{1/4} = \left( 1{,}110 \times 10^{15} \right)^{1/4} \approx 5\,772\,\text{K}
$$

La stima migliore disponibile al momento dell'adozione era $5\,772{,}0 \pm 0{,}8\,\text{K}$: il valore nominale ne è il troncamento all'unità.

## La misura diretta: il caso di Fomalhaut

Per la maggior parte delle stelle, la temperatura efficace si ricava dallo [spettro]({{< relref "/dizionario/spettroscopia/" >}}) o dai colori, confrontandoli con quelli previsti dai modelli di atmosfera stellare. Per poche stelle vicine e brillanti esiste invece una via diretta, che dai modelli dipende solo in minima parte: si misura quanta energia arriva da loro e quanto appare grande il loro disco.

L'energia che esce dalla superficie della stella, di area $4\pi R^2$, si allontana in tutte le direzioni. Quando arriva fino a noi, a una distanza $d$, è distribuita sulla superficie di una sfera molto più grande, di area $4\pi d^2$. Il flusso $F$ che riceviamo è quindi la luminosità della stella divisa per quell'area:

$$
F = \frac{L}{4\pi d^2} = \frac{4\pi R^2 \sigma T_{\text{eff}}^4}{4\pi d^2} = \sigma T_{\text{eff}}^4 \left( \frac{R}{d} \right)^2
$$

Il flusso ricevuto è dunque il flusso alla superficie, $\sigma T_{\text{eff}}^4$, moltiplicato per il rapporto fra l'area della stella e quella della sfera di raggio $d$, cioè $4\pi R^2 / 4\pi d^2$. Semplificando il fattore comune $4\pi$, il rapporto si riduce a $(R/d)^2$. Né $R$ né $d$, però, si misurano direttamente. Quello che l'interferometria misura è il **diametro angolare** $\theta$, cioè l'angolo sotto cui vediamo il disco della stella.

Il legame fra $\theta$ e il rapporto $R/d$ viene dalla definizione di radiante[^radiante]: un angolo espresso in radianti è la lunghezza dell'**arco di circonferenza** che lo sottende divisa per il raggio della circonferenza. Immaginiamo una circonferenza con centro nell'osservatore e raggio pari alla distanza $d$ della stella. Il diametro della stella, $2R$, è così piccolo rispetto a $d$ che coincide in pratica con un arco di quella circonferenza. L'angolo sotto cui lo vediamo vale quindi:

$$
\theta = \frac{2R}{d} \qquad \text{da cui} \qquad \frac{R}{d} = \frac{\theta}{2}
$$

[^radiante]: Il **radiante** è l'angolo che sottende un arco di circonferenza lungo quanto il raggio. Un angolo giro misura $2\pi$ radianti. Un secondo d'arco corrisponde a circa $1/206\,265$ di radiante.

{{< figura
src="immagini/schema-diametro-angolare.svg"
alt="Schema del diametro angolare di una stella vista da un osservatore a distanza d."
caption="Il diametro $2R$ di una stella lontana coincide in pratica con un arco della circonferenza di raggio $d$ centrata sull'osservatore. L'angolo $\theta$ sotto cui lo vediamo, espresso in radianti, è quindi il rapporto $2R/d$."
>}}

Sostituendo nella formula del flusso si ottiene:

$$
F = \sigma T_{\text{eff}}^4 \left( \frac{\theta}{2} \right)^2 = \frac{\sigma T_{\text{eff}}^4\, \theta^2}{4}
$$

e ricavando la temperatura:

$$
T_{\text{eff}} = \left( \frac{4F}{\sigma \theta^2} \right)^{1/4}
$$

La distanza è scomparsa: bastano il flusso totale ricevuto, misurato su tutto lo spettro, e il diametro angolare, misurato con l'interferometria.

[Fomalhaut]({{< relref "/stelle/fomalhaut/" >}}), una delle stelle brillanti più vicine al Sole, è un buon esempio. Nel 2005 Davis e colleghi [stimarono](https://doi.org/10.1002/asna.200410339) il flusso che riceviamo dalla stella, integrato su tutto lo spettro, in $8{,}96 \times 10^{-9}\,\text{W/m}^2$. Con lo strumento VINCI del *Very Large Telescope Interferometer* ne misurarono anche il diametro angolare, pari a $2{,}109$ millesimi di secondo d'arco. Da queste misure ricavarono una temperatura efficace di $8\,819 \pm 67\,\text{K}$.

Nel 2009 Absil e colleghi [rianalizzarono](https://doi.org/10.1088/0004-637X/704/1/150) tutte le misure di VINCI su Fomalhaut, comprese quelle con le basi più corte. Rilevarono così una debole emissione in eccesso, pari a meno dell'$1\%$ della luce stellare nella banda infrarossa osservata, che attribuirono a polvere calda vicina alla stella. L'eccesso, però, influisce poco sulle misure fatte con le basi più lunghe, quelle che determinano il diametro della stella. La loro stima, $2{,}223$ millesimi di secondo d'arco, concordava con quella che Di Folco e colleghi avevano [ricavato](https://doi.org/10.1051/0004-6361:20047189) nel 2004 da altre misure di VINCI ed era più grande del valore di Davis e colleghi, ottenuto da una sola notte di osservazioni. Nel 2012 Eric Mamajek [combinò](https://doi.org/10.1088/2041-8205/754/2/L20) il flusso calcolato da Davis con il nuovo diametro e ottenne una temperatura efficace di $8\,590 \pm 73\,\text{K}$.

Rifacciamo i calcoli. Convertiamo prima il diametro angolare in radianti:

$$
\theta = \frac{2{,}223 \times 10^{-3}}{206\,265} = 1{,}0777 \times 10^{-8}\,\text{rad}
$$

Sostituiamo poi i valori nella formula:

$$
\begin{align*}
T_{\text{eff}} &= \left( \frac{4 \times 8{,}96 \times 10^{-9}}{5{,}670 \times 10^{-8} \times (1{,}0777 \times 10^{-8})^2} \right)^{1/4} \\
&= \left( \frac{3{,}584 \times 10^{-8}}{6{,}585 \times 10^{-24}} \right)^{1/4} = \left( 5{,}442 \times 10^{15} \right)^{1/4} \approx 8\,590\,\text{K}
\end{align*}
$$

Il risultato coincide con quello di Mamajek. Il confronto con il valore di Davis e colleghi mostra quanto conti la misura del diametro. La temperatura efficace scala con l'inverso della radice quadrata di $\theta$. Lo si vede togliendo dalla formula le grandezze che restano costanti, cioè il flusso $F$, il fattore $4$ e la costante $\sigma$ (il simbolo $\propto$ significa "è proporzionale a"):

$$
T_{\text{eff}} \propto \left( \frac{1}{\theta^2} \right)^{1/4} = \left( \frac{1}{\theta} \right)^{1/2}
$$

Il diametro di Absil e colleghi è più grande di quello di Davis e colleghi di circa il $5{,}4\%$:

$$
\frac{2{,}223}{2{,}109} = 1{,}054
$$

A parità di flusso, la temperatura si riduce quindi di un fattore

$$
\left( \frac{1}{1{,}054} \right)^{1/2} = 0{,}974
$$

cioè di circa il $2{,}6\%$. Applicato alla temperatura di Davis e colleghi, questo fattore dà $8\,819 \times 0{,}974 \approx 8\,590\,\text{K}$: oltre $200$ gradi in meno, proprio il valore di Mamajek.

Dal diametro angolare e dalla distanza misurata dal satellite astrometrico Hipparcos, Mamajek ricavò anche il raggio della stella, pari a $1{,}842$ raggi solari: è uno dei motivi per cui i parametri di Fomalhaut sono tra i meglio determinati per una stella diversa dal Sole.

## Quando la superficie non ha una sola temperatura: Vega e Altair

La formula per il calcolo della temperatura efficace presuppone una stella sferica con una superficie uniforme. Nelle stelle che ruotano molto rapidamente il modello non corrisponde alla realtà. La rotazione schiaccia la stella ai poli e la dilata all'equatore, dove la gravità superficiale è minore. Le regioni equatoriali risultano così più fredde e meno luminose di quelle polari, un effetto chiamato **oscuramento gravitazionale**.

[Vega]({{< relref "/stelle/vega/" >}}) è uno dei casi più studiati. Con le osservazioni dell'interferometro CHARA, Monnier e colleghi [ricostruirono](https://doi.org/10.1088/2041-8205/761/1/L3) nel 2012 la distribuzione della temperatura sulla sua superficie. Nel loro modello preferito i poli raggiungono $10\,070 \pm 90\,\text{K}$, l'equatore si ferma a $8\,910 \pm 130\,\text{K}$ e la temperatura efficace media sull'intera superficie è di $9\,360 \pm 90\,\text{K}$.

C'è però una complicazione in più. Vega è vista quasi esattamente da uno dei poli, cioè dalla sua parte più calda. La temperatura efficace che si ricaverebbe dalla luce che riceviamo, supponendo che la stella irradi allo stesso modo in tutte le direzioni, sarebbe di $9\,660 \pm 90\,\text{K}$, circa $300$ gradi più della media reale. Qualcosa di analogo vale anche per [Altair]({{< relref "/stelle/altair/" >}}), che ruota ancora più in fretta di Vega. Secondo il modello che Monnier e colleghi [pubblicarono](https://doi.org/10.1126/science.1143205) nel 2007, i suoi poli raggiungono $8\,450 \pm 140\,\text{K}$ e l'equatore si ferma a $6\,860 \pm 150\,\text{K}$. A differenza di Vega, però, Altair è vista da una direzione intermedia, con l'asse di rotazione inclinato di oltre $50\,^\circ$ rispetto alla nostra linea di vista: sul suo disco compaiono insieme le regioni polari, più calde, e la fascia equatoriale, più fredda.

Nelle stelle in rapida rotazione, schiacciate ai poli e più fredde all'equatore, un solo numero non basta: la temperatura efficace che si ricava dalla luce ricevuta dipende anche da come la stella è orientata rispetto a noi. Per ricavare la temperatura efficace media di queste stelle bisogna ricostruire la distribuzione della temperatura sull'intera superficie, con modelli che tengono conto della forma della stella, dell'oscuramento gravitazionale e dell'inclinazione dell'asse di rotazione, come quelli usati da Monnier e colleghi per Vega e Altair. Sono calcoli molto più complessi, che vanno oltre gli scopi di questa voce, dedicata ai metodi di base.
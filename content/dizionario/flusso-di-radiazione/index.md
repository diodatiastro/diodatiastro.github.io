+++
title = "Flusso di radiazione"
date = "2026-07-22"
draft = false
+++

{{< katex />}}

## Etimologia

Il termine **flusso** deriva dal latino _fluxus_, participio passato di _fluere_ ("scorrere"). Il vocabolo entra nel lessico scientifico europeo a partire dal XVII secolo per indicare, in senso generale, il "flusso" di una grandezza fisica (calore, fluido, e in seguito luce) attraverso una superficie.

{{% box tipo="definizione" titolo="" %}} 
Il flusso di radiazione, o semplicemente flusso (indicato con $F$), è la misura dell'energia radiante ricevuta per unità di superficie in un dato tempo da un rilevatore orientato perpendicolarmente alla direzione di propagazione della radiazione. Dipende dalla distanza $d$ dalla sorgente luminosa. Si tratta dunque di una misura della **luminosità apparente** della sorgente, non di una misura della sua luminosità intrinseca.
{{% /box %}}

## Flusso bolometrico

Quando $F$ integra tutte le lunghezze d'onda si parla di **flusso bolometrico**. Nella pratica, tuttavia, ogni strumento di misura registra solo una porzione dello spettro, cioè una cosiddetta **banda** ($U, B, V, R, I$, ecc.); si parla in tal caso di **flusso in banda** o densità di flusso spettrale $F_\nu$ (per unità di **frequenza**) o $F_\lambda$ (per unità di lunghezza d'onda).

## Unità di misura del flusso

Nel Sistema Internazionale (SI) il flusso si misura in $\mathrm{W}/\mathrm{m}^2$.

$$F = \frac{\text{energia}}{\text{tempo} \cdot \text{area}} \quad \left[ \mathrm{W}/\mathrm{m}^2 \right]$$

In radioastronomia si usa invece lo **jansky** ($\mathrm{Jy}$), che prende il nome dal radioastronomo Karl Jansky e rappresenta un'unità di densità di flusso spettrale, definita per unità di frequenza:

$$\mathrm{Jy} = 10^{-26}\,\mathrm{W}\,\mathrm{m}^{-2}\,\mathrm{Hz}^{-1}.$$

## La legge dell'inverso del quadrato

La relazione che lega il flusso $F$ alla luminosità $L$ è la **legge dell'inverso del quadrato della distanza**:

$$F = \frac{L}{4\pi d^2}$$

L'origine geometrica di questa legge è facilmente comprensibile: la luce di una sorgente si propaga in modo isotropo (cioè uguale in tutte le direzioni), espandendosi su sfere concentriche di raggio $d$. La superficie di una sfera di raggio $d$ vale $4\pi d^2$; raddoppiando $d$, la stessa potenza $L$ viene distribuita su un'area quattro volte più grande, riducendo il flusso di un fattore **4**. Se la distanza $d$ viene triplicata, il flusso si riduce di un fattore **9**.

{{< figura 
src="immagini/legge-inverso-quadrato.jpg" 
alt="Illustrazione della legge dell'inverso del quadrato della distanza." 
caption="Illustrazione della legge dell'inverso del quadrato della distanza."
>}}

## Un esempio pratico: il flusso di radiazione alla distanza di Saturno

Per chiarire l'importanza di questa legge con un esempio concreto, usiamo la luminosità ben nota del Sole per calcolare il flusso ricevuto alla distanza di Saturno. Calcoliamo in primo luogo il flusso di radiazione ricevuto sulla Terra dal Sole alla distanza espressa in metri di una unità astronomica, o $\mathrm{au}$ (pari a poco meno di $150$ milioni di $\mathrm{km}$):

$$
F_\oplus = \frac{L_\odot}{4\pi d^2} = \frac{3{,}828 \times 10^{26}\,\mathrm{W}}{4\pi \left(1{,}496 \times 10^{11}\,\mathrm{m}\right)^2} \approx 1361\,\mathrm{W}\,\mathrm{m}^{-2}
$$

La formula ci dice che il flusso solare alla distanza della Terra è approssimativamente $1361\,\mathrm{W}/\mathrm{m}^2$. Se ora ci spostiamo alla distanza di Saturno, che dista dal Sole $10\,\mathrm{au}$, il flusso di radiazione solare a quella distanza, in base alla legge dell'inverso del quadrato, sarà pari a solo *un centesimo* del flusso ricevuto sulla Terra (uno su dieci elevato al quadrato):

$$F_{10\,\mathrm{AU}} = \frac{F_{1\,\mathrm{AU}}}{10^2} \approx 13{,}6\,\mathrm{W}\,\mathrm{m}^{-2}$$

Come abbiamo visto, la legge dell'inverso del quadrato della distanza mette in rapporto tre grandezze differenti: il flusso misurato dall'osservatore, la luminosità intrinseca della sorgente e la sua distanza. Questa relazione permette agli astronomi di usare la legge in due modi diversi, entrambi utilissimi per ricavare l'informazione mancante.

## Dalla distanza alla luminosità

Il **primo modo** ci permette di calcolare la luminosità intrinseca di una stella, se conosciamo la sua distanza. Ci basterà a tal fine misurare il flusso ricevuto dalla stella e usare la formula derivata:

$$
L = F \times 4\pi d^2
$$

Prendiamo come esempio la nostra "amica" Sirio. Il suo flusso bolometrico misurato a Terra è pari approssimativamente[^1] a $1{,}141 \times 10^{-7}\,\mathrm{W}\,\mathrm{m}^{-2}$. La sua distanza in metri corrisponde, invece, a circa $8{,}14 \times 10^{16}\,\mathrm{m}$ ($2{,}64$ parsec). Applichiamo ora la formula ai dati appena riportati:

$$
L_{\text{Sirio}} = (1{,}141 \times 10^{-7}) \times 4\pi (8{,}14 \times 10^{16})^2
$$

Svolgendo i calcoli, otteniamo:

$$
L_{\text{Sirio}} \approx 9{,}49 \times 10^{27}\,\mathrm{W}
$$

Verifichiamo infine il valore ottenuto, confrontandolo con la luminosità solare:

$$
\frac{L_{\text{Sirio}}}{L_\odot} = \frac{9{,}49 \times 10^{27}\,\mathrm{W}}{3{,}828 \times 10^{26}\,\mathrm{W}} \approx 24{,}8
$$

Il dato corrisponde in modo pressoché perfetto al rapporto noto tra la luminosità intrinseca di Sirio e quella del Sole (circa $25$ volte più luminosa).

## Dalla luminosità alla distanza

Il **secondo modo** di usare la legge dell'inverso del quadrato è altrettanto utile e importante. Se non conosciamo la distanza di una stella, ma conosciamo la sua luminosità intrinseca (perché per esempio è una "candela standard" come le variabili Cefeidi), possiamo ricorrere al flusso per ricavare la distanza, secondo la seguente formula:

$$
d = \sqrt{\frac{L}{4\pi F}}
$$

Ci serviremo ancora una volta di Sirio come esempio applicativo, fingendo di non conoscere la sua distanza e provando a ricavarla con l'aiuto della formula precedente, in cui la luminosità, al numeratore, è espressa in $\mathrm{W}$ e il flusso, al denominatore, in $\mathrm{W}\,\mathrm{m}^{-2}$:

$$
d = \sqrt{\frac{9{,}49 \times 10^{27}}{4\pi (1{,}141 \times 10^{-7})}}
$$

Eseguiamo le operazioni e otteniamo così la distanza di Sirio in metri, cioè:

$$
d \approx 8{,}14 \times 10^{16}\,\mathrm{m}
$$

Poiché $1$ parsec corrisponde a $3{,}0857 \times 10^{16}\,\mathrm{m}$, se dividiamo il valore $d$ ottenuto sopra per la lunghezza in metri di $1$ parsec, ricaviamo per Sirio la seguente distanza:

$$
d \approx 2{,}64\,\mathrm{pc} \approx 8{,}6\,\text{anni luce},
$$

perfettamente coerente con la distanza calcolata dal satellite Hipparcos misurando l'angolo di parallasse di Sirio.

## Rapporto tra flusso di radiazione e magnitudine apparente

Un ultimo concetto importante da tenere a mente è il rapporto tra flusso di radiazione e magnitudine apparente. Mentre il flusso di radiazione è una misura fisica oggettiva dell'energia che investe una superficie nell'unità di tempo, la magnitudine descrive come quella stessa energia viene **percepita**, una descrizione che affonda le sue radici nella storia dell'astronomia e nella fisiologia umana.

La **magnitudine apparente** $m$ è una misura logaritmica della luminosità di un corpo celeste così come appare visto attraverso l'atmosfera terrestre. Il sistema fu ideato oltre due millenni fa dall'astronomo greco Ipparco di Nicea, che suddivise le stelle visibili a occhio nudo in sei classi di "grandezza" o magnitudine. Classificò le più brillanti come stelle di magnitudine $1$, mentre le più deboli, al limite della percezione visiva, come magnitudine $6$.

Nell'Ottocento, con la nascita della fotometria scientifica, gli astronomi si accorsero di due fatti fondamentali:

1. l'occhio umano non percepisce la luminosità in modo lineare, ma **logaritmico**. Ciò significa che, a incrementi geometrici del flusso fisico, corrispondono incrementi aritmetici della percezione visiva.
2. Una stella di magnitudine $1$ secondo la classificazione di Ipparco è, dal punto di vista del flusso reale, circa $100$ volte più brillante di una stella di magnitudine $6$.

Nel 1856, l'astronomo inglese **Norman Pogson** formalizzò questa relazione matematica, definendo una scala logaritmica precisa che rispetta la tradizione storica. Pogson stabilì che una differenza di $5$ magnitudini corrisponde esattamente a un rapporto di flusso pari a $100$.

Da questa definizione deriva che una singola magnitudine di differenza corrisponde a un rapporto di flusso pari alla radice quinta di $100$:

$$\frac{F_2}{F_1} = \sqrt[5]{100} \approx 2{,}512 \quad \text{quando} \quad m_1 - m_2 = 1$$

Una stella di magnitudine $m = 1$ è quindi:

- $2{,}512$ volte più brillante di una di magnitudine $m = 2$,
- $2{,}512^2$ ovvero $6{,}31$ volte più brillante di una di magnitudine $m = 3$,
- $2{,}512^3$ cioè $15{,}85$ volte più brillante di una di magnitudine $m=4$, e così via.

In conclusione, il flusso è una grandezza **oggettiva**, fisicamente misurabile, mentre la magnitudine apparente è una grandezza percepita, basata sul modo in cui l'occhio umano, per via della sua fisiologia, reagisce al flusso di radiazione ricevuto.

[^1]: Il valore del flusso bolometrico dipende strettamente dalla specifica calibrazione o [correzione bolometrica]({{< relref "/dizionario/correzione-bolometrica/" >}}) adottata. Non è un dato scolpito nella pietra.
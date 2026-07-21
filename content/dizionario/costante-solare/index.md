+++
title = "Costante solare"
date = "2026-07-21"
draft = false
+++

{{< katex />}}

## Definizione

La costante solare, il cui simbolo standard è $S_{\odot}$ (talvolta semplicemente $S$), è il flusso di radiazione solare integrata su tutte le lunghezze d'onda, misurato fuori dall'atmosfera terrestre, che investe una superficie orientata perpendicolarmente ai raggi solari, alla distanza media Terra-Sole di una unità astronomica ($1\; \mathrm{au}$ o $149{,}6$ milioni di chilometri). Detto più semplicemente, rappresenta la **potenza** con cui il Sole irraggia la Terra per unità di superficie, misurata prima che l'atmosfera e le nuvole possano diffondere, riflettere o attutire la radiazione. A differenza di molte grandezze astrofisiche, non viene dedotta da altre proprietà del Sole, ma è una quantità **misurata direttamente**: anzi, è il dato osservativo iniziale da cui si risale, tramite la legge dell'inverso del quadrato, alla luminosità bolometrica del Sole.

## Storia e misurazione

Il termine "costante" risale all'Ottocento, quando si riteneva il flusso solare *invariabile* nel tempo. Le prime misure sistematiche furono condotte in modo indipendente da Marc-August Pictet e da Claude Pouillet con un actinometro[^1] a disco di rame annerito. I loro metodi furono ripresi nel Novecento da Charles Greeley Abbot presso lo Smithsonian Astrophysical Observatory, con campagne di misura ad alta quota per minimizzare l'assorbimento atmosferico.

Oggi la costante solare si misura con radiometri a bordo di satelliti, al di sopra dell'atmosfera, dove l'assorbimento e la diffusione atmosferica non introducono incertezze sistematiche. Gli strumenti di riferimento includono ACRIM, VIRGO e, soprattutto, il TIM (*Total Irradiance Monitor*) a bordo della missione SORCE e, successivamente, TSIS-1 (*Total and Spectral Solar Irradiance Sensor*). Queste misure convergono su un **valore medio** di:

$$
S_{\odot} \approx 1360{,}8 \pm 0{,}5\;\text{W/m}^2
$$

Il valore arrotondato più comunemente citato, e quello raccomandato dalla IAU nel 2015 come valore nominale, è $1361\; \mathrm{W/m}^2$. In passato si usavano valori leggermente diversi, come $1367$ o $1366\; \mathrm{W/m}^2$, ma le misurazioni satellitari più precise degli ultimi anni hanno fissato il valore a quello sopra riportato.

## Una costante... incostante

Questo dato indica che, nello spazio, alla distanza della Terra dal Sole, ogni metro quadrato di superficie esposta perpendicolarmente ai raggi solari riceve *circa* $1361$ Joule di energia al secondo. La costante solare, dunque, non è proprio… costante, come credevano nell'Ottocento. Tuttavia le variazioni sono minime, a testimonianza della grande stabilità della nostra stella.

Le lievi fluttuazioni registrate sono dovute principalmente a due motivi:

- **Il ciclo solare.** L'attività del Sole varia lungo un ciclo di circa $11$ anni. Durante i picchi di massima attività (quando è maggiore il numero di macchie solari e l'emissione da parte delle facole), il valore della costante aumenta, mentre nei periodi di minimo diminuisce. Tuttavia, la variazione è piccolissima, nell'ordine dello $0{,}1\%$ (circa $1\;\mathrm{W/m}^2$).
- **La distanza Terra-Sole.** A causa dell'orbita ellittica della Terra, la distanza dal Sole varia durante l'anno. Questo fa sì che l'energia che *effettivamente* raggiunge l'atmosfera oscilli di circa il $6{,}9\%$ tra il perielio (a inizio gennaio) e l'afelio (a inizio luglio). I valori misurati sono di circa $1407/1408\;\mathrm{W/m}^2$ al perielio, quando la Terra raggiunge la minima distanza dal Sole, e di circa $1316/1317\;\mathrm{W/m}^2$ all'afelio. La "costante", per definizione, si calcola eliminando questa variabile e standardizzando la distanza a $1\;\mathrm{au}$.

Per via di tali fluttuazioni, si preferisce nella letteratura scientifica moderna parlare di *Total Solar Irradiance* (TSI, o irradiazione solare totale) piuttosto che di costante solare.

Nome a parte, è importante non confondere la costante solare con l'energia solare che sfruttiamo sulla Terra. Quella che attraversa l'atmosfera e raggiunge il suolo in una giornata serena, detta **irradianza solare**, è sensibilmente inferiore: è al massimo intorno ai $1000\;\mathrm{W/m}^2$ a livello del mare, a causa dell'assorbimento e della diffusione da parte dell'aria, del vapore acqueo e del pulviscolo.

## Dalla costante solare alla luminosità bolometrica del Sole e ritorno

Come detto più sopra, dal valore della costante solare $S_{\odot}$, conoscendo la distanza media $d$ Terra-Sole, possiamo risalire alla luminosità bolometrica $L_{\odot}$ della nostra stella. Il metodo è semplice. Ci basta distribuire il flusso misurato dalla costante solare $S_{\odot}$ sull'intera superficie della sfera di raggio $d$:

$$
L_{\odot} = S_{\odot} \times 4\pi d^2
$$

Svolgendo i calcoli, otteniamo:

$$
\begin{aligned}
4\pi d^2 &= 4\pi \left(1{,}496 \times 10^{11}\,\text{m}\right)^2 \approx 2{,}812 \times 10^{23}\,\text{m}^2 \\
L_{\odot} &= 1360{,}8\,\text{W/m}^2 \times 2{,}812 \times 10^{23}\,\text{m}^2 \approx 3{,}827 \times 10^{26}\,\text{W}
\end{aligned}
$$

Questo è, in sostanza, il procedimento all'origine del valore *nominale* adottato dalla [Risoluzione IAU 2015 B3](https://www.iau.org/common/Uploaded%20files/IAUGA2015-Resolution-B3-recommended-nominal-conversion.pdf) per definire la luminosità standard del Sole:

$$
\mathcal{L}^N_{\odot} = 3{,}828 \times 10^{26}\,\text{W}
$$

Vale naturalmente anche l'inverso, cioè ricavare la costante solare dalla luminosità del Sole:

$$
S_{\odot} = \frac{L_{\odot}}{4\pi d^2}
$$

## Utilità della costante solare

La costante solare è un parametro fondamentale in diversi settori della scienza e della tecnica. Serve, per esempio, in:

- **climatologia**, per calcolare il bilancio energetico della Terra e l'effetto serra (la Terra riceve energia dal Sole e ne riemette una parte variabile nello spazio);
- **astrofisica**, per determinare la luminosità del Sole e, insieme al raggio solare, la temperatura efficace della sua fotosfera;
- **ingegneria spaziale**, per progettare i pannelli solari dei satelliti e il controllo termico delle sonde.

{{< figura 
src="immagini/misurazione-costante-solare.png" 
alt="Evoluzione delle misure satellitari di TSI dal 1978 a oggi, con convergenza verso il valore di 1361 W/m²" 
caption="Evoluzione delle misure satellitari di TSI dal 1978 a oggi, con convergenza verso il valore di 1361 W/m²"
>}}

## La potenza totale intercettata dalla Terra

Un altro dato importante che possiamo ricavare dalla costante solare è la **potenza totale** proveniente dal Sole intercettata dalla Terra in ogni istante. Dato che la Terra è pressoché sferica, si potrebbe pensare che, per calcolare l'energia totale che la Terra intercetta dal Sole, sarebbe sensato partire dalla formula per il calcolo della superficie di una sfera ($4\pi R^2$).

In realtà non è così. La radiazione solare viaggia in raggi paralleli, data la distanza che ci separa dal Sole. La superficie curva della Terra riceve quantità variabili di energia a seconda dell'angolo con cui quei raggi arrivano. I raggi che colpiscono la superficie terrestre con angoli obliqui (vicino ai poli o al terminatore) distribuiscono la stessa energia della costante solare su un'area molto più grande, riducendone l'intensità per metro quadrato. Per ottenere un valore corrispondente alla costante solare su tutta la superficie esposta al Sole, dobbiamo proiettare lo sferoide terrestre su un **disco** di raggio $R$ pari a quello della Terra. Ogni metro quadrato di questo disco immaginario riceve esattamente la costante solare $1361\;\mathrm{W/m}^2$, dato che è perfettamente perpendicolare al Sole.

Calcoliamo dunque l'area $\pi R^2$ di questo disco immaginario, sapendo che il raggio terrestre medio $R$ è circa $6.371\;\mathrm{km}$; quindi, poiché conosciamo anche la costante solare, possiamo infine calcolare la **potenza** $P$ che la Terra intercetta dal Sole ogni secondo, moltiplicando la costante solare per l'area del disco:

$$
\begin{aligned}
R &\approx 6371 \, \mathrm{km} = 6{,}371 \times 10^6 \, \mathrm{m} \\
\pi R^2 &\approx 1{,}274 \times 10^{14} \, \mathrm{m^2}\\
P &\approx 1361 \times 1{,}274 \times 10^{14} \approx 1{,}735 \times 10^{17} \, \mathrm{W}
\end{aligned}
$$

Dai calcoli ricaviamo un numero enorme, intorno ai $173$ milioni di miliardi di watt, ma se lo moltiplichiamo per un'ora, cioè $3.600$ secondi, otteniamo un valore davvero impressionante, circa $624$ *miliardi di miliardi* di joule:

$$
{\text{Energia}\cdot \text{ora}} \approx 1{,}734 \times 10^{17} \times 3600 \approx 6{,}24 \times 10^{20} \, \text{J}
$$

## Una fame di energia "stellare"

Si può fare un confronto interessante tra l'energia irradiata dal Sole in un'ora sulla Terra e quella consumata in un anno dall'intera umanità.

Secondo lo "[Statistical Review of World Energy 2026](https://www.energyinst.org/statistical-review)" dell'Energy Institute, il consumo mondiale di energia primaria nel 2025 ha raggiunto il record di $600$ exajoule (EJ). Convertendo in joule, otteniamo:

$$
600\; \text{EJ} = 6{,}00 \times 10^{20} \, \text{J}
$$

Anche questa è una cifra enorme, frutto della rapidissima crescita della fame di energia dell'umanità. Per decenni, l'energia solare che investe in un'ora la Terra ha superato il consumo annuale mondiale di un margine notevole, ma questo margine si è andato via via riducendo, mentre la nostra fame di energia cresceva inesorabilmente. Oggi, l'energia solare che investe la Terra in un'ora è ancora il $104\%$ del consumo globale di energia calcolato al 2025. Ma, mentre il bisogno umano di energia continua a crescere, l'energia solare in ingresso, ovviamente, rimane costante. Questo ci fa capire con quanta rapidità la nostra fame di energia stia raggiungendo una scala che potremmo definire "stellare".

## Il flusso di radiazione medio che investe la Terra

Un altro dato utile nelle scienze planetarie, ricavabile dalla costante solare, è il **flusso di radiazione medio** che investe il nostro pianeta.

La costante solare misura il flusso che arriva su una superficie *perpendicolare* ai raggi solari. Tuttavia, la Terra è una sfera e l'energia intercettata dal pianeta deve essere distribuita su tutta la sua superficie. Ma, come abbiamo visto più sopra, dal punto di vista del Sole, la Terra è un disco di area $\pi R^2$, dove $R$ è il raggio terrestre. La potenza totale ricevuta dalla Terra è quindi:

$$
P_{\text{assorbita}} = S_{\odot} \pi R^2
$$

(se per semplicità trascuriamo l'[albedo]({{< relref "/dizionario/albedo/" >}})). L'energia ricevuta viene poi ridistribuita sull'intera superficie terrestre, che vale:

$$
A_{\text{superficie}} = 4\pi R^2
$$

Il **flusso medio** sull'intero pianeta è la potenza totale divisa per la superficie totale:

$$
F_{\text{medio}}=\frac{S_{\odot}\pi R^2}{4\pi R^2}=\frac{S_{\odot}}{4}
$$

Da cui:

$$
F_{\text{medio}} \approx
\frac{1361}{4}
\approx
340\ \text{W m}^{-2}
$$

In conclusione, il flusso medio distribuito sull'intera superficie terrestre è $340\; \mathrm{W/m}^2$, un quarto della costante solare.

## La temperatura di equilibrio della Terra

Questo fattore ($1/4$) compare molto spesso in astrofisica planetaria, ad esempio nel calcolo della **temperatura di equilibrio** di un pianeta, dove si confronta l'energia ricevuta dalla stella madre con quella riemessa sotto forma di radiazione termica.

Se invece teniamo conto dell'**albedo terrestre**, cioè la frazione di luce riflessa dall'atmosfera e dalla superficie, pari in media a circa $0{,}30$, il flusso effettivamente *assorbito* dalla Terra è:

$$
F_{\text{assorbito}} = 340 \times (1 - 0{,}30) \approx 238\;\text{ W}/\text{m}^2
$$

Questo è il valore che si usa per calcolare la **temperatura di equilibrio** della Terra (circa $255\;\mathrm{K}$, ovvero $–18\;^{\circ}\mathrm{C}$), confrontando l'*energia assorbita* con quella che il pianeta riemette nello spazio sotto forma di **radiazione infrarossa**. È proprio il famoso fattore $1/4$, combinato con l'albedo, a determinare la temperatura di base del nostro pianeta, su cui poi si innesta l'**effetto serra** che lo rende abitabile.

## Tabella riassuntiva dei parametri analizzati

La tabella seguente riporta in sintesi i valori chiave descritti in questa voce del dizionario.

| Parametro                                                    | Valore                                                                             |
| ------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| Costante solare (media)                                      | $S_{\odot} \approx 1360{,}8 \pm 0{,}5$ W/m² (arrotondato: $1361\; \mathrm{W/m}^2$) |
| Variazione annuale (dovuta all'orbita ellittica della Terra) | $1316/1317\;-\;1407/1408\;\mathrm{W/m}^2$                                          |
| Luminosità solare standard (IAU 2015)                        | $L_{\odot}^N = 3{,}828 \times 10^{26}\;\mathrm{W}$                                 |
| Potenza totale intercettata dalla Terra                      | $\approx 1{,}735 \times 10^{17}\;\mathrm{W}$                                       |
| Energia solare che colpisce la Terra in 1 ora                | $\approx 6{,}24 \times 10^{20}\;\mathrm{J}$                                        |
| Consumo umano annuale di energia primaria (2025)             | $\approx 6{,}00 \times 10^{20}\;\mathrm{J}$ (secondo l'Energy Institute)           |
| Flusso medio sulla superficie terrestre (prima dell'albedo)  | $\approx 340\; \mathrm{W/m}^2$                                                     |
| Flusso medio assorbito (albedo $0{,}30$)                     | $\approx 238\;\mathrm{W/m}^2$                                                      |

[^1]: **Actinometro** (dal greco *aktís/aktínos*, "raggio", e *métron*, "misura") è un termine generico per indicare uno strumento usato per misurare l'intensità della radiazione, in particolare quella solare. È un termine in gran parte storico, oggi sostituito da denominazioni più specifiche. Quelli citati nell'articolo funzionavano con un principio calorimetrico, non fotoelettrico: un elemento annerito (per massimizzare l'assorbimento) veniva esposto alla radiazione solare diretta, e se ne misurava l'innalzamento di temperatura nel tempo con un termometro. L'actinometro di **Pouillet** (1837) usava un disco di rame annerito con un termometro inserito al centro: si misurava la velocità di riscaldamento del disco esposto al Sole, confrontandola con la velocità di raffreddamento a Sole schermato, per risalire al flusso radiativo assorbito. L'actinometro di **Herschel** (John Herschel, 1825) si basava su un principio simile ma usava un recipiente d'acqua annerito, misurando l'innalzamento di temperatura dell'acqua. Questi strumenti erano relativamente imprecisi: erano sensibili a perdite di calore, conduzione, vento. Furono perciò progressivamente sostituiti da strumenti più accurati basati su termopile, i **pireliometri**, come il pireliometro ad acqua di Ångström, poi i pireliometri a compensazione elettrica, che restano oggi lo standard per le misure di irraggiamento da terra, affiancati dai radiometri satellitari (TIM, ecc.) per le misure fuori atmosfera.
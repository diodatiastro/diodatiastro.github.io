+++
title = "Angolo solido"
date = "2026-07-18"
draft = false
+++

{{< katex />}}

Il termine deriva dal latino *solidus*, "tridimensionale", mentre il concetto risale alla geometria euclidea.

## Definizione

In geometria e in fisica, un **angolo solido**, indicato con la lettera greca omega maiuscola ($\Omega$), è l'estensione tridimensionale del concetto di angolo piano. Mentre un angolo piano descrive l'apertura tra due linee che si intersecano in un punto, l'angolo solido descrive un insieme di direzioni nello spazio tridimensionale che si estendono a partire da un **vertice**. La sua ampiezza è determinata dall'area della superficie sferica intercettata da tali direzioni.

In termini matematici, l'angolo solido $\Omega$ sotteso da una regione $A$ della superficie di una sfera di raggio $r$ e centro $O$ è definito come il rapporto tra l'area $A$ di quella regione e il quadrato del raggio $r$ della sfera stessa:

$$
\Omega=\frac{A}{r^2}
$$

La regione può avere forma qualsiasi (circolare, poligonale, irregolare, come la proiezione di una costellazione sulla sfera celeste), purché giaccia sulla sfera.

L'analogia più immediata per comprendere gli angoli solidi è paragonarli agli angoli piani. Un angolo piano $\theta$ misurato in **radianti** è definito come il rapporto tra la lunghezza dell'arco $\ell$ intercettato su una circonferenza di raggio $r$ e il raggio stesso:

$$
\theta={\ell \over r}
$$

La definizione è *indipendente* dalla lunghezza di $r$: raddoppiando il raggio, l'arco raddoppia, ma il rapporto resta invariato. L'angolo piano misura dunque una *direzione aperta* nel piano, non una lunghezza.

In modo del tutto analogo, l'angolo solido $\Omega$ misura un *fascio di direzioni aperte* nello spazio, non un'area. L'immagine seguente rende graficamente il concetto. C'è un unico angolo solido che intercetta le calotte $A_1$ e $A_2$ su due sfere concentriche. L'area della calotta $A_2$ è maggiore dell'area della calotta $A_1$, ma l'angolo $\Omega$ rimane invariato perché il raggio della sfera esterna $r_2$ è proporzionalmente maggiore del raggio della sfera interna $r_1$. Pertanto, i rapporti tra aree delle calotte e quadrato dei rispettivi raggi rimangono costanti. Se il raggio raddoppia, l'area della calotta quadruplica, e il rapporto resta invariato.

{{< figura src="immagini/angolo-solido-conico.png" alt="Angolo solido su sfere concentriche" caption="Angolo solido su sfere concentriche" >}}

## Lo steradiante

L'unità di misura dell'angolo solido nel Sistema Internazionale è lo steradiante (simbolo $\mathrm{sr}$), che è l'analogo tridimensionale del radiante per gli angoli piani.

Uno **steradiante** è l'angolo solido che, partendo dal centro di una sfera di raggio $r$, sottende una porzione di superficie sferica che ha un'area esattamente pari al quadrato del raggio:

$$
A=r^2
$$

Un angolo solido che corrisponde all'intera superficie di una sfera equivale a $4\pi$ steradianti (circa $12{,}57\;\mathrm{sr}$). Questo valore si ricava immediatamente dalla definizione di steradiante: poiché l'area totale di una sfera è $4\pi r^2$, dividendo per $r^2$ si ottiene appunto $4\pi$[^1]:

$$
\Omega={4\pi r^2 \over r^2}=4\pi\approx 12,57\;\mathrm{sr}
$$

Il cono che sottende un angolo solido di $1\;\mathrm{sr}$ ha un semi-angolo $\theta$ di circa $32{,}8^{\circ}$, corrispondente a un'apertura angolare (angolo al vertice) di circa $65{,}5^{\circ}$.

La tabella seguente riporta alcuni valori notevoli di angoli solidi.

| Regione | Forma esatta | Valore approssimato |
|---|---|---|
| Sfera intera | $4\pi\;\mathrm{sr}$ | $\approx 12,57\;\mathrm{sr}$ |
| Emisfero | $2\pi\;\mathrm{sr}$ | $\approx 6,28\;\mathrm{sr}$ |
| Cono di semi-apertura $60^{\circ}$ | $\pi\;\mathrm{sr}$ | $\approx 3,14\;\mathrm{sr}$ |
| Cono di semi-apertura $30^{\circ}$ | $\pi(2 - \sqrt{3})\;\mathrm{sr}$ | $\approx 0,842\;\mathrm{sr}$ |
| Cono di semi-apertura $1^{\circ}$ | $2\pi(1 - \cos 1°)\;\mathrm{sr}$ | $\approx 9,6 \times 10^{-4}\;\mathrm{sr}$ |
| Cono di semi-apertura $\theta$ | $2\pi(1 - \cos \theta)\;\mathrm{sr}$ | — |

## Casi semplici per calcolare $\Omega$

Nel caso di un angolo solido di forma **conica**, per calcolare $\Omega$ esiste una formula semplice e diretta:

$$
\Omega = 2\pi (1-\cos\theta)
$$

in cui $\theta$ è il **semi-angolo al vertice** del cono, cioè la metà dell'angolo totale del cono. In altre parole, è l'angolo che l'asse centrale forma con il bordo esterno del fascio di direzioni che intersecano la superficie della sfera.

Gli angoli solidi conici sono usati in una moltitudine di contesti. Descrivono perfettamente, per esempio, il fascio luminoso di una torcia, il lobo di un'antenna parabolica, o la luce emessa da una sorgente puntiforme come una stella.

In tutti gli altri casi, quando l'angolo solido ha forme differenti (piramidale, rettangolare, irregolare, ecc.), il calcolo di $\Omega$ è più complesso e si rifà a una formula generale, che è la seguente:

$$
d\Omega ={\cos \theta dA \over r^2},
$$

in cui $\cos\theta$ è la correzione per l'inclinazione di $dA$ rispetto alla direzione radiale da $O$, ovvero rispetto alla normale della sfera centrata in $O$ che passa per $dA$. E infatti, quando $\theta = 0$, come nel caso di una calotta sferica, si ricade nella formula di base, in cui $\Omega=A/r^2$.

## Un esempio pratico: il calcolo dell'angolo solido sotteso dal Sole

Vale la pena di notare che gli oggetti celesti che vediamo abitualmente nel cielo hanno angoli solidi che rappresentano frazioni minuscole di uno steradiante. La Luna, vista dalla Terra, per esempio, sottende un angolo solido $\Omega$ dell'ordine di $6,5 \times 10^{-5}\;\mathrm{sr}$, cioè $6{,}5$ *centomillesimi* di steradiante. Il Sole sottende più o meno lo stesso angolo solido.

Per angoli solidi molto piccoli come questi, vale la seguente **approssimazione**, che semplifica di molto i calcoli:

$$
\Omega\approx\pi\theta^2
$$

L'approssimazione si ottiene dalla formula del cono per piccoli valori di $\theta$ in cui:

$$
1 - \cos \theta \approx {\theta^2\over 2}.
$$

Sapendo che il raggio angolare del Sole visto dalla Terra è circa $0,00465$ radianti ($16$ minuti d'arco), possiamo applicare la formula approssimata per ottenere rapidamente $\Omega$:

$$
\theta^2=(4,65\times10^{-3})^2=2,16\times10^{-5}
$$

da cui segue:

$$
\begin{aligned}
\Omega
&\approx
\pi \times 2,16\times10^{-5}
\\
\Omega
&\approx
6,8\times10^{-5}\ \mathrm{sr}
\end{aligned}
$$

Questo valore rappresenta la frazione della volta celeste occupata dal disco solare osservato dalla superficie terrestre.

È utile sapere che si può ottenere lo stesso risultato partendo dal raggio reale del Sole $R_{\odot}$ e dalla distanza Terra-Sole $d$. Infatti, per un oggetto piccolo rispetto alla distanza, vale la seguente approssimazione:

$$
\Omega \approx \pi\left(\frac{R}{d}\right)^2
$$

In sostanza, il metodo non fa altro che sostituire il raggio angolare $\theta$ con il rapporto raggio/distanza (che ovviamente deve essere noto). Sostituiamo nella formula i valori di raggio e distanza del Sole espressi in metri e otteniamo:

$$
\Omega
\approx
\pi
\left(
\frac{6,96\times10^8}
{1,496\times10^{11}}
\right)^2
\approx
6,8\times10^{-5}\ \mathrm{sr}
$$

cioè lo stesso angolo solido trovato a partire dal diametro angolare apparente.

La formula che usa raggio e distanza consente di calcolare una grandezza apparente come l'angolo solido (qualcosa che osserviamo dalla Terra) a partire da grandezze fisiche intrinseche. Per molte stelle, non è possibile misurare direttamente il raggio apparente del disco neppure con i telescopi più potenti. Ma, se si conoscono il raggio stellare e la distanza attraverso altri metodi, questa seconda formula diventa decisiva. Essa, infatti, mostra esplicitamente che l'angolo solido dipende dal rapporto tra la dimensione fisica dell'oggetto e la sua distanza.

## Calcoliamo l'angolo solido sotteso da Sirio

Possiamo usare questa formula per stimare, ad esempio, l'angolo solido occupato da Sirio nel cielo. Sappiamo che il raggio di Sirio e la sua distanza dalla Terra sono:

$$
\begin{aligned}
R &\approx 1{,}71\,R_\odot \approx 1{,}19\times10^9 \,\text{m}
\\
d &\approx 8{,}6 \,\text{anni luce} \approx 8{,}13\times10^{16} \,\text{m}
\end{aligned}
$$

Calcoliamo il rapporto tra raggio e distanza:

$$
\frac{R}{d} =
\frac{1{,}19\times10^9}{8{,}13\times10^{16}}
\approx 1{,}46\times10^{-8}
$$

Eleviamo al quadrato il risultato:

$$
\left(\frac{R}{d}\right)^2 \approx (1{,}46\times10^{-8})^2
\approx 2{,}13\times10^{-16}
$$

E otteniamo l'angolo solido di Sirio:

$$
\begin{aligned}
\Omega_{\text{Sirio}} &\approx \pi \cdot 2{,}13\times10^{-16}
\\
\Omega_{\text{Sirio}} &\approx 6{,}7\times10^{-16}\ \mathrm{sr}
\end{aligned}
$$

Possiamo ora confrontare l'angolo solido del Sole, calcolato prima, con quello di Sirio:

$$
\begin{aligned}
\Omega_\odot &\approx 6{,}8\times10^{-5}\ \mathrm{sr}
\\
\Omega_{\text{Sirio}} &\approx 6{,}7\times10^{-16}\ \mathrm{sr}
\\
\frac{\Omega_{\text{Sirio}}}{\Omega_\odot}
&\approx 10^{-11}
\end{aligned}
$$

Da questo confronto ricaviamo, innanzitutto, che Sirio occupa nel cielo un angolo solido circa *cento miliardi di volte* più piccolo di quello del Sole. Vuol dire che, per qualsiasi telescopio, Sirio è una sorgente semplicemente *puntiforme*. L'unico modo per "vedere" il suo disco è usare la tecnica dell'interferometria, senza la quale possiamo ricavare il suo diametro apparente solo per via indiretta, come abbiamo fatto sopra.

Naturalmente, il Sole ci appare così grande rispetto a Sirio solo perché è vicinissimo in termini astronomici. Ma la grandezza apparente del Sole nel cielo perde quasi di significato, se confrontiamo l'angolo solido del Sole con l'intera volta celeste.

Dato che la sfera celeste corrisponde approssimativamente a $12,57\;\mathrm{sr}$, possiamo facilmente calcolare a quale frazione del cielo equivale l'angolo solido del Sole. Il risultato è questo:

$$
\frac{\Omega_\odot}{4\pi}\approx
\frac{6,8\times10^{-5}}{12,57}
\approx 5,4\times10^{-6}
$$

La frazione di cielo occupata dal Sole è pari allo $0{,}00054\%$ della sfera celeste. Comprensibilmente il Sole ci appare enorme rispetto a qualsiasi altra stella, ma in realtà copre appena poco più di *cinque milionesimi* dell'intera volta celeste.

## In sintesi

L'angolo solido è un concetto fondamentale in diversi ambiti scientifici. In astronomia, è utilizzato per descrivere l'estensione apparente di stelle, pianeti, nebulose e altre sorgenti celesti. Serve anche per calcolare il potere risolutivo dei telescopi. È inoltre una grandezza fondamentale nella definizione di quantità radiometriche e fotometriche, come l'**intensità specifica** (o brillanza) e il **flusso di radiazione**.

{{< figura src="immagini/angoli-solidi-diversi.png" alt="Rappresentazione grafica di un angolo solido con apertura conica e un angolo solido con contorno irregolare" caption="Rappresentazione grafica di un angolo solido con apertura conica e un angolo solido con contorno irregolare" >}}

[^1]: Ritornando all'analogia con l'angolo piano, ricordiamo che in quel caso la circonferenza completa, cioè l'angolo giro, vale $2\pi$ radianti.
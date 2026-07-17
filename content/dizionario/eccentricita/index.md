+++
title = "Eccentricità"
date = "2026-07-15"
draft = false
+++

{{< katex />}}

In meccanica celeste e geometria, l’eccentricità, indicata generalmente con la lettera $e$, è un parametro _adimensionale_ che determina quanto l’orbita di un corpo celeste devia dalla forma circolare. In termini più semplici, essa misura quanto l'ellisse orbitale è 'schiacciata' rispetto a una circonferenza perfetta. La parola deriva dal latino tardo _eccentricus_, a sua volta dal greco ἔκκεντρος (_ékkentros_, "fuori dal centro"), composto da ἐκ- ("fuori da") e κέντρον ("centro").

L'eccentricità nasce nello studio delle sezioni coniche, cioè delle curve ottenute dall'intersezione di un piano con un cono. Per un'ellisse essa è legata al semiasse maggiore $a$ e al semiasse minore $b$ dalla relazione:

$$
e = \sqrt{1 - \frac{b^2}{a^2}}
$$

A titolo di esempio, applichiamo la formula all’orbita terrestre, usando i dati noti per il semiasse maggiore dell’orbita $a$, che corrisponde all’unità astronomica ($\text{au}$), e il semiasse minore dell’orbita $b$, entrambi espressi in km:

$$
e_{\text{Terra}} = \sqrt{1 - \frac{{(\approx 149.577.000)}^2}{{(\approx 149.598.000)}^2}}\approx 0,01675
$$

Il risultato ottenuto è in ottimo accordo con il valore canonico di **$0,0167$**.

Un dato rimarchevole che emerge dai dati usati per questo calcolo è che l’orbita terrestre è una circonferenza quasi perfetta: la differenza tra i due semiassi, lunghi quasi 150 milioni di km, è infatti di appena **$21.000\;\mathrm{km}$**.

Un altro modo di calcolare l’eccentricità di un’orbita ellittica è calcolare il rapporto tra la **distanza focale** $c$ (la distanza dal centro a ciascun fuoco dell’ellisse) e il semiasse maggiore $a$, secondo la relazione:

$$
e=  \frac{c}{a} = \frac{\sqrt{a^2 - b^2}}{a}
$$

In pratica, $c$ si ottiene applicando il teorema di Pitagora alle misure dei due semiassi dell’orbita. Eseguiamo anche in questo caso un calcolo esemplificativo, usando ancora una volta i dati dell’orbita terrestre:

$$
e_{\text{Terra}}=  \frac{c}{a} = \frac{\sqrt{(149.598.000) 
^2 - (149.577.000)^2}}{149.598.000}\approx 0,01675
$$

Otteniamo lo stesso risultato del calcolo precedente, $e \approx 0,01675$, con in più la determinazione della distanza focale $c$, che per l’orbita terrestre, è uguale a:

$$
c\approx\sqrt{(149.598.000) 
^2 - (149.577.000)^2}\approx 2.507.000\;\mathrm{km}
$$

Tale risultato indica che il fuoco occupato dal Sole nell’orbita terrestre dista poco più di $2,5$ milioni di $\text{km}$ dal centro esatto dell’ellisse orbitale. Ciò spiega anche la differenza tra la distanza della Terra dal Sole all’afelio e quella al perielio. La prima, infatti, si ottiene _sommando_ al semiasse maggiore dell’orbita $a$ ($149.598.000\;\mathrm{km}$) la distanza focale del Sole, la seconda _sottraendo_ al medesimo semiasse $a$ la distanza focale del Sole:

$$
\begin{aligned}
r_{\text{afelio}}=149.598.000+2.507.000=152.105.000\;\mathrm{km}
\\
r_{\text{perielio}}=149.598.000-2.507.000=147.091.000\;\mathrm{km}
\end{aligned}
$$

Dai precedenti rapporti deriva anche un altro metodo di calcolare l’eccentricità $e$ di un’orbita ellittica, se si conoscono già le distanze dal corpo centrale all’apoastro e al periastro (o all’afelio e al perielio nel caso del Sole):

$$
e = \frac{r_{\text{afelio}} - r_{\text{perielio}}}{r_{\text{afelio}} + r_{\text{perielio}}},
$$

Anche qui, usiamo i dati della Terra per un calcolo esemplificativo:

$$
e_{\text{Terra}} = \frac{152.105.000 - 147.091.000}{{152.105.000 + 147.091.000}}\approx 0,01675
$$

Otteniamo anche in questo caso un valore di $e$ perfettamente in linea con il dato ufficiale citato in letteratura ($e = 0,0167$).

Il valore di $e$ determina univocamente il tipo di traiettoria di un corpo nello spazio:

- **$e = 0$: orbita circolare perfetta**. Non ci sono due fuochi separati, ma un unico centro.
{{< figura src="immagini/orbita-circolare.svg" alt="Un'orbita perfettamente circolare" caption="In un'orbita circolare non sono distinguibili né il pericentro né l'apocentro." >}}
    
- **$0 < e < 1$: orbita ellittica**. È il caso di tutti i pianeti del Sistema Solare, dei pianeti nani e delle comete periodiche. Più _e_ si avvicina a 1, più l’ellisse è “schiacciata”.
 
{{< figura src="immagini/orbita-ellittica.svg" alt="Orbita ellittica con il Sole in uno dei fuochi, pericentro e apocentro" caption="Orbita ellittica: il corpo centrale occupa uno dei fuochi e l'eccentricità è compresa tra 0 e 1." >}}

- **$e = 1$: traiettoria parabolica**. È un’orbita aperta di fuga: il corpo ha esattamente la velocità di fuga necessaria per sottrarsi all’attrazione del corpo centrale.
 
  {{< figura src="immagini/traiettoria-parabolica.svg" alt="Un corpo su un'orbita parabolica non rimane vincolato al corpo che lo attrae, ma dopo il passaggio al pericentro si allontana indefinitamente." caption="Un corpo su un'orbita parabolica non rimane vincolato al corpo che lo attrae, ma dopo il passaggio al pericentro si allontana indefinitamente." >}}  
 
- **$e > 1$: traiettoria iperbolica**. È un’orbita aperta tipica degli oggetti interstellari come _‘Oumuamua_ e _Borisov_. È il tipo di traiettoria seguita da corpi che attraversano il Sistema Solare ad una velocità talmente elevata che la gravità solare non è in grado di catturarli.

{{< figura src="immagini/traiettoria-iperbolica.svg" alt="Un oggetto in allontanamento dal corpo centrale lungo una traiettoria iperbolica" caption="Un esempio reale di traiettoria iperbolica è stata quella seguita dall'oggetto interstellare 1I/2017 U1 ('Oumuamua), scoperto nel 2017, che attraversò il Sistema Solare con un'eccentricità di circa $1,19$ prima di allontanarsi per sempre verso lo spazio interstellare." >}}

Dal punto di vista fisico, l’eccentricità è strettamente legata all’_energia orbitale specifica_ $\varepsilon$ (epsilon) e al _momento angolare specifico_ $h$ del corpo orbitante. La relazione è:

$$
e = \sqrt{1 + \frac{2\varepsilon h^2}{\mu^2}},
$$

dove $\mu$[^costante] è la costante gravitazionale standard del corpo centrale.

Va notato che, per effetto delle perturbazioni gravitazionali e, nel caso di Mercurio, della relatività generale, l'eccentricità e l'orientamento dell'orbita possono variare lentamente nel tempo (precessione degli apsidi).

In sintesi, un’eccentricità elevata implica che il corpo subirà variazioni cinematiche e termiche estreme nel corso della sua rivoluzione: la sua velocità orbitale oscillerà drasticamente tra il valore massimo all’apocentro e quello minimo al pericentro, in accordo con la seconda legge di Keplero. Un esempio è la cometa di Halley, la cui eccentricità è **$0,9671$**, un valore prossimo a $1$.

[^costante]: $\mu = GM$, in cui $G$ è la costante di gravitazione universale e $M$, nel caso di corpi del Sistema Solare, la massa del Sole.
+++
title = "Parallasse trigonometrica e parsec"
date = "2026-07-29"
draft = false
+++

{{< katex />}}

{{% box tipo="definizione" titolo="Definizioni" %}} 
La **parallasse** è lo spostamento angolare *apparente* di un oggetto, quando viene osservato da due punti di vista diversi. 

Il **parsec**, abbreviato in $\text{pc}$, è la distanza alla quale l’[unità astronomica]({{< relref "/dizionario/unita-astronomica/" >}}), cioè il raggio dell’orbita terrestre, sottende un angolo di $1$ secondo d’arco. Corrisponde a $206.265$ unità astronomiche o $3{,}262$ anni luce.
{{% /box %}}

In questo articolo vedremo come il semplice concetto di parallasse[^par] – lo stesso che sperimentiamo guardando il nostro pollice con un occhio alla volta – sia lo strumento che permette di misurare con precisione la distanza delle stelle. Partiremo da un esempio concreto, Alfa Centauri, per introdurre parsec e anni luce, le unità di misura usate dagli astronomi. Infine ripercorreremo la lunga storia delle osservazioni che hanno portato alla misurazione delle prime parallassi stellari, per finire con le misure ultra–precise ottenute dal satellite Gaia.

{{< figura 
src="immagini/luhman-16a-luhman-16b.jpg" 
alt="Dodici immagini montate in sequenza della coppia di nane brune Luhman 16A e Luhman 16B, ripresa da Hubble tra il 2013 e il 2015." 
caption="Dodici immagini montate in sequenza della coppia di nane brune Luhman 16A e Luhman 16B, ripresa da Hubble tra il 2013 e il 2015 (la sequenza si svolge da sinistra verso destra). A soli 6 anni luce di distanza da noi, questo sistema binario è così vicino che si distinguono perfettamente le ellissi formate dal riflesso del moto orbitale della Terra intorno al Sole, dalle quali si ricava l’angolo di parallasse dei due piccoli corpi celesti. Crediti: ESA/Hubble & NASA, L. Bedin et al."
>}}

## Introduzione storica

Quanto sono lontane le stelle? Gli esseri umani se lo domandano sin dalla notte dei tempi. Filosofi e astronomi dell’antichità immaginarono che quei puntini luminosi visibili nel cielo notturno, alcuni più brillanti, altri più fiochi, fossero mondi lontanissimi, in qualche modo simili al Sole o alla Terra. Ma come fare a misurarne la distanza?

In realtà un metodo molto intelligente, teoricamente corretto, fu escogitato già oltre due millenni fa. Aristarco di Samo, astronomo vissuto a cavallo tra il terzo e il secondo secolo avanti Cristo, aveva capito che è possibile usare le proprietà dei triangoli rettangoli per ricavare la distanza del Sole. Purtroppo, per la mancanza di tecnologie adeguate, finì per sottostimare grandemente quella distanza, che egli pose uguale a sole $19$ volte la distanza Terra-Luna invece che a $390$ volte, il valore che oggi sappiamo essere corretto.

Dovettero passare altri $18$ secoli prima che si riuscisse a calcolare la distanza del Sole, la stella di gran lunga più vicina alla Terra, con un’approssimazione accettabile. L'impresa riuscì a Christiaan Huygens e Giovanni Domenico Cassini, che, nella seconda metà del 17° secolo, ottennero misure dell’**unità astronomica**, cioè della distanza media tra la Terra e il Sole, con margini di errore intorno al $7\%$.

## L’angolo di parallasse

Intanto, a partire dalla diffusione delle opere di Copernico e Keplero, gli astronomi si erano resi conto che, se davvero è la Terra a girare intorno al Sole e non il contrario, diventava possibile d’incanto misurare anche la distanza delle stelle, grazie a un metodo analogo a quello descritto da Aristarco per misurare la distanza del Sole: il **metodo della parallasse**.

Ma cos’è la **parallasse**? È lo spostamento angolare *apparente* di un oggetto, quando viene osservato da due punti di vista diversi. Per capire bene di che si tratta basta compiere un semplice esperimento: stendete un braccio davanti a voi e sollevate il pollice; poi guardate alternativamente il pollice con l’occhio destro e il sinistro, tenendo l’altro occhio chiuso. Noterete che il pollice si sposta rispetto allo sfondo a seconda dell’occhio con il quale lo guardate, il che è dovuto alla distanza di alcuni centimetri che separa l’occhio destro dal sinistro: sono due punti di vista differenti, benché vicini tra loro. L’angolo formato dalle due posizioni del pollice è la parallasse.

{{< figura 
src="immagini/angolo-di-parallasse.png" 
	alt="Illustrazione dell'angolo di parallasse creato dal guardare con un occhio alla volta nella stessa direzione." 
caption="Lo spostamento del pollice dovuto al fatto di guardare nella stessa direzione prima con un occhio e poi con l'altro."
>}}

Una proprietà importante di tali angoli è che sono tanto più grandi quanto più l’oggetto osservato da due punti di vista è vicino. È facile rendersene conto ripetendo l’esperimento, ma stavolta con il braccio piegato a metà, più vicino al vostro volto. Noterete che, rispetto allo sfondo, lo spostamento del pollice, sempre osservato alternativamente con l’occhio destro e il sinistro, è ora maggiore di prima. È lo stesso principio per cui, guardando dal finestrino di un treno in corsa, si vedono gli alberi in primo piano sfrecciare molto più rapidamente delle montagne visibili in lontananza. In altre parole, esiste una relazione di *proporzionalità inversa* tra la distanza di un oggetto e la sua parallasse: maggiore è la distanza, più piccolo è l’angolo sotteso dal suo spostamento apparente rispetto a uno sfondo fisso.

## L'angolo di parallasse e le proprietà dei triangoli rettangoli

La grande utilità della parallasse sta nel fatto che essa ci permette di ricavare la **distanza** di un oggetto lontano, grazie alle proprietà dei triangoli rettangoli. Sappiamo, infatti, dalla **trigonometria** che la tangente di un angolo è uguale al rapporto tra il lato opposto all’angolo e il lato adiacente:

$$ \tan(\alpha) = \frac{\text{lato opposto}}{\text{lato adiacente}} \tag{1} $$

{{< figura 
src="immagini/triangolo.jpg" 
alt="Un triangolo rettangolo" 
caption="Un triangolo rettangolo che illustra quali sono l'angolo e i lati descritti dalla formula precedente."
>}}

Pertanto, se conosciamo la misura di un angolo e quella di uno dei lati, possiamo ricavare facilmente la misura dell’altro lato:

$$ \text{lato opposto} = \text{lato adiacente} \cdot \tan(\alpha) \tag{2} $$

e, qualora si conosca solo la misura del lato opposto:

$$ \text{lato adiacente} = \frac{\text{lato opposto}}{\tan(\alpha)} \tag{3} $$

Nell’esempio del pollice sollevato ad altezza di braccio, possiamo ricavare la distanza tra il pollice e il volto, se conosciamo:

- l’angolo di parallasse formato dallo spostamento del pollice osservato alternativamente con l’occhio destro e il sinistro e
- la distanza tra i due occhi.

Ma cosa c’entra tutto ciò con la distanza delle stelle? Vediamo. Se osserviamo la Luna da due punti della superficie terrestre separati tra loro da migliaia di chilometri, possiamo misurare un discreto spostamento angolare della Luna nel cielo, cioè un angolo di parallasse. Ciò perché la Luna, astronomicamente parlando, è molto vicina alla Terra. Conoscendo dunque la distanza esatta tra i due punti da cui sono state fatte le osservazioni e usando l’operazione descritta al numero $(3)$, possiamo ricavare facilmente la distanza della Luna dalla Terra.

Ma le stelle sono lontanissime, molto più lontane della Luna. Se anche si usasse come linea di base per la misurazione dell’angolo di parallasse l’intero diametro terrestre (circa $12.700\,\text{km}$), non noteremmo il benché minimo spostamento angolare. Per sperare di misurare la parallasse di una stella, anche della più vicina, occorre una linea di base *molto* più grande del diametro terrestre. E la linea di base più grande in assoluto, che, come abitanti di questo pianeta, possiamo utilizzare per un simile calcolo è l'**unità astronomica**, cioè il raggio medio dell’orbita che la Terra descrive annualmente intorno al Sole. È una grandezza che conosciamo con assoluta precisione, grazie a misurazioni effettuate con il radar a partire dalla seconda metà del secolo scorso: $149.597.870.700\,\text{m}$, cioè, approssimando un po’, $149{,}6$ milioni di $\text{km}$ [^1].

Immaginiamo, dunque, di misurare la posizione esatta di una stella nel cielo a marzo, confrontandola con quella di oggetti immobili sulla volta celeste come per esempio galassie o quasar. Lasciamo passare poi sei mesi e misuriamo nuovamente la posizione della stessa stella a settembre, confrontandola con i medesimi oggetti fissi adoperati nella misurazione precedente. In quei sei mesi la Terra si sarà spostata nel punto opposto della sua orbita intorno al Sole. Le due misurazioni, pertanto, saranno avvenute da due punti separati da una linea di base pari al diametro dell’orbita terrestre, che corrisponde a $2$ unità astronomiche, cioè circa $300$ milioni di $\text{km}$. Questa doppia misurazione ci fornisce le migliori condizioni possibili per riuscire a registrare dalla Terra uno spostamento angolare discreto della stella osservata, a misurare cioè la sua parallasse.

{{< figura 
src="immagini/spostamento-angolare.jpg" 
alt="Illustrazione dello spostamento angolare della Terra nel corso di sei mesi rispetto a una data stella." 
caption="Misurare a sei mesi di distanza la posizione di una stella rispetto a uno sfondo di stelle fisse più lontane fornisce la più ampia linea di base disponibile a noi terrestri, per sperare di misurare l’angolo di parallasse di quella stella."
>}}

## Quanto è lontana Alfa Centauri?

Ecco ora un esempio concreto di come derivare la distanza di una stella a partire dal suo angolo di parallasse. Ci serviremo della parallasse riportata per Alfa Centauri in [uno studio](https://www.aanda.org/articles/aa/abs/2016/02/aa27859-15/aa27859-15.html) pubblicato a gennaio 2016 su *Astronomy & Astrophysics*. Il valore ottenuto dai due autori, $743 \pm 1{,}3\,\text{mas}$ (millesimi di secondo d’arco), si riferisce alla metà dell’angolo che si otterrebbe misurando lo spostamento angolare di Alfa Centauri a sei mesi di distanza. Tutti gli angoli di parallasse riportati in letteratura scientifica si riferiscono in effetti sempre alla metà dell’angolo misurato a sei mesi di distanza, perché in questo modo il calcolo della distanza è più semplice e diretto. Un simile angolo sottende il raggio dell’orbita terrestre (cioè l’unità astronomica), osservato dalla distanza della stella.

Per ottenere la distanza di Alfa Centauri, dobbiamo considerare un immaginario triangolo rettangolo, il cui cateto minore è il raggio dell’orbita terrestre intorno al Sole, cioè $149{,}6$ milioni di $\text{km}$, mentre il cateto maggiore, enormemente più lungo dell’altro, è la distanza che separa il Sole da Alfa Centauri. *La parallasse è l’angolo opposto al cateto minore*. Di questo triangolo rettangolo conosciamo la misura dell’angolo di parallasse, $743\,\text{mas}$, e quella del lato ad esso opposto: $1\,\text{au}$, cioè $1$ unità astronomica. Ci manca la misura del lato adiacente all’angolo, che rappresenta appunto la distanza di Alfa Centauri dal Sole. L’operazione da svolgere è pertanto la seguente:

$$ \text{Distanza Alfa Centauri} = \frac{1\ \text{au}}{\tan(\alpha)} \tag{4} $$

Prima di svolgere il calcolo, dobbiamo però trasformare la misura dell’angolo di parallasse da secondi d’arco in **radianti** [^2], che è l’unità di misura degli angoli da utilizzare in questo tipo di operazioni trigonometriche. La trasformazione restituisce un valore di $3,602 \times 10^{-6}$ radianti, cioè $3,6$ *milionesimi* di radiante, a testimonianza del fatto che gli angoli di parallasse sono veramente minuscoli [^3]. Il calcolo da svolgere diventa dunque:

$$ \text{Distanza Alfa Centauri} = \frac{1\ \text{au}}{\tan(3,602 \times 10^{-6})} \tag{5} $$

{{< figura 
src="immagini/un-radiante.jpg" 
alt="descrizione immagine" 
caption="Un angolo di $1$ radiante corrisponde approssimativamente a $57,3^{\circ}$. Fonte: Wikimedia"
>}}

Il risultato è $277.624$ unità astronomiche: la coppia binaria formata da Alfa Centauri A e B dista da noi quasi $280.000$ volte la distanza media tra la Terra e il Sole. È un abisso di spazio che equivale a $4{,}153 \times 10^{13}\,\text{km}$, cioè poco più di $41.500$ miliardi di chilometri!

## L'anno luce

Poiché maneggiare numeri così grandi è poco pratico, si usa solitamente esprimere simili distanze in anni luce. Un **anno luce** è la distanza percorsa dalla luce nel vuoto in un anno e corrisponde a $63.241$ unità astronomiche o $9,461 \times 10^{12}\,\text{km}$, cioè $9.461$ miliardi di $\text{km}$. Trasformando le unità astronomiche in anni luce, otteniamo infine che Alfa Centauri dista $4{,}39$ anni luce dalla Terra. Ed ecco come, dalla misura dell’angolo di parallasse di una stella, siamo arrivati rapidamente a ricavare la sua distanza.

## Il peso delle incertezze

Va detto che nel mondo reale le misurazioni non sono mai perfette e l’astronomia non fa eccezione. Lo studio citato più sopra ci informa, infatti, che la misura dell’angolo di parallasse di Alfa Centauri è associata a un margine di errore di $\pm1{,}3$ millesimi di secondo d’arco. Ciò vuol dire che la misura effettiva di quell’angolo potrebbe essere un qualsiasi valore compreso tra $744{,}3$ millesimi e $741{,}7$ di secondo d’arco (l’angolo più grande dà la distanza minore). Usando la medesima procedura di prima, vediamo questo margine d’incertezza a cosa corrisponde, tradotto in unità astronomiche.

Trasformiamo in primo luogo i due valori in radianti. Otteniamo per l'angolo più grande $3{,}5959 \times 10^{-6}$ radianti e per il più piccolo $3{,}6085 \times 10^{-6}$ radianti. Eseguiamo ora due divisioni analoghe a quella eseguita prima usando il valore medio dell’angolo di parallasse:

$$
\begin{aligned}
\text{Distanza max Alfa Cen.} &= \frac{1\ \text{au}}{\tan(3,5959 \times 10^{-6})} \\
\text{Distanza min Alfa Cen.} &= \frac{1\ \text{au}}{\tan(3,6085 \times 10^{-6})}  
\end{aligned} \tag{6}
$$

Otteniamo una distanza minima di $277.123$ unità astronomiche ($4{,}382$ anni luce) e una distanza massima di $278.094$ unità astronomiche ($4{,}397$ anni luce). È una differenza di $971$ unità astronomiche, pari a oltre $145$ miliardi di $\text{km}$. Può sembrare poco, ma è un’incertezza notevole, considerando che Alfa Centauri è il sistema stellare più vicino alla Terra.

{{< figura 
src="immagini/alfacentauri-ab.jpg" 
alt="Alfa Centauri A e B riprese dal telescopio spaziale Hubble." 
caption="Alfa Centauri A e B riprese dal telescopio spaziale Hubble. La separazione angolare tra le due stelle è di $17$ secondi d’arco, molto maggiore del loro angolo di parallasse. Crediti: ESA/Hubble & NASA."
>}}

## Calcolare le distanze stellari in parsec

Come abbiamo visto nell’esempio precedente, le parallassi stellari sono angoli minuscoli, sempre inferiori a $1$ secondo d’arco, che è di per sé un angolo piccolissimo: ci vogliono ben $3.600$ secondi d’arco per fare un solo grado, che è a sua volta la $360^a$ parte di una circonferenza.

In sostanza, le parallassi stellari sono angoli così piccoli che è possibile usare nei calcoli delle distanze stellari un’utile semplificazione, in virtù della quale possiamo eliminare l’uso della tangente e dividere direttamente l’unità astronomica per l’angolo di parallasse espresso in radianti. Ciò perché, per [angoli sufficientemente piccoli](https://en.wikipedia.org/wiki/Small-angle_approximation), la tangente di un angolo è *approssimativamente* uguale all’angolo medesimo:

$$ \tan(\alpha) \approx \alpha \tag{7} $$

Per avere un errore dell’$1\%$ usando una simile approssimazione, occorre che l’angolo di parallasse sia pari a $0{,}173031$ radianti cioè a $9^{\circ}$: è un valore decine di migliaia di volte maggiore della maggiore delle parallassi stellari, ragion per cui possiamo adoperare tranquillamente questa semplificazione per calcolare la distanza di qualsiasi stella di cui sia nota la parallasse. Nel caso di Alfa Centauri, per esempio, il calcolo si semplifica nel modo seguente:

$$ \text{Distanza Alfa Centauri} = \frac{1\ \text{au}}{3,602 \times 10^{-6}} \tag{8} $$

Eseguendo la divisione, otteniamo $277.624$ unità astronomiche, cioè esattamente lo stesso valore ottenuto con l’operazione $(5)$, in cui l’unità astronomica era stata divisa per la tangente all’angolo di parallasse.

Vediamo adesso un modo per semplificare ulteriormente i calcoli, eliminando la necessità di convertire gli angoli di parallasse in radianti. Dalla formula $(1)$ sappiamo che la tangente all’angolo di parallasse è uguale al lato opposto dell’immaginario triangolo rettangolo formato da Terra, Sole e stella di cui vogliamo misurare la distanza, diviso per il lato adiacente. Applicando l’approssimazione della formula $(7)$, eliminiamo la tangente e otteniamo che il rapporto tra i due lati del triangolo è direttamente uguale all’angolo di parallasse:

$$ \frac{\text{lato opposto}}{\text{lato adiacente}} = \alpha \tag{9} $$

Poiché la misura dell’angolo $\alpha$ che si ottiene eseguendo l’operazione è in radianti, possiamo anche scrivere questa uguaglianza nel modo seguente:

$$ \frac{\text{lato opposto}}{\text{lato adiacente}} = \frac{\alpha}{57,2958^\circ} \tag{10} $$

In questo caso l’angolo di parallasse $\alpha$ si intende espresso in secondi d’arco, come frazione di $1$ radiante, la cui misura corrisponde appunto a poco meno di $57,3^{\circ}$.

Il valore che a noi interessa ottenere è però la distanza della stella di cui conosciamo l’angolo di parallasse. Ci interessa cioè ricavare la misura del lato adiacente ad $\alpha$. A tal fine, dalla formula $(10)$ ricaviamo che:

$$ \text{lato adiacente} = \frac{(\text{lato opposto})(57,2958^\circ)} {\alpha} \tag{11} $$

Poniamo ora il caso che l’angolo di parallasse $\alpha$ sia esattamente uguale a $1$ secondo d’arco. Poiché il lato opposto di questo immaginario triangolo rettangolo spaziale è il raggio dell’orbita terrestre, cioè l’unità astronomica, e poiché $1$ secondo d’arco è pari a $1/3600$ di grado, possiamo riscrivere la $(11)$ nel modo seguente:

$$ \text{lato adiacente} = \frac{(149.600.000\ \text{km})(57,29578^\circ)} {(1/3600)^\circ} \tag{12} $$

La misura del lato adiacente del triangolo, cioè la distanza che otteniamo svolgendo i calcoli, è pari, approssimando un po’, a $3,086 \times 10^{13}\,\text{km}$, cioè $30.860$ miliardi di km. È l’equivalente di $206.265$ unità astronomiche o $3,262$ anni luce.

{{< figura 
src="immagini/un-parsec.png" 
alt="Rappresentazione non in scala dell'angolo di un secondo d'arco che sottende, visto dalla Terra, la lunghezza di un parsec." 
caption="In questa rappresentazione non in scala dell’angolo di $1$ secondo d’arco che sottende $1$ unità astronomica, la lunghezza del lato maggiore del triangolo, cioè la misura di $1$ parsec, è enormemente sottodimensionata. Il rapporto corretto tra il lato maggiore e il lato minore del triangolo è $206265:1$. Fonte: Wikimedia"
>}}

Questa grandezza è detta **parsec**[^4] (abbreviato in $\text{pc}$) e corrisponde alla distanza alla quale l’unità astronomica, cioè il raggio dell’orbita terrestre, sottende un angolo di $1$ secondo d’arco. Il parsec è l’unità di misura fondamentale usata dagli astronomi per indicare le distanze stellari [^5].

## L'uso dei parsec semplifica il calcolo delle distanze stellari 

Ora, se un parsec è la distanza di un oggetto celeste dal quale il raggio dell’orbita terrestre sottende un angolo di $1$ secondo d’arco, ne possiamo dedurre che la distanza in parsec di qualsiasi stella può essere ricavata, una volta noto l’angolo di parallasse, con una banalissima divisione:

$$ \text{Distanza stella} = \frac{1}{\alpha} \tag{13} $$

Per avere una conferma della validità dell’operazione, applichiamo la formula ad Alfa Centauri, la cui parallasse è, come ormai sappiamo, $743\,\text{mas}$, cioè $0{,}743$ secondi d’arco:

$$ \text{Distanza Alfa Centauri} = \frac{1}{0,743} \tag{14} $$

Il risultato della divisione, leggermente arrotondato, è $1{,}346$ parsec.

Vediamo adesso se la distanza così ottenuta corrisponde a quella che avevamo calcolato in precedenza usando le formule $(5)$ e $(8)$. Poiché $1$ parsec è uguale a $206.265\,\text{au}$, $1{,}346$ parsec corrispondono a $277.633\,\text{au}$. Possiamo concludere pertanto che la distanza di Alfa Centauri ottenuta con la formula $(14)$ è in ottimo accordo con il valore ottenuto usando le altre due formule $(277.624 \,\text{au})$: la differenza di $9\,\text{au}$ dipende semplicemente dai piccoli arrotondamenti fatti.

Se vogliamo infine conoscere la distanza di una stella in anni luce, basta moltiplicare la distanza in parsec per il fattore di conversione $3{,}262$:

$$ \text{Distanza Alfa Cen. in anni luce} = 1,346 \times 3,262 = 4,39 \tag{15} $$

Anche in questo caso, ovviamente, il valore ottenuto corrisponde a quello che avevamo calcolato in precedenza, trasformando le unità astronomiche in anni luce.

{{< figura 
src="immagini/parallasse-trappist.jpg" 
alt="La parallasse della nana rossa TRAPPIST-1 misurata dal satellite Gaia con il relativo margine di errore." 
caption="La parallasse della nana rossa TRAPPIST-1 misurata dal satellite Gaia con il relativo margine di errore."
>}}

A questo punto possiamo divertirci a calcolare la distanza di qualsiasi stella applicando la formula $(13)$. Abbiamo a disposizione lo sterminato archivio del satellite **Gaia**, dal quale possiamo attingere i valori di oltre 1 miliardo di parallassi stellari misurate a partire dal 2013 [^6]. Dalla [pagina di accoglienza](https://gea.esac.esa.int/archive/) del database, premendo il pulsante “Search” arriviamo alla maschera di ricerca. Inseriamo per esempio il nome della stella **TRAPPIST-1**, una nana rossa intorno alla quale sono stati scoperti ben sette pianeti di dimensioni simili alla Terra. Il database di Gaia ci restituisce un valore di $80,45124261077767\,\text{mas}$ (millesimi di secondo d’arco) per l’angolo di parallasse di questa stella.

Prima di svolgere la divisione che ci fornirà la distanza di TRAPPIST-1 dobbiamo trasformare i millesimi di secondo d’arco in secondi d’arco. Nel farlo, eliminiamo anche un bel po’ di decimali. Il calcolo da svolgere è dunque il seguente:

$$ \text{Distanza TRAPPIST-1} = \frac{1}{0,08045} \tag{16} $$

Eseguendo la divisione otteniamo una distanza di $12,43$ parsec, pari a $40,55$ anni luce. L’angolo di parallasse misurato da Gaia ci dice che la distanza di questa stella è un po’ maggiore di quella riportata nello [studio scientifico](https://www.nature.com/articles/nature17448) che descrive la scoperta del sistema planetario ($12,1 \pm 0,1$ parsec).

{{< figura 
src="immagini/trappist-1.jpg" 
alt="Al centro dell’immagine la nana rossa TRAPPIST-1 ripresa nell’ambito della survey SDSS9." 
caption="Al centro dell’immagine la nana rossa TRAPPIST-1 ripresa nell’ambito della survey SDSS9."
>}}

## Un po' di storia

### La sfida quasi impossibile di misurare le parallassi stellari

Benché l’idea di ricavare le distanze stellari dagli angoli di parallasse si possa far risalire indietro nel tempo fino ad Aristarco, l’effettiva misurazione di una parallasse stellare con valori attendibili non fu possibile prima del 19° secolo, cioè oltre due millenni più tardi.

L’ostacolo principale, come è facile immaginare data l’estrema piccolezza di quegli angoli, era di natura tecnologica. A occhio nudo era ovviamente impossibile misurare parallassi stellari. Si dovette attendere l’invenzione del telescopio, grazie alla quale si ottennero rapidamente formidabili progressi nelle conoscenze astronomiche. Ma i primi telescopi erano assolutamente inadeguati a un compito di estrema precisione, come quello di misurare i minuscoli spostamenti angolari delle stelle, dovuti al riflesso del moto orbitale terrestre. Ai tempi di Galileo, per esempio, i telescopi erano così rudimentali da non consentire di rilevare spostamenti angolari nell’ordine di $1$ minuto d’arco: un margine d’incertezza enorme, considerando che tutte le parallassi stellari sono più piccole di $1$ secondo d’arco (la $60^a$ parte di un minuto).

L’unica cosa che si poteva affermare, data la mancanza di parallassi stellari misurabili, era che le stelle dovessero essere tutte più lontane della massima distanza ricavabile dagli spostamenti angolari che i telescopi dell’epoca erano in grado di registrare. Newton, per esempio, concluse che le distanze stellari dovessero essere tutte maggiori di $20.000$ unità astronomiche. E aveva ragione: oggi sappiamo che anche le stelle più vicine, come Alfa Centauri, distano molto più di $20.000$ unità astronomiche.

Per tutto il 18° secolo, nonostante gli indiscutibili progressi tecnologici, i telescopi non furono ancora all’altezza del compito. Ai tempi di Halley persino con gli strumenti più precisi non era possibile misurare spostamenti angolari minori di $15$ secondi d’arco, un valore ancora immenso, se comparato alla piccolezza delle parallassi stellari.

### Le stelle si muovono!

Tuttavia, secoli di lunghi e faticosi studi astronomici, a partire dall’antichità in poi, avevano consentito di scoprire una serie di moti e fenomeni celesti che interferivano con la misurazione degli angoli di parallasse e dei quali bisognava perciò tenere conto.

La scoperta più antica in questo campo, cioè il moto di **precessione degli equinozi**, si deve a Ipparco, vissuto ben ventidue secoli fa. Egli capì che il dislocamento di alcune stelle nel cielo rispetto alle posizioni riportate $130$ anni prima di lui da Timocari e Aristillo erano dovute a un secolare spostamento dell’asse di rotazione della Terra, il cui ciclo completo si compie in circa $26$ millenni.

{{< figura 
src="immagini/edmond-halley.jpg" 
alt="Ritratto di Edmond Halley eseguito da Richard Phillips. Si trova presso la National Portrait Gallery di Londra." 
caption="Ritratto di Edmond Halley eseguito da Richard Phillips. Si trova presso la National Portrait Gallery di Londra."
>}}

Molti secoli dopo, nel 1718, Edmond Halley, studiando i cataloghi stellari di Tolomeo, Ipparco e Timocari, si accorse che la posizione di quattro tra le stelle più brillanti del cielo - Sirio, Aldebaran, Betelgeuse e Arturo - non corrispondeva alla posizione che avrebbero dovuto avere se l’unico moto di cui tener conto fosse stato il moto riflesso dovuto alla precessione degli equinozi. Ne concluse correttamente che quelle stelle così luminose dovevano essere più vicine alla Terra rispetto a tutte le altre, la posizione delle quali appariva invece immutata dai tempi di Tolomeo. Lo spostamento di quelle quattro stelle sulla volta celeste doveva essere allora conseguenza di un loro **moto proprio**: un moto così lento che non poteva essere scoperto da Tolomeo o da Ipparco, troppo vicini temporalmente agli estensori dei cataloghi stellari precedenti; moto che però era divenuto cospicuo all’epoca di Halley, quasi due millenni più tardi. Le stelle, dunque, non erano fisse, ma *si* *muovevano*: una scoperta epocale, dal punto di vista cosmologico e filosofico.

### Aberrazione della luce, nutazione e altri fenomeni che complicano la misura delle parallassi stellari

Altre scoperte fondamentali si devono al reverendo [James Bradley](https://en.wikipedia.org/wiki/James_Bradley), un astronomo inglese che dedicò anni di studio e osservazioni al tentativo infruttuoso di misurare la parallasse di alcune stelle. Studiando i cambiamenti di posizione di Gamma Draconis, una stella nella costellazione del Dragone, Bradley pervenne tra il 1725 e il 1728 alla spiegazione di un fenomeno ottico che era già stato osservato da altri a partire dalla fine del ‘600, ma non aveva ancora trovato, prima di lui, un chiarimento soddisfacente. Il fenomeno è l'**aberrazione della luce** ed è prodotto dal moto della Terra rispetto alla direzione di provenienza della luce stellare. In sostanza, a causa del moto orbitale terrestre, che varia in velocità e direzione nel corso dell’anno, le stelle variano conseguentemente la loro posizione nel cielo, descrivendo una piccola ellisse, il cui asse maggiore misura $40,5$ secondi d’arco (molto più di qualsiasi angolo di parallasse), mentre la lunghezza dell’asse minore dipende dalla declinazione delle stelle, cioè dalla loro altezza sull’eclittica.

{{< figura 
src="immagini/tabella.jpg" 
alt="Una tabella che mostra le quantità degli spostamenti attribuibili rispettivamente alla precessione, all’aberrazione della luce e alla nutazione che Bradley annotò in venti anni di osservazioni della stella Gamma Draconis." 
caption="Le quantità degli spostamenti attribuibili rispettivamente alla precessione, all’aberrazione della luce e alla nutazione che Bradley annotò in venti anni di osservazioni della stella Gamma Draconis. Purtroppo nessuno spostamento era attribuibile invece alla parallasse stellare, il moto che Bradley sperava ardentemente di registrare. Fonte: Philosophical Transactions of the Royal Society, Vol XIV, 1748."
>}}

Sempre a Bradley si deve la scoperta della **nutazione**, un moto oscillatorio dell’asse terrestre che si somma alla precessione degli equinozi. L’effetto della nutazione faceva sì che la declinazione di alcune stelle osservate da Bradley cambiasse di $9$ o $10$ secondi d’arco in più o in meno rispetto al valore di $50$ secondi atteso per effetto della sola precessione dell’asse terrestre. Egli descrisse compiutamente questo moto in un articolo pubblicato nel 1748, giunto al termine di una ricerca che durava da almeno vent’anni.

Un’altra notevole intuizione di Bradley fu quella che esistesse ancora un altro lieve movimento stellare di cui tenere conto, dovuto al moto del Sole e dell’intero sistema solare attraverso il cielo. Bradley comprese che questa **parallasse secolare** avrebbe influenzato maggiormente la posizione delle stelle più vicine e meno quella delle stelle più lontane. L’idea fu ripresa dall’astronomo tedesco [Tobias Mayer](https://it.wikipedia.org/wiki/Tobias_Mayer), che nel 1756 paragonò l’effetto della **parallasse solare** sulla posizione delle stelle al separarsi degli alberi davanti a un osservatore che avanza in una foresta, accompagnato dal richiudersi degli alberi che egli si lascia alle spalle avanzando. 

Mayer, tuttavia, non riuscì a trovare nessuna prova osservativa della parallasse solare. L’impresa riuscì invece a William Herschel, che nel 1783, studiando i moti propri di una serie di stelle, seppe identificare il punto del cielo verso cui il Sole sembrava muoversi e quello da cui invece sembrava allontanarsi. Il primo punto, detto **apice solare**, posto da Herschel nella costellazione di Ercole, contiene stelle che paiono allontanarsi le une dalle altre per l’effetto prospettico causato dall’avanzamento del Sole; il secondo punto, detto **antiapice solare**, posto da Herschel non lontano da Orione, racchiude invece stelle che sembrano avvicinarsi le une alle altre, per effetto della recessione del Sole.

{{< figura 
src="immagini/james-bradley.jpg" 
alt="James Bradley in un ritratto di Thomas Hudson." 
caption="James Bradley in un ritratto di Thomas Hudson. Fonte: Wikimedia."
>}}

Un ultimo importante fenomeno ottico, di cui occorre tenere conto nella ricerca delle parallassi stellari, è la **rifrazione atmosferica**. Nota fin dall’antichità, la rifrazione è la deviazione della luce dalla linea retta, causata dal suo passaggio attraverso masse d’aria. L’effetto varia con l’altezza sull’orizzonte ed è praticamente assente solo allo zenit. Stelle particolarmente basse sull’orizzonte possono apparire spostate di *diversi minuti d’arco* per effetto della rifrazione, per cui non sono bersagli idonei, se l’obiettivo è misurare le minuscole parallassi stellari.

### Finalmente la misura delle parallassi!

Sembra incredibile che, pur con tutti questi moti da tenere in considerazione e pur con i perduranti limiti strumentali dei telescopi dell’epoca, nella prima metà del 19° secolo, dopo una battaglia plurimillenaria, tre astronomi riuscirono finalmente, ciascuno per proprio conto, a ottenere misure valide degli angoli di parallasse di altrettante stelle.

{{< figura 
src="immagini/friedrich-wilhelm-bessel.jpg" 
alt="descrizione immagine" 
caption="Friedrich Wilhelm Bessel in un disegno di Michel Hertrich"
>}}


Il primo a riuscire nella storica impresa di misurare una parallasse stellare fu l’astronomo tedesco [**Friedrich W. Bessel**](https://it.wikipedia.org/wiki/Friedrich_Wilhelm_Bessel), che usò allo scopo l'eliometro costruito da Joseph von Fraunhofer per l’osservatorio di Königsberg. Il valore pubblicato da Bessel nel 1838 per la parallasse di 61 Cygni, un sistema binario relativamente vicino e dal notevole moto proprio, era di $0{,}314 \pm 0{,}014$ secondi d’arco: un valore non troppo distante da quello misurato di recente dal satellite Gaia ($0{,}285$ secondi).

Negli stessi anni in cui Bessel misurava la parallasse di 61 Cygni, [**Friedrich G. W. von Struve**](https://it.wikipedia.org/wiki/Friedrich_Georg_Wilhelm_von_Struve) osservava la brillante Vega. Nel corso di $96$ notti, tra novembre 1835 e agosto 1838, Struve misurò accuratamente la posizione della stella. L’angolo di parallasse da lui calcolato era di $0{,}262 \pm 0{,}025$ secondi d’arco: il doppio dell’angolo di parallasse misurato per Vega dal satellite Hipparcos ($0{,}130$ secondi).

Ultimo ad arrivare in questa corsa alla parallasse fu l’astronomo scozzese [**Thomas Henderson**](https://en.wikipedia.org/wiki/Thomas_Henderson_(astronomer)), che pubblicò nel 1839 la parallasse di Alfa Centauri, che egli aveva calcolato in $1{,}16 \pm 0{,}11$ secondi d’arco, un valore di oltre il $50\%$ superiore rispetto alle misurazioni più recenti. C’è da dire a suo merito che Henderson arrivò tardi solo nella pubblicazione dei risultati, perché le sue osservazioni di Alfa Centauri, svolte da Città del Capo tra il 1832 e il 1833, erano precedenti sia al lavoro di Bessel che a quello di Struve.

{{< figura 
src="immagini/tabella-2.jpg" 
alt="I valori delle parallassi stellari pubblicati da Struve, Henderson e Bessel tra il 1838 e il 1839." 
caption="I valori delle parallassi stellari pubblicati da Struve, Henderson e Bessel tra il 1838 e il 1839."
>}}

L’invenzione della fotografia determinò, intorno alla fine del 19° secolo, un netto progresso nella precisione e nel numero delle parallassi stellari misurate. Nel 1910 erano note le parallassi di $365$ stelle. Nel 1935 il numero era già salito a $7.534$. Ma il vero salto, sia dal punto di vista qualitativo che quantitativo, si è avuto con la messa in orbita di satelliti dedicati specificamente a misurazioni astrometriche. Il primo fu Hipparcos, la cui missione durò dal 1989 al 1993. In quei quattro anni il satellite misurò la parallasse di $118.000$ stelle con alta precisione (cioè con errori non superiori generalmente al $10–20\%$) e quella di $2{,}5$ milioni di altre stelle con precisione leggermente inferiore.

Dal 2013 al 2025 è durata la missione del successore di Hipparcos, il **satellite Gaia** dell'agenzia spaziale europea ESA: lanciato il 19 dicembre 2013, ha concluso la fase di scansione del cielo il 15 gennaio 2025. Nei suoi undici anni di attività, Gaia ha misurato le parallassi di oltre un miliardo di stelle, con errori inferiori al millesimo di secondo d'arco. È un'eredità enorme per gli astronomi di oggi e del futuro, che possono conoscere finalmente, grazie a Gaia, la distanza delle stelle.

{{< figura 
src="immagini/61-cygni.jpg" 
alt="La luminosa stella al centro dell’immagine è 61 Cygni, la prima di cui sia stata misurata la parallasse." 
caption="La luminosa stella al centro dell’immagine è 61 Cygni, la prima di cui sia stata misurata la parallasse. L'immagine è tratta dalla survey PanSTARRS-1."
>}}

[^par]: Il termine deriva dal greco παράλλαξις (*parállaxis*), "mutamento, deviazione", da παραλλάσσειν *(parallássein)*, "alternare, cambiare" (da παρά, "accanto", e ἀλλάσσειν, "mutare", dalla stessa radice di ἄλλος, "altro"). Entrò nelle lingue europee moderne attraverso il francese *parallaxe*, attestato dalla metà del Cinquecento.

[^1]: Se abitassimo su un pianeta più lontano dal Sole, per esempio Marte, disporremmo di una linea di base più lunga e sarebbe più facile misurare le parallassi stellari. Ma dobbiamo accontentarci…

[^2]: Un radiante è l’angolo sotteso da un arco di circonferenza che, raddrizzato, ha lunghezza esattamente uguale al raggio della circonferenza. Poiché una circonferenza misura $360^{\circ}$ e il rapporto tra circonferenza e raggio è uguale a $2\pi$, ne consegue che un radiante è uguale a $360^\circ/2\pi$, cioè poco meno di $57{,}3^{\circ}$.

[^3]: E Alfa Centauri è il sistema stellare più vicino alla Terra. Le parallassi di tutte le altre stelle, esclusa Proxima Centauri, sono minori.

[^4]: Il nome è un neologismo derivato dalla contrazione di “**par**allasse di 1 **sec**ondo d’arco”. Fu coniato dall’astronomo britannico Herbert Hall Turner. La parola **parsec** comparve per la prima volta in una [pubblicazione scientifica](https://academic.oup.com/mnras/article/73/5/334/972786) nel 1913.

[^5]: Per distanze maggiori si adoperano i suoi multipli: il **kiloparsec** ($1\,\text{kpc} = 1.000\,\text{pc}$), il **megaparsec** ($1\,\text{Mpc} = 1.000.000\,\text{pc}$) e il **gigaparsec** ($1\,\text{Gpc} = 1.000.000.000\,\text{pc}$).

[^6]: Ma le parallassi delle stelle più luminose (Sirio, Vega ecc.) non sono disponibili nell’archivio di Gaia, perché la luce abbagliante di quelle stelle satura completamente i delicati sensori del telescopio spaziale.
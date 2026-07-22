+++
title = "Anomalia vera, Anomalia Media, Anomalia eccentrica"
date = "2026-07-15"
draft = false
+++

{{< katex />}}

## L'anomalia vera

L’**anomalia vera** $ \nu $ (*nu*) rappresenta l’angolo formato tra il pericentro e la posizione istantanea di un corpo celeste orbitante, misurato sul piano orbitale nella direzione del moto, con il vertice nel corpo centrale.

Dei sei parametri orbitali classici o elementi kepleriani - semiasse maggiore dell’orbita $ a $ , eccentricità $ e $ , inclinazione $ i $ , longitudine del nodo ascendente $\Omega$, argomento del pericentro $\omega$ e anomalia media all'epoca $ M_0 $ \- l'ultimo, l'anomalia media, è quello che si usa come base di partenza per determinare l'anomalia vera.

Il tratto caratteristico dell’anomalia vera è che *cambia continuamente*, in conseguenza del fatto che il corpo orbitante procede senza sosta lungo la sua orbita intorno al corpo centrale. La geometria dell’angolo non cambia con velocità uniforme, ma variabile, in accordo con i cambiamenti di **velocità orbitale**. Infatti, ogni oggetto celeste **accelera** e **rallenta** lungo l’ellisse orbitale in conformità della seconda legge di Keplero. Pertanto, l’anomalia vera aumenta rapidamente vicino al pericentro e molto più lentamente nei pressi dell’apocentro. Conoscere l’anomalia vera in un dato istante ha un’utilità essenziale: dice all’astronomo dove puntare *esattamente* il telescopio per vedere l’oggetto studiato. Ma calcolare dove sia quel punto momento per momento non è affare semplice.

## L'anomalia media

Ecco dove entra in gioco l’anomalia media $M$, un angolo *fittizio*, un ente puramente matematico, che fa “girare” l’oggetto celeste su un’orbita perfettamente circolare, detta **circonferenza ausiliaria**, circoscritta all’orbita ellittica. Le due orbite coincidono al pericentro e all’apocentro (o al perielio e all’afelio, nel caso di corpi che orbitano intorno al Sole).

Per capire come funziona il meccanismo, immaginiamo un corpo celeste fittizio che percorre un’orbita circolare ($e = 0$) attorno al Sole nello stesso identico tempo impiegato da un corpo reale sulla sua orbita ellittica ($0 < e < 1$). I due oggetti, quello reale e quello fittizio, hanno lo *stesso periodo orbitale*. L’anomalia media è l’angolo con vertice nel Sole, formato dalla posizione del corpo immaginario con la posizione del perielio.

{{< figura src="immagini/anomalia-media.svg" alt="L'anomalia media è l'angolo misurato dal centro dell'ellisse che individua la posizione del pianeta medio, un corpo fittizio che percorre la circonferenza ausiliaria con velocità angolare costante" caption="L'anomalia media ($M$) è l'angolo misurato dal centro dell'ellisse ($C$) che individua la posizione del pianeta medio, un corpo fittizio che percorre la circonferenza ausiliaria con velocità angolare costante. L'anomalia vera ($\nu$) è invece l'angolo misurato dal fuoco occupato dal Sole e individua la posizione reale del pianeta lungo l'orbita ellittica. Crediti: Michele Diodati" >}}

Ovviamente, la posizione del corpo celeste fittizio sulla circonferenza ausiliaria non è casuale. A differenza dell’anomalia vera, l’anomalia media cresce in modo *perfettamente uniforme e lineare* nel tempo: aumenta ogni giorno di uno stesso identico valore, che rappresenta il **moto medio** $n$ del corpo reale nella sua orbita ellittica intorno al corpo centrale. Possiamo dire che l'anomalia media è una misura del **tempo trascorso** dal passaggio al perielio, espressa in gradi anziché in giorni. Poiché la circonferenza ausiliaria e l’ellisse orbitale coincidono al **perielio** ($0^{\circ}$) e all’**afelio** ($180^{\circ}$), l’anomalia media e l’anomalia vera in quei due punti sono perfettamente uguali. Ma, in qualunque altro punto dell’orbita, l’anomalia vera sarà in “anticipo” o in “ritardo” rispetto a quella media a causa della continua variazione della velocità orbitale del corpo celeste. Maggiore è l’eccentricità dell’orbita, maggiore sarà il divario tra le due. Il vantaggio dell’anomalia media è che, avendo una crescita lineare nel tempo, è molto più facile da calcolare rispetto all’anomalia vera.

Tuttavia, per calcolare l’anomalia media, bisogna prima conoscere i parametri strutturali dell’orbita del corpo reale, altrimenti non sapremo mai se l’oggetto osservato impiega un anno o cento anni a fare un giro completo e, di conseguenza, non avremo modo di derivare quale sia il suo moto orbitale medio.

Dunque, per sapere a quanti gradi o frazioni di grado corrisponde il moto medio $n$, dobbiamo prima conoscere il **semiasse maggiore** $a$ dell’orbita ellittica reale inscritta nell’orbita fittizia circolare. Grazie alla terza legge di Keplero, da $a$ si ricava il periodo orbitale $P$. Una volta calcolato il periodo in giorni, si ottiene il moto medio con una semplice divisione:

$$n=\frac{360^{\circ}}{P}$$

Ora che abbiamo il “passo” giornaliero, per arrivare all’anomalia media c’è bisogno di un “punto zero” da cui iniziare a contare il tempo. Questo punto zero è per convenzione il **perielio** ($t_p$), il punto dell’orbita più vicino al Sole (o il pericentro, nel caso di un qualsiasi altro sistema di corpi celesti). L’anomalia media $M$ all’istante attuale $t$ si calcola pertanto come:

$$M=n\times(t-t_p)$$

## L'anomalia eccentrica

Giunti a questo punto, siamo però solo a metà strada. Non basta, infatti, conoscere l’anomalia media per arrivare all’anomalia vera. Occorre ancora un passaggio intermedio, che si basa su una terza anomalia, detta **Anomalia Eccentrica**, indicata con il simbolo $E$.

Per capire $E$ cosa rappresenta, dobbiamo immaginare l’orbita ellittica reale di un corpo celeste e fare riferimento alla **circonferenza ausiliaria** che la circoscrive, quella che abbiamo già usato per definire l’anomalia media. Il raggio di questa circonferenza è pari al semiasse maggiore $a$ dell’ellisse. Ora partiamo dal punto $P$, che indica la **posizione reale** del corpo sull’ellisse orbitale. Da $P$ innalziamo una linea verticale perpendicolare all’asse maggiore dell’ellisse, che interseca la circonferenza ausiliaria nel punto $P'$. Quindi tracciamo un segmento che unisce il centro geometrico della circonferenza ausiliaria al punto proiettato $P'$. L’anomalia Eccentrica $E$ è l’angolo formato tra l’asse maggiore nella direzione del perielio e la linea che unisce il centro della circonferenza al punto proiettato $P'$.

{{< figura src="immagini/anomalia-eccentrica.svg" alt="Descrizione dell'immagine" caption="L’anomalia eccentrica $E$ rappresenta geometricamente l’angolo $E$ in figura. Quest’angolo ha il vertice nel centro della circonferenza ausiliaria ed è formato dal semiasse maggiore dell’ellisse in direzione del perielio e dal raggio che unisce il centro della circonferenza ausiliaria alla proiezione $P'$ sulla circonferenza medesima. Crediti: Michele Diodati" >}}

## L'anomalia eccentrica come "ponte" verso l'anomalia vera

Ma a cosa serve, tutto sommato, introdurre quest’ulteriore complicazione? Serve, perché l’anomalia eccentrica è il “ponte quantitativo” che lega la circonferenza ausiliaria su cui “scorre” l’anomalia media e l’ellisse reale su cui orbita il corpo celeste. Dal punto di vista **geometrico**, si relaziona all’anomalia vera tramite i rapporti geometrici elementari tra un’ellisse e il suo cerchio circoscritto. Dal punto di vista dinamico, invece, si lega all’anomalia media attraverso il termine $e \sin E$. Questo termine corregge la linearità del tempo medio “circolare”, introducendo la distorsione causata dallo spostamento del Sole dal centro dell’orbita al fuoco (la cui distanza dal centro è pari ad $a \times e$).

Ma attenzione! Se vogliamo generare una rappresentazione geometrica dell’anomalia eccentrica come quella nell’immagine riportata più sopra, dobbiamo partire dalla **posizione istantanea** $P$ del corpo celeste sull’orbita ellittica. Ed in realtà è proprio quella posizione che noi non conosciamo. Ci serve infatti l’anomalia vera per determinarla. Non possiamo perciò partire da $P$ per arrivare a $P'$. In realtà, si ragiona al contrario: si parte dall’anomalia media $M$ per calcolare il valore dell’anomalia eccentrica $E$, e da quella si ricava infine l’anomalia vera $\nu$. Lo strumento di partenza è la celebre equazione di Keplero:
<span id="eq-keplero"></span>

$$
M=E-e \sin E{,}
$$

per risolvere la quale dobbiamo conoscere preventivamente il valore di $M$ e l’eccentricità orbitale $e$. A complicare un po’ le cose, c’è il fatto che si tratta di un’equazione **trascendente**: la presenza della funzione seno rende l’equazione di Keplero **non algebrica**. Significa che non esiste una formula diretta e semplice per esprimere l’anomalia eccentrica $E$ in termini di $M$ ed $e$ utilizzando solo le operazioni algebriche fondamentali. Per arrivare a definire il valore di $E$ abbiamo bisogno di **calcoli iterativi**, che, partendo da un valore ipotetico di $E$, si avvicinino sempre più al suo valore effettivo per via di successive approssimazioni. Vedremo fra poco un esempio pratico che mostra come si procede in questi casi (o meglio come procedono i computer) [^1].

Comunque sia, una volta ottenuto il valore numerico di $E$, il passaggio all’anomalia vera $\nu$ è puramente trigonometrico e relativamente immediato, grazie alle relazioni geometriche che legano l’ellisse al suo cerchio circoscritto:

$$\tan \left(\frac{\nu}{2}\right)=\sqrt{\frac{1+e}{1-e}\cdot} \tan \left(\frac{E}{2}\right)$$

Per estrarre il valore di $\nu$, poniamo in primo luogo il secondo membro dell’equazione uguale a $k$ per semplificare i calcoli (l’intera espressione è già risolvibile, dato che conosciamo i valori sia di $E$ sia di $e$):

$$k=\sqrt{\frac{1+e}{1-e}\cdot} \tan \left(\frac{E}{2}\right)$$

Ora l’equazione di partenza si presenta in una forma molto semplificata:

$$\tan \left(\frac{\nu}{2}\right)$$

Per liberare $\nu$ dalla funzione tangente, dobbiamo applicare la sua funzione inversa, l’**arcotangente**, a entrambi i membri dell’equazione:

$$\arctan \left[ \tan \left(\frac{\nu}{2}\right)\right]= \arctan(k)$$

Poiché l’arcotangente annulla la tangente, il membro sinistro si semplifica:

$$\frac{\nu}{2}=\arctan(k)$$

Ora possiamo eliminare $k$, rimettendo al suo posto l’espressione di partenza:

$$\frac{\nu}{2}=\arctan\left[\sqrt{\frac{1+e}{1-e}\cdot} \tan \left(\frac{E}{2}\right)\right]$$

L’ultimo ostacolo è il denominatore $2$. Per eliminarlo e isolare completamente la nostra incognita, moltiplichiamo l’intera equazione per $2$:

$$\nu=2\cdot\arctan\left[\sqrt{\frac{1+e}{1-e}\cdot} \tan \left(\frac{E}{2}\right)\right]$$

In conclusione, senza l’anomalia eccentrica non avremmo un appiglio geometrico per tradurre la progressione lineare del tempo (rappresentata dall’anomalia media) nella complessa dinamica orbitale governata dalla gravità. Questo processo, che parte dal tempo e arriva alla geometria, ci restituisce alla fine la posizione istantanea del corpo che vogliamo osservare [^2] .

## Un esempio pratico: l'anomalia vera di Plutone

Dopo tutta questa teoria, è tempo di passare alla **pratica**. Scopriamo qual è l’anomalia vera di **Plutone** alla data odierna (7 luglio 2026), partendo dai dati ufficiali presenti nel Minor Planet Center della IAU, la International Astronomical Union. Interrogando il database, otteniamo i dati essenziali che ci servono per arrivare all’anomalia vera:

*   asse maggiore dell’orbita: $39{,}33866\;\text{UA}$;
    
*   eccentricità: $0{,}247652$;
    
*   anomalia media: $53{,}93394^{\circ}$;
    
*   epoca della rilevazione: $\text{JD}\; 2461200{,}5$.
    

Quest’ultimo valore è un sistema di datazione che usano gli astronomi per evitare le complessità dei vari anni civili in uso in diverse parti del mondo. La data in questione corrisponde esattamente alla mezzanotte UT (tempo universale) del 9 giugno 2026. Dalla data e dall’anomalia media, sappiamo dunque che Plutone, se viaggiasse sempre alla sua velocità orbitale media (invece di accelerare e rallentare come fanno i corpi reali), si sarebbe trovato il 9 giugno 2026 a $53{,}93394^{\circ}$ dal punto in cui ha toccato il perielio.

L’anomalia media $M$, più che un angolo, è una misura lineare del tempo che passa, è un orologio astronomico. Come, tale, dobbiamo aggiornare il dato riportato dalla IAU alla data odierna (7 luglio 2026). Dal 9 giugno 2026 a oggi sono trascorsi esattamente **28 giorni**. Per arrivare al valore attuale di $M$, dobbiamo prima però ricavare il periodo orbitale di Plutone. Usiamo a tal fine la terza legge di Keplero:

$$P_{\text{anni}} \approx a^{3/2} = 39{,}33866^{3/2} \approx 246{,}73\; \text{anni}.$$

L’applicazione della formula ci dice che un giro completo di Plutone intorno al Sole dura poco meno di 247 anni! Moltiplicando per la durata dell’anno terrestre, otteniamo il periodo orbitale di Plutone in giorni terrestri:

$$246{,}73\times365{,}25=90118\;\text{giorni}.$$

Possiamo ora calcolare il moto medio giornaliero $n$ dividendo l’angolo giro per il periodo orbitale di Plutone espresso in giorni:

$$n=\frac{360^{\circ}}{90118}\approx 0{,}0039947^{\circ} \;\text{al giorno}$$

Ora abbiamo tutti gli elementi per calcolare l’anomalia media al 7 luglio 2026:

$$M = M_0 + (n \cdot \Delta t) = 53{,}93394^{\circ} + (0,0039947^{\circ} \times 28) \approx \mathbf{54,0458^{\circ}}$$

Per chi si fosse perso nei calcoli, abbiamo aggiunto al valore di $M$ riportato nel database della IAU, indicato nell’equazione con $M_0$, le frazioni di grado di moto medio percorse da Plutone nei 28 giorni trascorsi dal 9 giugno 2026. L’anomalia media $M$ odierna è dunque approssimativamente pari a $54,0458^{\circ}$.

Siamo arrivati al punto in cui possiamo applicare l’equazione di Keplero per ricavare l’anomalia eccentrica, ma, prima di procedere, dobbiamo convertire l’anomalia media da gradi in radianti, in modo da poter confrontare un numero puro ($e \sin E$) con un altro numero puro (l’anomalia media espressa in radianti [^3] ):

$$M_{\text{rad}} = 54{,}0458 \times \frac{\pi}{180} \approx \mathbf{0{,}94328 \text{ rad}}$$

Ora abbiamo il tempo medio $M$ in radianti (circa $0{,}94328$) e lo “schiacciamento” dell’ellisse orbitale di Plutone ($e = 0{,}247652$). Per ricavare l’**anomalia eccentrica** $E$, dobbiamo risolvere l’equazione trascendente $M = E−e \sin ⁡E$, con il metodo iterativo, per via di successive approssimazioni. La riscriviamo pertanto come:

$$E_{n+1} =M+e \sin E_n$$

Come prima ipotesi, proviamo a vedere se $E$ può essere uguale a $M$:

$$\begin{aligned} E_1 &= 0,94328 + 0,247652 \cdot \sin(0,94328) \\ &= 0,94328 + 0,247652 \cdot 0,80953 \approx \mathbf{1,14376 \text{ rad}} \end{aligned}$$

Nella seconda iterazione, ripetiamo il calcolo, sostituendo $E_1$ alla prima ipotesi (il numero tra parentesi):

$$\begin{aligned} E_2 &= 0,94328 + 0,247652 \cdot \sin(1,14376) \\ &= 0,94328 + 0,247652 \cdot 0,91024 \approx \mathbf{1,16870 \text{ rad}} \end{aligned}$$

Continuiamo il ciclo di iterazioni in base allo stesso principio:

$$\begin{aligned} E_3 &= 0,94328 + 0,247652 \cdot \sin(1,16870) \\ &= 0,94328 + 0,247652 \cdot 0,92015 \approx \mathbf{1,17115 \text{ rad}} \end{aligned}$$

Alla quarta iterazione notiamo che i valori di $E$ stanno convergendo rapidamente verso un punto preciso:

$$E_4 = 0{,}94328 + 0{,}247652 \cdot \sin(1{,}17115) \approx \mathbf{1{,}17139 \text{ rad}}$$

Possiamo fermarci a $\approx \mathbf{1,1714}$ **radianti**, perché ogni successiva iterazione aumenterebbe la precisione solo di pochi decimali. Ora, per comodità visiva, riconvertiamo il risultato in gradi:

$$1{,}1714 \times \frac{180}{\pi} \approx \mathbf{67{,}11^\circ}$$

L’anomalia eccentrica $E$ di Plutone alla data odierna è dunque di circa $\mathbf{67{,}11^\circ}$. Abbiamo finalmente tutti gli elementi necessari per calcolare l’anomalia vera, ovvero l'angolo reale Plutone-Sole-Perielio sul piano dell'orbita, usando la formula trigonometrica standard citata più sopra, ovvero:

$$\tan \left(\frac{\nu}{2}\right)=\sqrt{\frac{1+e}{1-e}\cdot} \tan \left(\frac{E}{2}\right)$$

Cominciamo col risolvere la radice quadrata basata sull’eccentricità:

$$\sqrt{\frac{1+0,247652}{1-0,247652}} = \sqrt{\frac{1,247652}{0,752348}} = \sqrt{1,65834} \approx \mathbf{1,28776}$$

Passiamo ora al calcolo della tangente di $E\over 2$. Dal passo precedente sappiamo che:

$${E\over2} = {67,11^\circ \over 2} = 33,555^\circ$$

Da cui segue:

$$\tan(33,555^\circ) \approx \mathbf{0,66329}$$

Non ci resta che moltiplicare i due fattori:

$$\tan\left(\frac{\nu}{2}\right) = 1,28776 \times 0,66329 \approx \mathbf{0,85416}$$

A questo punto troviamo l'arcotangente per isolare $\nu\over 2$:

$$\frac{\nu}{2} = \arctan(0,85416) \approx 40,50^\circ$$

Siamo all'ultimo passaggio. Portiamo $2$ al secondo membro dell’equazione e moltiplichiamo per $2$ per avere l'angolo finale:

$$\nu = 40,50^\circ \times 2 = \mathbf{81,00^\circ}$$

Grazie a questa lunga sequenza di calcoli, abbiamo estratto alla fine il dato geometrico puro: alla data in cui questo articolo è stato scritto **(7 luglio 2026)** l’anomalia vera di Plutone è di circa $\mathbf{81,00^\circ}$ [^4]. Significa che Plutone, nel suo lunghissimo viaggio di oltre $246$ anni intorno al Sole, ha superato il perielio - evento che sappiamo accadde esattamente il 5 settembre 1989 - e da allora è progredito lungo la sua ellisse orbitale di un angolo effettivo di $81^\circ$ rispetto alla direzione del suo punto di massimo avvicinamento al Sole.

È degna di nota l’enorme differenza tra anomalia media ed anomalia vera, dovuta alla seconda legge di Keplero: se l’orbita fosse stata circolare, Plutone oggi si troverebbe a $\mathbf{54{,}04^\circ}$ dal perielio. Poiché invece l’orbita è molto eccentrica e Plutone si sta muovendo nella prima parte dell’orbita, dove è più vicino al Sole e quindi corre più velocemente, l’anomalia vera è drasticamente maggiore di quella media!

## I necessari fattori di correzione

Dopo tutti questi calcoli, ci piacerebbe dire che sappiamo finalmente stanotte dove puntare il telescopio per vedere Plutone. Purtroppo non è così. I calcoli eseguiti finora rappresentano una situazione ideale che non si verifica nella realtà. Quella che abbiamo usato come modello è un’**orbita kepleriana imperturbata** (o problema dei due corpi). È un'eccellente approssimazione, ma insufficiente a trovare il punto esatto del cielo in cui si trova oggi Plutone.

Per ricavare il valore *davvero preciso* dell’anomalia vera di Plutone, c’è bisogno di applicare agli $81^\circ$ che abbiamo calcolato dei fattori di correzione.

Per passare alle coordinate **reali** da impostare sulla montatura del telescopio, gli astronomi applicano **tre grandi categorie di correzioni** fisiche e geometriche.

### 1\. Le perturbazioni gravitazionali

La prima categoria di correzioni è pura meccanica celeste. È il calcolo delle **perturbazioni gravitazionali** a cui il corpo da osservare è sottoposto. Plutone non risente solo della gravità del Sole. Mentre si muove, viene costantemente “strattonato” dagli altri pianeti, in particolare dai giganti gassosi. Nettuno, Urano, Saturno e Giove modificano continuamente la forma dell’orbita di Plutone. Nel corso dei decenni, il semiasse maggiore, l’eccentricità e persino l’orientamento del perielio oscillano.

C’è poi la **risonanza** $3:2$ **con Nettuno.** Plutone è in risonanza orbitale stabile con Nettuno: ogni $3$ orbite di Nettuno, Plutone ne compie $2$. Questo legame genera variazioni periodiche a lungo termine che influiscono sull’andamento dell’anomalia vera.

Come si correggono tutte queste influenze? Gli astronomi usano **effemeridi analitiche avanzate** (come le teorie VSOP o i modelli numerici del JPL della NASA, ad esempio il DE440). Questi modelli matematici aggiungono all’anomalia vera una serie di funzioni trigonometriche correttive (chiamate *termini periodici*). Si sommano letteralmente decine o centinaia di piccoli “correttori” per compensare i disturbi causati dagli altri pianeti.

### 2\. Il passaggio alle coordinate geocentriche

La seconda categoria di correzioni riguarda il **cambio di prospettiva dal Sole alla Terra**. L’anomalia vera dice dove si trova Plutone rispetto al Sole e sul suo piano inclinato. Ma noi siamo sulla Terra, che si muove a sua volta su un altro piano (l’eclittica) e ruota su un asse inclinato. Prima di tutto, dunque, dobbiamo passare alle **coordinate geocentriche**: si combina la posizione tridimensionale di Plutone rispetto al Sole con la posizione della Terra rispetto al Sole. Tramite una sottrazione di vettori geometrici 3D, si sposta l’origine dei calcoli dal centro del Sole al centro della Terra.

Ciò fatto, bisogna correggere **l’obliquità,** cioè tener conto dell’inclinazione dell’asse terrestre. Il piano di riferimento del cielo per chi usa il telescopio non è l’eclittica, ma l’**Equatore Celeste** (la proiezione nello spazio dell’equatore della Terra). Poiché l’asse terrestre è inclinato di circa $23^{\circ}26'$, le coordinate eclittiche di Plutone vanno ruotate matematicamente di questo angolo attraverso matrici di rotazione sferica. Questo passaggio converte la posizione nelle due coordinate universali: **Ascensione Retta** e **Declinazione**.

### 3\. L'instabilità della Terra

Ma ancora non abbiamo finito. Mancano le correzioni dovute al fatto che la Terra è una piattaforma di osservazione tutt’altro che stabile. C’è ancora da tener conto dei seguenti fattori:

*   **precessione e nutazione:** l’asse terrestre oscilla come una trottola a causa dell’attrazione di Luna e Sole. La precessione, un ciclo di circa $26.000$ anni, e la nutazione, una serie di oscillazioni della precessione, spostano continuamente la griglia dell’Ascensione Retta e della Declinazione. Le coordinate vanno aggiornate all’*Epoca* *del momento esatto dell’osservazione* (le coordinate cosiddette *of-date*).
    
*   **L’aberrazione e il tempo di volo della luce:** Plutone è talmente lontano che la sua luce impiega più di $4$ ore a raggiungerci. In qualsiasi momento dato, vediamo Plutone non dov’è ora, ma dove si trovava $4$ ore fa (è il tempo di volo della luce). Inoltre, poiché la Terra si muove a $30\; \text{km/s}$ intorno al Sole, la luce di Plutone subisce un piccolissimo spostamento d’angolo apparente dovuto al moto del telescopio, che si muove in modo solidale con la superficie terrestre. Questa distorsione è detta aberrazione.
    
*   **La rotazione terrestre:** sapendo l’ora esatta locale e i valori di longitudine e latitudine, il software calcola l’angolo orario. Questo permette di tradurre l’Ascensione Retta e la Declinazione nelle coordinate fisiche da impostare sulla montatura del telescopio: **altezza** (distanza dall’orizzonte) e **azimut** (direzione cardinale)**.**
    
*   **la rifrazione atmosferica:** infine, quando la luce di Plutone entra nell’atmosfera terrestre, viene deviata (curvata) verso l’alto dai gas atmosferici. Se Plutone è basso sull’orizzonte, l’atmosfera lo fa apparire leggermente più alto di quanto non sia geometricamente. Il telescopio deve puntare un briciolo più in basso per compensare questo miraggio.
    

Dietro la pulsantiera di un moderno telescopio automatico, c’è un microcontrollore che esegue in sequenza questa catena molto lunga di calcoli e correzioni. È una *summa* della conoscenza astronomica accumulata dall’umanità nel corso dei secoli, condensata in una piccola meraviglia tecnologica, che, usando una scheda elettronica e software altamente specializzati, libera l’astronomo amatoriale dalla necessità di imbarcarsi in lunghi e snervanti calcoli. Il microcontrollore parte dall’orbita kepleriana ideale che abbiamo calcolato noi, applica i polinomi di correzione della NASA per le perturbazioni dei pianeti, corregge l’aberrazione e il tempo di volo della luce, ruota l’angolo per adeguarlo all’inclinazione dell’asse terrestre della Terra e, infine, usa i sensori di tempo e gravità locali per calcolare l’altitudine esatta, tenendo conto persino della densità dell’aria in quel momento.

{{< figura src="immagini/goto-telescope.jpg" alt="Descrizione dell'immagine" caption="Un telescopio con montatura alt-azimutale. È visibile il controller per impostare i parametri di osservazione. Questi telescopi possono avere sistemi motorizzati che consentono di inseguire l’oggetto osservato per lungo tempo, compensando la rotazione terrestre: una necessità fondamentale per l’astrofotografia" >}}

C’è da rimanere pieni di reverente ammirazione quando pensiamo che giganti dell’astronomia del passato come William e John Herschel facevano gran parte di questo lavoro a mano, con carta e penna, guidati da semplici dati tabellari e dal loro genio fisico e matematico.

[^1]: Un caso limite è quando l’eccentricità è $e = 0$, cioè l’orbita è perfettamente circolare. Qui la “distorsione” $e \sin E$ scompare e l’equazione collassa in $M=E$. Sul cerchio, l’anomalia media e l’anomalia eccentrica coincidono in ogni istante. Al contrario, maggiore è lo schiacciamento dell’orbita, maggiore sarà la discrepanza numerica tra $M$ ed $E$.

[^2]: Un **dato cruciale** di cui tenere conto nel calcolare l’anomalia vera è che, quando un software o una calcolatrice calcola l’arcotangente standard, restituisce sempre un angolo compreso tra $-90^{\circ}$ e $+90^{\circ}$ (o tra $-\frac{\pi}{2}$ e $+\frac{\pi}{2} $ radianti). Tuttavia, l’angolo $\nu \over 2$ può spaziare da $0^{\circ}$ a $180^{\circ}$ (poiché l’anomalia vera reale $\nu$ va da $0^{\circ}$ a $360^{\circ}$). Se il risultato del blocco dentro la parentesi quadra è **positivo**, l’angolo si trova nel primo quadrante e il calcolo è diretto. Se, invece, il corpo celeste ha superato l’**afelio** (la seconda metà dell’orbita) e il blocco dentro la parentesi diventa **negativo**, l’arcotangente restituirà un angolo negativo. In quel caso, per ottenere il valore corretto della coordinata astronomica, occorre sommare geometricamente $360^{\circ}$ (o $2 \pi$ radianti) al risultato finale di $\nu$. Se, per esempio, si ottiene $\nu=-60^{\circ}$, sommando $360^{\circ}$ otteniamo $\nu=-60^{\circ}+360^{\circ}=300^{\circ}$.

[^3]: Un radiante è definito come il rapporto tra la lunghezza dell’arco di circonferenza $s$ e il raggio della circonferenza stessa $r$, cioè $\frac{s}{r}$. È dunque un numero puro, che non ha unità di misura, a differenza dei gradi.

[^4]: In questo caso, poiché il valore dentro l’arcotangente è positivo e Plutone non ha ancora raggiunto l’afelio, l’angolo cade nel primo quadrante e non abbiamo bisogno della correzione di cui abbiamo parlato nella nota **2**.
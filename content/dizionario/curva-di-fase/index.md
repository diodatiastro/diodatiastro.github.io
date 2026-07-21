+++
title = "Curva di fase"
date = "2026-07-21"
draft = false
+++

{{< katex />}}

## Definizione

In astronomia, la curva di fase è un **grafico** che mostra come varia la luminosità osservata di un corpo celeste al variare del suo [angolo di fase]({{< relref "/dizionario/angolo-di-fase/" >}}). Nel Sistema Solare viene utilizzata soprattutto per lo studio di pianeti, satelliti, asteroidi e comete. La curva di fase rappresenta il risultato diretto delle osservazioni fotometriche, mentre la funzione di fase è il modello matematico che ne descrive l'andamento e permette di interpretare il modo in cui la luce viene riflessa o diffusa dal corpo osservato a diversi angoli di fase.

## Struttura del grafico

Nei grafici che mostrano curve di fase, in genere:

- **L'asse delle ascisse** ($x$) riporta l'angolo di fase, che può variare da circa $0^{\circ}$, quando il corpo è pienamente illuminato[^1], a circa $180^{\circ}$, quando il corpo si trova esattamente sulla linea che congiunge Sole e osservatore (congiunzione inferiore), mostrando la faccia in ombra. I corpi esterni del Sistema Solare non raggiungono mai angoli di fase prossimi a $180^{\circ}$: il loro angolo massimo dipende dal rapporto tra la distanza orbitale e quella della Terra dal Sole.
- **L'asse delle ordinate ($y$)** riporta la luminosità apparente del corpo, espressa solitamente in magnitudini apparenti ridotte.

## Definizione di magnitudine ridotta

La **magnitudine ridotta** è la magnitudine che l'oggetto illuminato presenterebbe se si trovasse simultaneamente a $1\;\mathrm{au}$ dal Sole e a $1\;\mathrm{au}$ dall'osservatore, a un dato angolo di fase $\alpha$. Se prendiamo un insieme di misure fotometriche raccolte a distanza eliocentrica $r$ e distanza geocentrica $\Delta$, espresse entrambe in $\mathrm{au}$, la correzione di distanza per ottenere la magnitudine apparente è:

$$
m_{ridotta} = m_{apparente} - 5\log_{10}(r\cdot\Delta)
$$

Una volta ridotte, le misure si dispongono lungo una **curva**, che cresce verso le magnitudini più deboli all'aumentare di $\alpha$. La forma della curva dipende dalle proprietà fisiche della superficie osservata: [albedo]({{< relref "/dizionario/albedo/" >}}), rugosità, porosità, struttura e dimensione dei grani che la compongono.

## Perché si convertono le magnitudini apparenti in magnitudini ridotte

Ma perché gli astronomi convertono le magnitudini apparenti in magnitudini ridotte a una distanza standardizzata? La ragione sta nel fatto che la curva di fase è una relazione tra luminosità e angolo di fase e non dipende dall'epoca dell'osservazione (purché le proprietà fisiche del corpo rimangano invariate[^2]). Ciascuna serie di osservazioni è influenzata infatti da diversi fattori come la distanza orbitale, la forma e la rotazione del corpo osservato. Per la curva di fase ha importanza *unicamente* la variazione della luminosità apparente del corpo osservato in funzione del variare del suo angolo di fase.

Un astronomo non raccoglie una curva di fase in una sola notte. Invece, raccoglie tante **curve di luce** in notti diverse, sparse magari nell'arco di settimane o mesi. Ogni curva di luce è un grafico della variazione della luminosità apparente del corpo osservato *in funzione del tempo* di osservazione.

Per esempio, durante la notte $1$ l'astronomo osserva l'asteroide X per $5$ ore e ottiene una curva di luce che mostra come è variato il flusso dell'asteroide in quelle ore. Calcola poi la magnitudine apparente media. Conosce anche l'angolo di fase (es. $\alpha_1 = 12^{\circ}$), la distanza dal Sole ($r_1$) e dalla Terra ($\Delta_1$) in quella data. Ripete la stessa osservazione la notte $2$ e ottiene un nuovo valore di magnitudine apparente, con $\alpha_2 = 25^{\circ}$, $r_2$ e $\Delta_2$ note. Ripete il procedimento per altre notti, registrando tutti i dati allo stesso modo.

Adesso, l'astronomo dispone di una serie di rilevazioni della magnitudine apparente dell'asteroide X misurate per mezzo del suo telescopio. Ognuna di quelle rilevazioni è il risultato di **tre** contributi:

- la distanza Terra-asteroide ($\Delta$): più è lontano, più la sua luminosità apparente è debole;
- la distanza Sole-asteroide ($r$): più è lontano dal Sole, meno luce riceve;
- l'angolo di fase $\alpha$: l'angolo che determina quale frazione della superficie illuminata è visibile dalla Terra.

Se l'astronomo costruisse la curva di fase con questi dati grezzi, otterrebbe un ammasso informe di misurazioni senza senso. Il procedimento corretto consiste, invece, nel convertire prima ogni magnitudine apparente media calcolata notte per notte nella corrispondente magnitudine **ridotta**. In tal modo, ottiene il risultato indispensabile di "ripulire" i dati di ciascuna osservazione dall'effetto sulla luminosità apparente dell'asteroide della sua distanza dal Sole e dalla Terra, che *varia continuamente*. Solo dopo quest'operazione di *standardizzazione* ha senso costruire il grafico della curva di fase.

## Un esempio numerico per chiarire il concetto

Facciamo un esempio numerico per chiarire meglio il concetto. Nella prima notte di osservazione, l'astronomo ottiene i seguenti dati: $m = 15{,}0$, $r = 1{,}5\;\mathrm{au}$, $\Delta = 0{,}8\;\mathrm{au}$. Calcoliamo il prodotto $r \cdot \Delta$:

$$
1{,}5 \cdot 0{,}8 = 1{,}2
$$

Calcoliamo ora il fattore di correzione per annullare l'effetto della distanza sulla magnitudine osservata:

$$
5\log_{10}(1{,}2)=5\cdot 0{,}079\approx 0{,}396.
$$

Effettuiamo infine la sottrazione per ottenere la magnitudine ridotta:

$$
15{,}0 - 0{,}396 = 14{,}604
$$

Il dato da inserire nel grafico della curva di fase è dunque $14{,}604$, non $15{,}0$ (che era la magnitudine media ricavata dalla curva di luce di una notte di osservazione).

Dopo aver inserito in un grafico tutti i dati così corretti, relativi a varie notti di osservazione, si ottiene una curva che riflette principalmente il comportamento fotometrico del corpo al variare dell'angolo di fase, determinato dalle sue caratteristiche superficiali (albedo, rugosità, porosità, ecc.).

A questo punto interviene la modellizzazione matematica, per trovare una **funzione di fase** che "interpreti" i dati osservativi che riempiono il grafico: lo scopo di quest'ultima parte del processo è definire nel miglior modo possibile le caratteristiche superficiali del corpo osservato e come risponde fotometricamente all'illuminazione.

{{< figura 
src="immagini/curva-di-fase.jpg" 
alt="Curve di fase fotometriche di sei asteroidi con i fit H, G1, G2." 
caption="Le curve di fase fotometriche con i fit $H$, $G_1$, $G_2$ per gli asteroidi (55) Pandora, (95) Arethusa, (731) Sorga, (245) Vera, (596) Scheila e (1251) Hedera. A scopo illustrativo, le curve di fase sono presentate su una scala di magnitudine relativa con offset di $0{,}5$ magnitudini. Crediti: J. Martikainen et al. A&A 649, A98 (2021)."
>}}

Tutto questo processo ha ovviamente dei limiti, come quasi tutto nella scienza (e non solo). Per ottenere la miglior curva di fase possibile, bisogna disporre di molte osservazioni e, possibilmente, lungo un'ampia escursione dell'angolo di fase. Ma qui entra in gioco l'orbita del corpo osservato. Ci sono oggetti, come gli asteroidi Troiani, per i quali l'escursione dell'angolo di fase non supera mai gli $11^{\circ}$ circa. Altri asteroidi, invece, rimangono per molto tempo confinati in un piccolo angolo di fase e poi sfrecciano rapidamente coprendo un lungo arco in poche notti. Insomma, la bontà dei dati finali ottenuti con le curve e le funzioni di fase dipendono molto anche da quanto la natura, in questo caso le orbite dei corpi celesti, è disposta a collaborare.

## Differenza tra funzione di fase e curva di fase

In sintesi, la **funzione di fase** è il modello matematico che descrive come varia la luminosità osservata al variare dell'angolo di fase, il che è un effetto di *come* la luce viene reindirizzata dalla materia. La **curva di fase**, invece, è il grafico dei dati fotometrici reali che otteniamo dall'osservazione e che fa da riferimento empirico per l'applicazione del modello teorico rappresentato dalla funzione di fase. Dall'analisi della curva di fase ottenuta a partire dalle magnitudini apparenti misurate al telescopio, gli astronomi ricavano la funzione di fase per comprendere la struttura intima del suolo o dell'atmosfera di un corpo lontano, di cui non sono direttamente visibili le caratteristiche superficiali.

## A cosa servono le curve di fase

In conclusione, la curva di fase non è un semplice grafico descrittivo, ma uno strumento di importanza fondamentale per diversi scopi, tra cui:

- **determinare l'albedo e le proprietà superficiali** dei corpi osservati. La forma precisa della curva (quanto è ripida, se ha un "picco" improvviso vicino allo $0^{\circ}$) rivela se la superficie è rugosa, liscia, compatta o polverosa. Ad esempio, la Luna ha un fortissimo effetto di opposizione o *opposition surge* (aumento di luminosità improvviso vicino alla fase $0^{\circ}$), dovuto a fenomeni che abbiamo trattato nella voce relativa all'angolo di fase.
- **Stimare le dimensioni fisiche e l'albedo degli asteroidi.** Dall'analisi della curva di fase si ricava la magnitudine assoluta $H$, cioè la magnitudine che il corpo presenterebbe ad $\alpha = 0°$, a $1\;\mathrm{au}$ dal Sole e a $1\;\mathrm{au}$ dall'osservatore. Se si dispone di una misura indipendente del diametro (ad esempio da osservazioni nell'infrarosso termico o da un'occultazione stellare) $H$ consente di calcolare l'albedo geometrico. Inversamente, se l'albedo è noto da misure polarimetriche, $H$ permette di stimare le dimensioni del corpo.
- **Studiare le atmosfere planetarie.** Per pianeti con atmosfera come Venere o Giove, la curva di fase non dipende solo dalla geometria, ma anche dalle nuvole e dall'assorbimento della luce nell'atmosfera, il che fornisce importanti dati chimici e fisici.
- **Classificare gli oggetti.** Corpi ghiacciati come le comete o alcuni satelliti di Giove e di Saturno hanno curve di fase molto diverse dai corpi rocciosi, il che favorisce l'attribuzione di un nuovo corpo a una categoria o all'altra.

## Curve di fase ed esopianeti

Va precisato, infine, che si parla di *curva di fase*, con un'accezione distinta, anche nella fotometria degli **esopianeti**. In questo contesto indica la variazione del **flusso totale** del sistema stella più pianeta in funzione della fase orbitale: man mano che il pianeta percorre la sua orbita, l'osservatore ne "vede" porzioni illuminate differenti, e il flusso varia di conseguenza. La curva comprende, nelle geometrie favorevoli, il calo di luminosità che avviene durante il transito (quando il pianeta attraversa il disco stellare) e durante l'eclissi secondaria, quando il pianeta passa dietro la stella e ne viene occultato. L'analisi della curva consente di ricavare la distribuzione longitudinale di **temperatura** nell'atmosfera planetaria e di stimare separatamente le componenti di luce riflessa e di emissione termica. Il legame concettuale con l'angolo di fase è preservato, ma le condizioni osservative sono completamente differenti da quelle che si hanno studiando i corpi illuminati dal Sole all'interno del Sistema Solare.

[^1]: Come avviene all'opposizione per i corpi esterni del Sistema Solare o alla congiunzione superiore per i corpi interni, sebbene in quest'ultimo caso l'oggetto sia inosservabile dalla Terra.

[^2]: Infatti una cometa che sviluppa attività, un pianeta con nubi variabili possono modificare realmente la curva.
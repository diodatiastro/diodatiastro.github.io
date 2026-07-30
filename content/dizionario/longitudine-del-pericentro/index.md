+++
title = "Longitudine del pericentro"
date = "2026-07-21"
draft = false
+++

{{< katex />}}

## Etimologia

"Longitudine del pericentro" deriva per metà dal latino (*longitudo*, "lunghezza", nel senso astronomico di "posizione angolare lungo un percorso") e per metà dal greco (*pericentro*, composto da περί, "attorno, nei pressi di", e κέντρον, "centro", propriamente "pungolo, punta del compasso").

## Un angolo composto

{{% box tipo="definizione" titolo="" %}} 
In astronomia, la longitudine del pericentro è la somma algebrica di due angoli misurati su piani diversi. Si definisce geometricamente come:

$$\varpi=\Omega+\omega$$
in cui il simbolo $\varpi$, variante corsiva della lettera $\pi$ (pur ricordando nell'aspetto una $\omega$), è usato per convenzione consolidata nella letteratura di meccanica celeste per segnalare che si tratta di una **quantità composita** e non di un angolo elementare.
{{% /box %}}

I due angoli sommati sono $\Omega$, la **longitudine del nodo ascendente**, misurato nel piano di riferimento dal punto vernale al nodo ascendente, e $\omega$, l'**argomento del pericentro**, misurato nel piano orbitale dal nodo ascendente al pericentro.

È importante comprendere che $\varpi$ non è un angolo unitario, una singola apertura nello spazio. Gli angoli di cui è la somma, $\Omega$ e $\omega$, appartengono infatti a piani geometricamente distinti, rispettivamente il piano di riferimento e il piano orbitale, che si intersecano lungo la **linea dei nodi**. La loro somma è dunque una costruzione algebrica. In letteratura anglosassone questa proprietà è resa efficacemente dall'espressione *broken angle*, "angolo spezzato": questo concetto va tenuto presente ogni volta che si ha a che fare con l'angolo $\varpi$.

{{< figura 
src="immagini/longitudine-del-pericentro.svg" 
alt="La longitudine del pericentro è l'angolo composto formato dagli angoli $\Omega$ e $\omega$, che giacciono l'uno sul piano di riferimento, l'altro sul piano dell'orbita." 
caption="La longitudine del pericentro è l'angolo composto formato dagli angoli $\Omega$ e $\omega$, che giacciono l'uno sul piano di riferimento, l'altro sul piano dell'orbita."
>}}

## Utilità di *ϖ*

Quando l'**inclinazione** del piano orbitale è nulla o trascurabile ($i \rightarrow 0$), il piano di riferimento e il piano orbitale coincidono: in questo caso, e solo in questo caso, $\varpi$ coincide con un angolo fisico effettivamente misurabile in un *unico piano*, ossia l'angolo tra il punto vernale e la direzione del pericentro.

Nel limite in cui l'inclinazione $i$ tende a zero, il nodo ascendente perde significato geometrico: non c'è più un punto in cui il corpo orbitante passa da sud a nord rispetto al piano di riferimento e non esiste più una retta - la linea dei nodi - che rappresenta l'intersezione tra due piani diversi. In un caso simile, sia $\Omega$ sia $\omega$, che dipendono entrambi dalla posizione del nodo ascendente, diventano **indeterminati**: è come dividere $0$ per $0$ nel calcolo degli elementi orbitali a partire dai vettori posizione e velocità. La loro somma $\varpi$, al contrario, resta ben definita, perché è legata alla direzione del vettore [eccentricità]({{< relref "/dizionario/eccentricita/" >}}) nello spazio, una quantità che non dipende dalla presenza di un nodo ascendente.

Questa robustezza rende $\varpi$ la quantità naturale a cui fare riferimento in tutti i contesti in cui l'inclinazione è piccola o nulla: teoria delle perturbazioni planetarie, dinamica secolare, meccanica di anelli e dischi circumstellari. In queste situazioni $\Omega$ e $\omega$ possono oscillare rapidamente e in modo incontrollabile dal punto di vista numerico, mentre $\varpi$ evolve con continuità e ha un chiaro significato fisico: l'**orientazione** dell'asse maggiore dell'orbita.

## Rapporto con i sei elementi kepleriani classici

Nel set classico degli [elementi orbitali kepleriani]({{< relref "/dizionario/elementi-orbitali-classici-o-kepleriani/" >}}) ($a$, $e$, $i$, $\Omega$, $\omega$, $M_0$) $\varpi$ non è un settimo elemento indipendente né sostituisce alcuno dei sei. È piuttosto una **quantità derivata**, ottenuta come somma di due elementi già presenti nell'insieme. Tuttavia, per le ragioni di oscillazione e aleatorietà dei valori di $\Omega$ e $\omega$ appena esposte, in meccanica celeste planetaria si preferisce spesso usare parametri alternativi a quelli classici, ad essi equivalenti, ma meglio tarati per funzionare alle basse inclinazioni:

$$\{a, e, i, \Omega, \varpi, \varepsilon\},$$

dove $\varepsilon$ è la **longitudine media all'epoca**:

$$\varepsilon=\Omega+\omega+M_0=\varpi+M_0$$

Anche $\varepsilon$ è un **angolo spezzato**, costruito con la stessa logica di $\varpi$: mentre $M_0$ da solo diventa indeterminato quando l'orbita è quasi circolare (se $e$ tende a $0$, il pericentro stesso perde significato geometrico), $\varepsilon$ resta ben definita perché rappresenta la posizione angolare del corpo lungo l'orbita rispetto al punto vernale, una caratteristica che è indipendente dalla posizione e dall'esistenza stessa del pericentro.

La tabella seguente riassume le criticità che $\varpi$ ed $\varepsilon$ risolvono:

| Situazione orbitale | Elementi orbitali indeterminati | Sostituto ben definito |
| --- | --- | --- |
| $i \to 0$ (orbita non inclinata) | $\Omega$, $\omega$ entrambi indeterminati | $\varpi = \Omega + \omega$ |
| $e \to 0$ (orbita circolare) | $\omega$, $M_0$ entrambi indeterminati | $\varepsilon = \varpi + M_0$ (in alternativa: argomento di latitudine $u = \omega + \nu$) |
| $i \to 0$, $e \to 0$ | $\Omega$, $\omega$, $M_0$ tutti indeterminati | solo $\varepsilon$ resta ben definita |

## Gli esempi di Venere e della Terra

Gli elementi orbitali medi eliocentrici a J2000.0[^1] offrono un caso istruttivo proprio perché le inclinazioni planetarie rispetto all'eclittica sono piccole.

**Venere** ha un inclinazione $i = 3{,}395^{\circ}$: è un valore moderato ma non trascurabile. Ciò rende la determinazione degli angoli $\Omega$ e $\omega$ affidabile e non c'è bisogno di ricorrere alla longitudine del pericentro $\varpi$ come strumento di salvataggio per ricavare l'orientazione dell'orbita. Di seguito i valori dei tre angoli per Venere:

$$\begin{align*}
\Omega &= 76{,}680\,^\circ \qquad \omega = 54{,}853\,^\circ \\
\varpi &= \Omega + \omega = 76{,}680^\circ + 54{,}853^\circ = 131{,}533\,^\circ
\end{align*}$$

La **Terra** è invece un caso ben più istruttivo, perché la sua orbita ha proprio quelle criticità discusse sopra ($\Omega$ e $\omega$ indeterminati), che rendono il ricorso al calcolo di  $\varpi$ indispensabile. La cosa merita una spiegazione un po' più approfondita.

L'**eclittica**, per definizione storica, è il piano dell'orbita terrestre. Ci si aspetterebbe dunque che, misurata rispetto a se stessa, l'orbita della Terra abbia sempre inclinazione $i = 0$, e che, di conseguenza, $\Omega$, la longitudine del nodo ascendente (l'angolo che indica *dove* l'orbita interseca il piano di riferimento) sia inevitabilmente **indefinita**, come accade per ogni orbita non inclinata (si veda la tabella sopra). Le tavole di **effemeridi**, invece, riportano per la Terra un'inclinazione minuscola ma non nulla ($i = 0{,}00005^{\circ}$) e, soprattutto, un valore di $\Omega$ tutt'altro che trascurabile: $−11{,}261^{\circ}$. Come si spiega questa apparente contraddizione?

La spiegazione sta nella natura degli *elementi medi*. Le effemeridi planetarie a lungo termine - come quella usata qui - non registrano la posizione esatta e istantanea di un pianeta in un singolo istante (quelli si chiamano *elementi osculatori*), ma forniscono piuttosto una formula, valida su un arco di secoli, che approssima con buona precisione l'andamento medio dell'orbita nel tempo. Questa formula è ancorata a un piano di riferimento fissato una volta per tutte - l'**eclittica "media"** di J2000.0 - che è sì molto vicino al piano orbitale reale della Terra in quell'epoca, ma non è ricalcolato istante per istante sull'orbita terrestre effettiva. L'orbita vera della Terra, infatti, *oscilla* leggermente nel tempo per effetto delle **perturbazioni gravitazionali** degli altri pianeti (soprattutto Venere e Giove), scostandosi di pochissimo da quel piano fissato. Il minuscolo residuo che ne risulta è proprio l'inclinazione $i = 0{,}00005^{\circ}$ riportata più sopra: un numero piccolo, ma non zero.

Ed è qui che entra in gioco la necessità di avere un elemento orbitale come la longitudine del pericentro: quando $i$ è così vicino a zero, il calcolo del nodo ascendente diventa **numericamente inaffidabile**. Un'inclinazione minuscola, quasi impercettibile, si traduce, trasposta nella formula geometrica che individua il nodo, in un valore di $\Omega$ apparentemente notevole ($−11{,}261^{\circ}$), che però non rispecchia un disallineamento reale dell'orbita terrestre di quell'entità. È in buona parte un **artefatto**, amplificato dal fatto che l'inclinazione del piano orbitale della Terra è quasi $0$, non è una misura fisicamente significativa dell'orientazione dell'orbita terrestre. In altre parole, $\Omega$, qui, sta oscillando "violentemente" perché l'inclinazione quasi nulla dell'orbita del nostro pianeta è il fattore critico che rende $\Omega$ stesso **mal definito**. In termini numerici abbiamo:

$$\begin{align*}
\Omega &= -11{,}261\,^\circ \qquad \omega = 114{,}208\,^\circ \\
\varpi &= \Omega + \omega = -11{,}261^\circ + 114{,}208^\circ = 102{,}947\,^\circ
\end{align*}$$

Il contrasto con $\varpi$ è netto, ed è proprio il punto didattico che questo esempio vuole illustrare: mentre $\Omega$ e $\omega$ per la Terra sono, individualmente, il prodotto di una costruzione geometrica **fragile**, la loro somma $\varpi = 102{,}947\,^\circ$ è invece la quantità che le effemeridi tabulano con la maggiore stabilità e il significato fisico più affidabile, perché descrive in modo robusto l'orientazione nello spazio dell'asse maggiore dell'orbita terrestre (la direzione del perielio), indipendentemente dai "vagabondaggi" del nodo causati da un'inclinazione orbitale che tende a $0$.


[^1]: Piano di riferimento: eclittica e equinozio medi di J2000.0; fonte: effemeridi planetarie standard, ad es. Standish 1992/JPL.
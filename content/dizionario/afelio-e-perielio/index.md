+++
title = "Afelio e Perielio"
date = "2026-07-16"
draft = false
+++

{{< katex />}}

Entrambi i termini derivano dal greco. *Afelio* (ἀφήλιον) unisce *apo-* ("lontano da") e *hḕlios* ("Sole"); *perielio* (περιήλιον) unisce *peri-* ("vicino, intorno a") e *hḕlios*. Keplero introdusse questi termini nell’opera *Mysterium Cosmographicum* del 1596, sul modello dei termini analoghi già in uso per l'orbita lunare (apogeo e perigeo).

I corpi celesti legati gravitazionalmente al Sole, come pianeti, pianeti nani, asteroidi e la maggior parte delle comete, percorrono orbite ellittiche, con il Sole situato in uno dei due fuochi dell'ellisse. L’**afelio** è il punto di *massima distanza* dal Sole nel corso di un’orbita ellittica ed è anche il punto in cui un corpo celeste tocca la sua velocità orbitale minima, in accordo con la seconda legge di Keplero[^1]. Viceversa, il **perielio** è il punto di *massima vicinanza* al Sole nel corso di un’orbita ellittica ed è anche il punto in cui un corpo celeste tocca la sua velocità orbitale *massima*, sempre per la seconda legge di Keplero. Insieme, questi due punti estremi - afelio e perielio - vengono chiamati **apsidi** e la linea immaginaria che li congiunge è detta *linea degli apsidi*.

{{< figura src="immagini/afelio-e-perielio.jpg" alt="Descrizione dell'immagine" caption="Una rappresentazione grafica della posizione di afelio e perielio con il Sole in uno dei due fuochi dell'ellisse." >}}

Per un’orbita ellittica di semiasse maggiore *a* ed eccentricità *e*, le distanze ai due punti si scrivono:

$$
\begin{aligned} r_{\text{afelio}} &= a\left(1+e\right) \\r_{\text{perielio}} &= a\left(1-e\right) \end{aligned} 
$$

Per *e* = 0 (orbita circolare) i due punti coincidono e la distanza è costante e pari ad *a*. Detto più semplicemente, se un corpo percorresse un’orbita perfettamente circolare intorno al Sole, non ci sarebbe possibilità di identificare un afelio e un perielio, perché tutti i punti dell’orbita sarebbero *equidistanti* dal Sole.

Come esempio numerico consideriamo l’orbita terrestre, che ha semiasse maggiore *a* = 1 UA ed eccentricità *e* = 0,0167. Ne risulta:

$$
\begin{aligned}
r_{\text{afelio}} = 1 \times (1 + 0{,}0167) = 1{,}0167 \text{ UA} \approx 152{,}1 \times 10^6 \text{ km}\\r_{\text{perielio}} = 1 \times (1 - 0{,}0167) = 0{,}9833 \text{ UA} \approx 147{,}1 \times 10^6 \text{ km}
\end{aligned}
$$

È importante specificare che le distanze di afelio e perielio sono misurate tra il **centro** del Sole e il **centro** del corpo orbitante (in questo caso la Terra), come avviene convenzionalmente in meccanica celeste.

Curiosamente, la Terra passa al perielio tra il 2 e il 5 gennaio e all’afelio tra il 3 e il 7 luglio: la distanza del nostro pianeta dal Sole è minima quando nell’emisfero boreale è inverno e massima quando è estate. Ciò dimostra che le stagioni sono determinate principalmente dall’inclinazione dell’asse terrestre (che è di circa 23,5°), non dalla distanza dal Sole.

La tabella seguente mostra chiaramente come, a seconda delle caratteristiche geometriche di ciascuna orbita, lo scarto tra la distanza minima (perielio) e massima (afelio) dal Sole possa variare da poche centinaia di migliaia di chilometri, come nel caso di Venere, a miliardi di chilometri, come per la cometa di Halley.

| Corpo            | Perielio (au) | Perielio (milioni km) | Afelio (au) | Afelio (milioni km) | Eccentricità |
| ---------------- | ------------: | --------------------: | ----------: | ------------------: | -----------: |
| Mercurio         |        0,3075 |                 46,00 |      0,4667 |               69,82 |       0,2056 |
| Venere           |        0,7184 |                107,48 |      0,7282 |              108,94 |       0,0068 |
| Terra            |        0,9833 |                147,10 |      1,0167 |              152,10 |       0,0167 |
| Marte            |        1,3814 |                206,65 |      1,6660 |              249,23 |       0,0934 |
| Giove            |        4,9501 |                740,52 |      5,4588 |              816,62 |       0,0489 |
| Saturno          |        9,0412 |               1352,55 |     10,1238 |             1514,50 |       0,0565 |
| Urano            |       18,2861 |               2735,56 |     20,0965 |             3006,39 |       0,0472 |
| Nettuno          |       29,8108 |               4459,63 |     30,3271 |             4536,87 |       0,0086 |
| Plutone          |       29,6580 |               4436,82 |     49,3050 |             7375,93 |       0,2488 |
| Cometa di Halley |        0,5860 |                 87,80 |     35,0820 |             5248,00 |       0,9671 |

[^1]: La variazione della velocità orbitale lungo l'ellisse deriva dal principio di conservazione del momento angolare. Per una trattazione quantitativa di questo fenomeno e per il calcolo della velocità in ogni punto dell'orbita, si veda la voce **Equazione di vis-viva**.
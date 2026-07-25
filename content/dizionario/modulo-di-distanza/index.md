+++
title = "Modulo di distanza"
date = "2026-07-25"
draft = false
+++

{{< katex />}}

## Definizione

La [magnitudine assoluta]({{< relref "/dizionario/magnitudine-assoluta/" >}}) $M$ è legata alla [magnitudine apparente]({{< relref "/dizionario/magnitudine-apparente/" >}}) $m$ e alla distanza $d$ (espressa in parsec) dal **modulo di distanza**, indicato con la lettera greca $\mu$:

$$
\mu = m - M = 5 \cdot \log_{10}\left(\frac{d}{10\,\text{pc}}\right)
$$

Per chiarire il concetto, il modulo di distanza rappresenta la differenza tra ciò che si osserva, la magnitudine apparente, e ciò che si osserverebbe a $10$ parsec dall'osservatore: quanto più un oggetto è lontano (cioè quanto più $d$ è grande), tanto maggiore è questa differenza. Dalla formula precedente si ottiene la formula diretta per calcolare la magnitudine assoluta $M$:

$$
M = m - 5 \cdot \log_{10}(d) + 5
$$

## Applichiamo la formula al Sole e a Sirio

Se applichiamo tale formula al Sole, la cui magnitudine apparente è $-26{,}74$ e la distanza dalla Terra è di una unità astronomica, dopo aver convertito tale distanza in parsec ($1\;\text{au} \approx 4{,}85 \times 10^{-6}\;\text{pc}$), otteniamo una magnitudine visuale assoluta di $+4{,}83$. Vuol dire che il Sole, se lo osservassimo da $10$ parsec di distanza, sarebbe a malapena visibile a occhio nudo.

Nel caso di Sirio, che dista circa $2{,}64$ parsec, l'applicazione della formula comporta il passaggio da una magnitudine apparente di $-1{,}46$ a una magnitudine assoluta di $+1{,}43$. Le $3{,}4$ magnitudini di differenza tra Sirio e il Sole indicano che, se potessimo osservare entrambe le stelle da $10$ parsec di distanza, Sirio ci apparirebbe circa $23$ volte più luminosa del Sole.

## L'importanza della distanza

Per capire l'importanza della distanza in questi confronti, consideriamo il caso della supergigante rossa **Betelgeuse**, la cui magnitudine apparente è intorno $+0{,}5$. Se teniamo conto della sua distanza, che le stime più conservative indicano in circa $186$ parsec ($607$ anni luce), otteniamo una magnitudine assoluta di $-5{,}85$. Se si trovasse alla distanza standard di $10$ parsec, Betelgeuse brillerebbe come uno degli oggetti più luminosi del cielo notturno dopo la Luna e Venere, superando quest'ultima in splendore, e potrebbe forse addirittura proiettare ombre visibili in condizioni di cielo molto buio.

## Il problema dell'estinzione interstellare

Va precisato che il modulo di distanza non tiene conto dell'**estinzione** interstellare, cioè l'assorbimento e la dispersione della luce da parte di polvere e gas nello spazio. In presenza di estinzione, la magnitudine apparente osservata è più *debole* di quella reale. La formula corretta diventa pertanto:

$$
\mu = m - M = 5 \cdot \log_{10}(d) - 5 + A
$$

dove $A$ è l'estinzione (in magnitudini). Per oggetti lontani, specialmente all'interno del piano della Via Lattea, questa correzione è essenziale per ottenere distanze accurate.

## Ricavare la distanza dal modulo di distanza

Il modulo di distanza ha un'importanza centrale in astronomia. Se si conosce la magnitudine apparente di un oggetto e si riesce a stimare in modo affidabile la sua magnitudine assoluta, possiamo ricavare a quel punto la **distanza** usando la formula inversa:

$$
d = 10^{(\mu + 5)/5}
$$

Proviamo ad applicare la formula inversa a una stella ben nota, la supergigante blu Rigel. In letteratura i valori più citati per magnitudine apparente e magnitudine assoluta visuali sono $m = +0{,}12$ e $M = -7{,}0$. Il modulo di distanza è pertanto:

$$
\mu = +0{,}12 - (-7{,}0) = 7{,}12
$$

da cui:

$$
d = 10^{(7{,}12 + 5)/5} = 10^{\frac{12{,}12}{5}} = 10^{2{,}424} \approx 265 \, \text{pc}
$$

Ricaviamo una distanza di circa $265$ parsec, corrispondente più o meno a $865$ anni luce, in linea con la distanza ricavata dal satellite Hipparcos misurando l'angolo di parallasse della stella.

## Alcuni esempi di moduli di distanza

| $\mu = m - M$ | Condizione | Interpretazione |
| :---: | :--- | :--- |
| $\mu < 0$ | $m < M$ | L'oggetto è più vicino di $10\;\text{pc}$ |
| $\mu = 0$ | $m = M$ | L'oggetto è esattamente a $10\;\text{pc}$ |
| $\mu > 0$ | $m > M$ | L'oggetto è più lontano di $10\;\text{pc}$ |
| $\mu = 5$ | $m - M = 5$ | L'oggetto è a $100\;\text{pc}$ ($10$ volte più lontano del riferimento) |
| $\mu = 10$ | $m - M = 10$ | L'oggetto è a $1\;\text{kpc}$ ($100$ volte più lontano) |
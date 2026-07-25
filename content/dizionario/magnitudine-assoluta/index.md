+++
title = "Magnitudine assoluta"
date = "2026-07-25"
draft = false
+++

{{< katex />}}

## Definizione

Misura della luminosità intrinseca di un corpo celeste (stella, galassia o asteroide), ovvero della quantità reale di luce che esso emette nello spazio, indipendentemente dalla sua distanza dalla Terra.

Per convenzione astrofisica, la magnitudine assoluta di una stella o di una galassia viene definita come la [magnitudine apparente]({{< relref "/dizionario/magnitudine-apparente/" >}}) che l'oggetto mostrerebbe se si trovasse a una distanza standard fissa di esattamente $10$ parsec (pari a $32{,}6$ anni luce) dall'osservatore [^1], in assenza di estinzione interstellare.

## Formalismo matematico

La relazione che lega magnitudine apparente $m$, magnitudine assoluta $M$ e distanza $d$ (espressa in parsec) è nota come **modulo di distanza**:

$$
m - M = 5\,\log_{10}(d) - 5
$$

una forma equivalente a 

$$
m - M = 5\,\log_{10}\left(d \over 10\;\mathrm{pc}\right),
$$

che rende esplicito il riferimento alla distanza standard di $10$ parsec appena citata.

## Un esempio pratico: la magnitudine assoluta del Sole

Applichiamo la formula al Sole, di cui conosciamo sia la magnitudine apparente $(m_{\odot} = -26{,}74)$ sia la distanza dalla Terra $(d = 1\;\text{au} \approx 4{,}848\,\times10^{-6}\;\text{pc})$:

$$
\begin{aligned}
M_{\odot} &= m_{\odot} - 5\;\log_{10}(d) + 5 \\
&= -26{,}74 - 5\log_{10}(4{,}848\times 10^{-6}) + 5 \\
&\approx +4{,}83
\end{aligned}
$$

Se il Sole si trovasse a $10$ parsec da noi, anziché a poco più di otto minuti luce, la sua magnitudine apparente salirebbe da $-26{,}74$ a circa $+4{,}83$: un oggetto ancora visibile a occhio nudo, ma di gran lunga più debole, con una differenza di quasi $31{,}6$ magnitudini rispetto a come lo vediamo realmente.

## Utilità della magnitudine assoluta

La magnitudine assoluta permette agli astronomi di confrontare direttamente la reale potenza luminosa degli astri. Rimuovendo l'effetto ottico della distanza, una stella intrinsecamente debole ma vicina non può più essere erroneamente considerata più luminosa di una stella potentissima ma situata ai confini della galassia.

Ovviamente, per poter calcolare la magnitudine assoluta è necessario conoscere prima la **distanza** reale della sorgente dall'osservatore, un problema di difficilissima soluzione, che ha tormentato intere generazioni di astronomi e che ha trovato differenti soluzioni a seconda del tipo di oggetto.

La magnitudine assoluta è uno strumento fondamentale per:

* **confrontare** la luminosità intrinseca di oggetti a distanze diverse;
* **classificare** le stelle nel diagramma di Hertzsprung-Russell, dove magnitudine assoluta e temperatura superficiale definiscono la posizione evolutiva di una stella;
* **misurare distanze cosmiche**, sfruttando oggetti di magnitudine assoluta nota (*candele standard*) come le Cefeidi o le supernovae di tipo Ia.

[^1]: Nel Sistema Solare (per pianeti, comete e asteroidi) si usa una scala diversa. La magnitudine assoluta per questi corpi non si calcola a $10$ parsec, ma viene definita come la luminosità che l'oggetto avrebbe se si trovasse idealmente a $1$ unità astronomica $(\mathrm{au})$ sia dal Sole che dalla Terra, con un [angolo di fase]({{< relref "/dizionario/angolo-di-fase/" >}}) pari a zero (cioè completamente illuminato).

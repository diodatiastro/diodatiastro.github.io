+++
title = "Magnitudine apparente"
date = "2026-07-25"
draft = false
+++

{{< katex />}}

## Etimologia

*Magnitudine* deriva dal latino *magnitudo* ("grandezza"), da *magnus* ("grande"). L'uso astronomico del termine risale a Ipparco (II secolo a.C.), che classificò le stelle visibili a occhio nudo in sei classi di grandezza apparente (in greco *méghethos*), dalla $1^a$ classe, riservata alle stelle più brillanti, alla $6^a$, al limite della visibilità a occhio nudo. Questo sistema di classificazione, sostanzialmente invariato nella sua logica ordinale per quasi duemila anni, fu poi formalizzato matematicamente da Norman Pogson nel 1856 nella scala logaritmica tuttora in uso.

## Definizione

La magnitudine apparente è una misura della luminosità con cui un corpo celeste appare a un osservatore sulla Terra. Essa dipende sia dalla quantità di radiazione emessa dall'oggetto sia dalla sua distanza dall'osservatore. In alcuni casi, dipende anche dalla presenza, lungo il percorso dalla sorgente all'osservatore, di materia interposta (per es. gas o polveri), che assorbe parzialmente la radiazione emessa dalla sorgente.

La scala delle magnitudini è **logaritmica e inversa**: a valori più piccoli corrispondono oggetti apparentemente più luminosi, mentre a valori più grandi corrispondono oggetti più deboli. La magnitudine apparente permette quindi di confrontare la brillantezza osservata di stelle, pianeti, galassie e altri corpi celesti, ma non rappresenta la loro [luminosità]({{< relref "/dizionario/luminosita/" >}}) intrinseca, che è invece descritta dalla magnitudine assoluta.

Ad esempio, il Sole ha una magnitudine apparente di $-26{,}74$, la Luna piena di circa $-12{,}7$, Venere una magnitudine che oscilla tra $-3{,}8$ e $-4{,}9$ a seconda della fase. Gli oggetti visibili a occhio nudo in un cielo buio arrivano in genere fino a una magnitudine di $+6$ o giù di lì.

## Relazioni matematiche fondamentali

Per chi ha un po' di dimestichezza con la matematica, la relazione fondamentale tra differenza di magnitudine apparente e [flusso di radiazione]({{< relref "/dizionario/flusso-di-radiazione/" >}}), detta **legge di Pogson**, è:

$$
m_2 - m_1 = -2.5\log_{10}\left(\frac{F_2}{F_1}\right)
$$

dove $m$ è la magnitudine apparente e $F$ il flusso di radiazione ricevuto dall'osservatore. Da essa si ricava con un po' di algebra la formula inversa:

$$
{F_1\over F_2} = 100^{m_2 - m_1 \over 5}
$$

Queste formule, che sono il criterio per definire la scala delle magnitudini che Pogson elaborò nel 1856, sono basate su un postulato che affonda nella fisiologia dell'occhio umano. *Per definizione* $5$ magnitudini di differenza corrispondono a un rapporto tra i flussi pari a $100$. Il coefficiente $−2{,}5$ nella relazione logaritmica è la conseguenza diretta di tale scelta.

## Alcuni esempi di applicazione della legge

Dimostriamo come applicare la relazione, scegliendo due stelle generiche $A$ e $B$ tali che:

$$
m_B - m_A = 5
$$

per esempio $m_B = 6{,}0$ e $m_A = 1{,}0$. Vogliamo calcolare $F_A/F_B$. Sostituiamo la differenza tra le due magnitudini ($6 - 1 = 5$) nella formula inversa della legge di Pogson:

$$
\frac{F_A}{F_B} = 100^{\,(m_B - m_A)/5} = 100^{\,5/5} = 100^{\,1} = 100
$$

da cui si ricava che la stella di magnitudine $1$ ha un flusso di radiazione $100$ volte maggiore di una stella di magnitudine $6$.

Naturalmente possiamo applicare questa legge a qualsiasi coppia di stelle di cui sia nota la magnitudine apparente. Sirio, la stella più luminosa del cielo notturno, ha, per esempio, una magnitudine apparente di $-1{,}46$; Altair, la stella più brillante della costellazione dell'Aquila, ha invece una magnitudine apparente di $+0{,}76$. Sottraendo, otteniamo una differenza di $2{,}22$ magnitudini. Applichiamo di nuovo la formula precedente:

$$\begin{aligned}
\frac{F_{\text{Sir}}}{F_{\text{Alt}}}
&= 100^{\,(m_{\text{Alt}} - m_{\text{Sir}})/5} \\[6pt]
&= 100^{\,(0{,}76 - (-1{,}46))/5} \\[6pt]
&= 100^{\,0{,}444} = 10^{\,0{,}888} \approx 7{,}7
\end{aligned}$$

Il calcolo ci dice che vediamo Sirio circa $7{,}7$ volte più luminosa di Altair. Ciò significa che per eguagliare la luce che riceviamo da Sirio, dovremmo idealmente "accendere" quasi $8$ stelle grandi e brillanti come Altair *contemporaneamente* nello stesso punto del cielo.
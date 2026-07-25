+++
title = "Magnitudine bolometrica assoluta"
date = "2026-07-25"
draft = false
+++

{{< katex />}}

## Definizione

Quando la misura della magnitudine assoluta include *tutta* la radiazione emessa a tutte le lunghezze d'onda, e non solo quella nella banda visibile, si parla di magnitudine bolometrica assoluta, grandezza che esprime la **luminosità totale** di un oggetto ed è direttamente collegata alla sua **luminosità intrinseca** espressa in watt o in unità di luminosità solare $(L_{\odot})$.

## L'esempio di Betelgeuse

Per esempio, se consideriamo la differenza di magnitudine assoluta tra il Sole $(+4{,}83)$ e Betelgeuse (circa $-5{,}8$) e applichiamo la [formula]({{< relref "/dizionario/magnitudine-apparente/" >}}):

$$
\frac{L_1}{L_2} = 100^{\frac{M_2 - M_1}{5}} = 10^{\frac{2(M_2 - M_1)}{5}}
$$

in cui $M_1$ e $L_1$ si riferiscono a Betelgeuse e $M_2$ e $L_2$ al Sole, otteniamo che Betelgeuse è circa $18.000$ volte più luminosa del Sole. Ma questo dato è ingannevole e sottostimato.

Betelgeuse, infatti, è una supergigante rossa con una temperatura stimata di $3.500-3.700 \,\mathrm{K}$, molto più fredda del Sole. Ciò vuol dire che la maggior parte della sua radiazione viene emessa nell'infrarosso, non nel visibile. Se applichiamo la necessaria [correzione bolometrica]({{< relref "/dizionario/correzione-bolometrica/" >}}), avremo per il Sole una magnitudine assoluta di $+4{,}74$ e per Betelgeuse, fatte salve le incertezze, di $-7{,}2$. Rifacendo i calcoli con questi nuovi valori, otteniamo che Betelgeuse ha una luminosità totale, considerate tutte le frequenze d'onda, *almeno* $60.000$ volte maggiore di quella del Sole.

## Il punto zero della scala

Nel 2015 l'Unione Astronomica Internazionale (IAU) ha stabilito una formula univoca per calcolare la magnitudine bolometrica assoluta, definendo il **punto zero** della scala, che si indica con $L_0$ e corrisponde esattamente a:

$$
L_0 = 3{,}0128 \times 10^{28} \, \text{W}
$$

Ciò vuol dire che una stella con tale luminosità ha una magnitudine bolometrica assoluta pari esattamente a $0$. Posto il punto zero, qualsiasi magnitudine bolometrica assoluta può essere calcolata con la formula:

$$
M_{bol} = -2{,}5 \, \log_{10} \left( \frac{L}{L_0} \right)
$$

## Calcoliamo la magnitudine bolometrica assoluta del Sole

A titolo di esempio, adoperiamo tale formula per calcolare la magnitudine bolometrica assoluta del Sole, a partire dalla sua luminosità nominale:

$$
\begin{aligned}
M_{\text{bol},\odot}
&= -2{,}5 \, \log_{10} \! \left( \frac{3{,}828 \times 10^{26}}{3{,}0128 \times 10^{28}} \right) \\[6pt]
&= -2{,}5 \, \log_{10} \! \left( \frac{1}{78{,}7} \right) \\[6pt]
&= -2{,}5 \times (-1{,}896) \\[6pt]
&\approx +4{,}74
\end{aligned}
$$

Il risultato finale approssimato a $+4,74$ è infatti il valore canonico della magnitudine bolometrica assoluta del Sole. Non si tratta di un caso. Il punto zero della scala è stato scelto dalla IAU proprio per fare in modo che l'applicazione al Sole della formula precedente fornisse il valore storicamente accettato all'interno della comunità astronomica per la magnitudine bolometrica assoluta solare.

## Una formula che semplifica i calcoli

Ciò fornisce un punto di aggancio per semplificare i calcoli. Invece di usare una frazione con numeri enormi, con le luminosità stellari espresse in watt, possiamo sostituire ad essa una frazione che rappresenta il rapporto tra la luminosità di una data stella e quella del Sole, aggiungendo alla fine il valore di $M_{bol}$ del Sole:

$$
M_{\text{bol}} = -2{,}5 \, \log_{10} \! \left( \frac{L}{L_\odot} \right) + 4{,}74
$$

Se applichiamo, per esempio, questa formula alla stella Altair, che ha una luminosità bolometrica intorno a $10,64$ luminosità solari, otteniamo una magnitudine bolometrica assoluta di circa $+2,17$:

$$\begin{aligned}
M_{\text{bol}} &= -2{,}5 \, \log_{10}(10{,}64) + 4{,}74 \\[6pt]
               &= -2{,}5 \times 1{,}0269 + 4{,}74 \\[6pt]
               &\approx +2{,}17
\end{aligned}$$
+++
title = "Pressione di radiazione"
date = "2026-07-27"
draft = false
+++

{{< katex />}}

## I fotoni trasportano energia e momento

Nella voce dedicata alla [quantità di moto (o momento lineare)]({{< relref "/dizionario/quantita-di-moto-o-momento-lineare/" >}}), abbiamo visto che i [fotoni]({{< relref "/dizionario/fotone/" >}}), i quanti indivisibili della [radiazione elettromagnetica]({{< relref "/dizionario/onda-elettromagnetica/" >}}), pur non avendo massa, hanno momento ed [energia]({{< relref "/dizionario/energia/" >}}). In particolare, l'energia di un fotone è definita dalla formula $E = pc$, dove $p$ è il momento lineare del fotone e $c$ la velocità della luce. Da essa deriva che il momento $p$ di un fotone corrisponde alla sua energia divisa per la velocità della luce:

$$p = \frac{E}{c}$$

Ogni fotone, insomma, è in grado di impartire una minuscola spinta alle particelle con cui interagisce attraverso assorbimento, diffusione o riflessione, e questa spinta è tanto maggiore quanto più il fotone è energetico.

Possiamo estendere questo concetto a un flusso di fotoni, ovvero di radiazione elettromagnetica (data la duplice natura corpuscolare e ondulatoria della luce). 

{{% box tipo="definizione" titolo="" %}} 
La **pressione di radiazione** è *la forza esercitata per unità di area* su una superficie da onde elettromagnetiche (o, equivalentemente, da un flusso di fotoni), tramite assorbimento, diffusione o riflessione. Possiamo immaginarla come la somma di tutte le spinte impartite da ciascun fotone del flusso all'area del corpo colpita. Quando un fotone viene assorbito o riflesso da una superficie, trasferisce la sua quantità di moto, esercitando una forza. Su scala macroscopica, un flusso continuo di fotoni produce una **pressione netta**.
{{% /box %}}

## Formula fondamentale ed esempio numerico

La formula fondamentale della pressione di radiazione, in caso di una superficie perfettamente assorbente, è:

$$
P_{rad} = \frac{F}{c}
$$

con $F$ espresso in $\text{W/m}^2$. 

Un esempio numerico chiarirà meglio il concetto. Il [flusso]({{< relref "/dizionario/flusso-di-radiazione/" >}}) solare che colpisce la Terra a $1\,\text{au}$ di distanza dal Sole è $F \approx 1361\ \mathrm{W\,m^{-2}}$ (la cosiddetta [costante solare]({{< relref "/dizionario/costante-solare/" >}})). La pressione di radiazione su una superficie assorbente è:

$$
P_{\text{rad}} = \frac{F}{c} = \frac{1361\ \mathrm{W\,m^{-2}}}{3{,}00 \times 10^{8}\ \mathrm{m\,s^{-1}}} \approx 4{,}54 \times 10^{-6}\ \mathrm{Pa}
$$

È un valore minuscolo, se lo paragoniamo alla pressione atmosferica che è $P_{atm} \approx 101.325\ \mathrm{Pa}$:

$$\frac{P_{\text{rad}}}{P_{\text{atm}}} \approx 4{,}5 \times 10^{-11}$$

Undici ordini di grandezza di differenza sono un'enormità, ma è un valore troppo astratto per dare un'idea di quanto "pesi" effettivamente la radiazione solare. Possiamo farcene un'idea più concreta, se trasformiamo quella pressione in un peso distribuito su una superficie:

$$
\frac{m}{A} = \frac{P_{\text{rad}}}{g} = \frac{4{,}54 \times 10^{-6}\ \mathrm{Pa}}{9{,}81\ \mathrm{m\,s^{-2}}} \approx 4{,}63 \times 10^{-7}\ \mathrm{kg\,m^{-2}} \approx 0{,}46\ \mathrm{mg\,m^{-2}}
$$

La pressione di radiazione del Sole vale circa $0{,}46$ milligrammi per metro quadrato: è l'equivalente di circa *otto granelli di sale* distribuiti uniformemente su un quadrato di un metro di lato. Eppure questa pressione minuscola, esercitata continuativamente nel tempo, ha il potere di deviare in modo percettibile l'orbita dei satelliti e di determinare la forma delle code di polvere delle comete.

## La pressione di radiazione su una superficie riflettente

Un caso particolare di pressione di radiazione è quello di un flusso diretto su una superficie *completamente* riflettente. In questo caso, la formula diventa:

$$
P_{rad} = \frac{2F}{c}
$$

Perché la forza raddoppia? La spiegazione ha a che fare con la **conservazione** del momento. Immaginiamo un fotone che impatta una superficie con una quantità di moto $+p$ e viene assorbito. Dopo l'assorbimento non esiste più come fotone, quindi la sua quantità di moto finale è zero. La variazione di quantità di moto del fotone è:

$$
\Delta p = 0 - p = -p
$$

Per il principio di conservazione della quantità di moto, la superficie riceve una quantità di moto equivalente ma di segno opposto, cioè $+p$ (ricordiamo che il momento è una grandezza vettoriale). Questa è l'origine della pressione. Ma cosa succede se il fotone impatta su uno specchio perfetto? Il fotone arriva, come prima, con una quantità di moto $+p$, ma, invece di essere assorbito, rimbalza all'indietro con una quantità di moto $-p$. La variazione della quantità di moto del fotone è quindi:

$$
\Delta p = (-p) - (+p) = -2p
$$

Sempre per il principio di conservazione, la superficie colpita deve ricevere una quantità di moto uguale e opposta, cioè $+2p$. Ogni fotone trasferisce dunque *il doppio della quantità di moto* rispetto al caso dell'assorbimento e, di conseguenza, la forza esercitata dalla pressione di radiazione *raddoppia*.

Questo è il principio che sta alla base delle **vele solari**, prototipi di navicelle spaziali senza motore, che sfruttano la pressione della luce del Sole per acquistare velocità, grazie ad enormi superfici riflettenti orientate nella direzione da cui proviene la radiazione solare.

In generale, se la superficie colpita ha un coefficiente di riflessione $R$ (con $R$ che varia da $0$ a $1$), la formula della pressione di radiazione è:

$$P_{rad} = \frac{F}{c}(1+R)$$

## La pressione di radiazione negli interni stellari

Un caso ancora diverso è quello degli **interni stellari**, in cui la pressione di radiazione svolge un ruolo tanto più importante quanto più massiccia e luminosa è una stella.

Ricordiamo che una stella si mantiene in [equilibrio idrostatico]({{< relref "/dizionario/equilibrio-idrostatico/" >}}) per l'azione combinata del gas e della radiazione al suo interno, che generano una pressione diretta verso l'esterno, tale da contrastare la forza con cui la gravità spinge la stella a collassare su se stessa. Pertanto, in un punto qualsiasi dell'interno stellare, la pressione totale $P_{tot}$ che sostiene la struttura contro il collasso gravitazionale è la somma di due contributi:

$$
P_{\text{tot}} = P_{\text{gas}} + P_{\text{rad}}
$$

La radiazione all'interno di una stella si diffonde in tutte le direzioni e forma un campo di fotoni quasi isotropo, in equilibrio termico con la materia. In simili condizioni la pressione di radiazione è legata alla **densità di energia** $u$ della radiazione dalla relazione:

$$
P_{\rm rad} = \frac{1}{3}u
$$

Poiché un campo di radiazione in equilibrio termico segue la legge di Planck, la densità di energia vale:

$$
u = aT^4
$$

in cui $a$ è la costante di radiazione:

$$
a = 7{,}5657 \times 10^{-16}\ \mathrm{J\,m^{-3}\,K^{-4}}
$$

e $T$ è la temperatura. Combinando le due espressioni si ottiene la formula fondamentale:

$$
P_{\rm rad} = \frac{1}{3}aT^4
$$

## La pressione di radiazione all'interno del Sole

Per passare dalla teoria alla pratica, usiamo la formula per calcolare la pressione di radiazione all'interno del Sole. La temperatura centrale del Sole è circa:

$$
T \simeq 1{,}57 \times 10^7\ \mathrm{K}
$$

cioè circa $15{,}7$ milioni di gradi. Calcoliamo ora $T^4$:

$$
T^4 = (1{,}57 \times 10^7)^4 \simeq 6{,}08 \times 10^{28}\ \mathrm{K^4}
$$

La densità di energia della radiazione è quindi:

$$
\begin{aligned}
u &= aT^4 \\
&= (7{,}5657 \times 10^{-16})(6{,}08 \times 10^{28}) \\
u &\simeq 4{,}60 \times 10^{13}\ \mathrm{J\,m^{-3}}.
\end{aligned}
$$

Da ciò ricaviamo la pressione di radiazione solare, che è circa:

$$
P_{\rm rad} = \frac{u}{3} \simeq 1{,}53 \times 10^{13}\ \mathrm{Pa}
$$

Ma, nel centro del Sole, la pressione totale è circa:

$$
P_{\rm tot} \simeq 2{,}5 \times 10^{16}\ \mathrm{Pa}
$$

Pertanto:

$$
\frac{P_{\rm rad}}{P_{\rm tot}} \simeq 6 \times 10^{-4}
$$

Ciò vuol dire che la pressione di radiazione rappresenta solo circa lo $0{,}06\%$ della pressione totale. Per il Sole, quindi, la spinta che contrasta la gravità è fornita quasi interamente dalla **pressione del gas**.

## La pressione di radiazione in una stella di Wolf-Rayet

Per una stella di Wolf-Rayet le cose cambiano completamente. Si tratta di giganti molto massicce, brillantissime, giunte alle fasi finali della loro esistenza, che espellono enormi quantità di materia attraverso potentissimi venti stellari.

Consideriamo come esempio rappresentativo della categoria una Wolf-Rayet da circa $20$–$25$ masse solari nella fase di fusione dell'elio. Poniamo una temperatura centrale intorno ai $200$ milioni di gradi, un valore plausibile per questa fase (il bruciamento dell'elio nelle stelle massicce si innesca tipicamente attorno a $10^8\,\text{K}$):

$$
T_c = 2{,}0 \times 10^8\ \mathrm{K}
$$

In base alla formula già esaminata per il calcolo della densità di energia, calcoliamo la quarta potenza della temperatura:

$$
T^4 = (2{,}0 \times 10^8)^4 = 1{,}6 \times 10^{33}\ \mathrm{K^4}
$$

Quindi otteniamo la densità di energia $u$:

$$
\begin{aligned}
u &= (7{,}5657 \times 10^{-16})(1{,}6 \times 10^{33}) \\
u &\simeq 1{,}21 \times 10^{18}\ \mathrm{J\,m^{-3}}.
\end{aligned}
$$

Si tratta di una densità di energia enorme. Da essa, deriviamo la pressione di radiazione:

$$
\begin{aligned}
P_{\rm rad} &= \frac{1}{3}(1{,}21 \times 10^{18}) \\
P_{\rm rad} &\simeq 4{,}0 \times 10^{17}\ \mathrm{Pa}.
\end{aligned}
$$

Confrontiamo ora questo dato con la **pressione del gas**. A differenza di quanto avviene durante la fusione dell'idrogeno, il nucleo di una stella massiccia in fusione dell'elio si è già contratto in modo significativo, ed è caratterizzato da densità centrali tutt'altro che trascurabili, dell'ordine di:

$$
\rho_c \sim 10^4\ \mathrm{g\,cm^{-3}} = 10^7\ \mathrm{kg\,m^{-3}}
$$

Assumendo un plasma completamente ionizzato dominato da elio, il peso molecolare medio è circa:

$$
\mu \simeq \frac{4}{3}
$$

La pressione del gas ideale vale:

$$
P_{\rm gas} = \frac{\rho kT}{\mu m_H}
$$

Sostituiamo alle lettere i valori numerici noti:

$$
P_{\rm gas} = \frac{(1 \times 10^7)(1{,}381 \times 10^{-23})(2{,}0 \times 10^8)}{(4/3)(1{,}673 \times 10^{-27})}
$$

E otteniamo la pressione del gas:

$$
P_{\rm gas} \simeq 1{,}24 \times 10^{19}\ \mathrm{Pa}
$$

Possiamo ora confrontare quanto conta la pressione di radiazione e quanto la pressione del gas nel nucleo della stella di Wolf-Rayet che abbiamo considerato:

$$
\begin{aligned}
P_{\rm rad} &\simeq 4{,}0 \times 10^{17}\ \mathrm{Pa} \\
P_{\rm gas} &\simeq 1{,}24 \times 10^{19}\ \mathrm{Pa}.
\end{aligned}
$$

Il rapporto che abbiamo ottenuto è:

$$
\frac{P_{\rm gas}}{P_{\rm rad}} \simeq 31
$$

In questo esempio, contrariamente a quanto ci si potrebbe aspettare, la pressione del gas è ancora circa **trentuno volte maggiore** di quella di radiazione: il nucleo, per quanto caldissimo, è anche estremamente denso, e questo basta a far pendere la bilancia dalla parte del gas. La pressione totale nel nucleo è:

$$
\begin{aligned}
P_{\rm tot} &= P_{\rm gas} + P_{\rm rad} \\
P_{\rm tot} &\simeq 1{,}28 \times 10^{19}\ \mathrm{Pa}.
\end{aligned}
$$

Pertanto:

$$
\frac{P_{\rm rad}}{P_{\rm tot}} \simeq 3{,}2\%
$$

In pratica, nel nucleo della Wolf-Rayet la pressione di radiazione pesa oltre cinquanta volte più che nel Sole (dove è appena lo $0{,}06\%$), ma resta comunque una frazione minoritaria: è ancora il gas a sostenere il nucleo contro il collasso gravitazionale.

Il quadro cambia però radicalmente man mano che ci si allontana dal nucleo. Il rapporto $P_{\rm rad}/P_{\rm gas}$ dipende da $T^3/\rho$: procedendo verso gli strati esterni, la densità crolla di molti ordini di grandezza mentre la temperatura scende in modo assai più contenuto, e questa differenza diventa rapidamente importante. È proprio negli strati più superficiali (dove la gravità è più debole e l'opacità dovuta agli elementi pesanti intercetta un'enorme quantità di fotoni) che la pressione di radiazione arriva a contrastare efficacemente la gravità. Presso la superficie, la stella giunge vicino al [limite di Eddington]({{< relref "/dizionario/limite-di-eddington/" >}}) e la pressione di radiazione alimenta i potenti venti stellari tipici delle Wolf-Rayet. È dunque un fenomeno di superficie, non la pressione del nucleo, a rendere le stelle di Wolf-Rayet così instabili.
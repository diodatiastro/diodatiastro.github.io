+++
title = "Corpo nero"
date = "2026-07-20"
draft = false
+++

{{< katex />}}

## Etimologia

Il termine "corpo nero" (dal tedesco schwarzer Körper) fu introdotto dal fisico tedesco Gustav Robert Kirchhoff nel 1860, nell'ambito dei suoi studi sulla relazione tra potere emissivo e potere assorbente dei corpi in equilibrio termico.

## Definizione

Un corpo nero è un oggetto ideale che assorbe *tutta* la radiazione elettromagnetica incidente, indipendentemente dalla frequenza e dall'angolo di incidenza. Non riflette né trasmette nulla. Se potessimo vederlo, ci apparirebbe completamente nero: da qui il nome.

## La legge di Kirchhoff

Per comprendere perché occupi una posizione centrale nella fisica della radiazione, occorre partire dalla **legge di Kirchhoff** del 1859. Essa stabilisce che, per qualsiasi corpo in equilibrio termico con il campo di radiazione circostante, il rapporto tra potere emissivo e coefficiente di assorbimento è universale: dipende, cioè, solo dalla temperatura $T$ e dalla frequenza $\nu$, non dalla natura del corpo.

La legge si dimostra per via termodinamica: se un corpo emettesse più di quanto assorbe a una certa frequenza, cederebbe energia netta a un corpo alla stessa temperatura, violando il secondo principio. L'equilibrio termico impone che emissione e assorbimento si bilancino esattamente a ogni frequenza. Ne segue il principio nella sua forma più intuitiva: *un buon assorbitore è necessariamente un buon emettitore, e viceversa*.

Da ciò consegue che, se un corpo nero è l'assorbitore per eccellenza, deve essere anche l'**emettitore termico** più efficiente possibile, per poter rimanere in equilibrio termodinamico.

## La legge di Planck

La radiazione emessa da un corpo nero - detta *radiazione di corpo nero* - ha uno **spettro continuo** che *dipende esclusivamente dalla sua temperatura assoluta*, non dalla forma, dalla massa o dal materiale di cui è composto. La descrizione di tale spettro non fu un problema semplice da risolvere. Ci riuscì il fisico tedesco **Max Planck** nel 1900, formulando una legge basata su un'ipotesi rivoluzionaria per l'epoca, cioè che l'energia emessa come radiazione non è continua, ma è *quantizzata*. Gli oscillatori nelle pareti del corpo nero possono assorbire ed emettere energia solo in pacchetti discreti (quanti) di energia.

In termini quantitativi, l'intensità spettrale emessa per unità di lunghezza d'onda è data dalla **legge di Planck**:

$$
B_\lambda(T) = \frac{2hc^2}{\lambda^5} \cdot \frac{1}{e^{hc/\lambda k_B T} - 1}
$$

dove $h$ è la costante di Planck, $c$ la velocità della luce, $k_B$ la costante di Boltzmann, $T$ la temperatura assoluta e $\lambda$ la lunghezza d'onda. È proprio il termine esponenziale al denominatore, conseguenza diretta della quantizzazione dell'energia, a far crollare rapidamente l'emissione alle alte frequenze (piccole lunghezze d'onda), cosa che la legge classica di Rayleigh-Jeans non riusciva a riprodurre.

La legge di Planck risolveva tra l'altro il problema della "**catastrofe ultravioletta**", cioè l'emissione di energia infinita alle alte frequenze, prevista dalla precedente Legge di Rayleigh-Jeans, che funzionava bene alle basse frequenze ma non a quelle alte.

In sintesi, la legge di Planck è la descrizione completa e corretta dello spettro di emissione di un corpo nero e, come tale, è un pilastro fondamentale della fisica moderna. La forma della curva dello spettro di Planck ha un unico massimo, cresce rapidamente a partire dalle basse frequenze e decade esponenzialmente verso le alte. All'aumentare della temperatura, la curva si alza su tutta la banda e il picco si sposta verso frequenze più alte.

## La legge di Wien

Dalla legge di Planck deriva la **legge di Wien** (o legge dello spostamento di Wien), che lega inversamente la temperatura alla lunghezza d'onda del picco di emissione:

$$
\lambda_{max} \cdot T = b
$$

in cui $b \approx 2{,}898 \times 10^{-3}\;\mathrm{m \cdot K}$ è la costante di spostamento di Wien. Maggiore è la temperatura, minore è la lunghezza d'onda a cui lo spettro raggiunge il suo massimo: è per questo che i corpi più caldi appaiono bluastri e quelli più freddi rossastri.

Applicando la formula a tre tipi di stelle caratterizzati da temperature fotosferiche molto differenti, si ottengono valori che indicano chiaramente come il picco di emissione sia legato alla temperatura:

| Sorgente | Temperatura | $\lambda_{max}$ | Banda |
|---|---|---|---|
| Stella di tipo O | $\approx 30\,000\;\mathrm{K}$ | $\approx 97\;\mathrm{nm}$ | ultravioletto lontano |
| Sole | $\approx 5\,778\;\mathrm{K}$ | $\approx 502\;\mathrm{nm}$ | visibile (verde) |
| Stella di tipo M | $\approx 3\,000\;\mathrm{K}$ | $\approx 966\;\mathrm{nm}$ | vicino infrarosso |

In sostanza, mentre la legge di Planck è la descrizione completa dello spettro di un corpo nero, la legge di Wien è lo strumento che serve per ricavare rapidamente il punto in cui l'emissione di radiazione termica è massima. Si tratta di una proprietà utilissima in astronomia, perché consente di stimare la temperatura superficiale di una stella semplicemente osservando il colore della sua radiazione.

## La legge di Stefan-Boltzmann

Integrando la legge di Planck su tutte le lunghezze d'onda si ottiene la **legge di Stefan-Boltzmann**, che lega la temperatura non più al picco spettrale ma alla *potenza totale* irraggiata per unità di superficie:

$$
j^* = \sigma T^4
$$

in cui $\sigma \approx 5{,}670 \times 10^{-8}\;\mathrm{W\,m^{-2}\,K^{-4}}$ è la costante di Stefan-Boltzmann. Per un corpo sferico di raggio $R$ (come una stella), la potenza totale irraggiata, cioè la sua luminosità, è:

$$
L = 4\pi R^2 \sigma T^4
$$

Applicando la prima formula alla temperatura superficiale del Sole ($T \approx 5\,778\;\mathrm{K}$) si ottiene un flusso $j^* \approx 6{,}3 \times 10^7\;\mathrm{W/m^2}$. Applicando poi la seconda formula, con il raggio solare $R_\odot \approx 6{,}957 \times 10^8\;\mathrm{m}$, si ottiene la luminosità totale del Sole:

$$
L_\odot = 4\pi R_\odot^2 \sigma T^4 \approx 3{,}83 \times 10^{26}\;\mathrm{W},
$$

un valore in ottimo accordo con il valore nominale adottato dalla IAU ($3{,}828 \times 10^{26}\;\mathrm{W}$).

Mentre la legge di Wien fissa *dove* si trova il picco dello spettro, la legge di Stefan-Boltzmann fissa *quanta* energia complessiva viene irraggiata: insieme, le due leggi permettono di ricostruire le due informazioni più importanti sull'emissione termica di un corpo a partire dalla sola temperatura.

{{< figura 
src="immagini/radiazione-di-corpo-nero-per-diverse-temperature-stellari.jpg" 
alt="Curve di corpo nero a diverse temperature" 
caption="Curve di corpo nero per diverse temperature stellari."
>}}

In conclusione, anche se non esiste in natura un corpo nero perfetto, dato che si tratta di un oggetto puramente ideale, le leggi che ne descrivono il funzionamento sono strumenti essenziali in astrofisica, poiché le **stelle** (incluso il Sole) sono eccellenti approssimazioni di corpi neri.
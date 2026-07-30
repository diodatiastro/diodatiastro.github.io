+++
title = "Correzione bolometrica"
date = "2026-07-21"
draft = false
+++

{{< katex />}}

Come accennato nella voce [Luminosità]({{< relref "/dizionario/luminosita/" >}}), nessun rilevatore è in grado di misurare il [flusso]({{< relref "/dizionario/flusso-di-radiazione/" >}}) totale di una stella, poiché l'atmosfera terrestre e gli stessi strumenti pongono dei limiti fisici. I telescopi campionano la luce attraverso filtri fotometrici (come il filtro $V$, centrato sul verde-giallo a circa $550$ nanometri), che rappresentano solo una frazione delle lunghezze d'onda possibili.

Ma la radiazione emessa dalle stelle non è limitata a ciò che i nostri filtri fotometrici (le bande dello spettro) possono registrare. Ad esempio, una supergigante blu molto calda come Rigel irradia gran parte della sua energia nell'ultravioletto, mentre una nana rossa ultrafredda la disperde quasi interamente nell'infrarosso. 

{{% box tipo="definizione" titolo="" %}} 
La **correzione bolometrica**[^1] (indicata comunemente con la sigla $BC$, dall'inglese *Bolometric Correction*) è lo strumento teorico che gli astronomi usano per "recuperare" la quota di radiazione *invisibile* ai filtri adoperati per misurare la radiazione stellare. Tale correzione si basa su dati empirici e sui modelli teorici di atmosfera stellare più aggiornati. Consiste in un fattore numerico che varia a seconda del tipo di stella e che va a integrare le magnitudini stellari misurate, sia apparenti sia assolute, in modo da convertirle in magnitudini bolometriche.
{{% /box %}}

Riferite alle magnitudini visuali apparenti e assolute, le formule fondamentali (nella convenzione standard adottata dall'Unione Astronomica Internazionale) sono:

$$
m_{bol} = m_V + BC_V \;\;\text{e}\;\; M_{bol} = M_V + BC_V
$$

## La correzione bolometrica è quasi sempre negativa

Dato che la magnitudine bolometrica rappresenta il flusso *totale* (che è sempre maggiore o uguale al flusso parziale misurato in una singola banda), e dato che nella scala delle magnitudini a un flusso maggiore corrisponde un valore numerico più piccolo, la correzione bolometrica è quasi sempre un valore *negativo* (o al massimo pari a zero). Se sommiamo alla magnitudine visibile un valore negativo, ne consegue che la magnitudine bolometrica è un numero più basso della magnitudine visibile, il che indica correttamente una maggiore brillantezza complessiva dell'astro osservato[^2].

## I parametri che influiscono sulla correzione bolometrica

Il valore $BC$ varia da stella a stella, a volte drasticamente[^3], in funzione di tre parametri fondamentali: la **temperatura efficace** ($T_{\text{eff}}$), la **gravità superficiale** e la **metallicità** dell'astro. In base alla temperatura, possiamo osservare tre comportamenti tipici:

1. **Stelle caldissime (tipi spettrale O, B).** Poiché il loro picco di emissione è spostato decisamente verso l'ultravioletto, la luce visibile è solo una piccola frazione del totale. Di conseguenza, la loro $BC$ è fortemente negativa. Per le stelle di tipo O può superare il valore di $-3{,}0$ o $-4{,}0$.

2. **Stelle intermedie (tipi spettrale A, F, G).** Queste stelle, tra cui il Sole e Sirio, hanno il loro picco di emissione proprio all'interno o molto vicino alla banda visibile. La frazione di energia che sfugge al filtro è ridotta, quindi la loro $BC$ è molto vicina allo zero. Per il Sole $BC$ è approssimativamente pari a $-0{,}07$; per Sirio varia tra $-0{,}09$ e $-0{,}30$ a seconda delle calibrazioni.

3. **Stelle fredde (tipo spettrale M).** Avendo temperature superficiali basse, il loro picco si colloca nell'infrarosso. La luce visibile che emettono è pochissima rispetto all'energia termica totale irradiata. Di conseguenza, anche per le nane rosse o le supergiganti rosse il valore di $BC$ torna a essere marcatamente negativo.

## La correlazione tra tipo spettrale, temperatura e correzione bolometrica

La seguente tabella illustra in modo più dettagliato la relazione tra tipo spettrale, temperatura e correzione bolometrica. I valori riportati provengono da un noto studio di Schmidt-Kaler del 1982 [^4].

| Tipo Spettrale[^5] | $M_V$ (mag) | $(B-V)_0$ (mag) | $(U-B)_0$ (mag) | $T_\text{eff}$ ($K$) | $BC$ (mag) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **O3** | $-6,0$ | $-0,33$ | $-1,22$ | $52\,500$ | $-4,75$ |
| **O5** | $-5,7$ | $-0,33$ | $-1,19$ | $44\,500$ | $-4,40$ |
| **O8** | $-4,9$ | $-0,32$ | $-1,14$ | $35\,800$ | $-3,50$ |
| **B0** | $-4,0$ | $-0,30$ | $-1,08$ | $30\,000$ | $-3,16$ |
| **B2** | $-2,45$ | $-0,24$ | $-0,84$ | $20\,900$ | $-2,35$ |
| **B5** | $-1,2$ | $-0,17$ | $-0,58$ | $15\,200$ | $-1,46$ |
| **B8** | $-0,25$ | $-0,11$ | $-0,34$ | $11\,400$ | $-0,80$ |
| **A0** | $+0,65$ | $0,00$ | $0,00$ | $9\,520$ | $-0,30$ |
| **A2** | $+1,3$ | $+0,05$ | $+0,05$ | $8\,970$ | $-0,20$ |
| **A5** | $+1,95$ | $+0,15$ | $+0,10$ | $8\,200$ | $-0,15$ |
| **F0** | $+2,7$ | $+0,30$ | $+0,03$ | $7\,200$ | $-0,09$ |
| **F2** | $+3,0$ | $+0,35$ | $0,00$ | $6\,890$ | $-0,11$ |
| **F5** | $+3,5$ | $+0,44$ | $-0,02$ | $6\,440$ | $-0,14$ |
| **F8** | $+4,0$ | $+0,52$ | $+0,02$ | $6\,200$ | $-0,16$ |
| **G0** | $+4,4$ | $+0,58$ | $+0,06$ | $6\,030$ | $-0,18$ |
| **G2** | $+4,83$ | $+0,63$ | $+0,12$ | $5\,770$ | $-0,07$ |
| **G5** | $+5,1$ | $+0,68$ | $+0,20$ | $5\,680$ | $-0,20$ |
| **G8** | $+5,5$ | $+0,74$ | $+0,30$ | $5\,520$ | $-0,26$ |
| **K0** | $+5,9$ | $+0,81$ | $+0,45$ | $5\,250$ | $-0,31$ |
| **K2** | $+6,4$ | $+0,91$ | $+0,64$ | $4\,900$ | $-0,42$ |
| **K5** | $+7,35$ | $+1,15$ | $+1,08$ | $4\,350$ | $-0,72$ |
| **K7** | $+8,1$ | $+1,33$ | $+1,22$ | $4\,060$ | $-0,98$ |
| **M0** | $+8,8$ | $+1,41$ | $+1,24$ | $3\,850$ | $-1,21$ |
| **M2** | $+9,9$ | $+1,52$ | $+1,18$ | $3\,580$ | $-1,62$ |
| **M5** | $+12,3$ | $+1,61$ | $+1,24$ | $3\,240$ | $-2,72$ |
| **M8** | $+16,0$ | $+1,80$ | — | $2\,640$ | $-4,10$ |


[^1]: *Bolometrico* significa «relativo alla misura della radiazione totale». L'aggettivo deriva da *bolometro* (gr. *bolḗ*, «raggio di luce» più *métron*, «misura»), strumento ottocentesco ideato da Samuel Langley nel 1881 per misurare la potenza totale di una sorgente radiante.

[^2]: In alcuni casi, tipicamente per le stelle di tipo F precoce, il cui picco di emissione cade proprio a ridosso della banda $V$, la correzione bolometrica calcolata può risultare leggermente *positiva*. Non è un errore: il punto zero della scala fotometrica $V$ (storicamente legato al sistema di Vega/A0V) e quello della scala bolometrica (fissato più di recente da una convenzione IAU) non sono stati costruiti in modo da garantire $BC_V \leq 0$ in ogni caso.

[^3]: La determinazione della correzione bolometrica rimane una delle sfide più delicate della fotometria stellare. Poiché i flussi extra-visuali (soprattutto negli ultravioletti estremi per le stelle calde) sono difficili da calibrare anche con i telescopi spaziali, il valore esatto di $BC$ per una specifica classe spettrale può subire variazioni e aggiornamenti a seconda dei modelli teorici adottati dalle diverse équipe di ricerca.

[^4]: Schmidt-Kaler, Th., in *Landolt-Börnstein, New Series*, Gruppo VI, Vol. 2b (Springer-Verlag, Berlino, 1982). 

[^5]: La scala fotometrica $UBV$ assume il tipo spettrale A0V come punto zero ideale del sistema dei colori: per definizione, $(B-V)_0 = 0{,}00$ e $(U-B)_0 = 0{,}00$.
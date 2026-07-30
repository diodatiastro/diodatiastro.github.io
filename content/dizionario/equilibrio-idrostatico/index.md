+++
title = "Equilibrio idrostatico"
date = "2026-07-22"
draft = false
+++

{{< katex />}}

L'**idrostatica** è il ramo della fisica che descrive i fluidi in quiete soggetti alla gravità, come l'acqua e l'atmosfera terrestre. Più precisamente, è la condizione fisica in cui un fluido (liquido, gas o plasma) si trova in uno stato di equilibrio macroscopico, in cui la forza di gravità è esattamente controbilanciata da una forza uguale e contraria, generata dal gradiente di pressione del fluido. Se questo equilibrio si rompe, il corpo inizia a contrarsi o a espandersi macroscopicamente.

{{% box tipo="definizione" titolo="" %}} 
In astrofisica, l'equilibrio idrostatico è il meccanismo che spiega e garantisce la **stabilità stellare**, cioè il fatto che le stelle riescano a mantenere forma e dimensione praticamente invariate per milioni o miliardi di anni senza collassare sotto la spinta della propria stessa gravità. Ciò che consente il mantenimento di tale equilibrio è l'azione combinata della pressione del gas caldo e, in misura variabile, della [pressione di radiazione]({{< relref "/dizionario/pressione-di-radiazione/" >}}) [^1]. Queste due pressioni, sommandosi, generano una spinta netta verso l'esterno, che contrasta la forza di gravità e impedisce alla stella di collassare su se stessa.
{{% /box %}}

## Funziona come un meccanismo di *feedback*

È un sistema regolato da un vero e proprio termostato interno, un perfetto sistema di *feedback*: se la pressione interna cala, la gravità prende il sopravvento e la stella si **contrae**. La contrazione comprime e riscalda il nucleo, accelerando le reazioni nucleari che aumentano di nuovo la pressione, ripristinando l'equilibrio. Viceversa, se la pressione interna sale, la stella si **espande**. Questa espansione fa raffreddare il plasma, riducendo l'efficienza delle reazioni nucleari e facendo calare la pressione fino a ripristinare l'equilibrio.

Quando le reazioni di fusione nucleare si arrestano definitivamente nel nucleo, l'equilibrio idrostatico viene meno una volta per tutte, innescando profonde ristrutturazioni interne che, a seconda dei casi, condurranno alle fasi di gigante rossa o di supergigante e, in generale, agli stadi finali dell'evoluzione stellare.

{{< figura 
src="immagini/equilibrio-idrostatico.png" 
alt="Come funziona l'equilibrio idrostatico in una stella." 
caption="Come funziona l'equilibrio idrostatico in una stella."
>}}

## Trattamento matematico fondamentale

L'equazione fondamentale che descrive l'equilibrio idrostatico per una stella assunta come perfettamente sferica è:

$$
\frac{\mathrm{d}P}{\mathrm{d}r} = -\frac{G\,M(r)\,\rho(r)}{r^2}
$$

Questa equazione differenziale dice che il gradiente di pressione (quanto la pressione cambia con il raggio) deve bilanciare esattamente il peso del materiale sovrastante. Nel dettaglio:

$$
\frac{\mathrm{d}P}{\mathrm{d}r}
$$

rappresenta il gradiente di pressione, ovvero come varia la pressione muovendosi lungo il raggio $r$ della stella. $G$ è la costante di gravitazione universale, $M(r)$ è la massa racchiusa all'interno della sfera di raggio $r$, mentre $\rho$ (rho) è la densità del plasma a quella determinata distanza dal centro. Il segno meno indica che la pressione deve necessariamente *diminuire* man mano che ci si sposta dal centro verso l'esterno (cioè man mano che $r$ aumenta). Solo un nucleo incredibilmente denso e ad altissima pressione può sostenere il peso di tutti gli strati sovrastanti della stella.

La tabella seguente indica le unità di misura nel Sistema Internazionale (SI) dei valori che contribuiscono al calcolo dell'equilibrio idrostatico di un corpo:

| Grandezza | Simbolo | Unità SI | Descrizione |
|---|---|---|---|
| Pressione | $P$ | $\mathrm{Pa}$ (Pascal) | Forza per unità di superficie |
| Raggio | $r$ | $\mathrm{m}$ | Distanza dal centro della stella |
| Costante di gravitazione universale | $G$ | $\mathrm{N\,m^2\,kg^{-2}}$ | $6{,}674 \times 10^{-11}\,\mathrm{m^3\,kg^{-1}\,s^{-2}}$ |
| Massa interna | $M(r)$ | $\mathrm{kg}$ | Massa racchiusa entro il raggio $r$ |
| Densità | $\rho$ | $\mathrm{kg\,m^{-3}}$ | Massa per unità di volume |

## Un esempio pratico: ricaviamo una stima della pressione al centro del Sole

Passando dalla teoria alla pratica, proviamo a ricavare dalla formula dell'equilibrio idrostatico una stima approssimata della pressione al centro del Sole.

Per giungere a un valore numerico affidabile a partire dall'equazione dell'equilibrio idrostatico, occorre conoscere i profili di massa e pressione nell'interno solare, stimati da modelli stellari che tengono conto di numerose variabili. Possiamo però ottenere una **stima per ordine di grandezza** con un'approssimazione molto diffusa nei testi di astrofisica stellare. Approssimiamo la derivata a un rapporto incrementale tra centro e superficie, in cui la pressione superficiale è zero:

$$
\frac{\mathrm{d}P}{\mathrm{d}r} \approx \frac{0 - P_c}{R_\odot - 0} = -\frac{P_c}{R_\odot}
$$

Sostituiamo poi a destra i valori "tipici" della nostra stella, relativi a massa totale, raggio e densità media (questa è un'approssimazione molto grezza che assume gravità e densità costanti; modelli più raffinati introducono fattori dell'ordine dell'unità):

$$\begin{aligned}
-\frac{P_c}{R_\odot} &\approx -\frac{G\,M_\odot\,\bar{\rho}}{R_\odot^2} \\[6pt]
P_c &\approx \frac{G\,M_\odot\,\bar{\rho}}{R_\odot}
\end{aligned}$$

Usando la densità media:

$$\bar{\rho} = \frac{3\,M_\odot}{4\pi\,R_\odot^3},$$

otteniamo:

$$P_c \approx \frac{3\,G\,M_\odot^2}{4\pi\,R_\odot^4}$$

Impostiamo ora i valori noti di massa e raggio solare:

$$
\begin{aligned}
M_\odot &= 1{,}989 \times 10^{30}\,\mathrm{kg} \\[4pt]
R_\odot &= 6{,}957 \times 10^{8}\,\mathrm{m}
\end{aligned}
$$

e passiamo finalmente a eseguire i calcoli:

$$
\begin{aligned}
M_\odot^2 &= 3{,}956 \times 10^{60}\,\mathrm{kg}^2 \\[4pt]
G\,M_\odot^2 &= 2{,}640 \times 10^{50}\,\mathrm{kg\,m^3\,s^{-2}}  \\[4pt]
R_\odot^4 &= 2{,}343 \times 10^{35}\,\mathrm{m}^4 \\[4pt]
P_c &\approx \frac{3 \times 2{,}640 \times 10^{50}}{4\pi \times 2{,}343 \times 10^{35}} \\[4pt]
P_c &\approx 2{,}7 \times 10^{14}\,\mathrm{Pa}
\end{aligned}
$$

La pressione ottenuta equivale a circa $2{,}7$ miliardi di atmosfere:

$$2{,}7 \times 10^{9}\,\mathrm{atm}$$

Per dare un'idea, la pressione al fondo della Fossa delle Marianne è di circa $10^8\,\mathrm{Pa}$, cioè $10^3\,\mathrm{atm}$. La pressione da noi stimata al centro del Sole è quindi milioni di volte superiore. Eppure i modelli solari standard danno una pressione centrale di circa $2{,}5 \times 10^{16}\,\mathrm{Pa}$, equivalente a $2{,}5 \times 10^{11}\,\mathrm{atm}$:

$$
\begin{aligned}
P_{c,\mathrm{reale}} &\approx 2{,}5 \times 10^{16}\,\mathrm{Pa} \\[4pt]
&\sim 2{,}5 \times 10^{11}\,\mathrm{atm}
\end{aligned}
$$

Si tratta di quasi *due ordini di grandezza* in più rispetto alla nostra stima.

La discrepanza non è un errore di calcolo, ma riflette il limite dell'approssimazione usata: assumendo una densità *uniforme* in tutto il volume, abbiamo *sottostimato enormemente* la massa concentrata vicino al centro, che è elevatissima. Infatti, la densità centrale del Sole è circa:

$$
150\,\mathrm{g\,cm^{-3}}
$$

contro una densità media di soli:

$$
1{,}4\,\mathrm{g\,cm^{-3}}
$$

Il vero gradiente di pressione è insomma molto più ripido verso il centro della stella rispetto a quanto suggerisca un profilo uniforme.

Questo tipo di stima è comunque utile a fini didattici, anche se si colloca evidentemente al limite inferiore dei valori possibili. Il suo pregio è che fissa un ordine di grandezza plausibile e mostra che la pressione centrale scala col quadrato della massa e l'inverso della quarta potenza del raggio:

$$
P_c \propto \frac{M^2}{R^4}.
$$

[^1]: Negli oggetti compatti come nane bianche e stelle di neutroni, la pressione di degenerazione quantistica svolge un ruolo importante nel mantenere l'equilibrio idrostatico.
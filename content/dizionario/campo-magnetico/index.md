+++
title = "Campo magnetico"
date = "2026-07-20"
draft = false
+++

{{< katex />}}

## Etimologia

Il termine "magnete" deriva dal latino *magnes*, a sua volta dal greco *Μάγνης λίθος* ("pietra di Magnesia"), dal nome di una località dell'Asia Minore (l'odierna Manisa, in Turchia) presso cui si trovavano abbondanti giacimenti di magnetite, il minerale di ferro capace di attrarre altro ferro. Dalla stessa radice derivano anche "magnetite" e "magnetismo". Il concetto di *campo*, invece, è molto più tardo: viene introdotto nell'Ottocento da Faraday per descrivere l'azione a distanza delle forze elettriche e magnetiche senza dover ricorrere a un mezzo meccanico intermedio.

## Definizione

Un campo magnetico è una "perturbazione" dello spazio creata da cariche elettriche in movimento (cioè da correnti elettriche) o da materiali magnetici, in grado di esercitare una forza su *altre* cariche in movimento. Si tratta di un campo **vettoriale**, il che significa che in ogni suo punto è definito da un'intensità, una direzione e un verso.

Campo elettrico e campo magnetico non sono entità indipendenti: sono le due facce di un'unica realtà, il **campo elettromagnetico**. Un campo puramente elettrico per un osservatore fermo appare parzialmente magnetico per un osservatore in moto, e viceversa — fatto che la relatività speciale di Einstein ha chiarito definitivamente.

## La legge di Lorentz

La forza che una carica elettrica $q$ subisce quando si muove con velocità $v$ all'interno di un campo magnetico $B$ è data dalla **legge di Lorentz**:

$$
\vec{F} = q(\vec{v} \times \vec{B})
$$

Essa ci dice tre cose:

1. **Serve movimento.** Una carica ferma ($v = 0$) non risente del campo magnetico.
2. **Azione perpendicolare.** La forza è sempre *perpendicolare* sia alla direzione del movimento della carica sia alla direzione del campo magnetico. Per questo motivo, il campo magnetico *non può aumentare o diminuire la velocità* di una carica, ma solo *cambiarne la direzione* (far curvare la traiettoria).
3. **Forza massima.** La forza è massima quando la carica si muove perpendicolarmente alle linee del campo magnetico, e nulla quando si muove parallelamente ad esse.

## Sorgenti di campi magnetici

Un campo magnetico può essere generato dalle seguenti sorgenti:

1. **Cariche elettriche in movimento (correnti elettriche).** Un filo percorso da corrente genera un campo magnetico circolare intorno a sé. Questo è il principio alla base degli elettromagneti. In astrofisica, questo stesso meccanismo è alla base dell'**effetto dinamo**: nei pianeti e nelle stelle, il plasma conduttore si muove per convezione ed è soggetto alla rotazione del corpo celeste. Il moto ordinato di innumerevoli cariche agisce come una gigantesca corrente elettrica, capace di generare e autoalimentare campi magnetici su scale colossali.
2. **Momenti magnetici intrinseci delle particelle (lo spin).** Elettroni, protoni e neutroni possiedono una proprietà quantistica chiamata "spin", che li fa comportare come minuscoli magneti. Nei materiali ferromagnetici (come il ferro), gli spin di molti elettroni si allineano, generando un campo macroscopico (la calamita).
3. **Variazioni del campo elettrico nel tempo (corrente di spostamento).** Per la legge di Ampère-Maxwell, un campo elettrico che cambia intensità o direzione nel tempo genera un campo magnetico nella regione circostante, anche in totale assenza di cariche reali o di fili conduttori. È un meccanismo di induzione *locale*: non richiede propagazione né si stacca dalla regione in cui il campo elettrico varia.
4. **Onde elettromagnetiche (auto-propagazione).** Il quadro cambia quando l'induzione descritta al punto precedente diventa *reciproca*: il campo magnetico variabile così generato induce a sua volta un nuovo campo elettrico variabile, che a sua volta induce un nuovo campo magnetico, e così via. Questo ciclo di rigenerazione reciproca si autoalimenta e si stacca dalla sorgente che lo ha originato: nasce così un'onda elettromagnetica (luce, onde radio, raggi X), capace di propagarsi indefinitamente nello spazio vuoto senza il supporto di alcuna materia o corrente elettrica circostante.

## Linee di campo

Un campo magnetico si visualizza tramite **linee di campo** (o linee di flusso):

- La **direzione** della linea in un punto è la direzione del campo magnetico in quel punto.
- La **densità** delle linee (quante ne passano per una data area) è proporzionale all'intensità del campo.
- Le linee del campo magnetico sono sempre **linee chiuse**. Non hanno un inizio né una fine. Escono da un polo (Nord) ed entrano nell'altro (Sud), ma all'interno del magnete si richiudono. Questo significa che *non esistono monopoli magnetici*, cioè non esiste una particella con solo polo Nord o solo polo Sud, come invece esistono cariche elettriche positive e negative separate[^1].

{{< figura 
src="immagini/campo-magnetico.jpg" 
alt="Un magnete con le linee di campo rese visibili da limatura di ferro." 
caption="Un magnete con le linee di campo rese visibili da limatura di ferro."
>}}

## Unità di misura del campo magnetico

Nel Sistema Internazionale (SI), l'**unità di misura** del campo magnetico è il **Tesla** ($\mathrm{T}$). Un'altra unità molto usata, soprattutto in astrofisica e geofisica, è il **Gauss** ($\mathrm{G}$). $1$ Tesla vale $10.000$ Gauss ($10^4\;\mathrm{G}$ ).

| Sorgente | Intensità del campo magnetico |
|---|---|
| Campo magnetico terrestre (superficie) | $\approx 25$–$65\,\mu\mathrm{T}$ ($0{,}25$–$0{,}65\;\mathrm{G}$) |
| Magnete da frigo | $\approx 5\;\mathrm{mT}$ ($50\;\mathrm{G}$) |
| Magnete al neodimio | $\approx 1$–$1{,}4\;\mathrm{T}$  (tra $10^4$ e $1{,}4 \times 10^4\;\mathrm{G}$) |
| Campo magnetico solare (macchie) | $\approx 0{,}1$–$0{,}3\;\mathrm{T}$ (tra $10^3$ e $3 \times 10^3\;\mathrm{G}$) |
| Buco nero supermassiccio (M87\*, Sgr A\*; stime EHT presso l'orizzonte) | $\approx 10^{-4}$–$10^{-2}\;\mathrm{T}$ (tra $1$ e $100\;\mathrm{G}$) |
| Campo magnetico di una stella di neutroni tipica | $\approx 10^8\;\mathrm{T}$ ($10^{12}\;\mathrm{G}$) |
| Campo magnetico di una magnetar | $\approx 10^{11}\;\mathrm{T}$ ($10^{15}\:\mathrm{G}$) |

## Ruolo nell'astrofisica

Lo studio dei campi magnetici ha un ruolo fondamentale nell'astrofisica moderna, perché investe fenomeni di ogni ordine e scala:

- **Stelle.** Governa l'attività solare (macchie, *flare*, espulsioni di massa coronale), struttura la corona, accelera il vento stellare e, nelle stelle di neutroni e nelle magnetar, raggiunge intensità tali da dominare completamente la fisica locale.
- **Mezzo interstellare.** Permea la galassia con un campo di intensità di circa $10^{-10}\;\mathrm{T}$ (pochi microgauss), influenzando la propagazione dei raggi cosmici, la formazione stellare e la struttura delle nebulose.
- **Plasma e dischi di accrescimento.** Attraverso l'instabilità magnetorotazionale (MRI), il campo magnetico è il motore principale della viscosità nei dischi di accrescimento, determinandone il riscaldamento e la luminosità.
- **Getti relativistici.** I campi magnetici intensi attorno ai buchi neri supermassicci collimano e accelerano il plasma in getti che si estendono anche per milioni di anni luce.
- **Radiazione di sincrotrone.** Le cariche elettriche che spiraleggiano a velocità relativistiche intorno alle linee di campo magnetico emettono radiazione di sincrotrone, osservabile nelle onde radio e nei raggi X. Ciò permette di mappare i campi magnetici in oggetti come resti di supernova, pulsar e radiogalassie.

[^1]: La non osservazione di tali particelle, sebbene previste da alcune teorie di unificazione delle forze fondamentali, è un tema ancora aperto nella fisica teorica.
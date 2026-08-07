+++
title = "Apocentro e Pericentro"
date = "2026-07-19"
draft = false
+++

{{< katex />}}

## Etimologia e sinonimi

Il termine **apocentro** deriva da *apó* ("lontano da") e *kéntron* e indica il punto di un'orbita ellittica in cui la distanza dal fuoco occupato dal corpo centrale è massima. Il termine **pericentro** deriva invece dal greco *perí* ("vicino a", "intorno a") e *kéntron* ("centro") e indica il punto di minima distanza.

Sono sinonimi pienamente equivalenti, e altrettanto diffusi in letteratura, **apoapside** e **periapside**, costruiti sulla radice greca *hápsis* ("arco", "volta", nel senso di "punto dell'arco orbitale"), da cui derivano anche gli inglesi *periapsis* e *apoapsis*.

{{% box tipo="definizione" titolo="" %}} 
Per un'orbita ellittica kepleriana, pericentro e apocentro sono i due estremi dell'asse maggiore dell'ellisse, situati sulla linea degli apsidi, che congiunge i due punti passando per il fuoco occupato dal baricentro del sistema, che nei sistemi planetari coincide praticamente con il centro del corpo centrale. Sono quindi gli unici due punti dell'orbita in cui il vettore velocità del corpo orbitante è *perpendicolare* al raggio vettore che lo separa dal fuoco occupato dal corpo centrale.
{{% /box %}}

{{< figura src="immagini/apocentro-e-pericentro.jpg" alt="In rosso i vettori velocità del corpo orbitante al pericentro e all'apocentro di un'orbita ellittica e in blu i raggi vettori che congiungono il fuoco occupato dal corpo centrale al corpo orbitante nei due rispettivi apsidi. Crediti: Michele Diodati" caption="In rosso i vettori velocità del corpo orbitante al pericentro e all'apocentro di un'orbita ellittica e in blu i raggi vettori che congiungono il fuoco occupato dal corpo centrale al corpo orbitante nei due rispettivi apsidi. Crediti: Michele Diodati" >}}

Nelle traiettorie **paraboliche** e **iperboliche** esiste soltanto il pericentro, poiché il corpo, dopo aver raggiunto la minima distanza dal corpo centrale, si allontana indefinitamente senza mai raggiungere un punto di massima distanza. L'apocentro è quindi definito solo per le orbite ellittiche.

Data un'orbita ellittica di semiasse maggiore $a$ ed eccentricità $e$ (con $e < 1$), le distanze di pericentro e apocentro dal fuoco occupato dal corpo centrale sono:

$$
\begin{aligned} r_{\text{peri}} &= a\left(1-e\right)  \\r_{\text{apo}} &= a\left(1+e\right) \\\end{aligned}
$$

da cui si ricava algebricamente:

$$
a = \frac{r_{\text{peri}} + r_{\text{apo}}}{2}, \qquad e = \frac{r_{\text{apo}} - r_{\text{peri}}}{r_{\text{apo}} + r_{\text{peri}}}
$$

Per un'orbita circolare ($e = 0$), pericentro e apocentro coincidono e la distinzione perde significato.

## Esempi pratici: il calcolo di apocentro e pericentro per Luna, Terra e Mercurio 

Vediamo qualche esempio numerico, a partire dal sistema **Terra-Luna**, in cui pericentro e apocentro sono denominati più comunemente *perigeo* e *apogeo*:

$$
\begin{aligned}
a &= 384\,400\, \text{km,}\qquad e = 0{,}0549:\\
r_{\text{perigeo}} &= 384\,400\,\text{km} \times (1-0{,}0549) \approx 363\,300\,\text{km} \\
r_{\text{apogeo}} &= 384\,400\,\text{km} \times (1+0{,}0549) \approx 405\,500\,\text{km}
\end{aligned}
$$

Il calcolo mostra che c'è una differenza di circa $42\,000\;\text{km}$ tra la minima e la massima distanza della Luna dalla Terra, cioè tra perigeo e apogeo. 

Nel sistema **Terra-Sole** abbiamo invece (senza eseguire esplicitamente i calcoli):

$$
\begin{aligned}
a &= 1\, \text{au} = 149\,597\,870\, \text{km,} \\
e &= 0{,}0167: \\
r_{\text{perielio}} &\approx 147{,}1 \times 10^{6}\,\text{km} \\
r_{\text{afelio}} &\approx 152{,}1 \times 10^{6}\,\text{km} 
\end{aligned}
$$

in cui *afelio* e *perielio* sono i termini usati per definire rispettivamente apocentro e pericentro di corpi orbitanti intorno al Sole. 

**Mercurio**, la cui orbita è la più eccentrica tra i pianeti del Sistema Solare, mostra una differenza assai più marcata rispetto alla Terra:

$$
\begin{aligned}
a = 57{,}909 \times& 10^{6}\, \text{km}\quad e = 0{,}2056: \\
r_{\text{perielio}} &\approx 46{,}0 \times 10^{6}\,\text{km} \\
r_{\text{afelio}} &\approx 69{,}8 \times 10^{6}\,\text{km}
\end{aligned}
$$

## L'equazione  di vis viva

È importante precisare che i corpi celesti che seguono orbite ellittiche variano di continuo la loro velocità orbitale, raggiungendo la velocità massima in corrispondenza del pericentro e quella minima in corrispondenza dell'apocentro.

Le **velocità orbitali** ai due punti si ricavano dall'**equazione di vis viva** (o *equazione della forza viva* o *legge di conservazione dell'energia orbitale*), che ha la seguente forma:

$$
v^2 = GM\left(\frac{2}{r} - \frac{1}{a}\right),
$$

dove $r$ è il **raggio vettore**, cioè la distanza istantanea tra il corpo orbitante e il centro di massa del corpo centrale e $a$ è il semiasse maggiore dell'orbita. Eliminando la potenza e valutando $r$ nei rispettivi valori al pericentro ($r_{\text{peri}}$) e all'apocentro ($r_{\text{apo}}$), otteniamo le formule:

$$
\begin{aligned} v_{\text{peri}} &= \sqrt{\frac{GM}{a}\cdot\frac{1+e}{1-e}} \\\\ v_{\text{apo}} &= \sqrt{\frac{GM}{a}\cdot\frac{1-e}{1+e}} \\\end{aligned}
$$

in cui $GM$ è il parametro gravitazionale standard del corpo centrale (la costante gravitazionale per la massa del corpo) ed $e$ l'eccentricità dell'orbita.

## Un esempio pratico: la velocità orbitale della Terra

Calcoliamo a titolo di esempio la **velocità orbitale** della Terra all'afelio e al perielio, usando le due formule citate. Ci servono in primo luogo il valore di $GM$ riferito al Sole e il semiasse maggiore $a$ dell'orbita terrestre, che sono rispettivamente:

$$
\begin{aligned}
GM_{\odot} &= 1{,}32712440018\times10^{20}\,\text{m}^3/\text{s}^2 \\
a = 1\,\text{au} &= 1{,}495978707\times10^{11}\,\text{m}
\end{aligned}
$$

Cominciamo col dividere $GM$ per $a$:

$$
\frac{GM_{\odot}}{a} = \frac{1{,}32712440018 \times 10^{20}}{1{,}495978707 \times 10^{11}} \approx 8{,}87128 \times 10^8\,\text{m}^2/\text{s}^2
$$

Calcoliamo ora i due fattori legati all'eccentricità dell'orbita terrestre intorno al Sole ($e = 0,0167$):

$$
\begin{aligned}
\frac{1+e}{1-e} &= \frac{1{,}0167}{0{,}9833} \approx 1{,}03397 \\\\
\frac{1-e}{1+e} &= \frac{0{,}9833}{1{,}0167} \approx 0{,}96715\\
\end{aligned}
$$

Eseguiamo infine i calcoli che ci daranno le due velocità orbitali cercate:

$$
\begin{aligned}
v_{\text{peri}} &= \sqrt{8{,}87128 \times 10^8\ \text{m}^2/\text{s}^2 \times 1{,}03397} = \sqrt{9{,}17261 \times 10^8\ \text{m}^2/\text{s}^2} \\
&\approx 3{,}02863 \times 10^4\ \text{m/s} \approx \textbf{30,29 km/s} 
\\\\
v_{\text{apo}} &= \sqrt{8{,}87128 \times 10^8\ \text{m}^2/\text{s}^2 \times 0{,}96715} = \sqrt{8{,}57981 \times 10^8\ \text{m}^2/\text{s}^2} \\
&\approx 2{,}92917 \times 10^4\ \text{m/s} \approx \textbf{29,29 km/s}
\end{aligned}
$$

La differenza di velocità orbitale della Terra tra perielio (pericentro) e afelio (apocentro) è minima, di un solo chilometro al secondo, a causa del fatto che l'orbita terrestre è quasi perfettamente circolare. Ma la differenza esiste. Infatti, poiché per la conservazione del momento angolare:

$$
r_{\text{peri}}\,v_{\text{peri}} = r_{\text{apo}}\,v_{\text{apo}},
$$

qualsiasi corpo che segue un'orbita ellittica *deve* muoversi - e si muove - più velocemente al pericentro e più lentamente all'apocentro: è una manifestazione della seconda legge di Keplero (un corpo che percorre un'orbita ellittica copre aree uguali in tempi uguali).

## Nomenclatura

Concludiamo con un accenno alla **nomenclatura**. A seconda del corpo centrale orbitato da un altro corpo in un'orbita ellittica, l'uso astronomico ha sviluppato una serie di nomi specifici, che sostituiscono il suffisso *-centro* di apo*centro* e peri*centro* con una radice, spesso derivante dalla mitologica greca, che richiama il corpo in questione. Abbiamo già visto gli esempi di apogeo e perigeo per l'orbita della Luna intorno alla Terra e di afelio e perielio per le orbite della Terra e di Mercurio intorno al Sole. La **tabella** seguente elenca i nomi principali di orbite ellittiche denominate in base al corpo orbitato:

| Tipo di orbita | Punto più vicino | Punto più lontano | Corpo centrale | Etimologia |
|---|---|---|---|---|
| Generica | pericentro, periapside | apocentro, apoapside | qualunque | greco *kéntron* / *hápsis* |
| Geocentrica | perigeo | apogeo | Terra | *Gaia*, la Terra |
| Eliocentrica | perielio | afelio | Sole | *Hḗlios*, il Sole |
| Astrocentrica | periastro | apoastro | una stella qualsiasi | *astron*, stella (termine usato per binarie ed esopianeti) |
| Selenocentrica | perilunio (o pericinzio) | apolunio (o apocinzio) | Luna | *Cynthia*, epiteto di Artemide/Selene |
| Gioviocentrica | perigiovio | apogiovio | Giove | dal latino *Iuppiter/Iovis* |
| Cronocentrica | pericronio | apocronio | Saturno | *Krónos*, equivalente greco di Saturno |
| Areocentrica | periareo | apoareo | Marte | *Árēs*, equivalente greco di Marte |
| Ermocentrica | perierme (o periermio) | apoermio | Mercurio | *Hermễs*, equivalente greco di Mercurio |
| Citerocentrica | periciterio | apociterio | Venere | *Cythereia*, epiteto di Afrodite |
| Galattocentrica | perigalattico | apogalattico | centro della Galassia | orbite stellari attorno al centro galattico |
| Intorno a un buco nero | perimelasma / perinigricon | apomelasma / aponigricon | un buco nero | dal greco antico μέλασμα (*mélasma*), "macchia nera" o "oscurità" / dal latino *niger* (nero) |

I termini *perierme/aferme* e *periciterio/apociterio* sono di uso raro nella letteratura italiana corrente e ricorrono soprattutto in meccanica celeste storica o in traduzioni; per Mercurio e Venere si preferisce spesso descrivere la distanza minima e massima dal Sole senza ricorrere a un nome dedicato. Per la Luna, *perilunio/apolunio* è oggi la forma più diffusa, specialmente nell'ambito delle missioni spaziali, mentre *pericinzio/apocinzio* è una forma classicheggiante. I termini indicati per gli apsidi di orbite intorno a buchi neri (*perimelasma, perinigricon* ecc.) sono di uso raro e solitamente si preferisce l'uso dei termini generici pericentro e apocentro. Lo stesso vale quando il corpo centrale non rientra nelle casistiche elencate nella tabella, per esempio nel caso di un asteroide o di un pianeta minore orbitati da un satellite.
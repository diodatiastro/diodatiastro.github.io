+++
title = "Apside e Linea degli Apsidi"
date = "2026-07-19"
draft = false
+++

{{< katex />}}

## Definizione ed etimologia di apside

**Apside** (dal greco antico ἁψίς, hapsís, «arco», «volta»; plurale apsidi) è, in meccanica celeste, ciascuno dei due punti di un'orbita ellittica in cui la distanza tra il corpo orbitante e il corpo centrale raggiunge un valore estremo (minimo o massimo). L'origine del termine risale all'astronomia greca, in particolare al sistema tolemaico degli epicicli, dove indicava i punti estremi del moto apparente. Fu poi ripreso da Keplero nella descrizione delle orbite ellittiche.

La nozione di apside è generale e si applica a qualunque orbita kepleriana a due corpi (pianeti, comete, satelliti naturali e artificiali, stelle in sistemi binari, esopianeti). Il caso Sole/pianeta nel Sistema Solare è solo uno dei numerosi casi possibili.

In un'orbita ellittica si distinguono sempre due apsidi geometrici:

- **Periapside o pericentro:** il punto dell'orbita in cui il corpo orbitante si trova alla **minima distanza** dal corpo centrale. Può assumere nomi specifici (es. *perielio* per il Sole, *perigeo* per la Terra, *periastro* per una stella generica).
- **Apoapside o apocentro:** il punto dell'orbita in cui il corpo orbitante si trova alla **massima distanza** dal corpo centrale. Anch'esso può assumere nomi differenti (es. *afelio* per il Sole, *apogeo* per la Terra, *apoastro* per una stella).

Da un punto di vista cinematico, negli apsidi il vettore velocità del corpo orbitante è strettamente perpendicolare al vettore posizione (il raggio vettore), il che significa che la componente radiale della velocità è nulla ($\dot{r} = 0$).

Nelle traiettorie **paraboliche** e **iperboliche** esiste un solo apside, il *pericentro*, poiché il corpo orbitante, dopo aver raggiunto la minima distanza dal corpo centrale, si allontana indefinitamente senza raggiungere mai un punto di massima distanza.

## La linea degli apsidi e la sua funzione

La **linea degli apsidi** (chiamata talvolta anche *linea absidale*) è la retta immaginaria che congiunge i due apsidi di un'orbita ellittica. Poiché il periapside e l'apoapside sono i due vertici dell'ellisse più distanti tra loro, la linea degli apsidi coincide geometricamente con l'**asse maggiore** dell'ellisse orbitale, e passa per il centro dell'ellisse e per il fuoco occupato dal corpo centrale.

{{< figura src="immagini/linea-degli-apsidi.jpg" alt="Orbita ellittica con linea degli apsidi" caption="Orbita ellittica con linea degli apsidi." >}}

Esiste una linea degli apsidi anche per le traiettorie aperte ([paraboliche]({{< relref "/dizionario/eccentricita/#traiettoria-parabolica" >}}) e [iperboliche]({{< relref "/dizionario/eccentricita/#traiettoria-iperbolica" >}})), intendendo in questo caso la retta che passa per il fuoco occupato dal corpo centrale e per il periapside, anche se non esiste un apoapside.

Ritornando alle orbite ellittiche, se indichiamo con $a$ il semiasse maggiore dell'orbita, la lunghezza della linea degli apsidi è:

$$
L_{\text{apsidi}} = 2a
$$

e, per definizione di ellisse, la somma delle distanze periapside-fuoco e apoapside-fuoco (misurate lungo questa linea, ma sui due lati opposti del fuoco) restituisce proprio il diametro maggiore:

$$
r_{\text{peri}} + r_{\text{apo}} = 2a
$$

Le distanze dei due apsidi dal fuoco si esprimono in funzione di $a$ e dell'eccentricità $e$ come:

$$
\begin{aligned}
r_{\text{peri}} &= a\left(1 - e\right) \\
r_{\text{apo}} &= a\left(1 + e\right),
\end{aligned}
$$

relazioni già incontrate nella voce [Apocentro e pericentro]({{< relref "/dizionario/apocentro-e-pericentro/index" >}}), di cui la linea degli apsidi costituisce il supporto geometrico naturale.

La linea degli apsidi individua l'**orientazione** dell'orbita all'interno del suo piano, poiché identifica la direzione lungo la quale si trovano il pericentro e l'apocentro. Tale orientazione è descritta da uno dei sei elementi orbitali kepleriani classici: l'**argomento del pericentro** $\boldsymbol{\omega}$ (omega), definito come l'angolo tra il nodo ascendente e la direzione del pericentro, misurato nel piano orbitale nel verso del moto.

Per orbite non perturbate, tipiche di un sistema ideale a due corpi puro, la linea degli apsidi è **fissa** nello spazio. Nel mondo reale, tuttavia, vi sono sempre effetti perturbanti (schiacciamento del corpo centrale, interazioni con altri corpi, effetti relativistici). Ciò fa sì che la linea degli apsidi non sia fissa, ma ruoti lentamente nel tempo, un fenomeno noto come **precessione apsidale** (o precessione del pericentro). L'esempio storicamente più celebre è l'anomala precessione del perielio di Mercurio, spiegata solo parzialmente dalle perturbazioni basate sulla gravità newtoniana e risolta da Einstein con la relatività generale.
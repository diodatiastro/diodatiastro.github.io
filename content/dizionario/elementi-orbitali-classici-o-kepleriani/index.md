+++
title = "Elementi orbitali classici (o kepleriani)"
date = "2026-07-22"
draft = false
+++

{{< katex />}}

## Definizione

Gli elementi orbitali classici (detti anche *elementi kepleriani*) sono **sei quantità** che, nell'ambito del problema dei due corpi, individuano in modo *univoco* l'**orbita** di un oggetto celeste e la sua **posizione** lungo di essa in un dato istante, detto **epoca** $t_0$. I primi **cinque** elementi descrivono completamente l'orbita come oggetto geometrico nello spazio; il **sesto** stabilisce dove si trova il corpo su di essa in un determinato istante.

Questi parametri rappresentano una soluzione ideale: descrivono un'orbita kepleriana perfetta (non perturbata) e costituiscono quindi un'approssimazione della realtà. Nella pratica, gli elementi variano nel tempo a causa delle perturbazioni gravitazionali di altri corpi, per cui si parla spesso di **elementi osculatori** (validi in un istante preciso).

Per comprendere appieno questi parametri, immaginiamo l'orbita come un'ellisse posta nello spazio tridimensionale. L'ellisse è orientata rispetto a un **piano** di riferimento (solitamente il piano dell'eclittica per il sistema solare o il piano equatoriale per i satelliti terrestri) e a una **direzione** di riferimento (il punto vernale ♈ o punto gamma[^1]).

## Semiasse maggiore ed eccentricità definiscono la geometria dell'ellisse

I primi due parametri definiscono la **geometria** dell'ellisse sul piano orbitale. Essi sono:

- **il semiasse maggiore $a$.** È il semiasse principale dell'ellisse e corrisponde alla metà dell'asse maggiore, cioè alla metà della distanza fra pericentro e apocentro. Geometricamente definisce la *dimensione dell'orbita* e, dal punto di vista fisico, determina il periodo di rivoluzione $T$ del corpo orbitante in base alla terza legge di Keplero:

$$T = 2\pi \sqrt{\frac{a^3}{GM}}$$

dove $GM$ (o $\mu$) è il parametro gravitazionale del corpo centrale, assumendo trascurabile la massa del corpo orbitante. Per traiettorie **paraboliche** ($e = 1$) il semiasse maggiore tende all'infinito e si preferisce il **semi-lato retto** $p$ o la **distanza al pericentro** $q$; per traiettorie **iperboliche** ($e &gt; 1$) il semiasse maggiore è formalmente negativo;

- **l'[eccentricità]({{< relref "/dizionario/eccentricita/" >}}) $e$.** Indica quanto l'orbita si discosta da una circonferenza perfetta:
  - $e = 0$: orbita perfettamente circolare;
  - $0 &lt; e &lt; 1$: orbita ellittica (è il caso dei pianeti e delle loro lune);
  - $e = 1$: orbita parabolica (caso limite tra orbite chiuse e traiettorie di fuga iperboliche);
  - $e &gt; 1$: traiettoria iperbolica.

## Tre parametri angolari descrivono l'orientamento spaziale dell'orbita

Vi sono poi tre **parametri angolari** che descrivono come il piano dell'orbita e l'orbita stessa sono orientati nello spazio tridimensionale rispetto ai riferimenti scelti:

- **l'inclinazione $i$** è l'angolo diedro[^2] fra il piano orbitale e il piano di riferimento, misurato da $0^{\circ}$ a $180^{\circ}$. Per $i &lt; 90°$ il moto è diretto: va nello stesso senso del piano di riferimento, quindi è progrado rispetto al senso di rotazione del corpo centrale; per $i &gt; 90°$ il moto è retrogrado. Inoltre, un'inclinazione di $0^{\circ}$ indica un'orbita perfettamente adagiata sul piano di riferimento (es. l'equatore), mentre un'inclinazione di $90^{\circ}$ indica un'orbita polare;

- **la longitudine del nodo ascendente $\Omega$ (Omega)** è l'angolo da $0^{\circ}$ a $360^{\circ}$ misurato nel piano di riferimento dalla direzione di riferimento (il punto vernale nel Sistema Solare) al nodo ascendente. In termini più semplici, indica come è orientato il piano orbitale rispetto alla direzione di riferimento;

- l'**argomento del pericentro $\omega$ (omega)** è l'angolo, misurato nel piano orbitale da $0^{\circ}$ a $360^{\circ}$ nel senso del moto, fra il nodo ascendente e il pericentro. Indica la rotazione dell'asse maggiore rispetto alla linea dei nodi. Quando l'inclinazione è prossima a zero, $\omega$ diventa indeterminato e si preferisce la [longitudine del pericentro]({{< relref "/dizionario/longitudine-del-pericentro/" >}}) $\varpi = \Omega + \omega$.

## L'anomalia media come parametro temporale

Infine, vi è un ultimo parametro che serve a determinare la **posizione temporale** del corpo lungo la sua traiettoria. È un valore statico riferito a un momento preciso, detto **epoca** e indicato con $t_0$. Il parametro è denominato **anomalia media all'epoca** ($M_0$) oppure **tempo del passaggio al pericentro** ($T_0$).

L'[anomalia media]({{< relref "/dizionario/anomalia-vera-anomalia-media-anomalia-eccentrica/" >}}#lanomalia-media) $M$ è un angolo fittizio che cresce in modo perfettamente lineare nel tempo. Si basa su un'orbita circolare ideale che ha lo stesso periodo orbitale dell'orbita reale: in questo modello cinematico, il corpo celeste si muove a velocità costante, compiendo un giro completo di $360^{\circ}$ nello stesso tempo impiegato dal corpo reale. Per costruzione, i due moti coincidono al pericentro ($0^{\circ}$) e all'apocentro ($180^{\circ}$), mentre nel resto dell'orbita il corpo reale risulta alternativamente in anticipo o in ritardo rispetto al corpo fittizio in virtù della seconda legge di Keplero.

Va notato che, nel caso di orbita circolare ($e = 0$), l'argomento del pericentro $\omega$ non è definito, e con esso perde significato anche l'anomalia media $M_0$ come angolo misurato dal pericentro. In questi casi si utilizza la longitudine media $\lambda = \Omega + \omega + M$, che rimane ben definita e cresce linearmente nel tempo con velocità angolare pari al moto medio $n$.

L'anomalia media rappresenta il punto di partenza fondamentale di un sistema di calcoli che permette di ricavare la posizione istantanea effettiva del corpo celeste (l'anomalia vera). Questa serie di passaggi matematici - equazione di Keplero e trasformazione tra anomalie - è descritta in un'[apposita voce]({{< relref "/dizionario/anomalia-vera-anomalia-media-anomalia-eccentrica/" >}}) del dizionario.

{{< figura 
src="immagini/elementi-orbitali-classici.svg" 
alt="Illustrazione grafica degli elementi orbitali della Cometa di Halley rispetto al piano dell'orbita terrestre. Adattamento da un lavoro di Christophe Yamahata." 
caption="Illustrazione grafica degli elementi orbitali della Cometa di Halley rispetto al piano dell'orbita terrestre. Adattamento da un lavoro di Christophe Yamahata."
>}}

## In sintesi

Il semiasse maggiore e l'eccentricità definiscono forma e dimensioni dell'orbita; inclinazione, longitudine del nodo ascendente e argomento del pericentro ne determinano l'orientamento nello spazio; l'anomalia media all'epoca (o il tempo del passaggio al pericentro) fissa il riferimento temporale dell'orbita in un istante dato, da cui si ricava, attraverso l'[equazione di Keplero]({{< relref "/dizionario/anomalia-vera-anomalia-media-anomalia-eccentrica/" >}}#eq-keplero), la posizione istantanea reale del corpo lungo la traiettoria.

[^1]: Il punto vernale (♈) è la direzione di riferimento comune, ma in altri contesti, ad esempio lo studio degli esopianeti, si usa come riferimento il piano del cielo.

[^2]: Un angolo diedro è l'angolo formato da due semipiani aventi la stessa retta come origine (spigolo). Si misura come l'angolo piano ottenuto intersecando i due semipiani con un piano perpendicolare allo spigolo. In meccanica celeste, è il tipo di angolo che definisce **l'inclinazione** reciproca tra due piani orbitali o tra un piano orbitale e un piano di riferimento.
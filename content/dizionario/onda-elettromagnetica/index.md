+++ 
title = "Onda elettromagnetica" 
date = "2026-07-27" 
draft = false 
+++

{{< katex />}}

## Etimologia e storia

Il termine nasce dalla combinazione degli aggettivi *elettrico* e *magnetico*. fu James Clerk Maxwell, tra il 1861 e il 1865, a mostrare per primo che le proprie equazioni del campo elettromagnetico ammettono soluzioni ondulatorie capaci di propagarsi anche nel vuoto, a una velocità coincidente con quella già nota per la luce. Da qui la sua congettura che la luce stessa fosse un fenomeno elettromagnetico. La conferma sperimentale arrivò solo nel 1887, quando Heinrich Hertz generò e rilevò in laboratorio onde di questo tipo, dando realtà fisica a una previsione fino ad allora solo teorica.

{{% box tipo="definizione" titolo="" %}} 
Un'onda elettromagnetica è una **perturbazione** che si propaga nello spazio trasportando energia e informazione, generata dall'oscillazione accelerata di cariche elettriche (ad esempio, elettroni in movimento). È costituita da un **campo elettrico** ($E$) e un **campo magnetico** ($B$) - due grandezze vettoriali - che oscillano in modo sinusoidale e coordinato, mantenendosi sempre **perpendicolari** tra loro e **ortogonali** rispetto alla direzione di propagazione dell'onda: per questo si dice che l'onda è _trasversale_.
{{% /box %}}

{{< figura src="immagini/onda-elettromagnetica.png" 
alt="Rappresentazione di un'onda elettromagnetica" 
caption="Rappresentazione di un'onda elettromagnetica con i campi elettrico e magnetico che si propagano perpendicolarmente l'uno all'altro. Adattato da [GISRSStudy](https://gisrsstudy.com/electromagnetic-spectrum/)."
>}}

## Propagazione nel vuoto: la velocità della luce

A differenza delle onde meccaniche (suono, onde sismiche), l'onda elettromagnetica si propaga anche nel vuoto, non avendo bisogno di alcun mezzo di trasmissione. Può essere riflessa, rifratta (cambiare direzione), assorbita o diffusa dalla materia che incontra durante la propagazione.

Tutte le onde elettromagnetiche, dalle onde radio ai raggi gamma, viaggiano nello spazio vuoto alla stessa velocità, la velocità della luce $c$. Dal 1983 $c$ non è più una grandezza misurata sperimentalmente, ma una costante _definita_ con valore esatto, legato indissolubilmente alla definizione di metro:

$$c = 299\,792{,}458\ \mathrm{km/s}$$

## Formalismo matematico

Nel vuoto, le equazioni di Maxwell si riducono, per ciascuna componente dei campi $E$ e $B$, a un'equazione d'onda della forma

$$\nabla^2 E = \mu_0 \varepsilon_0 \frac{\partial^2 E}{\partial t^2}$$

(e analogamente per $B$), dove $\nabla^2$ è l'operatore di Laplace (o *laplaciano*), che applicato a una grandezza ne misura la curvatura spaziale nelle tre direzioni; $E$ è qui una componente scalare del campo elettrico, funzione della posizione e del tempo $t$; $\partial^2 E/\partial t^2$ ne è la derivata seconda rispetto al tempo; $\mu_0$ è la permeabilità magnetica del vuoto[^permeabilita] e $\varepsilon_0$ la permittività elettrica del vuoto[^permittivita]. Per riconoscere in questa espressione un'equazione d'onda vera e propria, conviene confrontarla con la sua forma generale, valida per qualunque grandezza $f$ che si propaghi come un'onda con velocità $v$:

$$\nabla^2 f = \frac{1}{v^2} \frac{\partial^2 f}{\partial t^2}$$

Il confronto termine a termine tra questa forma generale e l'equazione ottenuta per $E$ mostra che il ruolo di $1/v^2$ è svolto dal prodotto $\mu_0 \varepsilon_0$:

$$\frac{1}{v^2} = \mu_0 \varepsilon_0 \quad\Longrightarrow\quad v^2 = \frac{1}{\mu_0 \varepsilon_0} \quad\Longrightarrow\quad v = \frac{1}{\sqrt{\mu_0 \varepsilon_0}}$$

Poiché questa velocità coincide, numericamente, con quella già nota sperimentalmente per la luce, si identifica $v$ con $c$:

$$c = \frac{1}{\sqrt{\mu_0 \varepsilon_0}}$$

una relazione notevole, perché lega la velocità della luce a due sole costanti elettromagnetiche, senza alcun riferimento diretto all'ottica: è esattamente questa coincidenza numerica, richiamata nell'[Etimologia]({{< relref "/dizionario/onda-elettromagnetica/" >}}#etimologia), ad aver portato Maxwell a ipotizzare la natura elettromagnetica della luce.

Le ampiezze dei due campi non sono indipendenti: nel vuoto risultano legate dalla relazione

$$B = \frac{E}{c}$$
## Un paio di esempi numerici

### Relazione tra i campi

Per un'onda elettromagnetica nel vuoto con campo elettrico di ampiezza $E = 1000\ \mathrm{V/m}$ (ordine di grandezza tipico della luce solare diretta in prossimità della superficie terrestre), l'ampiezza del campo magnetico associato è

$$B = \frac{E}{c} = \frac{1000\ \mathrm{V/m}}{299\,792\,458\ \mathrm{m/s}} \approx 3{,}34\times10^{-6}\ \mathrm{T}$$

un valore paragonabile, per ordine di grandezza, al campo magnetico terrestre in superficie.

### Lunghezza d'onda e frequenza

Dalla relazione $c = \lambda\nu$, un'onda radio FM a $\nu = 100\ \mathrm{MHz}$ ha lunghezza d'onda

$$\lambda = \frac{c}{\nu} = \frac{299\,792\,458\ \mathrm{m/s}}{100\times10^{6}\ \mathrm{Hz}} \approx 3\ \mathrm{m}$$

[^permeabilita]: Grandezza fisica che esprime la capacità di un mezzo (nel vuoto, la costante $\mu_0$) di sostenere la formazione di un campo magnetico al proprio interno; compare, ad esempio, nella legge di Biot-Savart e nella legge di Ampère, dove lega l'intensità di una corrente elettrica al campo magnetico da essa generato.

[^permittivita]: Grandezza fisica che esprime la capacità di un mezzo (nel vuoto, la costante $\varepsilon_0$) di "lasciarsi attraversare" da un campo elettrico; compare, ad esempio, nella legge di Coulomb, dove lega la forza tra due cariche elettriche alla loro distanza.
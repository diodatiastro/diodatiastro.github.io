+++
title = "Momento angolare"
date = "2026-08-05"
draft = false
+++

{{< katex />}}

## Etimologia

_Momento_ deriva dal latino _momentum_, imparentato con _movere_ ("muovere"); nel linguaggio della meccanica classica il termine fu adottato per indicare l'efficacia di una grandezza vettoriale - una forza, una quantità di moto - applicata a una certa distanza da un punto o da un asse di riferimento, per analogia con il "momento" di una leva. _Angolare_ deriva invece dal latino _angulus_, "angolo", e specifica che la grandezza in questione è associata al moto di rotazione anziché di traslazione.

{{% box tipo="definizione" titolo="" %}} 
In fisica, il momento angolare (o momento della quantità di moto) è la grandezza vettoriale che misura la quantità di moto rotazionale di un corpo rispetto a un punto o a un asse di riferimento. Combina la distribuzione della massa rispetto a quel punto con la velocità del moto rotatorio. Il suo valore dipende quindi dalla scelta del punto di riferimento; per un sistema isolato, tuttavia, il momento angolare totale è lo stesso rispetto a qualsiasi punto fisso o al baricentro[^bari]. Un corpo con momento angolare elevato è più difficile da fermare (richiede un momento torcente maggiore, o applicato più a lungo) e più difficile da deviare nella direzione dell’asse di rotazione.
{{% /box %}}

## Nota storica

La formulazione matematica rigorosa del principio si deve a Leonhard Euler (italianizzato in Eulero), che a partire dal 1744 applicò sistematicamente le nozioni di momento lineare e di momento angolare alla dinamica dei sistemi, e la espresse compiutamente nel 1775. La relazione che lega la variazione temporale del momento angolare al momento torcente applicato è nota oggi come _seconda legge di Eulero_, distinta e indipendente dalle leggi di Newton. 

Il momento angolare conquistò la sua piena maturità matematica nel XVIII e XIX secolo grazie alla meccanica analitica di Lagrange e Hamilton. Nel XX secolo, la meccanica quantistica ne ha fatto uno dei suoi pilastri fondamentali, introducendo concetti come il "momento angolare orbitale" e lo "spin" per descrivere la struttura degli atomi e delle particelle subatomiche.

## Formalismo matematico minimo

La formula fondamentale del momento angolare è:
$$
\vec{L} = \vec{r} \times \vec{p} = \vec{r} \times m\vec{v}
$$
in cui:

- $\vec{r}$ è il vettore posizione della particella o del sistema in rotazione rispetto a un punto di riferimento (di solito l’asse o il centro di rotazione);  
- $\vec{p} = m\vec{v}$ è la quantità di [moto lineare]({{< relref "/dizionario/quantita-di-moto-o-momento-lineare/" >}}) (massa per velocità).
- $\times$ è il prodotto vettoriale. 

Il risultato $\vec{L}$ è un vettore **perpendicolare** al piano formato da $\vec{r}$ e $\vec{v}$, in cui direzione e verso possono essere ricavati tramite la regola della mano destra [^1].

Il **modulo** del prodotto vettoriale (cioè la sua "intensità", senza direzione e verso) è:
$$
L = |\vec{r}|\,|\vec{p}|\,\sin\theta = m\,v\,r\,\sin\theta
$$
dove $\theta$ è l’angolo tra i vettori $\vec{r}$ e $\vec{v}$.

{{< figura 
src="immagini/prodotto-vettoriale.png" 
width="" 
alt="Rappresentazione grafica del prodotto vettoriale $\vec{r}\times\vec{p}$ con l'illustrazione della regola della mano destra." 
caption="Rappresentazione grafica del prodotto vettoriale $\vec{r}\times\vec{p}$ con l'illustrazione della regola della mano destra."
>}}

Un caso particolare è il **moto circolare**. Quando una particella in rotazione si muove su una circonferenza e $\vec{v}$ è sempre tangente (perpendicolare a $\vec{r}$), allora $\theta = 90^\circ$ e $\sin 90^\circ = 1$. Quindi la formula si semplifica in [^2]:

$$L = m\,v\,r$$
## Alcuni esempi numerici

Per apprezzare la crescita esponenziale del momento angolare, usiamo tre esempi di scala crescente. 

Partiamo da qualcosa di piccolo. Una pallina da tennis di massa $m = 0,058\,\text{kg}$ attaccata a un filo lungo $r = 1,2\,\text{m}$ ruota a $\omega = 3{,}0\,\text{rad/s}$ su un piano orizzontale. Calcoliamo il momento angolare rispetto al centro di rotazione:
$$
\begin{aligned}
  L &= m r^2 \omega = 0,058 \times (1,2)^2 \times 3,0 
\\
  &= 0,058 \times 1,44 \times 3,0 
  \\
  &= 0,25056 \,\text{kg\,m}^2\text{s}^{-1}
  \end{aligned}
  $$
L'esempio ci permette anche di chiarire le **unità di misura** usate nel Sistema Internazionale (SI) per il momento angolare: $\text{kg}\,\text{m}^2\,\text{s}^{-1}$.

Passiamo ora a qualcosa di più sostanzioso: un satellite artificiale con una massa di $500\ \mathrm{kg}$ percorre un'orbita circolare di $7\,000\ \mathrm{km}$ di raggio con una velocità di $7,5\ \mathrm{km/s}$.

Convertendo le unità nel SI, il raggio diventa $r = 7,0\times10^6\ \mathrm{m}$ e la velocità $v = 7,5\times10^3\ \mathrm{m/s}$. Svolgendo i calcoli, otteniamo:
$$  
\begin{align}
L &= 500 \times 7,5\times10^3 \times 7,0\times10^6  
\\
&= 2,625\times10^{13}\ \mathrm{kg\,m^2\,s^{-1}}. \end{align} 
$$
Si tratta di un numero enorme: oltre $26\,000$ miliardi di kg per metro quadro al secondo. La crescita del momento angolare è rapidissima, perché dipende dal prodotto di tre quantità (massa, velocità e distanza dal centro di rotazione) o dal quadrato della distanza se espresso in termini di velocità angolare $(L = m r^2 \omega)$.

Se spostiamo il calcolo del momento angolare a livello planetario otteniamo infatti numeri incredibili, quasi incomprensibili per la mente umana. Calcoliamo ad esempio il momento angolare orbitale della Terra attorno al Sole[^3]. I dati di massa, raggio e velocità orbitale del nostro pianeta sono i seguenti:

- massa della Terra: $m = 5{,}972\times10^{24}\,\text{kg}$
- raggio orbitale: $r = 1{,}496\times10^{11}\,\text{m} = 1\,\text{au}$
- velocità orbitale media: $v = 29{,}78\,\text{km/s} = 2{,}978\times10^{4}\,\text{m/s}$

Svolgendo i calcoli, otteniamo:
$$ 
\begin{aligned}
L = m\,v\,r &= (5{,}972\times10^{24})\times(2{,}978\times10^{4})\times(1{,}496\times10^{11}) 
\\
&\approx 2{,}66\times10^{40}\,\text{kg}\,\text{m}^2\,\text{s}^{-1} 
\end{aligned}
$$
Il risultato è circa $26\,600$ miliardi di miliardi di miliardi di miliardi di $\text{kg}$ *per metro quadrato* al secondo.

## Il momento angolare si conserva

Una caratteristica fondamentale del momento angolare è che è una **grandezza conservata**: in assenza di momenti torcenti esterni netti applicati al sistema, il momento angolare totale *rimane costante nel tempo*. Questo principio di conservazione ha un ruolo centrale tanto in [meccanica celeste]({{< relref "/dizionario/meccanica-celeste/" >}}) (è, ad esempio, l'origine fisica della seconda legge di Keplero) quanto in astrofisica stellare, dove governa fenomeni come il collasso gravitazionale, la formazione dei dischi di accrescimento e la rotazione delle stelle compatte.

La **legge di conservazione** discende dalla seconda legge di Eulero:
$$ \frac{d\vec{L}}{dt} = \vec{\tau} $$
dove $\vec{\tau}$ è il *momento torcente* netto esterno. Se $\vec{\tau}=0$, allora $\vec{L}$ è costante: è questa relazione, applicata al problema dei due corpi con forza centrale gravitazionale, a garantire la seconda legge di Keplero.

Una precisazione importante: la conservazione vale rigorosamente solo se si considerano *tutte* le interazioni (anche quelle non meccaniche, come i campi elettromagnetici). In sistemi aperti o con dissipazione (attrito, radiazione) il momento angolare può essere trasferito all’ambiente.

{{< figura 
src="immagini/intuizione.png" 
width="" 
alt="Una pattinatrice sul ghiaccio usa il momento angolare" 
caption="Un esempio per comprendere in modo intuitivo la conservazione del momento angolare"
>}}

## Un esempio numerico di conservazione

Consideriamo una stella massiccia in fase di collasso che ruota uniformemente, modellata come una sfera omogenea $(I = \frac{2}{5} M R^2)$[^omo]. I valori scelti hanno l'ordine di grandezza tipico di una stella evoluta di massa elevata prossima al collasso:

- Raggio iniziale: $R_1 = 7 \times 10^8\text{ m}$
- Periodo di rotazione iniziale: $T_1 = 30\text{ giorni} = 2{,}592 \times 10^6\text{ s}$
- Raggio finale dopo il collasso in una stella di neutroni: $R_2 = 12\text{ km} = 1{,}2 \times 10^4\text{ m}$

Per la conservazione del momento angolare ($L_1 = L_2$), supponendo che la massa $M$ rimanga costante: $$I_1 \omega_1 = I_2 \omega_2 \implies R_1^2 \left(\frac{2\pi}{T_1}\right) = R_2^2 \left(\frac{2\pi}{T_2}\right)$$ Risolvendo per il nuovo periodo $T_2$, otteniamo: $$T_2 = T_1 \left(\frac{R_2}{R_1}\right)^2 = (2{,}592 \times 10^6\text{ s}) \times \left(\frac{1{,}2 \times 10^4}{7 \times 10^8}\right)^2 \approx 7{,}6 \times 10^{-4}\text{ s}$$
Il periodo di rotazione crolla da $30$ giorni a circa $0{,}76$ **millisecondi.**

{{< figura 
src="immagini/collasso-stellare.png" 
width="" 
alt="In mancanza di forze esterne il momento angolare di una stella si conserva durante il collasso gravitazionale" 
caption="In mancanza di forze esterne il momento angolare di una stella si conserva durante il collasso gravitazionale"
>}}

Questo valore va però considerato *un limite ideale*, non una stima realistica. Il calcolo assume infatti che l'intero momento angolare iniziale *si conservi rigidamente* fino alla stella di neutroni, ignorando i meccanismi di trasporto del momento angolare — in particolare quello di origine magnetica, legato alla dinamo di Tayler-Spruit — attivi durante il collasso del nucleo[^4]. 

Dall'altro lato, l'ipotesi di una sfera omogenea $(I=\frac{2}{5}MR^2)$ sovrastima ulteriormente l'effetto. Una stella reale non ha densità uniforme: il Sole, ad esempio, ha un coefficiente $I/MR^2 \approx 0{,}059$, ben lontano dallo $0{,}4$ di una sfera omogenea, perché la materia è concentrata principalmente verso il centro. Una struttura pre-collasso sarebbe presumibilmente altrettanto o più condensata. 

La stella di neutroni risultante, al contrario, ha una struttura interna assai più uniforme[^5]. Trascurare questa asimmetria fra i coefficienti pre- e post-collasso produce una seconda sottostima di $T_2$​, che va nella stessa direzione dell'effetto magnetico discusso sopra.

Il calcolo semplificato resta comunque istruttivo: pur sovrastimando l'entità dell'effetto, coglie correttamente il meccanismo fisico alla base dell'estrema velocità di rotazione delle pulsar nate dal collasso stellare.

## Il momento angolare nel regime relativistico

In **relatività ristretta** la quantità di moto di una particella non è più semplicemente $\vec{p} = m\vec{v}$, ma include il fattore di Lorentz $\gamma$:
$$ \vec p = \gamma m \vec v, \qquad \gamma = \frac{1}{\sqrt{1-v^2/c^2}} $$
per cui il momento angolare orbitale diventa $\vec{L} = \vec{r} \times \gamma m \vec{v}$. La legge di conservazione in assenza di momenti torcenti esterni resta formalmente valida.

Anche in **relatività generale** il momento angolare resta una grandezza conservata per un corpo che orbita liberamente (cioè sotto il solo effetto della gravità) attorno a un oggetto compatto descritto da una metrica a simmetria assiale, come quella di Schwarzschild o di Kerr[^6]. 

La conservazione del momento angolare è, anche in questo caso, conseguenza diretta di quella simmetria: ogni volta che le proprietà di un sistema restano invariate sotto una determinata trasformazione (qui, una rotazione), esiste una grandezza che si conserva lungo il moto. Questo principio generale prende il nome di teorema di Noether[^7] e collega simmetrie e leggi di conservazione tanto in meccanica classica quanto in relatività.

Nel caso della metrica di Schwarzschild, il momento angolare specifico (cioè per unità di massa) si scrive:
$$
L = r^2\,\frac{d\phi}{d\tau}
$$
dove $\phi$ è l'**angolo azimutale**, la coordinata che indica la posizione della particella lungo la sua orbita attorno all'oggetto centrale (in modo analogo alla longitudine sulla superficie terrestre) e $\tau$ è il tempo proprio della particella, cioè il tempo misurato da un orologio che la accompagni nel moto. Questa grandezza compare direttamente nel calcolo dell'orbita circolare stabile più interna (ISCO, da _innermost stable circular orbit_), il raggio al di sotto del quale un'orbita stabile non è più possibile intorno a un oggetto compatto come un buco nero.

## Importanza del momento angolare

Il calcolo e la conoscenza del momento angolare è fondamentale in diversi campi dell'attività umana, dalle scienze teoriche a quelle applicate, fino alla navigazione e allo sport. Di seguito alcuni dei principali campi di applicazione:

- **Astrofisica.** Spiega la formazione dei dischi di accrescimento attorno a buchi neri e protostelle, la stabilizzazione delle galassie a spirale e le elevate velocità di rotazione delle stelle compatte (nane bianche e stelle di neutroni).
- **Ingegneria aerospaziale.** È alla base del funzionamento dei giroscopi e delle ruote di reazione *(reaction wheels)* per il controllo dell'orientamento e della stabilità dei satelliti e dei telescopi spaziali come Hubble o JWST. Grazie alla conservazione del momento angolare, le correzioni di assetto dei telescopi spaziali possono essere fatte senza consumare prezioso propellente.
- **Fisica atomica e quantistica.** Il momento angolare orbitale e lo spin degli elettroni determinano la struttura dei livelli energetici atomici, le regole di selezione per le transizioni spettrali e il magnetismo della materia.
- **Diagnostica medica.** Nella Risonanza Magnetica (MRI), si sfrutta il momento angolare intrinseco delle particelle (lo *spin* degli elettroni e dei nuclei atomici, in particolare dell'idrogeno) per generare segnali radio interpretabili come immagini anatomiche.
- **Ingegneria meccanica.** Il momento angolare è centrale nella progettazione di turbine, eliche, pale eoliche e rotori, nell'analisi di collisioni e urti non centrali.
- **Geofisica**. La conservazione del momento angolare contribuisce a comprendere la rotazione terrestre, la precessione dell'asse e gli scambi di momento angolare tra atmosfera, oceani e pianeta.
- **Sport.** Tuffatori, ginnasti e sciatori freestyle manipolano il proprio momento d'inerzia (chiudendosi a palla o distendendosi) per accelerare o rallentare avvitamenti e capriole in volo.

Se l'[energia]({{< relref "/dizionario/energia/" >}}) è la grandezza che descrive la capacità di un sistema di compiere lavoro e la quantità di moto descrive la sua tendenza a proseguire in linea retta, il momento angolare descrive invece la sua tendenza a mantenere inalterato il proprio stato di rotazione. È per questo che compare in fenomeni apparentemente lontanissimi tra loro: da una trottola a una galassia, da una pattinatrice a una pulsar.


[^bari]: Per un sistema isolato il momento angolare totale può essere calcolato indifferentemente rispetto al baricentro o rispetto a un qualsiasi punto fisso (in un sistema di riferimento inerziale appropriato): i due valori o coincidono oppure differiscono per una costante, e in entrambi i casi la grandezza si conserva.

[^1]: La regola della mano destra è un metodo empirico per determinare facilmente la **direzione e il verso** di $\vec{L}$. Il modo più intuitivo per applicarla è chiudere le dita della mano destra nel senso in cui l'oggetto sta ruotando. Distendendo il **pollice** otterremo la direzione del vettore momento angolare $\vec{L}$ (e anche della velocità angolare $\vec{\omega}$).

[^2]: In questo caso si può anche scrivere: $L = I\omega$, in cui $I = mr^{2}$ è il momento d’inerzia della particella rispetto al centro e $\omega = v/r$  è la velocità angolare.

[^3]: L'esempio approssima l'orbita terrestre ad un cerchio: l'[eccentricità]({{< relref "/dizionario/eccentricita/" >}}) reale, pari a $0{,}0167$, introduce una correzione trascurabile ai fini dell'ordine di grandezza dei calcoli.

[^omo]: Nella formula citata $I$ è il momento d'inerzia, cioè la resistenza a qualsiasi variazione della rotazione, $M$ è la massa rotante, $r$ è il raggio che dice dove è concentrata la materia in rotazione. Nella formula $r$ scala al quadrato ($r^2$), il che indica l'enorme importanza della distanza della massa dall'asse di rotazione nei calcoli sul momento angolare e sulla sua conservazione. La frazione $\frac{2}{5}=0{,}40$ descrive la geometria di una sfera omogenea.

[^4]: [Modelli che includono questi effetti](https://ui.adsabs.harvard.edu/abs/2005ApJ...626..350H/abstract) prevedono periodi di nascita più lunghi di circa un ordine di grandezza, nell'intervallo dei millisecondi anziché dei decimi di millisecondo: da progenitori di $15$, $20$ e $35$ masse solari si ottengono rispettivamente periodi iniziali di circa $11$, $7$ e $3\,\text{ms}$. Questi valori sono coerenti con i periodi di nascita dedotti osservativamente per le pulsar giovani conosciute, come la Pulsar del Granchio, nata con un periodo stimato di circa $19\,\text{ms}$.

[^5]: $I/MR^2 \approx 0{,}35–0{,}4$, secondo le relazioni empiriche fra momento d'inerzia e compattezza per le equazioni di stato della materia nucleare.

[^6]: Una **metrica**, in questo contesto, è l'espressione matematica che stabilisce come si misurano le distanze e gli intervalli di tempo nello spaziotempo curvato dalla gravità: è ciò che prende il posto, in relatività generale, della nozione euclidea di distanza. Una metrica "a simmetria assiale" è una metrica che non cambia se si ruota lo spazio attorno a un asse particolare (qui, l'asse di rotazione dell'oggetto centrale).

[^7]: Risultato fondamentale della fisica matematica, dovuto a Emmy Noether, secondo cui a ogni simmetria continua di un sistema fisico corrisponde una **quantità conservata**. In forma intuitiva: se le leggi non cambiano quando trasliamo il sistema nello spazio, si conserva la quantità di moto; se non cambiano nel tempo, si conserva l’energia; se non cambiano per rotazioni, si conserva il momento angolare.
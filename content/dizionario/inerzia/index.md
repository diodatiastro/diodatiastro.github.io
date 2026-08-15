+++
title = "Inerzia"
date = "2026-08-14"
draft = false
+++

{{< katex />}}

## Etimologia

Dal latino *inertia*, derivato di *iners* («inerte»), significa letteralmente «mancanza di attività, pigrizia, svogliatezza». Il termine aveva inizialmente un connotato morale e indicava l’assenza di attività o capacità. Fu poi adottato in fisica nel XVII secolo per designare la proprietà dei corpi di opporsi ai cambiamenti del proprio stato di moto. Fu introdotto nel linguaggio scientifico moderno da Keplero nell'opera _Epitome Astronomiae Copernicanae_ (1618-1621). Fu poi ripreso da Newton nei *Principia* (1687), il quale diede alla parola "inerzia" il significato rigoroso ancora oggi valido.

{{% box tipo="definizione" titolo="" %}} 
L’inerzia è la proprietà della materia per cui un corpo mantiene il proprio stato di quiete o di moto rettilineo uniforme in assenza di una forza risultante. La massa del corpo determina quanto sia difficile da accelerare a parità di forza applicata.

L'inerzia è la proprietà intrinseca della materia di opporre resistenza a qualsiasi variazione del suo stato di moto. Ciò implica che, in assenza di forze esterne nette, un corpo inizialmente fermo rimane fermo, mentre un corpo in moto rettilineo uniforme mantiene costante a tempo indeterminato la propria **velocità** (sia in modulo che in direzione)[^1]. La misura quantitativa dell’inerzia è la **massa inerziale**, una grandezza scalare che, nel Sistema Internazionale, si misura in chilogrammi ($\text{kg}$). A parità di forza applicata, maggiore è la massa, minore è l’accelerazione (o la decelerazione) prodotta. 

Per descrivere compiutamente il concetto di inerzia sono necessari due chiarimenti. Il primo è che non esiste una "forza d'inerzia", espressione tipica nel linguaggio comune. L'inerzia non è una forza, ma la resistenza di un corpo alle accelerazioni. 

Il secondo chiarimento è che l'inerzia di cui abbiamo parlato finora è la cosiddetta **inerzia traslazionale**, che si manifesta nei moti rettilinei uniformi, misurata dalla massa inerziale espressa in $\text{kg}$. Esiste però anche un'**inerzia rotazionale**, espressa dal [momento d'inerzia]({{< relref "/dizionario/momento-dinerzia/" >}}), che è la resistenza di un corpo alle variazioni della sua **velocità angolare**. Il momento d'inerzia non dipende solo dalla massa, ma anche dalla sua distribuzione rispetto all'asse di rotazione. Si misura in $\text{kg}\cdot\text{m}^2$.
{{% /box %}}

## Cenni storici

Aristotele, vissuto nel IV secolo a.C., riteneva che lo stato naturale dei corpi fosse la quiete. Ogni corpo in moto si muoveva sotto l'azione di una forza ed era destinato a fermarsi quando quell'azione terminava. Era una teoria intuitivamente comprensibile, considerando l'effetto della gravità e dell'attrito su ogni corpo in movimento sulla Terra. Ed era un teoria così "naturale" da credere vera che sopravvisse più o meno immutata per circa duemila anni.

La pervasività della teoria aristotelica si vede ancora nell'opera di Keplero citata [nell'Etimologia](#etimologia). Benché Keplero fosse stato il primo a introdurre il termine "inerzia" (*vis inertiae*) nel lessico scientifico, lo usava ancora in senso aristotelico: l'inerzia era per lui la naturale *renitenza* della materia a qualsiasi moto, una sorta di pigrizia intrinseca dei corpi che doveva essere continuamente vinta da una causa motrice attiva.

Il capovolgimento concettuale che porta al significato moderno del termine si compie nel corso del Seicento, attraverso Galileo Galilei, Cartesio e infine Newton. Galileo, con i suoi esperimenti sui piani inclinati, intuisce che un corpo lasciato libero da attriti e resistenze continuerebbe a muoversi indefinitamente, senza bisogno di alcuna forza che lo spinga. È Cartesio, nei *Principia Philosophiae* (1644), a enunciare per la prima volta con chiarezza il principio secondo cui un corpo in moto persiste in linea retta a velocità costante se non è deviato da una forza esterna.

Newton eredita questa intuizione cartesiana e la colloca, ormai depurata da residui aristotelici, in apertura dei suoi *Philosophiae Naturalis Principia Mathematica* (1687), come **prima legge del moto**. Curiosamente, per battezzare la resistenza dei corpi al cambiamento del proprio stato di moto — un concetto ormai esattamente opposto a quello enunciato da Keplero — Newton riprende proprio il termine coniato dall'astronomo tedesco, *vis inertiae* ("forza d'inerzia"), svuotandolo del significato originario e riempiendolo di quello che gli attribuiamo ancora oggi. Infatti, nella **Definizione III** scrive:

> _Materiæ vis insita est potentia resistendi…_  
> «La forza insita della materia è la potenza di resistere…»

e conclude:

>_Unde etiam vis insita nomine significantissimo **vis inertiæ** dici possit._
> «Da cui la forza insita può anche essere chiamata, con un nome quanto mai appropriato, **forza d'inerzia**.»

La storia del concetto d'inerzia non finisce, tuttavia, con Newton.  **Ernst Mach**, nel XIX secolo, criticò il concetto newtoniano di spazio assoluto, sostenendo che la massa inerziale derivi dall’interazione gravitazionale con tutta la materia dell’universo (*principio di Mach*).

Nel 1915, infine, **Albert Einstein** mostrò nella relatività generale che il moto inerziale corrisponde al moto geodetico nello spaziotempo curvo.

## Formalismo matematico minimo

### Moto traslatorio: primo principio della dinamica

{{% box tipo="approfondimento" titolo="Prima legge del moto (o legge d'inerzia)" %}}
Ogni corpo persevera nel proprio stato di quiete o di moto rettilineo uniforme, a meno che non sia costretto a mutare quello stato da forze impresse su di esso[^2].
{{% /box %}}

La prima legge di Newton ebbe una portata rivoluzionaria, ribaltando due millenni di fisica aristotelica: non è il moto a richiedere una spiegazione, ma il suo *cambiamento*. Un corpo isolato, o soggetto a un insieme di forze che si bilanciano esattamente, non ha bisogno di alcuna causa per continuare a muoversi in linea retta a velocità costante; ne ha bisogno, invece, per accelerare, frenare o cambiare direzione.

Il formalismo del primo principio della dinamica può essere condensato così:
$$
 \vec{F}_{\mathrm{tot}}=\mathbf{0} \Longrightarrow \frac{d\vec{v}}{dt}=0 \Longrightarrow \vec{v}=\vec{v}_0 \Longrightarrow \vec{r}(t)=\vec{r}_0+\vec{v}_0\,t 
$$

Esaminiamolo pezzo per pezzo. Se la forza risultante totale che agisce su un corpo è zero ($\vec{F}_{\mathrm{tot}}=\mathbf{0}$), allora la variazione di velocità nel tempo ($d\vec{v}/dt$), cioè l'**accelerazione**, è anch'essa zero. Ne consegue che la velocità $\vec{v}$ in qualsiasi momento è uguale alla velocità iniziale $\vec{v}_0$, sia per intensità sia per verso. Da cui segue a sua volta che:
$$
\vec{r}(t)=\vec{r}_0+\vec{v}_0t
$$
in cui $\vec{r}_0$ è la posizione iniziale del corpo, $\vec{v}_0\,t$ lo spostamento compiuto dopo un tempo $t$ e $\vec{r}(t)$ la posizione al tempo $t$. In parole semplici, $\vec{r}(t)$ è la posizione finale del corpo, corrispondente alla posizione iniziale *più* lo spostamento ottenuto viaggiando sempre *con la stessa velocità* per un tempo $t$.

Da tutto ciò, il concetto di inerzia emerge non come una “forza” che produce il moto, ma come la **persistenza della velocità iniziale[^3] in assenza di una forza risultante**. La forza è necessaria per cambiare la velocità, non per conservarla.

### Moto traslatorio: secondo principio della dinamica

Nei prossimi passaggi vedremo come, partendo dalla definizione originale di Newton basata sulla quantità di moto, si arrivi alla forma $\vec{F}=m\vec{a}$ che tutti conoscono dai libri di scuola.

Il secondo principio venne formulato da Newton (1687) nella seguente forma:

{{% box tipo="approfondimento" titolo="Seconda legge del moto" %}} 
Il cambiamento della quantità di moto è proporzionale alla forza motrice impressa e avviene lungo la direzione della forza[^4].
{{% /box %}}

Newton aveva già definito la [quantità di moto]({{< relref "/dizionario/quantita-di-moto-o-momento-lineare/" >}}) posseduta da un corpo come:
$$
\vec{p}=m\vec{v}
$$
Perciò la legge espressa dal secondo principio può essere rappresentata in modo fedele come:
$$
\Delta\vec{p}\propto\vec{F}_{\mathrm{impressa}}
$$
ovvero: la variazione della quantità di moto è proporzionale alla forza impressa. La forma differenziale moderna corrispondente è:
$$
\vec{F}_{\mathrm{tot}}=\frac{d\vec{p}}{dt}
$$
Poiché $\vec{p}=m\vec{v}$, possiamo riscrivere l'equazione come:
$$
\vec{F}_{\mathrm{tot}} = \frac{d\vec{p}}{dt} = \frac{d(m\vec{v})}{dt}
$$
Da ciò, se la massa è **costante**, si ricava:
$$
\vec{F}_{\mathrm{tot}} = m\frac{d\vec{v}}{dt} = m\vec{a}
$$
in cui $\vec{a}$ è l'accelerazione, ovvero la variazione della quantità di moto nel tempo. Insomma, la formula oggi universalmente nota per esprimere il secondo principio, cioè:
$$
\vec{F}=m\vec{a}
$$
è una formulazione successiva della legge di Newton, anche se in tutto equivalente ad essa, non contenuta originariamente nei *Principia*. In questa formulazione, $\vec{F}$, la forza risultante, è un vettore e si misura in newton ($\text{N}$), $m$ è la massa inerziale, una grandezza scalare espressa in $\text{kg}$, e $\vec{a}$ è l'accelerazione, un vettore misurato in $\text{m}/\text{s}^2$.

Risolvendo l'equazione per $\vec{a}$, otteniamo:
$$
\vec{a} = \frac{\vec{F}}{m}
$$
in cui $m$ deve essere costante e maggiore di $0$ [^5]. Questa è la relazione fondamentale della dinamica e ci dice che la massa $m$ rappresenta il **fattore di proporzionalità** tra la forza applicata e l'accelerazione risultante: a parità di forza, un corpo con inerzia maggiore subirà un'accelerazione minore. Si tratta di una proporzionalità inversa. Per un corpo soggetto a forza nulla ($\vec{F} = 0$), si ha $\vec{a} = 0$, dunque la velocità $\vec{v}$ rimane costante (è il **principio d'inerzia** considerato nella [sezione precedente](#moto-traslatorio-primo-principio-della-dinamica)).

### Inerzia rotazionale

Nel moto rotatorio, la resistenza di un corpo alle variazioni della propria velocità angolare non dipende solo dalla sua massa complessiva, ma anche da *come* questa massa è distribuita rispetto all'asse di rotazione. La grandezza che quantifica questa resistenza è il [momento d'inerzia]({{< relref "/dizionario/momento-dinerzia/" >}}) $I$, che compare nell'equazione:
$$
\tau = I\alpha,
$$
formalmente identica alla seconda legge di Newton, con il [momento torcente]({{< relref "/dizionario/momento-torcente/" >}}) $\tau$ al posto della forza, il momento d'inerzia $I$ al posto della massa e l'accelerazione angolare $\alpha$ al posto di quella lineare. Il momento torcente $\tau$ si esprime in newton per metri ($\text{N}\cdot\text{m}$), il momento d'inerzia $I$ in $\text{kg}\cdot\text{m}^2$ e l'accelerazione angolare $\alpha$ in radianti per secondo quadrato ($\text{rad}/\text{s}^2$).

## Esempi numerici

### Moto traslatorio

L'effetto della differenza di massa sull'inerzia è intuitivo, ma quando lo si calcola numeri alla mano dà una misura più chiara di quanto possa essere decisivo nella dinamica dei corpi.

Confrontiamo un'automobile di $1\,200\,\text{kg}$ di massa e un treno merci da $500\,000\,\text{kg}$ ($500$ tonnellate). Entrambi viaggiano alla velocità di $30\,\text{m}/\text{s}$ ($108\,\text{km}/\text{h}$). Calcoliamo la forza frenante[^fre] necessaria per arrestare i due veicoli nello stesso intervallo di tempo di $10$ secondi.

Siccome l'auto e il treno devono passare da una velocità di $30\,\text{m}/\text{s}$ a $0$ in $10$ secondi, ricaviamo l'accelerazione negativa necessaria dalla formula:
$$
a=\frac{0-30}{10}=-3\,\text{m}/\text{s}^2,
$$
in cui $0$ è la velocità finale e $30\,\text{m}/\text{s}$ quella iniziale. Applichiamo ora il secondo principio della dinamica all'automobile, usando i numeri che abbiamo ricavato:
$$
\vec{F}=m\vec{a}= 1200\times(-3)=-3\,600\,\text{N}
$$
Per arrestare l'automobile lanciata a $108\,\text{km}/\text{h}$ in $10$ secondi occorre applicare una forza di $3\,600\,\text{N}$ (il segno meno davanti al numero nell'equazione indica che la forza da applicare ha verso contrario a quello del vettore velocità).

Facciamo ora lo stesso calcolo per il treno da $500$ tonnellate:
$$
\vec{F}=m\vec{a}= 500\,000 \times (-3) = -1\,500\,000\text{ N}
$$
La massa inerziale del treno è tale che, per arrestarlo, occorre una forza circa $417$ volte superiore a quella necessaria per fermare l'automobile.

### Moto rotatorio

Una pattinatrice ruota a braccia aperte con un momento d'inerzia $I_1 = 3{,}5\text{ kg}\cdot\text{m}^2$ a una frequenza di $1$ giro al secondo ($\omega_1 = 2\pi\text{ rad/s}$). Raccogliendo le braccia al petto, riduce la quantità di massa lontana dall'asse di rotazione, diminuendo di conseguenza il momento d'inerzia, che scende a $I_2 = 1{,}0\text{ kg}\cdot\text{m}^2$. 

In assenza di momenti torcenti esterni ($\tau = 0$), il [momento angolare]({{< relref "/dizionario/momento-angolare/" >}}) $L$ si conserva:
$$
L = I_1 \omega_1 = I_2 \omega_2
$$
Risolvendo l'equazione per $\omega_2$, otteniamo:
$$\omega_2 = \left( \frac{I_1}{I_2} \right) \omega_1 = \left( \frac{3{,}5}{1{,}0} \right) \times 2\pi = 7\pi\text{ rad/s}$$
Raccogliendo le braccia al petto e riducendo così il proprio momento d’inerzia, la pattinatrice ha aumentato la propria velocità angolare fino a $3{,}5$ giri al secondo: in assenza di momenti torcenti esterni significativi, la conservazione del momento angolare richiede infatti che $\omega$ aumenti al diminuire di $I$.

## Un uso astronomico dell'inerzia: la missione DART

Un esempio spettacolare del ruolo dell'inerzia su scala astronomica è la missione **DART** *(Double Asteroid Redirection Test)* della NASA, che nel settembre 2022 fece schiantare deliberatamente una sonda contro Dimorphos, la piccola luna dell'asteroide Didymos, per verificare la possibilità di deviare un corpo celeste a scopo di difesa planetaria[^dif].

L'inerzia entra in gioco due volte in questa storia. La prima volta è nell'impatto stesso: dopo l'ultima manovra di correzione della rotta, avvenuta circa un'ora e mezza prima dello schianto, i motori della sonda si sono spenti e DART ha proseguito la sua corsa in linea retta senza alcuna spinta, esattamente come previsto dal [primo principio della dinamica](#moto-traslatorio-primo-principio-della-dinamica): è stata la sua stessa inerzia, non un ulteriore intervento propulsivo, a portarla dritta contro il bersaglio.

La seconda volta è nell'effetto prodotto dall'urto. Al momento dell'impatto la sonda aveva una massa di circa $580\,\text{kg}$ e viaggiava a $\approx6{,}26\,\text{km/s}$ (circa $22\,530\,\text{km/h}$), per una quantità di moto di:
$$
p_{DART} = m\,v = 580 \times 6\,258 \approx 3{,}63\times10^{6}\,\text{kg}\,\text{m/s}
$$
Se questa quantità di moto fosse stata semplicemente trasferita a Dimorphos, la cui massa è stimata in circa $5\times10^{9}\,\text{kg}$[^dimorphos-mass], la variazione di velocità dell'asteroide sarebbe stata:
$$
\Delta v \approx \frac{p_{DART}}{M_{Dimorphos}} = \frac{3{,}63\times10^{6}}{5\times10^{9}} \approx 7{,}3\times10^{-4}\,\text{m/s} \approx 0{,}7\,\text{mm/s}
$$
cioè un valore minuscolo. Ma questa variazione di velocità è stata amplificata da $2$ a $5$ volte dal fattore di potenziamento del momento, dovuto all'espulsione di una notevole massa di detriti dal cratere d'impatto. Il risultato è stato che il periodo orbitale di Dimorphos attorno a Didymos si è ridotto di circa $32$ minuti (da $11\,\text{h}\,55\,\text{min}$ a $11\,\text{h}\,23\,\text{min}$)[^dart-period].

Il successo della missione DART dimostra che l'inerzia di un corpo, cioè la sua resistenza a cambiare il suo stato di moto, può essere usata addirittura per compiti di difesa planetaria.

## Campi di applicazione

Il principio di inerzia e il calcolo della massa inerziale sono fondamenti imprescindibili in numerosi settori della scienza e dell'ingegneria:

| Campo                               | Applicazione pratica                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Astronomia**                      | Interpretazione del moto orbitale e della rotazione dei corpi celesti.                                                                                                                                                                                                                                                                                                                                                                                                          |
| **Astrofisica e cosmologia**        | Formazione di strutture galattiche, principio di Mach, onde gravitazionali. Collasso gravitazionale delle protostelle e formazione dei dischi di accrescimento; accelerazione della rotazione delle stelle di neutroni (pulsar) per contrazione del raggio.                                                                                                                                                                                                                     |
| **Aerospazio e Meccanica orbitale** | Manovre orbitali: per cambiare orbita occorre vincere l’inerzia del veicolo spaziale con spinte controllate (equazione del razzo). Ma le sonde spaziali, una volta uscite dall'atmosfera terrestre, viaggiano nello spazio vuoto sfruttando esclusivamente la loro inerzia, senza bisogno di propulsione continua, risparmiando enormi quantità di carburante. Inoltre: calcolo delle traiettorie, stabilità dei velivoli, sistemi di controllo di assetto (*reaction wheels*). |
| **Fisica teorica**                  | Principio di Equivalenza di Einstein, che sancisce l'esatta proporzionalità/uguaglianza tra massa inerziale e massa gravitazionale.                                                                                                                                                                                                                                                                                                                                             |
| **Fisica delle particelle**         | Negli acceleratori, l’inerzia (o, relativisticamente, l’energia) delle particelle cresce con la velocità, rendendo sempre più difficile l’ulteriore accelerazione.                                                                                                                                                                                                                                                                                                              |
| **Geofisica e Meteorologia**        | Deviazione dei venti e delle correnti oceaniche a causa delle forze apparenti (Coriolis) generate dall'inerzia dei fluidi in un sistema di riferimento rotante (la Terra).                                                                                                                                                                                                                                                                                                      |
| **Trasporti e sicurezza stradale**  | Dispositivi di sicurezza passiva (cinture di sicurezza, pretensionatori, airbag) progettati per contrastare l'inerzia del moto degli occupanti durante una decelerazione improvvisa.                                                                                                                                                                                                                                                                                            |
| **Ingegneria Civile e Sismica**     | Nella progettazione antisismica degli edifici, si studia l'inerzia delle masse strutturali. Durante un terremoto, il terreno si muove ma l'edificio, per inerzia, tende a rimanere fermo, generando enormi forze di taglio alla base (forze d'inerzia).                                                                                                                                                                                                                         |
| **Ingegneria meccanica**            | Dimensionamento di motori, frizioni, volani (che sfruttano l’inerzia per smorzare le fluttuazioni di regime).                                                                                                                                                                                                                                                                                                                                                                   |
| **Vita quotidiana e sport**:        | Spiegazione del perché un passeggero viene spinto in avanti in frenata, del comportamento di un pattinatore sul ghiaccio, o dell’effetto giroscopico. Biomeccanica del gesto atletico: l’inerzia degli arti influenza l’equilibrio, la corsa e il lancio.                                                                                                                                                                                                                       |


[^1]: Questo principio vale rigorosamente solo nei **sistemi di riferimento inerziali**, ovvero sistemi non accelerati rispetto alle stelle fisse. In sistemi non inerziali, come ad esempio un'auto in curva, compaiono forze apparenti che non derivano da interazioni fisiche reali ma dal moto accelerato del riferimento.

[^2]: L’enunciato originale di Newton in latino è: *Corpus omne perseverare in statu suo quiescendi vel movendi uniformiter in directum, nisi quatenus a viribus impressis cogitur statum illum mutare.*

[^3]: Una velocità che può essere anche pari a zero.

[^4]: Nell'originale latino: *Mutationem motus proportionalem esse vi motrici impressae, et fieri secundum lineam rectam qua vis illa imprimitur.*

[^fre]: Il calcolo idealizza il problema e considera solo la forza risultante totale necessaria, trascurando la resistenza dell’aria, l'attrito volvente e la pendenza della strada o dei binari del treno.

[^5]: Se $m$ fosse uguale a zero, la forza $\mathbf{F}$ dovrebbe essere divisa per zero (un'operazione matematicamente senza significato) e non sarebbe possibile determinare l'accelerazione.

[^dimorphos-mass]: Stima di massa comunemente citata nelle schede informative della missione, basata su un diametro di circa $160\,\text{m}$ e su ipotesi sulla densità del corpo; una misura diretta e definitiva della massa di Dimorphos è tra gli obiettivi della missione Hera dell'ESA, il cui arrivo al sistema Didymos-Dimorphos è previsto per novembre 2026.

[^dart-period]: Valore annunciato dalla NASA l'11 ottobre 2022, ricavato da osservazioni fotometriche condotte da telescopi a terra e da radar nelle settimane successive all'impatto, con un margine di incertezza di circa $\pm 2$ minuti. Un'analisi successiva, sottoposta a revisione paritaria ([Thomas et al. 2023, *Nature* 616, 448-451](https://www.nature.com/articles/s41586-023-05805-2)), ha raffinato il valore a $-33{,}0 \pm 1{,}0$ minuti.

[^dif]: Per difesa planetaria s'intende l'idea di colpire un asteroide potenzialmente pericoloso per la Terra con un proiettile sufficientemente massiccio e veloce, tanto da deviare l'asteroide quel tanto che basta ad evitare il rischio di collisione con la Terra.
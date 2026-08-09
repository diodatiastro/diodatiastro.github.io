+++
title = "Momento d'inerzia"
date = "2026-08-09"
draft = false
+++

{{< katex />}}

{{% box tipo="definizione" titolo="" %}} 
In meccanica classica, il **momento d’inerzia rispetto a un asse** è una grandezza scalare[^scal] che misura quanto un corpo si oppone alle variazioni della propria velocità angolare attorno a quell’asse. Per un sistema discreto di particelle, si ottiene sommando, per ciascuna particella, il prodotto della sua massa per il quadrato della distanza perpendicolare dall’asse di rotazione.

Quanto più la massa è distribuita lontano dall’asse, tanto maggiore è il momento d’inerzia e, a parità di momento torcente applicato, tanto più difficile risulta modificare la rotazione del corpo. In questo senso, il momento d’inerzia svolge nella dinamica rotazionale un ruolo analogo a quello della massa nella dinamica traslazionale.

Il momento d’inerzia non ha però un valore unico per un determinato corpo: dipende dalla distribuzione della massa e dall’asse rispetto al quale viene calcolato. Uno stesso corpo può quindi avere valori diversi del momento d’inerzia rispetto ad assi diversi. La descrizione complessiva dell’inerzia rotazionale rispetto a tutte le direzioni è fornita dal **tensore d’inerzia**, una grandezza tensoriale[^tens].
{{% /box %}}

## Etimologia

**Momento** deriva dal latino *momentum* (contrazione di *movimentum*, da *movēre*, «muovere»), con il significato originario di «spostamento, impulso, quantità che produce rotazione». **Inerzia**, termine anch'esso di ascendenza latina, deriva da *inertia* («inattività, indolenza»), derivato da *iners, inertis* («privo di abilità, inoperoso»). 

In fisica, il termine "momento" indica la tendenza di una grandezza a produrre un effetto attorno a un punto o a un asse (come nel "momento di una forza", il momento torcente), mentre "inerzia" richiama la resistenza opposta da un corpo al mutamento del suo stato di quiete o di moto. Il _momento d'inerzia_ è dunque, letteralmente, la grandezza che esprime la resistenza inerziale di un corpo alla variazione del proprio stato di moto rotazionale rispetto a un asse.

## Cenni storici

Il primo a svolgere studi empirici sistematici sul momento d'inerzia, prima ancora di avere gli strumenti teorici per formalizzarlo compiutamente, fu lo scienziato olandese Christiaan Huygens. Nella sua opera _Horologium Oscillatorium_ del 1673 intuì, studiando il pendolo composto, l'esistenza di una grandezza che regolava le oscillazioni rotazionali, diversa dalla semplice massa.
 
Un altro progresso si ebbe tra il 1730 e il 1740, con i matematici svizzeri Johann e Daniel Bernoulli, padre e figlio, che nel secondo e terzo decennio del Settecento diedero contributi alla dinamica dei corpi rigidi vincolati.

Sempre nel Settecento, il matematico János András Segner dimostrò l'esistenza di tre assi principali reciprocamente ortogonali per un corpo rigido, un risultato che orientò poi Eulero verso la formulazione generale del moto dei corpi rigidi. 

Fu appunto con Eulero che si ebbe il vero salto in avanti nella definizione teorica del momento d'inerzia. L'opera di riferimento è la *Theoria motus corporum solidorum seu rigidorum* del 1765. In essa, Eulero introdusse il termine _momentum inertiae_, gli assi principali d'inerzia e le equazioni che ancora oggi portano il suo nome per la rotazione libera di un corpo rigido. Fu il grande matematico svizzero a distinguere chiaramente tra inerzia traslazionale e rotazionale. 

Il termine "momento d'inerzia" entrò stabilmente nel lessico scientifico solo nell'Ottocento, con l'affermazione della meccanica analitica e fisica francese (Laplace, Poisson, Coriolis). In particolare, furono sviluppati concetti come tensore d'inerzia[^1] ed ellissoide d'inerzia[^2], strumenti fondamentali per lo studio dei moti di corpi rigidi con qualsiasi orientamento.

## Formalismo matematico

L'unità di misura del momento d'inerzia nel Sistema Internazionale è il **chilogrammo per metro quadrato**: $\mathrm{kg\,m^2}$.

Per un punto materiale di massa $m$ che ruota a distanza $r$ da un asse, il momento d'inerzia $I$ si scrive:
$$I = m r^{2}$$
Per un corpo costituito da masse discrete $m_i$, il momento d'inerzia rispetto a un determinato asse è:
$$  
I=\sum_i m_i r_i^2  
$$
dove $r_i$ è la distanza della massa $m_i$ dall'asse di rotazione.

Per un **corpo esteso** con distribuzione *continua* di massa, la sommatoria viene sostituita da un integrale:
$$I = \int r^2\,dm = \iiint_V r^2\,\rho(\vec{r})\,dV$$
dove $\rho$ è la densità e $r$ la distanza di ciascun elemento di massa dall'asse (non dal centro del corpo, se non nei casi di simmetria sferica rispetto ad assi passanti per il centro). 

Queste relazioni mostrano una caratteristica fondamentale: **la distanza dall'asse compare al quadrato**. Una massa posta a distanza doppia dall'asse contribuisce quindi quattro volte di più al momento d'inerzia.

### Equazione del moto rotatorio

Per una rotazione attorno a un asse fisso e per un momento d'inerzia costante, il momento d'inerzia compare nella relazione tra il **momento torcente** $\tau$ e l'**accelerazione angolare** $\alpha$ come coefficiente di proporzionalità tra le due grandezze:
$$  
\tau=I\alpha.  
$$
Tale relazione è l'analogo rotazionale della seconda legge di Newton $F=ma$: il momento d'inerzia svolge nel moto rotatorio un ruolo analogo a quello della massa nel moto traslatorio.

### Teorema di Huygens-Steiner (o degli assi paralleli)

Se $I_{cm}$ è il momento d'inerzia rispetto a un asse passante per il centro di massa, il momento d'inerzia rispetto a un asse parallelo posto a distanza $d$ è:
$$I = I_{cm} + M\,d^2$$
in cui $d$ è la distanza tra i due assi. Il teorema permette di calcolare il momento d'inerzia $I$ rispetto a un asse qualunque, noto quello rispetto a un asse parallelo passante per il centro di massa $I_{cm}$.

### Energia cinetica rotazionale e momento angolare

Per una rotazione attorno a un asse principale con velocità angolare $\omega$, l'energia cinetica $K_{rot}$ vale:
$$K_{rot} = \frac{1}{2}\,I\,\omega^2 \qquad\text{con}\qquad L = I\,\omega$$
Questa relazione lega direttamente il momento d'inerzia al [momento angolare]({{< relref "/dizionario/momento-angolare/" >}}): in essa, infatti, il momento d'inerzia è il "peso" geometrico che traduce la velocità di rotazione $\omega$ nel momento angolare $L$.

### Fattore di struttura del momento d'inerzia

In astrofisica planetaria e stellare si usa spesso la grandezza adimensionale:

$$k^2 \equiv \frac{I}{M\,R^2},$$

che vale $0{,}4$ per una sfera omogenea, e diminuisce quanto più la massa è concentrata verso il centro rispetto a una distribuzione uniforme.

La tabella seguente elenca alcuni momenti d'inerzia **notevoli**, con indicazione dell'asse di rotazione:

| Corpo                                                 | Asse di rotazione                      | Formula                  | Esempio numerico                                                                             |
| ----------------------------------------------------- | -------------------------------------- | ------------------------ | -------------------------------------------------------------------------------------------- |
| Punto materiale                                       | A distanza $r$                         | $I = mr^{2}$             | $m = 2\,\mathrm{kg}$, $r = 0{,}5\,\mathrm{m}$ → $I = 0{,}5\,\mathrm{kg \cdot m^{2}}$         |
| Asta sottile (lunghezza $L$, massa $M$)               | Perpendicolare, passante per il centro | $I = \frac{1}{12}ML^{2}$ | $M = 1\,\mathrm{kg}$, $L = 1\,\mathrm{m}$ → $I \approx 0{,}083\,\mathrm{kg \cdot m^{2}}$     |
| Disco omogeneo (raggio $R$, massa $M$)                | Perpendicolare, passante per il centro | $I = \frac{1}{2}MR^{2}$  | $M = 2\,\mathrm{kg}$, $R = 0{,}5\,\mathrm{m}$ → $I = 0{,}25\,\mathrm{kg \cdot m^{2}}$        |
| Sfera piena (raggio $R$, massa $M$)                   | Diametro                               | $I = \frac{2}{5}MR^{2}$  | $M = 5\,\mathrm{kg}$, $R = 0{,}1\,\mathrm{m}$ → $I = 0{,}02\,\mathrm{kg \cdot m^{2}}$        |
| Sfera cava con guscio sottile (raggio $R$, massa $M$) | Diametro                               | $I = \frac{2}{3}MR^{2}$  | $M = 5\,\mathrm{kg}$, $R = 0{,}1\,\mathrm{m}$ → $I \approx 0{,}033\,\mathrm{kg \cdot m^{2}}$ |

## Alcuni esempi numerici

Per dare un connotato pratico alle formule elencate fin qui, calcoliamo il momento d'inerzia di un'**asta sottile omogenea** ($M = 3\text{ kg}$, $L = 2\text{ m}$), ruotata attorno all'asse perpendicolare passante per il centro di massa:
$$
I = \frac{1}{12} M L^2 = \frac{1}{12} \times 3 \times 2^2 = 1\text{ kg}\cdot\text{m}^2
$$
Il valore ottenuto rappresenta l'inerzia dell'asta rispetto alle variazioni del suo moto rotatorio attorno all'asse considerato.

Facciamo un calcolo analogo per un **cilindro pieno omogeneo** ($M = 2\text{ kg}$, $R = 0,5\text{ m}$), ruotato attorno al suo asse di simmetria longitudinale:
$$
I = \frac{1}{2} M R^2 = \frac{1}{2} \times 2 \times 0,5^2 = 0,25\text{ kg}\cdot\text{m}^2
$$
Stavolta il momento d'inerzia è un quarto di quello dell'asta sottile, ma va tenuto presente che stiamo confrontando due corpi con geometria e asse di rotazione differenti.

Calcoliamo infine il momento d'inerzia di una **sfera piena omogenea** ($M = 5\text{ kg}$, $R = 0,2\text{ m}$), che ruota attorno a un diametro passante per il centro:
$$
I = \frac{2}{5} M R^2 = \frac{2}{5} \times 5 \times 0,2^2 = 0,08\text{ kg}\cdot\text{m}^2
$$
Nonostante la massa superiore agli altri due oggetti, il momento d'inerzia della sfera è nettamente inferiore, perché il raggio è molto minore (come illustrato nelle formule precedenti, $I$ scala con il quadrato del raggio).

## Qualche esempio astronomico

Calcoliamo il momento d'inerzia della **Terra**. Le misure di precessione e schiacciamento danno un fattore di circa $0,33$ per gli assi principali terrestri[^schia], contro lo $0,4$ di una sfera omogenea. I valori di massa e raggio del pianeta sono:
$$M_\oplus = 5{,}972\times10^{24}\,\text{kg}\qquad \text{e}\qquad R_\oplus = 6\,371\,\text{km}$$
Otteniamo dunque:
$$I_\oplus = 0{,}3307 \times M_\oplus R_\oplus^2 \approx 8{,}0\times10^{37}\,\text{kg}\,\text{m}^2$$
È da notare che, se avessimo approssimato la Terra a una sfera omogenea, avremmo ottenuto un valore di $I$ pari a $9{,}7\times10^{37}\,\text{kg}\,\text{m}^2$. È uno scarto di circa il $17\%$ in meno, coerente con il fatto che il pianeta ha un nucleo ferroso molto più denso del mantello. In altre parole, influire sulla velocità di rotazione della Terra è *più facile* che se fosse una sfera omogenea, perché la massa è più concentrata verso il centro del pianeta.

Nel caso del **Sole** lo scarto è ancora più drastico, e di molto. [Modelli strutturali solari](https://radiojove.gsfc.nasa.gov/education/sun/basics/material/sunfacts.htm) danno un fattore $I/MR^2$ di circa $0{,}059$, contro lo $0{,}4$ di una sfera omogenea. Con valori di massa e raggio pari a $M_\odot = 1{,}989\times10^{30}\,\text{kg}$ e $R_\odot = 6{,}957\times10^{8}\,\text{m}$, otteniamo per il Sole un momento d'inerzia di:
$$
I_\odot = 0{,}059 \times M_\odot R_\odot^2 \approx 5{,}7\times10^{46}\,\text{kg}\,\text{m}^2
$$
contro i $3{,}9\times10^{47}\,\text{kg}\,\text{m}^2$ dell'approssimazione a sfera omogenea: quasi sette volte di più, in quest'ultimo caso! La ragione di una differenza così grande è che circa metà della massa del Sole è concentrata in una regione molto piccola rispetto al raggio solare e quindi a distanze relativamente piccole dall'asse di rotazione: un esempio efficace di quanto l'approssimazione a densità uniforme sia generalmente[^3] inadatta per un corpo stellare.

## Campi di applicazione

- **Astronomia:** studio della rotazione di pianeti, asteroidi e satelliti;  analisi della struttura interna di pianeti e satelliti tramite il fattore $k^2$, ricavato da dati di precessione o da missioni spaziali (es. Juno per Giove, Cassini per Saturno e Titano). Studio della precessione e nutazione degli assi planetari, incluso il fenomeno di precessione degli equinozi terrestri.
  
- **Astrofisica:** calcolo della conservazione del momento angolare nella contrazione delle protostelle, dinamica dei dischi di accrescimento. Astrosismologia e modelli di struttura interna del Sole e di altre stelle. Studio della rotazione stellare, del collasso gravitazionale e delle stelle di neutroni; fisica delle stelle di neutroni e delle pulsar: il momento d'inerzia vincola l'equazione di stato della materia nucleare a densità estreme, ed entra nei modelli di spin-down e nella perdita di energia per emissione di onde gravitazionali o radiazione elettromagnetica.
  
- **Geofisica:** studio della variazione della velocità di rotazione terrestre causata dai moti convettivi interni o dai cambiamenti nella distribuzione dei ghiacci.
  
- **Meccanica quantistica e fisica molecolare:** descrizione degli spettri rotazionali delle molecole attraverso il concetto di momento d'inerzia (modello del rotore rigido).
  
- **Fisica e dinamica dei corpi rigidi**: il momento d'inerzia è coinvolto nella risoluzione di problemi che riguardano rotazioni di ogni tipo, come il moto del pendolo composto, l'urto tra corpi estesi e l'analisi dell'energia cinetica rotazionale.
  
- **Ingegneria meccanica:** nella progettazione di volani (*flywheels*) per macchinari si cerca di massimizzare il momento d'inerzia, così da accumulare energia cinetica rotazionale e regolare le fluttuazioni di velocità del motore.
  
- **Ingegneria automobilistica e aerospaziale:** nella dinamica dei veicoli, il momento d'inerzia rispetto all'asse longitudinale, trasversale e verticale determina la stabilità in curva, la propensione al rollio e al beccheggio. Nei satelliti, la distribuzione dei momenti d'inerzia sugli assi principali è vitale per il controllo di assetto (*attitude control*).
  
- **Ingegneria civile e strutturale:** nello studio delle vibrazioni delle strutture (es. ponti, grattacieli sottoposti al vento o ai terremoti), il momento d'inerzia polare delle sezioni trasversali (pilastri, travi) determina la resistenza alla torsione.
  
- **Biomeccanica e sport:** è fondamentale nell'analisi dei movimenti umani. Ad esempio, un pattinatore su ghiaccio o un ginnasta che esegue un salto mortale avvicina le braccia al corpo per ridurre il proprio momento d'inerzia e, di conseguenza, aumentare la velocità di rotazione (per la conservazione del momento angolare). Analogamente, la progettazione di mazze da golf o da baseball cerca di ottimizzare la distribuzione della massa rispetto all'impugnatura (lavorando sul momento d'inerzia) per garantire la massima efficacia dei colpi.
  
- **Robotica**: la scelta dei motori e degli attuatori per i bracci robotici dipende direttamente dal momento d'inerzia dei carichi che devono muovere e dei segmenti stessi del braccio.

[^scal]: Una grandezza scalare è una grandezza fisica completamente individuata da un unico valore numerico, generalmente accompagnato dalla relativa unità di misura (ad esempio, il tempo e l'energia); non richiede l’indicazione di una direzione o di un verso. Nel contesto del momento d’inerzia, “scalare” significa che il momento d’inerzia rispetto a un asse è descritto da un unico valore numerico, con la relativa unità di misura, e non da una direzione e un verso come accade per una grandezza vettoriale.

[^tens]: Una **grandezza tensoriale** è una grandezza fisica che, per essere descritta completamente, richiede più componenti, il cui insieme deve trasformarsi secondo precise regole matematiche al cambiare del sistema di riferimento. Un esempio è il **tensore d'inerzia**, che descrive come la massa di un corpo è distribuita rispetto ai diversi assi e determina le sue proprietà rotazionali.

[^1]: il **tensore d'inerzia** è la generalizzazione del momento d'inerzia a una matrice simmetrica $3\times3$, che descrive come la massa di un corpo è distribuita rispetto a tutti gli assi di rotazione passanti per un punto (di norma il centro di massa). Include, oltre ai momenti d'inerzia lungo i tre assi coordinati, i cosiddetti "prodotti d'inerzia" fuori diagonale, che si annullano solo se gli assi scelti coincidono con gli assi principali del corpo; lega il [momento angolare]({{< relref "/dizionario/momento-angolare/" >}}) alla velocità angolare tramite $\vec{L} = \mathbf{I}\,\vec{\omega}$.

[^2]: L'**ellissoide d'inerzia** è la rappresentazione geometrica del tensore d'inerzia, introdotta da Poinsot: per ogni direzione $\hat{n}$ passante per il punto considerato, si riporta un punto a distanza $1/\sqrt{I(\hat{n})}$​ lungo quella direzione; il luogo di tutti questi punti descrive un ellissoide, i cui tre assi coincidono con gli assi principali d'inerzia del corpo.

[^schia]: Il valore di $0,3307$ corrisponde al **fattore di momento d'inerzia polare** della Terra, definito come $C/MR^2$ (dove $C$ è [il momento d'inerzia rispetto all'asse polare](https://ui.adsabs.harvard.edu/abs/1994AJ....108..711W/abstract), $M$ la massa e $R$ il raggio equatoriale).

[^3]: L'approssimazione a sfera omogenea è più verosimile nel caso di oggetti compatti come le nane bianche e le stelle di neutroni.
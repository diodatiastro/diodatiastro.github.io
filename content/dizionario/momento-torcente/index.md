+++
title = "Momento torcente"
date = "2026-08-11"
draft = false
+++

{{< katex />}}

## Etimologia

*Momento* deriva dal latino *momentum*, contrazione di *movimentum* (da *movēre*, "muovere"), originariamente col significato di «movimento, impulso, piccolo peso che fa inclinare la bilancia». In meccanica indica da secoli la capacità di una forza o di un sistema di forze di produrre un determinato effetto rispetto a un punto o a un asse. È lo stesso etimo condiviso con [momento angolare]({{< relref "/dizionario/momento-angolare/" >}}) e [momento lineare]({{< relref "/dizionario/quantita-di-moto-o-momento-lineare/" >}}). 

*Torcente* è un participio presente e deriva anch'esso dal latino, precisamente dal verbo *torquēre*, "torcere, avvolgere, attorcigliare, ruotare con forza", lo stesso verbo da cui discende l'inglese *torque*, il termine tecnico oggi universalmente adottato nella letteratura scientifica anglosassone per questa stessa grandezza. L'unione dei due termini - momento e torcente - descrive letteralmente "l'impulso che genera una torsione o una rotazione".

## Cenni storici

Le radici del concetto risalgono ad Archimede di Siracusa (III secolo a.C.), che nel trattato *Sull'equilibrio dei piani* formalizzò la legge della leva: due pesi si bilanciano quando i prodotti tra peso e distanza dal fulcro sono uguali[^1].

Nel Rinascimento, Galileo Galilei riprese e sviluppò l'analisi delle macchine semplici nel trattato *Le meccaniche* (composto attorno al 1600), introducendo in italiano il termine *momento* per indicare l'efficacia di una forza applicata a una leva, distinguendola dalla semplice intensità della forza.

In epoca moderna, il termine "momento" per descrivere il prodotto di una forza per la sua distanza da un punto venne formalizzato da Pierre Varignon nel 1687 (lo stesso anno della pubblicazione dei *Principia* di Newton) con il teorema delle componenti. 

Nel XVIII secolo, Leonhard Euler (Eulero) estese le leggi di Newton ai sistemi in rotazione, dimostrando che il momento torcente è la causa della variazione del momento angolare (l'equivalente rotazionale della forza).

La trattazione geometrica e algebrica moderna del momento torcente si deve al fisico francese Louis Poinsot, che introdusse il fondamentale concetto di **coppia di forze** (un sistema di forze che genera solo rotazione e non traslazione) negli *Éléments de statique* del 1803. Lo stesso Poinsot ne sviluppò la rappresentazione vettoriale nelle memorie sulla composizione dei momenti presentate l'anno successivo, nel 1804.

Il termine inglese *torque*, lo standard nella letteratura scientifica e tecnica internazionale per indicare il momento torcente, ha un'origine sorprendentemente più recente: fu proposto nel 1884 dal fisico e ingegnere James Thomson (fratello di William Thomson, Lord Kelvin), che avvertì l'esigenza di un vocabolo specifico per questa grandezza dinamica, distinto dal generico *moment*, già utilizzato con troppi significati diversi in fisica e in statistica.


{{% box tipo="definizione" titolo="" %}} 
Il **momento torcente**, termine derivato dall'uso scientifico dell'inglese *torque* e usato per indicare sia il **momento di una forza** sia il **momento di una coppia**[^coppia], è la grandezza vettoriale che misura la capacità di una forza o di un sistema di forze di produrre una rotazione attorno a un punto, detto *polo*, o a un asse di riferimento. È definito come il prodotto vettoriale tra il vettore posizione del punto di applicazione della forza rispetto al polo e la forza stessa.

Non è una forza, ma ne è l’equivalente rotazionale: così come una forza produce accelerazione lineare, un momento torcente produce accelerazione angolare. Affinché si generi un momento torcente, la forza non deve essere parallela all'asse di rotazione né la sua retta d'azione[^2] deve intersecare l'asse stesso. Più in generale, il momento di una forza rispetto a un punto è nullo quando la retta d'azione della forza passa per quel punto; aumenta invece quanto maggiore è la distanza tra il polo e la retta d'azione.
{{% /box %}}

## Unità di misura

Nel Sistema Internazionale il momento torcente si misura in newton per metro ($\text{N}\,\text{m}$). Dal punto di vista dell'analisi dimensionale[^dim] è identico al joule, l'unità dell'energia, ma concettualmente è diverso: l'energia è una grandezza **scalare**[^3], il momento torcente è **vettoriale**[^4], motivo per cui la convenzione internazionale in uso predilige l'uso di $\text{N}\,\text{m}$ al posto di $\text{J}$.

## Formalismo matematico minimo

Il momento torcente $\vec{\tau}$ (o $\vec{M}$) di una forza $\vec{F}$ applicata in un punto rispetto a un polo $O$ è il prodotto vettoriale:
$$
\vec{\tau} = \vec{r} \times \vec{F}
$$
dove $\vec{r}$ è il vettore posizione dal polo al punto di applicazione della forza.

Il modulo del momento torcente si calcola come:
$$
\tau = r F \sin\theta = F \cdot b
$$
dove $\theta$ è l'angolo compreso fra il vettore posizione $\vec r$ e la forza $\vec F$; il prodotto $b = r\sin\theta$ è, per definizione, il braccio della forza[^5]. Il momento torcente è massimo quando la forza è applicata *perpendicolarmente* al vettore posizione $\vec{r}$ ($\theta = 90°$, $\sin\theta = 1$), ed è nullo quando la forza è applicata *parallelamente* a esso ($\theta = 0°$), come accade, per esempio, spingendo una porta verso i cardini invece che verso la maniglia.

Il verso del momento torcente è dato dalla [regola della mano destra]({{< relref "/dizionario/momento-angolare/" >}}#formalismo-matematico-minimo) e si considera positivo per convenzione quando la rotazione avviene in senso antiorario (se si specifica il piano di riferimento e la convenzione del verso dell’asse).

Per un sistema di forze, il momento torcente vale:

$$
\vec{\tau}_{\text{ris}}=\sum_i \vec r_i\times\vec F_i.
$$

{{< altalena-momento-torcente width="80%" caption="Quando il braccio è perpendicolare alla retta d'azione della forza, il momento torcente è massimo. A fine corsa il peso continua a esercitare un momento di quasi $1360\,\text{N}\cdot\text{m}$ attorno al perno, ma la reazione del terreno — applicata nello stesso punto — lo bilancia esattamente: il momento netto si annulla e l'altalena resta ferma." >}}

### Seconda legge di Eulero

Il momento torcente compare nella *seconda legge di Eulero*, l'analogo rotazionale della seconda legge di Newton, che lega la variazione temporale del momento angolare $\vec L$ al momento torcente netto applicato:
$$
\vec\tau = \frac{d\vec L}{dt}
$$
Per un corpo rigido che ruota attorno a un asse fisso questa relazione si semplifica nella forma più familiare:
$$
\tau = I\alpha
$$
dove $I$ è il [momento d'inerzia]({{< relref "/dizionario/momento-dinerzia/" >}}) del corpo e $\alpha$ è l'accelerazione angolare: l'esatto analogo rotazionale di $F = ma$.

### Equilibrio e momento risultante

Un corpo rigido è in equilibrio rotazionale quando la somma vettoriale dei momenti delle forze applicate è nulla:
$$  
\sum_i\tau_i=0  
$$
È questo il principio alla base del funzionamento delle **leve**. Se due forze agiscono su lati opposti di un fulcro, per esempio, l'equilibrio si verifica quando i loro momenti hanno uguale modulo e verso opposto:
$$  
F_1b_1=F_2b_2  
$$
Questo spiega perché una forza relativamente piccola può equilibrare una forza molto maggiore se applicata a una distanza maggiore dal fulcro. 

{{< altalena-equilibrio-leva width="80%" caption="Un padre e un figlio in equilibrio su un'altalena a bilico: la distanza maggiore del figlio dal perno compensa il suo peso minore." >}}

## Un esempio numerico tratto dalla vita quotidiana

Il momento torcente è onnipresente nella vita di tutti i giorni, dall'apertura di una porta a una pedalata in bicicletta. Un esempio classico è l'operazione di svitare un bullone con una chiave inglese. Immaginiamo di avere un bullone incastrato, per sbloccare il quale serve un momento torcente minimo di $90\,\text{N}\cdot\text{m}$.

Usiamo allo scopo una chiave inglese con una lunghezza $r = 0{,}3\,\text{m}$. La forza necessaria a sbloccare il bullone, applicata perpendicolarmente al braccio della chiave inglese, sarà:
$$ F = \frac{\tau}{r} = \frac{90\,\text{N}\cdot\text{m}}{0{,}3\,\text{m}} = \mathbf{300\,\text{N}} $$
Occorre, dunque, esercitare una forza equivalente, sulla Terra, al peso di circa $30\,\text{kg}$. Ma, se invece usassimo una chiave inglese con un braccio $r = 0{,}6\,\text{m}$, lo sforzo si ridurrebbe esattamente alla metà: 
$$ F = \frac{\tau}{r} = \frac{90\,\text{N}\cdot\text{m}}{0{,}6\,\text{m}} = \mathbf{150\,\text{N}} $$
Per sbloccare il bullone basterebbe una forza pari al peso di circa $15\,\text{kg}$.

## Il momento torcente nel sistema Terra/Luna

Il momento torcente del sistema Terra-Luna è un esempio su scala planetaria, offerto dall'interazione mareale fra la Terra e la Luna. Il rigonfiamento di marea sollevato dalla gravità lunare sugli oceani terrestri non è perfettamente allineato con la congiungente Terra-Luna, perché l'attrito interno degli oceani, combinato con la rotazione terrestre, lo trascina leggermente in avanti rispetto alla posizione della Luna. Questa *asimmetria* genera un momento torcente reciproco che rallenta la rotazione terrestre (allungando il giorno di circa $2$ millisecondi per secolo) e, per conservazione del momento angolare totale del sistema, allontana contemporaneamente la Luna dalla Terra di circa $3{,}8\,\text{cm}$ l'anno. Questo valore è stato misurato con grande precisione inviando impulsi laser ai retroriflettori lasciati sulla superficie lunare dalle missioni Apollo e misurando il tempo di ritorno della luce.

## Il momento torcente in un disco di accrescimento

In un disco di accrescimento, la materia trasferisce momento angolare all’oggetto centrale (una protostella, una nana bianca, una stella di neutroni, un buco nero) mentre spiraleggia verso di esso. Una stima newtoniana del momento torcente associato a questo trasferimento[^6] è
$$
\tau\simeq \dot M\,\ell(r)
       \simeq \dot M\sqrt{GMr},
$$
dove $\dot M$ è il tasso di accrescimento, $\dot{M}\,\ell$ è il **flusso di momento angolare** trasportato dalla materia in accrescimento, $M$ la massa dell’oggetto centrale, $G$ la costante gravitazionale e $r$ il **raggio caratteristico al quale viene trasferito il momento angolare**. 

Questo $r$ non deve essere necessariamente il raggio fisico dell’oggetto: in un sistema magnetizzato può rappresentare, per esempio, il raggio interno del disco o il raggio di interazione tra disco e magnetosfera. I dischi di accrescimento permettono infatti alla materia di avvicinarsi all’oggetto centrale dopo aver progressivamente trasferito il proprio momento angolare. 

Consideriamo una stella di neutroni con massa:
$$
M=1{,}4\,M_\odot,
$$
un valore tipico per questo tipo di oggetti, il cui raggio fisico è dell’ordine di $10\text{–}12\ \mathrm{km}$, cioè circa $10^4\ \mathrm{m}$.  Assumiamo inoltre un tasso di accrescimento:
$$
\dot M=10^{-9}\,M_\odot\,\mathrm{anno^{-1}},
$$
che corrisponde approssimativamente a
$$
\dot M\simeq6{,}3\times10^{13}\ \mathrm{kg\,s^{-1}}.
$$
Assumiamo, come semplificazione, che il materiale del disco raggiunga la superficie della stella prima di trasferire alla stella il proprio momento angolare orbitale:
$$
r=R_{\mathrm{SN}}\simeq10^4\ \mathrm{m}
$$
Si ottiene allora:
$$
\begin{aligned}
\tau&\simeq
6{,}3\times10^{13}
\sqrt{
(6{,}67\times10^{-11})
(2{,}8\times10^{30})
(10^4)
}
\\
&\simeq
8{,}6\times10^{25}\ \mathrm{N\,m}.
\end{aligned}
$$
Questo valore è una stima ideale: il momento torcente effettivo può differire in funzione della struttura del disco, della rotazione della stella e dell’interazione con il campo magnetico. In particolare, se il disco trasferisce momento angolare a una distanza maggiore dalla superficie, per esempio a un raggio magnetosferico $r_{\mathrm m}\sim10^8\ \mathrm{m}$, la stessa formula fornirebbe un momento torcente cento volte maggiore, perché $\tau\propto\sqrt r$. In tal caso $10^8\ \mathrm{m}$ rappresenterebbe il raggio della regione di interazione disco-magnetosfera e **non** il raggio della stella di neutroni.

Un momento torcente di questa entità, se applicato per tempi sufficientemente lunghi, può aumentare in modo apprezzabile la velocità di rotazione della stella (cosiddetto **spin-up**).

## Applicazioni del momento torcente in astronomia

In **astronomia** il concetto di momento torcente è strettamente legato al trasferimento di momento angolare. Una forza centrale gravitazionale ideale è diretta lungo $\vec r$, perciò:
$$
\vec{\tau}=\vec r\times\vec F=0.
$$
Ne segue che il momento angolare orbitale si conserva e l’orbita resta planare. Questa è la situazione ideale del problema dei due corpi, in cui la forza gravitazionale è centrale.

Momenti torcenti non nulli compaiono invece quando la forza non è centrale o quando il corpo possiede una struttura non sferica. Alcuni esempi sono:

- la **precessione dell'asse di rotazione terrestre**: i momenti gravitazionali esercitati da Sole e Luna sul rigonfiamento equatoriale della Terra modificano l’orientamento dell’asse di rotazione;
- le **interazioni mareali**: le forze gravitazionali differenziali possono trasferire momento angolare tra rotazione e orbita, causando sincronizzazione mareale, evoluzione del periodo orbitale e variazione dell’[eccentricità]({{< relref "/dizionario/eccentricita/" >}});
- **sistemi binari**: le interazioni mareali, le perdite di massa e gli scambi di materia possono modificare il momento angolare orbitale e la velocità di rotazione delle componenti;
- **dischi protoplanetari**: turbolenza, viscosità, instabilità gravitazionali e campi magnetici trasportano momento angolare, permettendo al gas di spiraleggiare verso la protostella, favorendo la formazione planetaria.

## Applicazioni in astrofisica stellare e oggetti compatti

Nei **dischi di accrescimento** il gas deve perdere momento angolare per avvicinarsi all'oggetto centrale, sia esso una stella, una nana bianca, una stella di neutroni o un buco nero. Il trasferimento avviene attraverso tensioni viscose, turbolenza, campi magnetici e onde o spirali nel disco. Il trasporto del momento angolare verso l’esterno consente l’accrescimento verso l’interno.

Il caso numerico visto più sopra è un esempio del ruolo più generale che il momento torcente svolge nell'evoluzione di stelle e oggetti compatti, dove entra in gioco per descrivere, oltre allo spin-up di stelle di neutroni e nane bianche:

- lo **spin-down** (rallentamento della rotazione) dovuto a vento stellare e frenamento magnetico;
- l'interazione magnetica tra una stella giovane e il proprio disco;
- l'evoluzione della rotazione delle stelle del tipo T Tauri;
- coppie gravitazionali e magnetiche nei sistemi binari;
- l'estrazione o trasferimento di momento angolare nei dintorni dei buchi neri rotanti.

In sintesi, il momento torcente è la grandezza che quantifica **quanto efficacemente una forza, una coppia gravitazionale o un’interazione magnetoidrodinamica può modificare una rotazione**. In astronomia e astrofisica descrive il trasferimento di momento angolare tra materia, stelle, pianeti, dischi e campi.



[^1]: In un passo di **Pappo di Alessandria** (III–IV sec. d.C.) si cita una frase in greco attribuita ad Archimede: «δός μοι ποῦ στῶ, καὶ κινῶ τὴν γῆν», cioè «dammi un punto d’appoggio e muoverò la Terra».

[^coppia]:  Rigorosamente, in meccanica si distingue tra il *momento di una forza* (riferito a una singola forza applicata rispetto a un polo $O$, dal quale il valore dipende) e il *momento di una coppia di forze* (costituito da due forze di uguale intensità, parallele e opposte, applicate lungo rette d'azione distinte). Il momento di una coppia produce pura rotazione senza traslazione ed è un vettore libero, ossia indipendente dalla scelta del polo. Il termine generale *momento torcente* viene comunemente impiegato per descrivere l'effetto rotazionale in entrambi i casi.

[^2]: La **retta d'azione** è la retta immaginaria lungo la quale agisce la forza.

[^dim]: L'**analisi dimensionale** è uno strumento della fisica e dell'ingegneria utilizzato per verificare e comprendere le relazioni tra grandezze fisiche esprimendole in funzione delle loro dimensioni fondamentali (come massa, lunghezza e tempo), indipendentemente dalle specifiche unità di misura impiegate.

[^3]: Una grandezza scalare è una grandezza fisica completamente individuata da un unico valore numerico, generalmente accompagnato dalla relativa unità di misura (ad esempio, il tempo e l’energia); non richiede l’indicazione di una direzione o di un verso.

[^4]: Una **grandezza vettoriale** è una grandezza fisica che, per essere definita completamente, richiede non solo un valore numerico (modulo) e un'unità di misura, ma anche una direzione e un verso. Esempi di grandezze vettoriali sono velocità, forza, momento angolare e, appunto, momento torcente.

[^5]: Il braccio della forza è la distanza più breve tra la retta d'azione della forza e il polo intorno a cui avviene la rotazione.

[^6]: Nella letteratura astrofisica sulle stelle di neutroni e sulle pulsar che accrescono materia, il momento torcente netto è spesso indicato con $N$,  in particolare nelle equazioni di evoluzione dello spin, come $I\dot{\Omega}=N$. In questa voce si adotta invece il simbolo $\tau$, più usuale nella meccanica generale, per mantenere uniforme la notazione. In ogni caso, $\tau$ e $N$ indicano la stessa grandezza misurata in $\text{N}\,\text{m}$.
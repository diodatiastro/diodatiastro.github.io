+++
title = "Angolo di fase"
date = "2026-07-18"
draft = false
+++

{{< katex />}}
## Definizione
In astronomia, grandezza geometrica che quantifica l'angolo formato al vertice di un corpo celeste illuminato (un pianeta, un satellite, un asteroide, una cometa) tra la direzione della sorgente di luce, solitamente il Sole, e quella dell'osservatore terrestre.

Si indica con la lettera greca $\alpha$ e traduce l'inglese *phase angle*, voce entrata nell'uso tecnico nella seconda metà dell'Ottocento con il consolidarsi della fotometria planetaria.

L'angolo di fase determina direttamente la percentuale di superficie illuminata di un corpo celeste, ovvero la sua "**fase**". Il caso tipico è quello delle **fasi lunari**, in cui la Luna occupa il vertice dell'angolo e il Sole e la Terra giacciono sui suoi lati.

{{< figura src="immagini/fasi-lunari.jpg" alt="Un grafico che rappresenta le fasi lunari, ovvero come cambia l’illuminazione della Luna vista dalla Terra in ragione dell’angolo di fase." caption="Un grafico che rappresenta le fasi lunari, ovvero come cambia l’illuminazione della Luna vista dalla Terra in ragione dell’angolo di fase." >}}
## Tipi principali di angoli di fase
I tre casi più importanti di angolo di fase sono quelli che danno origine ai fenomeni delle congiunzioni, delle quadrature e delle opposizioni:

- **Angolo di fase prossimo a $0^\circ$.** Il corpo celeste si trova in **opposizione** se è la Luna o un pianeta esterno (da Marte in poi) o in **congiunzione superiore**, se è un pianeta interno (dunque Venere o Mercurio).
- **Angolo di fase di $90^\circ$.** Il corpo illuminato si trova in **quadratura**. L'osservatore vede esattamente metà del disco illuminata e metà in ombra (come la Luna al primo o all'ultimo quarto).
- **Angolo di fase prossimo a $180^\circ$.** Il corpo si trova in **congiunzione inferiore**. Esso mostra all'osservatore il suo emisfero buio, poiché si trova interposto tra la Terra e il Sole, rivolgendo la faccia illuminata interamente verso la stella. Ciò vale solo per i pianeti interni del Sistema Solare, per la Luna, per le comete e gli asteroidi che passano tra la Terra e il Sole.

Nella **congiunzione superiore**, il pianeta interno (Venere o Mercurio) si trova al di là del Sole rispetto alla Terra. L'allineamento è:

$$
\text{Terra} \longrightarrow \text{Sole} \longrightarrow \text{Pianeta}
$$

Vista dal pianeta, la direzione verso il Sole e la direzione verso la Terra coincidono: $\alpha \approx 0^\circ$. La faccia completamente illuminata è rivolta verso di noi e la frazione illuminata è $f = 1$ (cioè fase piena). L'**elongazione** (l'angolo Sole–Terra–Pianeta) è prossima a zero: il pianeta appare in cielo nella stessa direzione del Sole.

La distanza geocentrica del pianeta in questa configurazione è **massima**: per un'orbita circolare vale $\Delta$ (delta) = $R + r$, dove $\Delta$ è la distanza totale, $R$ è la distanza Terra–Sole e $r$ quella eliocentrica del pianeta. Per Mercurio $r \approx 0{,}387\,\text{au}$, per Venere $r \approx 0{,}723\,\text{au}$. Alla congiunzione superiore, sommando $R + r$, Mercurio si trova a circa $1{,}39\,\text{au}$ dalla Terra, Venere a circa $1{,}72\,\text{au}$. Alla distanza massima, il loro disco raggiunge la grandezza minima se visto dalla Terra. Entrambi i pianeti sono comunque del tutto **invisibili**.

## I tre motivi per cui Venere e Mercurio sono invisibili alla congiunzione superiore

Il primo motivo è che la separazione angolare dal Sole è nulla, o quasi. Il pianeta sorge e tramonta insieme al Sole, e durante il giorno è immerso nel cielo pieno di luce solare diffusa dall'atmosfera. Non è un problema di luminosità intrinseca del pianeta, ma di *contrasto con il fondo del cielo*: la luminanza superficiale del cielo diurno nei pressi del Sole è *miliardi* di volte superiore a quella necessaria per percepire un puntino di luce riflessa di origine planetaria.

Il secondo motivo è che il pianeta può trovarsi talvolta geometricamente **dietro** il disco solare. Il Sole ha un diametro angolare di circa $32$ minuti d'arco. Se l'orbita del pianeta fosse perfettamente complanare con l'eclittica, alla congiunzione superiore il pianeta sarebbe oscurato dal disco solare stesso. Ma le orbite dei pianeti interni sono leggermente inclinate (Mercurio di circa $7^{\circ}$, Venere di circa $3{,}4^{\circ}$ rispetto all'eclittica), per cui il pianeta transita per lo più al di sopra o al di sotto del disco; l'**occultazione** effettiva è possibile, ma rara.

Il terzo motivo è che la distanza massima raggiunta alla congiunzione superiore **riduce il flusso** di radiazione proveniente dal pianeta, ricevuto sulla Terra. Anche astraendo dalla luce solare di fondo, il pianeta si trova alla distanza geocentrica maggiore dell'intero ciclo orbitale. Indichiamo con $\Delta$, come sopra, la **distanza** istantanea tra la Terra e il pianeta considerato. Tale distanza varia continuamente lungo il **periodo sinodico**[^1]: per i pianeti interni è minima alla congiunzione inferiore e massima alla congiunzione superiore. Nel caso di Venere, alla congiunzione superiore $\Delta_\text{sup} = 1{,}72\,\text{au}$, alla congiunzione inferiore $\Delta_\text{inf} = 0{,}28\,\text{au}$. Il flusso di luce riflessa che ci arriva dal pianeta scala con $\Delta^{-2}$: il rapporto tra i flussi ai due estremi del ciclo vale quindi $(\Delta_\text{sup} / \Delta_\text{inf})^2 = (1{,}72 / 0{,}28)^2 \approx 37{,}7$. Vuol dire che il flusso di luce proveniente da Venere è quasi $38$ volte *inferiore* quando Venere è in congiunzione superiore rispetto al flusso che riceviamo quando è in congiunzione inferiore. In sintesi, la fase favorevole ($f = 1$) non compensa la distanza sfavorevole.

## La massima luminosità di Venere e la congiunzione inferiore

Proprio per il contrasto tra fase e distanza emerge un risultato *controintuitivo*: Venere non è più brillante a fase piena, cioè alla congiunzione superiore, bensì a una fase intermedia, **una sottile falce**, poco prima o poco dopo la congiunzione inferiore.

La **luminosità apparente** dipende dal prodotto della **funzione di fase** per il quadrato inverso della distanza:

$$
m \propto -2{,}5\log\left[\Phi(\alpha)\left(\frac{R_\text{V}}{\Delta}\right)^{2}\right],
$$

in cui $\Phi(\alpha)$ è la funzione di fase. Man mano che Venere si avvicina alla congiunzione inferiore, $\Delta$ diminuisce rapidamente (il pianeta si avvicina a noi), ma $\Phi(\alpha)$ cala altrettanto rapidamente perché la porzione illuminata visibile si restringe. Il massimo della brillanza apparente, la cosiddetta **massima elongazione brillante**, si verifica intorno a $\alpha \approx 118^\circ$, quando la falce è sottile ma il pianeta è abbastanza vicino, sicché i due fattori si bilanciano ottimamente. Questo punto geometrico corrisponde a una **falce calante o crescente** con circa il $25\% - 28\%$ del disco illuminato. In quei momenti, Venere raggiunge una magnitudine visuale apparente di circa $-4{,}9$, sufficiente a proiettare ombre di notte e persino a essere visibile a occhio nudo di giorno, purché si sappia esattamente dove cercare e il cielo sia limpido[^2].

La **congiunzione inferiore** è speculare sotto il profilo della visibilità, ma per ragioni diverse: con $\alpha \approx 180^\circ$, il pianeta si trova tra il Sole e la Terra, la faccia notturna è rivolta verso di noi, la distanza geocentrica è minima e il disco del pianeta raggiunge la grandezza apparente massima. La separazione angolare dal Sole è di nuovo prossima a zero, dunque Venere o Mercurio sono ancora immersi nel bagliore solare. Visto che alla congiunzione inferiore il pianeta è *davanti* al Sole, non dietro, rispetto alla Terra, se l'inclinazione orbitale lo consente, possono verificarsi i **transiti**: il disco del pianeta attraversa la fotosfera solare e diventa osservabile come un pallino scuro mentre percorre l'enorme superficie del disco solare. È questa l'unica configurazione in cui un pianeta interno è visibile a elongazione zero.

In sintesi: alla congiunzione superiore l'angolo di fase è ottimale per l'illuminazione, ma la vicinanza angolare al Sole rende impossibile l'osservazione dalla Terra. Alla congiunzione inferiore, non solo il pianeta è immerso nel bagliore solare, ma rivolge verso la Terra anche il suo lato notturno.

## Gli angoli di fase dei pianeti esterni del Sistema Solare

Passiamo ora considerare la **geometria** degli angoli di fase per i **pianeti esterni** del Sistema Solare.

Esiste in questo caso un vincolo geometrico fondamentale: i pianeti esterni non possono **mai interporsi** tra la Terra e il Sole. L'angolo di fase $\alpha$, misurato al corpo osservato, tra la direzione verso il Sole e quella verso l'osservatore terrestre, è quindi strutturalmente confinato in un intervallo piccolo, tanto più ristretto quanto più il pianeta è lontano.

Nel triangolo Sole–Pianeta–Terra, indicando con $r$ la distanza eliocentrica del pianeta esterno e con $R \approx 1\,\text{au}$ la distanza Terra–Sole, la legge dei seni fornisce:

$$
\frac{\sin\alpha}{R} = \frac{\sin\varepsilon}{r}
$$

dove $\varepsilon$ (epsilon) è l'**elongazione** (l'angolo Sole–Terra–Pianeta) e $\alpha$ è l'angolo di fase (Sole-Pianeta–Terra). Poiché per i pianeti esterni l'elongazione può estendersi fino a $180^\circ$ (all'opposizione), l'angolo di fase non raggiunge mai i $90^\circ$. Il suo valore massimo si ottiene quando la derivata rispetto alla geometria orbitale si annulla, condizione che si verifica esattamente alla **quadratura ($\varepsilon = 90^\circ$)**, dove

$$
\alpha_\text{max} = \arcsin\left(\frac{R}{r}\right)
$$

Per Marte, $r \approx 1{,}52\,\text{au}$. Quando si trova in quadratura ($\varepsilon = 90^\circ$), l'angolo di fase $\alpha$ raggiunge il suo picco massimo di circa $41^{\circ}$:

$$
\arcsin(1 / 1{,}52) \approx 41^\circ
$$

Oltre quel punto, mentre l'elongazione continua a crescere verso i $180^\circ$, l'angolo di fase torna a decrescere verso lo zero.

I valori massimi di $\alpha$ per i pianeti del Sistema Solare esterno sono i seguenti:

| Pianeta | $r$ (au) | $\alpha$ massimo |
|:---|---:|---:|
| Marte | 1,524 | ~41,0° |
| Giove | 5,203 | ~11,1° |
| Saturno | 9,537 | ~6,0° |
| Urano | 19,190 | ~3,0° |
| Nettuno | 30,070 | ~1,9° |

Al di là di Marte, l'angolo di fase varia così poco che la variazione nella frazione illuminata è fotometricamente irrilevante: Giove non appare mai meno del $99\%$ illuminato, Saturno e i pianeti più lontani restano apparentemente e permanentemente a disco pieno per qualunque osservatore terrestre.

Il ciclo di visibilità di un pianeta esterno è scandito dal **periodo sinodico** $T_\text{sin}$, il tempo tra due opposizioni successive, secondo la relazione:

$$
\frac{1}{T_\text{sin}} = \frac{1}{T_\oplus} - \frac{1}{T_\text{p}}
$$

Usiamo la formula per calcolare quanti giorni terrestri passano tra due opposizioni successive di Marte. Innanzitutto, calcoliamo l'inverso dei periodi:

$$
\begin{aligned}
\frac{1}{T_\oplus} = \frac{1}{365{,}25} \approx 0{,}00273785 \text{ cicli/giorno} \\
\frac{1}{T_\text{Marte}} = \frac{1}{686{,}98} \approx 0{,}00145565 \text{ cicli/giorno}
\end{aligned}
$$

Sottraiamo i due valori:

$$
\frac{1}{T_\text{sin}} = 0{,}00273785 - 0{,}00145565 = 0{,}00128220 \text{ cicli/giorno}
$$

Infine, troviamo il periodo sinodico calcolando l'inverso del risultato:

$$
T_\text{sin} = \frac{1}{0{,}00128220} \approx \mathbf{779{,}9 \text{ giorni}}
$$

Per Marte, dunque, l'intervallo tra due successive opposizioni è circa $780$ giorni terrestri. Per Giove, eseguendo lo stesso tipo di calcolo fatto sopra, otteniamo un periodo sinodico di circa **$399$ giorni**, mentre per Saturno di circa **$378$ giorni**. Per Urano e Nettuno, che orbitano lentissimamente intorno al Sole rispetto alla Terra, il periodo sinodico è appena superiore all'anno siderale terrestre, poiché la Terra riesce a "doppiare" il pianeta quasi subito dopo l'inizio di un nuovo anno.

## Configurazioni notevoli dei pianeti esterni

Le configurazioni notevoli, nell'ordine del ciclo, sono:

**Opposizione** ($\varepsilon = 180^\circ$, $\alpha \approx 0^\circ$). Il Sole, la Terra e il pianeta sono allineati, con la Terra al centro. L'angolo di fase è minimo, ma non esattamente zero a causa dell'inclinazione orbitale. Il pianeta sorge al tramonto del Sole, culmina a mezzanotte e tramonta all'alba: è visibile per l'intera notte. La distanza geocentrica è la più piccola del ciclo:

$$
\Delta_\text{opp} = r - R \quad \text{(per orbite circolari)}
$$

**Quadratura orientale** ($\varepsilon = 90^\circ$ est, $\alpha = \text{valore max}$). Il pianeta è 90° a est del Sole, sorge a mezzogiorno, culmina verso le ore 18 e tramonta intorno a mezzanotte. È visibile nella prima metà della notte. L'angolo di fase raggiunge il valore massimo: l'unico momento del ciclo in cui la geometria di illuminazione si discosta apprezzabilmente da $\alpha \approx 0^\circ$, e solo per Marte questo si traduce in una forma visibilmente gibbosa.

**Congiunzione** ($\varepsilon \approx 0^\circ$, $\alpha \approx 0^\circ$). Il pianeta transita dietro al Sole (la geometria è Terra–Sole–Pianeta). L'elongazione è nulla: il pianeta sorge e tramonta con il Sole ed è completamente inosservabile. La distanza geocentrica è la massima dell'intero ciclo:

$$
\Delta_\text{con} = r + R
$$

**Quadratura occidentale** ($\varepsilon = 90^\circ$ ovest, $\alpha = \text{valore max}$). Speculare alla quadratura orientale: il pianeta sorge intorno a mezzanotte e transita all'alba. È visibile nella seconda metà della notte.

La variazione dell'angolo di fase, insieme a quella della distanza, determina una variazione del flusso luminoso ricevuto, come già visto per i pianeti interni. Possiamo dire che distanza e fase sono in competizione. Abbiamo, dunque:

**a) La distanza geocentrica $\Delta$**, che scala il flusso in base a $\Delta^{-2}$ ed è il fattore dominante per tutti i pianeti oltre Marte. Per Giove, il rapporto tra distanza alla congiunzione e all'opposizione è:

$$
(5{,}2 + 1)/(5{,}2 - 1) \approx 1{,}49,
$$

per cui il flusso varia di un fattore di circa $2{,}2$ tra i due estremi, equivalente più o meno a $0{,}85$ magnitudini[^3].

**b) La funzione di fase $\Phi(\alpha)$**, che per tutti i pianeti oltre Marte cambia meno del $2\%$ nell'intero ciclo sinodico e costituisce una correzione trascurabile rispetto all'effetto di distanza.

L'implicazione pratica è che la curva di luce di un pianeta esterno, riferita all'intero ciclo sinodico, è dominata quasi interamente dalla variazione di $\Delta$: la brillanza cresce progressivamente avvicinandosi all'opposizione e decresce allontanandosi, con la funzione di fase come perturbazione di secondo ordine[^4].

## L'effetto di opposizione

Nelle immediate vicinanze dell'opposizione, tipicamente entro pochi gradi da $\alpha \approx 0^\circ$, la brillanza dei corpi del sistema solare esterno non segue la progressione regolare prevista dalla funzione di fase, bensì mostra un incremento non lineare e pronunciato: è il cosiddetto **effetto di opposizione**.

La locuzione descrive l'improvviso e *marcato aumento della luminosità apparente* di un corpo celeste privo di atmosfera (come la Luna, gli asteroidi o gli anelli di Saturno[^5]) quando l'angolo di fase si avvicina a zero, ovvero quando l'oggetto si trova *esattamente* in opposizione rispetto al Sole, se osservato dalla Terra.

Ci sono due meccanismi fisici principali che spiegano questo fenomeno:

- **l'improvviso annullamento delle ombre.** Quando l'oggetto è in perfetta opposizione, la sorgente luminosa è esattamente alle spalle dell'osservatore. Tutte le microscopiche ombre generate dalle asperità, dai crateri e dai granelli di regolite della superficie rocciosa vengono proiettate direttamente dietro le strutture stesse, risultando nascoste alla nostra vista. Questo fa sì che la superficie appaia improvvisamente molto più luminosa del previsto.
- **La coerenza di retrodiffusione** (*Coherent backscattering*). È un effetto di interferenza costruttiva quantistica/ottica. La luce riflessa dalle minuscole particelle superficiali compie percorsi speculari che si sommano in fase esattamente nella direzione di provenienza della luce (ad angolo di fase $\approx 0^\circ$), amplificandone l'intensità.

## Gli angoli di fase nello studio degli esopianeti

Un fatto notevole è che l'uso degli angoli di fase per valutare l'illuminazione di un corpo celeste non è limitato al Sistema Solare, ma si estende ormai da anni allo studio degli **esopianeti**, quei pianeti, cioè, che orbitano intorno a stelle diverse dal Sole. Ne conosciamo oggi diverse migliaia, ma, tranne pochissime eccezioni, non possiamo osservarli direttamente, perché sono troppo lontani e risultano "annegati" nella luce della loro stella.

Il metodo d'indagine principale è lo studio dei **transiti planetari**. Telescopi dotati di strumenti fotometrici sensibilissimi (come Kepler e TESS, per esempio) osservano le sottilissime variazioni di luminosità delle stelle scelte come bersaglio e, da tali minuscole oscillazioni, determinano non solo l'esistenza di pianeti in transito davanti a quelle stelle, ma anche le fasi orbitali di quei pianeti. Le **curve di luce** delle stelle osservate sono gli strumenti da cui i ricercatori ricavano moltitudini di dati sui pianeti che orbitano intorno a quelle stelle, tra cui l'angolo di fase e informazioni sulle eventuali atmosfere e superfici planetarie.

Quando un esopianeta passa *davanti* alla stella si ha il transito, che corrisponde a un angolo di fase $\alpha \approx 180^\circ$. In quel momento, dalla Terra "vediamo" il lato notturno del pianeta (quello illuminato è rivolto verso la stella). Per noi, l'unico effetto visibile del transito è il blocco di una frazione minima del flusso luminoso proveniente dalla stella.

C'è poi la cosiddetta **eclissi secondaria**, che corrisponde a un angolo di fase $\alpha \approx 0^\circ$. In quel momento il pianeta si trova *dietro* la stella rispetto al nostro punto di vista. Il lato diurno del pianeta è rivolto verso di noi, ma non lo vediamo perché nascosto dalla stella.

Misurando il lieve calo di luminosità durante l'eclissi secondaria e confrontandolo con quello osservato durante il transito e nelle fasi intermedie dell'orbita, è possibile isolare il contributo del pianeta alla luce complessiva del sistema. L'analisi degli spettri così ricavati rivela informazioni preziose sulla sua atmosfera, come la presenza di molecole di acqua, metano o anidride carbonica.

Telescopi spaziali come Kepler, TESS e James Webb hanno consentito di misurare non solo il transito e l'eclissi secondaria di molti esopianeti, ma l'intera **curva di fase**, cioè la variazione continua di luminosità del sistema stellare per tutto l'arco dell'orbita.

Analizzando come cambia la luce riflessa alle lunghezze d'onda del visibile e la luce termica emessa nell'infrarosso al variare di $\alpha$, gli scienziati possono:

- **costruire mappe termiche** del pianeta (scoprendo se ha un "punto caldo" spostato rispetto al punto sub-stellare a causa dei venti atmosferici);
- distinguere se la luce proviene da **nuvole** riflettenti o dal calore del suolo;
- calcolare l'**albedo** (quanta luce riflette il pianeta) e la **temperatura** del lato diurno e di quello notturno.

In sintesi, per gli esopianeti, l'angolo di fase non è solo un dato geometrico, ma è il "termometro" e lo "specchio" che ci consente di analizzare il meteo e la chimica di mondi lontani decine o centinaia di anni luce.

[^1]: Il **periodo sinodico** è l'intervallo di tempo impiegato da un corpo celeste (come un pianeta o la Luna) per ritornare nella stessa posizione apparente in cielo rispetto al Sole, se osservato dalla Terra. Di conseguenza, è esattamente il tempo che intercorre tra due *congiunzioni successive dello stesso tipo* per un pianeta interno (ad esempio, tra due congiunzioni inferiori o tra due congiunzioni superiori). Per Venere vale circa $584$ giorni contro i $225$ del suo anno.

[^2]: Per Venere, questo momento di splendore straordinario si verifica circa **$36$ giorni** prima o dopo la congiunzione inferiore.

[^3]: Il valore di $0{,}85$ magnitudini è corretto assumendo distanze medie e orbite circolari, ma la variazione reale osservata è circa **$1{,}3$ magnitudini** a causa dell'eccentricità orbitale ($e = 0{,}049$) dell'orbita di Giove.

[^4]: L'orbita di Marte ha **eccentricità** $e$ pari a circa $0{,}093$, la più alta tra i pianeti di tipo terrestre. La distanza eliocentrica varia tra circa $1{,}381\,\text{au}$ al perielio e circa $1{,}666\,\text{au}$ all'afelio. Ne consegue che le opposizioni perielica e afelica producono geometrie radicalmente diverse: $\Delta$ varia tra $0{,}37$ e $0{,}67\; \text{au}$, il diametro angolare di Marte tra $25$ e $14$ secondi d'arco e la magnitudine apparente tra circa $-2{,}9$ e circa $-1{,}0$. La differenza di quasi $2$ magnitudini tra l'opposizione più favorevole e quella meno favorevole riflette quasi interamente la variazione di $\Delta$, non quelle dell'angolo di fase.

[^5]: Quando l'effetto di opposizione si osserva specificamente sugli anelli di Saturno, prende spesso il nome storico di **effetto Seeliger**. L'astronomo Hugo von Seeliger notò nel 1887 che, durante l'opposizione del pianeta, gli anelli aumentavano di luminosità in modo molto più netto rispetto al disco gassoso di Saturno. Questo accade perché le particelle di ghiaccio che compongono gli anelli si comportano come una superficie estremamente ruvida e discontinua, massimizzando il fenomeno del camuffamento delle ombre (vedi più avanti nel testo).
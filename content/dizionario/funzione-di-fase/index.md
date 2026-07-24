+++
title = "Funzione di fase"
date = "2026-07-21"
draft = false
+++

{{< katex />}}

## Definizione

Indicata convenzionalmente con $\Phi(\alpha)$, descrive come varia la luminosità apparente di un corpo illuminato al cambiare del suo [angolo di fase]({{< relref "/dizionario/angolo-di-fase/" >}}), cioè dell'angolo formato dalla sorgente di luce, dal corpo osservato e dall'osservatore. Essa esprime il *rapporto* tra la luce che il corpo riflette o diffonde verso l'osservatore a un determinato angolo di fase e quella che rifletterebbe se fosse osservato completamente illuminato, cioè con angolo di fase nullo ($\alpha$ = $0\,^\circ$).

La funzione si applica a corpi celesti che non emettono luce propria, come un pianeta, un satellite, un asteroide o un granello di polvere interplanetaria.

## Rapporto tra funzione e angolo di fase

Per capire il legame tra la funzione $\Phi(\alpha)$ e l'angolo di fase $\alpha$, dobbiamo ricordare due elementi importanti della geometria degli angoli di fase:

- Quando $\alpha$ si avvicina a $0\,^\circ$, si ha l'illuminazione frontale del corpo illuminato (la Luna Piena ad esempio). Tale angolo corrisponde alla congiunzione superiore per Venere e Mercurio e all'opposizione per i pianeti esterni del Sistema Solare.
- Quando $\alpha$ aumenta, la porzione visibile di disco illuminato *diminuisce*, e subentrano gli effetti di ombra geometrica e rugosità della superficie.

Man mano che l'angolo di fase aumenta, il valore della funzione si avvicina a zero. La funzione quantifica l'**efficienza** con cui una superficie o una particella riflettono la luce in una determinata direzione rispetto a una riflessione ideale. Per convenzione la funzione è generalmente normalizzata in modo che, quando l'angolo di fase è nullo, $\Phi(0\,^\circ)=1$.

## La funzione di fase dipende dalle proprietà fisiche dell'oggetto osservato

L'efficienza con cui un oggetto riflette la luce dipende in gran parte dalle sue proprietà fisiche. In particolare, sono importanti:

- **la rugosità della superficie.** Superfici molto irregolari e ricche di crateri o regolite (come quella della Luna) creano micro-ombre che fanno crollare la luminosità molto rapidamente non appena ci si allontana dall'opposizione.
- **l'effetto di opposizione.** Per angoli di fase vicini a $0\,^\circ$, si nota un picco improvviso e non lineare di luminosità. Questo è dovuto al "nascondimento delle ombre" e alla coerenza di retrodiffusione della luce attraverso i granelli di polvere (i due fenomeni sono spiegati più estesamente nella voce dedicata all'angolo di fase).
- **l'albedo.** Corpi con [albedo]({{< relref "/dizionario/albedo/" >}}) alta, molto riflettenti come Encelado, tendono ad avere funzioni di fase diverse rispetto a corpi scurissimi, come ad esempio gli asteroidi di tipo C.

La forma della funzione di fase dipende, dunque, dalle proprietà fisiche della superficie o dell'atmosfera del corpo osservato. Una superficie liscia, una ricoperta di polvere o un'atmosfera ricca di nubi diffondono la luce in modi differenti, producendo curve caratteristiche della luminosità in funzione dell'angolo di fase.

Un esempio familiare è quello di **Venere**. Se la sua luminosità apparente dipendesse soltanto dalla frazione di disco illuminata visibile dalla Terra, il pianeta apparirebbe progressivamente più debole all'aumentare dell'angolo di fase. In realtà il comportamento è più complesso: mentre la porzione illuminata diminuisce, Venere si avvicina alla Terra e il suo disco apparente cresce. Inoltre, le dense nubi della sua atmosfera diffondono la luce in modo molto efficiente, rendendo la pendenza di $\Phi(\alpha)$ meno ripida di quanto ci si aspetterebbe, cosicché l'avvicinamento alla Terra compensa e supera la perdita di fase. La funzione di fase descrive il contributo della geometria di illuminazione e delle proprietà diffusive dell'atmosfera di Venere[^1].

In sintesi, mentre l'angolo di fase esprime *in che posizione geometrica* si trovano i corpi osservati rispetto alla sorgente di luce e all'osservatore, la **funzione di fase** esprime *quanta luce* disperdono in quella specifica posizione i materiali di cui i corpi sono fatti. Potremmo dire che la funzione di fase è un sistema per descrivere la risposta fotometrica di un oggetto alla geometria di illuminazione, separandola dagli effetti della distanza. Si tratta, pertanto, di uno strumento fondamentale che gli astronomi hanno a disposizione, per risalire alla composizione e alla struttura della superficie di un corpo celeste pur senza avere la possibilità di esaminarlo da vicino.

## La funzione di fase nel calcolo della magnitudine

In fotometria del Sistema solare, la funzione di fase rientra nel calcolo della **magnitudine apparente** di un corpo illuminato in base alla formula:

$$m(\alpha) = H + 5\log_{10}(r\,\Delta) - 2{,}5\log_{10}\Phi(\alpha)$$

dove $r$ è la distanza eliocentrica del corpo e $\Delta$ la sua distanza dall'osservatore, entrambe espresse in unità astronomiche al momento dell'osservazione. Il termine $5\log_{10}(r\,\Delta)$ cattura la doppia caduta geometrica del flusso: il corpo riceve luce solare con intensità $\propto 1/r^2$, e la riflette verso l'osservatore con intensità $\propto 1/\Delta^2$.

$H$ è la **magnitudine assoluta**, definita come il valore che $m$ assumerebbe nelle condizioni di riferimento $r = \Delta = 1\;\mathrm{au}$ e $\alpha = 0\,^\circ$. Si tratta di una quantità *fissa*, indipendente dall'angolo di fase a cui il corpo viene effettivamente osservato: è proprio perché $H$ non cambia con $\alpha$ che la formula può essere usata per isolarla a partire da un'osservazione a fase qualsiasi. $H$ è quindi il caso particolare $H=H(0)$ della **magnitudine ridotta** $H(\alpha) = m - 5\log_{10}(r\,\Delta)$, la quantità che invece varia con l'angolo di fase e che generalizza $H$ a fase non nulla.

Nelle condizioni di riferimento $r=\Delta=1\;\mathrm{au}$, $\alpha=0\,^\circ$, i due termini correttivi si annullano:

$$5\log_{10}(1 \cdot 1) = 0 \quad \text{e} \quad -2{,}5\log_{10}(1) = 0$$

Vale la pena di notare che il luogo geometrico in cui $r = \Delta = 1\;\mathrm{au}$ e $\alpha = 0\,^{\circ}$ è una pura astrazione[^2], utilizzata al solo scopo di *standardizzare* la definizione di magnitudine assoluta $H$ come la situazione in cui $m=H$ quando $\alpha = 0\,^\circ$.

In tutti gli altri casi la formula descrive proprio lo **scarto** tra $m$ e $H$, cioè di quanto la magnitudine apparente osservata si discosta da quella assoluta a causa della distanza e della geometria di illuminazione.

Inoltre, poiché $\Phi(\alpha) \le 1$ per $\alpha > 0\,^\circ$, il termine $-2{,}5\log\Phi(\alpha)$ è sempre *positivo*: il corpo illuminato appare *più debole* a qualsiasi angolo di fase diverso da zero.

## Non esiste una funzione di fase universale

Poiché non esiste una funzione di fase universale valida per tutti i corpi, nella pratica astronomica vengono adottati modelli empirici (come il sistema $H$-$G$ di Bowell o il sistema $H$-$G_1$-$G_2$) che descrivono la forma della curva mediante uno o più parametri, introdotti a partire dal 1985 e poi più volte modificati.

Uno di questi è il parametro $G$ (*slope parameter*), tipicamente compreso tra $0$ e $1$, sebbene in alcuni casi particolari possa assumere valori negativi. Valori alti di $G$ indicano superfici brillanti e riflettenti come ghiaccio e regolite fresca, con una caduta lenta della luminosità all'aumentare di $\alpha$. Valori bassi caratterizzano, invece, superfici scure e molto dipendenti dalla geometria. Per gli asteroidi di tipo C (molto scuri) si ha tipicamente $G \approx 0{,}05$–$0{,}15$, per quelli di tipo S, $G \approx 0{,}20$–$0{,}30$.

## Un esempio pratico

Un esempio pratico può aiutare a capire meglio. Immaginiamo di osservare un asteroide a $1\,\mathrm{au}$ di distanza dal Sole e dalla Terra con un angolo di fase di $30\,^\circ$. Lo vediamo con magnitudine apparente $= 15{,}0$. Applicando la funzione di fase con il modello $H$-$G$, otteniamo che, per quell'asteroide con angolo di fase di $30\,^\circ$, la luminosità è ridotta di $1{,}3$ magnitudini rispetto a fase zero ($\alpha = 0\,^\circ$). Estrapolando quindi il valore a fase zero, ricaviamo la magnitudine assoluta $H$:

$$H = 15{,}0 - 1{,}3 = 13{,}7$$

Se un altro asteroide ha $H = 12{,}0$, sapremo immediatamente che, a parità di distanza e angolo di fase, il secondo è intrinsecamente più grande o più riflettente del primo.

Ecco alcuni dati numerici concreti, relativi a un asteroide di albedo medio-bassa (tipo C o S), con $H \approx 15{,}0$ mag a diversi angoli di fase. I valori sono calcolati direttamente dal modello $H$-$G$ con $G = 0{,}15$, in modo che $\Phi(\alpha)$ e la magnitudine siano mutualmente consistenti. In tabella, $H(\alpha)$ indica la **magnitudine ridotta**: la magnitudine apparente che l'asteroide mostrerebbe se si trovasse a $r=\Delta=1\,\mathrm{au}$ (cioè depurata della sola componente geometrica di distanza) ma osservato al reale angolo di fase $\alpha$. La **magnitudine assoluta** $H$ non è altro che il caso particolare $H = H(0)$, cioè il valore che $H(\alpha)$ assume quando $\alpha = 0\,^\circ$:

| α (gradi) | Φ(α) | Correzione (mag) | H(α) |
|:---------:|:----:|:-----------------:|:----:|
| $0$  | $1{,}000$ | $0{,}00$ | $15{,}0$ |
| $10$ | $0{,}552$ | $0{,}65$ | $15{,}7$ |
| $20$ | $0{,}399$ | $1{,}00$ | $16{,}0$ |
| $30$ | $0{,}302$ | $1{,}30$ | $16{,}3$ |

Come si vede, più aumenta l'angolo di fase, più la funzione di fase e la luminosità apparente dell'asteroide diminuiscono.

## In sintesi

In conclusione, la funzione di fase è il fattore di correzione fotometrico che permette di trasformare una misurazione reale (che avviene sempre a fasi diverse da zero) in un'estrapolazione che definisce la luminosità apparente di un corpo a un angolo di osservazione teoricamente irraggiungibile ($0\,^\circ$). Ciò consente di ottenere un parametro fisico, la magnitudine assoluta $H$, che è indispensabile per confrontare oggetti diversi e stimarne le dimensioni. Senza una funzione di fase precisa, non potremmo mai ottenere un valore di $H$ affidabile.

## Funzione di fase ed esopianeti

La funzione di fase è ampiamente utilizzata nello studio dei pianeti, degli asteroidi, delle comete, delle lune e degli **esopianeti**, proprio perché consente di ricavare informazioni sulla natura delle loro superfici o delle loro atmosfere. Nello studio degli esopianeti, ad esempio, il confronto tra la funzione di fase osservata e i modelli teorici permette di stimare la presenza di nubi, la riflettività della superficie, la distribuzione del calore e, in alcuni casi, la circolazione atmosferica. Anche per questo motivo la funzione di fase costituisce uno degli strumenti fondamentali della fotometria astronomica moderna.

[^1]: Si noti, però, che la funzione di fase descrive soltanto l'effetto dell'angolo di fase. La luminosità realmente osservata dipende anche dalla distanza.

[^2]: Infatti, le condizioni di riferimento $r = \Delta = 1\,\mathrm{au}$ con $\alpha = 0\,^{\circ}$ sono geometricamente irrealizzabili. Se il corpo si trova a $1\,\mathrm{au}$ dal Sole e $\alpha = 0\,^{\circ}$, vuol dire che l'osservatore è nella direzione del Sole visto dal corpo, ma anche che l'osservatore dovrebbe trovarsi esattamente al centro del Sole per avere simultaneamente $\Delta = 1\,\mathrm{au}$.
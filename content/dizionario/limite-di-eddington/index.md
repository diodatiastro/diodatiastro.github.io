+++
title = "Limite di Eddington"
date = "2026-07-24"
draft = false
+++

{{< katex />}}

## Equilibrio idrostatico e pressione di radiazione

Una stella è il risultato di un equilibrio tra forze opposte, e lo stesso vale per un oggetto in fase di accrescimento come l'intorno di un buco nero o una stella di neutroni. La gravità tende a comprimere la materia verso il centro; la pressione interna, dovuta al calore e in parte alla radiazione, si oppone alla compressione. Ne consegue una condizione chiamata [equilibrio idrostatico]({{< relref "/dizionario/equilibrio-idrostatico/" >}}), in cui un corpo luminoso rimane stabile perché gravità e pressione interna si bilanciano più o meno perfettamente. In una stella molto luminosa entra in gioco, tuttavia, un terzo fattore: la **pressione di radiazione**, che può alterare quell'equilibrio. Infatti, i fotoni che fluiscono verso l'esterno, benché privi di massa, trasportano **momento**, cioè quantità di moto. Interagendo con il plasma, esercitano una **forza netta** diretta verso l'esterno.

{{% box tipo="definizione" titolo="Pressione di radiazione e limite di Eddington" %}} 
La domanda è: esiste una luminosità massima oltre la quale questa forza *supera* la gravità, rendendo impossibile il confinamento della materia? La risposta è sì, e quella soglia si chiama limite di Eddington (o **luminosità di Eddington**), dal nome dell'astrofisico britannico Arthur Stanley Eddington che lo derivò nei primi decenni del Novecento.
{{% /box %}}

## La lotta tra gravità e pressione di radiazione

Per capire l'origine del fenomeno, consideriamo del plasma nella [fotosfera]({{< relref "/dizionario/fotosfera/" >}}) di una stella di massa $M$ e luminosità $L$, a distanza $r$ dal centro. Il plasma è composto essenzialmente da protoni ed elettroni (idrogeno completamente ionizzato). La massa dominante è quella del protone ($m_p$); l'elettrone, infatti, è circa $1.836$ volte più leggero e contribuisce in modo trascurabile. La **forza gravitazionale** sentita dal protone sarà dunque:

$$
F_{\text{grav}} = \frac{GMm_p}{r^2}
$$

dove $G$ è la costante gravitazionale.

Consideriamo ora, invece, la **forza radiativa**. Stavolta sono importanti gli elettroni liberi, non i protoni. I fotoni, infatti, interagiscono con il plasma principalmente tramite la **diffusione** (*o scattering*) **di Thomson** sugli elettroni liberi. Questo tipo di interazione tra fotoni ed elettroni è determinato da una costante fondamentale dell'elettrodinamica quantistica, la sezione d'urto di Thomson, indicata con $\sigma_T$, il cui valore è:

$$
\sigma_T \simeq 6{,}652 \times 10^{-25} \,\text{cm}^2.
$$

Abbiamo poi il [flusso di radiazione]({{< relref "/dizionario/flusso-di-radiazione/" >}}) alla distanza $r$, che è:

$$
F = \frac{L}{4\pi r^2}
$$

Tenendo conto della sezione d'urto $\sigma_T$ e del flusso di radiazione $F$, si può calcolare la forza esercitata dalla radiazione sull'elettrone (e sull'intera coppia protone–elettrone, tramite il legame elettrostatico). Questa forza è pari a:

$$
F_{\text{rad}} = \frac{\sigma_T}{c} \cdot \frac{L}{4\pi r^2}
$$

in cui $c$ è la velocità della luce. Quando un corpo raggiunge la luminosità di Eddington $L_{\text{Edd}}$ le due forze - gravità e spinta della radiazione - si bilanciano:

$$
\frac{\sigma_T L_{\text{Edd}}}{4\pi r^2 c} = \frac{GMm_p}{r^2}
$$

## Il limite di Eddington è una proprietà globale

Poiché $r^2$ è presente in entrambi i membri dell'equazione, la dipendenza dal raggio si cancella. Vuol dire che il limite di Eddington è una proprietà *globale* dell'oggetto, indipendente dalla distanza dal centro. Risolvendo l'equazione per $L_{\text{Edd}}$ otteniamo:

$$
L_{\text{Edd}} = \frac{4\pi GMm_p c}{\sigma_T}
$$

Ora che abbiamo la formula generale, possiamo sostituire alle costanti fisiche i relativi valori e svolgere i calcoli, così da ottenere un dato numerico preciso per identificare il limite di Eddington:

$$
\begin{aligned}
L_{\text{Edd}} & \simeq 1{,}26 \times 10^{38} \left(\frac{M}{M_\odot}\right)\,\text{erg}\,\text{s}^{-1} \\
               & \simeq 3{,}2 \times 10^{4} \left(\frac{M}{M_\odot}\right) L_\odot
\end{aligned}
$$

Notiamo subito che, nel caso del Sole, in cui la frazione tra parentesi dà come risultato $1$, il limite di Eddington è circa $32.000$ volte maggiore della luminosità solare. Significa che la pressione di radiazione del Sole svolge un ruolo davvero trascurabile nel contrastare la gravità solare. Il Sole, in altre parole, è ben lontano dal limite di Eddington per una stella della sua massa.

In linea generale, la formula ci dice che il limite di Eddington scala linearmente con la massa: una stella da $10$ masse solari ha

$$
L_{\text{Edd}} \simeq 3{,}2 \times 10^5 \, L_\odot
$$

cioè $320.000$ luminosità solari. Un buco nero da cento milioni di masse solari, tipico di un nucleo galattico attivo (o AGN), ha un limite di Eddington di

$$
L_{\text{Edd}} \simeq 3{,}2 \times 10^{12} \, L_\odot
$$

cioè circa $3.200$ miliardi di luminosità solari!

## Massa, luminosità e limite di Eddington

Per quanto riguarda le stelle, all'aumentare della massa, la luminosità cresce in modo esponenziale, approssimativamente con il cubo della massa (**$L \propto M^3$**). Ciò significa che le stelle più massicce hanno un rapporto luminosità/massa molto sbilanciato a favore della luminosità, sicché la loro pressione di radiazione diventa via via sempre più difficile da contrastare per la gravità. Quando la luminosità di una stella si avvicina alla luminosità di Eddington per la sua massa, gli strati esterni diventano debolmente legati e anche una piccola perturbazione può innescare una significativa **perdita di massa**.

Se poi il limite di Eddington viene superato, la pressione di radiazione può generare un flusso di materia potente e continuo, tale da strappare via l'involucro esterno della stella, almeno fino a quando la luminosità non scende nuovamente al di sotto del limite.

La stella più massiccia conosciuta, **R136a1** nella Grande Nube di Magellano, ha una massa attuale stimata di circa $150–265$ masse solari e una luminosità che rappresenta una frazione significativa (fino all'$80\%$) della sua luminosità di Eddington, a dimostrazione del fatto che la natura può spingere talvolta le cose fino all'estremo.

In generale, le stelle che più si avvicinano al limite di Eddington e che sono più soggette a forti perdite di massa causate dalla pressione di radiazione sono le stelle di tipo O e B con masse superiori alle $50$ masse solari e luminosità *milioni* di volte maggiori di quella del Sole. Queste stelle sviluppano venti stellari intensi con continua espulsione di materia dagli strati superficiali. Ciò limita di fatto la **massa massima** che una stella può raggiungere. Si stima che stelle con massa iniziale superiore a $150–300$ masse solari siano *instabili* proprio per questo motivo. Il limite esatto dipende dalla metallicità e da altri parametri.

Le **variabili luminose blu** (o LBV, dall'inglese *Luminous Blue Variables*), tra cui Eta Carinae, sono probabilmente oggetti che si trovano cronicamente vicino o oltre il limite di Eddington, manifestando episodi eruttivi in cui espellono masse significative di gas. Altri oggetti particolarmente instabili sono le cosiddette stelle di **Wolf-Rayet**, che appaiono all'osservazione circondate da enormi aloni di materia espulsa nel corso di periodici fenomeni eruttivi.

{{< figura 
src="immagini/wr124.jpg" 
alt="La stella di Wolf-Rayet WR 124, ripresa dal JWST nel vicino e medio infrarosso nel 2023. La nebulosa che circonda la stella, chiamata M1-67, è stata prodotta da WR 124 nel corso di precedenti episodi eruttivi." 
caption="La stella di Wolf-Rayet WR 124, ripresa dal JWST nel vicino e medio infrarosso nel 2023. La nebulosa che circonda la stella, chiamata M1-67, è stata prodotta da WR 124 nel corso di precedenti episodi eruttivi. Le stelle di Wolf-Rayet sono caratterizzate da potentissimi venti stellari che favoriscono l'espulsione di enormi quantità di materia dagli strati più esterni. Questi fenomeni di perdita di massa sono favoriti, tra le altre cose, dalla grande pressione di radiazione generata dall'intensissima luminosità tipica di questa particolare categoria di stelle. Crediti: NASA, ESA, CSA, STScI, Webb ERO Production Team."
>}}

## Fattori che complicano la definizione del limite di Eddington

In conclusione, è opportuno specificare che la derivazione standard del limite di Eddington poggia su alcune ipotesi semplificatrici che meritano di essere citate:

- **Composizione chimica.** La formula del limite usa la sezione d'urto dello scattering di Thomson e la massa del protone, valide per l'idrogeno completamente ionizzato. Per un plasma con abbondanza di elio o elementi più pesanti il limite si modifica leggermente, poiché cambiano il rapporto tra massa e numero di elettroni.

- **Geometria sferica.** La derivazione assume *simmetria sferica*. Nei dischi di accrescimento di stelle di neutroni e buchi neri la geometria è molto diversa, e la pressione di radiazione può essere anisotropa (cioè differente a seconda della direzione), il che ha importanti conseguenze sul valore e sul superamento del limite.

- **Accrescimento super-Eddington.** Osservazioni nei raggi X di sorgenti ultra-luminose (*ULX, Ultra-Luminous X-ray sources*) mostrano luminosità apparenti che superano il limite di Eddington di uno o due ordini di grandezza. Questo può essere spiegato in parte con ragioni geometriche (la radiazione non è emessa isotropicamente) e in parte con processi fisici che consentono un accrescimento effettivamente super-Eddington in presenza di forti campi magnetici o di strutture fisiche particolari.

- **Opacità variabile.** La sezione d'urto di Thomson è valida per radiazione a bassa energia. Ad energie molto alte (raggi X duri, raggi gamma) l'opacità diminuisce, innalzando di fatto il limite di Eddington reale.
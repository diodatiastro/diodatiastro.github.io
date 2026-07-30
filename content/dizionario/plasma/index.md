+++
title = "Plasma"
date = "2026-07-27"
draft = false
+++

{{< katex />}}

## Etimologia e storia

Il termine *plasma* deriva dal greco πλάσμα (*plásma*), "cosa modellata, forma", dal verbo πλάσσειν (*plássein*), "modellare, plasmare". Da questa radice greca deriva *plasma sanguigno*, già in uso in medicina dall'Ottocento per indicare la componente liquida del sangue. Fu Irving Langmuir a introdurre il termine in fisica nel 1928, in un articolo sulle oscillazioni nei gas ionizzati: l'analogia è che, così come il plasma sanguigno trasporta globuli e altre particelle in sospensione, il gas ionizzato "trasporta" al suo interno ioni, elettroni e particelle neutre.

{{% box tipo="definizione" titolo="" %}} 
Il plasma è un gas quasi totalmente o parzialmente ionizzato, composto da una miscela macroscopicamente neutra di particelle libere cariche (ioni positivi ed elettroni) ed eventualmente atomi neutri. 
{{% /box %}}

Viene universalmente definito come il **quarto stato della materia** (dopo gli stati solido, liquido e gassoso). Si tratta tuttavia di una definizione fuorviante, perché quasi tutta la materia dell'Universo visibile, circa il $99\%$, si trova in realtà allo stato di plasma. Le stelle sono plasma, il mezzo interstellare ionizzato è plasma, il mezzo intergalattico è plasma, i getti relativistici dei nuclei galattici attivi sono plasma. 

La materia neutra, fatta di pianeti, nebulose molecolari fredde ed esseri viventi, rappresenta solo *una piccola frazione esotica* rispetto al quadro cosmico complessivo. Gli altri tre stati della materia sono condizioni cosmiche eccezionali e locali, piuttosto che la norma.

## Come si ottiene un plasma

Per trasformare un gas in plasma è necessario superare il **potenziale di ionizzazione** degli elementi che lo compongono. Nel contesto astrofisico, ciò avviene principalmente attraverso due modalità:

- **Ionizzazione termica (Alte temperature).** Quando il gas viene confinato o compresso a temperature molto elevate, l'energia cinetica media degli urti violenti tra gli atomi supera l'energia di legame orbitale degli elettroni. In tale contesto, le collisioni tra atomi liberano elettroni. È il caso dei nuclei e delle atmosfere stellari.

- **[Fotoionizzazione]({{< relref "/dizionario/fotoionizzazione/" >}}) (Radiazione energetica).** Un gas a bassa densità, come ad esempio la Nebulosa di Orione, può essere freddo dal punto di vista termico, ma nondimeno diventare un plasma, se viene investito da un flusso massiccio di fotoni ad alta energia (ultravioletti estremi o raggi X), in grado di strappare elettroni agli atomi.

Ma non basta che in un gas vi siano alcune particelle cariche per definirlo plasma. Devono essere soddisfatti tre criteri fisici fondamentali:

1. **Quasi-neutralità.** Il numero di cariche positive (ioni) e negative (elettroni) deve essere quasi uguale su scale spaziali sufficientemente grandi. Il plasma appare quindi neutro dall'esterno, nonostante sia composto da particelle cariche.

2. **Comportamento collettivo.** Le particelle non interagiscono solo tramite urti diretti (come in un gas neutro), ma principalmente tramite *forze elettromagnetiche a lungo raggio*. Un movimento coordinato di particelle cariche genera campi che influenzano porzioni di plasma a grandissima distanza. Il sistema si comporta pertanto come un "corpo unico", e non come una semplice somma di particelle indipendenti.

3. **Prevalenza delle interazioni elettromagnetiche.** Le interazioni elettromagnetiche collettive devono essere dominanti rispetto agli urti tra particelle neutre. In pratica, il gas deve essere sufficientemente ionizzato (anche solo una piccola frazione, come l'$1\%$) perché le forze a lungo raggio prevalgano.

## Proprietà fondamentali del plasma

Il plasma ha alcune proprietà fondamentali:

- **È un eccellente conduttore elettrico.** Grazie alla presenza di cariche libere, il plasma conduce molto bene l'elettricità (in condizioni di alta temperatura, la sua conducibilità può superare quella dei metalli).

- **Risponde ai campi magnetici.** Essendo composto da cariche in movimento, il plasma può essere confinato, modellato e accelerato dai campi magnetici. Il campo magnetico terrestre, ad esempio, intrappola il plasma del vento solare formando le fasce di Van Allen.

- **Emette luce.** Le interazioni tra particelle cariche e i processi di ricombinazione producono continuamente radiazione elettromagnetica a varie lunghezze d'onda (dalle onde radio ai raggi X), rendendo i fenomeni cosmici osservabili da grandi distanze.

### Il plasma nei principali contesti astrofisici

| Oggetto                 | Temperatura del plasma  | Caratteristiche                                    |
| ----------------------- | ----------------------- | -------------------------------------------------- |
| Fotosfera solare        | $\sim5.800\,\text{K}$   | Parzialmente ionizzato                             |
| Corona solare           | $10^6 - 10^7\,\text{K}$ | Completamente ionizzato                            |
| Regioni H II            | $10^4\,\text{K}$       | Idrogeno ionizzato; metalli parzialmente ionizzati |
| Interno stellare        | $10^7 - 10^8\,\text{K}$ | Completamente ionizzato                            |
| Mezzo interstellare     | $10^5 - 10^6\,\text{K}$ | Plasma rarefatto; fonte di raggi X                 |
| Mezzo intergalattico    | $10^7 - 10^8\,\text{K}$ | Plasma ultra-rarefatto; forte emissione X
| Dischi di accrescimento | $10^6 - 10^9\,\text{K}$ | Plasma turbolento; campi magnetici intensi         |

## L'equazione di Saha

Il grado di ionizzazione di un gas in equilibrio termodinamico non dipende solo dalla temperatura, ma anche dalla densità elettronica: a parità di temperatura, un gas più rarefatto risulta più ionizzato di uno denso. Questa relazione è espressa dall'**equazione di Saha**, formulata dall'astrofisico indiano Meghnad Saha nel 1920 [^1]:

$$
\frac{n_{i+1}\,n_e}{n_i} \simeq \left(\frac{2\pi m_e k_B T}{h^2}\right)^{3/2} e^{-\chi_i/(k_B T)}
$$

dove $n_i$​ e $n_{i+1}$ sono le densità numeriche degli ioni in due stati di ionizzazione successivi, $n_e$ la densità degli elettroni liberi, $T$ la temperatura, $\chi_i$​ l'energia richiesta per ionizzare ulteriormente lo ione, $m_e$​ la massa dell'elettrone, $k_B$​ la costante di Boltzmann e $h$ la costante di Planck.

Nella formula, il termine esponenziale $e^{-\chi_i/(k_BT)}$ è quello che conta di più: piccole variazioni di temperatura vicino al valore di $\chi_i$​ producono un salto rapido nel grado di ionizzazione. È il motivo per cui, ad esempio, la fotosfera solare è solo parzialmente ionizzata, mentre la corona, poche migliaia di chilometri più su ma milioni di gradi più calda, è quasi completamente ionizzata.

{{< figura 
src="immagini/corona-solare.jpg" 
alt="Una fotografia della corona solare acquisita il 21 agosto 2017 durante un'eclisse solare totale." 
caption="Una fotografia della corona solare acquisita il 21 agosto 2017 durante un'eclisse solare totale. Sono ben visibili gli effetti dei campi magnetici sul plasma coronale. Crediti: Miloslav Druckmüller, Peter Aniol, Shadia Habbal/NASA Goddard, Joy Ng."
>}}

[^1]: La versione qui riportata della formula è una versione semplificata in cui il rapporto dei **pesi statistici** $g_{i+1}/g_i$​ degli stati ionici coinvolti - dell'ordine dell'unità - è stato omesso.
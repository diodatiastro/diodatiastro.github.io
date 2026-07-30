+++
title = "Spettroscopia"
date = "2026-07-28"
draft = false
+++

{{< katex />}}

## Etimologia e storia

Il termine spettroscopia deriva dal latino *spectrum* ("immagine, apparizione") e dal greco σκοπεῖν (skopeîn, "osservare"). L'analisi spettrale come disciplina scientifica fu fondata tra il 1859 e il 1860 da Gustav Kirchhoff e Robert Bunsen, che per primi utilizzarono sistematicamente lo spettroscopio per identificare gli elementi chimici a partire dalle loro righe spettrali.

{{% box tipo="definizione" titolo="" %}} 
La spettroscopia è la branca della scienza che studia il modo in cui la luce, e più in generale ogni tipo di [radiazione elettromagnetica]({{< relref "/dizionario/luce-radiazione-elettromagnetica/" >}}), viene emessa, assorbita o riflessa dalla materia, scomponendola nelle sue singole lunghezze d'onda (i suoi colori, per la luce visibile).
{{% /box %}}


## Uno strumento d'indagine fondamentale

In [astrofisica]({{< relref "/dizionario/astrofisica/" >}}) è uno strumento di indagine fondamentale. La radiazione emessa da una stella o da un'altra sorgente viene raccolta da un telescopio e scomposta per mezzo di un prisma o un reticolo di diffrazione. Si ottiene così una sorta di arcobaleno molto dettagliato, lo [spettro]({{< relref "/dizionario/spettro-elettromagnetico/" >}}), che può contenere righe nere, dette **righe di assorbimento**, e righe luminose, dette **righe di emissione**. Ogni riga di assorbimento o di emissione è come l'"impronta digitale" di un elemento chimico in condizioni fisiche specifiche.

Un esempio celebre dell'importanza della spettroscopia è la scoperta dell'elemento chimico elio (dal greco *ἥλιος*, Hḗlios, "Sole"). Il 18 agosto 1868, durante un'eclissi solare totale, l'astronomo francese Pierre Janssen osservò nello spettro della cromosfera solare una riga gialla che non corrispondeva ad alcun elemento allora conosciuto. Pochi giorni dopo l'astronomo inglese Norman Lockyer, insieme al chimico Edward Frankland, identificò indipendentemente la stessa riga e ne propose l'interpretazione come l'indizio di un nuovo elemento. L'elio fu isolato e confermato sulla Terra solo nel 1895, dal chimico scozzese William Ramsay.

{{< figura 
src="immagini/spettro-solare.png" 
alt="Spettro ad alta risoluzione della luce proveniente dal Sole, che mostra la regione visibile dello spettro elettromagnetico. Le righe di assorbimento sono chiaramente visibili come sottili bande nere." 
caption="Spettro ad alta risoluzione della luce proveniente dal Sole, che mostra la regione visibile dello spettro elettromagnetico. Le righe di assorbimento sono chiaramente visibili come sottili bande nere. La lunghezza d'onda aumenta da sinistra a destra lungo ciascuna striscia e dal basso verso l'alto. Ciascuna delle $50$ strisce orizzontali copre $6$ nanometri, per uno spettro completo che abbraccia l'intervallo visibile da $400$ a $700$ nanometri. Crediti: N.A. Sharp/KPNO/NOIRLab/NSO/NSF/AURA."
>}}

## Classificazione degli spettri

Gli spettri si classificano in tre tipi principali:

- **spettro continuo**: emissione su tutte le lunghezze d'onda, tipica dei corpi solidi o dei gas densi ad alta temperatura;

- **spettro di emissione:** righe brillanti a lunghezze d'onda discrete, prodotte da gas rarefatti i cui atomi vengono eccitati a causa di urti termici, per assorbimento di radiazione o, nel caso di un gas ionizzato, per [ricombinazione]({{< relref "/dizionario/ricombinazione/" >}}) con gli elettroni liberi;

- **spettro di assorbimento:** righe scure su fondo continuo, generate quando la luce attraversa un gas più freddo.

## Informazioni ricavabili dalla spettroscopia

Attraverso la spettroscopia è possibile raccogliere un tesoro di informazioni sui corpi celesti osservati. Le principali sono sintetizzate nell'elenco seguente.

- La **composizione chimica**: le righe spettrali di assorbimento o di emissione permettono di identificare quali elementi e molecole sono presenti nell'oggetto osservato, ad es. idrogeno, elio, ferro, ossigeno, molecole organiche, ecc.

- La **temperatura**: si ricava dal colore complessivo della luce e dall'intensità delle righe.

- La **velocità** e il **moto**: grazie all'effetto Doppler, cioè lo spostamento delle righe spettrali verso il rosso o verso il blu, si misura se un oggetto si sta allontanando o avvicinando alla Terra e con che velocità. Per velocità non relativistiche, lo spostamento relativo di lunghezza d'onda è legato alla velocità radiale $v$ dalla relazione

  $$
  \frac{\Delta\lambda}{\lambda_0} = \frac{v}{c}
  $$
  dove $\lambda_0$ è la lunghezza d'onda a riposo della riga e $c$ la velocità della luce.

- La **densità** e la **pressione** del gas nelle atmosfere stellari o nelle nebulose.

- Il **campo magnetico** attraverso l'effetto Zeeman (sdoppiamento delle righe).

- Il **redshift cosmologico**, cioè lo spostamento verso il rosso delle righe spettrali di oggetti lontani o lontanissimi, che permette di risalire, tramite un modello cosmologico, alla loro distanza e al tempo trascorso dall'emissione della luce che osserviamo oggi (il cosiddetto *look-back time*).

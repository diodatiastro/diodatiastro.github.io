+++
title = "Ricombinazione"
date = "2026-07-27"
draft = false
+++

{{< katex />}}

{{% box tipo="definizione" titolo="" %}} 
Se la [fotoionizzazione]({{< relref "/dizionario/fotoionizzazione/" >}}) è il processo che distrugge l'integrità degli atomi creando un [plasma]({{< relref "/dizionario/plasma/" >}}) di particelle cariche positive e negative, la **ricombinazione** è il processo opposto, in cui ioni positivi catturano elettroni per cercare di ritornare in una condizione di equilibrio, così da diminuire la loro carica positiva o, meglio ancora, riacquistare lo stato neutro originario[^1].

Durante questo fenomeno, l'elettrone libero transita da uno **stato libero**, in cui è dotato di una certa quantità di energia cinetica, a uno **stato legato**, in cui è vincolato all'interno dei livelli energetici quantizzati dell'atomo. Per soddisfare la legge di conservazione dell'energia, l'energia in eccesso dell'elettrone deve essere liberata. Nella forma più comune in astrofisica, la **ricombinazione radiativa**, questa energia viene espulsa sotto forma di uno o più fotoni.
{{% /box %}}

## La cattura elettronica

Quando l'elettrone libero viene catturato, la transizione avviene in due fasi energetiche distinte che determinano la luce emessa dal gas:

1. **La cattura iniziale (emissione nel continuo).** L'elettrone libero possiede una propria energia cinetica prima della cattura. Quando viene incorporato in un livello energetico dell'atomo, spesso più elevato dello stato fondamentale, emette un primo fotone che trasporta via la sua energia cinetica originaria **più l'energia di legame del livello** in cui viene catturato (ovvero il potenziale di ionizzazione di quel livello). Poiché l'energia cinetica di partenza dei vari elettroni liberi nel plasma può assumere qualsiasi valore, questi primi fotoni creano uno spettro continuo.

2. **La cascata quantica (emissione di righe).** Una volta intrappolato nei livelli energetici quantizzati dell'atomo (in uno stato eccitato), l'elettrone non è ancora stabile. Inizierà a "scendere i gradini" atomici uno a uno o compiendo balzi più grandi, seguendo percorsi determinati dalle regole della meccanica quantistica. A ogni salto verso un livello inferiore, emette un fotone di energia discreta e fissa, pari all'esatta differenza tra i due livelli orbitali. Sono proprio questi fotoni a generare le **righe spettrali di emissione**, che sono la firma inconfondibile di un certo atomo e di un certo livello energetico. Tali righe rappresentano, pertanto, dati di fondamentale importanza nello studio dei fenomeni astrofisici.

## Equilibrio dinamico tra fotoionizzazione e ricombinazione 

Nelle regioni H II come la Nebulosa di Orione, la ricombinazione non è un evento isolato, ma vive in un costante stato di **equilibrio dinamico** con la fotoionizzazione. Le giovani stelle massicce al centro della nebulosa distruggono senza sosta gli atomi neutri, strappando loro elettroni con fotoni UV ad alta energia, mentre il plasma così creato risponde ricombinando gli elettroni liberi alla stessa velocità. All'interno della nebulosa avvengono miliardi di fotoionizzazioni e miliardi di ricombinazioni ogni secondo. Questo equilibrio determina il **grado di ionizzazione** del gas e fa sì che la nebulosa brilli in modo perenne di una luce colorata rossastra, dovuta alla celebre riga rossa H-alfa a $656{,}3\,\text{nm}$, prodotta dalla ricombinazione dell'idrogeno.

## Il coefficiente di ricombinazione $\alpha$

La rapidità con cui avviene la ricombinazione in un plasma astrofisico si esprime attraverso il coefficiente di ricombinazione $\alpha$, una grandezza che dipende dalla temperatura del gas. Il numero di ricombinazioni per unità di volume e di tempo è dato da:

$$
R_{\rm ric} = \alpha\, n_e\, n_i
$$

dove $n_e$ è la densità numerica degli elettroni liberi e $n_i$ quella degli ioni. All'equilibrio, questo tasso eguaglia esattamente quello delle fotoionizzazioni.

Non tutte le ricombinazioni, tuttavia, sono equivalenti dal punto di vista osservativo. Se un elettrone viene catturato direttamente nel livello fondamentale, il fotone emesso appartiene alla serie di Lyman ed è così energetico da poter ionizzare immediatamente un altro atomo di idrogeno nelle vicinanze: un fenomeno noto come **approssimazione on-the-spot**. In una nebulosa otticamente spessa come Orione, questi fotoni non riescono quindi a sfuggire, e il loro effetto netto sull'equilibrio di ionizzazione è nullo. Per questo motivo si distinguono due convenzioni: il **Caso A**, che include tutte le ricombinazioni (verso ogni livello, incluso quello fondamentale), e il **Caso B**, che esclude le ricombinazioni dirette al livello fondamentale in quanto "riassorbite sul posto". Per le tipiche regioni H II otticamente spesse si utilizza il coefficiente di Caso B, il cui valore per l'idrogeno a $10^4\,\text{K}$ è circa:

$$
\alpha_B \approx 2{,}6 \times 10^{-13}\ \mathrm{cm^3\,s^{-1}}
$$

In conclusione, è proprio grazie alla ricombinazione che possiamo vedere la splendida nebulosa di Orione e altre regioni H II ad essa simili. La luce che vediamo è il prodotto dell'emissione di fotoni dominata dalla riga rossa H-alfa, la più intensa tra le molte righe di emissione generate dalla ricombinazione. Essa è il frutto di atomi di idrogeno che hanno catturato un elettrone libero e devono restituire all'Universo l'energia in eccesso.

[^1]: Su scala cosmologica si è verificato un fenomeno analogo, la *ricombinazione cosmica*: circa $380\,000$ anni dopo il Big Bang, elettroni e protoni si combinarono per la prima volta in idrogeno neutro, rendendo l'Universo trasparente e dando origine alla radiazione cosmica di fondo.
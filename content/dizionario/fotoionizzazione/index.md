+++
title = "Fotoionizzazione"
date = "2026-07-22"
draft = false
+++

{{< katex />}}

## Etimologia

Il termine **fotoionizzazione** unisce il prefisso *foto-* (dal greco *phôs, phôtós*, "luce") al sostantivo **ionizzazione**, a sua volta derivato da **ione** (dal greco *ión*, participio presente di *iénai*, "andare"), termine coniato da Michael Faraday negli anni 1830 per indicare le particelle cariche che "vanno" verso gli elettrodi in una soluzione elettrolitica.

## Definizione

È possibile che un elettrone sia strappato a un atomo e venga proiettato nello spazio come **elettrone libero**, se viene colpito da un fotone dotato di un'energia uguale o maggiore all'**energia di legame** che tiene quell'elettrone vincolato al nucleo atomico[^1]. L'atomo a cui l'elettrone è stato strappato diventa uno **ione** dotato di carica elettrica positiva, detto **catione**. Fotoni dotati della giusta energia possono agire allo stesso modo anche sui cationi, strappando loro ulteriori elettroni e rendendo così la loro carica positiva ancora maggiore.

Si dice **fotoionizzazione** il processo mediante il quale un atomo o uno ione assorbe un fotone dotato di energia sufficiente a strappare elettroni dal proprio guscio elettronico. La radiazione elettromagnetica, attraverso la fotoionizzazione, crea un plasma di **cariche elettriche libere**, positive (ioni) e negative (elettroni).

## Potenziale di ionizzazione

Il **potenziale di ionizzazione** (o **energia di ionizzazione**) è l'energia minima necessaria a rimuovere completamente un elettrone da un atomo o da uno ione. Si indica spesso con $\chi$ o con $I$ e si misura tipicamente in **elettronvolt** ($\mathrm{eV}$). Il valore del potenziale di ionizzazione è una misura della **stabilità elettronica.** Infatti, atomi con un alto potenziale di ionizzazione, come i gas nobili elio e neon, sono molto stabili e richiedono molta energia per cedere i propri elettroni; al contrario, atomi con un basso potenziale di ionizzazione, come i metalli alcalini cesio e sodio, tendono a perdere facilmente l'elettrone più esterno, diventando ioni positivi.

In generale, onde radio, microonde, luce infrarossa e luce visibile non hanno energia sufficiente per fotoionizzare atomi o molecole nel loro stato fondamentale. Sono necessari a tal fine fotoni altamente energetici, come ultravioletti, raggi X e raggi gamma. L'atomo che ha il potenziale di fotoionizzazione più basso è il **cesio**, con **$3{,}89\,\mathrm{eV}$**. È una quantità di energia che corrisponde a un fotone con una lunghezza d'onda di **$319\,\mathrm{nm}$**: siamo già nell'ultravioletto, al di là di ciò che l'occhio umano può percepire.

Per fotoionizzare l'idrogeno neutro, l'elemento più comune nell'Universo, strappandogli il suo unico elettrone, serve un'energia molto maggiore: **$13{,}6\,\mathrm{eV}$**, che corrisponde a un lunghezza d'onda di **$91{,}2\,\mathrm{nm}$**, appartenente all'ultravioletto estremo. Va notato che l'energia di legame diminuisce quanto più l'elettrone interessato è lontano dallo stato quantico fondamentale, come illustra la seguente tabella relativa all'**idrogeno**:

| Livello $n$ | Energia di legame ($\mathrm{eV}$) | Lunghezza d'onda ($\mathrm{nm}$) | Serie spettrale |
|:---:|:---:|:---:|:---:|
| 1 | $13{,}60$ | $91{,}2$ | Lyman |
| 2 | $3{,}40$ | $364{,}6$ | Balmer |
| 3 | $1{,}51$ | $820{,}4$ | Paschen |
| 4 | $0{,}85$ | $1458{,}1$ | Brackett |
| 5 | $0{,}54$ | $2278{,}9$ | Pfund |
| 6 | $0{,}38$ | $3281{,}4$ | Humphreys |
| $\infty$ | $0$ | $\infty$ | — |

È importante, inoltre, notare che non esiste un unico potenziale di ionizzazione, ma ne esistono tanti quanti sono gli elettroni di un atomo. La regola generale è che, man mano che un atomo perde elettroni, l'energia necessaria a strapparne altri diventa sempre maggiore. Ciò è dovuto al fatto che un catione, avendo più cariche elettriche positive di un atomo neutro, attrae gli elettroni che gli sono rimasti con forza tanto maggiore quanto minore è il numero degli elettroni rimasti.

Per esempio, nel caso del magnesio ($\mathrm{Mg}$) il primo potenziale di ionizzazione è **$7{,}65\,\mathrm{eV}$**, mentre il secondo potenziale è **$15{,}04\,\mathrm{eV}$**, quasi il doppio. L'elio ($\mathrm{He}$), un elemento molto stabile dotato di due soli elettroni, ha potenziali di ionizzazione ben più alti:

| Stato di ionizzazione | Energia di ionizzazione ($\mathrm{eV}$) |
|:---|:---:|
| $\mathrm{He} \to \mathrm{He}^+ + e^-$ | $24{,}59$ |
| $\mathrm{He}^+ \to \mathrm{He}^{2+} + e^-$ | $54{,}42$ |

## La notazione che indica lo stato di ionizzazione

In astronomia e astrofisica si usa una notazione speciale per indicare lo stato di ionizzazione degli atomi. Un numero romano dopo il nome dell'elemento chimico indica quanti elettroni sono stati rimossi dall'atomo:

- **I** = atomo **neutro** (nessun elettrone perso);
- **II** = atomo **ionizzato** una volta sola ($1$ elettrone perso)
- **III** = atomo **doppiamente** ionizzato ($2$ elettroni persi)
- **IV** = atomo **triplamente** ionizzato ($3$ elettroni persi), e così via.

Le energie in gioco nei fenomeni astrofisici possono essere così alte da produrre specie atomiche con un gran numero di elettroni sottratti all'atomo neutro. Un esempio è il ferro ionizzato con $13$ elettroni in meno (**Fe XIV**), che si trova nelle atmosfere stellari calde, in particolare nella corona solare, e indica temperature nell'ordine dei milioni di gradi. 
Secondo [NIST](https://physics.nist.gov/cgi-bin/ASD/ie.pl?spectra=Fe+XIV&submit=Retrieve+Data&units=1&format=0&order=0&at_num_out=on&sp_name_out=on&ion_charge_out=on&el_name_out=on&seq_out=on&shells_out=on&level_out=on&ion_conf_out=on&e_out=0&unc_out=on&biblio=on), l'energia di ionizzazione del Fe XIV è di $392,2\,\mathrm{eV}$ ed è associata a fotoni X molli con lunghezza d'onda di $3{,}16\,\mathrm{nm}$

La Nebulosa di Orione, distante circa $1340$ anni luce da noi, è il più classico esempio di fotoionizzazione in astrofisica. È formata da una grande nube di idrogeno ionizzato (una cosiddetta **regione H II**), in cui l'energia di ionizzazione è fornita dalle luminosissime stelle del Trapezio, in particolare Theta-1 Orionis C[^2].

[^1]: Se l'energia trasportata dal fotone è maggiore dell'energia di legame necessaria a strappare l'elettrone dall'atomo, il surplus di energia non scompare. Per la legge di conservazione, quel surplus viene trasformato istantaneamente nell'energia cinetica con la quale l'elettrone liberato si muove nello spazio.

[^2]: Una gigantesca stella di classe O con una temperatura superiore a $39.000$ Kelvin e una luminosità oltre $200.000$ volte maggiore di quella del Sole, che bombarda la nebulosa di Orione con un'immensa quantità di raggi ultravioletti.
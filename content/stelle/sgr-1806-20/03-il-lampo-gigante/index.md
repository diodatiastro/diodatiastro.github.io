+++
title = "Il lampo gigante del 27 dicembre 2004"
slug = "il-lampo-gigante"
weight = 3
date = "2026-10-09"
draft = false
type = "saggio"
+++

{{< katex />}}


## Un'energia immensa in due decimi di secondo

Il 27 dicembre 2004, alle 21:30:26 e cinque decimi UT (Tempo Universale), un fronte d'onda di raggi gamma partito circa trentamila anni prima da un punto del Sagittario investì la Terra.

Nessuno lo vide con gli occhi. Eppure, per due decimi di secondo, quel lampo fu, in termini di energia che arrivava sui nostri strumenti, più luminoso della Luna piena. È uno tra i dati più sorprendenti di questa storia: la luce della Luna piena deposita al di sopra dell'atmosfera terrestre circa $3\,\text{erg}$ per centimetro quadrato al secondo; il picco del lampo del 27 dicembre ne depositava $5$, con la differenza che erano fotoni gamma da centinaia di migliaia di elettronvolt anziché luce visibile.

La sorgente era la nostra "amica" SGR 1806-20, una stella di neutroni con la massa del Sole racchiusa in un oggetto grande come una città, con un tempo di rotazione di $7{,}56$ secondi e uno dei campi magnetici più intensi conosciuti nell'universo. *In quei due decimi di secondo, la magnetar liberò tanta energia quanta il Sole ne irradia in un quarto di milione di anni[^quarto] e superò per un istante la luminosità combinata di tutte le stelle della Via Lattea di un fattore mille.*

[^quarto]: La stima compare in uno [studio](https://www.nature.com/articles/nature03519) del 2005 di Kevin Hurley e colleghi intitolato «An exceptionally bright flare from SGR 1806–20 and the origins of short-duration γ-ray bursts». Questa stima presupponeva una distanza di $15\,\text{kpc}$. Alla distanza oggi preferita di $8{,}7\,\text{kpc}$ l'energia sarebbe circa tre volte minore e corrisponderebbe a poco più di **ottantamila** anni di emissione solare. Anche il confronto con la luminosità della Via Lattea si riduce nella stessa proporzione: alla distanza di $8{,}7\,\text{kpc}$ il lampo l'avrebbe superata di circa trecentoquaranta volte, invece che di mille.

Ripercorreremo da qui in poi la storia delle osservazioni dell'evento e la serie di teorie che 
gli astronomi proposero per spiegarlo, seguendone più o meno l'ordine: dai primi comunicati del dicembre 2004 fino alla scoperta, pubblicata nell'aprile 2025, che dentro quel lampo si nascondeva la firma della nascita di elementi chimici pesanti: circa un quarto di massa terrestre di stronzio, ittrio, zirconio e una quota minore di oro e platino, forgiati in pochi secondi.

## Il precursore

Alle 21:28:03 UT, cioè $142$ secondi *prima* del lampo principale, SGR 1806-20 emise un *burst* anomalo. Anomalo non per l'intensità, ma per la forma: durò un secondo intero, cioè cinque volte la durata tipica dei suoi lampi ordinari, e aveva un profilo quasi piatto, con un tempo di salita di $27$ millisecondi e uno di discesa di $110$.

RHESSI, un satellite progettato per studiare i brillamenti solari, lo colse per puro caso durante una delle sue "istantanee" spettrali, e Steven Boggs e colleghi [poterono ricavarne](https://iopscience.iop.org/article/10.1086/516732) uno spettro pulito: un corpo nero singolo con $kT = 10{,}4 \pm 0{,}3\,\text{keV}$, senza alcuna traccia di componente non termica[^nontermica]. La fluenza[^flu] $(3{,}2 \pm 0{,}5)\times10^{-5}\,\text{erg/cm}^2$ corrispondeva a un'energia di circa $3{,}8\times10^{41}\,d_{10}^{2}\,\text{erg}$[^espo], dove $d_{10}$ è la distanza in unità di $10\,\text{kpc}$[^d10].

[^nontermica]: Si dice **termica** l'emissione prodotta da materia in equilibrio a una certa temperatura, come quella di un [corpo nero]({{< relref "/dizionario/corpo-nero/" >}}): quasi tutte le particelle hanno energie vicine a un valore medio fissato dalla temperatura, e lo spettro che ne risulta ha un picco ben definito, oltre il quale crolla rapidamente. Si dice invece **non termica** l'emissione prodotta da particelle la cui energia non segue quella distribuzione, perché una parte di esse è stata accelerata individualmente a energie molto più alte: lo spettro perde allora il picco caratteristico e decresce lentamente, secondo una legge di potenza, contenendo molti più fotoni ad alta energia di quanti un corpo caldo potrebbe produrne. Riconoscere una componente non termica in uno spettro significa perciò che nella sorgente è all'opera un meccanismo capace di **accelerare** le singole particelle, come la riconnessione magnetica o un'onda d'urto, e non semplicemente qualcosa che si è scaldato.

[^flu]: L'energia totale che, durante un evento come un lampo gamma, arriva da una sorgente su ogni centimetro quadrato di un rivelatore rivolto verso di essa, in una data banda di energia. È l'integrale nel tempo del flusso. Si misura in $\text{erg/cm}^2$ nel sistema CGS e in $\text{J/m}^2$ nel Sistema Internazionale ($1\,\text{erg/cm}^2 = 10^{-3}\,\text{J/m}^2$). La fluenza diminuisce con il quadrato della distanza dalla sorgente, ma per misurarla non occorre conoscere quella distanza: è una grandezza osservata direttamente. Per ricavare dalla fluenza l'energia emessa dalla sorgente bisogna invece conoscere la distanza. Nel caso di un'emissione isotropa, l'energia vale $E = 4\pi d^2 F$, dove $F$ è la fluenza e $d$ la distanza.

[^espo]: L'esponente $2$ riflette il fatto che l'energia emessa si distribuisce sulla superficie di una sfera la cui area cresce con il quadrato della distanza dalla sorgente: la stessa fluenza misurata a Terra corrisponde quindi a un'energia emessa tanto maggiore quanto più la sorgente è lontana e tanto minore quanto più è vicina, sempre in proporzione al quadrato della distanza.

[^d10]: Nel loro articolo, Boggs e colleghi esprimono tutte le energie e le luminosità in funzione di $d_{10} = d/10\,\text{kpc}$. È uno dei tanti esempi, che vedremo da qui in avanti, di valori che dipendono dalla distanza di SGR 1806-20 assunta dagli autori. È utile, a tal proposito, chiarire la differenza - molto importante - tra grandezze misurate e grandezze dedotte.

    Le **grandezze misurate** non dipendono dalla distanza: fluenze, temperature, frequenze delle oscillazioni, durate, periodo di rotazione e il campo magnetico dipolare ricavato da $P$ e $\dot P$. Le **grandezze dedotte** sì, in tre modi diversi. Energie e luminosità isotrope scalano con il quadrato della distanza ($d^2$), perché si ottengono moltiplicando la grandezza misurata per l'area della sfera centrata sulla sorgente e passante per la Terra ($E = 4\pi d^2 \times \text{fluenza}$). Raggi, dimensioni fisiche e velocità dedotte da moti angolari scalano in base alla distanza $d$. Altri casi seguono leggi proprie.

    Inoltre è importante considerare che la maggior parte delle grandezze dedotte citate in questo saggio assumono un'emissione *isotropa* da parte della sorgente, cioè uguale in tutte le direzioni. Se, invece, la radiazione fosse concentrata in un [angolo solido]({{< relref "/dizionario/angolo-solido/" >}}) $\Omega$, l'energia vera sarebbe minore di un fattore $\Omega/4\pi$.

    Nel resto del saggio i valori dedotti sono riportati come li pubblicarono gli autori, insieme alla distanza che avevano assunto: in genere $15\,\text{kpc}$ negli studi usciti prima del 2008, $8{,}7\,\text{kpc}$ in molti di quelli successivi. Chi vuole riportarli a un'altra distanza può farlo con le regole appena descritte. Il valore riscalato è indicato soltanto dove serve a confrontare risultati ottenuti con distanze diverse o dove cambia il senso del ragionamento.

Poi, per $142$ secondi, silenzio: il flusso cadde di oltre un fattore $200$.

## I primi 2,5 millisecondi: il "fast peak"

Immediatamente prima del picco principale, solo pochi millisecondi prima, RHESSI registrò un breve, distinto impulso, difficile da prevedere e da spiegare: durata $2{,}5$ millisecondi, tempo di salita $0{,}4\,\text{ms}$, spettro molto più morbido di quello che sarebbe seguito, compatibile con un corpo nero a circa $20\,\text{keV}$. La luminosità media di questo lampo minuscolo era già $1{,}6\times10^{43}\,d_{10}^{2}\,\text{erg}$ al secondo, cioè decine di migliaia di volte il limite di Eddington per una stella di neutroni.

Boggs e colleghi provarono a interpretarlo e si trovarono in difficoltà, il che è interessante di per sé. Il raggio di corpo nero ricavato era di circa $21$ chilometri, cioè più grande della stella: un evento *globale*, non una frattura localizzata. Ma la durata era stata troppo breve per uno scivolamento globale della crosta o un riallineamento del campo del nucleo. Ne conclusero che quei $2{,}5$ millisecondi di emissione erano stati l'effetto di un riassestamento della *magnetosfera*, non della stella: forse la miccia che accese l'esplosione successiva.

## Quando tutti gli strumenti impazzirono

Alle 21:30:26 UT del 27 dicembre 2004, arrivò sulla Terra il picco vero e proprio del lampo gamma che SGR 1806-20 aveva prodotto decine di migliaia di anni prima. In mezzo secondo la magnetar aveva liberato un'energia dell'ordine di *decine di miliardi di miliardi di miliardi di miliardi di miliardi* di $\text{erg}$!

L'effetto sugli strumenti in orbita fu quello che ci si aspetta da un'onda d'urto: **saturazione totale**. INTEGRAL, Swift, RHESSI, Konus-Wind, Mars Odyssey, l'anti-coincidenza dello spettrometro SPI[^spi]: tutti fuori scala. Swift/BAT, che al momento era addirittura *girato dall'altra parte* (la sorgente illuminava i rivelatori da dietro, a $105^\circ$ dall'asse ottico, attraverso il corpo del satellite), fu comunque saturato dalla radiazione che filtrava attraverso la struttura. RHESSI, costruito per i brillamenti solari più violenti, restò cieco per mezzo secondo.

[^spi]: <span id="nota-acs"></span>L'anti-coincidenza, o ACS, da *Anti-Coincidence Shield/System*, dello spettrometro SPI a bordo del satellite INTEGRAL dell'ESA, era il rivestimento di cristalli scintillatori al germanato di bismuto ($91$ cristalli per $512$ chilogrammi di massa, sensibili sopra gli $80\,\text{keV}$), che circondava i rivelatori al germanio dello spettrometro. Lo scopo primario dell'ACS era schermare i rivelatori dal fondo di particelle cariche e raggi cosmici: un evento registrato "in coincidenza" sia dallo scudo sia dal rivelatore centrale veniva scartato come rumore anziché come segnale reale. Per l'ampia area di raccolta e la sensibilità su gran parte del cielo (pur senza capacità di imaging), l'ACS era usato anche come monitor gamma *non direzionale*, particolarmente efficace nella rivelazione di lampi gamma e brillamenti giganti di magnetar. Il satellite INTEGRAL è rimasto attivo dal 2002 fino a febbraio 2025.

La ricostruzione del picco fu quindi un capolavoro di ingegno collettivo e per farla si dovettero usare strumenti che non erano stati progettati specificamente per la rilevazione di raggi gamma (o almeno non dell'energia di quello prodotto quel giorno da SGR 1806-20):

- **Geotail**, una sonda per lo studio della magnetosfera terrestre, che si trovava nel vento solare a una decina di raggi terrestri dalla Terra. I suoi rivelatori di plasma, progettati per contare ioni ed elettroni del vento solare, erano un milione di volte meno sensibili di un rivelatore gamma: fu questo il motivo per cui *non* si saturarono nella parte cruciale. Toshio Terasawa e colleghi [riuscirono a ricavare](https://www.nature.com/articles/nature03573) il profilo non saturo dei primi $600$ millisecondi con risoluzione di $5{,}48\,\text{ms}$.
- **I satelliti geosincroni della serie SOPA/ESP**, minuscoli rivelatori al silicio progettati per contare particelle cariche in orbita, [usati](https://www.nature.com/articles/nature03525) dal gruppo di David Palmer per misurare il flusso di picco.
- **Cluster** e **Double Star TC-2**, le missioni magnetosferiche europea e cinese, i cui rivelatori di elettroni termici PEACE davano una risoluzione ancora migliore, $4$ millisecondi, e, fortunatamente, non ebbero interruzioni proprio durante la salita del segnale.
- **I rivelatori di particelle di Wind e RHESSI**, [usati](https://www.nature.com/articles/nature03519) da Kevin Hurley e Steven Boggs per lo spettro.

## L'eco lunare

Per quanto possa sembrare incredibile, persino la **Luna** fece parte di questa inusuale rete di strumenti di rilevazione, che permise di ricostruire con precisione la dinamica di un evento di cui altrimenti avremmo saputo molto poco.

Sandro Mereghetti e colleghi, analizzando i dati dello scudo anti-coincidenza di INTEGRAL [trovarono](https://iopscience.iop.org/article/10.1086/430669), a $2{,}8$ secondi dal picco, un secondo lampo stretto della durata di $0{,}2$ secondi.

Era la radiazione del lampo *riflessa dalla superficie lunare*, che per raggiungere il satellite aveva compiuto un tragitto più lungo di quella arrivata direttamente: un'eco, con una fluenza di circa $2\times10^{-6}\,\text{erg/cm}^2$ sopra gli $80\,\text{keV}$. Lo stesso segnale fu registrato dal satellite russo **Helicon-Coronas-F**, che quel giorno non poteva vedere direttamente la magnetar perché occultata dalla Terra: vide solo l'eco lunare.

Per un attimo, insomma, la Luna funzionò da specchio gamma per un oggetto distante trentamila anni luce.

## Gli effetti sulla ionosfera terrestre

Forse ancora più sorprendenti dell'eco lunare furono gli effetti del lampo gamma sulla ionosfera[^iono].

[^iono]: La regione dell'atmosfera terrestre compresa all'incirca tra $60$ e $1000\,\text{km}$ di altitudine, dove la radiazione solare più energetica (raggi X e ultravioletti) ionizza parte dei gas atmosferici, producendo elettroni liberi e ioni. Questa parziale ionizzazione permette la riflessione e la propagazione delle onde radio. È grazie alla ionosfera che sono possibili trasmissioni radio a lunga distanza.

Il punto della superficie terrestre direttamente sotto la sorgente (il *subflare point*) si trovava a $20{,}4^\circ$ di latitudine sud e $146{,}2^\circ$ di longitudine ovest, nel Pacifico meridionale. E poiché SGR 1806-20 si trovava in quel momento a soli $5{,}25$ gradi dal Sole, l'emisfero illuminato dai raggi gamma coincideva quasi esattamente con l'emisfero diurno.

Uno studio di Yasuyuki Tanaka e colleghi del 2011 [descrisse vividamente](https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2011GL047008) l'effetto del lampo gamma sulla ionosfera terrestre:

>Fu riportato che il picco di flusso dei fotoni sopra $\sim50\,\text{keV}$ raggiunse $\sim10^7$ fotoni per $\text{cm}^2\cdot\text{s}$, cioè tre ordini di grandezza in più dei brillamenti solari di classe X. A causa della straordinaria intensità, la ionosfera terrestre fu severamente disturbata dal brillamento gigante, come evidenziato dai rapidi cambiamenti di ampiezza e di fase delle onde radio di frequenza molto bassa (*Very-Low-Frequency* o VLF, tra $3\,\text{kHz}$ e $30\,\text{kHz}$).

Il gruppo di Tanaka, analizzando i dati delle stazioni di monitoraggio di Moshiri e Onagawa in Giappone, che registravano le cosiddette ELF (*Extremely-Low-Frequency*, le frequenze estremamente basse), trovò impulsi magnetici negativi che coincidevano *esattamente* con il picco del lampo, con una larghezza di circa $40$ millisecondi: troppo per essere un fulmine. E a Esrange, in Svezia, a circa $5\,000\,\text{km}$ dall'antipode del *subflare point*, le due componenti orizzontali del campo magnetico mostrarono chiare forme d'onda di **risonanza di Schumann** transiente, con una direzione della sorgente, determinata col metodo di Lissajous, corrispondente al punto giusto[^risonanza].

[^risonanza]: <span id="nota-risonanza"></span>Le risonanze di Schumann sono oscillazioni elettromagnetiche naturali a frequenza molto bassa (circa $8\,\text{Hz}$ e multipli) della cavità formata tra la superficie terrestre e la ionosfera, normalmente eccitate dai fulmini. Un impulso "transiente" indica un picco isolato sovrapposto a questo segnale di fondo, causato in questo caso da un'improvvisa alterazione della ionosfera (l'iniezione di energia del lampo gamma proveniente da SGR 1806-20). Il metodo di Lissajous ricava la direzione di provenienza del segnale confrontando le due componenti orizzontali del campo magnetico registrate: la forma e l'orientamento della figura risultante indicano l'azimut della sorgente.

La probabilità che uno *sprite* (i lampi luminosi dell'alta atmosfera) fosse avvenuto per caso entro $30$ millisecondi da quel picco di eccitazione era dello $0{,}025\%$. In altre parole, la cavità Terra-ionosfera, che normalmente risuona per effetto dei fulmini, quel giorno risuonò per l'energia irradiata da una stella di neutroni lontana decine di migliaia anni luce.
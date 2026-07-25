+++
title = "Luminosità"
date = "2026-07-25"
draft = false
+++

{{< katex />}}

# Etimologia

*Luminosità* deriva dal latino *luminosus*, a sua volta da *lumen* ("luce"). Per l'etimologia completa si rimanda alla voce [luce]({{< relref "/dizionario/luce-radiazione-elettromagnetica/" >}}).

# Definizione

In astronomia e astrofisica, la *luminosità*, indicata con $L$, è la quantità totale di energia radiante emessa nello spazio da un corpo celeste (come una stella, una galassia o un quasar) nell'unità di tempo. Si tratta di una grandezza fisica *intrinseca* dell'oggetto, che dipende esclusivamente dalle sue proprietà strutturali e non dalla sua distanza dall'osservatore.

La luminosità può essere riferita all'intero spettro elettromagnetico oppure a una specifica regione spettrale. Nel primo caso si parla di **luminosità bolometrica**, definita come la potenza totale irradiata dalla sorgente a *tutte* le lunghezze d'onda. Poiché molte sorgenti astronomiche emettono una parte significativa della loro energia al di fuori della banda visibile (ad esempio nell'infrarosso, nell'ultravioletto o nei raggi X), la luminosità bolometrica fornisce la misura più completa dell'emissione energetica di un oggetto[^1].

C'è poi la **luminosità di banda** (o **fotometrica**), che è l'energia emessa solo all'interno di un determinato intervallo di lunghezze d'onda, selezionata tramite filtri fotometrici (es. $L_V$ per la banda visuale, $L_B$ per la banda blu).

## La luminosità come strumento di classificazione stellare

La luminosità è uno dei parametri fondamentali per classificare e comprendere le stelle. Nel **diagramma di Hertzsprung-Russell**, il principale strumento diagnostico dell'astrofisica stellare, le stelle sono distribuite in funzione di luminosità e temperatura superficiale, rivelando le grandi famiglie evolutive: sequenza principale, giganti, supergiganti, nane bianche.

## Unità di misura della luminosità

Nel Sistema Internazionale (SI) la luminosità si misura in **watt** ($\mathrm{W}$), ovvero joule al secondo ($\mathrm{J/s}$). Nel sistema CGS si esprime invece in **erg** al secondo ($\mathrm{erg/s}$), dove $1\,\mathrm{erg}$ è uguale a $10^{-7}$ joule (ovvero $0{,}0000001\,\mathrm{J}$). In astrofisica, tuttavia, si utilizza quasi sempre come unità di riferimento la **luminosità solare** ($L_\odot$), definita come l'energia totale emessa dal Sole in un secondo:

$$
L_\odot \approx 3,828 \times 10^{26} \text{ W} = 3,828 \times 10^{33} \text{ erg/s}
$$

Si tratta di una quantità di energia enorme. Scritta per esteso, una luminosità solare equivale a $382.800.000.000.000.000.000.000.000\,\mathrm{W}$, cioè $382,8$ milioni di miliardi di miliardi di watt. Quasi incomprensibile per la mente umana, questo numero ci permette tuttavia di intuire quanto sia immensa l'energia irradiata da una stella come il Sole ogni secondo.

## Relazione tra luminosità e massa stellare

La luminosità dipende principalmente dalla **massa stellare**: stelle più massicce bruciano il combustibile nucleare più rapidamente e sono estremamente luminose, ma giungono molto rapidamente alla fine. Una stella da $20$ masse solari può essere diverse decine di migliaia di volte più luminosa del Sole, ma avrà una vita di un paio di migliaia di volte più breve.

Per ogni stella, la luminosità può essere calcolata a partire da due elementi fondamentali:

1.  **La temperatura superficiale:** stelle più calde emettono molta più energia per unità di superficie.
2.  **Il raggio:** a parità di temperatura, una stella più grande ha una superficie maggiore e quindi emette più energia totale.

## Come calcolare la luminosità di una stella

Uno dei metodi più utilizzati per calcolare le luminosità stellari, basato sulla relazione fra questi due criteri, è la **Legge di Stefan-Boltzmann.** Essa approssima la superficie di una stella (la [fotosfera]({{< relref "/dizionario/fotosfera/" >}})) a un [corpo nero]({{< relref "/dizionario/corpo-nero/" >}}) sferico perfetto, la cui luminosità totale dipende direttamente dal raggio stellare $R$ e dalla temperatura efficace $T_{eff}$. La relazione è espressa dalla formula:

$$
L = 4\pi R^2 \sigma T_{eff}^4
$$

dove $L$ è la luminosità in watt, $R$ è il raggio stellare in metri, $4\pi R^2$ è l'area della superficie della stella assunta come sferica, $\sigma$ (sigma) è la costante di Stefan-Boltzmann, pari a:

$$
5,6704 \times 10^{-8} \text{ W m}^{-2}\text{ K}^{-4}
$$

e $T$ è la temperatura espressa in gradi kelvin. Questa equazione evidenzia come la luminosità sia estremamente sensibile alle variazioni di temperatura, crescendo con la quarta potenza di quest'ultima.

Spesso, in astrofisica, al posto della legge di Stefan-Boltzmann, si usa una sua versione equivalente semplificata, più pratica, basata sul confronto con i valori solari:

$$
{L\over L_\odot} = \left({R\over R_\odot}\right)^2 \times \left({T\over T_\odot}\right)^4
$$

## Un esempio pratico: calcoliamo la luminosità di Sirio

Facciamo un esempio concreto, applicando questa formula a Sirio, di cui conosciamo esattamente il raggio ($1{,}711$ raggi solari) e la temperatura ($9.900\,\mathrm{K}$). Calcoliamo prima il quadrato del rapporto tra i raggi:

$$
\left(\frac{R}{R_\odot}\right)^2 = (1{,}711)^2 = 2{,}928
$$

Calcoliamo ora il rapporto tra le temperature di Sirio e del Sole:

$$
\frac{T}{T_\odot} = \frac{9900}{5778} = 1{,}713
$$

Calcoliamo poi la quarta potenza del risultato ottenuto:

$$
\left(\frac{T}{T_\odot}\right)^4 = (1{,}713)^4 = 8{,}618
$$

Moltiplichiamo infine il risultato delle due operazioni secondo quanto richiesto dalla formula:

$$
\frac{L_{Sirio}}{L_\odot} = 2{,}928 \times 8{,}618= 25{,}23
$$

La legge di Stefan-Boltzmann ci dice, dunque, che Sirio è intrinsecamente circa $25$ volte più luminosa del Sole.

## La legge del quadrato della distanza

Per calcolare le luminosità stellari possiamo usare anche la **legge del quadrato della distanza**, basata sul rapporto tra la distanza di una stella e il [flusso di radiazione]({{< relref "/dizionario/flusso-di-radiazione/" >}}) che riceviamo da essa qui sulla Terra.

Si parte dalla magnitudine apparente, misurata possibilmente in più bande dello spettro, con l'applicazione di una correzione bolometrica per ottenere il flusso totale. Si calcola poi la distanza con uno dei metodi disponibili (il più affidabile è la misura dell'angolo di parallasse). Si applica infine la formula che correla la luminosità alla distanza espressa in metri e al flusso bolometrico misurato, espresso in $\mathrm{W/m}^2$:

$$
L = 4\pi d^2 F
$$

Possiamo applicare la legge del quadrato della distanza a Sirio, per cercare una conferma osservativa del valore calcolato con la legge di Stefan-Boltzmann.

Sirio ha una magnitudine apparente visuale di $-1{,}46$. In base al tipo spettrale (A1V) e alla temperatura $(T_{eff} \approx 9.900\,\mathrm{K})$, la correzione bolometrica $BC$ da applicare è approssimativamente $−0,30$. Sommando i due valori, si ottiene una magnitudine bolometrica apparente di $-1,76$. Da questo dato, attraverso calcoli che esulano dallo scopo di questo articolo, si ottiene il flusso di radiazione ricevuto da Sirio sulla Terra, che è:

$$\approx 1{,}27 \times 10^{-7} \, \text{W/m}^2.$$

La parallasse trigonometrica misurata dal satellite Hipparcos ci fornisce poi la distanza: $2,637$ parsec $(8,6$ anni luce$)$, corrispondente a $8,137 \times 10^{16}\,\mathrm{m}$. Possiamo ora finalmente applicare la formula che ci darà la luminosità di Sirio partendo dalla sua distanza e dal flusso apparente:

$$
4\pi d^2 = 4\pi \times (8{,}137 \times 10^{16})^2 = 4\pi \times 6{,}621 \times 10^{33} = 8{,}319 \times 10^{34} \, \text{m}^2
$$

Da ciò segue la luminosità della stella in watt:

$$
L_{Sirio} = 8{,}319 \times 10^{34} \times 1{,}27 \times 10^{-7} \approx 1{,}06 \times 10^{28} \, \text{W}
$$

Infine ricaviamo il rapporto di luminosità con il Sole:

$$\frac{L_{Sirio}}{L_\odot} = \frac{1{,}06 \times 10^{28}}{3{,}828 \times 10^{26}} \approx 27{,}6 \, L_\odot$$

Il valore ottenuto - circa $27{,}6$ luminosità solari - è in buon accordo con quello calcolato usando la legge di Stefan-Boltzmann $(25,23\;L_\odot)$, leggermente superiore ma entro il margine di incertezza legato alla correzione bolometrica applicata, un valore che non è mai definito con precisione assoluta.

## Altri metodi per calcolare le luminosità stellari

Esistono anche altri metodi per calcolare le luminosità stellari, ma sono meno affidabili dei due elencati fin qui:

-   Il **metodo spettroscopico** (o **parallasse spettroscopica**). Questo metodo è fondamentale per stimare la luminosità di stelle singole e lontane, per le quali non si può misurare il raggio. Si basa sul diagramma di Hertzsprung-Russell (H-R). Analizzando in dettaglio lo spettro della stella, si determina non solo la sua **temperatura** (il tipo spettrale), ma anche la sua **classe di luminosità** (nana, gigante, supergigante), che rivela le dimensioni della stella. Una volta trovata la sua posizione univoca sul diagramma H-R, se ne “legge” la luminosità intrinseca. L'accuratezza di questo metodo dipende dalla qualità dello spettro e dalla bontà dei modelli teorici. Per stelle vicine, il metodo viene tarato usando le parallassi, ed è molto efficace per stimare distanze anche di milioni di anni-luce.

-   La **relazione tra massa e luminosità** (MLR). Si tratta di un metodo indiretto, che si basa su una correlazione empirica: per le stelle “normali” (come quelle di sequenza principale), esiste una relazione che lega la massa alla luminosità. Se si riesce a determinare la massa di una stella, ad esempio studiando il moto orbitale in un sistema binario, se ne può stimare la luminosità, applicando una relazione in base alla quale la luminosità equivale alla massa della stella elevata a circa $3{,}5$ (l'esponente può variare a seconda delle masse in gioco). È un metodo utile per avere stime generiche, ma è considerato secondario e meno preciso dei metodi precedenti.

## Scale di luminosità a confronto

| Oggetto / Fenomeno | Tipo di Oggetto | Luminosità Approssimativa ($L_\odot$) | Potenza Emessa (Watt) | Note / Contesto |
| :--- | :--- | :--- | :--- | :--- |
| Proxima Centauri | Stella nana rossa (M5.5V) | $1{,}7 \times 10^{-3}$ | $\sim 6{,}5 \times 10^{23}$ | Una delle stelle più vicine, ma invisibile a occhio nudo |
| Il Sole | Stella di sequenza principale (G2V) | $1$ | $3{,}828 \times 10^{26}$ | Il nostro termine di paragone standard |
| Sirio A | Stella di sequenza principale (A1V) | $25$ | $\sim 9{,}6 \times 10^{27}$ | La stella più brillante del cielo notturno |
| Rigel | Stella supergigante blu (B8Ia) | $1{,}2 \times 10^{5}$ | $\sim 4{,}6 \times 10^{31}$ | Splende con l'energia di oltre centomila Soli |
| R136a1 | Stella Wolf-Rayet estrema | $6{,}2 \times 10^{6}$ | $\sim 2{,}4 \times 10^{33}$ | Una delle stelle più massicce e luminose conosciute |
| Supernova Tipo Ia (al picco) | Esplosione di una nana bianca | $\sim 5 \times 10^{9}$ | $\sim 1{,}9 \times 10^{36}$ | Utilizzate come "candele standard" per misurare le distanze cosmiche |
| Via Lattea | Galassia a spirale sbarrata | $\sim 2 \times 10^{10}$ | $\sim 7{,}6 \times 10^{36}$ | La luminosità complessiva di circa 200-400 miliardi di stelle |
| M87 | Galassia ellittica gigante | $\sim 6 \times 10^{10}$ | $\sim 2{,}3 \times 10^{37}$ | Domina il nucleo dell'Ammasso della Vergine |
| Quasar 3C 273 | Nucleo Galattico Attivo (AGN) | $\sim 4 \times 10^{12}$ | $\sim 1{,}5 \times 10^{39}$ | Il primo quasar identificato; emette più di 100 galassie |
| Quasar J0529-4351 | Nucleo Galattico Attivo estremo | $\sim 5 \times 10^{14}$ | $\sim 1{,}9 \times 10^{41}$ | Uno degli oggetti persistenti più luminosi dell'universo osservabile |
| Lampi di raggi gamma (GRB) al picco | Collasso/Fusione di oggetti compatti | $\sim 10^{18}$ | $\sim 3{,}8 \times 10^{44}$ | Fenomeni transitori; in pochi secondi emettono l'energia del Sole in tutta la sua vita |


{{< figura 
src="immagini/lampo-raggi-gamma.png" 
alt="Rappresentazione ipotetica di un lampo di raggi gamma" 
caption="Rappresentazione ipotetica di un lampo di raggi gamma"
>}}

[^1]: All'atto pratico, uno strumento in grado di misurare esattamente il flusso di una stella lungo l'intero spettro non esiste. Di conseguenza, la luminosità bolometrica è quasi sempre il risultato di un'estrapolazione teorica basata sul flusso misurato in una data banda (tipicamente quella del visibile), integrato con modelli teorici e osservazioni spaziali, quando disponibili (UV, infrarosso, raggi X). A causa di tale limite, nel calcolare la luminosità bolometrica di una stella si applica quasi sempre una [correzione bolometrica]({{< relref "/dizionario/correzione-bolometrica/" >}}) $(BC)$, basata sui modelli più aggiornati per integrare su tutto lo spettro il flusso osservato di quella specifica stella.
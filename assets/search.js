// Copia di themes/hugo-book/assets/search.js con tre differenze, tutte nella
// funzione search(): cerca prima le parole esatte (o le parole intere e le
// frasi esatte, se racchiuse tra virgolette doppie) e ricorre alla ricerca approssimata solo se
// non trova nulla; i risultati della ricerca esatta sono
// riordinati dalla funzione ordina(); sotto il titolo di ogni risultato, al
// posto della sezione del sito, compare una frase della pagina che contiene le
// parole cercate, scelta dalla funzione frase() (vedi i commenti dentro le
// funzioni).
import Fuse from '{{ "fuse.min.mjs" | relURL }}'

{{ $searchDataFile := printf "%s.search-data.json" .Language.Name }}
{{ $searchData := resources.Get "search-data.json" | resources.ExecuteAsTemplate $searchDataFile . | resources.Minify | resources.Fingerprint }}
{{ $searchConfig := i18n "bookSearchConfig" | default "{}" }}

(function () {
  const searchDataURL = '{{ partial "docs/links/resource-precache" $searchData }}';
  const indexConfig = Object.assign({{ $searchConfig }}, {
    includeScore: true,
    useExtendedSearch: true,
    fieldNormWeight: 1.5,
    threshold: 0.2,
    ignoreLocation: true,
    keys: [
      {
        name: 'title',
        weight: 0.7
      },
      {
        name: 'content',
        weight: 0.3
      }
    ]
  });

  const input = document.querySelector('#book-search-input');
  const results = document.querySelector('#book-search-results');

  if (!input) {
    return
  }

  input.addEventListener('focus', init);
  input.addEventListener('keyup', search);

  document.addEventListener('keydown', focusOnKeyDown);

  /**
   * @param {KeyboardEvent} event
   */
  function focusOnKeyDown(event) {
    if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
      event.preventDefault();
      input.focus();
      return;
    }

    if (input === document.activeElement) {
      return;
    }

    if (event.target.value !== undefined) {
      return;
    }

    if (event.key === '/') {
      event.preventDefault();
      input.focus();
    }
  }

  function init() {
    input.removeEventListener('focus', init); // init once
    input.required = true;

    fetch(searchDataURL)
      .then(pages => pages.json())
      .then(pages => {
        // Il testo delle pagine arriva con le entità HTML (es. &rsquo; per
        // l'apostrofo): qui le si converte nei caratteri veri, sia per le frasi
        // mostrate sotto i risultati sia per la ricerca stessa.
        pages.forEach(function (p) { p.content = decodifica(p.content || ''); });
        window.bookSearchIndex = new Fuse(pages, indexConfig);
      })
      .then(() => input.required = false)
      .then(search);
  }

  function search() {
    while (results.firstChild) {
      results.removeChild(results.firstChild);
    }

    if (!input.value) {
      return;
    }

    // Prima una ricerca esatta: ogni parola digitata deve comparire davvero nel
    // titolo o nel testo della pagina (in Fuse.js il prefisso ' chiede la
    // corrispondenza esatta, senza distinguere maiuscole e minuscole).
    // Una parola o più parole racchiuse tra virgolette doppie ("polare",
    // "stella polare") devono comparire così come sono scritte: parole intere,
    // vicine e nello stesso ordine. Senza virgolette basta che le parole
    // compaiano nella pagina, anche come parte di parole più lunghe ("stella"
    // trova anche "stellare").
    // Solo se non trova nulla, e se non si è cercato nulla tra virgolette,
    // si passa alla ricerca approssimata, utile per gli errori di battitura
    // (es. "Betelgeuze"), tenendo però soltanto i risultati molto simili: senza
    // questo limite la ricerca approssimata restituiva pagine in cui la parola
    // cercata non compare affatto.
    const termini = leggiTermini(input.value);
    const conVirgolette = termini.some(function (t) { return t.esatto; });
    if (!termini.length) {
      return;
    }
    const esatta = termini.map(function (t) {
      return t.esatto ? "'\"" + t.testo + "\"" : "'" + t.testo;
    }).join(' ');
    let risultati = window.bookSearchIndex.search(esatta);
    if (conVirgolette) {
      risultati = risultati.filter(function (r) { return paroleIntere(r.item, termini); });
    }
    if (risultati.length) {
      risultati = ordina(risultati, termini);
    } else if (!conVirgolette) {
      risultati = window.bookSearchIndex.search(input.value).filter(function (r) { return r.score < 0.5; });
    }
    const searchHits = risultati.slice(0,20);
    searchHits.forEach(function (page) {
      const li = element('<li><a href></a><small></small></li>');
      const a = li.querySelector('a'), small = li.querySelector('small');

      a.href = page.item.href;
      a.textContent = page.item.title;
      evidenzia(small, frase(page.item.content, termini), termini);

      results.appendChild(li);
    });
  }

  // Riordina i risultati della ricerca esatta. L'ordine di Fuse.js non tiene
  // conto di quante volte una parola compare e penalizza i testi lunghi, così
  // una voce che usa la parola una volta sola in poche righe passava davanti a
  // una voce lunga che la usa decine di volte. Qui vengono prima le pagine che
  // hanno nel titolo le parole cercate, poi le altre in ordine decrescente di
  // occorrenze nel testo; a parità resta l'ordine di Fuse.js.
  function ordina(risultati, termini) {
    return risultati.map(function (r) {
      const titolo = r.item.title || '';
      const testo = r.item.content || '';
      return {
        r: r,
        nelTitolo: termini.filter(function (t) { return modello(t, 'iu').test(titolo); }).length,
        occorrenze: termini.reduce(function (somma, t) { return somma + (testo.match(modello(t, 'giu')) || []).length; }, 0)
      };
    }).sort(function (a, b) {
      return (b.nelTitolo - a.nelTitolo) || (b.occorrenze - a.occorrenze) || (a.r.score - b.r.score);
    }).map(function (x) { return x.r; });
  }

  // Divide il testo digitato in termini: ciò che sta tra virgolette doppie
  // (anche se la virgoletta di chiusura non è ancora stata digitata), da
  // trovare esattamente così, e le singole parole senza virgolette.
  // L'apostrofo digitato dentro una parola (dell'angolo) è convertito in
  // quello tipografico (dell’angolo) usato nei testi del sito.
  function leggiTermini(valore) {
    const termini = [];
    const re = /["“”]([^"“”]*)["“”]?|(\S+)/g;
    let m;
    while ((m = re.exec(valore)) !== null) {
      const esatto = m[1] !== undefined;
      let testo = (esatto ? m[1] : m[2]).trim().replace(/\s+/g, ' ');
      if (!esatto) testo = testo.replace(/^'+/, '');
      testo = testo.replace(/(\S)'(?=\S)/g, '$1’');
      if (testo) termini.push({ testo: testo, esatto: esatto });
    }
    return termini;
  }

  // Espressione regolare che riconosce un termine nel testo, senza distinguere
  // maiuscole e minuscole. Per un termine tra virgolette riconosce solo parole
  // intere: "polare" non trova "dipolare" né "popolare".
  function modello(termine, opzioni) {
    let src = termine.testo.replace(/[.*+?^$()|[\]\\{}]/g, '\\$&').replace(/ /g, '\\s+');
    if (termine.esatto) src = '(?<![\\p{L}\\p{N}])' + src + '(?![\\p{L}\\p{N}])';
    return new RegExp(src, opzioni);
  }

  // Fuse.js trova un termine anche dentro parole più lunghe ("polare" in
  // "dipolare"): qui si tengono solo le pagine in cui ogni termine tra
  // virgolette compare come parola intera (o sequenza di parole intere), nel
  // titolo o nel testo.
  function paroleIntere(pagina, termini) {
    const testo = (pagina.title || '') + '\n' + (pagina.content || '');
    return termini.every(function (t) { return !t.esatto || modello(t, 'iu').test(testo); });
  }

  // Converte le entità HTML nei caratteri corrispondenti.
  function decodifica(testo) {
    const t = document.createElement('textarea');
    t.innerHTML = testo;
    return t.value;
  }

  // Sceglie la frase da mostrare sotto il titolo di un risultato: la prima
  // frase del testo che contiene tutte le parole cercate, oppure, in mancanza,
  // quella che ne contiene di più. I titoli dei paragrafi sono usati solo se
  // la parola non compare altrove; una frase molto breve è preceduta dalla
  // frase che la precede. Se nessuna parola compare nel testo (per esempio
  // quando la parola è solo nel titolo della pagina o quando si è passati alla
  // ricerca approssimata) si mostra la prima frase della pagina che non sia la
  // didascalia di una figura.
  const GRECHE = {
    alpha: 'α', beta: 'β', gamma: 'γ', delta: 'δ', epsilon: 'ε', varepsilon: 'ε', zeta: 'ζ',
    eta: 'η', theta: 'θ', kappa: 'κ', lambda: 'λ', mu: 'μ', nu: 'ν', xi: 'ξ', pi: 'π',
    rho: 'ρ', sigma: 'σ', tau: 'τ', phi: 'φ', varphi: 'φ', chi: 'χ', psi: 'ψ', omega: 'ω',
    Gamma: 'Γ', Delta: 'Δ', Theta: 'Θ', Lambda: 'Λ', Pi: 'Π', Sigma: 'Σ', Phi: 'Φ', Psi: 'Ψ', Omega: 'Ω', odot: '☉', times: '×', approx: '≈', sim: '~', cdot: '·',
    le: '≤', leq: '≤', ge: '≥', geq: '≥', pm: '±', infty: '∞',
    vec: '', dot: '', ddot: '', hat: '', bar: '', left: '', right: '', mathbf: '', frac: ''
  };

  function frase(contenuto, termini) {
    const cercate = termini.map(function (t) { return modello(t, 'iu'); });
    const blocchi = (contenuto || '').split(/[\r\n]+/);
    let migliore = '', punteggioMigliore = 0, prima = '';

    for (const blocco of blocchi) {
      const titoloParagrafo = /#\s*$/.test(blocco);
      const pulito = blocco
        .replace(/#\s*$/, '')
        .replace(/\\%/g, '%')
        .replace(/\$/g, '')
        // Semplifica le formule LaTeX rimaste nel testo (es. 10^{14}\,\text{G})
        .replace(/\\(?:text|mathrm)\{([^{}]*)\}/g, '$1')
        .replace(/\{,\}/g, ',')
        .replace(/\\[,;: ]/g, ' ')
        .replace(/([\^_])\{([^{}]*)\}/g, '$1$2')
        .replace(/\\([a-zA-Z]+)/g, function (tutto, nome) { return nome in GRECHE ? GRECHE[nome] : nome; })
        .replace(/\s{2,}/g, ' ')
        .trim();
      if (!pulito) continue;

      const frasi = titoloParagrafo ? [pulito] : pulito.split(/(?<=[.!?…])\s+(?=[A-ZÀÈÉÌÒÙ«"(])/);
      for (let k = 0; k < frasi.length; k++) {
        let f = frasi[k];
        if (!prima && !titoloParagrafo && f.length >= 60 && !/^(Figura\s+\d|Crediti)/.test(f)) prima = f;
        const trovate = cercate.filter(function (re) { return re.test(f); }).length;
        if (!trovate) continue;
        // Una frase molto breve dice poco da sola: le si premette la precedente.
        if (f.length < 80 && k > 0) f = frasi[k - 1] + ' ' + f;
        const punteggio = trovate * 2 - (titoloParagrafo ? 1 : 0);
        if (punteggio > punteggioMigliore) {
          migliore = f;
          punteggioMigliore = punteggio;
          if (trovate === cercate.length && !titoloParagrafo) return taglia(migliore, cercate);
        }
      }
    }
    return taglia(migliore || prima, cercate);
  }

  // Accorcia le frasi troppo lunghe, tenendo visibile la prima parola cercata
  // e tagliando tra una parola e l'altra.
  function taglia(testo, cercate) {
    const massimo = 200;
    if (testo.length <= massimo) return testo;
    let pos = -1;
    cercate.forEach(function (re) {
      const i = testo.search(re);
      if (i !== -1 && (pos === -1 || i < pos)) pos = i;
    });
    let inizio = Math.max(0, pos - 60);
    if (inizio > 0) {
      const spazio = testo.indexOf(' ', inizio);
      inizio = spazio !== -1 && spazio < pos ? spazio + 1 : inizio;
    }
    let fine = inizio + massimo;
    if (fine < testo.length) {
      const spazio = testo.lastIndexOf(' ', fine);
      fine = spazio > inizio ? spazio : fine;
    } else {
      fine = testo.length;
    }
    return (inizio > 0 ? '…' : '') + testo.slice(inizio, fine).trim() + (fine < testo.length ? '…' : '');
  }

  // Scrive la frase nell'elemento, evidenziando le parole cercate.
  function evidenzia(elemento, testo, termini) {
    if (!testo) return;
    if (!termini.length) {
      elemento.textContent = testo;
      return;
    }
    const re = new RegExp('(' + termini.map(function (t) { return modello(t, 'u').source; }).join('|') + ')', 'giu');
    testo.split(re).forEach(function (pezzo, i) {
      if (!pezzo) return;
      if (i % 2) {
        const m = document.createElement('mark');
        m.textContent = pezzo;
        elemento.appendChild(m);
      } else {
        elemento.appendChild(document.createTextNode(pezzo));
      }
    });
  }

  /**
   * @param {String} content
   * @returns {Node}
   */
  function element(content) {
    const div = document.createElement('div');
    div.innerHTML = content;
    return div.firstChild;
  }
})();

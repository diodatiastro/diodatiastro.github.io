// Copia di themes/hugo-book/assets/search.js con una sola differenza: la funzione
// search() cerca prima le parole esatte e ricorre alla ricerca approssimata solo
// se non trova nulla (vedi il commento dentro search()).
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
    // Solo se non trova nulla si passa alla ricerca approssimata, utile per gli
    // errori di battitura (es. "Betelgeuze"), tenendo però soltanto i risultati
    // molto simili: senza questo limite la ricerca approssimata restituiva
    // pagine in cui la parola cercata non compare affatto.
    const parole = input.value.trim().split(/\s+/).filter(Boolean);
    const esatta = parole.map(function (p) { return "'" + p.replace(/^'+/, ''); }).join(' ');
    let risultati = window.bookSearchIndex.search(esatta);
    if (!risultati.length) {
      risultati = window.bookSearchIndex.search(input.value).filter(function (r) { return r.score < 0.5; });
    }
    const searchHits = risultati.slice(0,10);
    searchHits.forEach(function (page) {
      const li = element('<li><a href></a><small></small></li>');
      const a = li.querySelector('a'), small = li.querySelector('small');

      a.href = page.item.href;
      a.textContent = page.item.title;
      small.textContent = page.item.section;

      results.appendChild(li);
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

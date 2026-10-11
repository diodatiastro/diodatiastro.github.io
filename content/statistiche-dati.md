---
title: "Dati per la pagina delle statistiche"
# Genera /statistiche/pagine.json: elenco di percorsi e titoli di tutte le
# pagine della sitemap, letto da static/statistiche/index.html.
# Non compare in menu, elenchi né sitemap.
layout: "statistiche-dati"
outputs: ["json"]
url: "/statistiche/pagine.json"
build:
  list: never
  render: always
sitemap:
  disable: true
---

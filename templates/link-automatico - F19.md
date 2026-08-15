<%*
let testo = tp.file.selection();

let slug = testo
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")   // elimina gli accenti
    .toLowerCase()
    .replace(/['’]/g, "")              // elimina apostrofi
    .replace(/[^a-z0-9\s-]/g, "")      // elimina altri caratteri speciali
    .trim()
    .replace(/\s+/g, "-");             // spazi → trattini

tR += `[${testo}]({{< relref "/dizionario/${slug}/" >}})`;
%>
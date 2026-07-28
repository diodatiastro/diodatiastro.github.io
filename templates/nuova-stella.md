<%*
const nome = await tp.system.prompt("Nome della stella");

if (!nome) {
    return;
}

// Creazione slug compatibile con Hugo
const slug = nome
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

// Percorso della nuova voce
const percorso = `content/stelle/${slug}`;

// Creazione cartella principale e sottocartella immagini
await app.vault.createFolder(percorso);
await app.vault.createFolder(`${percorso}/immagini`);

// Contenuto iniziale di index.md
const contenuto = `+++
title = "${nome}"
subtitle = ""
date = "${tp.date.now("YYYY-MM-DD")}"
draft = false
+++

{{< katex />}}
`;

// Creazione del file index.md
await app.vault.create(`${percorso}/index.md`, contenuto);

// Apertura automatica del nuovo articolo
const file = app.vault.getAbstractFileByPath(`${percorso}/index.md`);
await tp.file.open_file(file);

%>
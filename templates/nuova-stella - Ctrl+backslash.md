<%*
const nome = await tp.system.prompt("Nome della stella");

if (!nome) {
    new Notice("Creazione annullata");
    await app.vault.trash(app.workspace.getActiveFile(), true);
    return;
}

// Creazione slug compatibile con Hugo
const slug = nome
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

// Percorso della nuova voce
const percorso = `content/stelle/${slug}`;
const percorsoFile = `${percorso}/index`;

// Controllo se esiste già
if (await app.vault.adapter.exists(percorsoFile + ".md")) {
    new Notice("La voce esiste già: " + slug);
    await app.vault.trash(app.workspace.getActiveFile(), true);
    return;
}

// Creazione cartella principale e sottocartella immagini
await app.vault.createFolder(percorso);
await app.vault.createFolder(`${percorso}/immagini`);

// Data odierna
const oggi = tp.date.now("YYYY-MM-DD");

// Sposta la nota già creata da Templater nel percorso definitivo
await tp.file.move(percorsoFile);
-%>
+++
title = "<% nome %>"
subtitle = ""
date = "<% oggi %>"
draft = false
tags = []
+++

{{< katex />}}


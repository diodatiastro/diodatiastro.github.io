<%*
const titolo = await tp.system.prompt("Titolo della voce");

if (!titolo) {
    new Notice("Creazione annullata");
    await app.vault.trash(app.workspace.getActiveFile(), true);
    return;
}

// Crea lo slug per Hugo
const slug = titolo
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

// Percorso della nuova voce
const cartella = `content/dizionario/${slug}`;
const percorsoFile = `${cartella}/index`;

// Controllo se esiste già
if (await app.vault.adapter.exists(percorsoFile + ".md")) {
    new Notice("La voce esiste già: " + slug);
    await app.vault.trash(app.workspace.getActiveFile(), true);
    return;
}

// Crea la cartella e la sottocartella immagini
await app.vault.createFolder(cartella);
await app.vault.createFolder(`${cartella}/immagini`);

// Data odierna
const oggi = tp.date.now("YYYY-MM-DD");

// Sposta la nota già creata da Templater nel percorso definitivo
await tp.file.move(percorsoFile);
-%>
+++
title = "<% titolo %>"
date = "<% oggi %>"
draft = false
+++

{{< katex />}}


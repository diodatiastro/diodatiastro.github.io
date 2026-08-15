<%*
// Elenco delle sottocartelle esistenti sotto materiali/dizionario
const baseFolder = app.vault.getAbstractFileByPath("materiali/dizionario");

if (!baseFolder || !baseFolder.children) {
    new Notice("Cartella materiali/dizionario non trovata");
    await app.vault.trash(app.workspace.getActiveFile(), true);
    return;
}

const sottocartelle = baseFolder.children
    .filter(f => f.children !== undefined)
    .map(f => f.name)
    .sort((a, b) => a.localeCompare(b));

if (sottocartelle.length === 0) {
    new Notice("Nessuna sottocartella trovata in materiali/dizionario");
    await app.vault.trash(app.workspace.getActiveFile(), true);
    return;
}

const cartellaScelta = await tp.system.suggester(sottocartelle, sottocartelle, false, "Scegli la cartella");

if (!cartellaScelta) {
    new Notice("Creazione annullata");
    await app.vault.trash(app.workspace.getActiveFile(), true);
    return;
}

const nomePagina = await tp.system.prompt("Nome della pagina");

if (!nomePagina) {
    new Notice("Creazione annullata");
    await app.vault.trash(app.workspace.getActiveFile(), true);
    return;
}

const nomePulito = nomePagina.trim().replace(/[\\/:*?"<>|]/g, "");

if (!nomePulito) {
    new Notice("Nome non valido");
    await app.vault.trash(app.workspace.getActiveFile(), true);
    return;
}

const percorsoFile = `materiali/dizionario/${cartellaScelta}/${nomePulito}`;

// Controllo se esiste già
if (await app.vault.adapter.exists(percorsoFile + ".md")) {
    new Notice("La pagina esiste già: " + nomePulito);
    await app.vault.trash(app.workspace.getActiveFile(), true);
    return;
}

// Sposta la nota già creata da Templater nel percorso definitivo
await tp.file.move(percorsoFile);
-%>

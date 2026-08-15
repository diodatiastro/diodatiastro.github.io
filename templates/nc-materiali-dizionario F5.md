<%*
const nome = await tp.system.prompt("Nome della cartella");

if (!nome) {
    new Notice("Creazione annullata");
    await app.vault.trash(app.workspace.getActiveFile(), true);
    return;
}

// Rimuove eventuali caratteri non ammessi nei nomi di cartella su Windows
const nomePulito = nome.trim().replace(/[\\/:*?"<>|]/g, "");

if (!nomePulito) {
    new Notice("Nome non valido");
    await app.vault.trash(app.workspace.getActiveFile(), true);
    return;
}

const percorso = `materiali/dizionario/${nomePulito}`;

// Controllo se esiste già
if (await app.vault.adapter.exists(percorso)) {
    new Notice("La cartella esiste già: " + nomePulito);
    await app.vault.trash(app.workspace.getActiveFile(), true);
    return;
}

// Crea la cartella, senza alcun file dentro
await app.vault.createFolder(percorso);

new Notice("Cartella creata: " + nomePulito);

// Elimina la nota vuota creata automaticamente da Templater: qui non serve nessun file
await app.vault.trash(app.workspace.getActiveFile(), true);
return;
%>

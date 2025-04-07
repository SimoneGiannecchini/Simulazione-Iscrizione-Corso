# Simulazione di Iscrizione a Corso

A Pen created on CodePen.

Original URL: [https://codepen.io/SimoneGiannecchini/pen/raNRRGe](https://codepen.io/SimoneGiannecchini/pen/raNRRGe).

# IncluDO – Sistema di Formazione per Migranti

Questo progetto, sviluppato in **TypeScript**, simula il funzionamento di una scuola di formazione per migranti.  
Modella l’interazione tra **partecipanti**, **corsi di formazione** e **aziende partner** che offrono opportunità lavorative.

---

## ✨ Funzionalità

- Gestione dei partecipanti ai corsi
- Organizzazione dei corsi di formazione professionale
- Offerte di lavoro da parte di aziende partner
- Connessione tra migranti formati e imprese del territorio

---

# 📦 Come esportare un progetto da CodePen e caricarlo su GitHub

Questa guida ti spiega in modo semplice come salvare un progetto creato su CodePen in una cartella del tuo computer e poi pubblicarlo su GitHub.

---

## ✅ 1. Esporta il progetto da CodePen

1. Vai su CodePen nel progetto che vuoi esportare.
2. In basso a destra clicca su **"Export"**.
3. Seleziona **"Export .zip"**.
4. Scarica il file `.zip` e **estrailo in una cartella** sul tuo computer (es. `includo`).

---

## ✅ 2. Inizializza un progetto Git

Apri la cartella estratta e:

1. Clicca con il tasto destro e seleziona **"Apri nel terminale"** (oppure apri VSCode in quella cartella).
2. Esegui questi comandi nel terminale:

```bash
git init
git add .
git commit -m "Primo commit"

✅ 3. Crea un nuovo repository su GitHub
Vai su https://github.com

Clicca su "New repository"

Dai un nome al progetto (es. includo)

NON aggiungere README, .gitignore o licenza (hai già tutto localmente)

Clicca su "Create repository"

✅ 4. Collega il repository remoto e carica i file
Dopo aver creato il repo, GitHub ti mostrerà i comandi. Copia e incolla questi nel terminale:

bash
Copia
Modifica
git remote add origin https://github.com/tuo-nome-utente/includo.git
git branch -M main
git push -u origin main

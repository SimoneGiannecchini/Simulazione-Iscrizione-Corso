# Simulazione di Iscrizione a Corso

A Pen created on CodePen.

Original URL: [https://codepen.io/SimoneGiannecchini/pen/raNRRGe](https://codepen.io/SimoneGiannecchini/pen/raNRRGe).

# IncluDO – Sistema di Formazione per Migranti

Questo progetto, sviluppato in **TypeScript**, simula il funzionamento di una scuola di formazione per migranti.  
Modella l’interazione tra **partecipanti**, **corsi di formazione** e **aziende partner** che offrono opportunità lavorative.

---

## 👤 Partecipante

Un partecipante rappresenta un migrante che vuole formarsi.

### Funzioni:
- **Registrazione dati**: nome, cognome, Paese, studi, lingue, settore d’interesse
- **Iscrizione a un corso** → con il metodo `iscrivitiCorso()`

---

## 📚 Corso

Un corso rappresenta un percorso formativo offerto dalla scuola.

### Funzioni:
- **Informazioni base**: titolo, descrizione, settore, durata
- **Gestione degli iscritti**
- **Aggiunta partecipante** → con il metodo `aggiungiPartecipante()`

---

## 🏢 Azienda

Un’azienda partner che offre tirocini o impieghi.

### Funzioni:
- **Dettagli azienda**: nome, settore, descrizione
- **Elenco posizioni aperte**
- **Offerta di lavoro a un partecipante** → con `offriPosizione()`

---

## 🔗 Collegamento tra le parti

- Un **partecipante** si iscrive a un **corso**
- Un **corso** gestisce gli iscritti
- Un’**azienda** può proporre un lavoro a un partecipante iscritto

---

## 🎯 Obiettivo del progetto

Creare un sistema semplice ma chiaro per simulare:
- L’inclusione formativa
- Il collegamento tra migranti e aziende
- La logica base di gestione utenti e offerte

---

✅ Progetto utile per testare concetti base di TypeScript, OOP e gestione entità collegate.

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

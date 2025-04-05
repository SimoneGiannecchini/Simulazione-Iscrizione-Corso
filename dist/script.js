"use strict";
class Partecipante {
    constructor(nome, cognome, paeseOrigine, livelloIstruzione, competenzeLinguistiche, ambitoFormazione) {
        this.nome = nome;
        this.cognome = cognome;
        this.paeseOrigine = paeseOrigine;
        this.livelloIstruzione = livelloIstruzione;
        this.competenzeLinguistiche = competenzeLinguistiche;
        this.ambitoFormazione = ambitoFormazione;
    }
    iscrivitiCorso(corso) {
        console.log(`${this.nome} ${this.cognome} si è iscritto al corso: ${corso.titolo}`);
        corso.aggiungiPartecipante(this);
    }
}
class Corso {
    constructor(titolo, descrizione, settoreProfessionale, durata) {
        this.titolo = titolo;
        this.descrizione = descrizione;
        this.settoreProfessionale = settoreProfessionale;
        this.durata = durata;
        this.iscritti = [];
    }
    aggiungiPartecipante(partecipante) {
        this.iscritti.push(partecipante);
        console.log(`Partecipante ${partecipante.nome} ${partecipante.cognome} aggiunto al corso: ${this.titolo}`);
    }
}
class Azienda {
    constructor(nomeAzienda, settoreAttivita, descrizione, posizioniAperte) {
        this.nomeAzienda = nomeAzienda;
        this.settoreAttivita = settoreAttivita;
        this.descrizione = descrizione;
        this.posizioniAperte = posizioniAperte;
    }
    offriPosizione(partecipante, posizione) {
        if (this.posizioniAperte.includes(posizione)) {
            console.log(`L'azienda ${this.nomeAzienda} offre la posizione "${posizione}" a ${partecipante.nome} ${partecipante.cognome}.`);
        }
        else {
            console.log(`La posizione "${posizione}" non è disponibile presso ${this.nomeAzienda}.`);
        }
    }
}
const partecipante1 = new Partecipante("Mario", "Rossi", "Italia", "Diploma", ["Italiano", "Inglese"], "Informatica");
const partecipante2 = new Partecipante("Luigi", "Bianchi", "Marocco", "Laurea", ["Arabo", "Francese", "Italiano"], "Marketing");
const partecipante3 = new Partecipante("Fatima", "El Mansouri", "Tunisia", "Diploma", ["Arabo", "Inglese"], "Design");
const corsoInformatica = new Corso("Corso di Informatica", "Introduzione alla programmazione, algoritmi e sviluppo web.", "Tecnologia", 40);
const corsoMarketing = new Corso("Corso di Marketing Digitale", "Strategie di marketing online, social media e pubblicità digitale.", "Marketing", 30);
const corsoDesign = new Corso("Corso di Design Grafico", "Nozioni di design, uso dei principali software grafici e tecniche creative.", "Design", 35);
const aziendaPartner = new Azienda("TechSolutions", "Tecnologia", "Azienda leader nel settore IT che supporta l'inclusione dei migranti nel mondo del lavoro.", ["Sviluppatore Junior", "Tecnico IT"]);
partecipante1.iscrivitiCorso(corsoInformatica);
partecipante2.iscrivitiCorso(corsoMarketing);
partecipante3.iscrivitiCorso(corsoDesign);
partecipante2.iscrivitiCorso(corsoInformatica);
aziendaPartner.offriPosizione(partecipante1, "Sviluppatore Junior");
aziendaPartner.offriPosizione(partecipante3, "Designer Grafico");
console.log("\nIscritti al corso di Informatica:", corsoInformatica.iscritti);
console.log("Iscritti al corso di Marketing:", corsoMarketing.iscritti);
console.log("Iscritti al corso di Design:", corsoDesign.iscritti);
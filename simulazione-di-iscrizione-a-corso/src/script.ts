interface IPartecipante {
  nome: string;
  cognome: string;
  paeseOrigine: string;
  livelloIstruzione: string;
  competenzeLinguistiche: string[];
  ambitoFormazione: string;
  iscrivitiCorso(corso: ICorso): void;
}

interface ICorso {
  titolo: string;
  descrizione: string;
  settoreProfessionale: string;
  durata: number;
  iscritti: IPartecipante[];
  aggiungiPartecipante(partecipante: IPartecipante): void;
}

interface IAzienda {
  nomeAzienda: string;
  settoreAttivita: string;
  descrizione: string;
  posizioniAperte: string[];
  offriPosizione(partecipante: IPartecipante, posizione: string): void;
}

class Partecipante implements IPartecipante {
  constructor(
    public nome: string,
    public cognome: string,
    public paeseOrigine: string,
    public livelloIstruzione: string,
    public competenzeLinguistiche: string[],
    public ambitoFormazione: string
  ) {}

  iscrivitiCorso(corso: ICorso): void {
    console.log(`${this.nome} ${this.cognome} si è iscritto al corso: ${corso.titolo}`);
    corso.aggiungiPartecipante(this);
  }
}

class Corso implements ICorso {
  iscritti: IPartecipante[] = [];

  constructor(
    public titolo: string,
    public descrizione: string,
    public settoreProfessionale: string,
    public durata: number
  ) {}

  aggiungiPartecipante(partecipante: IPartecipante): void {
    this.iscritti.push(partecipante);
    console.log(`Partecipante ${partecipante.nome} ${partecipante.cognome} aggiunto al corso: ${this.titolo}`);
  }
}

class Azienda implements IAzienda {
  constructor(
    public nomeAzienda: string,
    public settoreAttivita: string,
    public descrizione: string,
    public posizioniAperte: string[]
  ) {}

  offriPosizione(partecipante: IPartecipante, posizione: string): void {
    if (this.posizioniAperte.includes(posizione)) {
      console.log(`L'azienda ${this.nomeAzienda} offre la posizione "${posizione}" a ${partecipante.nome} ${partecipante.cognome}.`);
    } else {
      console.log(`La posizione "${posizione}" non è disponibile presso ${this.nomeAzienda}.`);
    }
  }
}

const partecipante1 = new Partecipante(
  "Mario",
  "Rossi",
  "Italia",
  "Diploma",
  ["Italiano", "Inglese"],
  "Informatica"
);

const partecipante2 = new Partecipante(
  "Luigi",
  "Bianchi",
  "Marocco",
  "Laurea",
  ["Arabo", "Francese", "Italiano"],
  "Marketing"
);

const partecipante3 = new Partecipante(
  "Fatima",
  "El Mansouri",
  "Tunisia",
  "Diploma",
  ["Arabo", "Inglese"],
  "Design"
);

const corsoInformatica = new Corso(
  "Corso di Informatica",
  "Introduzione alla programmazione, algoritmi e sviluppo web.",
  "Tecnologia",
  40
);

const corsoMarketing = new Corso(
  "Corso di Marketing Digitale",
  "Strategie di marketing online, social media e pubblicità digitale.",
  "Marketing",
  30
);

const corsoDesign = new Corso(
  "Corso di Design Grafico",
  "Nozioni di design, uso dei principali software grafici e tecniche creative.",
  "Design",
  35
);

const aziendaPartner = new Azienda(
  "TechSolutions",
  "Tecnologia",
  "Azienda leader nel settore IT che supporta l'inclusione dei migranti nel mondo del lavoro.",
  ["Sviluppatore Junior", "Tecnico IT"]
);

partecipante1.iscrivitiCorso(corsoInformatica);
partecipante2.iscrivitiCorso(corsoMarketing);
partecipante3.iscrivitiCorso(corsoDesign);
partecipante2.iscrivitiCorso(corsoInformatica);
aziendaPartner.offriPosizione(partecipante1, "Sviluppatore Junior");
aziendaPartner.offriPosizione(partecipante3, "Designer Grafico");

console.log("\nIscritti al corso di Informatica:", corsoInformatica.iscritti);
console.log("Iscritti al corso di Marketing:", corsoMarketing.iscritti);
console.log("Iscritti al corso di Design:", corsoDesign.iscritti);


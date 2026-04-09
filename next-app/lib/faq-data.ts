// lib/faq-data.ts - FAQ aus docs/BRANCHE.md
export interface FAQ {
  frage: string;
  antwort: string;
}

export const faqs: FAQ[] = [
  {
    frage: "Was kostet eine Heizungswartung?",
    antwort: "Eine Standard-Heizungswartung kostet zwischen 120-180 &euro; je nach Anlagentyp. Wir erstellen Ihnen vorab ein transparentes Angebot."
  },
  {
    frage: "Wie schnell sind Sie bei einem Notfall vor Ort?",
    antwort: "In unserem Einzugsgebiet sind wir in der Regel innerhalb von 60 Minuten bei Ihnen. Rufen Sie unseren Notdienst an: 0170 1234567."
  },
  {
    frage: "Bieten Sie kostenlose Angebote an?",
    antwort: "Ja, die Erstberatung und Angebotserstellung ist bei uns immer kostenlos und unverbindlich."
  },
  {
    frage: "Welche F&ouml;rderungen gibt es f&uuml;r eine neue Heizung?",
    antwort: "&Uuml;ber die Bundesf&ouml;rderung f&uuml;r effiziente Geb&auml;ude (BEG) sind bis zu 70% F&ouml;rderung m&ouml;glich. Wir beraten Sie und &uuml;bernehmen die Antragstellung."
  },
  {
    frage: "Wie lange dauert eine Badsanierung?",
    antwort: "Je nach Umfang rechnen Sie mit 2-4 Wochen. Bei der Erstberatung erstellen wir Ihnen einen realistischen Zeitplan."
  },
  {
    frage: "Sind Sie ein Innungsfachbetrieb?",
    antwort: "Ja, wir sind Mitglied der SHK-Innung und im Installateurverzeichnis eingetragen. Das bedeutet f&uuml;r Sie: gepr&uuml;fte Qualifikation und regelm&auml;&szlig;ige Weiterbildung."
  }
];
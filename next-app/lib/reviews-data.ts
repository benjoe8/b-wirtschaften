// lib/reviews-data.ts - Kundenbewertungen aus docs/BRANCHE.md
export interface Review {
  text: string;
  name: string;
  ort: string;
  sterne: number;
  datum: string;
}

export const reviews: Review[] = [
  {
    text: "Schneller Notdienst am Wochenende! Das Team war in 45 Minuten da und hat unseren Rohrbruch professionell behoben. Absolut empfehlenswert!",
    name: "Familie K.",
    ort: "Bonn",
    sterne: 5,
    datum: "2025-01"
  },
  {
    text: "Unsere komplette Badsanierung wurde perfekt umgesetzt. Termintreu, sauber und das Ergebnis ist wundersch&ouml;n.",
    name: "Herr S.",
    ort: "Bad Godesberg",
    sterne: 5,
    datum: "2024-11"
  },
  {
    text: "Faire Preise, kompetente Beratung und eine top Heizungsanlage. Wir sind rundum zufrieden.",
    name: "Frau M.",
    ort: "Beuel",
    sterne: 5,
    datum: "2024-09"
  },
  {
    text: "Von der Beratung bis zur Installation der W&auml;rmepumpe - alles reibungslos. Die F&ouml;rderung wurde gleich mit beantragt.",
    name: "Herr und Frau D.",
    ort: "Siegburg",
    sterne: 5,
    datum: "2025-02"
  }
];
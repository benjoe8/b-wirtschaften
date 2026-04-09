// lib/services-data.ts - Leistungsdaten aus docs/BRANCHE.md
import { Flame, ShowerHead, Zap, Siren, Sun } from "lucide-react";

export interface Service {
  slug: string;
  titel: string;
  icon: any; // Lucide Icon Component
  kurz: string;
  beschreibung: string;
  kundenprobleme: string[];
  vorteile: Array<{ titel: string; text: string }>;
  seo_title: string;
  seo_description: string;
  seo_keywords: string[];
}

export const services: Service[] = [
  {
    slug: "heizung",
    titel: "Heizung",
    icon: Flame,
    kurz: "Installation, Wartung & Modernisierung",
    beschreibung: "Von der Gasbrennwerttherme bis zur W&auml;rmepumpe - wir planen, installieren und warten Ihre Heizungsanlage. Inklusive F&ouml;rderberatung.",
    kundenprobleme: [
      "Ihre Heizung wird nicht mehr richtig warm?",
      "Die Energiekosten steigen jedes Jahr?",
      "Sie m&ouml;chten auf eine klimafreundliche Heizung umsteigen?"
    ],
    vorteile: [
      {
        titel: "Alle Heizsysteme",
        text: "Gas, &Ouml;l, W&auml;rmepumpe, Pellets, Solar - wir beraten herstellerunabh&auml;ngig."
      },
      {
        titel: "F&ouml;rderung sichern",
        text: "Wir &uuml;bernehmen die komplette F&ouml;rderantragsstellung f&uuml;r Sie."
      },
      {
        titel: "Festpreisgarantie",
        text: "Sie erhalten ein verbindliches Angebot ohne versteckte Kosten."
      }
    ],
    seo_title: "Heizung installieren & modernisieren in Bonn",
    seo_description: "Heizungsinstallation und Heizungsmodernisierung in Bonn. W&auml;rmepumpe, Gas, Pellets - mit F&ouml;rderberatung. Jetzt Angebot anfragen.",
    seo_keywords: ["Heizung installieren Bonn", "Heizungsmodernisierung Bonn", "W&auml;rmepumpe Bonn"]
  },
  {
    slug: "sanitaer",
    titel: "Sanit&auml;r & Bad",
    icon: ShowerHead,
    kurz: "Badsanierung, Sanit&auml;rinstallation & barrierefreie B&auml;der",
    beschreibung: "Vom kleinen Reparaturauftrag bis zur kompletten Badsanierung - wir gestalten Ihr Traumbad mit Pr&auml;zision und Leidenschaft.",
    kundenprobleme: [
      "Ihr Bad ist in die Jahre gekommen?",
      "Sie ben&ouml;tigen eine barrierefreie L&ouml;sung?",
      "Der Wasserhahn tropft seit Wochen?"
    ],
    vorteile: [
      {
        titel: "Alles aus einer Hand",
        text: "Planung, Demontage, Installation und Fliesenarbeiten - ein Ansprechpartner."
      },
      {
        titel: "3D-Badplanung",
        text: "Sehen Sie Ihr neues Bad, bevor wir anfangen."
      },
      {
        titel: "Barrierefrei",
        text: "Zertifizierte Planung f&uuml;r altersgerechtes Wohnen."
      }
    ],
    seo_title: "Badsanierung & Sanit&auml;rinstallation in Bonn",
    seo_description: "Professionelle Badsanierung in Bonn. Komplettb&auml;der, barrierefreie Umbauten, Sanit&auml;rreparaturen. Meisterbetrieb - jetzt beraten lassen.",
    seo_keywords: ["Badsanierung Bonn", "Sanit&auml;r Bonn", "barrierefreies Bad Bonn"]
  },
  {
    slug: "gas",
    titel: "Gas-Installation",
    icon: Zap,
    kurz: "Gasleitungen, Gasthermen & Sicherheitspr&uuml;fungen",
    beschreibung: "Als eingetragener Installateur im Gasinstallateurverzeichnis f&uuml;hren wir alle Arbeiten an Gasleitungen und Gasger&auml;ten fachgerecht durch.",
    kundenprobleme: [
      "Ihre Gastherme muss getauscht werden?",
      "Sie brauchen eine Gasleitungspr&uuml;fung?",
      "Der Gasverbrauch erscheint Ihnen zu hoch?"
    ],
    vorteile: [
      {
        titel: "Konzessioniert",
        text: "Eingetragen im Installateurverzeichnis des lokalen Gasversorgers."
      },
      {
        titel: "Sicherheit zuerst",
        text: "Druckpr&uuml;fung und Dichtheitskontrolle nach TRGI."
      },
      {
        titel: "Schnelle Hilfe",
        text: "Bei Gasgeruch: Notdienst innerhalb von 60 Minuten."
      }
    ],
    seo_title: "Gas-Installation & Gasthermen-Service in Bonn",
    seo_description: "Gasinstallation, Gasthermen-Wartung und Gasleitungspr&uuml;fung in Bonn. Konzessionierter Meisterbetrieb. 24h Notdienst.",
    seo_keywords: ["Gasinstallateur Bonn", "Gastherme Bonn", "Gasleitungspr&uuml;fung Bonn"]
  },
  {
    slug: "notdienst",
    titel: "Notdienst",
    icon: Siren,
    kurz: "24/7 Soforthilfe bei Rohrbruch, Heizungsausfall & Gasgeruch",
    beschreibung: "Rohrbruch um 3 Uhr nachts? Heizungsausfall am Wochenende? Unser Notdienst ist 365 Tage im Jahr f&uuml;r Sie erreichbar.",
    kundenprobleme: [
      "Wasserrohrbruch - es l&auml;uft Wasser in die Wohnung?",
      "Die Heizung f&auml;llt mitten im Winter aus?",
      "Sie riechen Gas in Ihrer Wohnung?"
    ],
    vorteile: [
      {
        titel: "< 60 Min.",
        text: "Durchschnittliche Anfahrtszeit in unserem Einzugsgebiet."
      },
      {
        titel: "Faire Preise",
        text: "Transparente Notdienst-Pauschale ohne versteckte Zuschl&auml;ge."
      },
      {
        titel: "Erfahrene Monteure",
        text: "Nur ausgebildete Fachkr&auml;fte - keine Subunternehmer."
      }
    ],
    seo_title: "SHK Notdienst 24/7 in Bonn - Rohrbruch, Heizung, Gas",
    seo_description: "24h SHK-Notdienst in Bonn. Schnelle Hilfe bei Rohrbruch, Heizungsausfall und Gasgeruch. In unter 60 Minuten vor Ort.",
    seo_keywords: ["SHK Notdienst Bonn", "Rohrbruch Notdienst Bonn", "Heizung Notdienst Bonn"]
  },
  {
    slug: "erneuerbare-energien",
    titel: "Erneuerbare Energien",
    icon: Sun,
    kurz: "W&auml;rmepumpen, Solar & F&ouml;rderberatung",
    beschreibung: "Die Energiewende beginnt im Heizungskeller. Wir beraten Sie herstellerunabh&auml;ngig zu W&auml;rmepumpen, Solarthermie und Photovoltaik-Heizl&ouml;sungen.",
    kundenprobleme: [
      "Sie m&ouml;chten weg von Gas und &Ouml;l?",
      "Welche F&ouml;rderung steht Ihnen zu?",
      "Ist eine W&auml;rmepumpe f&uuml;r Ihr Haus geeignet?"
    ],
    vorteile: [
      {
        titel: "Bis 70% F&ouml;rderung",
        text: "Wir maximieren Ihre BEG-F&ouml;rderung und &uuml;bernehmen die Antragstellung."
      },
      {
        titel: "Herstellerunabh&auml;ngig",
        text: "Wir empfehlen die beste L&ouml;sung f&uuml;r Ihr Geb&auml;ude, nicht f&uuml;r unsere Marge."
      },
      {
        titel: "Rundum-Service",
        text: "Von der Energieberatung bis zur Inbetriebnahme - ein Partner."
      }
    ],
    seo_title: "W&auml;rmepumpe & erneuerbare Energien in Bonn",
    seo_description: "W&auml;rmepumpen-Installation in Bonn. Herstellerunabh&auml;ngige Beratung, F&ouml;rderantr&auml;ge inklusive. Meisterbetrieb mit Erfahrung.",
    seo_keywords: ["W&auml;rmepumpe Bonn", "erneuerbare Energien Bonn", "F&ouml;rderung Heizung Bonn"]
  }
];
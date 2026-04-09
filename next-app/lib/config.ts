// lib/config.ts - Zentrale Konfiguration aus docs/BRANCHE.md
// Diese Datei wird automatisch aus BRANCHE.md generiert

export interface SiteConfig {
  company: {
    name: string;
    owner: string;
    claim: string;
    foundedYear: number;
    phone: string;
    phoneEmergency: string;
    email: string;
    address: { street: string; zip: string; city: string };
    region: string;
    serviceRadius: string;
    openingHours: { weekdays: string; saturday: string; emergency: string };
  };
  colors: {
    primary: string;
    primaryLight: string;
    primaryLighter: string;
    accent: string;
    accentLight: string;
  };
  seo: { title: string; description: string; keywords: string[] };
  features: Record<string, boolean | string>;
  socialProof: {
    googleRating: number;
    googleReviewCount: number;
    yearsExperience: number;
    completedProjects: number;
    emergencyResponseMinutes: number;
  };
  navigation: Array<{ label: string; href: string; children?: Array<{ label: string; href: string }> }>;
}

// Konfiguration f&uuml;r Mustermann SHK GmbH
export const config: SiteConfig = {
  company: {
    name: "Mustermann SHK GmbH",
    owner: "Max Mustermann",
    claim: "Ihr Meisterbetrieb f&uuml;r Sanit&auml;r, Heizung & Klima",
    foundedYear: 2005,
    phone: "0228 1234567",
    phoneEmergency: "0170 1234567",
    email: "info@mustermann-shk.de",
    address: { street: "Musterstra&szlig;e 12", zip: "53111", city: "Bonn" },
    region: "Bonn und Umgebung",
    serviceRadius: "30km",
    openingHours: {
      weekdays: "Mo-Fr: 07:30-17:00 Uhr",
      saturday: "Sa: nach Vereinbarung",
      emergency: "24/7 erreichbar"
    },
  },
  colors: {
    primary: "#1a365d",     // Dunkelblau
    primaryLight: "#2b5ea7",
    primaryLighter: "#e8f0fe",
    accent: "#d97706",      // Amber
    accentLight: "#f59e0b",
  },
  seo: {
    title: "SHK Meisterbetrieb Bonn - Sanit&auml;r, Heizung & Klima",
    description: "Ihr Meisterbetrieb f&uuml;r Sanit&auml;r, Heizung & Klima in Bonn. Seit 2005 vertrauen uns Kunden in Bonn und Umgebung. Notdienst 24/7.",
    keywords: ["SHK Bonn", "Sanit&auml;r Bonn", "Heizung Bonn", "Klima Bonn", "Meisterbetrieb Bonn"]
  },
  features: {
    notdienst_banner: true,
    whatsapp_button: false,
    whatsapp_nummer: "",
    google_maps: false,
    google_maps_key: "",
    analytics: false,
    analytics_id: "",
    cookie_consent: true,
    kontakt_backend: "frontend",
    kontakt_webhook_url: "",
    kontakt_email_api_key: "",
    faq: true,
    galerie: true,
    team_sektion: false,
    blog: false,
  },
  socialProof: {
    googleRating: 4.8,
    googleReviewCount: 87,
    yearsExperience: 20,
    completedProjects: 2500,
    emergencyResponseMinutes: 60,
  },
  navigation: [
    { label: "Start", href: "/" },
    { label: "Leistungen", href: "/#leistungen", children: [
      { label: "Heizung", href: "/leistungen/heizung" },
      { label: "Sanit&auml;r & Bad", href: "/leistungen/sanitaer" },
      { label: "Gas-Installation", href: "/leistungen/gas" },
      { label: "Notdienst", href: "/leistungen/notdienst" },
      { label: "Erneuerbare Energien", href: "/leistungen/erneuerbare-energien" },
    ]},
    { label: "&Uuml;ber uns", href: "/#ueber-uns" },
    { label: "Kontakt", href: "/kontakt" },
  ],
};

// Hero-Texte
export const heroContent = {
  headline: "Ihre Heizung streikt? Wir sind in 60 Minuten bei Ihnen.",
  subline: "Seit 2005 Ihr verl&auml;sslicher Meisterbetrieb f&uuml;r Sanit&auml;r, Heizung & Klima in Bonn und Umgebung.",
  cta_primary: "Kostenlos Angebot anfragen",
  cta_secondary: "Notdienst anrufen",
};

// Lead Magnet
export const leadMagnet = {
  typ: "checklist",
  titel: "Gratis Heizungs-Check",
  untertitel: "10 Punkte, die Sie jetzt pr&uuml;fen sollten - und bares Geld sparen",
  cta: "Checkliste herunterladen",
  beschreibung: "Finden Sie in 5 Minuten heraus, ob Ihre Heizung noch effizient arbeitet.",
};
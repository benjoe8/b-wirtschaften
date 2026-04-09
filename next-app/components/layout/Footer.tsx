// components/layout/Footer.tsx
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { config } from "@/lib/config";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Spalte 1: Firmeninfo */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">{config.company.name}</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {config.company.claim}
            </p>
            <p className="text-slate-400 text-sm">
              Seit {config.company.foundedYear} in {config.company.region}
            </p>
          </div>

          {/* Spalte 2: Leistungen */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Leistungen</h4>
            <ul className="space-y-2 text-sm">
              {config.navigation
                .find(item => item.label === "Leistungen")
                ?.children?.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Spalte 3: Kontakt */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Kontakt</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                <div className="text-slate-300">
                  <p>{config.company.address.street}</p>
                  <p>{config.company.address.zip} {config.company.address.city}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <a
                  href={`tel:${config.company.phone}`}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {config.company.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <a
                  href={`mailto:${config.company.email}`}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {config.company.email}
                </a>
              </div>
            </div>
          </div>

          {/* Spalte 4: Rechtliches */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/impressum"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link
                  href="/agb"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  AGB
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-slate-700" />

        {/* Untere Zeile */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>
            &copy; {currentYear} {config.company.name}. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-4">
            <span>Meisterbetrieb</span>
            <span>*</span>
            <span>Innungsfachbetrieb</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
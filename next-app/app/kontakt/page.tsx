// app/kontakt/page.tsx
import { ContactForm } from "@/components/sections/ContactForm";
import { config } from "@/lib/config";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: `Kontakt - ${config.company.name}`,
  description: `Kontaktieren Sie ${config.company.name} für Ihre SHK-Projekte. Telefon: ${config.company.phone}, E-Mail: ${config.company.email}`,
};

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Kontaktieren Sie uns
          </h1>
          <p className="text-xl text-primary-lighter">
            Wir beraten Sie gerne persönlich zu Ihrem Projekt.
            Vereinbaren Sie einen Termin oder fordern Sie ein kostenloses Angebot an.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                So erreichen Sie uns
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
                    <a
                      href={`tel:${config.company.phone}`}
                      className="text-primary hover:text-primary-light transition-colors text-lg"
                    >
                      {config.company.phone}
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      Mo–Fr: {config.company.openingHours.weekdays}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-md flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Notdienst</h3>
                    <a
                      href={`tel:${config.company.phoneEmergency}`}
                      className="text-red-600 hover:text-red-700 transition-colors text-lg font-medium"
                    >
                      {config.company.phoneEmergency}
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      24/7 erreichbar
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">E-Mail</h3>
                    <a
                      href={`mailto:${config.company.email}`}
                      className="text-primary hover:text-primary-light transition-colors"
                    >
                      {config.company.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Adresse</h3>
                    <div className="text-gray-700">
                      <p>{config.company.address.street}</p>
                      <p>{config.company.address.zip} {config.company.address.city}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Öffnungszeiten</h3>
                    <div className="text-gray-700 space-y-1">
                      <p>{config.company.openingHours.weekdays}</p>
                      <p>{config.company.openingHours.saturday}</p>
                      <p className="text-red-600 font-medium">{config.company.openingHours.emergency}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
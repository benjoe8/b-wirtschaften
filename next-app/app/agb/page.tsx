// app/agb/page.tsx
import { config } from "@/lib/config";

export const metadata = {
  title: `AGB - ${config.company.name}`,
  description: `Allgemeine Geschäftsbedingungen von ${config.company.name}`,
};

export default function AGBPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Allgemeine Geschäftsbedingungen</h1>

        <div className="prose prose-lg max-w-none">
          <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-8">
            <p className="text-yellow-800 text-sm">
              <strong>Hinweis:</strong> Dies ist ein Platzhalter-Text. Bitte lassen Sie diesen von einem Rechtsanwalt
              auf Ihre spezifischen Bedürfnisse anpassen.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Geltungsbereich</h2>
            <p className="text-gray-700 mb-4">
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen {config.company.name}
              (nachfolgend "Auftragnehmer") und dem Auftraggeber (nachfolgend "Kunde") über die Erbringung von
              Leistungen im Bereich Sanitär, Heizung und Klima (SHK).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Vertragsabschluss</h2>
            <p className="text-gray-700 mb-4">
              Der Vertrag kommt durch Angebot und Annahme zustande. Angebote des Auftragnehmers sind 30 Tage
              ab Ausstellungsdatum gültig. Mündliche Absprachen bedürfen der schriftlichen Bestätigung.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Preise und Zahlung</h2>
            <p className="text-gray-700 mb-4">
              Die im Angebot genannten Preise sind Festpreise und verstehen sich inklusive der gesetzlichen
              Mehrwertsteuer. Zahlungen erfolgen nach Rechnungserhalt innerhalb von 14 Tagen ohne Abzug.
            </p>
            <p className="text-gray-700 mb-4">
              Bei Aufträgen über 5.000 € wird eine Abschlagszahlung in Höhe von 30% bei Auftragserteilung fällig.
              Die Restzahlung erfolgt nach Abnahme der Leistung.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Leistungsumfang und Ausführung</h2>
            <p className="text-gray-700 mb-4">
              Der Auftragnehmer erbringt die vertraglich vereinbarten Leistungen fachgerecht nach den Regeln
              der Technik und den anerkannten Standards des Handwerks. Der Kunde stellt sicher, dass die
              Arbeitsstelle zugänglich ist und die notwendigen Vorarbeiten durchgeführt wurden.
            </p>
            <p className="text-gray-700 mb-4">
              Änderungen des Leistungsumfangs bedürfen der schriftlichen Vereinbarung und können zu
              Preisänderungen führen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Termine</h2>
            <p className="text-gray-700 mb-4">
              Vereinbarte Termine sind verbindlich. Bei Verzögerungen durch höhere Gewalt, Krankheit oder
              unvorhersehbare Ereignisse wird der Auftragnehmer den Kunden unverzüglich informieren.
              Der Kunde hat Anspruch auf Schadensersatz nur bei grober Fahrlässigkeit oder Vorsatz.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Gewährleistung</h2>
            <p className="text-gray-700 mb-4">
              Es gelten die gesetzlichen Gewährleistungsfristen. Mängel müssen innerhalb von 2 Jahren nach
              Abnahme schriftlich gerügt werden. Der Auftragnehmer behebt berechtigte Mängel innerhalb
              angemessener Frist kostenfrei.
            </p>
            <p className="text-gray-700 mb-4">
              Keine Gewährleistung besteht für Mängel, die durch unsachgemäße Behandlung, Überbeanspruchung
              oder Fremdeinwirkung entstanden sind.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Abnahme</h2>
            <p className="text-gray-700 mb-4">
              Nach Fertigstellung der Arbeiten erfolgt die Abnahme. Der Kunde ist verpflichtet, die Leistung
              innerhalb von 14 Tagen nach Fertigstellungsmitteilung abzunehmen. Bei nicht berechtigter
              Abnahmeverweigerung gilt die Leistung nach 14 Tagen als abgenommen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Haftung</h2>
            <p className="text-gray-700 mb-4">
              Der Auftragnehmer haftet für Schäden nur bei grober Fahrlässigkeit oder Vorsatz. Die Haftung
              ist auf den Auftragswert beschränkt. Für Folgeschäden und mittelbare Schäden wird nicht gehaftet.
            </p>
            <p className="text-gray-700 mb-4">
              Der Kunde haftet für Schäden an vorhandenen Installationen, die durch unsachgemäße Angaben
              oder fehlende Vorarbeiten entstanden sind.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Eigentumsvorbehalt</h2>
            <p className="text-gray-700 mb-4">
              Gelieferte Waren bleiben bis zur vollständigen Bezahlung Eigentum des Auftragnehmers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Schlussbestimmungen</h2>
            <p className="text-gray-700 mb-4">
              Es gilt deutsches Recht. Gerichtsstand ist {config.company.address.city}. Mündliche Nebenabreden
              bedürfen der Schriftform. Sollte eine Bestimmung unwirksam sein, bleiben die übrigen wirksam.
            </p>
            <p className="text-gray-700 mb-4">
              Änderungen dieser AGB bedürfen der Schriftform.
            </p>
          </section>

          <div className="mt-12 p-6 bg-gray-50 rounded-md">
            <p className="text-sm text-gray-600">
              Stand: {new Date().toLocaleDateString('de-DE')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
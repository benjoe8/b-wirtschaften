// app/impressum/page.tsx
import { config } from "@/lib/config";

export const metadata = {
  title: `Impressum - ${config.company.name}`,
  description: `Impressum und rechtliche Informationen von ${config.company.name}`,
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Impressum</h1>

        <div className="prose prose-lg max-w-none">
          <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-8">
            <p className="text-green-800 text-sm">
              <strong>Hinweis:</strong> Dieses Impressum dient als Mustertext. Bitte passen Sie die Angaben
              an Ihre tatsächlichen Verhältnisse an und lassen Sie es bei Bedarf von einem Rechtsanwalt prüfen.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Angaben gemäß § 5 TMG</h2>
            <div className="bg-gray-50 p-6 rounded-md">
              <p className="text-gray-700 mb-2">
                <strong>{config.company.name}</strong>
              </p>
              <p className="text-gray-700 mb-2">
                {config.company.address.street}<br />
                {config.company.address.zip} {config.company.address.city}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Telefon:</strong> <a href={`tel:${config.company.phone}`} className="text-blue-600 hover:text-blue-800">{config.company.phone}</a>
              </p>
              <p className="text-gray-700 mb-2">
                <strong>E-Mail:</strong> <a href={`mailto:${config.company.email}`} className="text-blue-600 hover:text-blue-800">{config.company.email}</a>
              </p>
              {config.company.website && (
                <p className="text-gray-700 mb-2">
                  <strong>Website:</strong> <a href={config.company.website} className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">{config.company.website}</a>
                </p>
              )}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Vertretungsberechtigte Personen</h2>
            <div className="bg-gray-50 p-6 rounded-md">
              <p className="text-gray-700 mb-2">
                <strong>Geschäftsführer:</strong> {config.company.owner}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Handelsregister:</strong> {config.company.registerNumber}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Registergericht:</strong> {config.company.registerCourt}
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Umsatzsteuer-ID</h2>
            <div className="bg-gray-50 p-6 rounded-md">
              <p className="text-gray-700">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                {config.company.vatId}
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <div className="bg-gray-50 p-6 rounded-md">
              <p className="text-gray-700 mb-4">
                <strong>Berufsbezeichnung:</strong> Sanitär-, Heizungs- und Klimainstallateur (SHK)
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Zuständige Kammer:</strong> Handwerkskammer {config.company.chamber}
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Es gelten folgende berufsrechtliche Regelungen:</strong>
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                <li>Handwerksordnung (HwO)</li>
                <li>Gesetz zur Ordnung des Handwerks</li>
                <li>Berufsordnung der Handwerkskammer</li>
              </ul>
              <p className="text-gray-700">
                Die Regelungen können bei der zuständigen Handwerkskammer eingesehen werden.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Angaben zur Betriebshaftpflichtversicherung</h2>
            <div className="bg-gray-50 p-6 rounded-md">
              <p className="text-gray-700 mb-2">
                <strong>Name und Sitz des Versicherers:</strong><br />
                {config.company.insurance.name}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Geltungsraum der Versicherung:</strong><br />
                {config.company.insurance.scope}
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Streitschlichtung</h2>
            <div className="bg-gray-50 p-6 rounded-md">
              <p className="text-gray-700 mb-4">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              </p>
              <p className="text-gray-700 mb-4">
                <a href="https://ec.europa.eu/consumers/odr/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="text-gray-700">
                Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet,
                an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Haftung für Inhalte</h2>
            <p className="text-gray-700 mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch
              nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
              Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="text-gray-700 mb-4">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
              Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt
              der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Haftung für Links</h2>
            <p className="text-gray-700 mb-4">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
              haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
              der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
              Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p className="text-gray-700 mb-4">
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
              einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
              Links umgehend entfernen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Urheberrecht</h2>
            <p className="text-gray-700 mb-4">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
              deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
              außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
              Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet.
            </p>
            <p className="text-gray-700 mb-4">
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
              Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
              trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden
              Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
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
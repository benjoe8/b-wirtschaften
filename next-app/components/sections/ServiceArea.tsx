// components/sections/ServiceArea.tsx
import { MapPin } from "lucide-react";
import { config } from "@/lib/config";
import { serviceAreas } from "@/lib/service-areas";
import { Badge } from "@/components/ui/badge";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

export function ServiceArea() {
  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <RevealOnScroll>
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Wir sind f&uuml;r Sie da - in {config.company.region}
              </h2>
                <p className="text-lg text-gray-600">
                Schnelle Hilfe in Ihrem Einzugsgebiet innerhalb von {config.socialProof.emergencyResponseMinutes} Minuten.
              </p>
            </div>

            <RevealOnScroll delay={0.2}>
              <div className="flex flex-wrap justify-center gap-3">
                {serviceAreas.map((area) => (
                  <Badge
                    key={area}
                    variant="secondary"
                    className="bg-white border border-slate-200 hover:bg-slate-50 px-4 py-2 text-sm font-medium rounded-full"
                  >
                    <MapPin className="w-4 h-4 mr-2 text-primary" />
                    {area}
                  </Badge>
                ))}
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.4}>
              <div className="bg-white rounded-md p-6 border border-slate-200 max-w-2xl mx-auto">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Service-Radius: {config.company.serviceRadius}
                </h3>
                <p className="text-gray-600">
                  Au&szlig;erhalb unseres Kerngebiets bieten wir ebenfalls unsere Dienstleistungen an.
                  Kontaktieren Sie uns f&uuml;r eine individuelle Einsch&aauml;tzung.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
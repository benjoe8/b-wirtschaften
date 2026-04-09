// components/sections/ServicesGrid.tsx
import Link from "next/link";
import { services } from "@/lib/services-data";
import { Card, CardContent } from "@/components/ui/card";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

export function ServicesGrid() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Unsere Leistungen
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Von der Beratung bis zur Fertigstellung - alles aus einer Hand.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll staggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.slug} className="border border-slate-200 bg-white rounded-none hover:border-slate-300 transition-colors group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        {service.titel}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {service.kurz}
                      </p>
                      <Link
                        href={`/leistungen/${service.slug}`}
                        className="text-primary hover:text-primary-light font-medium transition-colors"
                      >
                        Mehr erfahren ?
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </RevealOnScroll>
      </div>
    </section>
  );
}
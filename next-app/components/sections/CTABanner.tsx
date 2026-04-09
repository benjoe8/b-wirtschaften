// components/sections/CTABanner.tsx
import Link from "next/link";
import { Phone } from "lucide-react";
import { config } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

export function CTABanner() {
  return (
    <section className="py-16 md:py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <RevealOnScroll>
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Bereit f&uuml;r Ihr Projekt?
            </h2>
            <p className="text-xl text-primary-lighter max-w-2xl mx-auto">
              Lassen Sie uns &uuml;ber Ihr Vorhaben sprechen. Wir beraten Sie kostenlos
              und erstellen Ihnen ein transparentes Angebot.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent-light text-white px-8 py-4 text-lg">
                <Link href="/kontakt">
                  Kostenloses Angebot anfragen
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
                <a href={`tel:${config.company.phone}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  {config.company.phone}
                </a>
              </Button>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
// app/leistungen/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Clock, Shield, Star, Phone } from "lucide-react";
import { services } from "@/lib/services-data";
import { config } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service nicht gefunden",
    };
  }

  return {
    title: service.seo_title.replace("{stadt}", config.company.city).replace("{region}", config.company.region),
    description: service.seo_description.replace("{stadt}", config.company.city).replace("{region}", config.company.region),
    keywords: service.seo_keywords.map(keyword =>
      keyword.replace("{stadt}", config.company.city).replace("{region}", config.company.region)
    ),
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen bg-white">
      {/* Mini Hero */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <RevealOnScroll>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-accent rounded-md flex items-center justify-center">
                <IconComponent className="w-6 h-6" />
              </div>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Meisterbetrieb
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {service.titel}
            </h1>
            <p className="text-xl text-primary-lighter max-w-2xl mx-auto">
              {service.beschreibung}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Problemstellung */}
        <RevealOnScroll className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kennen Sie das?
            </h2>
            <p className="text-lg text-gray-600">
              Diese Probleme kennen wir nur zu gut – und haben die Lösung
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.kundenprobleme.map((problem, index) => (
              <Card key={index} className="border-red-200 bg-red-50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-600 font-bold text-sm">!</span>
                    </div>
                    <p className="text-red-800 leading-relaxed">{problem}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </RevealOnScroll>

        {/* Lösung */}
        <RevealOnScroll className="mb-16">
          <div className="bg-slate-50 rounded-lg p-8 md:p-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Unsere Lösung für Sie
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Als Meisterbetrieb mit {config.socialProof.yearsExperience} Jahren Erfahrung bieten wir Ihnen
                professionelle Lösungen nach neuestem Stand der Technik. Wir beraten Sie herstellerunabhängig
                und finden die beste Lösung für Ihr Zuhause.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Fachgerechte Ausführung</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Feste Termine</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Transparente Preise</span>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Vorteile */}
        <RevealOnScroll className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ihre Vorteile bei uns
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.vorteile.map((vorteil, index) => (
              <Card key={index} className="border-slate-200 text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {vorteil.titel}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {vorteil.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </RevealOnScroll>

        {/* Prozess Timeline */}
        <RevealOnScroll className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              So läuft Ihr Projekt ab
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: 1, title: "Beratung", desc: "Persönliches Gespräch und Besichtigung vor Ort" },
                { step: 2, title: "Angebot", desc: "Detailliertes Festpreis-Angebot innerhalb 48h" },
                { step: 3, title: "Umsetzung", desc: "Fachgerechte Ausführung termingerecht" },
                { step: 4, title: "Abnahme", desc: "Gemeinsame Qualitätskontrolle und Abnahme" },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* CTA */}
        <RevealOnScroll>
          <div className="bg-primary rounded-lg p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bereit für Ihr Projekt?
            </h2>
            <p className="text-xl text-primary-lighter mb-8 max-w-2xl mx-auto">
              Kontaktieren Sie uns noch heute für eine kostenlose Beratung.
              Wir melden uns innerhalb von 24 Stunden bei Ihnen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent-light">
                <Link href="/kontakt">
                  Kostenloses Angebot anfragen
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <a href={`tel:${config.company.phone}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  {config.company.phone}
                </a>
              </Button>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
// components/sections/HeroSection.tsx
import Image from "next/image";
import Link from "next/link";
import { Phone, Star, Shield, Clock, CheckCircle } from "lucide-react";
import { config, heroContent } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-black/50" />
      <Image
        src="/images/hero-placeholder.jpg"
        alt="Handwerker bei der Arbeit"
        fill
        className="object-cover"
        priority
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          <RevealOnScroll>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
              {heroContent.headline}
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <p className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed">
              {heroContent.subline}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.4} className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button asChild size="lg" className="bg-accent hover:bg-accent-light text-white px-8 py-4 text-lg">
              <Link href="/kontakt#form">
                {heroContent.cta_primary}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg">
              <a href={`tel:${config.company.phone}`}>
                <Phone className="w-5 h-5 mr-2" />
                {heroContent.cta_secondary}
              </a>
            </Button>
          </RevealOnScroll>

          {/* Trust Bar */}
          <RevealOnScroll delay={0.6}>
            <div className="bg-primary rounded-none p-6 text-white">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-2xl font-bold font-mono">{config.socialProof.googleRating}</div>
                  <div className="text-sm text-slate-200">Google-Bewertung</div>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <Shield className="w-6 h-6 text-accent" />
                  <div className="text-2xl font-bold font-mono">Meister</div>
                  <div className="text-sm text-slate-200">Innungsmitglied</div>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <Clock className="w-6 h-6 text-accent" />
                  <div className="text-2xl font-bold font-mono">&lt; 60min</div>
                  <div className="text-sm text-slate-200">Anfahrtszeit</div>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-accent" />
                  <div className="text-2xl font-bold font-mono">{config.socialProof.completedProjects}+</div>
                  <div className="text-sm text-slate-200">Projekte</div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
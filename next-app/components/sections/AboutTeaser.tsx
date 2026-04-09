// components/sections/AboutTeaser.tsx
import Image from "next/image";
import Link from "next/link";
import { Award, Users, Calendar } from "lucide-react";
import { config } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

export function AboutTeaser() {
  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <RevealOnScroll>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                &Uuml;ber {config.company.name}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Seit {config.company.foundedYear} sind wir Ihr vertrauensvoller Partner f&uuml;r
                Sanit&auml;r, Heizung und Klima in {config.company.region}. Als Meisterbetrieb
                und Innungsfachbetrieb garantieren wir h&ouml;chste Qualit&auml;tsstandards und
                termingerechte Ausf&uuml;hrung.
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-white border border-slate-200 px-3 py-1">
                  <Award className="w-4 h-4 mr-2 text-primary" />
                  Meisterbetrieb
                </Badge>
                <Badge variant="secondary" className="bg-white border border-slate-200 px-3 py-1">
                  <Users className="w-4 h-4 mr-2 text-primary" />
                  Innungsfachbetrieb
                </Badge>
                <Badge variant="secondary" className="bg-white border border-slate-200 px-3 py-1">
                  <Calendar className="w-4 h-4 mr-2 text-primary" />
                  Seit {config.company.foundedYear}
                </Badge>
              </div>

              <Button asChild size="lg" className="bg-primary hover:bg-primary-light">
                <Link href="/#ueber-uns">
                  Lernen Sie uns kennen
                </Link>
              </Button>
            </div>
          </RevealOnScroll>

          {/* Image */}
          <RevealOnScroll delay={0.2}>
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-sm overflow-hidden bg-slate-200">
                <Image
                  src="/images/team-placeholder.jpg"
                  alt="Unser Team"
                  fill
                  className="object-cover"
                />
                {/* Placeholder overlay */}
                <div className="absolute inset-0 bg-slate-300 flex items-center justify-center">
                  <div className="text-center text-slate-600">
                    <Users className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-medium">Team-Foto</p>
                    <p className="text-sm">Platzhalter</p>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
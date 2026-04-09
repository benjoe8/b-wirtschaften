// components/sections/TrustBar.tsx
import { Star, Shield, Clock, CheckCircle } from "lucide-react";
import { config } from "@/lib/config";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";

export function TrustBar() {
  return (
    <section className="bg-primary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <AnimatedCounter value={config.socialProof.googleRating} suffix="" className="text-white" />
            <div className="text-sm opacity-90">Google-Bewertung</div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <Shield className="w-8 h-8 text-accent" />
            <div className="text-2xl md:text-3xl font-bold font-mono">
              {config.socialProof.yearsExperience}
            </div>
            <div className="text-sm opacity-90">Jahre Erfahrung</div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <Clock className="w-8 h-8 text-accent" />
            <AnimatedCounter value={config.socialProof.emergencyResponseMinutes} suffix="min" className="text-white" />
            <div className="text-sm opacity-90">Anfahrtszeit</div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <CheckCircle className="w-8 h-8 text-accent" />
            <AnimatedCounter value={config.socialProof.completedProjects} suffix="+" className="text-white" />
            <div className="text-sm opacity-90">Abgeschlossene Projekte</div>
          </div>
        </div>
      </div>
    </section>
  );
}
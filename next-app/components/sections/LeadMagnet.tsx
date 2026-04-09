// components/sections/LeadMagnet.tsx
"use client";

import { useState } from "react";
import { Check, Download, FileText } from "lucide-react";
import { leadMagnet } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

export function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (leadMagnet.typ === "none") return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hier w&uuml;rde die API-Anbindung erfolgen
    setIsSubmitted(true);
  };

  return (
    <section className="py-16 md:py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <RevealOnScroll>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              {leadMagnet.titel}
            </h2>
            <p className="text-xl text-primary-lighter">
              {leadMagnet.untertitel}
            </p>
            <p className="text-lg text-primary-lighter/80 max-w-2xl mx-auto">
              {leadMagnet.beschreibung}
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                <Input
                  type="email"
                  placeholder="Ihre E-Mail-Adresse"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white text-gray-900 border-0 h-12 text-center text-lg"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent-light text-white h-12 text-lg"
                >
                  <Download className="w-5 h-5 mr-2" />
                  {leadMagnet.cta}
                </Button>
              </form>
            ) : (
              <div className="max-w-md mx-auto space-y-4">
                <div className="bg-white/10 rounded-md p-6 border border-white/20">
                  <Check className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Vielen Dank!</h3>
                  <p className="text-primary-lighter">
                    Ihre Checkliste wurde an {email} gesendet.
                  </p>
                </div>
              </div>
            )}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
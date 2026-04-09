// components/shared/FloatingCTA.tsx
"use client";

import { Phone } from "lucide-react";
import { config } from "@/lib/config";
import { Button } from "@/components/ui/button";

export function FloatingCTA() {
  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 z-40">
      <Button
        asChild
        className="w-full bg-accent hover:bg-accent-light text-white shadow-lg h-12 text-base font-medium"
      >
        <a href={`tel:${config.company.phone}`} className="flex items-center justify-center gap-2">
          <Phone className="w-5 h-5" />
          Jetzt anrufen
        </a>
      </Button>
    </div>
  );
}
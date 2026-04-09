// components/layout/EmergencyBanner.tsx
"use client";

import { useState } from "react";
import { X, Phone } from "lucide-react";
import { config } from "@/lib/config";
import { Button } from "@/components/ui/button";

export function EmergencyBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-red-600 text-white py-2 px-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 text-sm">
        <div className="flex items-center gap-2 animate-pulse">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <span className="font-medium">24h Notdienst:</span>
        </div>
        <a
          href={`tel:${config.company.phoneEmergency}`}
          className="flex items-center gap-2 hover:underline"
        >
          <Phone className="w-4 h-4" />
          {config.company.phoneEmergency}
        </a>
      </div>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 p-1 h-auto"
      >
        <X className="w-4 h-4" />
      </Button>
    </div>
  );
}
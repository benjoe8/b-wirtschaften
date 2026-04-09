// components/sections/ContactForm.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/services-data";
import { CheckCircle, Loader2 } from "lucide-react";

const contactSchema = z.object({
  anrede: z.enum(["Herr", "Frau", "Divers"], {
    required_error: "Bitte w�hlen Sie eine Anrede",
  }),
  name: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein"),
  telefon: z.string().min(6, "Bitte geben Sie eine g�ltige Telefonnummer ein"),
  email: z.string().email("Bitte geben Sie eine g�ltige E-Mail-Adresse ein"),
  betreff: z.string().min(1, "Bitte w�hlen Sie einen Betreff"),
  nachricht: z.string().min(10, "Nachricht muss mindestens 10 Zeichen lang sein"),
  datenschutz: z.boolean().refine((val) => val === true, {
    message: "Bitte akzeptieren Sie die Datenschutzerkl�rung",
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Server error");
      setIsSubmitted(true);
    } catch {
      alert("Fehler beim Senden. Bitte versuchen Sie es erneut oder rufen Sie uns an.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="border-green-200 bg-green-50">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto" />
            <div>
              <h3 className="text-xl font-bold text-green-900 mb-2">
                Vielen Dank f�r Ihre Nachricht!
              </h3>
              <p className="text-green-700">
                Wir haben Ihre Anfrage erhalten und melden uns innerhalb von 24 Stunden bei Ihnen.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-slate-200">
      <CardHeader>
        <CardTitle className="text-2xl">Anfrage senden</CardTitle>
        <p className="text-gray-600">
          F�llen Sie das Formular aus und wir melden uns schnellstm�glich bei Ihnen.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Anrede */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Anrede *
            </label>
            <Select onValueChange={(value) => setValue("anrede", value as any)}>
              <SelectTrigger>
                <SelectValue placeholder="Bitte w�hlen" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Herr">Herr</SelectItem>
                <SelectItem value="Frau">Frau</SelectItem>
                <SelectItem value="Divers">Divers</SelectItem>
              </SelectContent>
            </Select>
            {errors.anrede && (
              <p className="text-red-600 text-sm mt-1">{errors.anrede.message}</p>
            )}
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Vollst�ndiger Name *
            </label>
            <Input
              {...register("name")}
              placeholder="Max Mustermann"
              className={errors.name ? "border-red-500" : ""}
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Telefon & E-Mail */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Telefon *
              </label>
              <Input
                {...register("telefon")}
                placeholder="0228 1234567"
                className={errors.telefon ? "border-red-500" : ""}
              />
              {errors.telefon && (
                <p className="text-red-600 text-sm mt-1">{errors.telefon.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                E-Mail *
              </label>
              <Input
                {...register("email")}
                type="email"
                placeholder="max@beispiel.de"
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* Betreff */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Betreff *
            </label>
            <Select onValueChange={(value) => setValue("betreff", value)}>
              <SelectTrigger>
                <SelectValue placeholder="W�hlen Sie ein Thema" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service.slug} value={service.titel}>
                    {service.titel}
                  </SelectItem>
                ))}
                <SelectItem value="Allgemeine Anfrage">Allgemeine Anfrage</SelectItem>
                <SelectItem value="Notdienst">Notdienst</SelectItem>
              </SelectContent>
            </Select>
            {errors.betreff && (
              <p className="text-red-600 text-sm mt-1">{errors.betreff.message}</p>
            )}
          </div>

          {/* Nachricht */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nachricht *
            </label>
            <Textarea
              {...register("nachricht")}
              placeholder="Beschreiben Sie kurz Ihr Anliegen..."
              rows={4}
              className={errors.nachricht ? "border-red-500" : ""}
            />
            {errors.nachricht && (
              <p className="text-red-600 text-sm mt-1">{errors.nachricht.message}</p>
            )}
          </div>

          {/* Datenschutz */}
          <div className="flex items-start gap-3">
            <Checkbox
              id="datenschutz"
              onCheckedChange={(checked) => setValue("datenschutz", checked as boolean)}
            />
            <div className="text-sm">
              <label htmlFor="datenschutz" className="text-gray-700 cursor-pointer">
                Ich akzeptiere die{" "}
                <a href="/datenschutz" className="text-primary hover:underline">
                  Datenschutzerkl�rung
                </a>{" "}
                und stimme der Verarbeitung meiner Daten zu. *
              </label>
              {errors.datenschutz && (
                <p className="text-red-600 mt-1">{errors.datenschutz.message}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary-light h-12 text-lg"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Wird gesendet...
              </>
            ) : (
              "Anfrage senden"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
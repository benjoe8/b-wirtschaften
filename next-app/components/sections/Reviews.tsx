// components/sections/Reviews.tsx
import { Star } from "lucide-react";
import { reviews } from "@/lib/reviews-data";
import { config } from "@/lib/config";
import { Card, CardContent } from "@/components/ui/card";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

export function Reviews() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Was unsere Kunden sagen
            </h2>
            <p className="text-xl text-gray-600">
              &Uuml;ber {config.socialProof.googleReviewCount} zufriedene Kunden auf Google
            </p>
          </div>
        </RevealOnScroll>

        {/* Google Rating Header */}
        <RevealOnScroll delay={0.2}>
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="text-6xl font-bold text-primary font-mono">
              {config.socialProof.googleRating}
            </div>
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < Math.floor(config.socialProof.googleRating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600">
                {config.socialProof.googleReviewCount} Bewertungen
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Reviews Grid */}
        <RevealOnScroll staggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="border border-slate-200 bg-white rounded-none">
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.sterne
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="text-gray-700 mb-4 leading-relaxed">
                  "{review.text}"
                </blockquote>

                {/* Author & Location */}
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <div className="font-medium text-gray-900">{review.name}</div>
                    <div className="text-gray-500">{review.ort}</div>
                  </div>
                  <div className="text-gray-400">
                    {review.datum}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
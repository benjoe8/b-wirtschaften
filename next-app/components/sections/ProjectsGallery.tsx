"use client";

import { useEffect, useState } from "react";

interface Project {
  title: string;
  description?: string;
  category?: string;
  location?: string;
  date?: string;
  before_image?: string;
  after_image?: string;
  active?: boolean;
}

export function ProjectsGallery() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch via server.js API (nginx → port 3100) which reads from /data/
    // server.js already filters active !== false, so no client-side filter needed
    fetch("/api/projects")
      .then((r) => {
        if (!r.ok) throw new Error("API error");
        return r.json();
      })
      .then((data) => {
        const list: Project[] = Array.isArray(data)
          ? data
          : (data?.projects ?? []);
        setProjects(list);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading || projects.length === 0) return null;

  return (
    <section id="referenzen" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Unsere Referenzen
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Aktuelle Projekte aus Ihrer Region
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow"
            >
              {(p.after_image || p.before_image) && (
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.after_image || p.before_image}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-5">
                {p.category && (
                  <span className="inline-block text-xs font-medium text-green-700 bg-green-100 px-2 py-1 rounded-full mb-2">
                    {p.category}
                  </span>
                )}
                <h3 className="font-semibold text-lg text-gray-900 mb-1">
                  {p.title}
                </h3>
                {p.location && (
                  <p className="text-sm text-gray-500 mb-2">
                    📍 {p.location}
                  </p>
                )}
                {p.description && (
                  <p className="text-sm text-gray-700 line-clamp-3">
                    {p.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

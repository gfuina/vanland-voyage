"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Realisation {
  _id: string;
  numero: string;
  titre: string;
  type: "amenagement_complet" | "renovation";
  description: string;
  coverImage: string;
}

export function RealisationsSection() {
  const [realisations, setRealisations] = useState<Realisation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadRealisations();
  }, []);

  const loadRealisations = async () => {
    try {
      const res = await fetch("/api/realisations?published=true");
      const data = await res.json();
      // Prendre les 3 dernières réalisations
      setRealisations(data.slice(0, 3));
    } catch (error) {
      console.error("Erreur:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return null;
  }

  if (realisations.length === 0) {
    return null;
  }

  return (
    <section className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-5 py-2.5 bg-accent text-navy font-bold text-sm rounded-2xl mb-4 shadow-md -rotate-1 hover:rotate-0 transition-transform duration-300"
          >
            Nos dernières réalisations
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-navy mb-6"
          >
            Des projets{" "}
            <span className="text-secondary">sur mesure</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Découvrez quelques-unes de nos réalisations : aménagements complets
            et rénovations de fourgons
          </motion.p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {realisations.map((realisation, index) => (
            <motion.div
              key={realisation._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={`/realisations/${realisation._id}`}
                className="group block bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-secondary/50"
              >
                <div className="relative h-64">
                  <Image
                    src={realisation.coverImage}
                    alt={realisation.titre}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-navy/90 backdrop-blur-sm text-accent font-bold rounded-2xl">
                      {realisation.numero}
                    </span>
                  </div>
                  {realisation.type === "renovation" && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1.5 bg-secondary/90 backdrop-blur-sm text-white text-xs font-bold rounded-xl">
                        Rénovation
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-secondary transition-colors">
                    {realisation.titre}
                  </h3>
                  <p className="text-gray-600 line-clamp-3 mb-4">
                    {realisation.description}
                  </p>
                  <div className="flex items-center gap-2 text-secondary font-semibold">
                    <span>Voir plus</span>
                    <svg
                      className="w-5 h-5 group-hover:translate-x-2 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/realisations"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-secondary to-blue-500 text-white font-bold rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <span>Voir toutes nos réalisations</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}


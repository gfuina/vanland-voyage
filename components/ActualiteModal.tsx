"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Actualite {
  _id: string;
  titre: string;
  description: string;
  image?: string;
  cta?: {
    texte: string;
    lien: string;
  };
  dateDebut: string;
  dateFin: string;
  active: boolean;
}

export default function ActualiteModal() {
  const pathname = usePathname();
  const [actualite, setActualite] = useState<Actualite | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  // Ne pas afficher sur les pages d'administration ou de login
  const isAdminPage = pathname?.startsWith("/administration") || pathname?.startsWith("/admin-login");

  useEffect(() => {
    if (!isAdminPage) {
      loadActualite();
    } else {
      setLoading(false);
    }
  }, [isAdminPage]);

  const loadActualite = async () => {
    try {
      const res = await fetch("/api/actualites?active=true");
      const data = await res.json();

      if (data.actualites && data.actualites.length > 0) {
        const activeActualite = data.actualites[0];
        
        // Vérifier si l'utilisateur a déjà fermé cette actualité
        const dismissedId = localStorage.getItem("actualite-dismissed");
        if (dismissedId !== activeActualite._id) {
          setActualite(activeActualite);
          // Délai avant d'afficher (pour laisser le temps à la page de charger)
          setTimeout(() => setIsVisible(true), 1000);
        }
      }
    } catch (error) {
      console.error("Erreur chargement actualité:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    if (actualite) {
      // Sauvegarder que l'utilisateur a fermé cette actualité
      localStorage.setItem("actualite-dismissed", actualite._id);
    }
  };

  if (loading || !actualite || isAdminPage) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton fermer */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full transition-colors shadow-lg"
              aria-label="Fermer"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Image */}
            {actualite.image && (
              <div className="relative h-64 w-full">
                <Image
                  src={actualite.image}
                  alt={actualite.titre}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            )}

            {/* Contenu */}
            <div className="p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-navy mb-4">
                  {actualite.titre}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {actualite.description}
                </p>

                {/* CTA */}
                {actualite.cta && actualite.cta.texte && actualite.cta.lien && (
                  <div className="flex gap-4">
                    {actualite.cta.lien.startsWith("http") ? (
                      <a
                        href={actualite.cta.lien}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-secondary to-blue-500 text-white font-bold rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300"
                        onClick={() => localStorage.setItem("actualite-dismissed", actualite._id)}
                      >
                        <span>{actualite.cta.texte}</span>
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
                      </a>
                    ) : (
                      <Link
                        href={actualite.cta.lien}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-secondary to-blue-500 text-white font-bold rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300"
                        onClick={() => localStorage.setItem("actualite-dismissed", actualite._id)}
                      >
                        <span>{actualite.cta.texte}</span>
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
                    )}
                    <button
                      onClick={handleClose}
                      className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-2xl hover:bg-gray-200 transition-colors"
                    >
                      Plus tard
                    </button>
                  </div>
                )}

                {/* Si pas de CTA, juste un bouton fermer */}
                {(!actualite.cta || !actualite.cta.texte) && (
                  <button
                    onClick={handleClose}
                    className="px-6 py-3 bg-accent text-navy font-bold rounded-2xl hover:bg-accent/90 transition-colors"
                  >
                    J'ai compris
                  </button>
                )}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


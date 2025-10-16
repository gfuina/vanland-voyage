"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import LottieIcon from "@/components/LottieIcon";

// Import des animations Lottie
import renovationAnimation from "@/public/lotties/renovation.json";
import mesureAnimation from "@/public/lotties/mesure.json";
import accessoiresAnimation from "@/public/lotties/accessoires.json";
import reviewsAnimation from "@/public/lotties/reviews.json";

interface Realisation {
  _id: string;
  numero: string;
  titre: string;
  type: "amenagement_complet" | "renovation" | "pose_accessoires";
  description: string;
  coverImage: string;
  vehicule?: {
    marque?: string;
    modele?: string;
    annee?: number;
    dimensions?: string;
  };
  nouveautes?: string[];
  cuisine?: string;
  douche?: string;
  salon?: string;
  lit?: string;
  autonomie?: string;
  technique?: string;
  partenaires?: string[];
  photos?: {
    general?: string[];
    cuisine?: string[];
    douche?: string[];
    salon?: string[];
    lit?: string[];
    technique?: string[];
    exterieur?: string[];
  };
  photosRenovation?: {
    avant?: string[];
    apres?: string[];
  };
}

export default function RealisationsPage() {
  const [amenagements, setAmenagements] = useState<Realisation[]>([]);
  const [renovations, setRenovations] = useState<Realisation[]>([]);
  const [accessoires, setAccessoires] = useState<Realisation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadRealisations();
  }, []);

  const loadRealisations = async () => {
    try {
      const res = await fetch("/api/realisations?published=true");
      const data = await res.json();

      setAmenagements(
        data.filter((r: Realisation) => r.type === "amenagement_complet")
      );
      setRenovations(data.filter((r: Realisation) => r.type === "renovation"));
      setAccessoires(data.filter((r: Realisation) => r.type === "pose_accessoires"));
    } catch (error) {
      console.error("Erreur:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-navy to-primary text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center mb-6"
              >
                <LottieIcon
                  animationData={reviewsAnimation}
                  size={120}
                  loop={true}
                  autoplay={true}
                  colorReplacements={{ "#222359": "#ffffff" }}
                />
              </motion.div>
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-block px-5 py-2.5 bg-accent text-navy font-bold text-sm rounded-2xl mb-6 shadow-md rotate-1 hover:rotate-0 transition-transform duration-300"
              >
                Portfolio
              </motion.span>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Nos Réalisations
              </h1>
              <p className="text-lg text-white/90">
                Découvrez nos aménagements complets et nos rénovations de
                fourgons aménagés
              </p>
            </motion.div>
          </div>
        </section>

        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-secondary border-r-transparent" />
          </div>
        ) : (
          <>
            {/* Aménagements complets */}
            {amenagements.length > 0 && (
              <section className="py-20 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex-shrink-0">
                        <LottieIcon
                          animationData={mesureAnimation}
                          size={64}
                          loop={true}
                          autoplay={true}
                        />
                      </div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-navy">
                        Nos aménagements{" "}
                        <span className="text-secondary">complets</span>
                      </h2>
                    </div>
                    <p className="text-gray-600 mb-12">
                      Fourgons neufs entièrement aménagés par nos soins
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {amenagements.map((realisation, index) => (
                        <RealisationCard
                          key={realisation._id}
                          realisation={realisation}
                          index={index}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </section>
            )}

            {/* Rénovations */}
            {renovations.length > 0 && (
              <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 lg:px-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex-shrink-0">
                        <LottieIcon
                          animationData={renovationAnimation}
                          size={64}
                          loop={true}
                          autoplay={true}
                        />
                      </div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-navy">
                        Nos rénovations{" "}
                        <span className="text-secondary">et améliorations</span>
                      </h2>
                    </div>
                    <p className="text-gray-600 mb-12">
                      Rénovations, réparations et améliorations de fourgons
                      aménagés
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {renovations.map((realisation, index) => (
                        <RealisationCard
                          key={realisation._id}
                          realisation={realisation}
                          index={index}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </section>
            )}

            {/* Pose d'accessoires */}
            {accessoires.length > 0 && (
              <section className="py-20 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex-shrink-0">
                        <LottieIcon
                          animationData={accessoiresAnimation}
                          size={64}
                          loop={true}
                          autoplay={true}
                        />
                      </div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-navy">
                        Pose d'<span className="text-secondary">accessoires</span>
                      </h2>
                    </div>
                    <p className="text-gray-600 mb-12">
                      Installation d'équipements et d'accessoires sur mesure
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {accessoires.map((realisation, index) => (
                        <RealisationCard
                          key={realisation._id}
                          realisation={realisation}
                          index={index}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </section>
            )}

            {amenagements.length === 0 && renovations.length === 0 && accessoires.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-500">
                  Aucune réalisation disponible pour le moment
                </p>
              </div>
            )}
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

// Card de réalisation
function RealisationCard({
  realisation,
  index,
}: {
  realisation: Realisation;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group h-full"
    >
      <Link
        href={`/realisations/${realisation._id}`}
        className="flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-secondary/50"
      >
        <div className="relative h-64 flex-shrink-0">
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
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-secondary transition-colors">
            {realisation.titre}
          </h3>
          <p className="text-gray-600 line-clamp-3 mb-4 flex-1">
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
  );
}


"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import LottieIcon from "@/components/LottieIcon";

// Import des animations Lottie
import renovationAnimation from "@/public/lotties/renovation.json";
import mesureAnimation from "@/public/lotties/mesure.json";
import accessoiresAnimation from "@/public/lotties/accessoires.json";

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

export default function RealisationDetailPage() {
  const params = useParams();
  const [realisation, setRealisation] = useState<Realisation | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  // Fonction pour obtenir l'animation Lottie selon le type
  const getLottieAnimation = (type: Realisation["type"]) => {
    switch (type) {
      case "renovation":
        return renovationAnimation;
      case "amenagement_complet":
        return mesureAnimation;
      case "pose_accessoires":
        return accessoiresAnimation;
      default:
        return mesureAnimation;
    }
  };

  useEffect(() => {
    loadRealisation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  const loadRealisation = async () => {
    try {
      const res = await fetch(`/api/realisations/${params.id}`);
      if (res.ok) {
        const data = await res.json();
        setRealisation(data);
      }
    } catch (error) {
      console.error("Erreur:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-solid border-secondary border-r-transparent" />
        </main>
        <Footer />
      </>
    );
  }

  if (!realisation) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-navy mb-4">
              Réalisation non trouvée
            </h1>
            <Link
              href="/realisations"
              className="text-secondary hover:underline"
            >
              Retour aux réalisations
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const allPhotos = [
    realisation.coverImage,
    ...(realisation.photos?.general || []),
    ...(realisation.photos?.cuisine || []),
    ...(realisation.photos?.douche || []),
    ...(realisation.photos?.salon || []),
    ...(realisation.photos?.lit || []),
    ...(realisation.photos?.technique || []),
    ...(realisation.photos?.exterieur || []),
    ...(realisation.photosRenovation?.avant || []),
    ...(realisation.photosRenovation?.apres || []),
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px]">
          <Image
            src={realisation.coverImage}
            alt={realisation.titre}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/40 to-transparent" />
          
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 lg:px-8 pb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Link
                  href="/realisations"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
                >
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
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Retour aux réalisations
                </Link>
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-block px-4 py-2 bg-accent text-navy font-bold rounded-2xl">
                    {realisation.numero}
                  </span>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2">
                    <LottieIcon
                      animationData={getLottieAnimation(realisation.type)}
                      size={40}
                      loop={true}
                      autoplay={true}
                    />
                  </div>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                  {realisation.titre}
                </h1>
                {realisation.type === "renovation" && (
                  <span className="inline-block px-4 py-2 bg-secondary text-white font-semibold rounded-2xl">
                    Rénovation
                  </span>
                )}
                {realisation.type === "pose_accessoires" && (
                  <span className="inline-block px-4 py-2 bg-accent text-navy font-semibold rounded-2xl">
                    Pose d'accessoires
                  </span>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-lg text-gray-700 leading-relaxed">
                  {realisation.description}
                </p>
              </motion.div>

              {/* Nouveautés */}
              {realisation.nouveautes && realisation.nouveautes.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-accent/10 rounded-3xl p-8"
                >
                  <h2 className="text-2xl font-bold text-navy mb-6">
                    Les grandes nouveautés de cet aménagement :
                  </h2>
                  <ul className="space-y-3">
                    {realisation.nouveautes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-secondary text-2xl">•</span>
                        <span className="text-gray-700 text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Sections avec icônes */}
              <div className="space-y-8">
                {realisation.cuisine && (
                  <SectionBlock
                    icon="🍳"
                    title="Cuisine"
                    content={realisation.cuisine}
                  />
                )}

                {realisation.douche && (
                  <SectionBlock
                    icon="🚿"
                    title="Douche"
                    content={realisation.douche}
                  />
                )}

                {realisation.salon && (
                  <SectionBlock
                    icon="🛋️"
                    title="Salon"
                    content={realisation.salon}
                  />
                )}

                {realisation.lit && (
                  <SectionBlock
                    icon="🛏️"
                    title="Couchage"
                    content={realisation.lit}
                  />
                )}

                {realisation.autonomie && (
                  <SectionBlock
                    icon="⚡"
                    title="Autonomie"
                    content={realisation.autonomie}
                  />
                )}

                {realisation.technique && (
                  <SectionBlock
                    icon="🔧"
                    title="Détails techniques"
                    content={realisation.technique}
                  />
                )}
              </div>

              {/* Galerie photos - Pour rénovations avec avant/après */}
              {realisation.type === "renovation" &&
                (realisation.photosRenovation?.avant?.length ||
                  realisation.photosRenovation?.apres?.length) && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="space-y-8"
                  >
                    <h2 className="text-2xl font-bold text-navy">
                      Photos Avant / Après
                    </h2>

                    {/* Photos AVANT */}
                    {realisation.photosRenovation?.avant &&
                      realisation.photosRenovation.avant.length > 0 && (
                        <div>
                          <h3 className="text-xl font-semibold text-navy mb-4 flex items-center gap-2">
                            <span className="px-3 py-1 bg-gray-500 text-white rounded-lg text-sm">
                              AVANT
                            </span>
                            Avant rénovation
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {realisation.photosRenovation.avant.map(
                              (photo, i) => {
                                const photoIndex = allPhotos.indexOf(photo);
                                return (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: i * 0.05 }}
                                    className="relative aspect-video rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
                                    onClick={() =>
                                      setSelectedPhotoIndex(photoIndex)
                                    }
                                  >
                                    <Image
                                      src={photo}
                                      alt={`Avant ${i + 1}`}
                                      fill
                                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-3 left-3 px-3 py-1 bg-gray-500/90 text-white text-xs font-semibold rounded-lg">
                                      AVANT
                                    </div>
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                      <svg
                                        className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                        />
                                      </svg>
                                    </div>
                                  </motion.div>
                                );
                              }
                            )}
                          </div>
                        </div>
                      )}

                    {/* Photos APRÈS */}
                    {realisation.photosRenovation?.apres &&
                      realisation.photosRenovation.apres.length > 0 && (
                        <div>
                          <h3 className="text-xl font-semibold text-navy mb-4 flex items-center gap-2">
                            <span className="px-3 py-1 bg-green-500 text-white rounded-lg text-sm">
                              APRÈS
                            </span>
                            Après rénovation
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {realisation.photosRenovation.apres.map((photo, i) => {
                              const photoIndex = allPhotos.indexOf(photo);
                              return (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.4, delay: i * 0.05 }}
                                  className="relative aspect-video rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
                                  onClick={() =>
                                    setSelectedPhotoIndex(photoIndex)
                                  }
                                >
                                  <Image
                                    src={photo}
                                    alt={`Après ${i + 1}`}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                  />
                                  <div className="absolute top-3 left-3 px-3 py-1 bg-green-500/90 text-white text-xs font-semibold rounded-lg">
                                    APRÈS
                                  </div>
                                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                    <svg
                                      className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                      />
                                    </svg>
                                  </div>
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                  </motion.div>
                )}

              {/* Galerie photos standard - Pour aménagements et accessoires */}
              {realisation.type !== "renovation" && allPhotos.length > 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-navy mb-6">Galerie</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allPhotos.slice(1).map((photo, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        className="relative aspect-video rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
                        onClick={() => setSelectedPhotoIndex(i + 1)}
                      >
                        <Image
                          src={photo}
                          alt={`Photo ${i + 1}`}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <svg
                            className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                            />
                          </svg>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Partenaires */}
              {realisation.partenaires && realisation.partenaires.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="border-t border-gray-200 pt-8"
                >
                  <h3 className="text-xl font-bold text-navy mb-4">
                    Partenaires sur ce projet :
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {realisation.partenaires.map((p, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-2xl"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-center pt-8"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-secondary to-blue-500 text-white font-bold rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <span>Vous avez un projet similaire ?</span>
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
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedPhotoIndex !== null && (
            <Lightbox
              photos={allPhotos}
              currentIndex={selectedPhotoIndex}
              onClose={() => setSelectedPhotoIndex(null)}
              onNavigate={setSelectedPhotoIndex}
            />
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

// Lightbox Component
function Lightbox({
  photos,
  currentIndex,
  onClose,
  onNavigate,
}: {
  photos: string[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const handlePrevious = () => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < photos.length - 1) {
      onNavigate(currentIndex + 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && currentIndex > 0) {
        onNavigate(currentIndex - 1);
      }
      if (e.key === "ArrowRight" && currentIndex < photos.length - 1) {
        onNavigate(currentIndex + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, onClose, onNavigate, photos.length]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-2xl transition-colors z-10"
      >
        <svg
          className="w-6 h-6 text-white"
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

      <div className="absolute top-4 left-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-2xl text-white font-semibold">
        {currentIndex + 1} / {photos.length}
      </div>

      {/* Navigation */}
      {currentIndex > 0 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrevious();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-2xl transition-colors"
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {currentIndex < photos.length - 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-2xl transition-colors"
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}

      {/* Image */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="relative w-full h-full max-w-7xl max-h-[90vh] mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={photos[currentIndex]}
          alt={`Photo ${currentIndex + 1}`}
          fill
          className="object-contain"
          priority
        />
      </motion.div>
    </motion.div>
  );
}

// Composant pour les sections
function SectionBlock({
  icon,
  title,
  content,
}: {
  icon: string;
  title: string;
  content: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
    >
      <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-3">
        <span className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-xl flex items-center justify-center text-2xl">
          {icon}
        </span>
        {title}
      </h3>
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
        {content}
      </p>
    </motion.div>
  );
}


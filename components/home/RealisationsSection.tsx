"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useIsMobile } from "@/hooks/useIsMobile";
import { getAnimation, getStaggerAnimation } from "@/lib/animations";
import LottieIcon from "@/components/LottieIcon";

// Import de l'animation Lottie
import mesureAnimation from "@/public/lotties/mesure.json";

interface Realisation {
  _id: string;
  numero: string;
  titre: string;
  type: "amenagement_complet" | "renovation" | "pose_accessoires";
  description: string;
  coverImage: string;
}

export function RealisationsSection() {
  const [realisations, setRealisations] = useState<Realisation[]>([]);
  const [loading, setLoading] = useState(true);
  const isMobile = useIsMobile();
  const animation = getAnimation(isMobile);

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
    <section className="py-24 lg:py-40 bg-gray-50 relative overflow-hidden">
      {/* Diagonal separator top */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-br from-white via-white to-transparent" 
           style={{ clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 100%)" }} />
      
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          {...animation}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="flex justify-center mb-6">
            <LottieIcon
              animationData={mesureAnimation}
              size={100}
              loop={true}
              autoplay={true}
            />
          </div>
          <span className="inline-block px-5 py-2.5 bg-accent text-navy font-bold text-sm rounded-2xl mb-4 shadow-md -rotate-1 hover:rotate-0 transition-transform duration-300">
            Nos dernières réalisations
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
            Des projets{" "}
            <span className="text-secondary">sur mesure</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez quelques-unes de nos réalisations : aménagements complets
            et rénovations de fourgons
          </p>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden mb-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={16}
            slidesPerView={1.1}
            centeredSlides={false}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            className="!pb-12"
          >
            {realisations.map((realisation, index) => (
              <SwiperSlide key={realisation._id}>
                <Link
                  href={`/realisations/${realisation._id}`}
                  className={`group flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-lg active:shadow-2xl transition-all duration-300 border-2 border-gray-100 ${
                    index % 2 === 0 ? "rotate-1" : "-rotate-1"
                  }`}
                >
                  <div className="relative h-64 flex-shrink-0">
                    <Image
                      src={realisation.coverImage}
                      alt={realisation.titre}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-navy/90 backdrop-blur-sm text-accent font-bold rounded-2xl">
                        {realisation.numero}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-navy mb-3">
                      {realisation.titre}
                    </h3>
                    <p className="text-gray-600 line-clamp-3 mb-4 flex-1">
                      {realisation.description}
                    </p>
                    <div className="flex items-center gap-2 text-secondary font-semibold">
                      <span>Voir plus</span>
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
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {realisations.map((realisation, index) => (
            <motion.div
              key={realisation._id}
              {...getStaggerAnimation(isMobile, index)}
              className="flex"
            >
              <Link
                href={`/realisations/${realisation._id}`}
                className="group flex flex-col w-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-secondary/50"
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
          ))}
        </div>

        {/* CTA */}
        <motion.div
          {...animation}
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


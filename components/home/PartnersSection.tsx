"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useIsMobile } from "@/hooks/useIsMobile";
import { getAnimation, getStaggerAnimation } from "@/lib/animations";

interface Partner {
  _id: string;
  name: string;
  logo: string;
  description: string;
  subtitle: string;
}

export function PartnersSection() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const isMobile = useIsMobile();
  const animation = getAnimation(isMobile);

  useEffect(() => {
    fetchPartners();
  }, []);

  const fetchPartners = async () => {
    try {
      const response = await fetch("/api/partners");
      const data = await response.json();
      if (data.success) {
        setPartners(data.partners);
      }
    } catch (error) {
      console.error("Erreur lors du chargement des partenaires:", error);
    } finally {
      setLoading(false);
    }
  };

  const rotations = ["-rotate-1", "rotate-1", "-rotate-2", "rotate-2", "rotate-1", "-rotate-1"];

  if (loading) {
    return null;
  }

  if (partners.length === 0) {
    return null;
  }

  return (
    <section className="py-20 lg:py-32 bg-navy relative" style={{ marginTop: '-1px', marginBottom: '-1px' }}>
      {/* Wave separator top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden" style={{ lineHeight: 0, marginTop: '-1px' }}>
        <svg
          className="w-full h-16 lg:h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ display: 'block', verticalAlign: 'bottom' }}
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-gray-50"
          />
        </svg>
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-1/2 h-1/2 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-1/3 h-1/3 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div {...animation} className="text-center mb-16">
          <span className="inline-block px-5 py-2.5 bg-accent text-navy font-bold text-sm rounded-2xl mb-4 shadow-md rotate-1 hover:rotate-0 transition-transform duration-300">
            Nos Partenaires
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Nos partenaires pour{" "}
            <span className="text-accent">vos projets !</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Des marques de confiance pour équiper votre van avec du matériel de qualité
          </p>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden mb-16">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={16}
            slidesPerView={1.1}
            centeredSlides={false}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            className="!pb-12"
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={partner._id}>
                <div className={`bg-white rounded-3xl p-6 shadow-lg border-2 border-gray-100 ${
                  index % 3 === 0 ? "rotate-1" : index % 3 === 1 ? "-rotate-1" : "rotate-2"
                }`}>
                  {/* Logo Container */}
                  <div className="relative h-24 mb-6 flex items-center justify-center bg-gray-50 rounded-2xl p-4">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain p-2"
                      sizes="100vw"
                    />
                  </div>

                  {/* Partner Info */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-navy mb-2">
                      {partner.name}
                    </h3>
                    <p className="text-secondary font-semibold mb-2">
                      {partner.description}
                    </p>
                    <p className="text-sm text-gray-600">{partner.subtitle}</p>
                  </div>

                  {/* Decorative element */}
                  <div className="mt-6 h-1 w-16 bg-accent rounded-full mx-auto" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner._id}
              {...getStaggerAnimation(isMobile, index)}
              className={`group bg-white rounded-3xl p-6 lg:p-8 shadow-lg border-2 border-gray-100 hover:border-secondary/30 hover:shadow-xl hover:rotate-0 transition-all duration-300 ${rotations[index % rotations.length]}`}
            >
              {/* Logo Container */}
              <div className="relative h-24 mb-6 flex items-center justify-center bg-gray-50 rounded-2xl p-4 group-hover:bg-secondary/5 transition-colors duration-300">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Partner Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-navy mb-2">
                  {partner.name}
                </h3>
                <p className="text-secondary font-semibold mb-2">
                  {partner.description}
                </p>
                <p className="text-sm text-gray-600">{partner.subtitle}</p>
              </div>

              {/* Decorative element */}
              <div className="mt-6 h-1 w-16 bg-accent rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          {...animation}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">
            Intéressé par nos équipements partenaires ?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-navy font-bold text-lg rounded-2xl hover:bg-accent/90 hover:scale-105 hover:rotate-0 -rotate-1 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contactez-nous
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
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Wave separator bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180" style={{ lineHeight: 0, marginBottom: '-1px' }}>
        <svg
          className="w-full h-16 lg:h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ display: 'block', verticalAlign: 'bottom' }}
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          />
        </svg>
      </div>
    </section>
  );
}


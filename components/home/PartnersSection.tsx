"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function PartnersSection() {
  const partners = [
    {
      name: "VICTRON ENERGY",
      logo: "/images/partners/victron-energy.webp",
      description: "Matériel électrique",
      subtitle: "Revendeur et installateur qualifié",
      rotate: "-rotate-1",
    },
    {
      name: "THITRONIK",
      logo: "/images/partners/thitronik.png",
      description: "Alarme",
      subtitle: "Installateur agréé pour la pose du système de protection complet",
      rotate: "rotate-1",
    },
    {
      name: "AUTOTERM",
      logo: "/images/partners/autoterm.png",
      description: "Chauffage / Chauffe-eau",
      subtitle: "Installateur agréé, matériel garantie 3 ans",
      rotate: "-rotate-2",
    },
    {
      name: "FRONT RUNNER",
      logo: "/images/partners/front-runner.png",
      description: "Équipements OFF-ROAD",
      subtitle: "Par DOMETIC",
      rotate: "rotate-2",
    },
    {
      name: "SO LIEGE",
      logo: "/images/partners/soliege.svg",
      description: "Isolation naturelle en Liège",
      subtitle: "Fabriqué en France",
      rotate: "rotate-1",
    },
    {
      name: "SKEP LIFE",
      logo: "/images/partners/images.png",
      description: "Porte-matériel / Porte-vélo",
      subtitle: "Modulable et français",
      rotate: "-rotate-1",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-5 py-2.5 bg-secondary text-white font-bold text-sm rounded-2xl mb-4 shadow-md rotate-1 hover:rotate-0 transition-transform duration-300"
          >
            Nos Partenaires
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-navy mb-4"
          >
            Nos partenaires pour{" "}
            <span className="text-secondary">vos projets !</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg max-w-3xl mx-auto"
          >
            Des marques de confiance pour équiper votre van avec du matériel de qualité
          </motion.p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group bg-white rounded-3xl p-6 lg:p-8 shadow-lg border-2 border-gray-100 hover:border-secondary/30 hover:shadow-xl hover:rotate-0 transition-all duration-300 ${partner.rotate}`}
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
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
    </section>
  );
}


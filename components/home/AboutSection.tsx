"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutSection() {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Section - First on mobile, second on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:order-2"
          >
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block px-5 py-2.5 bg-accent text-navy font-bold text-sm rounded-2xl mb-4 shadow-md -rotate-1 hover:rotate-0 transition-transform duration-300"
              >
                Qui sommes-nous ?
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl lg:text-5xl font-bold text-navy mb-6"
              >
                Une entreprise artisanale{" "}
                <span className="text-secondary">à votre service</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-700 leading-relaxed"
            >
              Notre mission est de rendre votre projet accessible.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-600 leading-relaxed"
            >
              Proximité, transparence et qualité seront les maitres mots de
              notre collaboration.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-600 leading-relaxed"
            >
              Nous vous accompagnons durant l'intégralité de votre projet :
              aménagement complet, aménagement partiel, pose d'accessoires,
              réparations ou amélioration, conseils et ventes de matériels pour
              votre van, fourgon et/ou camping-car.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-r from-navy/5 to-secondary/5 rounded-3xl p-6 border-l-4 border-secondary shadow-md"
            >
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-secondary flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                </svg>
                <p className="text-gray-700">
                  Nous vous accueillons dans notre atelier qui est situé à{" "}
                  <span className="font-bold text-navy">
                    Chanceaux-sur-Choisille
                  </span>
                  , proche de Tours, en Indre et Loire.
                </p>
              </div>
            </motion.div>

            {/* Key points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              {[
                { icon: "✓", text: "Proximité", rotate: "rotate-1" },
                { icon: "✓", text: "Transparence", rotate: "-rotate-1" },
                { icon: "✓", text: "Qualité", rotate: "-rotate-2" },
                { icon: "✓", text: "Accompagnement", rotate: "rotate-2" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 sm:gap-3 bg-white rounded-2xl p-3 sm:p-4 shadow-md border border-gray-100 hover:border-secondary/50 hover:shadow-lg hover:rotate-0 transition-all duration-300 ${item.rotate}`}
                >
                  <span className="text-xl sm:text-2xl text-secondary flex-shrink-0">{item.icon}</span>
                  <span className="font-semibold text-navy text-sm sm:text-base">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Section - Second on mobile, first on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:order-1"
          >
            <div 
              className="relative aspect-[3/4] shadow-2xl overflow-hidden"
              style={{
                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%"
              }}
            >
              <Image
                src="/images/nous.JPG"
                alt="L'équipe Vanland Voyage"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Accent border overlay */}
              <div className="absolute inset-0 border-8 border-accent/30 pointer-events-none rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%]" />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 lg:right-40 bg-gradient-to-br from-secondary to-blue-500 text-white p-8 rounded-3xl shadow-xl rotate-3 hover:rotate-0 transition-transform duration-300"
            >
              <div className="text-center">
                <div className="text-4xl font-bold">100%</div>
                <div className="text-sm font-medium">Sur mesure</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


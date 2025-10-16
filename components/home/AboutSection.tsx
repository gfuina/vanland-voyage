"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useIsMobile } from "@/hooks/useIsMobile";
import { getAnimation } from "@/lib/animations";
import LottieIcon from "@/components/LottieIcon";

// Import des animations Lottie locales
import usAnimation from "@/public/lotties/us.json";
import proximiteAnimation from "@/public/lotties/proximite.json";
import transparenceAnimation from "@/public/lotties/transparence.json";
import qualityAnimation from "@/public/lotties/quality.json";
import accompagnementAnimation from "@/public/lotties/accompagnement.json";

export function AboutSection() {
  const isMobile = useIsMobile();
  const animation = getAnimation(isMobile);

  return (
    <section className="py-24 lg:py-40 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/5 rounded-full blur-3xl" />
      
      {/* Decorative line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Section - First on mobile, second on desktop */}
          <motion.div
            {...animation}
            className="space-y-6 lg:order-2"
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0">
                  <LottieIcon
                    animationData={usAnimation}
                    size={80}
                    loop={true}
                    autoplay={true}
                  />
                </div>
                <span className="inline-block px-5 py-2.5 bg-accent text-navy font-bold text-sm rounded-2xl shadow-md -rotate-1 hover:rotate-0 transition-transform duration-300">
                  Qui sommes-nous ?
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
                Une entreprise artisanale{" "}
                <span className="text-secondary">à votre service</span>
              </h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Notre mission est de rendre votre projet accessible.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Proximité, transparence et qualité seront les maitres mots de
              notre collaboration.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Nous vous accompagnons durant l'intégralité de votre projet :
              aménagement complet, aménagement partiel, pose d'accessoires,
              réparations ou amélioration, conseils et ventes de matériels pour
              votre van, fourgon et/ou camping-car.
            </p>

            <div className="bg-gradient-to-r from-navy/5 to-secondary/5 rounded-3xl py-4 px-4 sm:py-5 sm:px-5 border-l-4 border-secondary shadow-md">
              <div className="flex items-start gap-3">
                <p className="text-gray-700 text-left">
                  Nous vous accueillons dans notre atelier qui est situé à{" "}
                  <span className="font-bold text-navy">
                    Chanceaux-sur-Choisille
                  </span>
                  , proche de Tours, en Indre et Loire.
                </p>
              </div>
            </div>

            {/* Key points */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4">
              {[
                { 
                  animation: proximiteAnimation, 
                  text: "Proximité", 
                  rotate: "rotate-1" 
                },
                { 
                  animation: transparenceAnimation, 
                  text: "Transparence", 
                  rotate: "-rotate-1" 
                },
                { 
                  animation: qualityAnimation, 
                  text: "Qualité", 
                  rotate: "-rotate-2" 
                },
                { 
                  animation: accompagnementAnimation, 
                  text: "Accompagnement", 
                  rotate: "rotate-2" 
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`group flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-white rounded-2xl p-3 sm:p-4 shadow-md border border-gray-100 hover:border-secondary/50 hover:shadow-lg hover:rotate-0 transition-all duration-300 ${item.rotate}`}
                >
                  <div className="flex-shrink-0">
                    <LottieIcon
                      animationData={item.animation}
                      size={isMobile ? 48 : 64}
                      loop={true}
                      autoplay={true}
                      playOnHover={false}
                    />
                  </div>
                  <span className="font-semibold text-navy text-sm sm:text-base text-center sm:text-left">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image Section - Second on mobile, first on desktop */}
          <motion.div
            {...animation}
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
            <div className="absolute -bottom-6 -right-6 lg:right-40 bg-gradient-to-br from-secondary to-blue-500 text-white p-8 rounded-3xl shadow-xl rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="text-center">
                <div className="text-4xl font-bold">100%</div>
                <div className="text-sm font-medium">Sur mesure</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import LottieIcon from "@/components/LottieIcon";
import TarifsModal from "@/components/TarifsModal";

// Import des animations Lottie
import mesureAnimation from "@/public/lotties/mesure.json";
import accessoiresAnimation from "@/public/lotties/accessoires.json";
import renovationAnimation from "@/public/lotties/renovation.json";
import buildVanAnimation from "@/public/lotties/build-van.json";
import conseilAnimation from "@/public/lotties/conseil.json";

// Données des tarifs
const tarifsPartiel = [
  { nom: "Isolation au liège projeté", prix: "à partir de 900€" },
  { nom: "Chauffage Autoterm AIR 2D", prix: "à partir de 1 600€" },
  { nom: "Alarme Thitronik", prix: "à partir de 700€" },
  { nom: "Ouvrants (baie ou lanterneau)", prix: "à partir de 400€" },
  { nom: "Toit relevable SKYUP sur fourgon", prix: "Sur devis" },
  { nom: "Siège ou banquettes SCORA", prix: "Sur devis" },
  { nom: "Installation électrique", prix: "Sur devis" },
  { nom: "Plomberie (eau ou gaz)", prix: "Sur devis" },
];

const tarifsReparation = [
  { nom: "Diagnostic panne ou fuite (30 minutes)", prix: "40€" },
  { nom: "Check d'entretien annuel (1 heure)", prix: "80€" },
  { nom: "Rénovation complète", prix: "Sur devis" },
];

export default function PrestationsPage() {
  const [isModalPartielOpen, setIsModalPartielOpen] = useState(false);
  const [isModalReparationOpen, setIsModalReparationOpen] = useState(false);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-navy via-primary to-navy relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex justify-center mb-6"
              >
                <LottieIcon
                  animationData={buildVanAnimation}
                  size={120}
                  loop={true}
                  autoplay={true}
                  colorReplacements={{ "#222359": "#ffffff" }}
                />
              </motion.div>
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block px-5 py-2.5 bg-accent text-navy font-bold text-sm rounded-2xl mb-6 shadow-md -rotate-1 hover:rotate-0 transition-transform duration-300"
              >
                Ce que nous proposons
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              >
                Nos <span className="text-accent">prestations</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto"
              >
                Vous êtes à la recherche d'une entreprise artisanale passionnée, proche de Tours, nous serons heureux d'échanger avec vous sur votre projet.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Prestation 1 - Réparation */}
        <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Content Section */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6 order-1 lg:order-2"
              >
                <div>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="inline-block px-5 py-2.5 bg-secondary text-white font-bold text-sm rounded-2xl mb-4 shadow-md rotate-1 hover:rotate-0 transition-transform duration-300"
                  >
                    Maintenance & amélioration
                  </motion.span>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex items-center gap-4 mb-4"
                  >
                    <div className="flex-shrink-0">
                      <LottieIcon
                        animationData={renovationAnimation}
                        size={56}
                        loop={true}
                        autoplay={true}
                      />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-navy">
                      D'une réparation à la rénovation complète{" "}
                      <span className="text-secondary whitespace-nowrap">de votre véhicule ?</span>
                    </h2>
                  </motion.div>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg text-gray-700 leading-relaxed"
                >
                  Vous avez déjà un véhicule, un van, un fourgon ou un camping-car mais vous avez besoin d'une réparation ou d'une amélioration sur votre véhicule, nous vous proposons un diagnostic et une intervention rapide. Étanchéité, électricité, réseaux d'eau ou de gaz, meubles… Nous réalisons tout type de maintenance hors mécanique.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-gray-600 leading-relaxed"
                >
                  Vous souhaitez totalement transformer votre véhicule, nous pouvons le rénover à votre image et à vos besoins.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <button
                    onClick={() => setIsModalReparationOpen(true)}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-bold text-lg rounded-2xl hover:bg-secondary/90 hover:scale-105 hover:rotate-0 -rotate-1 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Voir les tarifs
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
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </button>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-navy font-bold text-lg rounded-2xl hover:bg-accent/90 hover:scale-105 hover:rotate-0 rotate-1 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Nous contacter
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
                  </Link>
                </motion.div>
              </motion.div>

              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative order-2 lg:order-1"
              >
                <div
                  className="relative aspect-[4/3] shadow-2xl overflow-hidden"
                  style={{
                    borderRadius: "40% 60% 60% 40% / 50% 50% 50% 50%",
                  }}
                >
                  <Image
                    src="/images/prestations/prestation-reparation.jpg"
                    alt="Réparation et amélioration"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Accent border overlay */}
                  <div className="absolute inset-0 border-8 border-secondary/30 pointer-events-none rounded-[40%_60%_60%_40%_/_50%_50%_50%_50%]" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Prestation 2 - Aménagement partiel */}
        <section className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Content Section - First on mobile, second on desktop */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6 order-1 lg:order-1"
              >
                <div>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="inline-block px-5 py-2.5 bg-accent text-navy font-bold text-sm rounded-2xl mb-4 shadow-md -rotate-1 hover:rotate-0 transition-transform duration-300"
                  >
                    Travaux spécifiques
                  </motion.span>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex items-center gap-4 mb-4"
                  >
                    <div className="flex-shrink-0">
                      <LottieIcon
                        animationData={accessoiresAnimation}
                        size={56}
                        loop={true}
                        autoplay={true}
                      />
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy leading-tight">
                      Un aménagement partiel ou{" "}
                      <span className="text-secondary">une pose d'accessoires ?</span>
                    </h2>
                  </motion.div>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg text-gray-700 leading-relaxed"
                >
                  Vous souhaitez réaliser votre aménagement vous-même mais vous avez besoin d'accompagnement (choix des équipements, conseils techniques...), d'un coup de main sur une partie de votre aménagement (isolation, électricité, ouvertures…) ou une pose d'accessoires (alarme, porte-matériel, chauffage…).
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-gray-600 leading-relaxed"
                >
                  Nous intervenons sur les parties techniques de votre projet pour que vos travaux se déroulent sans stress.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <button
                    onClick={() => setIsModalPartielOpen(true)}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-bold text-lg rounded-2xl hover:bg-secondary/90 hover:scale-105 hover:rotate-0 -rotate-1 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Voir les tarifs
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
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </button>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-navy font-bold text-lg rounded-2xl hover:bg-accent/90 hover:scale-105 hover:rotate-0 rotate-1 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Nous contacter
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
                  </Link>
                </motion.div>
              </motion.div>

              {/* Image Section - Second on mobile, first on desktop */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative order-2 lg:order-2"
              >
                <div
                  className="relative aspect-[4/3] shadow-2xl overflow-hidden"
                  style={{
                    borderRadius: "70% 30% 30% 70% / 70% 70% 30% 30%",
                  }}
                >
                  <Image
                    src="/images/prestations/prestation-partielle.jpg"
                    alt="Aménagement partiel"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Accent border overlay */}
                  <div className="absolute inset-0 border-8 border-accent/30 pointer-events-none rounded-[70%_30%_30%_70%_/_70%_70%_30%_30%]" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Prestation 3 - Projet complet */}
        <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative order-2 lg:order-1"
              >
                <div
                  className="relative aspect-[4/3] shadow-2xl overflow-hidden"
                  style={{
                    borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                  }}
                >
                  <Image
                    src="/images/prestations/prestation-complete.jpg"
                    alt="Projet complet sur-mesure"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Accent border overlay */}
                  <div className="absolute inset-0 border-8 border-secondary/30 pointer-events-none rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%]" />
                </div>
              </motion.div>

              {/* Content Section */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6 order-1 lg:order-2"
              >
                <div>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="inline-block px-5 py-2.5 bg-secondary text-white font-bold text-sm rounded-2xl mb-4 shadow-md rotate-1 hover:rotate-0 transition-transform duration-300"
                  >
                    Projet sur-mesure
                  </motion.span>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex items-center gap-4 mb-4"
                  >
                    <div className="flex-shrink-0">
                      <LottieIcon
                        animationData={mesureAnimation}
                        size={56}
                        loop={true}
                        autoplay={true}
                      />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-navy">
                      Un aménagement complet{" "}
                      <span className="text-secondary whitespace-nowrap">sur-mesure ?</span>
                    </h2>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="inline-block"
                  >
                    <div className="px-6 py-3 bg-accent/10 border-2 border-accent rounded-2xl">
                      <p className="text-navy font-bold text-lg">
                        À partir de <span className="text-2xl text-secondary">40 000€</span>
                        <span className="text-sm font-normal text-gray-600 ml-2">(hors véhicule)</span>
                      </p>
                    </div>
                  </motion.div>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg text-gray-700 leading-relaxed"
                >
                  Vous rêvez d'une grande douche ? D'un lit gigantesque ? Ou encore d'une soute pour ranger vos vélos ?
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-gray-600 leading-relaxed"
                >
                  Nous pouvons étudier ensemble tous vos rêves les plus fous et les rendre possible.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-gray-600 leading-relaxed"
                >
                  De la réalisation des plans 3D, du choix des équipements et des matériaux jusqu'à l'homologation VASP de votre véhicule, on s'occupe de tout.
                </motion.p>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="grid grid-cols-2 gap-4 pt-4"
                >
                  {[
                    { icon: "✓", text: "Aménagement personnalisé" },
                    { icon: "✓", text: "Autonomie complète" },
                    { icon: "✓", text: "Homologation VASP" },
                    { icon: "✓", text: "Fourgons H2 et H3" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 sm:gap-3 bg-secondary/5 rounded-2xl p-3 sm:p-4 border border-secondary/20"
                    >
                      <span className="text-xl sm:text-2xl text-secondary flex-shrink-0">
                        {item.icon}
                      </span>
                      <span className="font-semibold text-navy text-sm sm:text-base">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Link
                    href="/projet"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-bold text-lg rounded-2xl hover:bg-secondary/90 hover:scale-105 hover:rotate-0 -rotate-1 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Votre projet complet
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
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Prestation 4 - Conseil */}
        <section className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Content Section */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6 order-1 lg:order-1"
              >
                <div>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="inline-block px-5 py-2.5 bg-accent text-navy font-bold text-sm rounded-2xl mb-4 shadow-md -rotate-1 hover:rotate-0 transition-transform duration-300"
                  >
                    Accompagnement personnalisé
                  </motion.span>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex items-center gap-4 mb-4"
                  >
                    <div className="flex-shrink-0">
                      <LottieIcon
                        animationData={conseilAnimation}
                        size={56}
                        loop={true}
                        autoplay={true}
                      />
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy leading-tight">
                      Conseil sur votre aménagement{" "}
                      <span className="text-secondary">de van ou fourgon ?</span>
                    </h2>
                  </motion.div>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg text-gray-700 leading-relaxed"
                >
                  Vous souhaitez aménager votre van ou fourgon par vous-même mais vous ne savez pas par où commencer et vous n'avez pas de compétences ? On vous propose une "master-class" dédiée ou simplement être conseillé et accompagné sur votre projet.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-gray-600 leading-relaxed"
                >
                  Nous pouvons vous proposer des visioconférences d'1h (tarif 72€/h).
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="grid grid-cols-2 gap-4 pt-4"
                >
                  {[
                    { icon: "✓", text: "Choix des équipements" },
                    { icon: "✓", text: "Plans et agencement" },
                    { icon: "✓", text: "Homologation VASP" },
                    { icon: "✓", text: "Suivi de projet" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 sm:gap-3 bg-accent/5 rounded-2xl p-3 sm:p-4 border border-accent/20"
                    >
                      <span className="text-xl sm:text-2xl text-accent flex-shrink-0">
                        {item.icon}
                      </span>
                      <span className="font-semibold text-navy text-sm sm:text-base">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link
                    href="/formation"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-bold text-lg rounded-2xl hover:bg-secondary/90 hover:scale-105 hover:rotate-0 -rotate-1 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Master-class
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
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-navy font-bold text-lg rounded-2xl hover:bg-accent/90 hover:scale-105 hover:rotate-0 rotate-1 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Demander conseil
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
                  </Link>
                </motion.div>
              </motion.div>

              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative order-2 lg:order-2"
              >
                <div
                  className="relative aspect-[4/3] shadow-2xl overflow-hidden"
                  style={{
                    borderRadius: "60% 40% 40% 60% / 60% 60% 40% 40%",
                  }}
                >
                  <Image
                    src="/images/campervan-11.JPG"
                    alt="Conseil et accompagnement"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Accent border overlay */}
                  <div className="absolute inset-0 border-8 border-accent/30 pointer-events-none rounded-[60%_40%_40%_60%_/_60%_60%_40%_40%]" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Modals */}
      <TarifsModal
        isOpen={isModalReparationOpen}
        onClose={() => setIsModalReparationOpen(false)}
        title="Tarifs Réparation & Rénovation"
        tarifs={tarifsReparation}
      />
      <TarifsModal
        isOpen={isModalPartielOpen}
        onClose={() => setIsModalPartielOpen(false)}
        title="Tarifs Aménagement Partiel"
        tarifs={tarifsPartiel}
      />
    </>
  );
}


"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import LottieIcon from "@/components/LottieIcon";
import { useState, useEffect } from "react";

// Import des animations Lottie
import usAnimation from "@/public/lotties/us.json";
import customAnimation from "@/public/lotties/custom.json";
import qualityAnimation from "@/public/lotties/quality-2.json";
import ecoAnimation from "@/public/lotties/eco.json";

interface TeamMember {
  _id: string;
  name: string;
  role: string;
  description: string;
  photo: string;
  funPhoto: string;
  type: "team" | "external";
  order: number;
  published: boolean;
}

export default function AboutPage() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [externalTeam, setExternalTeam] = useState<TeamMember[]>([]);
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);
  const [loadingTeam, setLoadingTeam] = useState(true);

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = async () => {
    try {
      const response = await fetch("/api/team");
      const data = await response.json();
      if (data.success) {
        const teamMembers = data.team.filter(
          (m: TeamMember) => m.published && m.type === "team"
        );
        const externalMembers = data.team.filter(
          (m: TeamMember) => m.published && m.type === "external"
        );
        setTeam(teamMembers);
        setExternalTeam(externalMembers);
      }
    } catch (error) {
      console.error("Erreur lors du chargement de l'équipe:", error);
    } finally {
      setLoadingTeam(false);
    }
  };
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
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center mb-6"
              >
                <LottieIcon
                  animationData={usAnimation}
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
                className="inline-block px-5 py-2.5 bg-accent text-navy font-bold text-sm rounded-2xl mb-6 shadow-md -rotate-1 hover:rotate-0 transition-transform duration-300"
              >
                Qui sommes-nous ?
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              >
                Entreprise artisanale d'aménagement de fourgon à{" "}
                <span className="text-accent">Tours</span>
              </motion.h1>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        {(loadingTeam || team.length > 0) && (
          <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="inline-block px-5 py-2.5 bg-accent text-navy font-bold text-sm rounded-2xl mb-4 shadow-md -rotate-1 hover:rotate-0 transition-transform duration-300"
                >
                  Notre équipe
                </motion.span>
                <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
                  Les personnes derrière <span className="text-secondary">Vanland Voyage</span>
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {loadingTeam ? (
                  // Skeleton loading
                  Array.from({ length: 3 }).map((_, index) => {
                    const rotations = ["-rotate-2", "rotate-1", "-rotate-1"];
                    const rotation = rotations[index % rotations.length];
                    
                    return (
                      <div
                        key={`skeleton-${index}`}
                        className={`bg-white rounded-3xl p-6 shadow-lg border-2 border-gray-100 ${rotation} animate-pulse`}
                      >
                        {/* Photo skeleton */}
                        <div className="relative aspect-square mb-6 rounded-2xl overflow-hidden bg-gray-200" />

                        {/* Name skeleton */}
                        <div className="h-6 bg-gray-200 rounded-full mb-2 w-3/4 mx-auto" />
                        
                        {/* Role skeleton */}
                        <div className="h-5 bg-gray-200 rounded-full mb-3 w-1/2 mx-auto" />
                        
                        {/* Description skeleton */}
                        <div className="space-y-2">
                          <div className="h-4 bg-gray-200 rounded-full w-full" />
                          <div className="h-4 bg-gray-200 rounded-full w-5/6 mx-auto" />
                        </div>
                      </div>
                    );
                  })
                ) : (
                  // Real team members
                  team.map((member, index) => {
                  const rotations = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "-rotate-1", "rotate-1"];
                  const rotation = rotations[index % rotations.length];
                  
                  return (
                    <motion.div
                      key={member._id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group"
                      onMouseEnter={() => setHoveredMember(member._id)}
                      onMouseLeave={() => setHoveredMember(null)}
                    >
                      <div className={`bg-white rounded-3xl p-6 shadow-lg border-2 border-gray-100 hover:border-secondary/30 hover:shadow-xl hover:rotate-0 hover:-translate-y-2 transition-all duration-300 ${rotation}`}>
                        {/* Photo container with hover effect */}
                        <div className="relative aspect-square mb-6 rounded-2xl overflow-hidden shadow-md">
                          <Image
                            src={member.photo}
                            alt={member.name}
                            fill
                            className={`object-cover transition-opacity duration-300 ${
                              hoveredMember === member._id ? "opacity-0" : "opacity-100"
                            }`}
                          />
                          <Image
                            src={member.funPhoto}
                            alt={`${member.name} - photo fun`}
                            fill
                            className={`object-cover transition-opacity duration-300 ${
                              hoveredMember === member._id ? "opacity-100" : "opacity-0"
                            }`}
                          />
                        </div>

                        <h3 className="text-xl font-bold text-navy mb-2 text-center">
                          {member.name}
                        </h3>
                        <p className="text-secondary font-semibold mb-3 text-center">
                          {member.role}
                        </p>
                        <p className="text-gray-600 text-center text-sm">
                          {member.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                  })
                )}
              </div>

              {/* External team members */}
              {loadingTeam && (
                <div>
                  <div className="h-8 bg-gray-200 rounded-full mb-6 w-80 mx-auto animate-pulse" />
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {Array.from({ length: 4 }).map((_, index) => {
                      const rotations = ["rotate-1", "-rotate-1", "rotate-2", "-rotate-2"];
                      const rotation = rotations[index % rotations.length];
                      
                      return (
                        <div
                          key={`skeleton-external-${index}`}
                          className={`bg-gradient-to-br from-accent/10 to-white rounded-2xl p-4 shadow-md border-2 border-accent/20 ${rotation} animate-pulse`}
                        >
                          {/* Photo skeleton */}
                          <div className="relative aspect-square mb-4 rounded-xl overflow-hidden bg-gray-200" />
                          
                          {/* Name skeleton */}
                          <div className="h-4 bg-gray-200 rounded-full mb-2 w-3/4 mx-auto" />
                          
                          {/* Role skeleton */}
                          <div className="h-3 bg-gray-200 rounded-full mb-2 w-1/2 mx-auto" />
                          
                          {/* Description skeleton */}
                          <div className="h-3 bg-gray-200 rounded-full w-full mx-auto" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              
              {!loadingTeam && externalTeam.length > 0 && (
                <div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold text-navy mb-6 text-center"
                  >
                    Nos partenaires qui nous accompagnent
                  </motion.h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {externalTeam.map((member, index) => {
                      const rotations = ["rotate-1", "-rotate-1", "rotate-2", "-rotate-2"];
                      const rotation = rotations[index % rotations.length];
                      
                      return (
                        <motion.div
                          key={member._id}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="group"
                          onMouseEnter={() => setHoveredMember(member._id)}
                          onMouseLeave={() => setHoveredMember(null)}
                        >
                          <div className={`bg-gradient-to-br from-accent/10 to-white rounded-2xl p-4 shadow-md border-2 border-accent/20 hover:border-accent/50 hover:shadow-lg hover:rotate-0 hover:-translate-y-1 transition-all duration-300 ${rotation}`}>
                            {/* Photo container with hover effect */}
                            <div className="relative aspect-square mb-4 rounded-xl overflow-hidden shadow-sm">
                              <Image
                                src={member.photo}
                                alt={member.name}
                                fill
                                className={`object-cover transition-opacity duration-300 ${
                                  hoveredMember === member._id ? "opacity-0" : "opacity-100"
                                }`}
                              />
                              <Image
                                src={member.funPhoto}
                                alt={`${member.name} - photo fun`}
                                fill
                                className={`object-cover transition-opacity duration-300 ${
                                  hoveredMember === member._id ? "opacity-100" : "opacity-0"
                                }`}
                              />
                            </div>

                            <h4 className="text-base font-bold text-navy mb-1 text-center">
                              {member.name}
                            </h4>
                            <p className="text-secondary font-semibold text-sm mb-2 text-center">
                              {member.role}
                            </p>
                            <p className="text-gray-600 text-center text-xs line-clamp-2">
                              {member.description}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Story Section */}
        <section className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative lg:order-1"
              >
                <div
                  className="relative aspect-square shadow-2xl overflow-hidden mx-auto max-w-md lg:max-w-none"
                  style={{
                    borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                  }}
                >
                  <Image
                    src="/images/IMG_8547-600x600.jpeg"
                    alt="Julia et Benjamin - Vanland Voyage"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 90vw, 45vw"
                  />
                  {/* Accent border overlay */}
                  <div className="absolute inset-0 border-8 border-secondary/30 pointer-events-none rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%]" />
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute -bottom-6 -right-6 lg:-right-8 bg-gradient-to-br from-accent to-yellow-400 text-navy p-6 lg:p-8 rounded-3xl shadow-xl -rotate-3 hover:rotate-0 transition-transform duration-300"
                >
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold">Julia & Benjamin</div>
                    <div className="text-xs lg:text-sm font-medium">Fondateurs</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Content Section */}
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
                    className="inline-block px-5 py-2.5 bg-secondary text-white font-bold text-sm rounded-2xl mb-4 shadow-md rotate-1 hover:rotate-0 transition-transform duration-300"
                  >
                    Notre histoire
                  </motion.span>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-3xl lg:text-4xl font-bold text-navy mb-6"
                  >
                    Hello, nous c'est{" "}
                    <span className="text-secondary">Julia et Benjamin !</span>
                  </motion.h2>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-gray-700 leading-relaxed"
                >
                  C'est grâce au travail que Benjamin découvre le voyage en van. En effet, il devait réaliser le tour de France pour un client et décide d'aménager son van (Bergamote) pour éviter les contraintes d'hôtels.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-gray-700 leading-relaxed"
                >
                  Convaincu par ce mode de voyage, nous décidons de préparer le projet fou de partir faire un roadtrip en Europe. Pour cette aventure, on aménage notre deuxième véhicule le Peugeot Boxer H3L3, dénommé Hercule !
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-gray-700 leading-relaxed"
                >
                  Pendant notre périple, nous avons des idées qui germent et l'une d'elles est l'envie d'aménager de nouveaux véhicules pour permettre à toutes les personnes de découvrir la vie ou le voyage en van. Rentrés en France, on se lance alors dans VANLAND VOYAGE !
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-gradient-to-r from-secondary/5 to-accent/5 rounded-3xl p-6 border-l-4 border-accent shadow-md"
                >
                  <p className="text-gray-700 leading-relaxed font-medium">
                    Notre but est d'imaginer et réaliser des aménagements personnalisés, de qualité, éco-responsables et qui répondent à vos besoins quelque soit votre voyage sur un week-end ou un long périple ! Nous avons également à coeur de vous accompagner dans vos propres aménagements (poses d'accessoires et formation) mais également de donner une seconde vie à vos véhicules en les rénovants. 
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


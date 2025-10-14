"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function ProjetPage() {
  const mainSteps = [
    {
      number: "1",
      title: "Explorez le voyage en van et vos désirs pour votre futur aménagement",
      subtitle: "Louez notre van tout équipé",
      duration: "de 2 à 7 jours",
      description: "Testez la vie en van avant de vous lancer ! Découvrez vos besoins réels en condition.",
      rotate: "rotate-1",
      lottie: "/lotties/car with singer Lottie animation.lottie",
    },
    {
      number: "2",
      title: "Créez le véhicule de vos rêves",
      features: ["Étude de vos besoins", "Plan technique", "Cahier des charges"],
      description: "Nous concrétisons vos envies avec des plans 2D et 3D personnalisés.",
      rotate: "-rotate-1",
      lottie: "/lotties/Gears Lottie Animation.lottie",
    },
    {
      number: "3",
      title: "Nous réalisons l'aménagement complet dans notre atelier à Tours",
      subtitle: "De la recherche du véhicule jusqu'à l'homologation VASP",
      extra: "Besoin d'un coup de main ? Aménagements partiels et poses d'accessoires !",
      rotate: "rotate-2",
      lottie: "/lotties/Handsaw.lottie",
    },
    {
      number: "4",
      title: "Découvrez votre véhicule et partez à l'aventure",
      subtitle: "Formation complète incluse",
      description: "Récupérez votre van aménagé clé en main, prêt pour tous vos voyages !",
      duration: "Garantie 2 ans",
      rotate: "-rotate-2",
      lottie: "/lotties/Earth globe rotating with Seamless loop animation.lottie",
    },
  ];

  const detailedSteps = [
    {
      number: "1",
      title: "Contactez-nous et discutons !",
      content: [
        "Vous avez une idée de projet, des questions, une hésitation, contactez-nous et nous parlerons de votre projet, cela ne vous engage en rien !",
        "Si vous connaissez vos envies et besoins, nous pourrons vous transmettre un questionnaire complet pour comprendre votre projet.",
        "Si vous ne savez pas encore exactement ce que vous voulez, vous pouvez louer notre véhicule de démonstration et affiner vos envies pour remplir notre questionnaire.",
      ],
    },
    {
      number: "2",
      title: "Découverte du projet",
      content: [
        "Après nous avoir retourné le questionnaire, nous réalisons une étude rapide de faisabilité et nous réalisons un premier chiffrage. Nous vous présentons un premier projet avec nos délais prévisionnels lors d'un rdv en visio ou à l'atelier. Si le projet vous plait, nous affinerons alors le devis ensemble.",
      ],
    },
    {
      number: "3",
      title: "Validation du projet",
      content: [
        "Le projet vous a convaincu, super ! Vous pouvez valider le devis prévisionnel avec 5% d'acompte afin de démarrer le cahier des charges complet du projet et bloquer la date de l'atelier.",
      ],
    },
    {
      number: "4",
      title: "Recherche du véhicule",
      content: [
        "Le projet se précise maintenant il vous faut un véhicule ! Soit, vous l'avez déjà, passez tout de suite à l'étape 5, soit vous ne l'avez pas encore et nous vous proposons de vous accompagner dans le choix et la recherche de votre véhicule.",
        "Pour information, nous travaillons avec des véhicules neufs ou d'occasions (Fiat Ducato, Peugeot Boxer, Citroën Jumper, VW Crafter, Mercedes Sprinter…).",
      ],
    },
    {
      number: "5",
      title: "Cahier des charges & plans",
      content: [
        "Votre compagnon de route trouvé, nous passons à l'étape de validation. Nous partons de la première version du projet et du devis pour créer des plans 2D et 3D de votre futur fourgon puis nous rédigeons le cahier des charges complet : les revêtements, couleurs, boutons, finitions, tiroirs… Nous n'allons pas tout lister ici, cela serait beaucoup trop long 😉.",
        "Une fois les plans définitifs et le cahier des charges validés, nous ajustons le devis en fonction des modifications (si elles sont importantes). Ensuite, nous vous demandons de nous verser un acompte de 50% (1 mois avant le début des travaux) afin de commander auprès de nos fournisseurs tout le matériel nécessaire à la réalisation de votre projet.",
      ],
    },
    {
      number: "6",
      title: "L'aménagement",
      content: [
        "Nous arrivons au début des travaux, vous allez nous confier votre van et c'est parti pour 3 mois (3 moiiiiis ?! ) ! Les étapes de transformations sont les suivantes :",
      ],
      list: [
        "Préparation du véhicule : démontage et nettoyage",
        "Isolation : liège projeté So Liège, isolation Biofib Trio et pare-vapeur",
        "Ouvertures : baies, fenêtres, lanterneaux, toit relevable",
        "Électricité : installation Victron Énergy 100% autonome",
        "Plomberie : chauffage, chauffe-eau, douche, évier, etc.",
        "Aménagement intérieur : lit, banquettes, cuisine, douche, WC et toutes vos envies avec le contreplaqué ultraléger Platten Laden !",
        "Pose d'accessoires : store, porte-vélo, porte-matériel SKEP, alarme Thitronik.",
      ],
      footer: "On ne va pas s'ennuyer à l'atelier 😄",
    },
    {
      number: "7",
      title: "Homologation VASP",
      content: [
        "Une fois l'aménagement terminé, il ne reste plus qu'à réaliser le passage à la DREAL pour que votre véhicule soit totalement aux normes ! Pour cela, nous nous occupons de tout : l'aménagement répond aux exigences AFNOR, notices COC, dossier de conformité RTI, VASP Autocaravane, plans côtés, répartitions des charges. Une fois le passage réalisé, votre Carte Grise change et votre van est prêt à voyager !",
      ],
    },
    {
      number: "8",
      title: "Livraison",
      content: [
        "Le jour J est arrivé, vous pouvez venir découvrir votre van comme vous l'aviez rêvé. Nous en profitons également pour vous former sur le fonctionnement du véhicule et de tous les appareils. Nous ferons en sorte que cette journée soit inoubliable !",
      ],
    },
    {
      number: "9",
      title: "Garanties et SAV",
      content: [
        "On vous offre le check-up de l'aménagement 1 an après la livraison ! Une fois sur les routes, nous restons à votre disposition pour répondre à toutes vos questions. Si vous avez besoin, l'atelier sera toujours ouvert pour réparer ou améliorer l'aménagement. L'ensemble de l'aménagement et des appareils sont garantis durant 2 ans.",
      ],
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/campervan-11.JPG"
            alt="Aménagement de van sur mesure"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block mb-4"
              >
                <span className="inline-flex items-center gap-2 px-5 py-3 bg-accent text-navy font-bold text-sm rounded-2xl shadow-lg -rotate-1 hover:rotate-0 transition-transform duration-300">
                  Votre aventure commence ici
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
              >
                Votre projet{" "}
                <span className="text-accent">étape par étape</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl text-white/90 mb-8"
              >
                Votre expérience d'aménagement commence ici !
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-navy font-bold text-lg rounded-2xl hover:bg-accent/90 hover:scale-105 hover:rotate-0 -rotate-1 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Démarrer mon projet
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
                  href="/realisations"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-2xl hover:bg-white/20 hover:scale-105 hover:rotate-0 rotate-1 transition-all duration-300 border-2 border-white/30"
                >
                  Voir nos réalisations
                </Link>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="mt-12 grid grid-cols-3 gap-6"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">9</div>
                  <div className="text-sm text-white/80">Étapes claires</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">3</div>
                  <div className="text-sm text-white/80">Mois de travaux</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">2</div>
                  <div className="text-sm text-white/80">Ans de garantie</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center text-white/70"
          >
            <span className="text-sm mb-2">Découvrir</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Main Steps - Visual Timeline */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-secondary/50 hover:shadow-xl hover:rotate-0 transition-all duration-300 ${step.rotate} relative min-h-[520px] flex flex-col`}
              >
                {/* Step Number */}
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-secondary to-blue-500 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-lg rotate-12">
                  {step.number}
                </div>

                {/* Lottie Animation */}
                <div className="flex justify-center mb-6">
                  <div className="w-32 h-32">
                    <DotLottieReact
                      src={step.lottie}
                      loop
                      autoplay
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="pt-2 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-navy mb-4 leading-tight">
                    {step.title}
                  </h3>

                  {step.subtitle && (
                    <p className="text-secondary font-semibold mb-2">
                      {step.subtitle}
                    </p>
                  )}

                  {step.duration && (
                    <p className="text-gray-600 text-sm mb-3">{step.duration}</p>
                  )}

                  {step.features && (
                    <ul className="space-y-2 mb-4">
                      {step.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-gray-700"
                        >
                          <span className="text-accent text-lg flex-shrink-0">
                            •
                          </span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {step.description && (
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>
                  )}

                  {step.extra && (
                    <div className="mt-auto p-3 bg-accent/10 rounded-2xl border-l-4 border-accent">
                      <p className="text-sm text-navy font-medium">
                        {step.extra}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-5 py-2.5 bg-secondary text-white font-bold text-sm rounded-2xl mb-4 shadow-md rotate-1 hover:rotate-0 transition-transform duration-300">
              Le détail complet
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-navy">
              Découvrez toutes les étapes
            </h2>
          </motion.div>

          {/* Steps List */}
          <div className="space-y-8">
            {detailedSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-10 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                  {/* Step Number Badge */}
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-accent to-yellow-400 rounded-2xl flex items-center justify-center text-navy text-2xl font-bold shadow-md -rotate-6">
                      {step.number}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl font-bold text-navy mb-4">
                        {step.title}
                      </h3>

                      <div className="space-y-4">
                        {step.content.map((paragraph, i) => (
                          <p key={i} className="text-gray-700 leading-relaxed">
                            {paragraph}
                          </p>
                        ))}

                        {step.list && (
                          <ul className="space-y-3 mt-6">
                            {step.list.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-3 text-gray-700"
                              >
                                <span className="flex-shrink-0 w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center text-secondary text-sm font-bold mt-0.5">
                                  ✓
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {step.footer && (
                          <p className="text-gray-700 leading-relaxed mt-4 italic">
                            {step.footer}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connector line (except for last item) */}
                {index < detailedSteps.length - 1 && (
                  <div className="absolute left-10 top-full h-8 w-1 bg-gradient-to-b from-accent/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy to-primary relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Contactez-nous dès maintenant pour discuter de votre futur
              aménagement. Nous sommes là pour vous accompagner !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-navy font-bold text-lg rounded-2xl hover:bg-accent/90 hover:scale-105 hover:rotate-0 -rotate-1 transition-all duration-300 shadow-lg hover:shadow-xl"
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
              <Link
                href="/realisations"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-2xl hover:bg-white/20 hover:scale-105 hover:rotate-0 rotate-1 transition-all duration-300 border-2 border-white/30"
              >
                Voir nos réalisations
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
}


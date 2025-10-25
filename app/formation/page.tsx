"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import LottieIcon from "@/components/LottieIcon";
import classAnimation from "@/public/lotties/class.json";

interface FormData {
  // Informations générales
  nom: string;
  prenom: string;
  email: string;
  telephone: string;

  // Votre projet
  hasVehicule: string;
  vehiculeDetails: string;
  projetStade: string;
  utilisation: string;
  budget: string;
  vasp: string;

  // Compétences & attentes
  niveauBricolage: string;
  domainesALaise: string[];
  sujetsInteressants: string[];
  peurs: string;
  besoinSpecifique: string;

  // Logistique
  commentConnu: string;
  autreSource: string;
  recontacter: string;

  // RGPD
  rgpdConsent: boolean;
}

export default function FormationPage() {
  const [formData, setFormData] = useState<FormData>({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    hasVehicule: "",
    vehiculeDetails: "",
    projetStade: "",
    utilisation: "",
    budget: "",
    vasp: "",
    niveauBricolage: "",
    domainesALaise: [],
    sujetsInteressants: [],
    peurs: "",
    besoinSpecifique: "",
    commentConnu: "",
    autreSource: "",
    recontacter: "",
    rgpdConsent: false,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.prenom,
          lastName: formData.nom,
          email: formData.email,
          phone: formData.telephone,
          service: "Formation Master-Classe",
          message: `
=== INSCRIPTION FORMATION MASTER-CLASSE ===

PROJET:
- Possède un véhicule: ${formData.hasVehicule}
- Détails véhicule: ${formData.vehiculeDetails}
- Stade du projet: ${formData.projetStade}
- Utilisation: ${formData.utilisation}
- Budget: ${formData.budget}
- VASP: ${formData.vasp}

COMPÉTENCES:
- Niveau bricolage: ${formData.niveauBricolage}
- Domaines à l'aise: ${formData.domainesALaise.join(", ")}
- Sujets intéressants: ${formData.sujetsInteressants.join(", ")}
- Peurs/doutes: ${formData.peurs}
- Besoins spécifiques: ${formData.besoinSpecifique}

LOGISTIQUE:
- Comment connu: ${formData.commentConnu} ${formData.autreSource}
- Souhaite être recontacté: ${formData.recontacter}
          `,
          rgpdConsent: formData.rgpdConsent,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        // Reset form
        setFormData({
          nom: "",
          prenom: "",
          email: "",
          telephone: "",
          hasVehicule: "",
          vehiculeDetails: "",
          projetStade: "",
          utilisation: "",
          budget: "",
          vasp: "",
          niveauBricolage: "",
          domainesALaise: [],
          sujetsInteressants: [],
          peurs: "",
          besoinSpecifique: "",
          commentConnu: "",
          autreSource: "",
          recontacter: "",
          rgpdConsent: false,
        });
      } else {
        setError(data.error || "Une erreur est survenue");
      }
    } catch {
      setError("Erreur de connexion au serveur");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      const checkboxValue = (e.target as HTMLInputElement).value;

      if (name === "rgpdConsent") {
        setFormData({ ...formData, rgpdConsent: checked });
      } else if (name === "domainesALaise" || name === "sujetsInteressants") {
        const currentArray = formData[name];
        setFormData({
          ...formData,
          [name]: checked
            ? [...currentArray, checkboxValue]
            : currentArray.filter((item) => item !== checkboxValue),
        });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const programme = [
    { titre: "Présentation de vos projets", duree: "1h" },
    { titre: "Plan 2D", duree: "30 min" },
    { titre: "Carrosserie", duree: "2h" },
    { titre: "Isolation / Feutrine", duree: "1h" },
    { titre: "Électricité", duree: "4h" },
    { titre: "Habillage bois", duree: "2h" },
    { titre: "Mobilier", duree: "2h" },
    { titre: "Gaz / Eau", duree: "2h30" },
    { titre: "VASP (les normes, tout ça)", duree: "1h" },
  ];

  const dates = [
    "29 et 30 novembre 2025",
    "24 et 25 janvier 2026",
    "14 et 15 mars 2026",
    "9 et 10 mai 2026",
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-navy via-primary to-navy relative overflow-hidden">
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
                  animationData={classAnimation}
                  size={120}
                  loop={true}
                  autoplay={true}
                  colorReplacements={{
                    "#2A306B": "#ffffff",
                    "#2a306b": "#ffffff",
                  }}
                />
              </motion.div>

              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block px-5 py-2.5 bg-accent text-navy font-bold text-sm rounded-2xl mb-6 shadow-md -rotate-1 hover:rotate-0 transition-transform duration-300"
              >
                Formation sur 2 jours
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              >
                MASTER-CLASS
                <span className="inline-block text-accent scale-110 mx-1 animate-pulse">
                  E
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto"
              >
                Vous souhaitez aménager votre van ou fourgon vous-même mais vous n'avez pas les bases ? Venez participer à notre formation de 2 jours dans notre atelier proche de Tours.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Programme Section */}
        <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <span className="inline-block px-5 py-2.5 bg-secondary text-white font-bold text-sm rounded-2xl mb-4 shadow-md rotate-1 hover:rotate-0 transition-transform duration-300">
                16 heures de folie !
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
                Le <span className="text-secondary">programme détaillé</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Ce que vous allez retrouver dans ces deux jours
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <div className="grid gap-4">
                {programme.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl hover:bg-secondary/5 hover:border-secondary/20 border-2 border-transparent transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                        <span className="font-bold text-secondary">
                          {index + 1}
                        </span>
                      </div>
                      <h3 className="font-semibold text-navy">{item.titre}</h3>
                    </div>
                    <span className="text-sm font-bold text-secondary bg-accent/10 px-4 py-2 rounded-xl">
                      {item.duree}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-8 p-6 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-2xl border-2 border-accent/20 text-center"
              >
                <p className="text-2xl font-bold text-navy">
                  Total : <span className="text-secondary">16 heures</span> de
                  formation intensive
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Informations pratiques */}
        <section className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <span className="inline-block px-5 py-2.5 bg-accent text-navy font-bold text-sm rounded-2xl mb-4 shadow-md -rotate-1 hover:rotate-0 transition-transform duration-300">
                Toutes les infos
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
                Informations{" "}
                <span className="text-secondary">pratiques</span>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Dates */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl p-8 shadow-lg"
              >
                <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
                  <span className="text-2xl">📅</span> Prochaines dates
                </h3>
                <div className="space-y-3">
                  {dates.map((date, index) => (
                    <div
                      key={index}
                      className="p-3 bg-secondary/5 rounded-xl border-l-4 border-secondary"
                    >
                      <p className="font-semibold text-navy">{date}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Détails */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg space-y-4"
              >
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2 flex items-center gap-2">
                    <span className="text-2xl">📍</span> Lieu
                  </h3>
                  <p className="text-gray-700">
                    Chanceaux-sur-Choisille, proche de Tours (37)
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-navy mb-2 flex items-center gap-2">
                    <span className="text-2xl">👥</span> Nombre de places
                  </h3>
                  <p className="text-gray-700">De 4 à 6 personnes</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-navy mb-2 flex items-center gap-2">
                    <span className="text-2xl">⏱️</span> Durée
                  </h3>
                  <p className="text-gray-700">
                    2 jours soit 16 heures de formation
                  </p>
                </div>

                <div className="pt-4 border-t-2 border-gray-100">
                  <h3 className="text-xl font-bold text-navy mb-2 flex items-center gap-2">
                    <span className="text-2xl">🎒</span> À prévoir
                  </h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Votre repas du midi</li>
                    <li>• Chaussures de sécurité ou montantes</li>
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Tarif */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 max-w-3xl mx-auto bg-gradient-to-br from-secondary via-primary to-navy rounded-3xl p-8 shadow-2xl text-white"
            >
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold mb-2">Tarif</h3>
                <div className="text-6xl font-bold text-accent mb-4">
                  375€
                  <span className="text-xl text-white/80 ml-2">TTC</span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="font-bold mb-4 text-accent text-lg">
                  Ce qui est inclus :
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>16 heures de cours présentiel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>1 heure de coaching individuel sur votre projet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>
                      Bon d'achat de 50€ à valoir sur nos prestations
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Pack de stickers pour l'homologation VASP</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Synthèse PDF de la formation</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Formulaire d'inscription */}
        <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <span className="inline-block px-5 py-2.5 bg-accent text-navy font-bold text-sm rounded-2xl mb-4 shadow-md rotate-1 hover:rotate-0 transition-transform duration-300">
                Réservez votre place
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
                Comment vous <span className="text-secondary">inscrire ?</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Remplissez le questionnaire ci-dessous. Il nous permettra d'adapter la formation à vos besoins et de mieux vous accompagner dans votre projet !
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-3xl p-8 shadow-lg border-2 border-accent text-center"
                >
                  <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-10 h-10 text-navy"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-2">
                    Inscription envoyée !
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Nous avons bien reçu votre demande d'inscription. Nous vous
                    contacterons rapidement pour finaliser votre inscription et
                    répondre à vos questions.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="px-6 py-3 bg-accent text-navy font-bold rounded-2xl hover:bg-accent/90 transition-colors"
                  >
                    Nouvelle inscription
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border-2 border-gray-100"
                >
                  {/* Informations générales */}
                  <div className="mb-10">
                    <h3 className="text-2xl font-bold text-navy mb-1 flex items-center gap-2">
                      <span>👤</span> Informations générales
                    </h3>
                    <div className="h-1 w-20 bg-accent rounded-full mb-6"></div>

                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-navy mb-2">
                            Nom <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="nom"
                            value={formData.nom}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-colors text-navy"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-navy mb-2">
                            Prénom <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="prenom"
                            value={formData.prenom}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-colors text-navy"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-navy mb-2">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-colors text-navy"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-navy mb-2">
                            Téléphone <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            name="telephone"
                            value={formData.telephone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-colors text-navy"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Votre projet */}
                  <div className="mb-10">
                    <h3 className="text-2xl font-bold text-navy mb-1 flex items-center gap-2">
                      <span>🚐</span> Votre projet
                    </h3>
                    <div className="h-1 w-20 bg-accent rounded-full mb-6"></div>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-navy mb-2">
                          Avez-vous déjà un véhicule à aménager ?{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="hasVehicule"
                          value={formData.hasVehicule}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-colors bg-white text-navy"
                          required
                        >
                          <option value="">-- Sélectionnez --</option>
                          <option value="Oui">Oui</option>
                          <option value="Non - Petit fourgon">
                            Non - Petit fourgon (ex: Trafic, Transporter,
                            Jumpy...)
                          </option>
                          <option value="Non - Grand fourgon">
                            Non - Grand fourgon (ex: Ducato, Boxer, Sprinter...)
                          </option>
                          <option value="Non - Autre">Non - Autre</option>
                        </select>
                      </div>

                      {formData.hasVehicule === "Oui" && (
                        <div>
                          <label className="block text-sm font-semibold text-navy mb-2">
                            Marque / modèle de votre véhicule
                          </label>
                          <input
                            type="text"
                            name="vehiculeDetails"
                            value={formData.vehiculeDetails}
                            onChange={handleChange}
                            placeholder="Ex: Citroën Jumper L2H2"
                            className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-colors text-navy"
                          />
                        </div>
                      )}

                      <div>
                        <label className="block text-sm font-semibold text-navy mb-2">
                          Où en êtes-vous dans votre projet ?{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="projetStade"
                          value={formData.projetStade}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-colors bg-white text-navy"
                          required
                        >
                          <option value="">-- Sélectionnez --</option>
                          <option value="J'ai déjà commencé l'aménagement">
                            J'ai déjà commencé l'aménagement
                          </option>
                          <option value="Je suis en phase de planification">
                            Je suis en phase de planification
                          </option>
                          <option value="Je découvre tout juste l'univers du van">
                            Je découvre tout juste l'univers du van
                          </option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-navy mb-2">
                          À quoi servira principalement votre fourgon ?{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="utilisation"
                          value={formData.utilisation}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-colors bg-white text-navy"
                          required
                        >
                          <option value="">-- Sélectionnez --</option>
                          <option value="Van de week-end">
                            Van de week-end
                          </option>
                          <option value="Van de vacances / road-trip">
                            Van de vacances / road-trip
                          </option>
                          <option value="Habitation à l'année">
                            Habitation à l'année
                          </option>
                          <option value="Projet pro">
                            Projet pro (activité mobile, atelier, etc.)
                          </option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-navy mb-2">
                          Quel budget avez-vous pour le projet ?{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-colors bg-white text-navy"
                          required
                        >
                          <option value="">-- Sélectionnez --</option>
                          <option value="<20 000€">&lt; 20 000€</option>
                          <option value="Entre 20 000 et 30 000€">
                            Entre 20 000 et 30 000€
                          </option>
                          <option value="Entre 30 000€ et 40 000€">
                            Entre 30 000€ et 40 000€
                          </option>
                          <option value=">40 000€">&gt; 40 000€</option>
                          <option value="Je ne sais pas encore">
                            Je ne sais pas encore
                          </option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-navy mb-2">
                          Souhaitez-vous homologuer votre fourgon en VASP ?{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="vasp"
                          value={formData.vasp}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-colors bg-white text-navy"
                          required
                        >
                          <option value="">-- Sélectionnez --</option>
                          <option value="Oui">Oui</option>
                          <option value="Non">Non</option>
                          <option value="Je ne sais pas encore">
                            Je ne sais pas encore
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Compétences & attentes */}
                  <div className="mb-10">
                    <h3 className="text-2xl font-bold text-navy mb-1 flex items-center gap-2">
                      <span>🛠️</span> Compétences & attentes
                    </h3>
                    <div className="h-1 w-20 bg-accent rounded-full mb-6"></div>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-navy mb-2">
                          Quel est votre niveau en bricolage ?{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="niveauBricolage"
                          value={formData.niveauBricolage}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-colors bg-white text-navy"
                          required
                        >
                          <option value="">-- Sélectionnez --</option>
                          <option value="Débutant complet">
                            Débutant complet
                          </option>
                          <option value="Intermédiaire">
                            Intermédiaire (je sais me débrouiller)
                          </option>
                          <option value="Avancé">
                            Avancé (je maîtrise les outils, l'électricité, etc.)
                          </option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-navy mb-3">
                          Dans quel domaine êtes-vous à l'aise ?
                        </label>
                        <div className="space-y-2">
                          {[
                            "Menuiserie",
                            "Électricité 12V",
                            "Plomberie",
                            "Mécanique",
                            "Je débute, je veux apprendre !",
                          ].map((domaine) => (
                            <label
                              key={domaine}
                              className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-secondary/5 cursor-pointer transition-colors"
                            >
                              <input
                                type="checkbox"
                                name="domainesALaise"
                                value={domaine}
                                checked={formData.domainesALaise.includes(
                                  domaine
                                )}
                                onChange={handleChange}
                                className="w-5 h-5 text-secondary border-gray-300 rounded focus:ring-secondary"
                              />
                              <span className="text-navy">{domaine}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-navy mb-3">
                          Quels sont les sujets qui vous intéressent le plus ?
                        </label>
                        <div className="grid md:grid-cols-2 gap-2">
                          {[
                            "Isolation & habillage",
                            "Électricité (12V / 220V / panneaux solaires)",
                            "Eau & plomberie",
                            "Gaz & sécurité",
                            "Chauffage & douche",
                            "Fabrication de meubles",
                            "Cuisine / rangements",
                            "Homologation VASP",
                            "Optimisation de l'espace",
                            "Astuces et retours d'expérience",
                          ].map((sujet) => (
                            <label
                              key={sujet}
                              className="flex items-center gap-2 p-2 bg-gray-50 rounded-xl hover:bg-secondary/5 cursor-pointer transition-colors"
                            >
                              <input
                                type="checkbox"
                                name="sujetsInteressants"
                                value={sujet}
                                checked={formData.sujetsInteressants.includes(
                                  sujet
                                )}
                                onChange={handleChange}
                                className="w-4 h-4 text-secondary border-gray-300 rounded focus:ring-secondary flex-shrink-0"
                              />
                              <span className="text-sm text-navy">{sujet}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-navy mb-2">
                          Quelles sont vos peurs ou vos doutes pour cet
                          aménagement ?
                        </label>
                        <textarea
                          name="peurs"
                          value={formData.peurs}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-colors resize-none text-navy"
                          placeholder="Exprimez librement vos préoccupations..."
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-navy mb-2">
                          Avez-vous des besoins spécifiques ou questions
                          particulières ?
                        </label>
                        <textarea
                          name="besoinSpecifique"
                          value={formData.besoinSpecifique}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-colors resize-none text-navy"
                          placeholder="Ex: allergies, mobilité réduite, horaires spéciaux, attentes précises..."
                        />
                      </div>
                    </div>
                  </div>

                  {/* Logistique & suivi */}
                  <div className="mb-10">
                    <h3 className="text-2xl font-bold text-navy mb-1 flex items-center gap-2">
                      <span>🔁</span> Logistique & suivi
                    </h3>
                    <div className="h-1 w-20 bg-accent rounded-full mb-6"></div>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-navy mb-2">
                          Comment avez-vous connu notre formation ?{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="commentConnu"
                          value={formData.commentConnu}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-colors bg-white text-navy"
                          required
                        >
                          <option value="">-- Sélectionnez --</option>
                          <option value="Bouche à oreille">
                            Bouche à oreille
                          </option>
                          <option value="Réseaux sociaux">
                            Réseaux sociaux
                          </option>
                          <option value="Google / Internet">
                            Google / Internet
                          </option>
                          <option value="Salon / événement">
                            Salon / événement
                          </option>
                          <option value="Autre">Autre</option>
                        </select>
                      </div>

                      {formData.commentConnu === "Autre" && (
                        <div>
                          <label className="block text-sm font-semibold text-navy mb-2">
                            Précisez
                          </label>
                          <input
                            type="text"
                            name="autreSource"
                            value={formData.autreSource}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-colors text-navy"
                          />
                        </div>
                      )}

                      <div>
                        <label className="block text-sm font-semibold text-navy mb-2">
                          Souhaitez-vous être recontacté(e) pour valider
                          ensemble votre inscription et vos besoins ?{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="recontacter"
                          value={formData.recontacter}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-colors bg-white text-navy"
                          required
                        >
                          <option value="">-- Sélectionnez --</option>
                          <option value="Oui">Oui</option>
                          <option value="Non">Non</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* RGPD */}
                  <div className="mb-6">
                    <div className="bg-gray-50 rounded-2xl p-4 border-l-4 border-secondary">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="rgpdConsent"
                          checked={formData.rgpdConsent}
                          onChange={handleChange}
                          className="mt-1 w-5 h-5 text-secondary border-gray-300 rounded focus:ring-secondary"
                          required
                        />
                        <span className="text-sm text-gray-700">
                          J'autorise ce site à conserver mes données
                          personnelles transmises via ce formulaire. Aucune
                          exploitation commerciale ne sera faite des données
                          conservées.{" "}
                          <a
                            href="/mentions-legales"
                            className="text-secondary hover:underline"
                          >
                            Voir nos mentions légales
                          </a>
                          .
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Error */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-50 border-l-4 border-red-500 rounded-2xl mb-6"
                    >
                      <p className="text-sm text-red-700">{error}</p>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-8 py-4 bg-gradient-to-r from-secondary to-blue-500 text-white font-bold text-lg rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {loading
                      ? "Envoi en cours..."
                      : "Envoyer mon inscription"}
                  </button>

                  <p className="text-center text-sm text-gray-600 mt-4">
                    Dès réception, nous vous contacterons pour finaliser votre
                    inscription et répondre à vos questions.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


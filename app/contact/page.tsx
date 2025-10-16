"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import LottieIcon from "@/components/LottieIcon";

// Import des animations Lottie
import contactAnimation from "@/public/lotties/contact.json";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "Aménagement complet",
    message: "",
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
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "Aménagement complet",
          message: "",
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
    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-6">
              <LottieIcon
                animationData={contactAnimation}
                size={120}
                loop={true}
                autoplay={true}
              />
            </div>
            <span className="inline-block px-5 py-2.5 bg-accent text-navy font-bold text-sm rounded-2xl mb-4 shadow-md -rotate-1 hover:rotate-0 transition-transform duration-300">
              Contactez-nous
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
              On discute de{" "}
              <span className="text-secondary">votre projet ?</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Remplissez le formulaire ci-dessous, nous vous répondrons dans
              les plus brefs délais
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-navy to-primary rounded-3xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-6">
                  Nos coordonnées
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center -rotate-3">
                        <svg
                          className="w-6 h-6 text-navy rotate-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:contact@vanland-voyage.fr"
                        className="text-white/90 hover:text-accent transition-colors"
                      >
                        contact@vanland-voyage.fr
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center rotate-3">
                        <svg
                          className="w-6 h-6 text-navy -rotate-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Téléphone</h3>
                      <a
                        href="tel:0756858541"
                        className="text-white/90 hover:text-accent transition-colors"
                      >
                        07 56 85 85 41
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center -rotate-2">
                        <svg
                          className="w-6 h-6 text-navy rotate-2"
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
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Atelier</h3>
                      <p className="text-white/90">
                        840 impasse Petit Couleur
                        <br />
                        ZI du Cassantin
                        <br />
                        37390 Chanceaux-sur-Choisille
                      </p>
                      <p className="text-accent font-semibold mt-2">
                        UNIQUEMENT SUR RENDEZ-VOUS
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Horaires */}
              <div className="bg-gray-50 rounded-3xl p-8 border-2 border-gray-100">
                <h3 className="text-xl font-bold text-navy mb-4">
                  Horaires d'ouverture
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <span className="font-semibold">Lundi - Vendredi :</span>{" "}
                    9h - 18h
                  </p>
                  <p className="text-accent font-bold">
                    UNIQUEMENT SUR RENDEZ-VOUS
                  </p>
                  <p className="text-sm text-gray-600">
                    Week-end : Fermé
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
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
                    Message envoyé !
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Nous avons bien reçu votre message et vous répondrons dans
                    les plus brefs délais.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="px-6 py-3 bg-accent text-navy font-bold rounded-2xl hover:bg-accent/90 transition-colors"
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100"
                >
                  <h2 className="text-2xl font-bold text-navy mb-6">
                    Contact
                  </h2>

                  <div className="space-y-6">
                    {/* Prénom & Nom */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-semibold text-navy mb-2"
                        >
                          Prénom <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-colors text-navy"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-semibold text-navy mb-2"
                        >
                          Nom <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-colors text-navy"
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-navy mb-2"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-colors text-navy"
                        required
                      />
                    </div>

                    {/* Téléphone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-navy mb-2"
                      >
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-colors text-navy"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-semibold text-navy mb-2"
                      >
                        De quoi avez-vous besoin ?{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-colors bg-white text-navy"
                        required
                      >
                        <option value="Aménagement complet">
                          Aménagement complet
                        </option>
                        <option value="Aménagement partiel">
                          Aménagement partiel
                        </option>
                        <option value="Poses d'accessoires">
                          Poses d'accessoires
                        </option>
                        <option value="Stickers / VASP">Stickers / VASP</option>
                        <option value="Renseignements">Renseignements</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-navy mb-2"
                      >
                        Détaillez-nous votre besoin{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-colors resize-none text-navy"
                        required
                      />
                    </div>

                    {/* RGPD */}
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

                    {/* Error */}
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-red-50 border-l-4 border-red-500 rounded-2xl"
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
                      {loading ? "Envoi en cours..." : "Envoyer le message"}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}


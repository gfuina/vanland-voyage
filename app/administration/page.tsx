"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AdministrationPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState({
    realisations: 0,
    contacts: 0,
    nouveauxContacts: 0,
    actualites: 0,
    actualiteActive: false,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      // Récupérer les réalisations
      const realisationsRes = await fetch("/api/realisations");
      const realisationsData = await realisationsRes.json();
      
      // Récupérer les contacts
      const contactsRes = await fetch("/api/contact");
      const contactsData = await contactsRes.json();
      
      // Récupérer les actualités
      const actualitesRes = await fetch("/api/actualites");
      const actualitesData = await actualitesRes.json();
      
      setStats({
        realisations: realisationsData.realisations?.filter((r: { published: boolean }) => r.published).length || 0,
        contacts: contactsData.contacts?.length || 0,
        nouveauxContacts: contactsData.contacts?.filter((c: { status: string }) => c.status === "nouveau").length || 0,
        actualites: actualitesData.actualites?.length || 0,
        actualiteActive: actualitesData.actualites?.some((a: { active: boolean }) => a.active) || false,
      });
    } catch (error) {
      console.error("Erreur lors du chargement des stats:", error);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      await fetch("/api/auth/admin", {
        method: "DELETE",
      });
      router.push("/admin-login");
    } catch (error) {
      console.error("Erreur de déconnexion:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <div className="relative w-32 h-12">
                <div className="absolute inset-0 bg-primary rounded-2xl -rotate-1" />
                <Image
                  src="/logo-white.png"
                  alt="Vanland Voyage"
                  fill
                  className="object-contain p-2 relative z-10"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-navy">Administration</h1>
                <p className="text-sm text-gray-600">Gestion du site</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-gray-700 hover:text-secondary transition-colors"
              >
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
              <button
                onClick={handleLogout}
                disabled={loading}
                className="px-4 py-2 bg-red-500 text-white font-semibold rounded-2xl hover:bg-red-600 transition-colors disabled:opacity-50"
              >
                Déconnexion
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Welcome Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-navy mb-2">
              Bienvenue sur votre espace d'administration
            </h2>
            <p className="text-gray-600">
              Gérez le contenu de votre site Vanland Voyage
            </p>
          </div>

          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Réalisations Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-secondary/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-blue-500 rounded-2xl flex items-center justify-center mb-6 -rotate-3">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">
                Réalisations
              </h3>
              <p className="text-gray-600 mb-6">
                Gérer les projets et réalisations affichés sur le site
              </p>
              <a
                href="/administration/realisations"
                className="block px-6 py-3 bg-accent text-navy font-bold rounded-2xl hover:bg-accent/90 transition-colors w-full text-center"
              >
                Gérer les réalisations
              </a>
            </motion.div>

            {/* Contacts Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-secondary/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-yellow-400 rounded-2xl flex items-center justify-center mb-6 rotate-3">
                <svg
                  className="w-8 h-8 text-navy"
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
              <h3 className="text-xl font-bold text-navy mb-2">
                Demandes de contact
              </h3>
              <p className="text-gray-600 mb-6">
                Gérer les demandes de contact reçues via le formulaire
                {stats.nouveauxContacts > 0 && (
                  <span className="block mt-2 text-secondary font-bold">
                    {stats.nouveauxContacts} nouvelle(s) demande(s)
                  </span>
                )}
              </p>
              <a
                href="/administration/contacts"
                className="block px-6 py-3 bg-accent text-navy font-bold rounded-2xl hover:bg-accent/90 transition-colors w-full text-center"
              >
                Voir les contacts
              </a>
            </motion.div>

            {/* Analytics Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-secondary/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 -rotate-2">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">
                Analytics & Stats
              </h3>
              <p className="text-gray-600 mb-6">
                Consulter les statistiques de visites et de performances du site
              </p>
              <a
                href="/administration/analytics"
                className="block px-6 py-3 bg-accent text-navy font-bold rounded-2xl hover:bg-accent/90 transition-colors w-full text-center"
              >
                Voir les stats
              </a>
            </motion.div>

            {/* Partenaires Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-secondary/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 rotate-1">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">
                Partenaires
              </h3>
              <p className="text-gray-600 mb-6">
                Gérer les partenaires affichés sur le site
              </p>
              <a
                href="/administration/partenaires"
                className="block px-6 py-3 bg-accent text-navy font-bold rounded-2xl hover:bg-accent/90 transition-colors w-full text-center"
              >
                Gérer les partenaires
              </a>
            </motion.div>

            {/* Actualités Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-secondary/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mb-6 -rotate-2">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">
                Actualités
              </h3>
              <p className="text-gray-600 mb-6">
                Gérer les actualités et modals du site
                {stats.actualiteActive && (
                  <span className="block mt-2 text-secondary font-bold">
                    ✓ Une actualité est active
                  </span>
                )}
              </p>
              <a
                href="/administration/actualites"
                className="block px-6 py-3 bg-accent text-navy font-bold rounded-2xl hover:bg-accent/90 transition-colors w-full text-center"
              >
                Gérer les actualités
              </a>
            </motion.div>

          </div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 bg-gradient-to-br from-navy to-primary rounded-3xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-6">Aperçu rapide</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-bold text-accent mb-2">{stats.realisations}</div>
                <div className="text-white/80">Réalisations publiées</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-bold text-accent mb-2">{stats.contacts}</div>
                <div className="text-white/80">Demandes de contact</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-bold text-accent mb-2">{stats.nouveauxContacts}</div>
                <div className="text-white/80">Nouvelles demandes</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-bold text-accent mb-2">{stats.actualites}</div>
                <div className="text-white/80">Actualités</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}


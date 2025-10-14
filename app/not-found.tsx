"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              {/* Fond décoratif */}
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full blur-3xl"
              />
              
              {/* 404 avec style */}
              <div className="relative">
                <h1 className="text-[150px] md:text-[250px] font-bold leading-none">
                  <span className="text-navy">4</span>
                  <span className="text-secondary relative inline-block -rotate-12">
                    <motion.span
                      initial={{ y: 0 }}
                      animate={{ y: [-20, 0, -20] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="inline-block"
                    >
                      0
                    </motion.span>
                  </span>
                  <span className="text-navy">4</span>
                </h1>
              </div>
            </div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Oups ! Page introuvable
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Il semblerait que cette page soit partie en road trip... 🚐💨
              <br />
              Peut-être cherchez-vous à découvrir nos réalisations ou à nous contacter ?
            </p>
          </motion.div>

          {/* Icône van animée */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <motion.div
              animate={{ x: [0, 20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="text-8xl"
            >
              🚐
            </motion.div>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/"
              className="group px-8 py-4 bg-gradient-to-r from-secondary to-blue-500 text-white font-bold text-lg rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
            >
              <svg
                className="w-5 h-5 transition-transform group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Retour à l'accueil
            </Link>

            <Link
              href="/realisations"
              className="px-8 py-4 bg-accent text-navy font-bold text-lg rounded-2xl hover:bg-accent/90 hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
            >
              Voir nos réalisations
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
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </Link>
          </motion.div>

          {/* Suggestions de navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {[
              { name: "Accueil", href: "/", icon: "🏠" },
              { name: "À propos", href: "/about", icon: "👥" },
              { name: "Prestations", href: "/prestations", icon: "🔧" },
              { name: "Contact", href: "/contact", icon: "📧" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group p-4 bg-white rounded-2xl border-2 border-gray-100 hover:border-secondary/50 hover:shadow-md transition-all duration-300"
              >
                <div className="text-3xl mb-2 transition-transform group-hover:scale-110">
                  {item.icon}
                </div>
                <p className="text-sm font-semibold text-navy group-hover:text-secondary transition-colors">
                  {item.name}
                </p>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}


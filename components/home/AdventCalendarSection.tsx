"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useMemo } from "react";
import { IAdventGift } from "@/models/AdventGift";

export function AdventCalendarSection() {
  const [todayGift, setTodayGift] = useState<IAdventGift | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [currentDay, setCurrentDay] = useState(1);

  // Générer les positions des flocons une seule fois
  const snowflakes = useMemo(
    () =>
      [...Array(20)].map(() => ({
        startX: Math.random() * 100,
        endOffset: (Math.random() - 0.5) * 20,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
      })),
    []
  );

  useEffect(() => {
    // Récupérer le jour de test s'il existe
    const testDay = localStorage.getItem("advent_test_day");
    const today = testDay ? parseInt(testDay) : new Date().getDate();
    setCurrentDay(today);

    // Vérifier si on est en décembre ou en mode test
    const now = new Date();
    const isDecember = now.getMonth() === 11 || testDay; // 11 = décembre

    if (!isDecember) return;

    // Récupérer le cadeau du jour
    fetch("/api/advent-gifts")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const gift = data.gifts.find((g: IAdventGift) => g.day === today);
          if (gift) {
            setTodayGift(gift);
            // Vérifier si déjà dévoilé
            const revealed = localStorage.getItem(`advent_revealed_${today}`);
            setIsRevealed(!!revealed);
          }
        }
      })
      .catch((error) =>
        console.error("Erreur lors du chargement du cadeau:", error)
      );
  }, []);

  const handleReveal = () => {
    if (todayGift) {
      localStorage.setItem(`advent_revealed_${currentDay}`, "true");
      setIsRevealed(true);
    }
  };

  if (!todayGift) return null;

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-navy via-primary to-navy relative overflow-hidden">
      {/* Decorative snowflakes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {snowflakes.map((flake, i) => (
          <motion.div
            key={i}
            className="absolute text-white/10 text-2xl"
            style={{ left: `${flake.startX}%` }}
            initial={{ y: -50 }}
            animate={{
              y: "100vh",
              x: [`0%`, `${flake.endOffset}%`],
            }}
            transition={{
              duration: flake.duration,
              repeat: Infinity,
              ease: "linear",
              delay: flake.delay,
            }}
          >
            ❄
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <span className="inline-flex items-center gap-2 px-5 py-3 bg-accent text-navy font-bold text-sm rounded-2xl shadow-lg -rotate-1">
                <span className="text-xl">🎄</span>
                Calendrier de l'Avent 2025
              </span>
            </motion.div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Cadeau du jour -{" "}
              <span className="text-accent">Jour {currentDay}</span>
            </h2>
            <p className="text-white/80 text-lg">
              Découvrez votre surprise quotidienne !
            </p>
          </div>

          {/* Gift Card */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={todayGift.imageUrl}
                  alt={todayGift.title}
                  fill
                  className="object-cover"
                />
                {!isRevealed && (
                  <div className="absolute inset-0 backdrop-blur-xl bg-navy/80 flex items-center justify-center">
                    <motion.button
                      onClick={handleReveal}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-accent text-navy font-bold text-lg rounded-2xl shadow-lg hover:bg-accent/90 transition-all duration-300 -rotate-1 hover:rotate-0 flex items-center gap-3"
                    >
                      <span className="text-2xl">🎁</span>
                      Découvrir le cadeau
                    </motion.button>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                {isRevealed ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="inline-block px-4 py-2 bg-accent/20 text-accent font-bold text-sm rounded-2xl mb-4">
                      Jour {currentDay} • Dévoilé ✨
                    </div>
                    <h3 className="text-3xl font-bold text-navy mb-4">
                      {todayGift.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {todayGift.description}
                    </p>
                    <a
                      href={
                        todayGift.ctaLink ||
                        "https://www.instagram.com/vanland_voyage"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg rotate-1 hover:rotate-0"
                    >
                      {todayGift.ctaText || "Participer au concours Instagram"}
                      {todayGift.ctaLink ? (
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
                      ) : (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      )}
                    </a>
                  </motion.div>
                ) : (
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎁</div>
                    <p className="text-gray-600 text-lg">
                      Cliquez sur l'image pour découvrir votre cadeau du jour !
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* CTA to full calendar */}
          <div className="text-center mt-8">
            <Link
              href="/calendrier-avent"
              className="inline-flex items-center gap-2 text-white hover:text-accent transition-colors font-semibold"
            >
              Voir tout le calendrier de l'Avent
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}


"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useMemo } from "react";
import { IAdventGift } from "@/models/AdventGift";

export default function CalendrierAventPage() {
  const [gifts, setGifts] = useState<IAdventGift[]>([]);
  const [revealedDays, setRevealedDays] = useState<Set<number>>(new Set());
  const [selectedGift, setSelectedGift] = useState<IAdventGift | null>(null);
  const [currentDay, setCurrentDay] = useState(1);

  // Générer les positions des flocons une seule fois
  const snowflakes = useMemo(
    () =>
      [...Array(30)].map(() => ({
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

    // Charger les cadeaux
    fetch("/api/advent-gifts")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setGifts(data.gifts);
        }
      })
      .catch((error) =>
        console.error("Erreur lors du chargement des cadeaux:", error)
      );

    // Charger les jours dévoilés
    const revealed = new Set<number>();
    for (let i = 1; i <= 24; i++) {
      if (localStorage.getItem(`advent_revealed_${i}`)) {
        revealed.add(i);
      }
    }
    setRevealedDays(revealed);
  }, []);

  const handleReveal = (gift: IAdventGift) => {
    if (gift.day > currentDay) {
      alert("Patience ! Ce cadeau n'est pas encore disponible 🎄");
      return;
    }

    localStorage.setItem(`advent_revealed_${gift.day}`, "true");
    setRevealedDays(new Set([...revealedDays, gift.day]));
    setSelectedGift(gift);
  };

  const isAvailable = (day: number) => day <= currentDay;
  const isRevealed = (day: number) => revealedDays.has(day);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-navy via-primary to-navy py-24">
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
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 px-5 py-3 bg-accent text-navy font-bold text-sm rounded-2xl shadow-lg -rotate-1">
                <span className="text-xl">🎄</span>
                Joyeux Noël 2025
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
              Calendrier de l'Avent
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Découvrez chaque jour une surprise jusqu'à Noël ! Cliquez sur les
              cases pour révéler vos cadeaux.
            </p>
            <div className="mt-4 text-accent font-bold text-xl">
              Jour {currentDay} / 24
            </div>
          </motion.div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            {[...Array(24)].map((_, index) => {
              const day = index + 1;
              const gift = gifts.find((g) => g.day === day);
              const available = isAvailable(day);
              const revealed = isRevealed(day);

              return (
                <motion.button
                  key={day}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.02 }}
                  onClick={() => gift && available && handleReveal(gift)}
                  disabled={!gift || !available}
                  className={`relative aspect-square rounded-3xl overflow-hidden shadow-lg transition-all duration-300 ${
                    available
                      ? "hover:scale-105 hover:shadow-2xl cursor-pointer hover:rotate-0"
                      : "opacity-50 cursor-not-allowed"
                  } ${
                    day % 3 === 0
                      ? "rotate-2"
                      : day % 2 === 0
                        ? "-rotate-1"
                        : "rotate-1"
                  }`}
                >
                  {gift && revealed ? (
                    // Cadeau dévoilé
                    <div className="relative w-full h-full">
                      <Image
                        src={gift.imageUrl}
                        alt={gift.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent flex items-end justify-center p-4">
                        <span className="text-white font-bold text-lg">
                          {day}
                        </span>
                      </div>
                      <div className="absolute top-2 right-2 bg-accent text-navy rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                        ✓
                      </div>
                    </div>
                  ) : (
                    // Cadeau non dévoilé
                    <div
                      className={`w-full h-full flex items-center justify-center ${
                        available
                          ? "bg-gradient-to-br from-accent to-yellow-400"
                          : "bg-gradient-to-br from-gray-400 to-gray-500"
                      }`}
                    >
                      <div className="text-center">
                        <div
                          className={`text-5xl font-bold mb-2 ${available ? "text-navy" : "text-gray-300"}`}
                        >
                          {day}
                        </div>
                        {gift && available && (
                          <div className="text-4xl">🎁</div>
                        )}
                        {!available && <div className="text-3xl">🔒</div>}
                      </div>
                    </div>
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Selected Gift Modal */}
          {selectedGift && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedGift(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-64 lg:h-96">
                  <Image
                    src={selectedGift.imageUrl}
                    alt={selectedGift.title}
                    fill
                    className="object-cover"
                  />
                  <button
                    onClick={() => setSelectedGift(null)}
                    className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
                  >
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="p-8">
                  <div className="inline-block px-4 py-2 bg-accent/20 text-accent font-bold text-sm rounded-2xl mb-4">
                    Jour {selectedGift.day} • 🎄
                  </div>
                  <h3 className="text-3xl font-bold text-navy mb-4">
                    {selectedGift.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {selectedGift.description}
                  </p>
                  <a
                    href={
                      selectedGift.ctaLink ||
                      "https://www.instagram.com/vanland_voyage"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg rotate-1 hover:rotate-0"
                  >
                    {selectedGift.ctaText || "Participer au concours Instagram"}
                    {selectedGift.ctaLink ? (
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
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Legend */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-white font-bold text-xl mb-4">Comment ça marche ?</h3>
            <div className="grid gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center font-bold text-navy">
                  1
                </div>
                <p className="text-white/90">
                  Les cases avec des cadeaux 🎁 sont disponibles
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-500 rounded-2xl flex items-center justify-center text-2xl">
                  🔒
                </div>
                <p className="text-white/90">
                  Les cases verrouillées seront disponibles le jour J
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <p className="text-white/90">Les cases dévoilées restent visibles</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}


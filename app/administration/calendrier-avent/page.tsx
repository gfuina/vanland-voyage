"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { IAdventGift } from "@/models/AdventGift";

export default function AdministrationCalendrierPage() {
  const router = useRouter();
  const [gifts, setGifts] = useState<IAdventGift[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingGift, setEditingGift] = useState<IAdventGift | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [testDay, setTestDay] = useState<string>("");

  // Form state
  const [formData, setFormData] = useState({
    day: "",
    title: "",
    description: "",
    imageUrl: "",
    ctaText: "",
    ctaLink: "",
  });

  useEffect(() => {
    fetchGifts();
    // Charger le jour de test actuel
    const savedTestDay = localStorage.getItem("advent_test_day");
    if (savedTestDay) {
      setTestDay(savedTestDay);
    }
  }, []);

  const fetchGifts = async () => {
    try {
      const res = await fetch("/api/advent-gifts");
      const data = await res.json();
      if (data.success) {
        setGifts(data.gifts);
      }
    } catch (error) {
      console.error("Erreur lors du chargement des cadeaux:", error);
    }
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/advent-gifts/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        setFormData((prev) => ({ ...prev, imageUrl: data.url }));
      }
    } catch (error) {
      console.error("Erreur lors de l'upload:", error);
      alert("Erreur lors de l'upload de l'image");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = editingGift
        ? `/api/advent-gifts/${editingGift._id}`
        : "/api/advent-gifts";
      const method = editingGift ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        await fetchGifts();
        resetForm();
      } else {
        alert(data.error || "Erreur lors de la sauvegarde");
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Erreur lors de la sauvegarde");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer ce cadeau ?")) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/advent-gifts/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        await fetchGifts();
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Erreur lors de la suppression");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (gift: IAdventGift) => {
    setEditingGift(gift);
    setFormData({
      day: gift.day.toString(),
      title: gift.title,
      description: gift.description,
      imageUrl: gift.imageUrl,
      ctaText: gift.ctaText || "",
      ctaLink: gift.ctaLink || "",
    });
    setShowForm(true);
  };

  const resetForm = () => {
    setEditingGift(null);
    setFormData({
      day: "",
      title: "",
      description: "",
      imageUrl: "",
      ctaText: "",
      ctaLink: "",
    });
    setShowForm(false);
  };

  const handleSetTestDay = () => {
    if (testDay) {
      localStorage.setItem("advent_test_day", testDay);
      alert(`Jour de test défini à : ${testDay}`);
    } else {
      localStorage.removeItem("advent_test_day");
      alert("Jour de test réinitialisé");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => router.push("/administration")}
                className="p-2 hover:bg-gray-100 rounded-2xl transition-colors"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <div>
                <h1 className="text-xl font-bold text-navy">
                  Calendrier de l'Avent 🎄
                </h1>
                <p className="text-sm text-gray-600">
                  Gestion des cadeaux quotidiens
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="px-6 py-2 bg-accent text-navy font-bold rounded-2xl hover:bg-accent/90 transition-colors"
            >
              + Nouveau cadeau
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 lg:px-8 py-12">
        {/* Test Mode Section */}
        <div className="mb-8 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-3xl p-6 border-2 border-orange-200">
          <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
            <span>🧪</span> Mode Test
          </h3>
          <p className="text-gray-700 mb-4">
            Définissez un jour spécifique pour tester le calendrier avant Noël.
            Laissez vide pour utiliser la date réelle.
          </p>
          <div className="flex gap-4 items-end">
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Jour de test (1-24)
              </label>
              <input
                type="number"
                min="1"
                max="24"
                value={testDay}
                onChange={(e) => setTestDay(e.target.value)}
                placeholder="Ex: 15"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-2xl focus:outline-none focus:border-secondary text-navy bg-white placeholder:text-gray-400"
              />
            </div>
            <button
              onClick={handleSetTestDay}
              className="px-6 py-2 bg-secondary text-white font-semibold rounded-2xl hover:bg-secondary/90 transition-colors"
            >
              Définir
            </button>
            {testDay && (
              <button
                onClick={() => {
                  setTestDay("");
                  localStorage.removeItem("advent_test_day");
                  alert("Jour de test réinitialisé");
                }}
                className="px-6 py-2 bg-red-500 text-white font-semibold rounded-2xl hover:bg-red-600 transition-colors"
              >
                Réinitialiser
              </button>
            )}
          </div>
        </div>

        {/* Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-navy">
                  {editingGift ? "Modifier le cadeau" : "Nouveau cadeau"}
                </h2>
                <button
                  onClick={resetForm}
                  className="p-2 hover:bg-gray-100 rounded-2xl transition-colors"
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

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Day */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Jour (1-24) *
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="24"
                    required
                    value={formData.day}
                    onChange={(e) =>
                      setFormData({ ...formData, day: e.target.value })
                    }
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-2xl focus:outline-none focus:border-secondary text-navy bg-white"
                  />
                </div>

                {/* Title */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Titre *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-2xl focus:outline-none focus:border-secondary text-navy bg-white"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Description *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-2xl focus:outline-none focus:border-secondary text-navy bg-white"
                  />
                </div>

                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Image *
                  </label>
                  {formData.imageUrl && (
                    <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-4">
                      <Image
                        src={formData.imageUrl}
                        alt="Preview"
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleUpload}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-2xl focus:outline-none focus:border-secondary text-navy bg-white file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-accent file:text-navy hover:file:bg-accent/90"
                  />
                </div>

                {/* CTA Text */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Texte du bouton (optionnel)
                  </label>
                  <input
                    type="text"
                    value={formData.ctaText}
                    onChange={(e) =>
                      setFormData({ ...formData, ctaText: e.target.value })
                    }
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-2xl focus:outline-none focus:border-secondary text-navy bg-white"
                  />
                </div>

                {/* CTA Link */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Lien du bouton (optionnel)
                  </label>
                  <input
                    type="url"
                    value={formData.ctaLink}
                    onChange={(e) =>
                      setFormData({ ...formData, ctaLink: e.target.value })
                    }
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-2xl focus:outline-none focus:border-secondary text-navy bg-white"
                  />
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 px-6 py-3 bg-accent text-navy font-bold rounded-2xl hover:bg-accent/90 transition-colors disabled:opacity-50"
                  >
                    {loading
                      ? "Sauvegarde..."
                      : editingGift
                        ? "Modifier"
                        : "Créer"}
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-2xl hover:bg-gray-300 transition-colors"
                  >
                    Annuler
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}

        {/* Gifts Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[...Array(24)].map((_, index) => {
            const day = index + 1;
            const gift = gifts.find((g) => g.day === day);

            return (
              <div
                key={day}
                className={`relative aspect-square rounded-3xl overflow-hidden shadow-lg ${
                  gift
                    ? "border-4 border-secondary"
                    : "border-2 border-dashed border-gray-300"
                }`}
              >
                {gift ? (
                  <>
                    <Image
                      src={gift.imageUrl}
                      alt={gift.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent flex flex-col justify-between p-4">
                      <div className="flex justify-between items-start">
                        <span className="bg-accent text-navy font-bold px-3 py-1 rounded-2xl text-sm">
                          {day}
                        </span>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(gift)}
                            className="bg-white/90 hover:bg-white p-2 rounded-xl transition-colors"
                          >
                            <svg
                              className="w-4 h-4 text-navy"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                          </button>
                          <button
                            onClick={() => handleDelete(gift._id)}
                            className="bg-red-500/90 hover:bg-red-500 p-2 rounded-xl transition-colors"
                          >
                            <svg
                              className="w-4 h-4 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm line-clamp-2">
                          {gift.title}
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gray-300 mb-2">
                        {day}
                      </div>
                      <button
                        onClick={() => {
                          setFormData({ ...formData, day: day.toString() });
                          setShowForm(true);
                        }}
                        className="text-secondary hover:text-secondary/80 font-semibold text-sm"
                      >
                        + Ajouter
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}


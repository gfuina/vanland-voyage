"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface Actualite {
  _id?: string;
  titre: string;
  description: string;
  image?: string;
  cta?: {
    texte: string;
    lien: string;
  };
  dateDebut: string;
  dateFin: string;
  active: boolean;
  createdAt?: string;
}

export default function AdminActualitesPage() {
  const [actualites, setActualites] = useState<Actualite[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    loadActualites();
  }, []);

  const loadActualites = async () => {
    try {
      const res = await fetch("/api/actualites");
      const data = await res.json();
      setActualites(data.actualites || []);
    } catch (error) {
      console.error("Erreur chargement:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Supprimer cette actualité ?")) return;

    try {
      await fetch(`/api/actualites/${id}`, { method: "DELETE" });
      loadActualites();
    } catch (error) {
      console.error("Erreur suppression:", error);
    }
  };

  const handleEdit = (id: string) => {
    setEditingId(id);
    setShowModal(true);
  };

  const handleNew = () => {
    setEditingId(null);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingId(null);
    loadActualites();
  };

  const toggleActive = async (id: string, currentActive: boolean) => {
    try {
      await fetch(`/api/actualites/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ active: !currentActive }),
      });
      loadActualites();
    } catch (error) {
      console.error("Erreur toggle active:", error);
    }
  };

  const isActualiteValid = (actualite: Actualite) => {
    const now = new Date();
    const debut = new Date(actualite.dateDebut);
    const fin = new Date(actualite.dateFin);
    return now >= debut && now <= fin;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/administration">
                <svg
                  className="w-6 h-6 text-gray-600 hover:text-secondary transition-colors"
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
              </Link>
              <div>
                <h1 className="text-xl font-bold text-navy">Actualités</h1>
                <p className="text-sm text-gray-600">Gérer les actualités et modals</p>
              </div>
            </div>
            <button
              onClick={handleNew}
              className="px-6 py-2.5 bg-gradient-to-r from-secondary to-blue-500 text-white font-semibold rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              + Nouvelle actualité
            </button>
          </div>
        </div>
      </header>

      {/* Liste */}
      <main className="container mx-auto px-4 lg:px-8 py-8">
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-secondary border-r-transparent" />
          </div>
        ) : actualites.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Aucune actualité pour le moment</p>
          </div>
        ) : (
          <div className="space-y-4">
            {actualites.map((actualite) => {
              const isValid = isActualiteValid(actualite);
              return (
                <motion.div
                  key={actualite._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex gap-6">
                    {/* Image */}
                    {actualite.image && (
                      <div className="relative w-48 h-32 flex-shrink-0 rounded-2xl overflow-hidden">
                        <Image
                          src={actualite.image}
                          alt={actualite.titre}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}

                    {/* Contenu */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-navy mb-2">
                            {actualite.titre}
                          </h3>
                          <p className="text-gray-600 line-clamp-2">
                            {actualite.description}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => toggleActive(actualite._id!, actualite.active)}
                            className={`px-4 py-2 rounded-xl font-semibold transition-colors ${
                              actualite.active
                                ? "bg-green-500 text-white hover:bg-green-600"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                            disabled={!isValid && !actualite.active}
                            title={!isValid && !actualite.active ? "Période non valide" : ""}
                          >
                            {actualite.active ? "✓ Active" : "Activer"}
                          </button>
                        </div>
                      </div>

                      {/* Infos */}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                        <div>
                          <span className="font-semibold">Du:</span>{" "}
                          {new Date(actualite.dateDebut).toLocaleDateString("fr-FR")}
                        </div>
                        <div>
                          <span className="font-semibold">Au:</span>{" "}
                          {new Date(actualite.dateFin).toLocaleDateString("fr-FR")}
                        </div>
                        {actualite.cta && (
                          <div>
                            <span className="font-semibold">CTA:</span> {actualite.cta.texte}
                          </div>
                        )}
                      </div>

                      {/* Status badges */}
                      <div className="flex gap-2">
                        {actualite.active && (
                          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                            Affichée
                          </span>
                        )}
                        {!isValid && (
                          <span className="px-3 py-1 bg-gray-200 text-gray-600 text-xs font-bold rounded-full">
                            Hors période
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => handleEdit(actualite._id!)}
                        className="px-4 py-2 bg-secondary/10 text-secondary font-semibold rounded-xl hover:bg-secondary/20 transition-colors whitespace-nowrap"
                      >
                        Modifier
                      </button>
                      <button
                        onClick={() => handleDelete(actualite._id!)}
                        className="px-4 py-2 bg-red-50 text-red-500 font-semibold rounded-xl hover:bg-red-100 transition-colors"
                      >
                        Supprimer
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </main>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <ActualiteModal
            actualiteId={editingId}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// Modal Component
function ActualiteModal({
  actualiteId,
  onClose,
}: {
  actualiteId: string | null;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState<Partial<Actualite>>({
    titre: "",
    description: "",
    image: "",
    cta: { texte: "", lien: "" },
    dateDebut: "",
    dateFin: "",
    active: false,
  });
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (actualiteId) {
      loadActualite();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actualiteId]);

  const loadActualite = async () => {
    try {
      const res = await fetch(`/api/actualites/${actualiteId}`);
      const data = await res.json();
      // Formater les dates pour les inputs
      data.dateDebut = new Date(data.dateDebut).toISOString().slice(0, 16);
      data.dateFin = new Date(data.dateFin).toISOString().slice(0, 16);
      setFormData(data);
    } catch (error) {
      console.error("Erreur chargement:", error);
    }
  };

  const handleUpload = async (file: File) => {
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);

      const res = await fetch("/api/actualites/upload", {
        method: "POST",
        body: fd,
      });

      const data = await res.json();
      setFormData((prev) => ({ ...prev, image: data.url }));
    } catch (error) {
      console.error("Erreur upload:", error);
      alert("Erreur lors de l'upload");
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async () => {
    if (!formData.titre || !formData.description || !formData.dateDebut || !formData.dateFin) {
      alert("Veuillez remplir tous les champs obligatoires");
      return;
    }

    setSaving(true);
    try {
      const method = actualiteId ? "PUT" : "POST";
      const url = actualiteId
        ? `/api/actualites/${actualiteId}`
        : "/api/actualites";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        onClose();
      } else {
        const error = await res.json();
        alert(error.error || "Erreur lors de la sauvegarde");
      }
    } catch (error) {
      console.error("Erreur sauvegarde:", error);
      alert("Erreur lors de la sauvegarde");
    } finally {
      setSaving(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-navy">
              {actualiteId ? "Modifier" : "Nouvelle"} actualité
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
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
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div>
            <label className="block text-sm font-semibold text-navy mb-2">
              Titre *
            </label>
            <input
              type="text"
              placeholder="Ex: Salon du véhicule de loisirs 2025"
              value={formData.titre || ""}
              onChange={(e) =>
                setFormData({ ...formData, titre: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-secondary text-navy bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-navy mb-2">
              Description *
            </label>
            <textarea
              placeholder="Description de l'actualité..."
              value={formData.description || ""}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-secondary resize-none text-navy bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-navy mb-2">
              Image
            </label>
            {formData.image ? (
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <Image
                  src={formData.image}
                  alt="Preview"
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => setFormData({ ...formData, image: "" })}
                  className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-xl hover:bg-red-600"
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ) : (
              <label className="block w-full aspect-video border-2 border-dashed border-gray-300 rounded-2xl hover:border-secondary transition-colors cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files?.[0]) {
                      handleUpload(e.target.files[0]);
                    }
                  }}
                  className="hidden"
                />
                <div className="flex flex-col items-center justify-center h-full">
                  {uploading ? (
                    <div className="h-8 w-8 animate-spin rounded-full border-4 border-secondary border-r-transparent" />
                  ) : (
                    <>
                      <svg
                        className="w-12 h-12 text-gray-400 mb-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                      <span className="text-gray-500">Cliquer pour uploader</span>
                    </>
                  )}
                </div>
              </label>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">
                Date de début *
              </label>
              <input
                type="datetime-local"
                value={formData.dateDebut || ""}
                onChange={(e) =>
                  setFormData({ ...formData, dateDebut: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-secondary text-navy bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">
                Date de fin *
              </label>
              <input
                type="datetime-local"
                value={formData.dateFin || ""}
                onChange={(e) =>
                  setFormData({ ...formData, dateFin: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-secondary text-navy bg-white"
              />
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-bold text-navy mb-4">
              Call-to-Action (optionnel)
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">
                  Texte du bouton
                </label>
                <input
                  type="text"
                  placeholder="Ex: En savoir plus"
                  value={formData.cta?.texte || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      cta: { ...formData.cta, texte: e.target.value, lien: formData.cta?.lien || "" },
                    })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-secondary text-navy bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">
                  Lien
                </label>
                <input
                  type="url"
                  placeholder="Ex: /contact ou https://..."
                  value={formData.cta?.lien || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      cta: { ...formData.cta, lien: e.target.value, texte: formData.cta?.texte || "" },
                    })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-secondary text-navy bg-white"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="active"
              checked={formData.active || false}
              onChange={(e) =>
                setFormData({ ...formData, active: e.target.checked })
              }
              className="w-5 h-5 text-secondary border-gray-300 rounded focus:ring-secondary"
            />
            <label htmlFor="active" className="text-sm font-semibold text-navy">
              Activer immédiatement (désactivera les autres actualités actives)
            </label>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-gray-100 text-gray-700 font-semibold rounded-2xl hover:bg-gray-200 transition-colors"
          >
            Annuler
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-6 py-2.5 bg-gradient-to-r from-secondary to-blue-500 text-white font-semibold rounded-2xl hover:shadow-lg transition-all disabled:opacity-50"
          >
            {saving ? "Enregistrement..." : "Enregistrer"}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}


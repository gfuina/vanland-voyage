"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface Realisation {
  _id?: string;
  numero: string;
  titre: string;
  type: "amenagement_complet" | "renovation";
  description: string;
  coverImage: string;
  photos: {
    general?: string[];
    cuisine?: string[];
    douche?: string[];
    salon?: string[];
    lit?: string[];
    technique?: string[];
    exterieur?: string[];
  };
  vehicule?: {
    marque?: string;
    modele?: string;
    annee?: number;
    dimensions?: string;
  };
  nouveautes?: string[];
  cuisine?: string;
  douche?: string;
  salon?: string;
  lit?: string;
  autonomie?: string;
  technique?: string;
  partenaires?: string[];
  published: boolean;
  order: number;
}

export default function AdminRealisationsPage() {
  const [realisations, setRealisations] = useState<Realisation[]>([]);
  const [loading, setLoading] = useState(true);
  const [showBuilder, setShowBuilder] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    loadRealisations();
  }, []);

  const loadRealisations = async () => {
    try {
      const res = await fetch("/api/realisations");
      const data = await res.json();
      setRealisations(data);
    } catch (error) {
      console.error("Erreur chargement:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Supprimer cette réalisation ?")) return;

    try {
      await fetch(`/api/realisations/${id}`, { method: "DELETE" });
      loadRealisations();
    } catch (error) {
      console.error("Erreur suppression:", error);
    }
  };

  const handleEdit = (id: string) => {
    setEditingId(id);
    setShowBuilder(true);
  };

  const handleNew = () => {
    setEditingId(null);
    setShowBuilder(true);
  };

  const handleCloseBuilder = () => {
    setShowBuilder(false);
    setEditingId(null);
    loadRealisations();
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
                <h1 className="text-xl font-bold text-navy">Réalisations</h1>
                <p className="text-sm text-gray-600">Gérer les réalisations</p>
              </div>
            </div>
            <button
              onClick={handleNew}
              className="px-6 py-2.5 bg-gradient-to-r from-secondary to-blue-500 text-white font-semibold rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              + Nouvelle réalisation
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
        ) : realisations.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Aucune réalisation pour le moment</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {realisations.map((realisation) => (
              <motion.div
                key={realisation._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={realisation.coverImage}
                    alt={realisation.titre}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 flex gap-2">
                    {realisation.published ? (
                      <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                        Publié
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-gray-500 text-white text-xs font-bold rounded-full">
                        Brouillon
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-secondary font-bold mb-1">
                    {realisation.numero}
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">
                    {realisation.titre}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">
                    {realisation.type === "amenagement_complet"
                      ? "Aménagement complet"
                      : "Rénovation"}
                  </p>
                  <p className="text-sm text-gray-500 line-clamp-2 mb-4">
                    {realisation.description}
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(realisation._id!)}
                      className="flex-1 px-4 py-2 bg-secondary/10 text-secondary font-semibold rounded-xl hover:bg-secondary/20 transition-colors"
                    >
                      Modifier
                    </button>
                    <button
                      onClick={() => handleDelete(realisation._id!)}
                      className="px-4 py-2 bg-red-50 text-red-500 font-semibold rounded-xl hover:bg-red-100 transition-colors"
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </main>

      {/* Builder Modal */}
      <AnimatePresence>
        {showBuilder && (
          <BuilderModal
            realisationId={editingId}
            onClose={handleCloseBuilder}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// Builder Modal Component
function BuilderModal({
  realisationId,
  onClose,
}: {
  realisationId: string | null;
  onClose: () => void;
}) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<Realisation>>({
    type: "amenagement_complet",
    photos: {},
    published: false,
    order: 0,
    nouveautes: [],
    partenaires: [],
    coverImage: "",
  });
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (realisationId) {
      loadRealisation();
    }
  }, [realisationId]);

  const loadRealisation = async () => {
    try {
      const res = await fetch(`/api/realisations/${realisationId}`);
      const data = await res.json();
      setFormData(data);
    } catch (error) {
      console.error("Erreur chargement:", error);
    }
  };

  const handleUpload = async (
    file: File,
    category?: keyof Realisation["photos"]
  ) => {
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);

      const res = await fetch("/api/realisations/upload", {
        method: "POST",
        body: fd,
      });

      const data = await res.json();
      console.log("Upload response:", data);

      if (category) {
        setFormData((prev) => ({
          ...prev,
          photos: {
            ...prev.photos,
            [category]: [...(prev.photos?.[category] || []), data.url],
          },
        }));
      } else {
        console.log("Setting coverImage to:", data.url);
        setFormData((prev) => {
          const newData = { ...prev, coverImage: data.url };
          console.log("New formData:", newData);
          return newData;
        });
      }
    } catch (error) {
      console.error("Erreur upload:", error);
      alert("Erreur lors de l'upload");
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const method = realisationId ? "PUT" : "POST";
      const url = realisationId
        ? `/api/realisations/${realisationId}`
        : "/api/realisations";

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

  const totalSteps = 5; // Même nombre d'étapes pour aménagements et rénovations

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
        className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-navy">
              {realisationId ? "Modifier" : "Nouvelle"} réalisation
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
          {/* Progress */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div
                key={i}
                className={`flex-1 h-2 rounded-full transition-colors ${
                  i + 1 <= step ? "bg-secondary" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {step === 1 && (
            <Step1
              formData={formData}
              setFormData={setFormData}
              onUpload={handleUpload}
              uploading={uploading}
            />
          )}
          {step === 2 && <Step2 formData={formData} setFormData={setFormData} />}
          {step === 3 && formData.type === "amenagement_complet" && (
            <Step3Amenagement
              formData={formData}
              setFormData={setFormData}
              onUpload={handleUpload}
              uploading={uploading}
            />
          )}
          {step === 3 && formData.type === "renovation" && (
            <Step3Renovation formData={formData} setFormData={setFormData} />
          )}
          {step === 4 && (
            <Step4Photos
              formData={formData}
              setFormData={setFormData}
              onUpload={handleUpload}
              uploading={uploading}
            />
          )}
          {step === 5 && (
            <Step5Final formData={formData} setFormData={setFormData} />
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 flex items-center justify-between">
          <button
            onClick={() => setStep((s) => Math.max(1, s - 1))}
            disabled={step === 1}
            className="px-6 py-2.5 bg-gray-100 text-gray-700 font-semibold rounded-2xl hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Précédent
          </button>
          <div className="text-sm text-gray-500">
            Étape {step} / {totalSteps}
          </div>
          {step < totalSteps ? (
            <button
              onClick={() => setStep((s) => s + 1)}
              className="px-6 py-2.5 bg-gradient-to-r from-secondary to-blue-500 text-white font-semibold rounded-2xl hover:shadow-lg transition-all"
            >
              Suivant
            </button>
          ) : (
            <button
              onClick={handleSave}
              disabled={saving}
              className="px-6 py-2.5 bg-gradient-to-r from-secondary to-blue-500 text-white font-semibold rounded-2xl hover:shadow-lg transition-all disabled:opacity-50"
            >
              {saving ? "Enregistrement..." : "Enregistrer"}
            </button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

// Step 1: Infos de base
function Step1({
  formData,
  setFormData,
  onUpload,
  uploading,
}: {
  formData: Partial<Realisation>;
  setFormData: React.Dispatch<React.SetStateAction<Partial<Realisation>>>;
  onUpload: (file: File, category?: keyof Realisation["photos"]) => Promise<void>;
  uploading: boolean;
}) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-navy mb-2">
          Type de réalisation *
        </label>
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() =>
              setFormData({ ...formData, type: "amenagement_complet" })
            }
            className={`p-4 rounded-2xl border-2 transition-all ${
              formData.type === "amenagement_complet"
                ? "border-secondary bg-secondary/10"
                : "border-gray-200 hover:border-secondary/50"
            }`}
          >
            <div className="font-bold text-navy">Aménagement complet</div>
            <div className="text-sm text-gray-600">Nouveau fourgon aménagé</div>
          </button>
          <button
            type="button"
            onClick={() => setFormData({ ...formData, type: "renovation" })}
            className={`p-4 rounded-2xl border-2 transition-all ${
              formData.type === "renovation"
                ? "border-secondary bg-secondary/10"
                : "border-gray-200 hover:border-secondary/50"
            }`}
          >
            <div className="font-bold text-navy">Rénovation</div>
            <div className="text-sm text-gray-600">Amélioration / Réparation</div>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-navy mb-2">
            Numéro *
          </label>
          <input
            type="text"
            placeholder="Ex: #5"
            value={formData.numero || ""}
            onChange={(e) =>
              setFormData({ ...formData, numero: e.target.value })
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-secondary text-navy bg-white"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-navy mb-2">
            Ordre d'affichage
          </label>
          <input
            type="number"
            value={formData.order || 0}
            onChange={(e) =>
              setFormData({ ...formData, order: parseInt(e.target.value) })
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-secondary text-navy bg-white"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-navy mb-2">
          Titre *
        </label>
        <input
          type="text"
          placeholder="Ex: FIAT DUCATO H2L3 - 2025"
          value={formData.titre || ""}
          onChange={(e) => setFormData({ ...formData, titre: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-secondary text-navy bg-white"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-navy mb-2">
          Description générale *
        </label>
        <textarea
          placeholder="Introduction / description principale"
          value={formData.description || ""}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-secondary resize-none text-navy bg-white"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-navy mb-2">
          Image de couverture *
        </label>
        {formData.coverImage ? (
          <div className="relative aspect-video rounded-2xl overflow-hidden">
            <Image
              src={formData.coverImage}
              alt="Cover"
              fill
              className="object-cover"
            />
            <button
              onClick={() => setFormData({ ...formData, coverImage: "" })}
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
                  onUpload(e.target.files[0]);
                  e.target.value = ""; // Reset input
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

      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="published"
          checked={formData.published || false}
          onChange={(e) =>
            setFormData({ ...formData, published: e.target.checked })
          }
          className="w-5 h-5 text-secondary border-gray-300 rounded focus:ring-secondary"
        />
        <label htmlFor="published" className="text-sm font-semibold text-navy">
          Publier immédiatement
        </label>
      </div>
    </div>
  );
}

// Step 2: Détails véhicule
function Step2({
  formData,
  setFormData,
}: {
  formData: Partial<Realisation>;
  setFormData: React.Dispatch<React.SetStateAction<Partial<Realisation>>>;
}) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-navy">Détails du véhicule</h3>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-navy mb-2">
            Marque
          </label>
          <input
            type="text"
            placeholder="Ex: Fiat"
            value={formData.vehicule?.marque || ""}
            onChange={(e) =>
              setFormData({
                ...formData,
                vehicule: { ...formData.vehicule, marque: e.target.value },
              })
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-secondary text-navy bg-white"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-navy mb-2">
            Modèle
          </label>
          <input
            type="text"
            placeholder="Ex: Ducato"
            value={formData.vehicule?.modele || ""}
            onChange={(e) =>
              setFormData({
                ...formData,
                vehicule: { ...formData.vehicule, modele: e.target.value },
              })
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-secondary text-navy bg-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-navy mb-2">
            Année
          </label>
          <input
            type="number"
            placeholder="2025"
            value={formData.vehicule?.annee || ""}
            onChange={(e) =>
              setFormData({
                ...formData,
                vehicule: {
                  ...formData.vehicule,
                  annee: parseInt(e.target.value),
                },
              })
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-secondary text-navy bg-white"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-navy mb-2">
            Dimensions
          </label>
          <input
            type="text"
            placeholder="Ex: H2L3"
            value={formData.vehicule?.dimensions || ""}
            onChange={(e) =>
              setFormData({
                ...formData,
                vehicule: { ...formData.vehicule, dimensions: e.target.value },
              })
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-secondary text-navy bg-white"
          />
        </div>
      </div>
    </div>
  );
}

// Step 3 pour aménagements complets
function Step3Amenagement({
  formData,
  setFormData,
  onUpload,
  uploading,
}: {
  formData: Partial<Realisation>;
  setFormData: React.Dispatch<React.SetStateAction<Partial<Realisation>>>;
  onUpload: (file: File, category?: keyof Realisation["photos"]) => Promise<void>;
  uploading: boolean;
}) {
  const [newNouveau, setNewNouveau] = useState("");

  const addNouveau = () => {
    if (newNouveau.trim()) {
      setFormData({
        ...formData,
        nouveautes: [...(formData.nouveautes || []), newNouveau.trim()],
      });
      setNewNouveau("");
    }
  };

  const removeNouveau = (index: number) => {
    setFormData({
      ...formData,
      nouveautes: formData.nouveautes?.filter((_: string, i: number) => i !== index),
    });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-navy">Sections de l'aménagement</h3>
      <p className="text-sm text-gray-600">
        Toutes les sections sont optionnelles. Remplissez uniquement celles qui sont
        pertinentes.
      </p>

      <div>
        <label className="block text-sm font-semibold text-navy mb-2">
          Nouveautés
        </label>
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            value={newNouveau}
            onChange={(e) => setNewNouveau(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && addNouveau()}
            placeholder="Ajouter une nouveauté..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:border-secondary text-navy bg-white"
          />
          <button
            type="button"
            onClick={addNouveau}
            className="px-4 py-2 bg-secondary text-white rounded-xl hover:bg-secondary/90"
          >
            Ajouter
          </button>
        </div>
        {formData.nouveautes?.map((item: string, i: number) => (
          <div
            key={i}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-xl mb-2"
          >
            <span className="text-sm">{item}</span>
            <button
              type="button"
              onClick={() => removeNouveau(i)}
              className="text-red-500 hover:text-red-600"
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
        ))}
      </div>

      <div>
        <label className="block text-sm font-semibold text-navy mb-2">
          Cuisine
        </label>
        <textarea
          placeholder="Description du bloc cuisine..."
          value={formData.cuisine || ""}
          onChange={(e) => setFormData({ ...formData, cuisine: e.target.value })}
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-secondary resize-none text-navy bg-white"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-navy mb-2">
          Douche
        </label>
        <textarea
          placeholder="Description de la partie douche..."
          value={formData.douche || ""}
          onChange={(e) => setFormData({ ...formData, douche: e.target.value })}
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-secondary resize-none text-navy bg-white"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-navy mb-2">
          Salon
        </label>
        <textarea
          placeholder="Description de la partie salon..."
          value={formData.salon || ""}
          onChange={(e) => setFormData({ ...formData, salon: e.target.value })}
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-secondary resize-none text-navy bg-white"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-navy mb-2">
          Lit / Couchage
        </label>
        <textarea
          placeholder="Description du lit..."
          value={formData.lit || ""}
          onChange={(e) => setFormData({ ...formData, lit: e.target.value })}
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-secondary resize-none text-navy bg-white"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-navy mb-2">
          Autonomie
        </label>
        <textarea
          placeholder="Description du système d'autonomie (électricité, eau, gaz...)"
          value={formData.autonomie || ""}
          onChange={(e) => setFormData({ ...formData, autonomie: e.target.value })}
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-secondary resize-none text-navy bg-white"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-navy mb-2">
          Technique
        </label>
        <textarea
          placeholder="Détails techniques supplémentaires..."
          value={formData.technique || ""}
          onChange={(e) => setFormData({ ...formData, technique: e.target.value })}
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-secondary resize-none text-navy bg-white"
        />
      </div>
    </div>
  );
}

// Step 3 pour rénovations
function Step3Renovation({
  formData,
  setFormData,
}: {
  formData: Partial<Realisation>;
  setFormData: React.Dispatch<React.SetStateAction<Partial<Realisation>>>;
}) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-navy">Détails de la rénovation</h3>
      <p className="text-sm text-gray-600">
        Décrivez les travaux effectués, les problèmes résolus, etc.
      </p>

      <div>
        <label className="block text-sm font-semibold text-navy mb-2">
          Technique
        </label>
        <textarea
          placeholder="Détails techniques de la rénovation..."
          value={formData.technique || ""}
          onChange={(e) => setFormData({ ...formData, technique: e.target.value })}
          rows={8}
          className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-secondary resize-none text-navy bg-white"
        />
      </div>
    </div>
  );
}

// Step 4: Photos (aménagements uniquement)
function Step4Photos({
  formData,
  setFormData,
  onUpload,
  uploading,
}: {
  formData: Partial<Realisation>;
  setFormData: React.Dispatch<React.SetStateAction<Partial<Realisation>>>;
  onUpload: (file: File, category?: keyof Realisation["photos"]) => Promise<void>;
  uploading: boolean;
}) {
  const categories = [
    { key: "general", label: "Générales" },
    { key: "cuisine", label: "Cuisine" },
    { key: "douche", label: "Douche" },
    { key: "salon", label: "Salon" },
    { key: "lit", label: "Lit" },
    { key: "technique", label: "Technique" },
    { key: "exterieur", label: "Extérieur" },
  ];

  const removePhoto = (category: string, index: number) => {
    setFormData({
      ...formData,
      photos: {
        ...formData.photos,
        [category]: (formData.photos as Record<string, string[]>)?.[category]?.filter(
          (_: string, i: number) => i !== index
        ),
      },
    });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-navy">Photos par catégorie</h3>
      <p className="text-sm text-gray-600">
        Ajoutez des photos pour chaque section (optionnel)
      </p>

      {categories.map((cat) => (
        <div key={cat.key}>
          <label className="block text-sm font-semibold text-navy mb-2">
            {cat.label}
          </label>
          <div className="grid grid-cols-3 gap-4">
            {formData.photos?.[cat.key as keyof Realisation["photos"]]?.map((url: string, i: number) => (
              <div key={i} className="relative aspect-video rounded-xl overflow-hidden">
                <Image src={url} alt="" fill className="object-cover" />
                <button
                  onClick={() => removePhoto(cat.key, i)}
                  className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  <svg
                    className="w-4 h-4"
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
            ))}
            <label className="aspect-video border-2 border-dashed border-gray-300 rounded-xl hover:border-secondary transition-colors cursor-pointer flex items-center justify-center">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files?.[0])
                    onUpload(e.target.files[0], cat.key as keyof Realisation["photos"]);
                }}
                className="hidden"
              />
              {uploading ? (
                <div className="h-6 w-6 animate-spin rounded-full border-4 border-secondary border-r-transparent" />
              ) : (
                <svg
                  className="w-8 h-8 text-gray-400"
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
              )}
            </label>
          </div>
        </div>
      ))}
    </div>
  );
}

// Step 5: Final (partenaires)
function Step5Final({
  formData,
  setFormData,
}: {
  formData: Partial<Realisation>;
  setFormData: React.Dispatch<React.SetStateAction<Partial<Realisation>>>;
}) {
  const [newPartenaire, setNewPartenaire] = useState("");

  const addPartenaire = () => {
    if (newPartenaire.trim()) {
      setFormData({
        ...formData,
        partenaires: [...(formData.partenaires || []), newPartenaire.trim()],
      });
      setNewPartenaire("");
    }
  };

  const removePartenaire = (index: number) => {
    setFormData({
      ...formData,
      partenaires: formData.partenaires?.filter((_: string, i: number) => i !== index),
    });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-navy">Finalisation</h3>

      <div>
        <label className="block text-sm font-semibold text-navy mb-2">
          Partenaires
        </label>
        <p className="text-sm text-gray-600 mb-3">
          Listez les partenaires qui ont contribué au projet
        </p>
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            value={newPartenaire}
            onChange={(e) => setNewPartenaire(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && addPartenaire()}
            placeholder="Nom du partenaire..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:border-secondary text-navy bg-white"
          />
          <button
            type="button"
            onClick={addPartenaire}
            className="px-4 py-2 bg-secondary text-white rounded-xl hover:bg-secondary/90"
          >
            Ajouter
          </button>
        </div>
        {formData.partenaires?.map((item: string, i: number) => (
          <div
            key={i}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-xl mb-2"
          >
            <span className="text-sm">{item}</span>
            <button
              type="button"
              onClick={() => removePartenaire(i)}
              className="text-red-500 hover:text-red-600"
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
        ))}
      </div>

      <div className="bg-accent/10 rounded-2xl p-6">
        <h4 className="font-bold text-navy mb-2">✓ Récapitulatif</h4>
        <ul className="space-y-1 text-sm text-gray-700">
          <li>• {formData.titre}</li>
          <li>
            • Type :{" "}
            {formData.type === "amenagement_complet"
              ? "Aménagement complet"
              : "Rénovation"}
          </li>
          <li>• Numéro : {formData.numero}</li>
          <li>
            • Statut : {formData.published ? "📗 Publié" : "📘 Brouillon"}
          </li>
        </ul>
      </div>
    </div>
  );
}


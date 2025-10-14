"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

interface Partner {
  _id: string;
  name: string;
  logo: string;
  description: string;
  subtitle: string;
  category?: string;
  website?: string;
  order: number;
  published: boolean;
}

export default function PartnersAdminPage() {
  const router = useRouter();
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingPartner, setEditingPartner] = useState<Partner | null>(null);
  const [uploadingLogo, setUploadingLogo] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    logo: "",
    description: "",
    subtitle: "",
    category: "",
    website: "",
    order: 0,
    published: true,
  });

  useEffect(() => {
    fetchPartners();
  }, []);

  const fetchPartners = async () => {
    try {
      const response = await fetch("/api/partners");
      const data = await response.json();
      if (data.success) {
        setPartners(data.partners);
      }
    } catch (error) {
      console.error("Erreur lors du chargement des partenaires:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/admin", { method: "DELETE" });
      router.push("/admin-login");
    } catch (error) {
      console.error("Erreur de déconnexion:", error);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingLogo(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/partners/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setFormData(prev => ({ ...prev, logo: data.url }));
      }
    } catch (error) {
      console.error("Erreur lors de l'upload:", error);
      alert("Erreur lors de l'upload du logo");
    } finally {
      setUploadingLogo(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const url = editingPartner
        ? `/api/partners/${editingPartner._id}`
        : "/api/partners";
      
      const method = editingPartner ? "PATCH" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        await fetchPartners();
        resetForm();
      }
    } catch (error) {
      console.error("Erreur lors de la sauvegarde:", error);
      alert("Erreur lors de la sauvegarde");
    }
  };

  const handleEdit = (partner: Partner) => {
    setEditingPartner(partner);
    setFormData({
      name: partner.name,
      logo: partner.logo,
      description: partner.description,
      subtitle: partner.subtitle,
      category: partner.category || "",
      website: partner.website || "",
      order: partner.order,
      published: partner.published,
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer ce partenaire ?")) return;

    try {
      const response = await fetch(`/api/partners/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        await fetchPartners();
      }
    } catch (error) {
      console.error("Erreur lors de la suppression:", error);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      logo: "",
      description: "",
      subtitle: "",
      category: "",
      website: "",
      order: 0,
      published: true,
    });
    setEditingPartner(null);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
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
                <h1 className="text-xl font-bold text-navy">Partenaires</h1>
                <p className="text-sm text-gray-600">Gestion des partenaires</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="/administration"
                className="px-4 py-2 text-gray-700 hover:text-secondary transition-colors"
              >
                ← Retour
              </a>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white font-semibold rounded-2xl hover:bg-red-600 transition-colors"
              >
                Déconnexion
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 lg:px-8 py-8">
        {/* Bouton ajouter */}
        <div className="mb-6">
          <button
            onClick={() => {
              resetForm();
              setShowForm(true);
            }}
            className="px-6 py-3 bg-accent text-navy font-bold rounded-2xl hover:bg-accent/90 transition-colors"
          >
            + Ajouter un partenaire
          </button>
        </div>

        {/* Formulaire */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 mb-8"
          >
            <h2 className="text-2xl font-bold text-navy mb-6">
              {editingPartner ? "Modifier" : "Ajouter"} un partenaire
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">
                    Nom <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-secondary focus:outline-none text-navy"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-secondary focus:outline-none text-navy"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy mb-2">
                  Sous-titre <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.subtitle}
                  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-secondary focus:outline-none text-navy"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">
                    Catégorie
                  </label>
                  <input
                    type="text"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-secondary focus:outline-none text-navy"
                    placeholder="Ex: Électricité, Isolation..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">
                    Site web
                  </label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-secondary focus:outline-none text-navy"
                    placeholder="https://..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy mb-2">
                  Logo <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-4">
                  {formData.logo && (
                    <div className="relative w-32 h-32 bg-gray-100 rounded-2xl p-2">
                      <Image
                        src={formData.logo}
                        alt="Preview"
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="flex-1"
                    disabled={uploadingLogo}
                  />
                  {uploadingLogo && <span className="text-secondary">Upload en cours...</span>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">
                    Ordre d'affichage
                  </label>
                  <input
                    type="number"
                    value={formData.order}
                    onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-secondary focus:outline-none text-navy"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-3 cursor-pointer mt-8">
                    <input
                      type="checkbox"
                      checked={formData.published}
                      onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                      className="w-5 h-5 text-secondary border-gray-300 rounded focus:ring-secondary"
                    />
                    <span className="text-sm font-semibold text-navy">Publié</span>
                  </label>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="px-6 py-3 bg-secondary text-white font-bold rounded-2xl hover:bg-secondary/90 transition-colors"
                >
                  {editingPartner ? "Mettre à jour" : "Ajouter"}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-3 bg-gray-200 text-gray-700 font-bold rounded-2xl hover:bg-gray-300 transition-colors"
                >
                  Annuler
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Liste des partenaires */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <div className="col-span-full text-center py-8 text-gray-500">Chargement...</div>
          ) : partners.length === 0 ? (
            <div className="col-span-full bg-white rounded-3xl p-12 text-center border-2 border-gray-100">
              <p className="text-gray-500">Aucun partenaire pour le moment</p>
            </div>
          ) : (
            partners.map((partner) => (
              <motion.div
                key={partner._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl p-6 shadow-lg border-2 border-gray-100"
              >
                <div className="relative h-32 mb-4 bg-gray-50 rounded-2xl flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                <h3 className="text-lg font-bold text-navy mb-2">{partner.name}</h3>
                <p className="text-secondary font-semibold mb-1">{partner.description}</p>
                <p className="text-sm text-gray-600 mb-3">{partner.subtitle}</p>

                {partner.category && (
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full mb-3">
                    {partner.category}
                  </span>
                )}

                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => handleEdit(partner)}
                    className="flex-1 px-4 py-2 bg-secondary text-white font-semibold rounded-2xl hover:bg-secondary/90 transition-colors"
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() => handleDelete(partner._id)}
                    className="px-4 py-2 bg-red-100 text-red-800 font-semibold rounded-2xl hover:bg-red-200 transition-colors"
                  >
                    🗑️
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}


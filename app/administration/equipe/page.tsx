"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

interface TeamMember {
  _id: string;
  name: string;
  role: string;
  description: string;
  photo: string;
  funPhoto: string;
  type: "team" | "external";
  order: number;
  published: boolean;
}

export default function TeamAdminPage() {
  const router = useRouter();
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [uploadingPhoto, setUploadingPhoto] = useState(false);
  const [uploadingFunPhoto, setUploadingFunPhoto] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    description: "",
    photo: "",
    funPhoto: "",
    type: "team" as "team" | "external",
    order: 0,
    published: true,
  });

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = async () => {
    try {
      const response = await fetch("/api/team");
      const data = await response.json();
      if (data.success) {
        setTeam(data.team);
      }
    } catch (error) {
      console.error("Erreur lors du chargement de l'équipe:", error);
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

  const handleFileUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "photo" | "funPhoto"
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (field === "photo") setUploadingPhoto(true);
    else setUploadingFunPhoto(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/team/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setFormData((prev) => ({ ...prev, [field]: data.url }));
      }
    } catch (error) {
      console.error("Erreur lors de l'upload:", error);
      alert("Erreur lors de l'upload de la photo");
    } finally {
      if (field === "photo") setUploadingPhoto(false);
      else setUploadingFunPhoto(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const url = editingMember
        ? `/api/team/${editingMember._id}`
        : "/api/team";

      const method = editingMember ? "PATCH" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        await fetchTeam();
        resetForm();
      }
    } catch (error) {
      console.error("Erreur lors de la sauvegarde:", error);
      alert("Erreur lors de la sauvegarde");
    }
  };

  const handleEdit = (member: TeamMember) => {
    setEditingMember(member);
    setFormData({
      name: member.name,
      role: member.role,
      description: member.description,
      photo: member.photo,
      funPhoto: member.funPhoto,
      type: member.type,
      order: member.order,
      published: member.published,
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer ce membre ?")) return;

    try {
      const response = await fetch(`/api/team/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        await fetchTeam();
      }
    } catch (error) {
      console.error("Erreur lors de la suppression:", error);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      role: "",
      description: "",
      photo: "",
      funPhoto: "",
      type: "team",
      order: 0,
      published: true,
    });
    setEditingMember(null);
    setShowForm(false);
  };

  const teamMembers = team.filter((m) => m.type === "team");
  const externalMembers = team.filter((m) => m.type === "external");

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
                <h1 className="text-xl font-bold text-navy">Équipe</h1>
                <p className="text-sm text-gray-600">Gestion de l'équipe</p>
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
            + Ajouter un membre
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
              {editingMember ? "Modifier" : "Ajouter"} un membre
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
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-secondary focus:outline-none text-navy"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">
                    Rôle <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-secondary focus:outline-none text-navy"
                    placeholder="Ex: Co-fondatrice, Menuisier..."
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy mb-2">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-secondary focus:outline-none text-navy"
                  rows={4}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy mb-2">
                  Type <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.type}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      type: e.target.value as "team" | "external",
                    })
                  }
                  className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-secondary focus:outline-none text-navy"
                  required
                >
                  <option value="team">Équipe (interne)</option>
                  <option value="external">Partenaire externe</option>
                </select>
                <p className="text-xs text-gray-500 mt-1">
                  L'équipe = membres permanents | Partenaires externes =
                  collaborateurs occasionnels
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">
                    Photo normale <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-4">
                    {formData.photo && (
                      <div className="relative w-32 h-32 bg-gray-100 rounded-2xl overflow-hidden">
                        <Image
                          src={formData.photo}
                          alt="Preview"
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e, "photo")}
                      className="w-full"
                      disabled={uploadingPhoto}
                    />
                    {uploadingPhoto && (
                      <span className="text-secondary">Upload en cours...</span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">
                    Photo fun <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-4">
                    {formData.funPhoto && (
                      <div className="relative w-32 h-32 bg-gray-100 rounded-2xl overflow-hidden">
                        <Image
                          src={formData.funPhoto}
                          alt="Preview fun"
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e, "funPhoto")}
                      className="w-full"
                      disabled={uploadingFunPhoto}
                    />
                    {uploadingFunPhoto && (
                      <span className="text-secondary">Upload en cours...</span>
                    )}
                  </div>
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
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        order: parseInt(e.target.value) || 0,
                      })
                    }
                    className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-secondary focus:outline-none text-navy"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-3 cursor-pointer mt-8">
                    <input
                      type="checkbox"
                      checked={formData.published}
                      onChange={(e) =>
                        setFormData({ ...formData, published: e.target.checked })
                      }
                      className="w-5 h-5 text-secondary border-gray-300 rounded focus:ring-secondary"
                    />
                    <span className="text-sm font-semibold text-navy">
                      Publié
                    </span>
                  </label>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="px-6 py-3 bg-secondary text-white font-bold rounded-2xl hover:bg-secondary/90 transition-colors"
                >
                  {editingMember ? "Mettre à jour" : "Ajouter"}
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

        {/* Liste de l'équipe */}
        <div className="space-y-8">
          {/* Équipe interne */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              Équipe permanente
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {loading ? (
                <div className="col-span-full text-center py-8 text-gray-500">
                  Chargement...
                </div>
              ) : teamMembers.length === 0 ? (
                <div className="col-span-full bg-white rounded-3xl p-12 text-center border-2 border-gray-100">
                  <p className="text-gray-500">Aucun membre pour le moment</p>
                </div>
              ) : (
                teamMembers.map((member) => (
                  <motion.div
                    key={member._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-3xl p-6 shadow-lg border-2 border-gray-100"
                  >
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="relative h-32 bg-gray-50 rounded-2xl overflow-hidden">
                        <Image
                          src={member.photo}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute bottom-1 left-1 bg-white/90 px-2 py-0.5 rounded text-xs">
                          Normale
                        </div>
                      </div>
                      <div className="relative h-32 bg-gray-50 rounded-2xl overflow-hidden">
                        <Image
                          src={member.funPhoto}
                          alt={`${member.name} fun`}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute bottom-1 left-1 bg-white/90 px-2 py-0.5 rounded text-xs">
                          Fun
                        </div>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-navy mb-1">
                      {member.name}
                    </h3>
                    <p className="text-secondary font-semibold mb-2">
                      {member.role}
                    </p>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {member.description}
                    </p>

                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(member)}
                        className="flex-1 px-4 py-2 bg-secondary text-white font-semibold rounded-2xl hover:bg-secondary/90 transition-colors"
                      >
                        Modifier
                      </button>
                      <button
                        onClick={() => handleDelete(member._id)}
                        className="px-4 py-2 bg-red-100 text-red-800 font-semibold rounded-2xl hover:bg-red-200 transition-colors"
                      >
                        🗑️
                      </button>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>

          {/* Partenaires externes */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              Partenaires externes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {externalMembers.length === 0 ? (
                <div className="col-span-full bg-white rounded-3xl p-12 text-center border-2 border-gray-100">
                  <p className="text-gray-500">
                    Aucun partenaire externe pour le moment
                  </p>
                </div>
              ) : (
                externalMembers.map((member) => (
                  <motion.div
                    key={member._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-3xl p-6 shadow-lg border-2 border-gray-100"
                  >
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="relative h-32 bg-gray-50 rounded-2xl overflow-hidden">
                        <Image
                          src={member.photo}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute bottom-1 left-1 bg-white/90 px-2 py-0.5 rounded text-xs">
                          Normale
                        </div>
                      </div>
                      <div className="relative h-32 bg-gray-50 rounded-2xl overflow-hidden">
                        <Image
                          src={member.funPhoto}
                          alt={`${member.name} fun`}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute bottom-1 left-1 bg-white/90 px-2 py-0.5 rounded text-xs">
                          Fun
                        </div>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-navy mb-1">
                      {member.name}
                    </h3>
                    <p className="text-secondary font-semibold mb-2">
                      {member.role}
                    </p>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {member.description}
                    </p>

                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(member)}
                        className="flex-1 px-4 py-2 bg-secondary text-white font-semibold rounded-2xl hover:bg-secondary/90 transition-colors"
                      >
                        Modifier
                      </button>
                      <button
                        onClick={() => handleDelete(member._id)}
                        className="px-4 py-2 bg-red-100 text-red-800 font-semibold rounded-2xl hover:bg-red-200 transition-colors"
                      >
                        🗑️
                      </button>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


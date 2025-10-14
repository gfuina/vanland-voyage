"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

interface Contact {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
  status: "nouveau" | "traité" | "archivé";
  createdAt: string;
}

export default function ContactsAdminPage() {
  const router = useRouter();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [filter, setFilter] = useState<"tous" | "nouveau" | "traité" | "archivé">("tous");

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch("/api/contact");
      const data = await response.json();
      if (data.success) {
        setContacts(data.contacts);
      }
    } catch (error) {
      console.error("Erreur lors du chargement des contacts:", error);
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

  const updateContactStatus = async (id: string, status: string) => {
    try {
      const response = await fetch(`/api/contacts/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        setContacts(contacts.map(c => 
          c._id === id ? { ...c, status: status as Contact["status"] } : c
        ));
        if (selectedContact?._id === id) {
          setSelectedContact({ ...selectedContact, status: status as Contact["status"] });
        }
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour:", error);
    }
  };

  const deleteContact = async (id: string) => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer cette demande ?")) return;

    try {
      const response = await fetch(`/api/contacts/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setContacts(contacts.filter(c => c._id !== id));
        setSelectedContact(null);
      }
    } catch (error) {
      console.error("Erreur lors de la suppression:", error);
    }
  };

  const filteredContacts = contacts.filter(c => 
    filter === "tous" ? true : c.status === filter
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "nouveau": return "bg-blue-100 text-blue-800";
      case "traité": return "bg-green-100 text-green-800";
      case "archivé": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "nouveau": return "Nouveau";
      case "traité": return "Traité";
      case "archivé": return "Archivé";
      default: return status;
    }
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
                <h1 className="text-xl font-bold text-navy">Demandes de contact</h1>
                <p className="text-sm text-gray-600">Gestion des contacts</p>
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
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Liste des contacts */}
          <div className="lg:col-span-1">
            {/* Filtres */}
            <div className="bg-white rounded-3xl p-4 mb-6 shadow-sm border-2 border-gray-100">
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => setFilter("tous")}
                  className={`px-4 py-2 rounded-2xl text-sm font-semibold transition-colors ${
                    filter === "tous"
                      ? "bg-navy text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Tous ({contacts.length})
                </button>
                <button
                  onClick={() => setFilter("nouveau")}
                  className={`px-4 py-2 rounded-2xl text-sm font-semibold transition-colors ${
                    filter === "nouveau"
                      ? "bg-navy text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Nouveaux ({contacts.filter(c => c.status === "nouveau").length})
                </button>
                <button
                  onClick={() => setFilter("traité")}
                  className={`px-4 py-2 rounded-2xl text-sm font-semibold transition-colors ${
                    filter === "traité"
                      ? "bg-navy text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Traités ({contacts.filter(c => c.status === "traité").length})
                </button>
              </div>
            </div>

            {/* Liste */}
            <div className="space-y-3">
              {loading ? (
                <div className="text-center py-8 text-gray-500">Chargement...</div>
              ) : filteredContacts.length === 0 ? (
                <div className="bg-white rounded-3xl p-8 text-center border-2 border-gray-100">
                  <p className="text-gray-500">Aucune demande pour ce filtre</p>
                </div>
              ) : (
                filteredContacts.map((contact) => (
                  <motion.div
                    key={contact._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`bg-white rounded-2xl p-4 cursor-pointer transition-all border-2 ${
                      selectedContact?._id === contact._id
                        ? "border-secondary shadow-md"
                        : "border-gray-100 hover:border-gray-300"
                    }`}
                    onClick={() => setSelectedContact(contact)}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-bold text-navy">
                          {contact.firstName} {contact.lastName}
                        </h3>
                        <p className="text-sm text-gray-600">{contact.service}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(contact.status)}`}>
                        {getStatusLabel(contact.status)}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">
                      {new Date(contact.createdAt).toLocaleDateString("fr-FR", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </motion.div>
                ))
              )}
            </div>
          </div>

          {/* Détails du contact */}
          <div className="lg:col-span-2">
            {selectedContact ? (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-navy mb-2">
                      {selectedContact.firstName} {selectedContact.lastName}
                    </h2>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                      <a href={`mailto:${selectedContact.email}`} className="hover:text-secondary">
                        📧 {selectedContact.email}
                      </a>
                      {selectedContact.phone && (
                        <a href={`tel:${selectedContact.phone}`} className="hover:text-secondary">
                          📞 {selectedContact.phone}
                        </a>
                      )}
                    </div>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(selectedContact.status)}`}>
                    {getStatusLabel(selectedContact.status)}
                  </span>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 mb-2">Type de demande</h3>
                    <p className="text-navy font-medium">{selectedContact.service}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 mb-2">Message</h3>
                    <div className="bg-gray-50 rounded-2xl p-4 border-l-4 border-secondary">
                      <p className="text-navy whitespace-pre-wrap">{selectedContact.message}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 mb-2">Date de réception</h3>
                    <p className="text-navy">
                      {new Date(selectedContact.createdAt).toLocaleDateString("fr-FR", {
                        weekday: "long",
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-sm font-semibold text-gray-500 mb-3">Actions</h3>
                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={() => updateContactStatus(selectedContact._id, "nouveau")}
                        className="px-4 py-2 bg-blue-100 text-blue-800 font-semibold rounded-2xl hover:bg-blue-200 transition-colors"
                      >
                        Marquer nouveau
                      </button>
                      <button
                        onClick={() => updateContactStatus(selectedContact._id, "traité")}
                        className="px-4 py-2 bg-green-100 text-green-800 font-semibold rounded-2xl hover:bg-green-200 transition-colors"
                      >
                        Marquer traité
                      </button>
                      <button
                        onClick={() => updateContactStatus(selectedContact._id, "archivé")}
                        className="px-4 py-2 bg-gray-100 text-gray-800 font-semibold rounded-2xl hover:bg-gray-200 transition-colors"
                      >
                        Archiver
                      </button>
                      <button
                        onClick={() => deleteContact(selectedContact._id)}
                        className="px-4 py-2 bg-red-100 text-red-800 font-semibold rounded-2xl hover:bg-red-200 transition-colors ml-auto"
                      >
                        Supprimer
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="bg-white rounded-3xl p-12 text-center border-2 border-gray-100">
                <svg
                  className="w-16 h-16 text-gray-300 mx-auto mb-4"
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
                <p className="text-gray-500">Sélectionnez une demande pour voir les détails</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}


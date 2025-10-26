"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function MaintenancePage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleBypass = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/maintenance/bypass", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        router.push("/");
        router.refresh();
      } else {
        setError("Mot de passe incorrect");
      }
    } catch (error) {
      setError("Erreur lors de la connexion");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-block bg-white rounded-full p-6 shadow-2xl mb-6">
            <svg
              className="w-16 h-16 text-gray-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12 border border-white/20">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Site en Maintenance
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          
          <p className="text-lg text-gray-200 text-center mb-8">
            Nous effectuons actuellement des opérations de maintenance pour améliorer votre expérience.
          </p>
          
          <div className="bg-white/5 rounded-xl p-6 mb-8 border border-white/10">
            <div className="flex items-start space-x-4">
              <div className="shrink-0">
                <svg
                  className="w-6 h-6 text-blue-400 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">
                  Le site reviendra bientôt
                </h3>
                <p className="text-gray-300 text-sm">
                  Notre équipe travaille activement pour vous proposer un site encore meilleur. 
                  Nous serons de retour très prochainement.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center text-gray-300 mb-8">
            <p className="mb-2">Pour toute urgence, contactez-nous :</p>
            <a
              href="mailto:contact@vanland-voyage.fr"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              contact@vanland-voyage.fr
            </a>
          </div>

          {/* Admin bypass button */}
          {!showForm && (
            <div className="text-center">
              <button
                onClick={() => setShowForm(true)}
                className="text-sm text-gray-500 hover:text-gray-300 transition-colors underline decoration-dotted"
              >
                Accès administrateur
              </button>
            </div>
          )}

          {/* Admin Bypass Form */}
          {showForm && (
            <div className="mt-8 pt-8 border-t border-white/10">
              <form onSubmit={handleBypass} className="space-y-4">
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-200 mb-2"
                  >
                    Accès administrateur
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Entrez le mot de passe"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    disabled={loading}
                  />
                </div>
                {error && (
                  <p className="text-red-400 text-sm">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Vérification..." : "Accéder au site"}
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Vanland Voyage. Tous droits réservés.</p>
        </div>
      </div>
    </div>
  );
}


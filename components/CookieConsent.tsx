"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  const [preferences, setPreferences] = useState({
    necessary: true, // Always true
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    } else {
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    localStorage.setItem("cookieConsent", JSON.stringify(allAccepted));
    setPreferences(allAccepted);
    setShowBanner(false);
    setShowPreferences(false);
  };

  const savePreferences = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
    setShowBanner(false);
    setShowPreferences(false);
  };

  const rejectAll = () => {
    const rejected = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    localStorage.setItem("cookieConsent", JSON.stringify(rejected));
    setPreferences(rejected);
    setShowBanner(false);
    setShowPreferences(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Overlay */}
      {showPreferences && (
        <div
          className="fixed inset-0 bg-black/50 z-[9998] backdrop-blur-sm"
          onClick={() => setShowPreferences(false)}
        />
      )}

      {/* Main Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-br from-primary via-navy to-primary rounded-3xl shadow-2xl border-2 border-accent/30 overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
                {/* Icon & Text */}
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/20 rounded-2xl p-3 mt-1">
                      <svg
                        className="w-8 h-8 text-accent"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 flex items-center gap-2">
                        🍪 On utilise des cookies !
                      </h3>
                      <p className="text-white/90 text-sm md:text-base leading-relaxed">
                        Nous utilisons des cookies pour améliorer votre
                        expérience, analyser le trafic et personnaliser le
                        contenu.{" "}
                        <Link
                          href="/politique-cookies"
                          className="text-accent hover:text-yellow-300 underline font-medium"
                        >
                          En savoir plus
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                  <button
                    onClick={() => setShowPreferences(true)}
                    className="px-6 py-3 bg-white/10 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/30 whitespace-nowrap"
                  >
                    Personnaliser
                  </button>
                  <button
                    onClick={rejectAll}
                    className="px-6 py-3 bg-white/10 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/30 whitespace-nowrap"
                  >
                    Refuser
                  </button>
                  <button
                    onClick={acceptAll}
                    className="px-6 py-3 bg-gradient-to-r from-accent to-yellow-400 text-navy font-bold rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap"
                  >
                    Tout accepter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preferences Modal */}
      {showPreferences && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border-4 border-accent/20">
            <div className="sticky top-0 bg-gradient-to-r from-primary to-navy p-6 rounded-t-3xl border-b-4 border-accent">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                  <span className="text-3xl">⚙️</span>
                  Paramètres des cookies
                </h2>
                <button
                  onClick={() => setShowPreferences(false)}
                  className="text-white hover:text-accent transition-colors p-2"
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

            <div className="p-6 space-y-6">
              {/* Necessary Cookies */}
              <div className="bg-gray-50 rounded-2xl p-5 border-l-4 border-accent">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-navy text-lg mb-2 flex items-center gap-2">
                      <span>🔒</span> Cookies nécessaires
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Ces cookies sont essentiels au fonctionnement du site et
                      ne peuvent pas être désactivés.
                    </p>
                  </div>
                  <div className="bg-accent text-navy px-4 py-2 rounded-xl font-bold text-sm whitespace-nowrap">
                    Toujours actif
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="bg-white rounded-2xl p-5 border-2 border-gray-200">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-navy text-lg mb-2 flex items-center gap-2">
                      <span>📊</span> Cookies analytiques
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Ces cookies nous aident à comprendre comment les
                      visiteurs interagissent avec le site.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) =>
                        setPreferences({
                          ...preferences,
                          analytics: e.target.checked,
                        })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-14 h-8 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent/30 rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-secondary peer-checked:to-blue-500"></div>
                  </label>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="bg-white rounded-2xl p-5 border-2 border-gray-200">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-navy text-lg mb-2 flex items-center gap-2">
                      <span>🎯</span> Cookies marketing
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Ces cookies permettent de vous proposer des publicités
                      personnalisées.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) =>
                        setPreferences({
                          ...preferences,
                          marketing: e.target.checked,
                        })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-14 h-8 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent/30 rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-secondary peer-checked:to-blue-500"></div>
                  </label>
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-5 border-l-4 border-secondary">
                <p className="text-gray-700 text-sm">
                  💡 <strong>Bon à savoir :</strong> Vous pouvez modifier vos
                  préférences à tout moment via le lien dans le footer du site.
                </p>
              </div>
            </div>

            <div className="sticky bottom-0 bg-white p-6 border-t-2 border-gray-200 rounded-b-3xl flex flex-col sm:flex-row gap-3">
              <button
                onClick={rejectAll}
                className="flex-1 px-6 py-3 bg-gray-200 text-navy font-semibold rounded-2xl hover:bg-gray-300 transition-all duration-300"
              >
                Tout refuser
              </button>
              <button
                onClick={savePreferences}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-secondary to-blue-500 text-white font-bold rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Enregistrer mes choix
              </button>
              <button
                onClick={acceptAll}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-accent to-yellow-400 text-navy font-bold rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Tout accepter
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


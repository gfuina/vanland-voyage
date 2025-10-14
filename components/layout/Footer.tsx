"use client";

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Contact Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <svg
                className="w-6 h-6 text-accent"
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
              Pour parler de votre projet ?
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:contact@vanland-voyage.fr"
                className="flex items-center gap-3 text-white/90 hover:text-accent transition-colors group"
              >
                <span className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
                <span className="font-medium">contact@vanland-voyage.fr</span>
              </a>
              <a
                href="tel:0756858541"
                className="flex items-center gap-3 text-white/90 hover:text-accent transition-colors group"
              >
                <span className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </span>
                <span className="font-medium">07 56 85 85 41</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-2 px-6 py-3 bg-gradient-to-r from-secondary to-blue-500 text-white font-semibold rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Notre formulaire
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
          </div>

          {/* Address Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <svg
                className="w-6 h-6 text-secondary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Pour venir nous voir ?
            </h3>
            <div className="space-y-3">
              <div className="bg-white/10 rounded-2xl p-5 border-l-4 border-accent shadow-md">
                <p className="text-accent font-bold mb-1">
                  UNIQUEMENT SUR RENDEZ-VOUS
                </p>
                <p className="text-white/90">
                  840 impasse Petit Couleur, ZI du Cassantin
                </p>
                <p className="text-white/90">37390 Chanceaux-sur-Choisille</p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=840+impasse+Petit+Couleur+Chanceaux-sur-Choisille"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-yellow-300 font-medium transition-colors"
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
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                Voir sur Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Social Media & Links */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-white/90 font-medium">Suivez-nous :</span>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/vanland_voyage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white hover:scale-110 transition-transform"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@vanland_voyage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white hover:scale-110 transition-transform"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/vanlandvoyage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:scale-110 transition-transform"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/vanland-voyage/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white hover:scale-110 transition-transform"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href="/blog"
                className="text-white/80 hover:text-accent transition-colors"
              >
                Blog
              </Link>
              <span className="text-white/30">|</span>
              <Link
                href="/autocollants-vasp"
                className="text-white/80 hover:text-accent transition-colors"
              >
                Autocollants VASP
              </Link>
              <span className="text-white/30">|</span>
              <Link
                href="/mentions-legales"
                className="text-white/80 hover:text-accent transition-colors"
              >
                Mentions légales
              </Link>
              <span className="text-white/30">|</span>
              <Link
                href="/cgv"
                className="text-white/80 hover:text-accent transition-colors"
              >
                CGV Atelier
              </Link>
              <span className="text-white/30">|</span>
              <Link
                href="/cgv-boutique"
                className="text-white/80 hover:text-accent transition-colors"
              >
                CGV Boutique
              </Link>
              <span className="text-white/30">|</span>
              <button
                onClick={() => {
                  localStorage.removeItem("cookieConsent");
                  window.location.reload();
                }}
                className="text-white/80 hover:text-accent transition-colors"
              >
                🍪 Cookies
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 border-t border-white/20 space-y-2">
          <p className="text-white/70 text-sm">
            &copy; {currentYear} Vanland Voyage. Tous droits réservés.
          </p>
          <p className="text-white/50 text-sm">
            Créé sur la route avec ❤️ par{" "}
            <a
              href="https://www.pumpy-prod.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-yellow-300 font-medium transition-colors"
            >
              Pumpy Production
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}


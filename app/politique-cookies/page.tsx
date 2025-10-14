"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export default function PolitiqueCookiesPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-5 py-2.5 bg-accent text-navy font-bold text-sm rounded-2xl mb-4 shadow-md -rotate-1">
              🍪 Cookies
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
              Politique de Cookies
            </h1>
            <p className="text-gray-600">
              Comment nous utilisons les cookies sur notre site
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-secondary rounded-r-2xl p-6 mb-8">
              <p className="text-gray-700 leading-relaxed">
                Cette politique de cookies explique ce que sont les cookies,
                comment nous les utilisons sur notre site web
                www.vanland-voyage.fr, et comment vous pouvez gérer vos
                préférences en matière de cookies.
              </p>
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy mb-4">
                Qu'est-ce qu'un cookie ?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Un cookie est un petit fichier texte stocké sur votre
                ordinateur, tablette ou smartphone lorsque vous visitez un site
                web. Les cookies permettent au site de mémoriser vos actions et
                préférences (comme vos identifiants de connexion, la langue, la
                taille des caractères et autres préférences d'affichage)
                pendant une période donnée.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Ainsi, vous n'avez pas besoin de les saisir à chaque fois que
                vous revenez sur le site ou naviguez d'une page à l'autre.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy mb-4">
                Comment utilisons-nous les cookies ?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Nous utilisons différents types de cookies sur notre site web :
              </p>

              {/* Necessary Cookies */}
              <div className="bg-gradient-to-r from-accent/10 to-yellow-50 rounded-2xl p-6 border-l-4 border-accent mb-6">
                <h3 className="text-xl font-bold text-navy mb-3 flex items-center gap-2">
                  <span className="text-2xl">🔒</span>
                  1. Cookies strictement nécessaires
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Ces cookies sont essentiels pour vous permettre de naviguer
                  sur le site et d'utiliser ses fonctionnalités de base. Sans
                  ces cookies, les services que vous avez demandés ne peuvent
                  pas être fournis.
                </p>
                <div className="bg-white/70 rounded-xl p-4">
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Exemples d'utilisation :</strong>
                  </p>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    <li>Mémorisation de votre consentement aux cookies</li>
                    <li>Maintien de votre session de connexion</li>
                    <li>Fonctionnement du panier d'achat</li>
                  </ul>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="bg-gradient-to-r from-blue-50 to-secondary/10 rounded-2xl p-6 border-l-4 border-secondary mb-6">
                <h3 className="text-xl font-bold text-navy mb-3 flex items-center gap-2">
                  <span className="text-2xl">📊</span>
                  2. Cookies analytiques et de performance
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Ces cookies nous permettent de reconnaître et de compter le
                  nombre de visiteurs, et de voir comment les visiteurs se
                  déplacent sur notre site. Cela nous aide à améliorer le
                  fonctionnement de notre site.
                </p>
                <div className="bg-white/70 rounded-xl p-4">
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Exemples d'utilisation :</strong>
                  </p>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    <li>Comprendre quelles pages sont les plus populaires</li>
                    <li>Identifier les problèmes techniques</li>
                    <li>Mesurer l'efficacité de nos campagnes</li>
                  </ul>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border-l-4 border-purple-500 mb-6">
                <h3 className="text-xl font-bold text-navy mb-3 flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  3. Cookies marketing et publicitaires
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Ces cookies sont utilisés pour afficher des publicités qui
                  sont pertinentes pour vous et vos intérêts. Ils sont
                  également utilisés pour limiter le nombre de fois où vous
                  voyez une publicité.
                </p>
                <div className="bg-white/70 rounded-xl p-4">
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Exemples d'utilisation :</strong>
                  </p>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    <li>Personnalisation des publicités</li>
                    <li>Mesure de l'efficacité publicitaire</li>
                    <li>Partage d'informations avec nos partenaires</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy mb-4">
                Durée de conservation des cookies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Les cookies que nous utilisons ont des durées de vie variables :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>
                  <strong>Cookies de session :</strong> Ces cookies sont
                  temporaires et expirent lorsque vous fermez votre navigateur.
                </li>
                <li>
                  <strong>Cookies persistants :</strong> Ces cookies restent
                  sur votre appareil pendant une période définie ou jusqu'à ce
                  que vous les supprimiez. La durée varie généralement de
                  quelques jours à plusieurs années.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy mb-4">
                Comment gérer vos préférences de cookies ?
              </h2>
              
              <div className="bg-accent/10 rounded-2xl p-6 border-2 border-accent/30 mb-6">
                <h3 className="text-xl font-semibold text-navy mb-3">
                  Sur notre site
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Vous pouvez modifier vos préférences de cookies à tout moment
                  en cliquant sur le bouton ci-dessous :
                </p>
                <button
                  onClick={() => {
                    localStorage.removeItem("cookieConsent");
                    window.location.reload();
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent to-yellow-400 text-navy font-bold rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <span className="text-xl">⚙️</span>
                  Gérer mes préférences
                </button>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
                <h3 className="text-xl font-semibold text-navy mb-3">
                  Via votre navigateur
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  La plupart des navigateurs web acceptent automatiquement les
                  cookies, mais vous pouvez généralement modifier les
                  paramètres de votre navigateur pour refuser les cookies si
                  vous le souhaitez.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Voici comment gérer les cookies dans les navigateurs les plus
                  courants :
                </p>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://support.google.com/chrome/answer/95647"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-blue-600 font-semibold underline"
                    >
                      Google Chrome
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-blue-600 font-semibold underline"
                    >
                      Mozilla Firefox
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-blue-600 font-semibold underline"
                    >
                      Safari
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-blue-600 font-semibold underline"
                    >
                      Microsoft Edge
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy mb-4">
                Cookies tiers
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Certains cookies sur notre site sont placés par des services
                tiers. Nous utilisons notamment :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>
                  <strong>Google Analytics :</strong> Pour analyser le trafic
                  et l'utilisation du site
                </li>
                <li>
                  <strong>Réseaux sociaux :</strong> Pour les boutons de
                  partage (Facebook, Instagram, YouTube, LinkedIn)
                </li>
                <li>
                  <strong>Services de paiement :</strong> Pour traiter vos
                  transactions en toute sécurité
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy mb-4">
                Modifications de cette politique
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Nous pouvons mettre à jour cette politique de cookies de temps
                à autre pour refléter les changements dans les cookies que nous
                utilisons ou pour d'autres raisons opérationnelles, légales ou
                réglementaires. Nous vous encourageons à consulter régulièrement
                cette page pour rester informé de notre utilisation des cookies.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy mb-4">
                Nous contacter
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Si vous avez des questions concernant notre utilisation des
                cookies, vous pouvez nous contacter :
              </p>
              <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-secondary">
                <p className="text-gray-700 mb-2">
                  <strong>Par email :</strong>{" "}
                  <a
                    href="mailto:contact@vanland-voyage.fr"
                    className="text-secondary hover:text-blue-600 underline"
                  >
                    contact@vanland-voyage.fr
                  </a>
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Par téléphone :</strong>{" "}
                  <a
                    href="tel:0756858541"
                    className="text-secondary hover:text-blue-600 underline"
                  >
                    07 56 85 85 41
                  </a>
                </p>
                <p className="text-gray-700">
                  <strong>Par courrier :</strong> VANLAND VOYAGE – 10A rue de
                  Bléré, 37320 TRUYES
                </p>
              </div>
            </section>
          </div>

          {/* Back to home */}
          <div className="mt-16 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-navy font-bold text-lg rounded-2xl hover:bg-accent/90 hover:scale-105 hover:rotate-0 -rotate-1 transition-all duration-300 shadow-lg hover:shadow-xl"
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
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}


"use client";

import LordIcon from "@/components/LordIcon";
import { VanlandIcons } from "@/components/LordIconExamples";
import Link from "next/link";

export default function LordIconDemo() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-secondary hover:underline mb-4"
          >
            ← Retour à l'accueil
          </Link>
          <h1 className="text-4xl font-bold text-navy mb-4">
            Démo Lordicon Icons
          </h1>
          <p className="text-gray-600">
            Exemples d'icônes animées pour ton site Vanland Voyage
          </p>
        </div>

        {/* Triggers */}
        <section className="mb-16 bg-white rounded-3xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-navy mb-6">Types de triggers</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="text-center">
              <LordIcon
                src={VanlandIcons.checkmark}
                trigger="hover"
                colors="primary:#1e3a8a,secondary:#f59e0b"
                size={80}
              />
              <p className="mt-2 text-sm font-semibold">Hover</p>
            </div>
            <div className="text-center">
              <LordIcon
                src={VanlandIcons.heart}
                trigger="click"
                colors="primary:#e83a30,secondary:#f24c00"
                size={80}
              />
              <p className="mt-2 text-sm font-semibold">Click</p>
            </div>
            <div className="text-center">
              <LordIcon
                src={VanlandIcons.tools}
                trigger="loop"
                colors="primary:#1e3a8a,secondary:#f59e0b"
                size={80}
              />
              <p className="mt-2 text-sm font-semibold">Loop</p>
            </div>
            <div className="text-center">
              <LordIcon
                src={VanlandIcons.car}
                trigger="loop-on-hover"
                colors="primary:#1e3a8a,secondary:#3b82f6"
                size={80}
              />
              <p className="mt-2 text-sm font-semibold">Loop on Hover</p>
            </div>
            <div className="text-center">
              <LordIcon
                src={VanlandIcons.star}
                trigger="morph"
                colors="primary:#f59e0b,secondary:#fbbf24"
                size={80}
              />
              <p className="mt-2 text-sm font-semibold">Morph</p>
            </div>
            <div className="text-center">
              <LordIcon
                src={VanlandIcons.lightbulb}
                trigger="morph-two-way"
                colors="primary:#f59e0b,secondary:#fbbf24"
                size={80}
              />
              <p className="mt-2 text-sm font-semibold">Morph 2-way</p>
            </div>
          </div>
        </section>

        {/* Communication Icons */}
        <section className="mb-16 bg-white rounded-3xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-navy mb-6">Communication</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <LordIcon
                src={VanlandIcons.email}
                trigger="hover"
                colors="primary:#1e3a8a,secondary:#3b82f6"
                size={80}
              />
              <p className="mt-2 text-sm">Email</p>
            </div>
            <div className="text-center">
              <LordIcon
                src={VanlandIcons.phone}
                trigger="hover"
                colors="primary:#1e3a8a,secondary:#3b82f6"
                size={80}
              />
              <p className="mt-2 text-sm">Téléphone</p>
            </div>
            <div className="text-center">
              <LordIcon
                src={VanlandIcons.location}
                trigger="hover"
                colors="primary:#1e3a8a,secondary:#f59e0b"
                size={80}
              />
              <p className="mt-2 text-sm">Location</p>
            </div>
            <div className="text-center">
              <LordIcon
                src={VanlandIcons.message}
                trigger="hover"
                colors="primary:#1e3a8a,secondary:#3b82f6"
                size={80}
              />
              <p className="mt-2 text-sm">Message</p>
            </div>
          </div>
        </section>

        {/* Services Icons */}
        <section className="mb-16 bg-white rounded-3xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-navy mb-6">Services & Outils</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <LordIcon
                src={VanlandIcons.tools}
                trigger="loop-on-hover"
                colors="primary:#1e3a8a,secondary:#f59e0b"
                size={80}
              />
              <p className="mt-2 text-sm">Outils</p>
            </div>
            <div className="text-center">
              <LordIcon
                src={VanlandIcons.wrench}
                trigger="hover"
                colors="primary:#1e3a8a,secondary:#f59e0b"
                size={80}
              />
              <p className="mt-2 text-sm">Clé</p>
            </div>
            <div className="text-center">
              <LordIcon
                src={VanlandIcons.settings}
                trigger="loop-on-hover"
                colors="primary:#1e3a8a,secondary:#3b82f6"
                size={80}
              />
              <p className="mt-2 text-sm">Réglages</p>
            </div>
            <div className="text-center">
              <LordIcon
                src={VanlandIcons.shield}
                trigger="hover"
                colors="primary:#1e3a8a,secondary:#3b82f6"
                size={80}
              />
              <p className="mt-2 text-sm">Protection</p>
            </div>
          </div>
        </section>

        {/* Travel Icons */}
        <section className="mb-16 bg-white rounded-3xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-navy mb-6">Voyage & Van</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <LordIcon
                src={VanlandIcons.car}
                trigger="loop-on-hover"
                colors="primary:#1e3a8a,secondary:#3b82f6"
                size={80}
              />
              <p className="mt-2 text-sm">Véhicule</p>
            </div>
            <div className="text-center">
              <LordIcon
                src={VanlandIcons.map}
                trigger="hover"
                colors="primary:#1e3a8a,secondary:#f59e0b"
                size={80}
              />
              <p className="mt-2 text-sm">Carte</p>
            </div>
            <div className="text-center">
              <LordIcon
                src={VanlandIcons.compass}
                trigger="loop-on-hover"
                colors="primary:#1e3a8a,secondary:#3b82f6"
                size={80}
              />
              <p className="mt-2 text-sm">Boussole</p>
            </div>
            <div className="text-center">
              <LordIcon
                src={VanlandIcons.calendar}
                trigger="hover"
                colors="primary:#1e3a8a,secondary:#3b82f6"
                size={80}
              />
              <p className="mt-2 text-sm">Calendrier</p>
            </div>
          </div>
        </section>

        {/* Exemples d'intégration */}
        <section className="mb-16 bg-gradient-to-br from-navy to-primary rounded-3xl p-8 shadow-lg text-white">
          <h2 className="text-2xl font-bold mb-6">Exemples d'intégration</h2>

          {/* Bouton avec icône */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Bouton avec icône</h3>
            <button className="flex items-center gap-3 px-6 py-3 bg-accent text-navy font-bold rounded-2xl hover:shadow-lg hover:scale-105 transition-all">
              <LordIcon
                src={VanlandIcons.email}
                trigger="hover"
                colors="primary:#1e3a8a"
                size={24}
              />
              <span>Nous contacter</span>
            </button>
          </div>

          {/* Card avec icône */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Card avec icône</h3>
            <div className="bg-white rounded-2xl p-6 text-gray-800 max-w-sm">
              <LordIcon
                src={VanlandIcons.tools}
                trigger="loop-on-hover"
                colors="primary:#1e3a8a,secondary:#f59e0b"
                size={64}
                className="mb-4"
              />
              <h4 className="text-xl font-bold text-navy mb-2">
                Aménagement complet
              </h4>
              <p className="text-gray-600">
                De la conception à la réalisation de votre van de rêve
              </p>
            </div>
          </div>

          {/* Feature avec icône */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liste de features</h3>
            <div className="space-y-4">
              {[
                { icon: VanlandIcons.checkmark, text: "Qualité artisanale garantie" },
                { icon: VanlandIcons.shield, text: "Garantie complète" },
                { icon: VanlandIcons.tools, text: "Outils professionnels" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
                  <LordIcon
                    src={item.icon}
                    trigger="hover"
                    colors="primary:#f59e0b"
                    size={40}
                  />
                  <span className="font-semibold">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Code examples */}
        <section className="bg-white rounded-3xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-navy mb-4">
            Comment utiliser ?
          </h2>
          <div className="bg-gray-900 text-gray-100 rounded-xl p-6 overflow-x-auto">
            <pre className="text-sm">
{`import LordIcon from "@/components/LordIcon";
import { VanlandIcons } from "@/components/LordIconExamples";

// Utilisation simple
<LordIcon
  src={VanlandIcons.email}
  trigger="hover"
  colors="primary:#1e3a8a,secondary:#3b82f6"
  size={64}
/>

// Dans un bouton
<button className="flex items-center gap-2">
  <LordIcon
    src={VanlandIcons.phone}
    trigger="hover"
    size={24}
  />
  <span>Appeler</span>
</button>`}
            </pre>
          </div>
          <p className="mt-4 text-gray-600">
            📖 Consulte le fichier <code className="bg-gray-100 px-2 py-1 rounded">LORDICON_USAGE.md</code> pour plus d'exemples
          </p>
        </section>
      </div>
    </div>
  );
}


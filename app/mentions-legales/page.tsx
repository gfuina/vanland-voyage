import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions Légales | Vanland Voyage",
  description:
    "Mentions légales du site Vanland Voyage - Informations légales et conformité LCEN",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-5 py-2.5 bg-accent text-navy font-bold text-sm rounded-2xl mb-4 shadow-md -rotate-1">
              Informations Légales
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
              Mentions Légales
            </h1>
            <p className="text-gray-600">
              Conformément à la loi pour la Confiance dans l'économie numérique
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-secondary rounded-r-2xl p-6 mb-8">
              <p className="text-gray-700 leading-relaxed">
                Conformément aux dispositions des Articles 6-III et 19 de la
                Loi n°2004-575 du 21 juin 2004 pour la Confiance dans
                l'économie numérique, dite L.C.E.N., il est porté à la
                connaissance des utilisateurs et visiteurs, ci-après l'
                « Utilisateur », du site www.vanland-voyage.fr, ci-après le
                « Site », les présentes mentions légales.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                La connexion et la navigation sur le Site par l'Utilisateur
                implique acceptation intégrale et sans réserve des présentes
                mentions légales.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Ces dernières sont accessibles sur le Site à la rubrique
                « Mentions légales ».
              </p>
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy mb-4">
                ARTICLE 1 : OBJET DU SITE
              </h2>
              <p className="text-gray-700 leading-relaxed">
                www.vanland-voyage.fr est un site e-commerce et un site vitrine
                accessible sur le réseau. Le site propose la vente d'articles
                liés à l'aménagement de véhicule de loisirs ainsi que la
                présentation des différentes offres de la SARL VANLAND VOYAGE.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy mb-4">
                ARTICLE 2 : ÉDITEUR ET CONTACTS
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                L'édition du Site est assurée par la société « VANLAND VOYAGE
                », société à responsabilité limitée au capital de 5 000 euros,
                dont le siège social est 10A rue de Bléré, 37320 TRUYES,
                immatriculée au Registre du Commerce et des Sociétés de Tours
                sous le numéro 929 617 561 ayant pour gérants DROUBITCH JULIA
                et MEILLON Benjamin.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Le responsable de la publication est MEILLON Benjamin.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pour tout contact, vous pouvez vous adresser par e-mail à :{" "}
                <a
                  href="mailto:contact@vanland-voyage.fr"
                  className="text-secondary hover:text-blue-600 font-semibold underline"
                >
                  contact@vanland-voyage.fr
                </a>
              </p>
              <p className="text-gray-700 leading-relaxed">
                L'adresse de l'établissement (atelier) est au 840 impasse Petit
                Couleur, ZI du Cassantin, 37390 CHANCEAUX-SUR-CHOISILLE.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy mb-4">
                ARTICLE 3 : CRÉATION DU SITE
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Le site internet www.vanland-voyage.fr a été créé par{" "}
                <a
                  href="https://www.pumpy-prod.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-blue-600 font-semibold underline"
                >
                  Gianni FUINA de Pumpy Production
                </a>
                , studio de création d'expériences digitales nomade.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy mb-4">
                ARTICLE 4 : L'HÉBERGEUR
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Le site internet est hébergé par{" "}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-blue-600 font-semibold underline"
                >
                  Vercel Inc.
                </a>
                <br />
                440 N Barranca Ave #4133
                <br />
                Covina, CA 91723
                <br />
                États-Unis
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy mb-4">
                ARTICLE 5 : ACCÈS AU SITE ET RESPONSABILITÉ
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas
                de force majeure, interruption programmée ou non et pouvant
                découlant d'une nécessité de maintenance.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                En cas de modification, interruption ou suspension du Site,
                « VANLAND VOYAGE » ne saurait être tenu responsable. En aucun
                cas, « VANLAND VOYAGE » ne pourra être tenu pour responsable
                d'un quelconque dommage direct ou indirect de quel que nature
                que ce soit, découlant de l'utilisation du Site.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy mb-4">
                ARTICLE 6 : COLLECTE DES DONNÉES
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Le Site assure à l'Utilisateur une collecte et un traitement
                d'informations personnelles dans le respect de la vie privée
                conformément à la loi n°78-17 du 6 janvier 1978 relative à
                l'informatique, aux fichiers et aux libertés.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                En vertu de la loi Informatique et Libertés, en date du 6
                janvier 1978, l'Utilisateur dispose d'un droit d'accès, de
                rectification, de suppression et d'opposition de ses données
                personnelles. L'Utilisateur exerce ce droit par e-mail à
                l'adresse :{" "}
                <a
                  href="mailto:contact@vanland-voyage.fr"
                  className="text-secondary hover:text-blue-600 font-semibold underline"
                >
                  contact@vanland-voyage.fr
                </a>{" "}
                ou par courrier à l'adresse : VANLAND VOYAGE – 10A rue de
                Bléré, 37320 TRUYES.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Toute utilisation, reproduction, diffusion, commercialisation,
                modification de toute ou partie du Site, sans autorisation de
                l'Editeur est prohibée et pourra entraînée des actions et
                poursuites judiciaires telles que notamment prévues par le Code
                de la propriété intellectuelle et le Code civil.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy mb-4">
                ARTICLE 7 : PROPRIÉTÉ INTELLECTUELLE
              </h2>
              <p className="text-gray-700 leading-relaxed">
                L'intégralité du contenu du Site est la propriété exclusive de
                la société « VANLAND VOYAGE », tous les éléments sont protégés
                par la législation applicable en matière de propriété
                intellectuelle.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy mb-4">
                ARTICLE 8 : LIENS HYPERTEXTES
              </h2>
              <p className="text-gray-700 leading-relaxed">
                La société « VANLAND VOYAGE » décline toute responsabilité
                concernant le contenu des sites extérieurs liés au Site par le
                biais de liens hypertextes et/ou de citation.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Les liens mis en place depuis le Site vers des sites extérieurs
                ne sauraient engager la responsabilité de « VANLAND VOYAGE »
                notamment au regard du contenu de ces sites mais également des
                risques techniques.
              </p>
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


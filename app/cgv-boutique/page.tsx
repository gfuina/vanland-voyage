import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CGV Boutique - Conditions Générales de Vente | Vanland Voyage",
  description:
    "Conditions Générales d'Utilisation et de Vente de la boutique en ligne Vanland Voyage",
};

export default function CGVBoutiquePage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-5 py-2.5 bg-accent text-navy font-bold text-sm rounded-2xl mb-4 shadow-md -rotate-1">
              Mentions Légales
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
              Conditions Générales d'Utilisation et de Vente
            </h1>
            <p className="text-gray-600">Boutique en ligne</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-secondary rounded-r-2xl p-6 mb-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                Les présentes « Conditions Générales d'Utilisation et de Vente
                » sont applicables à la relation entre la société VANLAND
                VOYAGE, société à responsabilité limitée au capital de 5 000
                euros, dont le siège social est 10A rue de Bléré, 37320 TRUYES,
                immatriculée au Registre du Commerce et des Sociétés de Tours
                sous le numéro 929 617 561 (ci-après dénommée le Site), et
                toute personne physique ou morale (ci-après dénommée le Client),
                souhaitant effectuer un achat d'articles présentés sur le site
                marchand.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                En cochant la case « J'accepte les CGV », vous confirmez
                accepter sans réserve l'ensemble des dispositions des
                Conditions Générales. Si vous n'acceptez pas ces Conditions
                Générales, vous ne pouvez pas bénéficier des services du Site.
              </p>
              <p className="text-gray-700 leading-relaxed">
                « VANLAND VOYAGE » se réserve le droit de modifier à n'importe
                quel moment les présentes Conditions Générales, notamment en
                mettant en ligne une nouvelle version de son site.
              </p>
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy mb-4">
                ARTICLE 1 : CHAMP D'APPLICATION
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Les présentes conditions générales de vente s'appliquent à
                toutes les ventes conclues par la société « VANLAND VOYAGE »,
                sous réserve de conditions particulières indiquées dans la
                présentation des produits ou sur les devis et contrats.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy mb-4">
                ARTICLE 2 : PAGES PRODUITS
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Le Site propose à la vente des produits, physique ou digitaux,
                et services (ci-après dénommés Articles). Les Articles proposés
                à la vente sur le Site, sont ceux qui figurent sur le Site à la
                date de consultation par le Client, dans la limite des stocks
                disponibles. « VANLAND VOYAGE » ne pourrait être tenu comme
                responsable en cas de rupture de stock, en cas d'indisponibilité,
                le Client sera informé la « VANLAND VOYAGE ».
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy mb-4">
                ARTICLE 3 : ARTICLES NUMÉRIQUES
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Le Site propose également des œuvres intellectuelles sous forme
                numérique (PDF). Les e-books vendus sur le Site sont des
                fichiers numériques contenant des œuvres intellectuelles
                destinées à être téléchargées pour être lus sur des terminaux
                électroniques (ordinateurs, smartphones, tablettes, etc.).
              </p>
              <p className="text-gray-700 leading-relaxed">
                Les ouvrages sont protégés par les lois françaises et
                internationales sur le droit d'auteur. En l'absence de licence
                précisant d'autres conditions d'utilisation, les fichiers sont
                réservés à l'usage exclusif de l'acheteur. Ils ne peuvent être
                ni revendus, ni loués, ni transmis gratuitement au-delà de son
                cercle de famille et des besoins légitimes de son usage privé ;
                toute représentation ou reproduction de ces fichiers, totale ou
                partielle, en dehors des cas prévus par l'article L122-5 du code
                de la propriété intellectuelle, est strictement interdite et
                exposerait leur détenteur à des poursuites.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy mb-4">
                ARTICLE 4 : COMMANDES
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Toutes les commandes sont réalisées exclusivement via le site
                www.vanland-voyage.fr, ou directement auprès de la société «
                VANLAND VOYAGE ».
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Le clic sur le bouton « commander » sur l'écran qui récapitule
                la commande et l'acceptation explicite des CGV, constitue une
                signature électronique qui certifie expressément le
                consentement sans réserve du client aux présentes conditions
                générales de vente et aux conditions particulières (en
                particulier le prix unitaire) propres à chaque commande. Le
                client renonce, de ce fait, à se prévaloir de tout document
                contradictoire et notamment, ses propres conditions générales
                d'achat.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Le client peut abandonner sa commande jusqu'à validation du
                paiement de sa commande. Toute commande ayant un profil de
                risque de fraude peut être bloquée par l'administrateur au stade
                du paiement.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                « VANLAND VOYAGE » préparera alors la commande du Client dans
                les meilleurs délais et informera le Client de l'expédition de
                celle-ci par e-mail.
              </p>
              <p className="text-gray-700 leading-relaxed">
                « VANLAND VOYAGE » se réserve le droit de refuser toute commande
                ou toute livraison en cas de défaut de paiement partiel ou total
                d'une précédente commande du Client, de litige en cours avec un
                Client, de refus d'autorisation du paiement du Client, pour tout
                autre motif fondé.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy mb-4">
                ARTICLE 5 : DISPONIBILITÉ DES ARTICLES ET DU SITE
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Le Site et les Articles sont normalement accessibles par le
                client 24h/24, 7j/7 et toute l'année. La société VANLAND VOYAGE
                se réserve néanmoins le droit d'en fermer temporairement l'accès
                sans préavis, ou de modifier le lien permettant d'accéder au
                produit acheté en prévenant l'acheteur par mail.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy mb-4">
                ARTICLE 6 : PRIX ET PAIEMENT
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Les prix des Articles sont net en euros toutes taxes comprises.
                Les prix ne tiennent pas compte des frais de livraison qui sont
                facturés en supplément tel que cela sera précisé au Client sur
                le panier récapitulant sa commande. Les Articles sont facturés
                au prix affiché sur le Site au jour de la commande, « VANLAND
                VOYAGE » se réserve le droit de modifier les prix à tout moment.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Le prix est payable en totalité et en un seul versement à la
                commande. Le paiement des achats s'effectue par un des moyens
                présents sur le site tel que Carte Bancaire, ApplePay ou encore
                PayPal. La transaction bancaire est effectuée au moment de la
                commande.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dès la validation du moyen de paiement utilisé par l'acheteur,
                la commande est confirmée et ne peut plus être annulée ni
                remboursée, sauf en cas d'une commande double effectuée par
                l'acheteur.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy mb-4">
                ARTICLE 7 : LIVRAISON
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                La livraison des Articles physiques sont expédiés à l'adresse
                renseigné par l'utilisateur du site lors de la commande, le site
                ne peut être accusé en cas d'erreur dans l'adresse renseigné.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Les Articles physiques sont livrés par un transporteur
                spécialisé dans le délai indiqué lors de la commande, ce délai
                est donné à titre indicatif et tout dépassement par ledit
                prestataire ne pourra en aucun cas être retenu contre « VANLAND
                VOYAGE », ni donner lieu à une résiliation du contrat ou
                quelconque indemnité au profit du Client.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Les articles sont transportés aux risques et périls du Client
                qui doit contrôler leur bon état lors de la livraison. Toute
                anomalie concernant la livraison (colis endommagés, articles
                manquants par rapport à la facture, etc…) devra faire l'objet de
                réserves portées sur le récépissé de livraison présenté par le
                transporteur et le Client doit informer dans un délai de 7 jours
                la société « VANLAND VOYAGE » par e-mail :{" "}
                <a
                  href="mailto:contact@vanland-voyage.fr"
                  className="text-secondary hover:text-blue-600 font-semibold underline"
                >
                  contact@vanland-voyage.fr
                </a>{" "}
                ou LRAR à l'adresse : VANLAND VOYAGE – 10A rue de Bléré, 37320
                TRUYES.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                En signant le bordereau de livraison, le Client accepte les
                produits livrés en l'état et dès lors aucune réclamation
                relative à des dommages subis durant le transport ne sera
                acceptée. Il est de la responsabilité du Client d'effectuer
                toutes vérifications et de faire toutes réserves détaillées à
                l'arrivée du matériel et d'exercer, le cas échéant, tous recours
                contre le transporteur.
              </p>
              <p className="text-gray-700 leading-relaxed">
                La livraison des œuvres numériques acquises sur ce site se fait
                par téléchargement. Quelques minutes après le paiement de la
                commande, un courriel est envoyé au client avec un ou plusieurs
                liens de téléchargement à usage unique permettant de charger les
                œuvres sur son ordinateur. Ces liens de téléchargements ont une
                durée de vie limitée.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy mb-4">
                ARTICLE 8 : GARANTIE
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                La société « VANLAND VOYAGE » n'est pas le producteur ou
                fabricant des produits présentés, au sens de la loi n°98-389 du
                19 mai 1998 relative à la responsabilité du fait des produits
                défectueux. Ainsi, les réparations et remplacement de produits
                sont assurés uniquement par leurs fabricants respectifs. «
                VANLAND VOYAGE » ne peut aller à l'encontre de la décision d'un
                fabricant concernant l'état d'un produit ainsi que de son
                traitement SAV.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                La garantie ne couvre pas les dommages résultant d'accidents, de
                mauvaise utilisation ou d'erreur de montage, de négligence ou de
                modification notable de l'aspect (tout produit retourné avec
                l'étiquette du numéro de série absente ou arrachée pourra être
                placé hors garantie). Tout matériel présentant un dégât
                matériel, des traces de choc ou de brûlures perdra tout droit à
                la garantie.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Les produits retournés sans protection physique ou mal protégés
                ne pourront pas bénéficier de la garantie, au même titre que les
                produits endommagés, usés ou salis. Le Client doit veiller à
                protéger et assurer le ou les produits retournés lors de leur
                transport.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Il appartient au Client de conserver les accessoires fournis
                avec le produit ainsi que les éventuelles étiquettes apposées
                sur le produit ou ses emballages, et qui sont nécessaires pour
                bénéficier de la garantie offerte.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy mb-4">
                ARTICLE 9 : DROIT DE RÉTRACTATION
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Conformément aux dispositions européennes, les délais de
                rétractation sont de 14 jours suivant la réception de la
                commande pour les Articles physiques neufs et non utilisés. Le
                retour des produits est à la charge des utilisateurs. Pour
                toutes rétractations, il convient de prévenir la société «
                VANLAND VOYAGE » par e-mail –{" "}
                <a
                  href="mailto:contact@vanland-voyage.fr"
                  className="text-secondary hover:text-blue-600 font-semibold underline"
                >
                  contact@vanland-voyage.fr
                </a>{" "}
                , avant d'effectuer le retour par un transporteur adapté à
                l'adresse suivante : VANLAND VOYAGE – 10A rue de Bléré, 37320
                TRUYES.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Il appartient au Client de conserver toutes les preuves de ce
                retour, incluant les informations suivantes : adresse du
                destinataire, date d'expédition et numéro de colis.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Conformément aux dispositions légales en vigueur, les achats de
                contenus numériques sont fermes et définitifs. Ils ne pourront
                donc donner lieu à aucun échange, remboursement ou à l'exercice
                d'un droit de rétractation.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy mb-4">
                ARTICLE 10 : RESPONSABILITÉ ET FORCE MAJEURE
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                « VANLAND VOYAGE » ne pourra être tenu responsable de
                l'utilisation non-conforme des produits par le Client.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Tous les événements échappant à la volonté de « VANLAND VOYAGE »
                irrésistibles, imprévisibles et tendant à retarder ou à empêcher
                l'exécution de la commande constituent une cause de suspension
                des obligations de « VANLAND VOYAGE » envers le Client, sans
                indemnité au profit du Client. Sans limiter la portée des autres
                dispositions des présentes conditions générales de vente, la
                responsabilité de « VANLAND VOYAGE » ne peut être engagée pour
                des faits résultant d'un cas fortuit ou du fait d'un tiers ou de
                la victime du dommage.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy mb-4">
                ARTICLE 11 : PROTECTION DES DONNÉES PERSONNELLES
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Les informations qui sont demandées au client sont nécessaires
                pour traiter les commandes ou améliorer les services qui peuvent
                être proposés sur le site. Ces informations et données sont
                également conservées à des fins de sécurité afin de respecter
                les obligations légales et réglementaires.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Le traitement des données personnelles se fait dans le respect
                de la loi relative à l'Informatique, aux fichiers et aux
                libertés du 6 janvier 1978.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy mb-4">
                ARTICLE 12 : DROIT APPLICABLE
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Les présentes conditions générales de vente sont soumises à la
                loi française. Tout litige sera porté devant les tribunaux
                compétents de Tours (Indre et Loire) où se situe le siège social
                de la société où est formalisé le contrat de vente entre les
                parties.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy mb-4">
                ARTICLE 13 : RELATIONS CLIENTS
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pour toute information, le Client peut s'adresser à « VANLAND
                VOYAGE » par les moyens suivants :
              </p>
              <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-secondary">
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Téléphone :</span>{" "}
                  <a
                    href="tel:0756858541"
                    className="text-secondary hover:text-blue-600 underline"
                  >
                    07 56 85 85 41
                  </a>
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">E-mail :</span>{" "}
                  <a
                    href="mailto:contact@vanland-voyage.fr"
                    className="text-secondary hover:text-blue-600 underline"
                  >
                    contact@vanland-voyage.fr
                  </a>
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Courrier :</span> VANLAND
                  VOYAGE – 10A rue de Bléré, 37320 TRUYES
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


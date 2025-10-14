import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "CGV - Conditions Générales de Vente | Vanland Voyage",
  description: "Conditions Générales de Vente - Aménagement et prestations de services Vanland Voyage",
};

export default function CGVPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-5 py-2.5 bg-secondary text-white font-bold text-sm rounded-2xl mb-4 shadow-md -rotate-1">
            Mentions Légales
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
            Conditions Générales de Vente
          </h1>
          <p className="text-gray-600">
            Aménagement et prestations de services
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">1. OBJET</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Les présentes conditions générales de vente sont applicables à toutes ventes et prestations (ci-après « Prestations ») réalisées par la SARL VANLAND VOYAGE, qui exerce une activité d'aménagement intérieur et extérieur sur-mesure de véhicule automobile, sous l'enseigne VANLAND VOYAGE (ci-après « VANLAND VOYAGE ») à destination de ses clients (ci-après « Client »).
            </p>
            <p className="text-gray-700 leading-relaxed">
              Les présentes conditions générales de ventes prévalent sur tout autre document contractuel, sauf accord exprès des parties. Le Client reconnait agréer et avoir parfaite connaissance des présentes conditions générales de vente. VANLAND VOYAGE pourra modifier, réactualiser ou rectifier les présentes, si besoin en est, afin de prendre en compte une évolution législative, réglementaire, jurisprudentielle et/ou technique. VANLAND VOYAGE s'engage à communiquer les présentes conditions générales de vente à tout Client qui en fait la demande. De plus, toute personne peut en prendre connaissance sur le site Internet de VANLAND VOYAGE à l'adresse suivante : www.vanland-voyage.fr.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">2. DEVIS ET COMMANDE</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              VANLAND VOYAGE établit un devis soit sur la base des plans, cahier des charges et informations communiqués par le Client, soit sur la base des besoins exprimés du client et des disponibilités des fournisseurs.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              En cas de changements ou de compléments d'informations en cours de phase d'exécution et après confirmation de la commande, VANLAND VOYAGE se réserve le droit de modifier le contenu du devis et/ou le prix y figurant. Seuls les devis établis par écrits sont valables. Les devis de VANLAND VOYAGE sont valables et opposables pour une durée de 1 mois. Passé ce délai, le Client ne peut annuler une commande en cours sauf accord exprès de VANLAND VOYAGE.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dans ce cas, l'acompte versé sera conservé et le Client indemnisera VANLAND VOYAGE des conséquences de la suspension/annulation, notamment en remboursant les frais engagés.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Chaque commande est indépendante et le Client ne pourra se prévaloir d'un défaut dans une commande pour refuser le paiement d'une autre commande non défectueuse. La commande sera considérée comme acceptée après signature du devis par le Client.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">3. RÉALISATION DES PRESTATIONS</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Les études, plans et documents de toute nature restent la propriété de VANLAND VOYAGE. Le Client doit informer spontanément VANLAND VOYAGE de tout élément, donnée, qui aurait un impact sur la prestation commandée. VANLAND VOYAGE ne pourra être tenu responsable des éventuelles non-conformités, inadéquations ou dépassements des délais qui découleraient directement ou indirectement d'absence d'information du Client ou d'information erronées ou insuffisantes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Sous réserve du parfait respect par le Client des obligations mises à sa charge, notamment en termes de délai, VANLAND VOYAGE fera ses meilleurs efforts pour fournir la prestation conformément à ce qui a été convenu sur le devis.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">4. OBLIGATIONS DU CLIENT</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Le Client reconnait avoir reçu de VANLAND VOYAGE l'ensemble des informations nécessaires pour souscrire au présent engagement en connaissance de cause. Ainsi les choix effectués par le Client lors de la commande, ainsi qu'éventuellement par la suite, demeurent sous son entière responsabilité. Le Client s'engage à fournir à VANLAND VOYAGE tous les documents, renseignements et informations afin de lui permettre de réaliser la ou les prestations convenues.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Le Client devra mettre à disposition de VANLAND VOYAGE le véhicule pour la réalisation des prestations, pendant le délai indiqué sur le devis et à l'adresse suivante : 840 impasse petit couleur, 37390 CHANCEAUX-SUR-CHOISILLE.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Le Client veillera spécialement à ce que le véhicule soit accessible, et à ce que les endroits de pose des matériaux soient propres et dégagés. Le Client supportera l'enlèvement du mobilier ou de tout autre objet. En cas de dommage sur du mobilier ou tout objet non enlevé par le Client, ce dernier ne pourra pas engager la responsabilité de VANLAND VOYAGE.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">5. DÉLAIS D'INTERVENTION, DE LIVRAISON ET D'EXÉCUTION</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Les délais d'intervention, de livraison et d'exécution sont donnés à titre indicatif sans engagement de la part de VANLAND VOYAGE. Toute modification de ceux-ci ne pourrait être invoquée par le Client pour justifier un refus de paiement ou une demande en dommages et intérêts.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nonobstant cette réserve, VANLAND VOYAGE fera tout ce qui est en son pouvoir pour respecter les délais qu'il pourrait indiquer. Tout dépassement des délais de livraisons ne pourra donner lieu à aucune modification du prix et/ou des conditions de paiement ni à aucune forme de pénalité, ni droit à résolution de la commande.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">6. RÉCEPTION</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Par la signature du bon de livraison ou de réception par le Client, les aménagements intérieurs du véhicule sont considérés être conformes à la commande et sans défauts apparents. Toute contestation du Client sur des défauts apparents devra être faite par écrit lors de la réception ou au plus tard dans les 15 jours de la livraison ou de la réception de l'ouvrage par lettre recommandée avec avis de réception.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Passé ces délais, aucune réclamation pour un problème de vices apparents ne sera recevable. En cas de vices apparents dument notifiés dans les délais, VANLAND VOYAGE procédera au remplacement et/ou de la réparation des composants reconnus défectueux à l'exclusion de tout autre dédommagement ou prise en charge.
            </p>
            <p className="text-gray-700 leading-relaxed">
              VANLAND VOYAGE ne pourra jamais être tenu responsable d'un défaut ou un dommage résultant de l'intervention du Client ou d'un autre prestataire qui ne serait pas sous la responsabilité de VANLAND VOYAGE.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">7. RÉSERVE DE PROPRIÉTÉ ET TRANSFERT DES RISQUES</h2>
            <p className="text-gray-700 leading-relaxed">
              VANLAND VOYAGE se réserve expressément la propriété de l'ensemble des biens livrés et ceux constituant l'ouvrage, jusqu'au paiement effectif à son profit de l'intégralité du prix global convenu lors de leur commande et indiqué dans la facture correspondante, et ce conformément aux dispositions de l'article 2367 du Code civil.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">8. RESPONSABILITÉ</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dans le cadre de ses prestations, VANLAND VOYAGE est tenu à une obligation générale de moyen. VANLAND VOYAGE ne donne aucune garantie au Client, implicite ou expresse, quant aux résultats des prestations et des matériels, notamment sur leurs performances.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Les prises d'échantillons, expertises et contre expertises doivent être réalisées en présence de VANLAND VOYAGE. À défaut les constats effectués ne seront pas opposables. Il appartiendra au Client de prendre en charge l'ensemble des frais d'expertises qu'il sollicite.
            </p>
            <p className="text-gray-700 leading-relaxed">
              VANLAND VOYAGE ne peut être tenu responsable lorsque les biens ou ouvrages livrés subissent des modifications, traitements ou transformations de quelque nature que ce soit, non validés par VANLAND VOYAGE. Il en va de même lorsque les biens ou ouvrages livrés ne sont pas utilisés conformément aux instructions données ou à leur nature ou destination.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">9. GARANTIE LÉGALE</h2>
            <h3 className="text-xl font-semibold text-navy mb-3 mt-6">9.1 Garantie des vices cachés</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              (articles 1641 et suivants du Code civil) : VANLAND VOYAGE garantit les produits et aménagements contre les vices cachés pendant une période de deux ans à compter de la découverte du vice. Cette garantie ne peut valablement être revendiquée que si le Client démontre que le vice n'était pas apparent et existait au jour de l'achat du Produit et rend le Produit impropre à l'usage auquel il était destiné ou diminue très fortement cet usage. Le Client pourra alors choisir entre la résiliation de la vente ou une réduction du prix.
            </p>
            
            <h3 className="text-xl font-semibold text-navy mb-3 mt-6">9.2 Garantie de conformité</h3>
            <p className="text-gray-700 leading-relaxed">
              (articles L. 217-1 et suivants du Code de la consommation) : VANLAND VOYAGE répond des défauts de conformité existant lors de la délivrance des produits et aménagements pendant une durée de deux ans à compter de leur délivrance. Pendant les deux ans qui suivent la délivrance du produit, le Client est dispensé de rapporter la preuve du défaut de conformité ; la preuve contraire incombant à VANLAND VOYAGE. Le Client peut choisir entre la réparation et le remplacement (par un produit identique ou de gamme équivalente) du bien. VANLAND VOYAGE pourra néanmoins procéder à ce choix à la place du Client si l'une des options entraine un cout manifestement disproportionné ou impossible. La prise en charge de cette garantie se fera exclusivement dans l'atelier de la société VANLAND VOYAGE.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">10. PRIX ET CONDITIONS DE PAIEMENT</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Les prix sont stipulés en Euros et calculés hors taxes, et hors frais de transport. Le montant est précisé dans le devis ou la commande.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Le Client s'engage à verser un premier acompte précisé dans le devis lors de la commande par virement bancaire. Le solde est facturé à la réception.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Les factures de VANLAND VOYAGE doivent être payées dans les 30 jours de l'émission.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              À défaut de clause contraire sur le devis, les factures sont payables au comptant dans les 15 jours suivants la date y figurant, net et sans escompte. Toute somme non payée à l'échéance sera majorée de plein droit de pénalités de retard à trois fois le taux d'intérêt légal. En outre, en plus des pénalités de retard, une indemnité forfaitaire pour frais de recouvrement de 40 euros sera due de plein droit conformément aux dispositions de l'article D441-5 du Code de commerce.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Les factures qui ne sont pas contestées dans les 15 jours de leur réception valent acceptation des prestations effectuées.
            </p>
            <p className="text-gray-700 leading-relaxed">
              En cas de non-paiement d'une facture à la date d'échéance VANLAND VOYAGE se réserve le droit d'arrêter l'exécution de ses prestations, et d'exiger le paiement préalable des prestations suivantes.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">11. ASSURANCE</h2>
            <p className="text-gray-700 leading-relaxed">
              VANLAND VOYAGE a souscrit auprès de GROUPAMA, une assurance responsabilité civile et professionnelle. Cette police d'assurance peut être fournie sur simple demande du Client et couvre tous les dommages directs pouvant éventuellement être causés par VANLAND VOYAGE lors de la réalisation de ses prestations.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">12. PROPRIÉTÉ INTELLECTUELLE – DROIT À L'IMAGE</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Les services fournis par VANLAND VOYAGE demeurent la propriété de celui-ci. Sur demande écrite, VANLAND VOYAGE se donne le droit d'autoriser le client particulier, ou professionnel à utiliser son véhicule aménagé à des fins commerciales (locations, espace de travail, coworking, …).
            </p>
            <p className="text-gray-700 leading-relaxed">
              Le Client accepte l'exploitation des images photographiques, vidéos des services et prestations réalisés par VANLAND VOYAGE sur tous supports (site internet, catalogue, presse, réseaux sociaux, …). Le Client consent à ce que VANLAND VOYAGE fasse usage, à titre publicitaire, de ses photos, croquis, documents et de la proposition du service d'aménagement associée.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">13. FORCE MAJEURE</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              La responsabilité de VANLAND VOYAGE ne pourra pas être mise en œuvre si la non-exécution ou le retard dans l'exécution de l'une de ses obligations décrites dans les présentes conditions générales découle d'un cas de force majeure ou d'un cas fortuit.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sont considérés comme tels notamment, sans que cette liste soit limitative, la guerre, les émeutes, lock-out, l'insurrection, les grèves de toute nature, les accidents, les bris de machines, pénurie en moyen de transport ou matières premières, épidémie, incendie, gelées, période de pluies exceptionnelles, inondations, sécheresse, etc.
            </p>
            <p className="text-gray-700 leading-relaxed">
              La survenance d'un cas de force majeure entraîne la suspension immédiate de l'exécution des prestations. En cas de prolongation du cas de force majeure pendant plus de 60 jours, la commande pourra être résolue à l'initiative de l'une ou l'autre des parties, sans droit à indemnité de part et d'autre.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">14. DONNÉES PERSONNELLES</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              VANLAND VOYAGE informe le Client qu'il traite ses données à caractère personnel qui lui sont transmises pour les besoins de l'exécution des présentes conditions générales. Les données à caractère personnel pourront être communiquées à ses prestataires et sous-traitant dans le cadre de l'exécution des présentes conditions générales. La sécurité des données personnelles est assurée à tout moment, notamment par la mise en œuvre de clauses contractuelles conformes au droit en vigueur.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Les données du Client ne sont pas conservées au-delà du délai nécessaire à leur traitement et, en toutes hypothèses, pendant trois ans maximums à compter de leur collecte ou du dernier contact initié avec VANLAND VOYAGE.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Le Client peut à tout moment accéder à ses données personnelles, demander leur rectification, demander leur suppression ou limitation pour motif légitime conformément aux dispositions légales. Dans certains cas, il peut s'opposer à un traitement pour des raisons tenant à sa situation particulière ou encore exercer son droit à la portabilité de ses données.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Tout ou partie de ces droits peuvent être exercés en envoyant une demande par mail à contact@vanland-voyage.fr. Si le Client estime, que ses droits n'étaient pas respectés dans le cadre de ce traitement ou que le dispositif mis en œuvre n'était pas conforme aux règles de protection des données, VANLAND VOYAGE l'invite à lui en faire part directement aux coordonnées visées ci-dessus. Le Client peut le cas échéant, adresser une réclamation en ligne à la CNIL ou par voie postale.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">15. RÈGLEMENT AMIABLE DES LITIGES</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              En cas de litige ou de réclamation, le Client s'adressera en priorité à VANLAND VOYAGE pour obtenir une solution amiable et ce par email à l'adresse suivante contact@vanland-voyage.fr ou par courrier postal à l'adresse suivante : VANLAND VOYAGE, 10A rue de Bléré, 37320 TRUYES.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              En cas d'échec de solution amiable, le Client pourra faire examiner sa demande par un médiateur ou encore auprès d'une association de consommateurs avec les liens suivants :
            </p>
            <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-secondary">
              <p className="text-gray-700 font-semibold mb-2">Le Médiateur FNA</p>
              <p className="text-gray-700">Immeuble Axe Nord</p>
              <p className="text-gray-700">9 & 11 avenue Michelet</p>
              <p className="text-gray-700 mb-2">93583 Saint Ouen Cedex</p>
              <p className="text-gray-700">
                Site internet :{" "}
                <a
                  href="http://www.mediateur.fna.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-blue-600 underline"
                >
                  www.mediateur.fna.fr
                </a>
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">16. MENTIONS RELATIVES AU SITE INTERNET</h2>
            
            <h3 className="text-xl font-semibold text-navy mb-3 mt-6">Création du site</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
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
            
            <h3 className="text-xl font-semibold text-navy mb-3 mt-6">Hébergement</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
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
              440 N Barranca Ave #4133<br />
              Covina, CA 91723<br />
              États-Unis
            </p>
          </section>
        </div>

        {/* Back to home */}
        <div className="mt-16 text-center">
          <a
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
          </a>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}


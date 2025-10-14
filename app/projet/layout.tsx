import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Votre Projet Étape par Étape',
  description: '9 étapes claires pour votre projet d\'aménagement de van : de la location test à la livraison. 3 mois de travaux, 2 ans de garantie. Homologation VASP incluse.',
  keywords: ['projet aménagement van', 'étapes aménagement fourgon', 'homologation VASP', 'garantie van aménagé', 'devis aménagement van'],
  openGraph: {
    title: 'Votre Projet Étape par Étape | Vanland Voyage',
    description: '9 étapes claires pour votre projet d\'aménagement de van : de la location test à la livraison. 3 mois de travaux, 2 ans de garantie.',
    images: ['/images/campervan-11.JPG'],
  },
};

export default function ProjetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

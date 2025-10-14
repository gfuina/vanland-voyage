import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nos Réalisations',
  description: 'Découvrez nos aménagements complets et rénovations de fourgons aménagés. Portfolio de vans sur-mesure réalisés par Vanland Voyage à Tours.',
  keywords: ['portfolio van aménagé', 'réalisations fourgon', 'exemples aménagement van', 'projets vans Tours', 'van sur mesure'],
  openGraph: {
    title: 'Nos Réalisations | Vanland Voyage',
    description: 'Découvrez nos aménagements complets et rénovations de fourgons aménagés. Portfolio de vans sur-mesure réalisés par Vanland Voyage à Tours.',
    images: ['/images/hero.jpg'],
  },
};

export default function RealisationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


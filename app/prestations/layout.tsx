import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nos Prestations',
  description: 'Aménagement complet sur-mesure, aménagement partiel, pose d\'accessoires, réparation et amélioration de fourgons aménagés. Artisans près de Tours.',
  keywords: ['aménagement complet van', 'aménagement partiel fourgon', 'pose accessoires van', 'réparation camping-car', 'homologation VASP', 'atelier van Tours'],
  openGraph: {
    title: 'Nos Prestations | Vanland Voyage',
    description: 'Aménagement complet sur-mesure, aménagement partiel, pose d\'accessoires, réparation et amélioration de fourgons aménagés. Artisans près de Tours.',
    images: ['/images/prestations/prestation-complete.jpg'],
  },
};

export default function PrestationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


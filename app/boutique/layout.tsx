import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Boutique - Bientôt Disponible',
  description: 'Notre boutique d\'équipements et accessoires pour van arrive bientôt. Découvrez notre sélection de matériel de qualité pour votre fourgon aménagé.',
  openGraph: {
    title: 'Boutique - Bientôt Disponible | Vanland Voyage',
    description: 'Notre boutique d\'équipements et accessoires pour van arrive bientôt. Découvrez notre sélection de matériel de qualité.',
  },
};

export default function BoutiqueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


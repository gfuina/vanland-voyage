import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente - Boutique',
  description: 'Conditions générales de vente de la boutique en ligne Vanland Voyage pour l\'achat d\'équipements et accessoires pour vans.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function CgvBoutiqueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente - Atelier',
  description: 'Conditions générales de vente de l\'atelier Vanland Voyage pour les prestations d\'aménagement de fourgons et vans à Tours.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function CgvLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


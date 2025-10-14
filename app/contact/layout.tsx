import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez Vanland Voyage pour votre projet d\'aménagement de van. Atelier à Chanceaux-sur-Choisille près de Tours. Devis gratuit, sur rendez-vous.',
  keywords: ['contact vanland voyage', 'devis aménagement van', 'atelier van Tours', 'rendez-vous aménagement fourgon'],
  openGraph: {
    title: 'Contact | Vanland Voyage',
    description: 'Contactez Vanland Voyage pour votre projet d\'aménagement de van. Atelier à Chanceaux-sur-Choisille près de Tours. Devis gratuit, sur rendez-vous.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

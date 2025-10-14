import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de Cookies',
  description: 'Politique de gestion des cookies du site Vanland Voyage.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PolitiqueCookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


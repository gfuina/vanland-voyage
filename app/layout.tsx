import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "@/components/CookieConsent";
import { StructuredData } from "@/components/StructuredData";
import { AnalyticsTracker } from "@/components/AnalyticsTracker";
import ActualiteModal from "@/components/ActualiteModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vanland-voyage.fr'),
  title: {
    default: 'Vanland Voyage - Aménagement de Van sur Mesure à Tours',
    template: '%s | Vanland Voyage'
  },
  description: 'Artisans passionnés spécialisés dans l\'aménagement de fourgons sur mesure près de Tours. Projet complet, rénovation, pose d\'accessoires. Qualité, proximité et transparence.',
  keywords: ['aménagement van', 'aménagement fourgon', 'van aménagé Tours', 'fourgon aménagé', 'camper van', 'vanlife', 'aménagement camping-car', 'artisan van Tours', 'homologation VASP', 'isolation van', 'électricité van'],
  authors: [{ name: 'Vanland Voyage' }],
  creator: 'Vanland Voyage',
  publisher: 'Vanland Voyage',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://vanland-voyage.fr',
    siteName: 'Vanland Voyage',
    title: 'Vanland Voyage - Aménagement de Van sur Mesure à Tours',
    description: 'Artisans passionnés spécialisés dans l\'aménagement de fourgons sur mesure près de Tours. Projet complet, rénovation, pose d\'accessoires.',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Vanland Voyage - Aménagement de van'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vanland Voyage - Aménagement de Van sur Mesure à Tours',
    description: 'Artisans passionnés spécialisés dans l\'aménagement de fourgons sur mesure près de Tours.',
    images: ['/images/hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Ajoutez vos codes de vérification ici quand vous les aurez
    // google: 'votre-code-google',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AnalyticsTracker />
        {children}
        <CookieConsent />
        <ActualiteModal />
      </body>
    </html>
  );
}

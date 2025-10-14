import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Qui sommes-nous ?',
  description: 'Découvrez Julia et Benjamin, artisans passionnés d\'aménagement de vans à Tours. Notre histoire, nos valeurs : proximité, transparence et qualité.',
  openGraph: {
    title: 'Qui sommes-nous ? | Vanland Voyage',
    description: 'Découvrez Julia et Benjamin, artisans passionnés d\'aménagement de vans à Tours. Notre histoire, nos valeurs : proximité, transparence et qualité.',
    images: ['/images/IMG_8547-600x600.jpeg'],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions Légales',
  description: 'Mentions légales du site Vanland Voyage - Aménagement de fourgons et vans à Tours.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function MentionsLegalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formation Master-Classe | Vanland Voyage",
  description:
    "Apprenez à aménager votre van ou fourgon vous-même avec notre formation de 2 jours. Programme complet : isolation, électricité, plomberie, VASP et plus encore.",
  keywords:
    "formation van, aménagement fourgon, master class van, formation vanlife, apprendre aménagement van, formation VASP, Tours",
};

export default function FormationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


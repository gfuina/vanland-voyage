import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Votre Projet Complet | Vanland Voyage",
  description:
    "Découvrez toutes les étapes de votre projet d'aménagement de van sur mesure avec Vanland Voyage. De la location test à la livraison, nous vous accompagnons à chaque étape.",
};

export default function ProjetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


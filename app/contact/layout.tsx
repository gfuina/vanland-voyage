import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Vanland Voyage",
  description:
    "Contactez Vanland Voyage pour discuter de votre projet d'aménagement de van. Nous sommes à votre écoute pour répondre à toutes vos questions.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


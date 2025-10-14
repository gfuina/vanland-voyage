import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Partner from "@/models/Partner";

export async function POST() {
  try {
    await dbConnect();

    // Vérifier s'il y a déjà des partenaires
    const existingPartners = await Partner.countDocuments();
    if (existingPartners > 0) {
      return NextResponse.json({
        success: false,
        message: "Des partenaires existent déjà. Supprimez-les d'abord si vous voulez réinitialiser.",
      });
    }

    const initialPartners = [
      {
        name: "VICTRON ENERGY",
        logo: "/images/partners/victron-energy.webp",
        description: "Matériel électrique",
        subtitle: "Revendeur et installateur qualifié",
        category: "Électricité",
        order: 1,
        published: true,
      },
      {
        name: "THITRONIK",
        logo: "/images/partners/thitronik.png",
        description: "Alarme",
        subtitle: "Installateur agréé pour la pose du système de protection complet",
        category: "Sécurité",
        order: 2,
        published: true,
      },
      {
        name: "AUTOTERM",
        logo: "/images/partners/autoterm.png",
        description: "Chauffage / Chauffe-eau",
        subtitle: "Installateur agréé, matériel garantie 3 ans",
        category: "Chauffage",
        order: 3,
        published: true,
      },
      {
        name: "FRONT RUNNER",
        logo: "/images/partners/front-runner.png",
        description: "Équipements OFF-ROAD",
        subtitle: "Par DOMETIC",
        category: "Accessoires",
        order: 4,
        published: true,
      },
      {
        name: "SO LIEGE",
        logo: "/images/partners/soliege.svg",
        description: "Isolation naturelle en Liège",
        subtitle: "Fabriqué en France",
        category: "Isolation",
        order: 5,
        published: true,
      },
      {
        name: "SKEP LIFE",
        logo: "/images/partners/images.png",
        description: "Porte-matériel / Porte-vélo",
        subtitle: "Modulable et français",
        category: "Accessoires",
        order: 6,
        published: true,
      },
    ];

    await Partner.insertMany(initialPartners);

    return NextResponse.json({
      success: true,
      message: `${initialPartners.length} partenaires ajoutés avec succès`,
    });
  } catch (error) {
    console.error("Erreur lors du seed des partenaires:", error);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}


import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import AdventGift from "@/models/AdventGift";

// GET - Récupérer tous les cadeaux
export async function GET() {
  try {
    await dbConnect();
    const gifts = await AdventGift.find({}).sort({ day: 1 });

    return NextResponse.json({
      success: true,
      gifts: gifts.map((gift) => ({
        _id: gift._id.toString(),
        day: gift.day,
        title: gift.title,
        description: gift.description,
        imageUrl: gift.imageUrl,
        ctaText: gift.ctaText,
        ctaLink: gift.ctaLink,
        createdAt: gift.createdAt,
        updatedAt: gift.updatedAt,
      })),
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des cadeaux:", error);
    return NextResponse.json(
      { success: false, error: "Erreur serveur" },
      { status: 500 }
    );
  }
}

// POST - Créer un nouveau cadeau
export async function POST(request: Request) {
  try {
    await dbConnect();
    const data = await request.json();

    const gift = await AdventGift.create(data);

    return NextResponse.json({
      success: true,
      gift: {
        _id: gift._id.toString(),
        day: gift.day,
        title: gift.title,
        description: gift.description,
        imageUrl: gift.imageUrl,
        ctaText: gift.ctaText,
        ctaLink: gift.ctaLink,
        createdAt: gift.createdAt,
        updatedAt: gift.updatedAt,
      },
    });
  } catch (error: unknown) {
    console.error("Erreur lors de la création du cadeau:", error);
    if (error instanceof Error && (error as { code?: number }).code === 11000) {
      return NextResponse.json(
        { success: false, error: "Un cadeau existe déjà pour ce jour" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: "Erreur serveur" },
      { status: 500 }
    );
  }
}


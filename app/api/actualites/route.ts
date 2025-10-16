import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Actualite from "@/models/Actualite";

// GET - Récupérer toutes les actualités
export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const searchParams = request.nextUrl.searchParams;
    const activeOnly = searchParams.get("active") === "true";

    let query = {};
    
    if (activeOnly) {
      const now = new Date();
      query = {
        active: true,
        dateDebut: { $lte: now },
        dateFin: { $gte: now },
      };
    }

    const actualites = await Actualite.find(query).sort({ createdAt: -1 });

    return NextResponse.json({ actualites }, { status: 200 });
  } catch (error) {
    console.error("Erreur GET actualites:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des actualités" },
      { status: 500 }
    );
  }
}

// POST - Créer une nouvelle actualité
export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();

    // Si on active cette actualité, désactiver toutes les autres
    if (body.active) {
      await Actualite.updateMany({}, { active: false });
    }

    const actualite = await Actualite.create(body);

    return NextResponse.json(actualite, { status: 201 });
  } catch (error) {
    console.error("Erreur POST actualite:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Erreur lors de la création" },
      { status: 500 }
    );
  }
}


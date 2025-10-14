import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Realisation from "@/models/Realisation";

// GET - Liste des réalisations
export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const searchParams = request.nextUrl.searchParams;
    const type = searchParams.get("type");
    const published = searchParams.get("published");

    let query: any = {};

    if (type) {
      query.type = type;
    }

    if (published !== null) {
      query.published = published === "true";
    }

    const realisations = await Realisation.find(query)
      .sort({ order: 1, createdAt: -1 })
      .lean();

    return NextResponse.json(realisations);
  } catch (error) {
    console.error("Erreur GET realisations:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des réalisations" },
      { status: 500 }
    );
  }
}

// POST - Créer une réalisation
export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    const realisation = await Realisation.create(body);

    return NextResponse.json(realisation, { status: 201 });
  } catch (error: any) {
    console.error("Erreur POST realisation:", error);
    return NextResponse.json(
      { error: error.message || "Erreur lors de la création" },
      { status: 500 }
    );
  }
}


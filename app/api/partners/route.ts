import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Partner from "@/models/Partner";

export async function GET() {
  try {
    await dbConnect();
    const partners = await Partner.find({ published: true })
      .sort({ order: 1, createdAt: 1 });
    
    return NextResponse.json({
      success: true,
      partners,
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des partenaires:", error);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, logo, description, subtitle, category, website, order } = body;

    if (!name || !logo || !description || !subtitle) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis" },
        { status: 400 }
      );
    }

    await dbConnect();
    
    const partner = await Partner.create({
      name,
      logo,
      description,
      subtitle,
      category,
      website,
      order: order || 0,
      published: true,
    });

    return NextResponse.json({
      success: true,
      partner,
    });
  } catch (error) {
    console.error("Erreur lors de la création du partenaire:", error);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}


import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Actualite from "@/models/Actualite";

// GET - Récupérer une actualité par ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();

    const actualite = await Actualite.findById(params.id);

    if (!actualite) {
      return NextResponse.json(
        { error: "Actualité non trouvée" },
        { status: 404 }
      );
    }

    return NextResponse.json(actualite, { status: 200 });
  } catch (error) {
    console.error("Erreur GET actualite:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération" },
      { status: 500 }
    );
  }
}

// PUT - Mettre à jour une actualité
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();

    const body = await request.json();

    // Si on active cette actualité, désactiver toutes les autres
    if (body.active) {
      await Actualite.updateMany({ _id: { $ne: params.id } }, { active: false });
    }

    const actualite = await Actualite.findByIdAndUpdate(
      params.id,
      body,
      { new: true, runValidators: true }
    );

    if (!actualite) {
      return NextResponse.json(
        { error: "Actualité non trouvée" },
        { status: 404 }
      );
    }

    return NextResponse.json(actualite, { status: 200 });
  } catch (error) {
    console.error("Erreur PUT actualite:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Erreur lors de la mise à jour" },
      { status: 500 }
    );
  }
}

// DELETE - Supprimer une actualité
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();

    const actualite = await Actualite.findByIdAndDelete(params.id);

    if (!actualite) {
      return NextResponse.json(
        { error: "Actualité non trouvée" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Actualité supprimée" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur DELETE actualite:", error);
    return NextResponse.json(
      { error: "Erreur lors de la suppression" },
      { status: 500 }
    );
  }
}


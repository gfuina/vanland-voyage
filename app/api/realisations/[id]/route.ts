import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Realisation from "@/models/Realisation";

// GET - Une réalisation par ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();
    const { id } = await params;

    const realisation = await Realisation.findById(id).lean();

    if (!realisation) {
      return NextResponse.json(
        { error: "Réalisation non trouvée" },
        { status: 404 }
      );
    }

    return NextResponse.json(realisation);
  } catch (error) {
    console.error("Erreur GET realisation:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération" },
      { status: 500 }
    );
  }
}

// PUT - Mettre à jour une réalisation
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();
    const { id } = await params;
    const body = await request.json();

    const realisation = await Realisation.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!realisation) {
      return NextResponse.json(
        { error: "Réalisation non trouvée" },
        { status: 404 }
      );
    }

    return NextResponse.json(realisation);
  } catch (error: any) {
    console.error("Erreur PUT realisation:", error);
    return NextResponse.json(
      { error: error.message || "Erreur lors de la mise à jour" },
      { status: 500 }
    );
  }
}

// DELETE - Supprimer une réalisation
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();
    const { id } = await params;

    const realisation = await Realisation.findByIdAndDelete(id);

    if (!realisation) {
      return NextResponse.json(
        { error: "Réalisation non trouvée" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Réalisation supprimée" });
  } catch (error) {
    console.error("Erreur DELETE realisation:", error);
    return NextResponse.json(
      { error: "Erreur lors de la suppression" },
      { status: 500 }
    );
  }
}


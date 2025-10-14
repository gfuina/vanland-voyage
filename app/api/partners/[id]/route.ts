import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Partner from "@/models/Partner";
import { del } from "@vercel/blob";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    await dbConnect();
    
    const partner = await Partner.findByIdAndUpdate(
      id,
      body,
      { new: true, runValidators: true }
    );

    if (!partner) {
      return NextResponse.json(
        { error: "Partenaire non trouvé" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      partner,
    });
  } catch (error) {
    console.error("Erreur lors de la mise à jour du partenaire:", error);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await dbConnect();
    
    const partner = await Partner.findById(id);

    if (!partner) {
      return NextResponse.json(
        { error: "Partenaire non trouvé" },
        { status: 404 }
      );
    }

    // Supprimer le logo de Vercel Blob si c'est une URL blob
    if (partner.logo && partner.logo.includes('blob.vercel-storage.com')) {
      try {
        await del(partner.logo);
      } catch (error) {
        console.error("Erreur lors de la suppression du blob:", error);
      }
    }

    await Partner.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "Partenaire supprimé avec succès",
    });
  } catch (error) {
    console.error("Erreur lors de la suppression du partenaire:", error);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}


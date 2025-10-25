import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Team from "@/models/Team";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();
    const body = await request.json();
    const { id } = await params;

    const teamMember = await Team.findByIdAndUpdate(
      id,
      body,
      { new: true }
    );

    if (!teamMember) {
      return NextResponse.json(
        { success: false, error: "Membre non trouvé" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      teamMember,
    });
  } catch (error) {
    console.error("Erreur lors de la mise à jour:", error);
    return NextResponse.json(
      { success: false, error: "Erreur lors de la mise à jour" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();
    const { id } = await params;
    
    const teamMember = await Team.findByIdAndDelete(id);

    if (!teamMember) {
      return NextResponse.json(
        { success: false, error: "Membre non trouvé" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Membre supprimé avec succès",
    });
  } catch (error) {
    console.error("Erreur lors de la suppression:", error);
    return NextResponse.json(
      { success: false, error: "Erreur lors de la suppression" },
      { status: 500 }
    );
  }
}


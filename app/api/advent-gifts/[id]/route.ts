import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import AdventGift from "@/models/AdventGift";

// PUT - Mettre à jour un cadeau
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();
    const { id } = await params;
    const data = await request.json();

    const gift = await AdventGift.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });

    if (!gift) {
      return NextResponse.json(
        { success: false, error: "Cadeau non trouvé" },
        { status: 404 }
      );
    }

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
  } catch (error) {
    console.error("Erreur lors de la mise à jour du cadeau:", error);
    return NextResponse.json(
      { success: false, error: "Erreur serveur" },
      { status: 500 }
    );
  }
}

// DELETE - Supprimer un cadeau
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();
    const { id } = await params;

    const gift = await AdventGift.findByIdAndDelete(id);

    if (!gift) {
      return NextResponse.json(
        { success: false, error: "Cadeau non trouvé" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur lors de la suppression du cadeau:", error);
    return NextResponse.json(
      { success: false, error: "Erreur serveur" },
      { status: 500 }
    );
  }
}


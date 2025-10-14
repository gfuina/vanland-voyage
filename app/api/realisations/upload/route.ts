import { put } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Vérifier que le token est configuré
    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      console.error("BLOB_READ_WRITE_TOKEN n'est pas configuré");
      return NextResponse.json(
        { error: "Configuration manquante : BLOB_READ_WRITE_TOKEN" },
        { status: 500 }
      );
    }

    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { error: "Aucun fichier fourni" },
        { status: 400 }
      );
    }

    // Vérifier que c'est une image
    if (!file.type.startsWith("image/")) {
      return NextResponse.json(
        { error: "Le fichier doit être une image" },
        { status: 400 }
      );
    }

    console.log("Upload fichier:", file.name, file.type, file.size);

    // Upload vers Vercel Blob avec un nom unique
    const blob = await put(file.name, file, {
      access: "public",
      addRandomSuffix: true,
    });

    console.log("Upload réussi:", blob.url);

    return NextResponse.json({ url: blob.url });
  } catch (error: any) {
    console.error("Erreur upload:", error);
    return NextResponse.json(
      { error: error.message || "Erreur lors de l'upload" },
      { status: 500 }
    );
  }
}


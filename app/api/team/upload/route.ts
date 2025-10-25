import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { success: false, error: "Aucun fichier fourni" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Créer un nom de fichier unique
    const timestamp = Date.now();
    const filename = `${timestamp}-${file.name.replace(/\s+/g, "-")}`;
    const uploadDir = path.join(process.cwd(), "public", "images", "team");
    
    // Créer le dossier s'il n'existe pas
    try {
      await mkdir(uploadDir, { recursive: true });
    } catch {
      // Le dossier existe déjà
    }

    const filepath = path.join(uploadDir, filename);
    await writeFile(filepath, buffer);

    // Retourner l'URL relative
    const url = `/images/team/${filename}`;

    return NextResponse.json({
      success: true,
      url,
    });
  } catch (error) {
    console.error("Erreur lors de l'upload:", error);
    return NextResponse.json(
      { success: false, error: "Erreur lors de l'upload du fichier" },
      { status: 500 }
    );
  }
}


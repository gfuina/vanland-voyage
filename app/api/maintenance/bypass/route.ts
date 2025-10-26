import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    // Vérifier le mot de passe contre la variable d'environnement
    const validPassword = process.env.MAINTENANCE_BYPASS_PASSWORD;

    if (!validPassword) {
      return NextResponse.json(
        { error: "Mot de passe de bypass non configuré" },
        { status: 500 }
      );
    }

    if (password === validPassword) {
      const response = NextResponse.json({ success: true });
      
      // Créer un cookie de bypass valide pendant 24h
      response.cookies.set("maintenance-bypass", "active", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24, // 24 heures
        path: "/",
      });

      return response;
    }

    return NextResponse.json(
      { error: "Mot de passe incorrect" },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur lors de la vérification" },
      { status: 500 }
    );
  }
}


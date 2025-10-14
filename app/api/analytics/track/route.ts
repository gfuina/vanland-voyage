import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import PageView from "@/models/Analytics";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { page } = body;

    if (!page) {
      return NextResponse.json(
        { error: "Page requise" },
        { status: 400 }
      );
    }

    const userAgent = request.headers.get("user-agent") || "";
    const referer = request.headers.get("referer") || "";
    
    // Détecter le type d'appareil
    let device: "mobile" | "tablet" | "desktop" = "desktop";
    if (/mobile/i.test(userAgent)) {
      device = "mobile";
    } else if (/tablet|ipad/i.test(userAgent)) {
      device = "tablet";
    }

    await dbConnect();
    
    await PageView.create({
      page,
      userAgent,
      referer,
      device,
      timestamp: new Date(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur lors du tracking:", error);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}


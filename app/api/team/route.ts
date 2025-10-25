import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Team from "@/models/Team";

export async function GET() {
  try {
    await dbConnect();
    const team = await Team.find().sort({ order: 1, createdAt: -1 });
    
    return NextResponse.json({
      success: true,
      team,
    });
  } catch (error) {
    console.error("Erreur lors de la récupération de l'équipe:", error);
    return NextResponse.json(
      { success: false, error: "Erreur lors de la récupération de l'équipe" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();

    const teamMember = await Team.create(body);

    return NextResponse.json({
      success: true,
      teamMember,
    });
  } catch (error) {
    console.error("Erreur lors de la création du membre:", error);
    return NextResponse.json(
      { success: false, error: "Erreur lors de la création du membre" },
      { status: 500 }
    );
  }
}


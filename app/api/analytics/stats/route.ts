import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import PageView from "@/models/Analytics";
import Contact from "@/models/Contact";

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const period = searchParams.get("period") || "30"; // jours
    const days = parseInt(period);

    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    // Total des vues
    const totalViews = await PageView.countDocuments({
      timestamp: { $gte: startDate },
    });

    // Vues par jour (derniers 30 jours)
    const viewsByDay = await PageView.aggregate([
      {
        $match: {
          timestamp: { $gte: startDate },
        },
      },
      {
        $group: {
          _id: {
            $dateToString: { format: "%Y-%m-%d", date: "$timestamp" },
          },
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    // Pages les plus vues
    const topPages = await PageView.aggregate([
      {
        $match: {
          timestamp: { $gte: startDate },
        },
      },
      {
        $group: {
          _id: "$page",
          count: { $sum: 1 },
        },
      },
      { $sort: { count: -1 } },
      { $limit: 10 },
    ]);

    // Vues par appareil
    const viewsByDevice = await PageView.aggregate([
      {
        $match: {
          timestamp: { $gte: startDate },
        },
      },
      {
        $group: {
          _id: "$device",
          count: { $sum: 1 },
        },
      },
    ]);

    // Sources de trafic (referer)
    const trafficSources = await PageView.aggregate([
      {
        $match: {
          timestamp: { $gte: startDate },
          referer: { $ne: "" },
        },
      },
      {
        $group: {
          _id: "$referer",
          count: { $sum: 1 },
        },
      },
      { $sort: { count: -1 } },
      { $limit: 10 },
    ]);

    // Contacts par jour
    const contactsByDay = await Contact.aggregate([
      {
        $match: {
          createdAt: { $gte: startDate },
        },
      },
      {
        $group: {
          _id: {
            $dateToString: { format: "%Y-%m-%d", date: "$createdAt" },
          },
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    // Taux de conversion (contacts / vues de la page contact)
    const contactPageViews = await PageView.countDocuments({
      timestamp: { $gte: startDate },
      page: "/contact",
    });

    const totalContacts = await Contact.countDocuments({
      createdAt: { $gte: startDate },
    });

    const conversionRate = contactPageViews > 0 
      ? ((totalContacts / contactPageViews) * 100).toFixed(2)
      : 0;

    return NextResponse.json({
      success: true,
      stats: {
        totalViews,
        viewsByDay,
        topPages,
        viewsByDevice,
        trafficSources,
        contactsByDay,
        conversionRate,
        totalContacts,
      },
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des stats:", error);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}


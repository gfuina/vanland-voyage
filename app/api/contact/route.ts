import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import dbConnect from "@/lib/mongodb";
import Contact from "@/models/Contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, service, message, rgpdConsent } =
      body;

    // Validation
    if (!firstName || !lastName || !email || !service || !message) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis" },
        { status: 400 }
      );
    }

    if (!rgpdConsent) {
      return NextResponse.json(
        { error: "Vous devez accepter les conditions RGPD" },
        { status: 400 }
      );
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email invalide" },
        { status: 400 }
      );
    }

    // Sauvegarder dans la base de données
    await dbConnect();
    const contact = await Contact.create({
      firstName,
      lastName,
      email,
      phone,
      service,
      message,
      status: "nouveau",
    });

    // Envoyer l'email à l'entreprise via Resend
    const { data, error } = await resend.emails.send({
      from: "Vanland Voyage <contact@vanland-voyage.fr>",
      to: ["contact@vanland-voyage.fr"],
      replyTo: email,
      subject: `Nouveau contact : ${service} - ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #222359;">Nouvelle demande de contact</h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h3 style="color: #31ade1; margin-top: 0;">Informations du client</h3>
            <p><strong>Prénom :</strong> ${firstName}</p>
            <p><strong>Nom :</strong> ${lastName}</p>
            <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p><strong>Téléphone :</strong> ${phone}</p>` : ""}
            <p><strong>Type de demande :</strong> ${service}</p>
          </div>

          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #f9c81c; margin: 20px 0;">
            <h3 style="color: #222359; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #666; font-size: 12px;">
            <p>Email envoyé depuis le formulaire de contact du site Vanland Voyage</p>
            <p>Date : ${new Date().toLocaleString("fr-FR")}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Erreur Resend:", error);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi de l'email" },
        { status: 500 }
      );
    }

    // Envoyer l'email de confirmation au client
    await resend.emails.send({
      from: "Vanland Voyage <contact@vanland-voyage.fr>",
      to: [email],
      subject: "Confirmation de votre demande - Vanland Voyage",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #222359 0%, #31ade1 100%); padding: 30px; border-radius: 20px 20px 0 0; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px;">Vanland Voyage</h1>
          </div>

          <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 20px 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h2 style="color: #222359; margin-top: 0;">Bonjour ${firstName} ${lastName},</h2>
            
            <p style="color: #333; line-height: 1.6;">
              Merci d'avoir contacté <strong>Vanland Voyage</strong> ! Nous avons bien reçu votre demande concernant : <strong>${service}</strong>.
            </p>

            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 15px; margin: 25px 0; border-left: 4px solid #f9c81c;">
              <h3 style="color: #31ade1; margin-top: 0; font-size: 18px;">Récapitulatif de votre demande</h3>
              <p style="color: #333; margin: 10px 0;"><strong>Type de demande :</strong> ${service}</p>
              ${phone ? `<p style="color: #333; margin: 10px 0;"><strong>Téléphone :</strong> ${phone}</p>` : ""}
              <p style="color: #333; margin: 10px 0;"><strong>Message :</strong></p>
              <p style="color: #555; background: white; padding: 15px; border-radius: 10px; white-space: pre-wrap;">${message}</p>
            </div>

            <p style="color: #333; line-height: 1.6;">
              Nous vous répondrons dans les <strong>plus brefs délais</strong>. En attendant, n'hésitez pas à consulter nos réalisations sur notre site web.
            </p>

            <div style="background: linear-gradient(135deg, #f9c81c 0%, #ffdb4d 100%); padding: 20px; border-radius: 15px; margin: 25px 0; text-align: center;">
              <p style="color: #222359; margin: 0; font-weight: bold; font-size: 16px;">
                📍 Notre atelier : 840 impasse Petit Couleur, ZI du Cassantin<br/>
                37390 Chanceaux-sur-Choisille
              </p>
              <p style="color: #222359; margin: 10px 0 0 0; font-size: 14px;">
                ⚠️ <strong>UNIQUEMENT SUR RENDEZ-VOUS</strong>
              </p>
            </div>

            <div style="text-align: center; margin-top: 30px;">
              <p style="color: #666; margin-bottom: 10px;">Suivez-nous sur nos réseaux :</p>
              <div style="margin: 20px 0;">
                <a href="https://vanland-voyage.fr" style="display: inline-block; padding: 12px 30px; background: linear-gradient(135deg, #222359 0%, #31ade1 100%); color: white; text-decoration: none; border-radius: 25px; font-weight: bold; margin: 0 5px;">
                  Visitez notre site
                </a>
              </div>
            </div>
          </div>

          <div style="text-align: center; margin-top: 30px; padding: 20px; color: #999; font-size: 12px;">
            <p>Vanland Voyage - Spécialiste de l'aménagement de vans et fourgons</p>
            <p>📧 contact@vanland-voyage.fr | 📞 07 56 85 85 41</p>
            <p style="margin-top: 15px;">
              Cet email a été envoyé automatiquement suite à votre demande de contact sur vanland-voyage.fr
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Message envoyé avec succès !", data, contactId: contact._id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur serveur:", error);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();
    const contacts = await Contact.find().sort({ createdAt: -1 });
    
    return NextResponse.json({
      success: true,
      contacts,
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des contacts:", error);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}


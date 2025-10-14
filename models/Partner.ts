import mongoose, { Schema, model, models } from "mongoose";

export interface IPartner {
  name: string;
  logo: string; // URL du logo (Vercel Blob)
  description: string;
  subtitle: string;
  category?: string;
  website?: string;
  order: number;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const PartnerSchema = new Schema<IPartner>(
  {
    name: {
      type: String,
      required: [true, "Le nom est requis"],
      trim: true,
    },
    logo: {
      type: String,
      required: [true, "Le logo est requis"],
    },
    description: {
      type: String,
      required: [true, "La description est requise"],
    },
    subtitle: {
      type: String,
      required: [true, "Le sous-titre est requis"],
    },
    category: {
      type: String,
      trim: true,
    },
    website: {
      type: String,
      trim: true,
    },
    order: {
      type: Number,
      default: 0,
    },
    published: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Index pour l'ordre d'affichage
PartnerSchema.index({ order: 1, createdAt: 1 });

const Partner =
  models.Partner || model<IPartner>("Partner", PartnerSchema);

export default Partner;


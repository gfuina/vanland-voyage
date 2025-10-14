import mongoose, { Schema, model, models } from "mongoose";

export interface IRealisation {
  title: string;
  description: string;
  category: "complet" | "partiel" | "accessoire";
  images: string[];
  coverImage: string;
  vehicleType: string; // Ex: "Fiat Ducato L2H2"
  year?: number;
  duration?: string; // Ex: "3 mois"
  features: string[]; // Ex: ["Isolation liège", "Installation électrique Victron"]
  client?: {
    name?: string;
    testimonial?: string;
  };
  published: boolean;
  order: number; // Pour l'ordre d'affichage
  createdAt: Date;
  updatedAt: Date;
}

const RealisationSchema = new Schema<IRealisation>(
  {
    title: {
      type: String,
      required: [true, "Le titre est requis"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "La description est requise"],
    },
    category: {
      type: String,
      enum: ["complet", "partiel", "accessoire"],
      required: [true, "La catégorie est requise"],
      default: "complet",
    },
    images: {
      type: [String],
      default: [],
    },
    coverImage: {
      type: String,
      required: [true, "L'image de couverture est requise"],
    },
    vehicleType: {
      type: String,
      required: [true, "Le type de véhicule est requis"],
    },
    year: {
      type: Number,
    },
    duration: {
      type: String,
    },
    features: {
      type: [String],
      default: [],
    },
    client: {
      name: String,
      testimonial: String,
    },
    published: {
      type: Boolean,
      default: false,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Index pour l'ordre d'affichage
RealisationSchema.index({ order: 1, createdAt: -1 });

// Éviter la re-compilation du modèle en développement
const Realisation =
  models.Realisation || model<IRealisation>("Realisation", RealisationSchema);

export default Realisation;


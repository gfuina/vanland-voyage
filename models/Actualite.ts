import mongoose, { Schema, model, models } from "mongoose";

export interface IActualite {
  titre: string;
  description: string;
  image?: string;
  cta?: {
    texte: string;
    lien: string;
  };
  dateDebut: Date;
  dateFin: Date;
  active: boolean; // Une seule actualité peut être active à la fois
  createdAt: Date;
  updatedAt: Date;
}

const ActualiteSchema = new Schema<IActualite>(
  {
    titre: {
      type: String,
      required: [true, "Le titre est requis"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "La description est requise"],
    },
    image: {
      type: String,
    },
    cta: {
      texte: String,
      lien: String,
    },
    dateDebut: {
      type: Date,
      required: [true, "La date de début est requise"],
    },
    dateFin: {
      type: Date,
      required: [true, "La date de fin est requise"],
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Index pour trouver rapidement l'actualité active
ActualiteSchema.index({ active: 1, dateDebut: 1, dateFin: 1 });

// Éviter la re-compilation du modèle en développement
const Actualite =
  models.Actualite || model<IActualite>("Actualite", ActualiteSchema);

export default Actualite;


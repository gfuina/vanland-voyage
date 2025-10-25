import mongoose, { Schema, model, models } from "mongoose";

export interface IRealisationPhotos {
  general?: string[];
  cuisine?: string[];
  douche?: string[];
  salon?: string[];
  lit?: string[];
  technique?: string[];
  exterieur?: string[];
}

export interface IRealisationPhotosRenovation {
  avant?: string[];
  apres?: string[];
}

export interface IRealisation {
  // Infos principales
  numero: string; // Ex: "#5"
  titre: string; // Ex: "FIAT DUCATO H2L3 - 2025"
  type: "amenagement_complet" | "renovation" | "pose_accessoires"; 
  description: string; // Description générale/intro
  descriptionRapide?: string; // Description courte pour les cards
  coverImage: string; // Image de couverture
  photos: IRealisationPhotos; // Photos catégorisées
  photosRenovation?: IRealisationPhotosRenovation; // Photos avant/après pour rénovations
  
  // Détails véhicule
  vehicule?: {
    marque?: string;
    modele?: string;
    annee?: number;
    dimensions?: string; // Ex: "H2L3"
  };
  
  // Sections optionnelles pour aménagements complets
  nouveautes?: string[]; // Liste des nouveautés
  cuisine?: string; // Description bloc cuisine
  douche?: string; // Description partie douche
  salon?: string; // Description salon/banquettes
  lit?: string; // Description lit/couchage
  autonomie?: string; // Description système autonomie
  technique?: string; // Détails techniques
  
  // Partenaires
  partenaires?: string[];
  
  // Publication
  published: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const RealisationSchema = new Schema<IRealisation>(
  {
    numero: {
      type: String,
      required: [true, "Le numéro est requis"],
      trim: true,
    },
    titre: {
      type: String,
      required: [true, "Le titre est requis"],
      trim: true,
    },
    type: {
      type: String,
      enum: ["amenagement_complet", "renovation", "pose_accessoires"],
      required: [true, "Le type est requis"],
    },
    description: {
      type: String,
      required: [true, "La description est requise"],
    },
    descriptionRapide: {
      type: String,
      required: false,
    },
    coverImage: {
      type: String,
      required: [true, "L'image de couverture est requise"],
    },
    photos: {
      general: [String],
      cuisine: [String],
      douche: [String],
      salon: [String],
      lit: [String],
      technique: [String],
      exterieur: [String],
    },
    photosRenovation: {
      avant: [String],
      apres: [String],
    },
    vehicule: {
      marque: String,
      modele: String,
      annee: Number,
      dimensions: String,
    },
    nouveautes: [String],
    cuisine: String,
    douche: String,
    salon: String,
    lit: String,
    autonomie: String,
    technique: String,
    partenaires: [String],
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

// Index pour l'ordre d'affichage et le type
RealisationSchema.index({ type: 1, order: 1, createdAt: -1 });

// Éviter la re-compilation du modèle en développement
const Realisation =
  models.Realisation || model<IRealisation>("Realisation", RealisationSchema);

export default Realisation;


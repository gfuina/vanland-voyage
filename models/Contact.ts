import mongoose, { Schema, model, models } from "mongoose";

export interface IContact {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
  status: "nouveau" | "traité" | "archivé";
  createdAt: Date;
  updatedAt: Date;
}

const ContactSchema = new Schema<IContact>(
  {
    firstName: {
      type: String,
      required: [true, "Le prénom est requis"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Le nom est requis"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "L'email est requis"],
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    service: {
      type: String,
      required: [true, "Le service est requis"],
    },
    message: {
      type: String,
      required: [true, "Le message est requis"],
    },
    status: {
      type: String,
      enum: ["nouveau", "traité", "archivé"],
      default: "nouveau",
    },
  },
  {
    timestamps: true,
  }
);

// Index pour trier par date et statut
ContactSchema.index({ status: 1, createdAt: -1 });

const Contact =
  models.Contact || model<IContact>("Contact", ContactSchema);

export default Contact;


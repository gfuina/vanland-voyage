import mongoose from "mongoose";

export interface IAdventGift {
  _id: string;
  day: number; // 1-24
  title: string;
  description: string;
  imageUrl: string;
  ctaText?: string;
  ctaLink?: string;
  createdAt: Date;
  updatedAt: Date;
}

const AdventGiftSchema = new mongoose.Schema(
  {
    day: {
      type: Number,
      required: true,
      min: 1,
      max: 24,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    ctaText: {
      type: String,
      default: "",
    },
    ctaLink: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.AdventGift ||
  mongoose.model("AdventGift", AdventGiftSchema);


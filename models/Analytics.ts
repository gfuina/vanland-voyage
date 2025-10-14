import mongoose, { Schema, model, models } from "mongoose";

export interface IPageView {
  page: string;
  userAgent?: string;
  referer?: string;
  country?: string;
  city?: string;
  device?: "mobile" | "tablet" | "desktop";
  timestamp: Date;
}

const PageViewSchema = new Schema<IPageView>(
  {
    page: {
      type: String,
      required: true,
      index: true,
    },
    userAgent: String,
    referer: String,
    country: String,
    city: String,
    device: {
      type: String,
      enum: ["mobile", "tablet", "desktop"],
    },
    timestamp: {
      type: Date,
      default: Date.now,
      index: true,
    },
  },
  {
    timestamps: false,
  }
);

// Index composé pour les requêtes de statistiques
PageViewSchema.index({ timestamp: -1, page: 1 });

const PageView =
  models.PageView || model<IPageView>("PageView", PageViewSchema);

export default PageView;


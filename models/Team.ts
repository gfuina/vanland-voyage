import mongoose from "mongoose";

const teamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    funPhoto: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["team", "external"],
      default: "team",
      required: true,
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

export default mongoose.models.Team || mongoose.model("Team", teamSchema);


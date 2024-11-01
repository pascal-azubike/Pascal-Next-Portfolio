import mongoose, { Schema, Document, Model } from "mongoose";

// Define Article interface
interface IArticle extends Document {
  title: string;
  description: string;
  shortSummary: string;

  imageUrl: string;
  numView: number;
  blurImage: string;
  pdfUrl: string;
  embedding: number[];
}

// Create Article schema
const ArticleSchema: Schema<IArticle> = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    shortSummary: { type: String, required: true },
    imageUrl: { type: String, required: true },
    numView: { type: Number, required: true },
    embedding: {
      type: [Number],
      select: false
    },
    blurImage: { type: String, required: true },
    pdfUrl: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

const Article: Model<IArticle> =
  mongoose.models.Article || mongoose.model<IArticle>("Article", ArticleSchema);

export default Article;

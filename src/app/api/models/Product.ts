import mongoose, { Schema, Document, Model } from "mongoose";
import { IUser } from "./User";

// Define Product interface
interface IProduct extends Document {
  title: string;
  price: number;
  description: string;
  imageUrl: string;
  numView: number;
  link: string;
  blurImage: string;
}

// Create Product schema
const ProductSchema: Schema<IProduct> = new Schema(
  {
    title: { type: String, required: true },
    link: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    imageUrl: { type: String, required: true },
    numView: { type: Number, required: true },

    blurImage: { type: String, required: true },

  },
  {
    timestamps: true
  }
);

const Product: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);

export default Product;

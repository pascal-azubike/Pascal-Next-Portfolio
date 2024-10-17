import mongoose, { Schema, Document, Model } from "mongoose";


// Define Article interface
interface IArticle extends Document {
    title: string;
    description: string;
    imageUrl: string;
    numView: number;
    blurImage: string;
}

// Create Article schema
const ArticleSchema: Schema<IArticle> = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String },
        imageUrl: { type: String, required: true },
        numView: { type: Number, required: true },

        blurImage: { type: String, required: true },

    },
    {
        timestamps: true
    }
);

const Article: Model<IArticle> =
    mongoose.models.Article || mongoose.model<IArticle>("Article", ArticleSchema);

export default Article;

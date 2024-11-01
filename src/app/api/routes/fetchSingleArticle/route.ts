import { connectDB } from "../../config/MongoDbConfig";
import { NextRequest, NextResponse } from "next/server";
import Article from "../../models/Article";
import { ObjectId } from "mongodb";

export const GET = async (req: NextRequest) => {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const articleId = searchParams.get("articleId");
    const place = searchParams.get("place");

    // Fetch the main article
    const article = await Article.findById(articleId).select("+embedding");

    if (!article) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 });
    }

    // Increment view count if not from place page
    if (!place) {
      article.numView = (article.numView || 0) + 1;
      await article.save();
    }

    console.log("Embedding:", article, article.embedding);

    // Find similar articles using vector similarity
    const similarArticles = await Article.aggregate([
      {
        $vectorSearch: {
          index: "vector_index",
          limit: 6,
          numCandidates: 50,
          path: "embedding",
          queryVector: article.embedding
        }
      },
      {
        $project: {
          _id: 1,
          title: 1,
          shortSummary: 1,
          score: { $meta: "searchScore" }
        }
      }
    ]);

    console.log(similarArticles, "similar ........................");
    return NextResponse.json(
      {
        message: "Article and similar articles fetched successfully",
        article,
        similarArticles
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error, "error........................");
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

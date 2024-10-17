// src/pages/api/login.ts

import { connectDB } from "../../config/MongoDbConfig";
import { NextRequest, NextResponse } from "next/server";

import Article from "../../models/Article";

export const GET = async (req: NextRequest) => {
  try {
    await connectDB();

    // Extract the category query parameter from the request
    const { searchParams } = new URL(req.url);
    const articleId = searchParams.get("articleId");
    const place = searchParams.get("place");

    const article = await Article.findById(articleId);

    if (article && !place) {
      article.numView = (article.numView || 0) + 1;
      await article.save();
    }

    return NextResponse.json(
      {
        message: "article fetched successfully",
        article
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

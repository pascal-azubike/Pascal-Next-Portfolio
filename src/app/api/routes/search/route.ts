import { NextRequest, NextResponse } from "next/server";
import Article from "../../models/Article";

export const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);

    const searchTerm = searchParams.get("q")?.trim();

    const results = await Article.aggregate([
      {
        $search: {
          index: "default", // your atlas search index name
          text: {
            query: searchTerm,
            path: ["title", "description"] // fields to search in
          }
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
      //   {
      //     $match: {
      //       $expr: { $gt: [{ $meta: "searchScore" }, 1.0] }
      //     }
      //   }
    ]);
    console.log(results);
    return NextResponse.json(
      {
        message: "Products fetched successfully",
        results
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
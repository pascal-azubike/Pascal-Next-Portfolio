import { connectDB } from "../../config/MongoDbConfig";
import { NextRequest, NextResponse } from "next/server";
import Product from "../../models/Product";
import { PipelineStage } from "mongoose";
import AllProducts from '../../../Admin/manage-articles/page';
import Article from "../../models/Article";

export const GET = async (req: NextRequest) => {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("cursor") as string);
    const limit = parseInt(searchParams.get("limit") || "10");


    // Define the sort field and order
    const sortField = "createdAt";
    const sortOrder = -1;

    const skip = page * limit;

    // Define the aggregation pipeline with explicit PipelineStage type
    const aggregationPipeline: PipelineStage[] = [
      { $match: {} }, // No filtering criteria specified
      { $sort: { [sortField]: sortOrder } }, // Sort by `createdAt` in descending order
      { $skip: skip }, // Skip the first `skip` documents
      { $limit: limit + 1 }, // Limit to `limit + 1` documents to check for next page
    ];

    // Execute the aggregation pipeline


    const allProducts = await Article.aggregate(aggregationPipeline);



    const hasNextPage = allProducts.length > limit;
    const productsToSend = hasNextPage ? allProducts.slice(0, limit) : allProducts;
    const nextCursor = hasNextPage ? page + 1 : null;

    return NextResponse.json(
      {
        message: "Products fetched successfully",
        products: productsToSend,
        nextCursor,
        totalProducts: await Product.countDocuments({}),
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
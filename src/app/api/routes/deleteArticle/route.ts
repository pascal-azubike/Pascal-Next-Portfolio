import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../config/MongoDbConfig";
import Article from "../../models/Article";


export const DELETE = async (req: NextRequest) => {
  try {
    console.log("deleting product =====================================")
    await connectDB();

    // Check if the request method is DELETE and handle accordingly
    if (req.method === "DELETE") {
      // Get the request body
      const body = await req.json(); // Parse the request body to get productIds
      const productIds = body?.productIds;
      console.log(
        body,
        productIds,
        "......................................... ---------================="
      );
      if (productIds && productIds.length > 0) {
        // If productIds is an array and has elements, delete multiple products
        const deleteResults = await Article.deleteMany({
          _id: { $in: productIds }
        });

        if (deleteResults.deletedCount === 0) {
          return new NextResponse(
            JSON.stringify({ message: "No products found to delete" }),
            { status: 404 }
          );
        }

        return new NextResponse(
          JSON.stringify({ message: "Selected Products deleted successfully" }),
          { status: 200 }
        );
      } else {
        // If productIds is not provided, try to get a single productId from query params
        const { searchParams } = new URL(req.url);
        const productId = searchParams.get("productId");

        if (!productId) {
          return new NextResponse(
            JSON.stringify({ message: "Product ID is required" }),
            { status: 400 }
          );
        }

        const deletedProduct = await Article.findByIdAndDelete(productId);

        if (!deletedProduct) {
          return new NextResponse(
            JSON.stringify({ message: "Product not found" }),
            { status: 404 }
          );
        }

        return new NextResponse(
          JSON.stringify({ message: "Product deleted successfully" }),
          { status: 200 }
        );
      }
    } else {
      return new NextResponse(
        JSON.stringify({ message: "Method not allowed" }),
        { status: 405 }
      );
    }
  } catch (error) {
    console.error("Error deleting product:", error);
    return new NextResponse(
      JSON.stringify({ message: "Internal Server Error" }),
      { status: 500 }
    );
  }
};
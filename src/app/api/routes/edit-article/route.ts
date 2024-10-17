import Product from "../../models/Product";
import { NextRequest, NextResponse } from "next/server";



import { connectDB } from "../../config/MongoDbConfig";
import Article from "../../models/Article";

// Define the POST handler
export const POST = async (request: NextRequest) => {
    try {


        // if (loginUser?.privateMetadata?.admin !== true) {
        //     return NextResponse.json(
        //         { message: "You are not allowed to perform this operation" },
        //         { status: 401 }
        //     );
        // }

        await connectDB();


        const { searchParams } = new URL(request.url);
        const id = searchParams.get("productId")?.trim();

        if (!id) {
            return NextResponse.json(
                { message: "Product ID is required" },
                { status: 400 }
            );
        }

        const product = await Article.findById(id);

        if (!product) {
            return NextResponse.json(
                { message: "Product not found" },
                { status: 404 }
            );
        }

        // Parse the request body
        const reqBody = await request.json();
        const {
            title,

            description,
            image,
            blurImage,
        } = reqBody;

        // Update the product
        product.title = title || product.title;
        product.description = description || product.description;
        product.imageUrl = image || product.imageUrl;
        product.blurImage = blurImage || product.blurImage;
        await product.save();

        // Return success response
        return NextResponse.json(
            { status: "success", message: "Product updated successfully" },
            { status: 200 }
        );
    } catch (error: any) {
        console.log("error", error);
        // Handle errors
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};

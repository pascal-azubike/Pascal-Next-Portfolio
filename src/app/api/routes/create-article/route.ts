
import { NextRequest, NextResponse } from "next/server";




import { connectDB } from "../../config/MongoDbConfig";
import Article from "../../models/Article";
// Define the POST handler
export const POST = async (request: NextRequest) => {
  try {
    // if (loginUser?.privateMetadata?.admin !== true) {
    //   return NextResponse.json(
    //     { message: "You are not allowed to perform this operation" },
    //     { status: 401 }
    //   );
    // }
    connectDB();
    // Parse the request body
    const reqBody = await request.json();
    const {
      title,
      description,
      image,
      blurImage,

    } = reqBody;

    // Create the new product
    await Article.create({
      title,
      description,
      imageUrl: image,
      numView: 0,
      blurImage
    });

    // Return success response
    return NextResponse.json(
      { status: "success", message: "Product created successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    console.log("error =================================", error);
    // Handle errors
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

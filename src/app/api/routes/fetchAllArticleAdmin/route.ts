import { connectDB } from "../../config/MongoDbConfig";
import { NextRequest, NextResponse } from "next/server";
import Article from "../../models/Article";



export const GET = async (req: NextRequest) => {
    try {
        console.log('before  mongo ========================================')
        await connectDB();
        const { searchParams } = new URL(req.url);
        const minPrice = searchParams.get("minPrice")?.trim();
        const maxPrice = searchParams.get("maxPrice")?.trim();
        const selectedSort = searchParams.get("selectedSort")?.trim();
        const query = searchParams.get("query")?.trim();
        const subCategory = searchParams.get("subcategory")?.trim();
        const category = searchParams.get("category")?.trim();
        // Create a filter object
        console.log('After mongoose ========================================')
        const filter: any = {};

        if (category) {
            filter.category = { $regex: new RegExp(category as string, "i") }; // Case-insensitive search
        }

        if (subCategory) {
            filter.subCategory = { $regex: new RegExp(subCategory as string, "i") };
        }

        // Full-text search if query is provided
        if (query) {
            filter.$text = { $search: query };
        }

        // Price filtering
        if (minPrice) {
            filter.price = { ...filter.price, $gte: Number(minPrice) };
        }

        if (maxPrice) {
            filter.price = { ...filter.price, $lte: Number(maxPrice) };
        }

        // Sorting
        let sort: any = {};

        if (selectedSort === "highest price") {
            sort.price = -1;
        } else if (selectedSort === "lowest price") {
            sort.price = 1;
        } else if (selectedSort === "most popular") {
            sort.numView = -1; // Assuming there is a 'popularity' field
        }

        console.log(filter, 'filter ========================================')
        console.log(sort, 'sort ========================================')
        const allProducts = await Article.find(filter)


        return NextResponse.json(
            {
                message: "Products fetched successfully",
                allProducts,

            },
            { status: 200 }
        );
    } catch (error: any) {
        console.log("error =================================", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/app/api/config/MongoDbConfig";
import { verifyToken } from "@/utils/token";
import User from "../../models/User";

export const POST = async (req: NextRequest, res: NextApiResponse) => {
    try {
        await connectDB();

        // Extract the token from the cookies
        const tokenCookie = req.cookies.get("token");
        const token = tokenCookie?.value;
        console.log(token, "....................................................")
        if (!token) {
            return NextResponse.json(
                { message: "No token provided" },
                { status: 401 }
            );
        }

        // Verify the token
        const decodedToken = verifyToken(token);

        if (!decodedToken) {
            return NextResponse.json(
                { message: "Invalid or expired token" },
                { status: 401 }
            );
        }
        console.log(decodedToken, "...............................................")

        // Find the user associated with the token
        const user = await User.findById(decodedToken.userId);
        if (!user) {
            return NextResponse.json(
                { message: "User not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            {
                message: "Token is valid",
            },
            { status: 200 }
        );
    } catch (error: any) {
        console.error("Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};

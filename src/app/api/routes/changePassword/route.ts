// src/pages/api/changeCredentials.ts
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/app/api/config/MongoDbConfig";
import { generateToken } from "@/utils/token";
import User from "../../models/User";
import bcryptjs from "bcryptjs";

export const POST = async (req: NextRequest, res: NextApiResponse) => {
    console.log("Connecting to DB...");
    const reqBody = await req.json();
    const { oldUsername, oldPassword, newUsername, newPassword } = reqBody;
    console.log(
        oldUsername,
        oldPassword,
        newUsername,
        newPassword,
        "....................................................."
    );

    try {
        await connectDB();

        // Check if the old username exists
        const user = await User.findOne({ username: oldUsername });
        if (!user) {
            return NextResponse.json(
                { message: "Invalid username or password" },
                { status: 404 }
            );
        }

        // Check if the old password is correct
        const isPasswordCorrect = await bcryptjs.compare(
            oldPassword,
            user.password
        );
        if (!isPasswordCorrect) {
            return NextResponse.json(
                { message: "Invalid username or password" },
                { status: 401 }
            );
        }

        // Update username and password
        user.username = newUsername;
        user.password = newPassword

        // Save updated user to the database
        await user.save();

        // Generate a new token with the updated user ID
        const token = generateToken(user._id.toString());

        console.log("Credentials updated successfully");
        console.log("New token:", token);

        // Send the updated user data and token back to the client
        const response = NextResponse.json(
            {
                message: "Credentials updated successfully",
            },
            { status: 200 }
        );

        // Set the token in the response cookie
        response.cookies.set("token", token, {
            httpOnly: false,
            path: "/",
            maxAge: 3600 // Cookie expiration time in seconds
        });

        return response;
    } catch (error: any) {
        console.error("Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};
// src/pages/api/login.ts
import { NextApiRequest, NextApiResponse } from "next";



import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/app/api/config/MongoDbConfig";

import { generateToken } from "@/utils/token";
import User from "../../models/User";
import bcryptjs from 'bcryptjs';

export const POST = async (req: NextRequest, res: NextApiResponse) => {
  console.log("after connect to db");
  const reqBody = await req.json();
  const { username, password } = reqBody;
  console.log(username, password, ".....................................................")

  try {
    await connectDB();

    const user = await User.findOne({ username });
    if (!user) {
      return NextResponse.json(
        { message: "Invalid username or password" },
        { status: 404 }
      );
    }

    const isPasswordCorrect = await bcryptjs.compare(password, user.password);
    if (!isPasswordCorrect) {
      return NextResponse.json(
        { message: "Invalid username or password" },
        { status: 401 }
      );
    }

    const token = generateToken(user._id.toString());
    console.log(token);

    const response = NextResponse.json(
      {
        message: "Login successful",
        user: {
          id: user._id,
          username,
        }
      },
      { status: 200 }
    );

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
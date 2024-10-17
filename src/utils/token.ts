// src/utils/jwt.ts
import jwt from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";

interface TokenPayload extends JwtPayload {
  userId: string;
}

const JWT_SECRET = process.env.JWT_SECRET as string;

export const generateToken = (userId: string) => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "1h" });
};

export const verifyToken = (token: string): TokenPayload => {
  return jwt.verify(token, JWT_SECRET) as TokenPayload;
};


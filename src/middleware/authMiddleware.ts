import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../models/users";

declare global {
    namespace Express {
        interface Request {
            user?: User;
        }
    }
}

const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.headers.authorization?.split(" ")[1]; // Extract Bearer token

    if (!token) {
        res.status(401).json({ message: "Access denied. No token provided." });
        return; // Stop execution here
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string };
        req.user = User.build({ id: decoded.id }); // Attach user to request
        next(); // Call next to continue
    } catch (error) {
        res.status(400).json({ message: "Invalid token." });
        return; // Ensure the function returns after sending a response
    }
};

export default authMiddleware;

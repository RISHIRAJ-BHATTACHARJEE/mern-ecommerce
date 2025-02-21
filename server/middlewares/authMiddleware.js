import jwt from "jsonwebtoken"
import User from "../models/User";

export const currentUser = async (req, res, next) => {
    let token = req.headers.authorization?.split(" ")[1];

    if(!token) return res.status(401).json({message: "Not authorized"});

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select("-password")
        next();
    } catch (error) {
        res.status(401).json({message: "Invalid Token"});
        console.log("error:- ", error)
    }
}
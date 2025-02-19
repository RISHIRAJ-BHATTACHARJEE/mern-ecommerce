import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

export default generateToken;

import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoDB from "./config/db";
import authRoutes from "./routes/authRoutes";
import productRoutes from "./routes/productRoutes";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000;

mongoDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", authRoutes);
app.use("/api/v1/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});

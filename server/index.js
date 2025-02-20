import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoDB from "./config/db";
import userRoutes from "./routes/authRoutes";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000;

mongoDB();

app.use(cors());
app.use(express.json());

app.use("/api/v1/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});

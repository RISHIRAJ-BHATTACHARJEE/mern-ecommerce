import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";
import userRouter from "./src/routes/userRoutes.js"

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Connect to Database
connectDB();

// Routes
app.use("/api/v1/users", userRouter);

app.get("/", (req, res) => res.send("Bun.js Express API Running 🚀"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

import express from "express";
import dotenv from "dotenv";
import cors from "cors"; 
import connectDB from "./db.js";
import authRoutes from "./routes/auth.js";
import summaryRoutes from "./routes/summary.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json()); 


app.use(
  cors({
    origin: "http://localhost:5173", 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, 
  })
);


app.use("/api/auth", authRoutes);
app.use("/api/summary", summaryRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

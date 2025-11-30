import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();

// Middleware
// app.use(cors({ origin: "http://localhost:5173" }));
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✔ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

// Google Gemini Setup
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);


// Routes
app.use("/auth", authRoutes);

// Health Check Route
app.get("/", (req, res) => {
  res.send("Intellitour backend running ✨");
});

// AI Chat Route

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const model = genAI.getGenerativeModel({
      model: "gemini-pro",
    });

    const result = await model.generateContent(message);
    const reply = result.response.text();

    res.json({ reply });

  } catch (error) {
    console.error("🔥 Gemini API Error:", error);
    res.status(500).json({
      reply: "I'm having trouble responding. Please try again."
    });
  }
});


// Server Start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

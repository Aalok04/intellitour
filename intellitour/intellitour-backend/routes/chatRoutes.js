import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post("/", authMiddleware, async (req, res) => {
  try {
    const { message } = req.body;

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const result = await model.generateContent(`
      You are Intellitour AI, a friendly travel assistant.
      You help users with:
      - Suggesting places to visit
      - Planning travel itineraries
      - Hotel booking advice
      - Hiring local guides
      - Sharing reviews and travel info

      IMPORTANT FORMATTING RULES:
      - ALWAYS provide responses in a clearly structured format (e.g., bulleted lists, numbered steps).
      - NEVER use long, unbroken paragraphs.
      - Keep sentences short, concise, and easy to read.
      - Use blank lines to separate different points.

      User message: ${message}
    `);

    const reply = result.response.text();
    res.json({ success: true, reply });

  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
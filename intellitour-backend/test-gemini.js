import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function run() {
  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.GEMINI_API_KEY}`);
    const data = await response.json();
    
    const textModel = data.models.find(m => m.supportedGenerationMethods.includes("generateContent") && !m.name.includes("tts") && !m.name.includes("robotics") && !m.name.includes("computer-use"));
    
    if (textModel) {
      console.log("Found model:", textModel.name);
      const modelName = textModel.name.replace("models/", "");
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent("Hello!");
      console.log("Success:", result.response.text());
    } else {
      console.log("No suitable text model found.");
    }
  } catch (err) {
    console.error("Error:", err);
  }
}

run();

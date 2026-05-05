import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";


const app = express();

app.use(cors());
app.use(express.json());
// console.log("CORS enabled and JSON parsing set up");
const dbUri=process.env.MONGODB_URI;
mongoose
  .connect(dbUri)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));


app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);



app.listen(5000, () => console.log("Server running on port 5000"));



// aalokparihar6_db_user
// 3fyed9EdFr4FW9CE

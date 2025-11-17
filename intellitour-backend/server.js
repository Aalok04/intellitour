import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());


mongoose
  .connect(
    "mongodb+srv://intellitourAdmin:Aalok1234@intellitour-user.p775kqi.mongodb.net/intellitour?retryWrites=true&w=majority&appName=intellitour-user"
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));


app.use("/auth", authRoutes);


app.listen(5000, () => console.log("Server running on port 5000"));

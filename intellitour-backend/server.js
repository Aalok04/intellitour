import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
// console.log("CORS enabled and JSON parsing set up");
const dbUri = "mongodb://aalokparihar6_db_user:3fyed9EdFr4FW9CE@ac-yghjjrb-shard-00-00.9ma5vah.mongodb.net:27017,ac-yghjjrb-shard-00-01.9ma5vah.mongodb.net:27017,ac-yghjjrb-shard-00-02.9ma5vah.mongodb.net:27017/intellitour?ssl=true&replicaSet=atlas-ypxuax-shard-0&authSource=admin&appName=Intellitour";
mongoose
  .connect(dbUri)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));


app.use("/api/auth", authRoutes);


app.listen(5000, () => console.log("Server running on port 5000"));



// aalokparihar6_db_user
// 3fyed9EdFr4FW9CE

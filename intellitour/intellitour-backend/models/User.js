// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true }
// });

// const User = mongoose.model("User", userSchema);

// export default User;


// module ki tarah kar rahe the to iss way mein karna hota hai 

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    enum: ["admin", "user", "moderator"], 
    default: "user" 
  }
});

const User = mongoose.model("User", userSchema);

export default User;
// import express from "express";
// import bcrypt from "bcryptjs";
// import User from "../models/User.js"

// const router = express.Router();

// // SIGNUP
// router.post("/signup", async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     const existingUser = await User.findOne({ email });

//     if (existingUser) {
//       return res.status(400).json({
//         success: false,
//         message: "Email already exists"
//       });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = await User.create({
//       name,
//       email,
//       password: hashedPassword
//     });

//     res.status(201).json({
//       success: true,
//       message: "Signup Successful",
//       userId: newUser._id
//     });

//   } catch (err) {

//     res.status(500).json({
//       success: false,
//       error: err.message
//     });

//   }
// });

// // LOGIN
// router.post("/login", async (req, res) => {

//   try {

//     const { email, password } = req.body;

//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found"
//       });
//     }

//     const match = await bcrypt.compare(password, user.password);

//     if (!match) {
//       return res.status(401).json({
//         success: false,
//         message: "Incorrect Password"
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Login Successful",
//       userId: user._id,
//       email: user.email
//     });

//   } catch (err) {

//     res.status(500).json({
//       success: false,
//       error: err.message
//     });

//   }

// });

// export default router;


//cluade

import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

// SIGNUP
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password, role } = req.body; // ← added role

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role, // ← added role (falls back to "user" if not sent)
    });

    res.status(201).json({
      success: true,
      message: "Signup Successful",
      userId: newUser._id,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({
        success: false,
        message: "Incorrect Password",
      });
    }

    // Generate JWT token with role inside payload
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      success: true,
      message: "Login Successful",
      userId: user._id,
      email: user.email,
      role: user.role, // ← frontend reads this to redirect
      token,           // ← frontend stores this in localStorage
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

export default router;
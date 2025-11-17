import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

const router = express.Router();

// SIGNUP
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check already user exists
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.json({ success: false, message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({ name, email, password: hashedPassword });

    res.json({ success: true, message: "Signup Successful" });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user)
      return res.json({ success: false, message: "User not found" });

    const match = await bcrypt.compare(password, user.password);

    if (!match)
      return res.json({ success: false, message: "Incorrect Password" });

    res.json({ success: true, message: "Login Successful" });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.json({ success: false, message: "User not found" });

    const match = await bcrypt.compare(password, user.password);

    if (!match)
      return res.json({ success: false, message: "Incorrect password" });

    res.json({ success: true, message: "Login Successful" });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

export default router;

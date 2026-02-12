const express = require("express");
const User = require("../model/user.model");

const router = express.Router();

// POST API - Save Data
router.post("/adduser", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: "User Saved Successfully", user: newUser });

  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

// GET API - Fetch all users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;

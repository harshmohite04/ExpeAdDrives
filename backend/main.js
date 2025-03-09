const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

mongoose.connect("mongodb+srv://expeaddrives:QU0ElHXnYL7bCknX@cluster0.3ppaa.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = mongoose.model("User", new mongoose.Schema({
  username: String,
  password: String,
}));

const secretKey = "your_secret_key";

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, password: hashedPassword });
  await newUser.save();
  res.status(201).send("User registered");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user) {
    return res.status(400).send("User not found");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).send("Invalid credentials");
  }

  const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: "1h" });
  res.cookie("auth_token", token, {
    httpOnly: true,
    secure: false,
    maxAge: 3600000,
  });
  res.status(200).json({ message: "Login successful", token });
});

app.post("/sendData", async (req, res) => {
  const token = req.cookies.auth_token;
  if (!token) {
    return res.status(401).send("Unauthorized");
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    const user = await User.findById(decoded.userId);
    res.status(200).json({ user });
  } catch (error) {
    res.status(401).send("Invalid token");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

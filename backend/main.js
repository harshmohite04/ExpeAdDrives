const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin:"http://localhost:5173",
  credentials: true,
}));

app.get("/", (req, res) => {
  const token = jwt.sign({ user: "Harsh" }, "your_secret_key", { expiresIn: "1h" });
  
  res.cookie("auth_token", token, {
    httpOnly: false, 
    secure: false, 
    maxAge: 3600000, 
  });
  res.send("Cookie has been set!");
});


app.post("/sendData",async(req,res)=>{
  try {
    const {} = 
  } catch (error) {
    
  }
})
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", require("./route/userRoutes"));

app.get("/", (req, res) => {
  res.send("Backend is Running...");
});


app.listen(5000, () =>
  console.log(`Server running on http://localhost:5000`)
);

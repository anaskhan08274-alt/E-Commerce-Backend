const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", require("./route/userRoutes"));

app.get("/", (req, res) => {
  res.send("Backend is Running...");
});

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`server is runing in the port ${PORT}`)
})

module.exports = app;

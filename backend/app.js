// backend/app.js
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const dotenv = require("dotenv");
const tripRoutes = require("./routes/tripRoutes");
const itineraryRoutes = require("./routes/itineraryRoutes");
// const budgetRoutes = require("./routes/budgetRoutes");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/trips", tripRoutes);
app.use("/api/itinerary", itineraryRoutes);
// app.use("/api/budget", budgetRoutes);

app.get("/", (req, res) => {
  res.send("✅ API running");
});

module.exports = app;

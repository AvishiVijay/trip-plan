// routes/tripRoutes.js
const express = require("express");
const router = express.Router();
const Trip = require("../models/Trip");

// ✅ Add a new trip
router.post("/", async (req, res) => {
  console.log("📥 Received POST /api/trips with:", req.body); // 👈 Add this
  try {
    const { name, destination, startDate, endDate, user } = req.body;
    const newTrip = new Trip({ name, destination, startDate, endDate, user });
    await newTrip.save();
    res.status(201).json(newTrip);
  } catch (err) {
    console.error("❌ Trip creation failed:", err);
    res.status(500).json({ message: "Trip creation failed", error: err.message });
  }
});


// ✅ Get all trips
router.get("/", async (req, res) => {
  try {
    const trips = await Trip.find();
    res.status(200).json(trips);
  } catch (err) {
    res.status(500).json({ message: "Error fetching trips", error: err.message });
  }
});

// ✅ Update a trip
router.put("/:id", async (req, res) => {
  console.log("✏️ Updating trip:", req.params.id, req.body); // 👈 Add this
  try {
    const { id } = req.params;
    const updatedTrip = await Trip.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedTrip);
  } catch (err) {
    console.error("❌ Trip update failed:", err);
    res.status(500).json({ message: "Trip update failed", error: err.message });
  }
});


// ✅ Get a single trip (for editing)
router.get("/:id", async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id);
    res.status(200).json(trip);
  } catch (err) {
    res.status(500).json({ message: "Trip not found", error: err.message });
  }
});

module.exports = router;

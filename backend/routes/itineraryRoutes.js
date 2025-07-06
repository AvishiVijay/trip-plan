const express = require("express");
const {
  createItinerary,
  getItineraryByTrip, // ✅ this was the issue
  updateItinerary,
  deleteItinerary,
} = require("../controllers/itineraryController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router
  .route("/:tripId")
  .post(protect, createItinerary)
  .get(protect, getItineraryByTrip); // ✅ updated function

router
  .route("/:tripId/:id")
  .put(protect, updateItinerary)
  .delete(protect, deleteItinerary);

module.exports = router;

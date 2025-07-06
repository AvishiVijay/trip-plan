const express = require("express");
const {
  createTrip,
  getTrips,
  updateTrip,
  deleteTrip,
} = require("../controllers/tripController");

const { protect } = require("../middleware/authMiddleware"); // ✅ correct import

const router = express.Router();

router.route("/")
  .post(protect, createTrip)
  .get(protect, getTrips);

router.route("/:id")
  .put(protect, updateTrip)
  .delete(protect, deleteTrip);

module.exports = router;

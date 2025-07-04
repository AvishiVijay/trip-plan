const express = require("express");
const router = express.Router();

// Dummy placeholder handlers
router.get("/", (req, res) => {
  res.send("Itinerary route working");
});

module.exports = router;

const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: String,
  destination: String,
  startDate: String,
  endDate: String,
});

module.exports = mongoose.model("Trip", tripSchema);

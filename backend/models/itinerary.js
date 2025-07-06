const mongoose = require("mongoose");

const itinerarySchema = new mongoose.Schema({
  trip: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trip",
    required: true,
  },
  day: {
    type: Number,
    required: true,
  },
  activity: {
    type: String,
    required: true,
  },
  time: {
    type: String,
  },
  notes: {
    type: String,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model("Itinerary", itinerarySchema);

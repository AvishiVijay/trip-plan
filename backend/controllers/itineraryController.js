const Itinerary = require("../models/itinerary");

// Create itinerary item
const createItinerary = async (req, res) => {
  try {
    const { day, activity, time, notes } = req.body;
    const tripId = req.params.tripId; // ✅ fix here

    const newItem = new Itinerary({
      trip: tripId,
      day,
      activity,
      time,
      notes,
    });

    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: "Failed to create itinerary", error });
  }
};

// Get all itinerary items for a trip
const getItineraryByTrip = async (req, res) => {
  try {
    const items = await Itinerary.find({ trip: req.params.tripId });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch itinerary", error });
  }
};

// Update itinerary item
const updateItinerary = async (req, res) => {
  try {
    const item = await Itinerary.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Not found" });

    const { day, activity, time, notes } = req.body;
    item.day = day;
    item.activity = activity;
    item.time = time;
    item.notes = notes;

    await item.save();
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: "Failed to update itinerary", error });
  }
};

// Delete itinerary item
const deleteItinerary = async (req, res) => {
  try {
    const item = await Itinerary.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: "Not found" });

    res.status(200).json({ message: "Itinerary deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete itinerary", error });
  }
};

module.exports = {
  createItinerary,
  getItineraryByTrip,
  updateItinerary,
  deleteItinerary,
};

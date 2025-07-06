const Trip = require("../models/Trip"); // ✅ Correct filename


// Create a trip
const createTrip = async (req, res) => {
  try {
    const { destination, startDate, endDate, notes } = req.body;
    const newTrip = new Trip({
      user: req.user._id,
      destination,
      startDate,
      endDate,
      notes,
    });
    await newTrip.save();
    res.status(201).json(newTrip);
  } catch (error) {
    res.status(500).json({ message: "Failed to create trip", error });
  }
};

// Get all trips of logged-in user
const getTrips = async (req, res) => {
  try {
    const trips = await Trip.find({ user: req.user._id });
    res.status(200).json(trips);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch trips", error });
  }
};

// Update a trip
const updateTrip = async (req, res) => {
  try {
    const trip = await Trip.findOne({ _id: req.params.id, user: req.user._id });
    if (!trip) return res.status(404).json({ message: "Trip not found" });

    const { destination, startDate, endDate, notes } = req.body;
    trip.destination = destination;
    trip.startDate = startDate;
    trip.endDate = endDate;
    trip.notes = notes;

    await trip.save();
    res.status(200).json(trip);
  } catch (error) {
    res.status(500).json({ message: "Failed to update trip", error });
  }
};

// Delete a trip
const deleteTrip = async (req, res) => {
  try {
    const trip = await Trip.findOneAndDelete({ _id: req.params.id, user: req.user._id });
    if (!trip) return res.status(404).json({ message: "Trip not found" });

    res.status(200).json({ message: "Trip deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete trip", error });
  }
};

module.exports = {
  createTrip,
  getTrips,
  updateTrip,
  deleteTrip,
};

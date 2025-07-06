// const Budget = require("../models/budgetModel");

// const addExpense = async (req, res) => {
//   try {
//     const expense = await Budget.create(req.body);
//     res.status(201).json(expense);
//   } catch (error) {
//     res.status(400).json({ message: "Failed to add expense" });
//   }
// };

// const getExpensesByTrip = async (req, res) => {
//   try {
//     const expenses = await Budget.find({ tripId: req.params.tripId });
//     res.json(expenses);
//   } catch (error) {
//     res.status(400).json({ message: "Failed to fetch expenses" });
//   }
// };

// // ✅ This line is most important
// module.exports = { addExpense, getExpensesByTrip };

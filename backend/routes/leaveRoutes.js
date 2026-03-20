const express = require("express");
const router = express.Router();
const Leave = require("../models/Leave");
const protect = require("../middleware/authMiddleware");

// 🔹 Apply Leave (Employee)
router.post("/apply", protect, async (req, res) => {
  try {
    const { leaveType, startDate, endDate, reason } = req.body;

    const leave = await Leave.create({
      user: req.user.id,
      leaveType,
      startDate,
      endDate,
      reason,
    });

    res.status(201).json(leave);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🔹 Get My Leaves (Employee)
router.get("/my", protect, async (req, res) => {
  try {
    const leaves = await Leave.find({ user: req.user.id });
    res.json(leaves);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🔹 Get All Leaves (Employer)
router.get("/all", protect, async (req, res) => {
  try {
    const leaves = await Leave.find().populate("user", "name email");
    res.json(leaves);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🔹 Approve / Reject Leave (Employer)
router.put("/:id", protect, async (req, res) => {
  try {
    const { status } = req.body;

    const leave = await Leave.findById(req.params.id);

    if (!leave) {
      return res.status(404).json({ message: "Leave not found" });
    }

    leave.status = status;
    await leave.save();

    res.json({ message: "Leave updated", leave });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
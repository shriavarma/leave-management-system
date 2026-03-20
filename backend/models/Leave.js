const mongoose = require("mongoose");

const leaveSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  leaveType: {
    type: String,
    required: true,
  },
  startDate: Date,
  endDate: Date,
  reason: String,
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
}, { timestamps: true });

module.exports = mongoose.model("Leave", leaveSchema);
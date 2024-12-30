const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  wallet: { type: Number, required: true, default: 0 },
});

module.exports = mongoose.model("Patient", PatientSchema);
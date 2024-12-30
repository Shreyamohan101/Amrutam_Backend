const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
  fee: { type: Number, required: true },
});

module.exports = mongoose.model("Doctor", DoctorSchema);
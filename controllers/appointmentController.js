const Appointment = require("../models/Appointment");
const Patient = require("../models/Patient");

exports.createAppointment = async (req, res) => {
  try {
    const { doctor, patient, date } = req.body;
    const existingAppointment = await Appointment.findOne({ doctor, patient });

    let isDiscountApplied = false;
    if (!existingAppointment) {
      const patientData = await Patient.findById(patient);
      patientData.wallet -= 100; // I am taking discount 100
      await patientData.save();
      isDiscountApplied = true;
    }

    const appointment = new Appointment({ doctor, patient, date, isDiscountApplied });
    await appointment.save();
    res.status(201).json(appointment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().populate("doctor patient");
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

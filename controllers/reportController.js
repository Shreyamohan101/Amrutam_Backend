const Appointment = require("../models/Appointment");
const Patient = require("../models/Patient");
const Doctor = require("../models/Doctor");

exports.generateFinancialReport = async (req, res) => {
  try {
    // Aggregation for total discounts applied per doctor
    const doctorDiscounts = await Appointment.aggregate([
      {
        $match: { isDiscountApplied: true },
      },
      {
        $group: {
          _id: "$doctor",
          totalDiscounts: { $sum: 100 }, // Assuming a flat discount of 100
          totalAppointments: { $sum: 1 },
        },
      },
      {
        $lookup: {
          from: "doctors",
          localField: "_id",
          foreignField: "_id",
          as: "doctorDetails",
        },
      },
      {
        $unwind: "$doctorDetails",
      },
      {
        $project: {
          _id: 0,
          doctorName: "$doctorDetails.name",
          totalDiscounts: 1,
          totalAppointments: 1,
        },
      },
    ]);

    // Aggregation for total discounts applied per patient
    const patientDiscounts = await Appointment.aggregate([
      {
        $match: { isDiscountApplied: true },
      },
      {
        $group: {
          _id: "$patient",
          totalDiscounts: { $sum: 100 }, // Assuming a flat discount of 100
          totalAppointments: { $sum: 1 },
        },
      },
      {
        $lookup: {
          from: "patients",
          localField: "_id",
          foreignField: "_id",
          as: "patientDetails",
        },
      },
      {
        $unwind: "$patientDetails",
      },
      {
        $project: {
          _id: 0,
          patientName: "$patientDetails.name",
          totalDiscounts: 1,
          totalAppointments: 1,
        },
      },
    ]);

    res.status(200).json({ doctorDiscounts, patientDiscounts });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
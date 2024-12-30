const Patient = require("../models/Patient");

exports.createPatient = async (req, res) => {
    try {
      console.log('Received patient data:', req.body);
      const patient = new Patient(req.body);
      console.log('Created patient instance:', patient);
      const savedPatient = await patient.save();
      console.log('Saved patient:', savedPatient);
      res.status(201).json(savedPatient);
    } catch (error) {
      console.error('Error creating patient:', error);
      res.status(400).json({ error: error.message });
    }
  };

exports.getPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

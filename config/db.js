require('dotenv').config();
const mongoose = require("mongoose");

const mongoURI = process.env.MONGO_URI;

const connectDB = async () => {
  if (!mongoURI) {
    throw new Error('MongoDB URI is not defined in environment variables');
  }

  const connectionState = mongoose.connection.readyState;

  if (connectionState === 1) {
    console.log("Already connected");
    return;
  } else if (connectionState === 2) {
    console.log("Connecting");
    return;
  }

  try {
    await mongoose.connect(mongoURI, {
      dbName: "Amrutam",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected successfully to MongoDB Atlas");
  } catch (error) {
    console.error("Could not connect to MongoDB:", error);
    throw new Error("Could not connectDB");
  }
};

module.exports = connectDB;
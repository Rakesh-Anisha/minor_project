// server/config/db.js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Ensure you are passing the connection URI correctly
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit the process if the connection fails
  }
};

module.exports = connectDB;

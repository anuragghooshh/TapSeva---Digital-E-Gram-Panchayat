const mongoose = require("mongoose");
require("dotenv").config();

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

module.exports = connectDB; 

require("dotenv").config();
const connectDB = require("./config/db");
const services = require("./seed");

const Service = require("./models/service");

const cors = require("cors");
const express = require("express");

const app = express();

// Middleware
app.use(express.json({ extended: false }));

app.use(
  cors({
    origin: "http://localhost:5173", // URL of your Vite React frontend
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
); 

// Connect to MongoDB
// connectDB();

const addService = async (serviceData) => {
  console.log(serviceData);
  const newService = new Service(serviceData);
  try {
    await newService.save();
    console.log(`Service "${serviceData.service_name}" added successfully!`);
  } catch (err) {
    console.error("Error adding service:", err);
  }
};

// services.forEach(async (service) => {
//   await addService(service);
// });

app.get("/api", (req, res) => {
  res.json({ 
    title: "Hello from server!",
    message: "Hello from server!",
  });
});

app.use('/api/services', require('./routes/serviceRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

require("dotenv").config();
const connectDB = require("./config/db");

const cors = require("cors");
const express = require("express");

const app = express();

// Middleware
app.use(express.json({ extended: false }));

app.use(
  cors({
    origin: "https://tap-seva-digital-e-gram-panchayat-api.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Connect to MongoDB
connectDB();

// const addService = async (serviceData) => {
//   console.log(serviceData);
//   const newService = new Service(serviceData);
//   try {
//     await newService.save();
//     console.log(`Service "${serviceData.service_name}" added successfully!`);
//   } catch (err) {
//     console.error("Error adding service:", err);
//   }
// };

// // services.forEach(async (service) => {
// //   await addService(service);
// // });

// app.get("/api", (req, res) => {
//   res.json({
//     title: "Hello from server!",
//     message: "Hello from server!",
//   });
// });

api.get("/api", (req, res) => {
  res.json({
    title: "Hello from server!",
    message: "Hello from server!",
  });
});


//For Retrieving Services
app.use("/api/services", require("./routes/serviceRoutes"));

//For Registering Users
app.use("/api/auth", require("./routes/authRoutes"));

//For fetching user details
app.use("/api/user", require("./routes/userRoutes"));
 
//For Controlling Applications
app.use("/api/applications", require("./routes/applicationRoutes"));

//For Admin
app.use("/api/admin", require("./routes/adminRoutes"));

//For Updates
app.use("/api/updates", require("./routes/updateRoutes"));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
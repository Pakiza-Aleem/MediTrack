// Loads variables from the .env file
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();


// ==================== MIDDLEWARE ====================

// Allows Express to read JSON data from requests
// Example: req.body.email, req.body.password
app.use(express.json());

// Allows us to read cookies from requests
app.use(cookieParser());

// Allows the React frontend to communicate with this backend
// credentials: true is needed when using cookies for authentication
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);


// ==================== DATABASE ====================

// Connect to MongoDB Atlas
// MONGODB_URI is stored in .env and will be added to Vercel later
let dbPromise;

function connectDB() {
  if (!dbPromise) {
    dbPromise = mongoose.connect(process.env.MONGODB_URI);
  }

  return dbPromise;
}


// ==================== HEALTH CHECK ====================

// Used to check whether the deployed API is working
// Open /api/health in your browser after deployment
app.get("/api/health", (req, res) => {
  res.json({
    ok: true,
    service: "api",
  });
});


// ==================== ROUTES ====================

// Authentication routes
app.use("/api/auth", require("./routes/auth"));

// Appointment routes
app.use("/api/appointments", require("./routes/appointments"));

// Staff routes
app.use("/api/staff", require("./routes/staff"));


// ==================== LOCAL SERVER ====================

const PORT = process.env.PORT || 5000;

// When running locally with Node, start the server normally.
// Vercel will handle the server when deployed.
if (require.main === module) {
  connectDB()
    .then(() => {
      console.log("MongoDB connected");

      app.listen(PORT, () => {
        console.log(`API running on http://localhost:${PORT}`);
      });
    })
    .catch((err) => {
      console.error("MongoDB connection failed:", err.message);
    });
}


// ==================== VERCEL ====================

// Export the Express app so Vercel can use it
module.exports = app;
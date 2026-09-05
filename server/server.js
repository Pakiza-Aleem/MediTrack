// Loads variables from the .env file
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

// ==================== MIDDLEWARE ====================
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://medi-track-client-pi.vercel.app",
    ],
    credentials: true,
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

// ==================== DATABASE ====================
let dbPromise;

function connectDB() {
  if (!dbPromise) {
    dbPromise = mongoose.connect(process.env.MONGODB_URI);
  }
  return dbPromise;
}

// ==================== HEALTH CHECK ====================
app.get("/api/health", (req, res) => {
  res.json({
    ok: true,
    service: "api",
  });
});

// ==================== DATABASE FOR VERCEL ====================
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    res.status(500).json({
      msg: "Database connection failed",
    });
  }
});

// ==================== ROUTES ====================
app.use("/api/auth", require("./routes/auth"));
app.use("/api/appointments", require("./routes/appointments"));
app.use("/api/staff", require("./routes/staff"));

// ==================== LOCAL SERVER ====================
const PORT = process.env.PORT || 5000;

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
module.exports = app;

const express = require("express");
const Appointment = require("../models/Appointment");
const protect = require("../middleware/auth");

const router = express.Router();

// Protect every route in this file
router.use(protect);


// GET /api/appointments
// Get only the logged-in patient's appointments
router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find({
      owner: req.user.id,
    }).sort({
      scheduledFor: 1,
    });

    res.json({ appointments });
  } catch (err) {
    res.status(500).json({
      msg: "Failed to get appointments",
    });
  }
});


// POST /api/appointments
// Create an appointment for the logged-in patient
router.post("/", async (req, res) => {
  try {
    const appointment = await Appointment.create({
      doctor: req.body.doctor,
      reason: req.body.reason,
      scheduledFor: req.body.scheduledFor,

      // IMPORTANT:
      // owner comes from the logged-in user's token
      owner: req.user.id,
    });

    res.status(201).json({
      appointment,
    });
  } catch (err) {
    res.status(500).json({
      msg: "Failed to create appointment",
    });
  }
});


// PUT /api/appointments/:id
// Update only an appointment belonging to the logged-in patient
router.put("/:id", async (req, res) => {
  try {
    const appointment = await Appointment.findOneAndUpdate(
      {
        _id: req.params.id,
        owner: req.user.id,
      },
      {
        doctor: req.body.doctor,
        reason: req.body.reason,
        scheduledFor: req.body.scheduledFor,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!appointment) {
      return res.status(404).json({
        msg: "Not found",
      });
    }

    res.json({
      appointment,
    });
  } catch (err) {
    res.status(500).json({
      msg: "Failed to update appointment",
    });
  }
});


// DELETE /api/appointments/:id
router.delete("/:id", async (req, res) => {
  try {
    const appointment = await Appointment.findOneAndDelete({
      _id: req.params.id,
      owner: req.user.id,
    });

    if (!appointment) {
      return res.status(404).json({
        msg: "Not found",
      });
    }

    res.json({
      msg: "Cancelled",
      id: req.params.id,
    });
  } catch (err) {
    res.status(500).json({
      msg: "Failed to delete appointment",
    });
  }
});


module.exports = router;
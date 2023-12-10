const buses = require("../models/bus");

const busesController = {
  getAllBuses: async (req, res) => {
    try {
      const bus = await buses.find();
      res.status(201).json({
        success: true,
        data: bus,
      });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  },

  createBus: async (req, res) => {
    try {
      console.log(req.body);
      const bus = await buses.create(req.body);
      res.status(201).json({
        success: true,
        data: bus,
      });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  },

  getBusById: async (req, res) => {
    try {
      const bus = await buses.findById(req.params.id);
      res.status(201).json({
        success: true,
        data: bus,
      });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  },

  updateBus: async (req, res) => {
    try {
      const bus = await buses.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!bus) {
        return res
          .status(404)
          .json({ success: false, message: "bus not found" });
      }
      res.status(200).json({
        success: true,
        data: bus,
      });
    } catch (error) {
      console.error(error);
      res.status(400).json({ success: false, message: error.message });
    }
  },

  deleteBus: async (req, res) => {
    try {
      const bus = await buses.findByIdAndDelete(req.params.id);
      if (!bus) {
        return res
          .status(404)
          .json({ success: false, message: "bus not found" });
      }
      res
        .status(200)
        .json({ success: true, message: "bus deleted successfully" });
    } catch (error) {
      console.error(error); // Log the error for debugging
      res.status(500).json({ success: false, message: error.message });
    }
  },
};

module.exports = busesController;

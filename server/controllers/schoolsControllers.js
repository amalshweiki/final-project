const schools = require("../models/school");

const schoolsController = {
  getAllSchools: async (req, res) => {
    try {
      const school = await schools.find();
      res.status(201).json({
        success: true,
        data: school,
      });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  },

  createSchool: async (req, res) => {
    try {
      console.log(req.body);
      const school = await schools.create(req.body);
      res.status(201).json({
        success: true,
        data: school,
      });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  },

  getSchoolById: async (req, res) => {
    try {
      const school = await schools.findById(req.params.id);
      res.status(201).json({
        success: true,
        data: school,
      });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  },

  updateSchool: async (req, res) => {
    try {
      const school = await schools.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!school) {
        return res
          .status(404)
          .json({ success: false, message: "school not found" });
      }
      res.status(200).json({
        success: true,
        data: school,
      });
    } catch (error) {
      console.error(error); // It's good to log the error for debugging purposes
      res.status(400).json({ success: false, message: error.message });
    }
  },

  deleteSchool: async (req, res) => {
    try {
      const school = await schools.findByIdAndDelete(req.params.id);
      if (!school) {
        return res
          .status(404)
          .json({ success: false, message: "school not found" });
      }
      res
        .status(200)
        .json({ success: true, message: "school deleted successfully" });
    } catch (error) {
      console.error(error); // Log the error for debugging
      res.status(500).json({ success: false, message: error.message });
    }
  },
};

module.exports = schoolsController;

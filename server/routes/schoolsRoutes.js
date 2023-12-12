const express = require("express");
const route = express.Router();
const { protect, authorize } = require("../middleware/auth");
const schoolsController = require("../controllers/schoolsControllers");

route
  .route("/")
  .get(schoolsController.getAllSchools)
  .post(protect, authorize("admin"), schoolsController.createSchool);

route
  .route("/:id")
  .put(protect, authorize("admin"), schoolsController.updateSchool)
  .delete(protect, authorize("admin"), schoolsController.deleteSchool)
  .get(schoolsController.getSchoolById);

module.exports = route;

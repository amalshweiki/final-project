const express = require("express");
const route = express.Router();
const schoolsController = require("../controllers/schoolsControllers");

route
  .route("/")
  .get(schoolsController.getAllSchools)
  .post(schoolsController.createSchool);

route
  .route("/:id")
  .put(schoolsController.updateSchool)
  .delete(schoolsController.deleteSchool)
  .get(schoolsController.getSchoolById);

module.exports = route;

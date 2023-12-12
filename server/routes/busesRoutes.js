const express = require("express");
const route = express.Router();
const { protect, authorize } = require("../middleware/auth");
const busesController = require("../controllers/busesControllers");

route
  .route("/")
  .get(busesController.getAllBuses)
  .post(protect, authorize("admin"), busesController.createBus);

route
  .route("/:id")
  .put(protect, authorize("admin"), busesController.updateBus)
  .delete(protect, authorize("admin"), busesController.deleteBus)
  .get(busesController.getBusById);

module.exports = route;

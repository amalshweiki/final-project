const express = require("express");
const route = express.Router();
const busesController = require("../controllers/busesControllers");

route
  .route("/")
  .get(busesController.getAllBuses)
  .post(busesController.createBus);

route
  .route("/:id")
  .put(busesController.updateBus)
  .delete(busesController.deleteBus)
  .get(busesController.getBusById);

module.exports = route;

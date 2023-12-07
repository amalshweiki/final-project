const mongoose = require("mongoose");
const schoolSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please add Name "],
    },

    pickupTimes: {
      type: String,
      required: [true, "please add pickup Times "],
    },

    dropoffTimes: {
      type: String,
      required: [true, "please add dropoffTimes"],
    },
    dropoffTimes: {
      type: String,
      required: [true, "please add dropoffTimes"],
    },
    loadingUnloadingStation: {
      type: String,
      required: [true, "please add loading / Unloading Station"],
    },
  },

  {
    timestamps: true,
  }
);
module.exports = mongoose.model("bus", busSchema);

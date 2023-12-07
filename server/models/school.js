const mongoose = require("mongoose");
const schoolSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please add Name "],
    },

    location: {
      // GeoJSON Point
      type: {
        type: String,
        enum: ["Point"],
      },
      coordinates: {
        type: [Number],
        index: "2dsphere",
      },
      formattedAddress: String,
      street: String,
      city: String,
      state: String,
      zipcode: String,
      country: String,
    },

    contact: {
      type: String,
      required: [true, "please add Contact "],
    },

    busServices: {},
  },

  {
    timestamps: true,
  }
);
module.exports = mongoose.model("school", schoolSchema);

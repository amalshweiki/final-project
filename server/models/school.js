const mongoose = require("mongoose");

const schoolSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please add Name "],
    },

    location: {
      type: String,
      required: [true, "please add Location "],
    },

    contact: {
      type: String,
      required: [true, "please add Contact "],
    },

    busServices: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "bus",
      },
    ],
  },

  {
    timestamps: true,
  }
);
module.exports = mongoose.model("school", schoolSchema);

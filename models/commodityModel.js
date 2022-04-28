const mongoose = require("mongoose");

const commoditySchema = new mongoose.Schema(
  {
    cmdtyName: {
      type: String,
    },
    cmdtyID: {
      type: String,
      required: [true, "Please provide cmdtyID(commodity ID)"],
    },
    marketID: {
      type: String,
      required: [true, "Please provide marketID"],
    },
    marketName: {
      type: String,
    },
    users: [
      {
        type: String,
        required: [true, "Please provide userID"],
      },
    ],
    timestamp: {
      type: Number,
    },
    priceUnit: {
      type: String,
    },
    price: {
      type: Number,
      required: [true, "Please provide price"],
    },
    // marketType: {
    //   type: String,
    // },
    // convFctr: {
    //   type: Number,
    //   required: [true, "Please provide convFctr"],
    // },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Commodity", commoditySchema);

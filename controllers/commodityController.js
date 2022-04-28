const Commodity = require("../models/commodityModel");

exports.addCommodity = async (req, res) => {
  try {
    if (!req.body.reportDetails) {
      return res.status(400).json({
        success: false,
        message: `Please provide reportDetails`,
      });
    }
    const {
      cmdtyName,
      cmdtyID,
      marketID,
      marketName,
      userID,
      convFctr,
      price,
    } = req.body.reportDetails;
    const notFound = [];
    if (!marketID) notFound.push("marketID");
    if (!cmdtyID) notFound.push("cmdtyID");
    if (!price) notFound.push("price");
    if (!userID) notFound.push("userID");
    if (!convFctr) notFound.push("convFctr");
    if (notFound.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Please provide ${notFound}`,
      });
    }

    const existingCommodity = await Commodity.findOne({ marketID, cmdtyID });
    if (!existingCommodity) {
      const newCommodity = await Commodity.create({
        cmdtyName,
        cmdtyID,
        marketID,
        marketName,
        users: [userID],
        timestamp: Date.now(),
        priceUnit: "Kg",
        price: price / convFctr,
      });
      res.status(201).json({
        status: "success",
        reportID: newCommodity._id,
      });
    } else {
      const newPrice =
        (existingCommodity.price * existingCommodity.users.length +
          price / convFctr) /
        (existingCommodity.users.length + 1);

      const newCommoditydata = {
        timestamp: Date.now(),
        users: [...existingCommodity.users, userID],
        price: newPrice,
      };

      await Commodity.findByIdAndUpdate(
        existingCommodity._id,
        newCommoditydata
      );
      res.status(201).json({
        status: "success",
        reportID: existingCommodity._id,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "false",
      message: error.message,
    });
  }
};

exports.getCommodity = async (req, res) => {
  try {
    const id = req.query.reportID;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Please provide reportID",
      });
    }
    const commodity = await Commodity.findById(id);

    if (!commodity) {
      return res.status(400).json({
        success: false,
        message: "No commodity found with given reportID",
      });
    }
    res.status(200).json(commodity);
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({
        status: "false",
        message: "Invalid reportID",
      });
    }
    res.status(500).json({
      status: "false",
      message: error.message,
    });
  }
};

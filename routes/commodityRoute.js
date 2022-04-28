const express = require("express");
const router = express.Router();

const {
  addCommodity,
  getCommodity,
} = require("../controllers/commodityController");

router.route("/reports").get(getCommodity).post(addCommodity);
module.exports = router;

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const commodityRoutes = require("./routes/commodityRoute");
app.use("/", commodityRoutes);

module.exports = app;

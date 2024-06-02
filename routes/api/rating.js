const express = require("express");
const rateRouter = express.Router();
const ratingController = require("../../controllers/ratingController");
const roles = require("../../config/roles");


rateRouter.post("/:id" , ratingController.setRate)

module.exports = rateRouter;
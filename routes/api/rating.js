const express = require("express");
const rateRouter = express.Router();
const ratingController = require("../../controllers/ratingController");
const verifyRoles = require('../../middleware/roleschecker');
const roles = require("../../config/roles");

rateRouter.post("/" , verifyRoles("admin") , ratingController.setStat)
rateRouter.post("/setRate/:id" , ratingController.setRate)
rateRouter.post("/updateStat" , verifyRoles("admin") , ratingController.updateStat)

module.exports = rateRouter;
const express = require("express");
const rateRouter = express.Router();
const ratingController = require("../../controllers/ratingController");
const verifyRoles = require('../../middleware/roleschecker');
const roles = require("../../config/roles");


rateRouter.post("/:id" , ratingController.setRate)
// rateRouter.post("/setStat" , verifyRoles("admin") , ratingController.setStat)
// rateRouter.post("/updateStat" , verifyRoles("admin") , ratingController.updateStat)

module.exports = rateRouter;
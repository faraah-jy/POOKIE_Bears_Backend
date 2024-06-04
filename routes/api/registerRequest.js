const express = require("express");
const reqRouter = express.Router();
const registerRequestController = require("../../controllers/registerRequestController.js");
const verifyRoles = require("../../middleware/roleschecker");
const roles = require("../../config/roles");

reqRouter.get("/getReq" , verifyRoles("admin") , registerRequestController.getRegisterReq);

reqRouter.get("/getAllUsers" , verifyRoles("admin"), registerRequestController.getAllUsers );

reqRouter.route("/acceptUser/:id")
  .all(verifyRoles("admin"))
  .put(registerRequestController.acceptUser);

reqRouter.delete("/delReq/:id" , verifyRoles("admin") , registerRequestController.deleteReq);



module.exports = reqRouter;

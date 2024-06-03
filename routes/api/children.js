const express = require("express");
const childRouter = express.Router();
const childController = require("../../controllers/childController");
const verifyRoles = require("../../middleware/roleschecker");
const roles = require("../../config/roles");

childRouter.get("/getYourKid" ,  childController.getYourKid);

childRouter
  .route("/")
  .get(childController.getAllChildren)
  .post(childController.createNewChild);

childRouter
  .route("/setPresence/:id")
  .all(verifyRoles("admin"))
  .put(childController.setPresence);

childRouter
  .route("/:id")
  .all(verifyRoles("user"))
  .get(childController.getChild)
  .put(childController.updateChild)
  .delete(childController.deleteChild);

// childRouter.route("/getYourKid").get(childController.getYourKid);



module.exports = childRouter;

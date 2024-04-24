const express = require("express");
const childRouter = express.Router();
const childController = require("../../controllers/childController");
//const verifyRoles = require("../../middleware/roleschecker");
const roles = require("../../config/roles");




childRouter.post("/createNewChild", childController.createNewChild);

childRouter.put("/updateChild/:id", childController.updateChild);

childRouter.delete("/deleteChild/:id", childController.deleteChild);

childRouter.get("/getChild/:id", childController.getChild);




module.exports = childRouter;

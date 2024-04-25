const express = require("express");
const childRouter = express.Router();
const childController = require("../../controllers/childController");
//const verifyRoles = require("../../middleware/roleschecker");
const roles = require("../../config/roles");


childRouter.route('/')
    .get(childController.getAllChildren)
    .post(childController.createNewChild)
    

childRouter.route('/:id')
    .get(childController.getChild)
    .put(childController.updateChild)
    .delete(childController.deleteChild);


// childRouter.post(
// 	"/createNewChild",
// 	verifyRoles("admin"),
// 	childController.createNewChild
// );

// childRouter.put(
// 	"/updateChild/:id",
// 	verifyRoles("admin"),
// 	childController.updateChild
// );

// childRouter.delete(
// 	"/deleteChild/:id",
// 	verifyRoles("admin"),
// 	childController.deleteChild
// );

// childRouter.get(
// 	"/getChild/:id",
// 	verifyRoles("admin"),
// 	childController.getChild
// );

// childRouter.get(
// 	"/getChildren",
// 	verifyRoles("admin"),
// 	childController.getChildren
// );

module.exports = childRouter;

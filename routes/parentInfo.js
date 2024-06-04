const express = require("express");
const parentInfoRouter = express.Router();
const parentInfoController = require("../controllers/ParentInfoContoller");
const verifyRoles = require('../middleware/roleschecker');
const roles = require("../config/roles");


parentInfoRouter.get("/" ,verifyRoles("user") , parentInfoController.getMe);
parentInfoRouter.get("/:id" , verifyRoles("admin") , parentInfoController.getUser);


module.exports = parentInfoRouter;
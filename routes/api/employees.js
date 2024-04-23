const express = require("express");
const employeeRouter = express.Router();
const employeesController = require("../../controllers/employeesController");
const verifyRoles = require("../../middleware/roleschecker");
const roles = require("../../config/roles");
// employeeRouter.use(verifyRoles("admin"));

employeeRouter.post("/createEmployee", employeesController.createNewEmployee);

employeeRouter.put("/updateEmployee/:id", employeesController.updateEmployee);

employeeRouter.delete("/deleteEmployee/:id", employeesController.deleteEmployee);

employeeRouter.get("/getEmployee/:id", employeesController.getEmployee);



module.exports = employeeRouter;

const express = require('express');
const router = express.Router();
const employeesController = require('../../controllers/employeesController');
const verifyRoles = require('../../middleware/roleschecker');
const roles = require('../../config/roles');

router.route('/')
    .all(verifyRoles("admin"))
    .get(employeesController.getAllEmployees)
    .post(employeesController.createNewEmployee)
    

router.route('/:id')
    .all(verifyRoles("admin"))
    .get(employeesController.getEmployee)
    .put(employeesController.updateEmployee)
    .delete(employeesController.deleteEmployee);

module.exports = router;
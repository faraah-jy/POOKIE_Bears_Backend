const express = require('express');
const router = express.Router();
const employeesController = require('../../controllers/employeesController');
const verifyRoles = require('../../middleware/roleschecker');
const roles = require('../../config/roles');

router.route('/')
    .get(verifyRoles("admin"), employeesController.getAllEmployees)
    .post(verifyRoles("admin"), employeesController.createNewEmployee)
    .put(verifyRoles("admin"), employeesController.updateEmployee)
    .delete(verifyRoles("admin"), employeesController.deleteEmployee);

router.route('/:id')
    .get(employeesController.getEmployee);

module.exports = router;
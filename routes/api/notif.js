const express = require('express');
const notifRouter = express.Router();
const notifController = require('../../controllers/notificationController');
const verifyRoles = require('../../middleware/roleschecker');
const roles = require('../../config/roles');

notifRouter.post("/presentChildren" , verifyRoles("admin") , notifController.sendNotifPresent)

notifRouter.post("/absentChildren" , verifyRoles("admin") , notifController.sendNotifAbsent)

notifRouter.get("/" , verifyRoles("user") , notifController.getNotif)


module.exports = notifRouter;
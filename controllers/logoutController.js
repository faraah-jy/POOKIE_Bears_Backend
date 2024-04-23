const User = require("../model/user");

const fsPromises = require('fs').promises;
const path = require('path');

const handleLogout = async (req, res) => {
    res.clearCookie("jwt");
}

module.exports = { handleLogout }
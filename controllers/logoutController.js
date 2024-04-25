const handleLogout = async (req, res) => {
    res.clearCookie("jwt");
    res.json("Logged out"); 
}

module.exports = { handleLogout }

function verifyRoles(...roles) {
	return (req, res, next) => {
		userRole = req.user.roles;
        if (roles.includes(userRole)) {
            return next();
        }
        return res.sendStatus(403);
	};
}

module.exports = verifyRoles;
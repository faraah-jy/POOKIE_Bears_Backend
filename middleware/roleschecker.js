
function verifyRoles(...roles) {
	return (req, res, next) => {
		userRoles = req.roles;
        for(role of roles){
            if(userRoles.includes(role)){
                return next();
            }
        }
        return res.sendStatus(403);
	};
}

module.exports = verifyRoles;
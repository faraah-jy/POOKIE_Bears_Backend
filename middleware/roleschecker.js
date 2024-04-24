
function verifyRoles(...roles) {
	return (req, res, next) => {
		let userRoles = req.roles;
        for(const role of roles){
            if(userRoles && userRoles.includes(role)){
                return next();
            }
        }
        return res.sendStatus(403);
	};
}

module.exports = verifyRoles;
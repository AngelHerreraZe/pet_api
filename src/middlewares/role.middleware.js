const isAdmin = async (req, res, next) => {
    const { username, role } = req.user;
    if (role !== "ADMIN") {
        return res.status(403).json({
            message: `${username} is not admin`
        })
    }
    next();
};

const isVet = async (req, res, next) => {
    const {username, role} = req.user;
    if(role !== "VET") {
        return res.status(403).json({
            message: `${username} is not vet`
        })
    }
    next();
}

module.exports = {
    isAdmin,
    isVet,
}
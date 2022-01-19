exports.IsAdminKasir = async (req, res, next) => {
    if (req.user.role === "kasir"|| req.user.role === "admin") {
        next();
    } else {
        return res.status(401).send("Forbidden! You are not Kasir or Admin")
    }
}
exports.IsAdmin = async (req, res, next) => {
    if (req.user.role === "admin") {
        next();
    } else {
        return res.status(401).send("Forbidden! You are not Admin")
    }
}
exports.IsOwner = async (req, res, next) => {
    if (req.user.role === "owner") {
        next();
    } else {
        return res.status(401).send("Forbidden! You are not Owner")
    }
}

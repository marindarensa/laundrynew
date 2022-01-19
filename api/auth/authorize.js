const jwt = require('jsonwebtoken');
const { secret } = require('./secret.json');

const authorize = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        let verifiedUser = jwt.verify(token, secret);
        if (!verifiedUser) return res.status(401).send('Unauthorized request')
        req.user = verifiedUser; // id & role
        next()
    } else {
        return res.status(401).json({ message: 'Unathorized' });
    }
}

//export module
module.exports = authorize;

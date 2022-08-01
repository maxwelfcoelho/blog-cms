const jwt = require("jsonwebtoken");

async function authMiddleware(req, res, next) {
    const bearer = req.headers["authorization"];
    if (!bearer) {
        return res.sendStatus(401);
    }

    const token = bearer.slice(7);

    try {
        const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
    
        req.user = decodedToken.data;
    } catch (e) {
        return res.sendStatus(401);
    }

    next();
}

module.exports = authMiddleware;
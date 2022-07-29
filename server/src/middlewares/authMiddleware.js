const jwt = require("jsonwebtoken");

async function authMiddleware(req, res, next) {
    const cookies = req.cookies;
    if (!cookies) {
        return res.sendStatus(401);
    }

    const token = cookies.token;

    try {
        const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
    
        req.user = decodedToken.data;
    } catch (e) {
        return res.sendStatus(401);
    }

    next();
}

module.exports = authMiddleware;
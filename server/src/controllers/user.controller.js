const userService = require("../service/user.service");

class UserController {
    async register(req, res) {
        const { email, password } = req.body;

        try {
            await userService.create({
                email,
                password
            });

            res.sendStatus(201);
        } catch(e) {
            res.status(400).json({ error: e.message });
        }
    }
}

module.exports = new UserController();
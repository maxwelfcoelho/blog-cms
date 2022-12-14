const { validationResult } = require('express-validator');

const userService = require("../service/user.service");

class UserController {
    async register(req, res) {
        const { 
            firstName, 
            lastName, 
            email, 
            password, 
            passwordConfirmation 
        } = req.body;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ 
                errors: errors.array().map(error => error.msg)
            });
        }

        try {
            await userService.create({
                firstName,
                lastName,
                email,
                password
            });

            res.sendStatus(201);
        } catch(e) {
            res.status(400).json({ error: e.message });
        }
    }

    async login(req, res) {
        const { email, password, passwordConfirmation } = req.body;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ 
                errors: errors.array().map(error => error.msg)
            });
        }

        try {
            const token = await userService.login({ email, password });

            res.status(200).json(token);
        } catch(e) {
            res.status(400).json({ error: e.message });
        }
    }
}

module.exports = new UserController();
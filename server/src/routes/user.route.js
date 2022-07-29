const { Router } = require("express");
const { body } = require('express-validator');

const userController = require("../controllers/user.controller");

const router = Router();

router.post(
    "/api/v1/register",
    body('email').isEmail().withMessage("Not a valid email"),
    body('password')
        .isLength({ min: 8 })
        .withMessage("Password should be at least 8 characters"),
    userController.register
);

router.post(
    "/api/v1/login",
    body('email').isEmail().withMessage("Not a valid email"),
    body('password')
        .isLength({ min: 8 })
        .withMessage("Password should be at least 8 characters"),
    userController.login
);

module.exports = router;

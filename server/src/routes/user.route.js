const { Router } = require("express");
const { body } = require('express-validator');

const userController = require("../controllers/user.controller");

const router = Router();

router.post(
    "/api/v1/register",
    body("firstName").notEmpty().withMessage("First name is required"),
    body("lastName").notEmpty().withMessage("Last name is required"),
    body("email").isEmail().withMessage("Not a valid email"),
    body("password")
        .isLength({ min: 8 })
        .withMessage("Password should be at least 8 characters"),
    body("passwordConfirmation").custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error(
                'Password confirmation does not match password'
            );
        }
        return true;
    }),
    userController.register
);

router.post(
    "/api/v1/login",
    body("email").isEmail().withMessage("Not a valid email"),
    body("password")
        .isLength({ min: 8 })
        .withMessage("Password should be at least 8 characters"),
    body("passwordConfirmation").custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error(
                'Password confirmation does not match password'
            );
        }
        return true;
    }),
    userController.login
);

module.exports = router;

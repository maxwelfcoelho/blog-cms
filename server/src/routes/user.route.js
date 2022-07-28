const { Router } = require("express");

const userController = require("../controllers/user.controller");

const router = Router();

router.post("/api/v1/register", userController.register);

module.exports = router;
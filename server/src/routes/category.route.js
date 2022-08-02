const { Router } = require("express");
const { body } = require("express-validator");

const categoryController = require("../controllers/category.controller");
const authMiddleware = require("../middlewares/authMiddleware");

const router = Router();

router.get("/api/v1/categories", categoryController.findAllCategories);

router.post(
    "/api/v1/categories/new",
    authMiddleware,
    body("name").notEmpty().withMessage("Name is required"),
    categoryController.createCategory
);

module.exports = router;

const { Router } = require("express");

const categoryController = require("../controllers/category.controller");

const router = Router();

router.get("/api/v1/categories", categoryController.findAllCategories);

module.exports = router;
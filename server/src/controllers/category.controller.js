const { validationResult } = require("express-validator");

const categoryService = require("../service/category.service");

class CategoryController {
    async findAllCategories(_, res) {
        const categories = await categoryService.findAllCategories();

        res.status(200).json(categories);
    }

    async createCategory(req, res) {
        const { name } = req.body;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ 
                errors: errors.array().map(error => error.msg)
            });
        }

        const category = await categoryService.createCategory({
            name
        });

        res.sendStatus(201);
    }

    async deleteCategoryById(req, res) {
        const { categoryId } = req.params;

        try {
            await categoryService.deleteCategoryById(categoryId);

            res.sendStatus(200);
        } catch(e) {
            res.status(400).json({ error: e.message });
        }
    }
}

module.exports = new CategoryController();

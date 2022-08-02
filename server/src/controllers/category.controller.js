const categoryService = require("../service/category.service");

class CategoryController {
    async findAllCategories(_, res) {
        const categories = await categoryService.findAllCategories();

        res.status(200).json(categories);
    }
}

module.exports = new CategoryController();
const categoryRepository = require("../repository/category.repository");

class CategoryService {
    async findAllCategories() {
        return await categoryRepository.findAll();
    }
}

module.exports = new CategoryService();
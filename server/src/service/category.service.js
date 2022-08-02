const categoryRepository = require("../repository/category.repository");

class CategoryService {
    async findAllCategories() {
        return await categoryRepository.findAll();
    }

    async createCategory(categoryRequest) {
        const category = {
            name: categoryRequest.name,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        return await categoryRepository.create(category);
    }
}

module.exports = new CategoryService();
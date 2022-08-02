const categoryRepository = require("../repository/category.repository");

class CategoryService {
    async findAllCategories() {
        return await categoryRepository.findAll();
    }

    async findCategoryById(id) {
        const categories = await categoryRepository.findById(id);
        if (categories.length <= 0) {
            throw new Error(`Category ${id} not found`);
        }
        return categories[0];
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

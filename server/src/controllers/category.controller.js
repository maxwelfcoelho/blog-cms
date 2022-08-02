class CategoryController {
    findAllCategories(req, res) {
        res.status(200).json("categories");
    }
}

module.exports = new CategoryController();
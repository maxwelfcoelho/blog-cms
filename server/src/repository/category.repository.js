const pool = require("../db");

class CategoryRepository {
    async findAll() {
        const query = "SELECT * FROM category";
        return await pool.query(query);
    }
}

module.exports = new CategoryRepository();
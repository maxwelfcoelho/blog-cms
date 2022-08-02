const pool = require("../db");

class CategoryRepository {
    async findAll() {
        const query = "SELECT * FROM category";
        const [rows, _] = await pool.query(query);
        return rows;
    }
}

module.exports = new CategoryRepository();
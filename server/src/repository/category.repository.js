const pool = require("../db");

class CategoryRepository {
    async findAll() {
        const query = "SELECT * FROM category";
        const [rows, _] = await pool.query(query);
        return rows;
    }

    async findById(id) {
        const query = "SELECT * FROM category WHERE id = ?";
        const values = [id];
        const [rows, _] = await pool.query(query, values);
        return rows;
    }

    async create(category) {
        const query = "INSERT INTO category (name, createdAt, updatedAt) VALUES (?, ?, ?)";
        const values = [category.name, category.createdAt, category.updatedAt];
        return await pool.query(query, values);
    }
}

module.exports = new CategoryRepository();

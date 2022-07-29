const pool = require("../db");

class PostRepository {
    async findAll() {
        const query = "SELECT * FROM post";
        const [rows, _] = await pool.query(query);
        return rows;
    }
}

module.exports = new PostRepository();
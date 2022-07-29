const pool = require("../db");

class PostRepository {
    async findAll() {
        const query = "SELECT * FROM post";
        const [rows, _] = await pool.query(query);
        return rows;
    }

    async create(post) {
        const query = "INSERT INTO post (title, content, createdAt, updatedAt) VALUES (?, ?, ?, ?)";
        const values = [
            post.title, 
            post.content, 
            post.createdAt, 
            post.updatedAt
        ];
        return await pool.query(query, values);
    }
}

module.exports = new PostRepository();
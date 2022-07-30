const pool = require("../db");

class PostRepository {
    async findAll() {
        const query = "SELECT * FROM post";
        const [rows, _] = await pool.query(query);
        return rows;
    }

    async findAllWithUser() {
        const query = "SELECT p.id, p.title, p.content, p.createdAt, p.updatedAt, JSON_OBJECT('firstname', u.firstname) AS user FROM post p LEFT JOIN user u on p.userId=u.id GROUP BY p.id";
        const [rows, _] = await pool.query(query);
        return rows;
    }

    async create(post) {
        const query = "INSERT INTO post (title, content, createdAt, updatedAt, userId) VALUES (?, ?, ?, ?, ?)";
        const values = [
            post.title, 
            post.content, 
            post.createdAt, 
            post.updatedAt,
            post.userId
        ];
        return await pool.query(query, values);
    }
}

module.exports = new PostRepository();
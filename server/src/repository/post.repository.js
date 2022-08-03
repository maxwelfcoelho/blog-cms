const pool = require("../db");

class PostRepository {
    async findAll() {
        const query = "SELECT * FROM post";
        const [rows, _] = await pool.query(query);
        return rows;
    }

    async findAllWithUser() {
        const query = "SELECT p.id, p.title, p.content, p.createdAt,p.updatedAt, JSON_OBJECT('name', c.name) AS category, JSON_OBJECT('firstname', u.firstname) AS user FROM post p LEFT JOIN category c on p.categoryId=c.id LEFT JOIN user u on p.userId=u.id GROUP BY p.id";
        const [rows, _] = await pool.query(query);
        return rows;
    }

    async findById(id) {
        const query = "SELECT * FROM post WHERE id = ?";
        const values = [id];
        return await pool.query(query, values);
    }
    
    async findByIdWithCategory(id) {
        const query = "SELECT p.id, p.title, p.content, JSON_OBJECT('name', c.name) AS category FROM post p INNER JOIN category c ON p.categoryId = c.id WHERE p.id = ?";
        const values = [id];
        const [rows, _] = await pool.query(query, values);
        return rows;
    }

    async create(post) {
        const query = "INSERT INTO post (title, content, createdAt, updatedAt, categoryId, userId) VALUES (?, ?, ?, ?, ?, ?)";
        const values = [
            post.title, 
            post.content, 
            post.createdAt, 
            post.updatedAt,
            post.categoryId,
            post.userId
        ];
        return await pool.query(query, values);
    }

    async deleteById(id) {
        const query = "DELETE FROM post WHERE id = ?";
        const values = [id];
        return await pool.query(query, values);
    }
}

module.exports = new PostRepository();

const pool = require("../db");

class UserRepository {
    async findAll() {
        const query = "SELECT * FROM user";
        const [rows, _] = await pool.query(query);
        return rows;
    }

    async create(user) {
        const query = "INSERT INTO user (firstname, lastname, email, password, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?)";
        const values = [
            user.firstName,
            user.lastName,
            user.email, 
            user.password, 
            user.createdAt, 
            user.updatedAt
        ];
        return await pool.query(query, values);
    }

    async findById(id) {
        const query = "SELECT * FROM user WHERE id = ?";
        const values = [id];
        const [rows, _] = await pool.query(query, values);

        return rows;
    }

    async findByEmail(email) {
        const query = "SELECT * FROM user WHERE email = ?";
        const values = [email];
        const [rows, _] = await pool.query(query, values);

        return rows;
    }
}

module.exports = new UserRepository();
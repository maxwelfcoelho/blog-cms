const bcrypt = require("bcrypt");

const userRepository = require("../repository/user.repository");

class UserService {
    async create(userRequest) {
        const usersFound = await userRepository.findByEmail(userRequest.email);
        if (usersFound.length > 0) {
            throw new Error("Email already exists");
        }

        const hashedPassword = await bcrypt.hash(userRequest.password, 10);

        const user = {
            email: userRequest.email,
            password: hashedPassword,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        return await userRepository.create(user);
    }
}

module.exports = new UserService();
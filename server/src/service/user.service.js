const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRepository = require("../repository/user.repository");

class UserService {
    async create(userRequest) {
        const usersFound = await userRepository.findByEmail(userRequest.email);
        if (usersFound.length > 0) {
            throw new Error("Email already in use");
        }

        const hashedPassword = await bcrypt.hash(userRequest.password, 10);

        const user = {
            firstName: userRequest.firstName,
            lastName: userRequest.lastName,
            email: userRequest.email,
            password: hashedPassword,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        return await userRepository.create(user);
    }

    async login(userRequest) {
        const foundUsers = await userRepository.findByEmail(userRequest.email);
        if (foundUsers.length < 1) {
            throw new Error("Email or password does not match");
        }

        const foundUser = foundUsers[0];

        const arePasswordsEqual = await bcrypt
            .compare(userRequest.password, foundUser.password);

        if (!arePasswordsEqual) {
            throw new Error("Email or password does not match");
        }

        const token = await jwt.sign({
            data: {
                id: foundUser.id,
                email: foundUser.email
            },
        }, process.env.JWT_SECRET, { expiresIn: '8h' });

        return token;
    }
}

module.exports = new UserService();
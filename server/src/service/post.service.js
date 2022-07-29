const postRepository = require("../repository/post.repository");

class PostService {
    async findAllPosts() {
        return await postRepository.findAll();
    }
}

module.exports = new PostService();
const postRepository = require("../repository/post.repository");

class PostService {
    async findAllPosts() {
        return await postRepository.findAll();
    }

    async createPost(postRequest) {
        const post = {
            title: postRequest.title,
            content: postRequest.content,
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: postRequest.userId
        };

        const newPost = await postRepository.create(post);
        return newPost;
    }
}

module.exports = new PostService();
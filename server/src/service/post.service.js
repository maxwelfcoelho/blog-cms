const postRepository = require("../repository/post.repository");
const categoryService = require("../service/category.service");

class PostService {
    async findAllPosts() {
        return await postRepository.findAllWithUser();
    }

    async createPost(postRequest) {
        await categoryService
            .findCategoryById(postRequest.categoryId);

        const post = {
            title: postRequest.title,
            content: postRequest.content,
            createdAt: new Date(),
            updatedAt: new Date(),
            categoryId: postRequest.categoryId,
            userId: postRequest.userId
        };


        const newPost = await postRepository.create(post);
        return newPost;
    }
}

module.exports = new PostService();

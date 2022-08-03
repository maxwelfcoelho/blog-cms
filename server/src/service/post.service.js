const postRepository = require("../repository/post.repository");
const categoryService = require("../service/category.service");

class PostService {
    async findAllPosts() {
        return await postRepository.findAllWithUser();
    }

    async findPostById(postId) {
        const posts = await postRepository.findById(postId);
        if (posts[0].length <= 0) {
            throw new Error(`Post ${postId} not found`); 
        }

        return posts[0];
    }

    async findPostByIdWithCategory(postId) {
        const post = await postRepository.findByIdWithCategory(postId);
        if (post.length <= 0) {
            throw new Error(`Post ${postId} not found`);
        }
        return post[0];
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

    async updatePostById(postId, post) {
        await this.findPostById(postId);

        return postRepository.updateById(postId, post); 
    }

    async deletePostById(postId) {
        const posts = await this.findPostById(postId);

        return await postRepository.deleteById(postId);
    }
}

module.exports = new PostService();

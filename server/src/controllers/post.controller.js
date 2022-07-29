const postService = require("../service/post.service");

class PostController {
    async findAllPosts(req, res) {
        const posts = await postService.findAllPosts();

        res.status(200).json(posts);
    }
}

module.exports = new PostController();
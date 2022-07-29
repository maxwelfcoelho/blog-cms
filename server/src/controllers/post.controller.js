const { validationResult } = require("express-validator");

const postService = require("../service/post.service");

class PostController {
    async findAllPosts(req, res) {
        const posts = await postService.findAllPosts();

        res.status(200).json(posts);
    }

    async createPost(req, res) {
        const { title, content } = req.body;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ 
                errors: errors.array().map(error => error.msg)
            });
        }


        res.status(201).json();
    }
}

module.exports = new PostController();
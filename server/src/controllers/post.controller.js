const { validationResult } = require("express-validator");

const postService = require("../service/post.service");

class PostController {
    async findAllPosts(req, res) {
        const posts = await postService.findAllPosts();

        res.status(200).json(posts);
    }

    async findPostByIdWithCategory(req, res) {
        const { postId } = req.params;

        try {
            const post = await postService.findPostByIdWithCategory(postId);

            res.status(200).json(post);
        } catch(e) {
            res.status(400).json({ error: e.message });
        }
    }

    async createPost(req, res) {
        const { title, content, categoryId } = req.body;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ 
                errors: errors.array().map(error => error.msg)
            });
        }

        try {
            await postService.createPost({
                title,
                content,
                categoryId,
                userId: req.user.id
            });

            res.sendStatus(201);
        } catch(e) {
            res.status(400).json({ error: e.message });
        }
    }

    async updatePostById(req, res) {
        const { postId } = req.params;
        const { title, categoryId, content } = req.body;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ 
                errors: errors.array().map(error => error.msg)
            });
        }

        try {
            await postService.updatePostById(postId, {
                title,
                categoryId,
                content,
                updatedAt: new Date()
            });

            res.sendStatus(200);
        } catch(e) {
            res.status(400).json({ error: e.message });
        }
    }

    async deletePostById(req, res) {
        const { postId } = req.params;

        try {
            await postService.deletePostById(postId);

            res.sendStatus(200);
        } catch(e) {
            res.status(400).json({ error: e.message });
        }
    }
}

module.exports = new PostController();

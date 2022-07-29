const { Router } = require("express");

const router = Router();

const postController = require("../controllers/post.controller");

router.get("/api/v1/posts", postController.findAllPosts);

module.exports = router;

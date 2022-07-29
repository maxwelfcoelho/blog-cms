const { Router } = require("express");
const { body } = require("express-validator");

const router = Router();

const postController = require("../controllers/post.controller");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/api/v1/posts", postController.findAllPosts);

router.post(
    "/api/v1/posts/new",
    authMiddleware,
    body("title")
        .notEmpty()
        .withMessage("Title is required")
        .isLength({ min: 20 })
        .withMessage("Title should be at least length 20")
        .isLength({ max: 150 })
        .withMessage("Title should be at most length 150"),
    body("content")
        .notEmpty()
        .withMessage("Content is required")
        .isLength({ min: 50 })
        .withMessage("Title should be at least length 50")
        .isLength({ max: 255 })
        .withMessage("Title should be at most length 255"),
    postController.createPost
);

module.exports = router;
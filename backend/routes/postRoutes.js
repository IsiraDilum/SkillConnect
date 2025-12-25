// backend/routes/postRoutes.js

const express = require("express");
const router = express.Router();
const {
    createPost,
    getUserPosts,
    toggleLike,
    addComment,
} = require("../controllers/postController");

router.post("/", createPost);
router.get("/:userId", getUserPosts);
router.post("/like", toggleLike);
router.post("/comment", addComment);

module.exports = router;

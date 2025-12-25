// backend/controllers/postController.js

const Post = require("../models/Post");

/**
 * CREATE POST
 */
exports.createPost = async (req, res) => {
    try {
        const post = await Post.create({
            user: req.body.userId,
            content: req.body.content,
            image: req.body.image || "",
        });

        res.status(201).json(post);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

/**
 * GET POSTS BY USER
 */
exports.getUserPosts = async (req, res) => {
    try {
        const posts = await Post.find({ user: req.params.userId })
            .populate("user", "firstName lastName profileImage")
            .sort({ createdAt: -1 });

        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

/**
 * LIKE / UNLIKE POST
 */
exports.toggleLike = async (req, res) => {
    try {
        const { postId, userId } = req.body;

        const post = await Post.findById(postId);

        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        if (post.likes.includes(userId)) {
            post.likes.pull(userId);
        } else {
            post.likes.push(userId);
        }

        await post.save();
        res.json(post);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

/**
 * ADD COMMENT
 */
exports.addComment = async (req, res) => {
    try {
        const { postId, userId, text } = req.body;

        const post = await Post.findById(postId);

        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        post.comments.push({
            user: userId,
            text,
        });

        await post.save();
        res.json(post);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

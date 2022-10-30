const router = require("express").Router();

// http://localhost:3000/api/posts
router.get("/", (req, res) => {
    res.send("GET posts");
});

// http://localhost:3000/api/posts/1
router.get("/:postId", (req, res) => {
    res.send("GET posts ID");
});

// http://localhost:3000/api/posts/
router.post("/", (req, res) => {
    res.send("GET posts ID");
});

// http://localhost:3000/api/posts/posts-autor/1
router.get("/posts-autor/:autorId", (req, res) => {
    res.send("GET posts-autor");
});

module.exports = router;

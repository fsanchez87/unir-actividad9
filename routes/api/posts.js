const { getAll, getById, create, getByAutor } = require("../../models/post.model copy");

const router = require("express").Router();

// http://localhost:3000/api/posts
router.get("/", async (req, res) => {
    try {
        const posts = await getAll();
        res.json(posts);
    } catch (error) {
        res.json({ Error: error.message });
    }
});

// http://localhost:3000/api/posts/1
router.get("/:postId", async (req, res) => {
    const { postId } = req.params;
    try {
        const post = await getById(postId);
        if (post === null) {
            res.json({ Error: "No exite un post con ese ID" });
        } else {
            res.json(post);
        }
    } catch (error) {
        res.json({ Error: error.message });
    }
});

// http://localhost:3000/api/posts/
router.post("/", async (req, res) => {
    try {
        const result = await create(req.body);
        const post = await getById(result.insertId);
        res.json(post);
    } catch (error) {
        res.json({ Error: error.message });
    }
});

// http://localhost:3000/api/posts/posts-autor/1
router.get("/posts-autor/:autorId", async(req, res) => {
    const { autorId } = req.params;
    try {
        const post = await getByAutor(autorId);
        if (post === null) {
            res.json({ Error: "No exite un post con ese ID de autor" });
        } else {
            res.json(post);
        }
    } catch (error) {
        res.json({ Error: error.message });
    }
});

module.exports = router;

const router = require("express").Router();

const { getAll, getById, create } = require("../../models/autor.model");

// http://localhost:3000/api/autores
router.get("/", async (req, res) => {
    try {
        const autores = await getAll();
        res.json(autores);
    } catch (error) {
        res.json({ Error: error.message });
    }
});

// http://localhost:3000/api/autores/1
router.get("/:autorId", async (req, res) => {
    const { autorId } = req.params;
    try {
        const autor = await getById(autorId);
        if (autor === null) {
            res.json({ Error: "No exite un autor con ese ID" });
        } else {
            res.json(autor);
        }
    } catch (error) {
        res.json({ Error: error.message });
    }
});

// http://localhost:3000/api/autores/
router.post("/", async (req, res) => {
    try {
        const result = await create(req.body);
        const autor = await getById(result.insertId);
        res.json(autor);
    } catch (error) {
        res.json({ Error: error.message });
    }
});

module.exports = router;

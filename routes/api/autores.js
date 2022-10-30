const router = require("express").Router();

// http://localhost:3000/api/autores
router.get("/", (req, res) => {
    res.send("GET AUTORES");
});

// http://localhost:3000/api/autores/1
router.get("/:autorId", (req, res) => {
    res.send("GET AUTORES ID");
});

// http://localhost:3000/api/autores/
router.post("/", (req, res) => {
    res.send("POST AUTOR");
});

module.exports = router;

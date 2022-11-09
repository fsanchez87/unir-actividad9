const { executeQuery, executeQueryOne } = require("../helpers/utils");

const getAll = () => {
    return executeQuery("SELECT * FROM posts");
};

const getById = (postsId) => {
    return executeQueryOne("SELECT * FROM posts where id = ?", [postsId]);
};

const create = ({ titulo, descripcion, fecha_creacion, categoria, autor_id }) => {
    return executeQuery(
        "INSERT INTO posts (titulo, descripcion, fecha_creacion, categoria, autor_id) VALUES (?, ?, ?, ?, ?)",
        [titulo, descripcion, fecha_creacion, categoria, autor_id]
    );
};

module.exports = { getAll, getById, create };

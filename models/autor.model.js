const { executeQuery, executeQueryOne } = require("../helpers/utils");

const getAll = () => {
    return executeQuery("SELECT * FROM autores");
};

const getById = (autorId) => {
    return executeQueryOne("SELECT * FROM autores where id = ?", [autorId]);
};

const create = ({ nombre, email, imagen }) => {
    return executeQuery(
        "INSERT INTO autores (nombre, email, imagen) VALUES (?, ?, ?)",
        [nombre, email, imagen]
    );
};

const update = (autorId, { nombre, email, imagen }) => {
    return executeQuery(
        "UPDATE autores set nombre = ?, email = ?, imagen = ? WHERE ID = ?",
        [nombre, email, imagen, autorId]
    );
};

const deleteById = (autorId) => {
    return executeQuery("DELETE FROM autores where id = ?", [autorId]);
};

module.exports = { getAll, getById, create, deleteById, update };

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

module.exports = { getAll, getById, create };

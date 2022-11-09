const { executeQuery, executeQueryOne } = require("../helpers/utils");

const getAll = () => {
    return executeQuery(
        "SELECT posts.id, posts.titulo, posts.descripcion, posts.fecha_creacion, posts.categoria, posts.autor_id, autores.nombre as autor_nombre, autores.email as autor_email, autores.imagen as autor_imagen FROM posts, autores WHERE autor_id = posts.autor_id AND posts.autor_id = autores.id;"
    );
};

const getById = (postsId) => {
    return executeQueryOne(
        "SELECT posts.id, posts.titulo, posts.descripcion, posts.fecha_creacion, posts.categoria, posts.autor_id, autores.nombre as autor_nombre, autores.email as autor_email, autores.imagen as autor_imagen FROM posts, autores WHERE posts.id = ? AND posts.autor_id = autores.id;",
        [postsId]
    );
};

const getByAutor = (autorId) => {
    return executeQuery(
        "SELECT posts.id, posts.titulo, posts.descripcion, posts.fecha_creacion, posts.categoria, posts.autor_id, autores.nombre as autor_nombre, autores.email as autor_email, autores.imagen as autor_imagen FROM posts, autores WHERE autores.id = ? AND posts.autor_id = autores.id;",
        [autorId]
    );
};

const create = ({
    titulo,
    descripcion,
    fecha_creacion,
    categoria,
    autor_id,
}) => {
    return executeQuery(
        "INSERT INTO posts (titulo, descripcion, fecha_creacion, categoria, autor_id) VALUES (?, ?, ?, ?, ?)",
        [titulo, descripcion, fecha_creacion, categoria, autor_id]
    );
};

module.exports = { getAll, getById, create, getByAutor };

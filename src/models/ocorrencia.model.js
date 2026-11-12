const con = require('../config/db');

const cadastrar = async ({ usuarioId, local, tipoResiduo, nivelRisco, data, status }) => {
    const [resultado] = await con.query(
        "INSERT INTO ocorrencia (usuarioId, local, tipoResiduo, nivelRisco, data, status) VALUES (?, ?, ?, ?, ?, ?);",
        [usuarioId, local, tipoResiduo, nivelRisco, data, status]
    );
    return {
        id: resultado.insertId,
        usuarioId,
        local,
        tipoResiduo,
        nivelRisco: nivelRisco,
        status: status
    };
};

const listar = async () => {
    const [resultado] = await con.query(
        `SELECT o.id, o.usuarioId, u.nome AS nomeUsuario, o.local, o.tipoResiduo, o.nivelRisco, o.data, o.status`
    );
    return resultado;
};

const alterar = async (dados, id) => {
    const [resultado] = await con.query(
        "UPDATE ocorrencia SET ? WHERE id = ?;",
        [dados, id]
    );
    return resultado;
};

const excluir = async (id) => {
    const [resultado] = await con.query(
        "DELETE FROM ocorrencia WHERE id = ?;",
        [id]
    );
    return resultado;
};

module.exports = {
    cadastrar,
    listar,
    alterar,
    excluir
};

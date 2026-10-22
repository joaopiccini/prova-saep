const { conectarComBancoDeDados } = require("../db/conexao");

class TutorModel {
    async buscarTodos(termoBusca) {
        const conexaoComBanco = await conectarComBancoDeDados();

        // TODO: filtrar pelo nome quando houver termoBusca.

        const tutores = await conexaoComBanco.all("SELECT * FROM tutores"); // TODO: ajustar

        return tutores;
    }

    async criar(nome, cpf, telefone, email) {
        const conexaoComBanco = await conectarComBancoDeDados();

        // TODO: INSERT e devolver o id criado (resultado.lastID)
    }

    async editar(id, nome, cpf, telefone, email) {
        const conexaoComBanco = await conectarComBancoDeDados();

        // TODO: UPDATE e devolver as linhas alteradas (resultado.changes)
    }

    async excluir(id) {
        const conexaoComBanco = await conectarComBancoDeDados();

        // TODO: DELETE e devolver as linhas removidas (resultado.changes)
    }
}

module.exports = {
    TutorModel
}

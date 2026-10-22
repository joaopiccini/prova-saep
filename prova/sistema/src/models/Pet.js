const { conectarComBancoDeDados } = require("../db/conexao");

class PetModel {
    async buscarTodos() {
        const conexaoComBanco = await conectarComBancoDeDados();

        // TODO: SELECT com JOIN em tutores, ordenado pelo nome do pet (id, nome, especie, raca, tutor_id, nome_tutor).

        return [];
    }

    async criar(nome, especie, raca, tutor_id) {
        const conexaoComBanco = await conectarComBancoDeDados();

        // TODO: INSERT e devolver o id criado (resultado.lastID)
    }
}

module.exports = {
    PetModel
}

// ============================================================
// src/models/Pet.js
// ============================================================
// ESTE ARQUIVO É COM VOCÊS (ALUNO DESENVOLVE).
//
// Depende da tabela "pets", que vocês criam no saep_db.sql.
// ============================================================

const { conectarComBancoDeDados } = require("../db/conexao");

class PetModel {
    // Lista os pets trazendo também o nome do tutor. A tela espera
    // os campos: id, nome, especie, raca, tutor_id e nome_tutor.
    async buscarTodos() {
        const conexaoComBanco = await conectarComBancoDeDados();

        // TODO: SELECT com JOIN em tutores, ordenado pelo nome do pet

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

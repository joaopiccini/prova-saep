// ============================================================
// src/models/Tutor.js
// ============================================================
// ESTE ARQUIVO É COM VOCÊS (ALUNO DESENVOLVE).
//
// O model só conversa com o banco (SQL). Validação, criptografia
// do CPF e resposta ficam no TutorController.
// ============================================================

const { conectarComBancoDeDados } = require("../db/conexao");

class TutorModel {
    // Lista os tutores. Se termoBusca vier preenchido, traz só os
    // que correspondem ao termo.
    async buscarTodos(termoBusca) {
        const conexaoComBanco = await conectarComBancoDeDados();

        // TODO: filtrar pelo nome quando houver termoBusca.
        // O CPF está criptografado no banco: buscar nele não funciona.

        const tutores = await conexaoComBanco.all("SELECT * FROM tutores"); // TODO: ajustar

        return tutores;
    }

    // O CPF já chega aqui criptografado.
    async criar(nome, cpf, telefone, email) {
        const conexaoComBanco = await conectarComBancoDeDados();

        // TODO: INSERT e devolver o id criado (resultado.lastID)
    }

    // O CPF já chega aqui criptografado.
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

// ============================================================
// src/models/Agendamento.js
// ============================================================
// ESTE ARQUIVO É COM VOCÊS (ALUNO DESENVOLVE).
//
// Depende da tabela "agendamentos", que vocês criam no saep_db.sql.
// O tutor não está ligado direto ao agendamento: o caminho é
// agendamentos -> pets -> tutores.
// ============================================================

const { conectarComBancoDeDados } = require("../db/conexao");

class AgendamentoModel {
    // Lista os agendamentos ordenados por dia (e horário), com
    // todos os dados do pet e do tutor.
    //
    // Colunas com o mesmo nome em tabelas diferentes (ex: "nome",
    // "id") precisam de apelido (AS). A tela espera:
    //   id, data_agendamento, horario, motivo,
    //   nome_pet, especie, raca,
    //   nome_tutor, cpf, telefone, email
    async buscarTodos() {
        const conexaoComBanco = await conectarComBancoDeDados();

        // TODO: SELECT com JOIN (agendamentos -> pets -> tutores)

        return [];
    }

    async atualizarData(id, data_agendamento) {
        const conexaoComBanco = await conectarComBancoDeDados();

        // TODO: UPDATE e devolver as linhas alteradas (resultado.changes)
    }
}

module.exports = {
    AgendamentoModel
}

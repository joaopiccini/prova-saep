// ============================================================
// src/controllers/AgendamentoController.js
// ============================================================
// ESTE ARQUIVO É COM VOCÊS (ALUNO DESENVOLVE).
// ============================================================

const { AgendamentoModel } = require("../models/Agendamento");
const { descriptografarCPF } = require("../utils/criptografia");

class AgendamentoController {
    // ─────────────────────────────────────────
    // GET /api/agendamentos -> listar agendamentos ordenados por
    // dia, com todos os dados do tutor e do pet
    // ─────────────────────────────────────────
    async listar(req, res) {
        try {
            const agendamentos = await new AgendamentoModel().buscarTodos();

            // TODO: o CPF do tutor vem criptografado do banco.
            // Descriptografe antes de responder.

            return res.status(200).json(agendamentos);
        } catch (erro) {
            return res.status(500).json({ erro: erro.message });
        }
    }

    // ─────────────────────────────────────────
    // PUT /api/agendamentos/:id -> atualizar a data do agendamento
    // ─────────────────────────────────────────
    async atualizarData(req, res) {
        try {
            const { id } = req.params;
            const { data_agendamento } = req.body;

            // TODO: validar que data_agendamento foi informada (400)

            // TODO: chamar o model. Nenhuma linha alterada -> 404

            return res.status(200).json({}); // TODO: devolver uma confirmação
        } catch (erro) {
            return res.status(500).json({ erro: erro.message });
        }
    }
}

module.exports = {
    AgendamentoController
}

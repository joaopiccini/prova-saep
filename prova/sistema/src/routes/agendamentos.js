// ============================================================
// src/routes/agendamentos.js
// ============================================================
// Este arquivo já está pronto (BASE FORNECIDA).
// O que falta está em AgendamentoController e AgendamentoModel.
// ============================================================

const express = require("express");
const { AgendamentoController } = require("../controllers/AgendamentoController");
const { verificarSessao } = require("../middlewares/autenticacao");

const roteadorAgendamentos = express.Router();

roteadorAgendamentos.get("/api/agendamentos", verificarSessao, new AgendamentoController().listar)
roteadorAgendamentos.put("/api/agendamentos/:id", verificarSessao, new AgendamentoController().atualizarData)

module.exports = {
    roteadorAgendamentos
}

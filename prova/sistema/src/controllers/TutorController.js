// ============================================================
// src/controllers/TutorController.js
// ============================================================
// ESTE ARQUIVO É COM VOCÊS (ALUNO DESENVOLVE).
//
// Lembretes:
//   - CPF: CRIPTOGRAFAR ao salvar/atualizar e DESCRIPTOGRAFAR ao
//     listar (src/utils/criptografia.js)
//   - Status: 200 OK | 201 criado | 400 dados inválidos |
//     404 não encontrado | 500 erro no servidor
// ============================================================

const { TutorModel } = require("../models/Tutor");
const { criptografarCPF, descriptografarCPF } = require("../utils/criptografia");

class TutorController {
    // ─────────────────────────────────────────
    // GET /api/tutores            -> listar tutores
    // GET /api/tutores?busca=termo -> listar tutores filtrados
    // ─────────────────────────────────────────
    async listar(req, res) {
        try {
            const termoBusca = req.query.busca;

            const tutores = await new TutorModel().buscarTodos(termoBusca);

            // TODO: descriptografar o CPF de cada tutor

            return res.status(200).json(tutores);
        } catch (erro) {
            return res.status(500).json({ erro: erro.message });
        }
    }

    // ─────────────────────────────────────────
    // POST /api/tutores -> inserir novo tutor
    // ─────────────────────────────────────────
    async criar(req, res) {
        try {
            const { nome, cpf, telefone, email } = req.body;

            // TODO: validar campos obrigatórios (nome e cpf)

            // TODO: criptografar o CPF e chamar o model

            return res.status(201).json({}); // TODO: devolver o tutor criado (com o id)
        } catch (erro) {
            return res.status(500).json({ erro: erro.message });
        }
    }

    // ─────────────────────────────────────────
    // PUT /api/tutores/:id -> editar tutor existente
    // ─────────────────────────────────────────
    async editar(req, res) {
        try {
            const { id } = req.params;
            const { nome, cpf, telefone, email } = req.body;

            // TODO: validar, criptografar o CPF e chamar o model.
            // Nenhuma linha alterada -> 404 (tutor não encontrado)

            return res.status(200).json({}); // TODO: devolver uma confirmação
        } catch (erro) {
            return res.status(500).json({ erro: erro.message });
        }
    }

    // ─────────────────────────────────────────
    // DELETE /api/tutores/:id -> excluir tutor
    // ─────────────────────────────────────────
    async excluir(req, res) {
        try {
            const { id } = req.params;

            // TODO: chamar o model. Nenhuma linha removida -> 404
            // Tutor com pet cadastrado não pode ser excluído (chave
            // estrangeira): o SQLite gera um erro, que cai no catch.

            return res.status(200).json({ mensagem: "Tutor removido com sucesso." });
        } catch (erro) {
            return res.status(500).json({ erro: erro.message });
        }
    }
}

module.exports = {
    TutorController
}

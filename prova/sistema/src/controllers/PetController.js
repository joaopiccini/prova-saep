// ============================================================
// src/controllers/PetController.js
// ============================================================
// listar() já está pronto. O que vocês desenvolvem é o criar().
//
// Lembrete: todo pet é obrigatoriamente associado a um tutor
// (tutor_id não pode ser nulo).
// ============================================================

const { PetModel } = require("../models/Pet");

class PetController {
    // ─────────────────────────────────────────
    // GET /api/pets -> listar pets com o nome do tutor
    // ─────────────────────────────────────────
    async listar(req, res) {
        try {
            const pets = await new PetModel().buscarTodos();

            return res.status(200).json(pets);
        } catch (erro) {
            return res.status(500).json({ erro: erro.message });
        }
    }

    // ─────────────────────────────────────────
    // POST /api/pets -> inserir novo pet, associado a um tutor
    // ─────────────────────────────────────────
    async criar(req, res) {
        try {
            const { nome, especie, raca, tutor_id } = req.body;

            // TODO: validar campos obrigatórios (nome, especie e tutor_id)

            // TODO: chamar o model

            return res.status(201).json({}); // TODO: devolver o pet criado (com o id)
        } catch (erro) {
            return res.status(500).json({ erro: erro.message });
        }
    }
}

module.exports = {
    PetController
}

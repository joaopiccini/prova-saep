const { TutorModel } = require("../models/Tutor");
const { criptografarCPF, descriptografarCPF } = require("../utils/criptografia");

class TutorController {
    // GET /api/tutores
    // GET /api/tutores?busca=termo
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

    // POST /api/tutores
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

    // PUT /api/tutores/:id
    async editar(req, res) {
        try {
            const { id } = req.params;
            const { nome, cpf, telefone, email } = req.body;

            // TODO: validar, criptografar o CPF e chamar o model. Nenhuma linha alterada -> 404.

            return res.status(200).json({}); // TODO: devolver uma confirmação
        } catch (erro) {
            return res.status(500).json({ erro: erro.message });
        }
    }

    // DELETE /api/tutores/:id
    async excluir(req, res) {
        try {
            const { id } = req.params;

            // TODO: chamar o model. Nenhuma linha removida -> 404.

            return res.status(200).json({ mensagem: "Tutor removido com sucesso." });
        } catch (erro) {
            return res.status(500).json({ erro: erro.message });
        }
    }
}

module.exports = {
    TutorController
}

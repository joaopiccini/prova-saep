// ============================================================
// src/routes/tutores.js
// ============================================================
// Este arquivo já está pronto (BASE FORNECIDA).
// O que falta está em TutorController e TutorModel.
// ============================================================

const express = require("express");
const { TutorController } = require("../controllers/TutorController");
const { verificarSessao } = require("../middlewares/autenticacao");

const roteadorTutores = express.Router();

roteadorTutores.get("/api/tutores", verificarSessao, new TutorController().listar)
roteadorTutores.post("/api/tutores", verificarSessao, new TutorController().criar)
roteadorTutores.put("/api/tutores/:id", verificarSessao, new TutorController().editar)
roteadorTutores.delete("/api/tutores/:id", verificarSessao, new TutorController().excluir)

module.exports = {
    roteadorTutores
}

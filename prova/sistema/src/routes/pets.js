// ============================================================
// src/routes/pets.js
// ============================================================
// Este arquivo já está pronto (BASE FORNECIDA).
// O que falta está em PetController e PetModel.
// ============================================================

const express = require("express");
const { PetController } = require("../controllers/PetController");
const { verificarSessao } = require("../middlewares/autenticacao");

const roteadorPets = express.Router();

roteadorPets.get("/api/pets", verificarSessao, new PetController().listar)
roteadorPets.post("/api/pets", verificarSessao, new PetController().criar)

module.exports = {
    roteadorPets
}

// ============================================================
// src/utils/criptografia.js
// ============================================================
// Este arquivo já está pronto (BASE FORNECIDA).
// Aqui estão as funções que vocês vão USAR (não precisam
// reescrever) para atender ao requisito de proteção de dados
// pessoais (LGPD): senha e CPF.
//
// Por que existem DOIS tipos de "criptografia" aqui:
//
// 1) SENHA -> HASH (bcrypt). É uma "via de mão única": não existe
//    como "descriptografar". Para conferir o login, compara-se a
//    senha digitada com o hash salvo (compararSenha()).
//
// 2) CPF -> criptografia SIMÉTRICA (AES-256-CBC). O CPF precisa
//    aparecer de novo na tela (listagens, edição de tutor), então
//    ele tem que ser reversível: criptografa E descriptografa.
//
// Como importar num controller:
//   const { criptografarCPF, descriptografarCPF } = require("../utils/criptografia");
// ============================================================

const bcrypt = require("bcrypt");
const crypto = require("crypto");

// ------------------------------------------------------------
// SENHA (hash irreversível - bcrypt)
// ------------------------------------------------------------

const SALT_ROUNDS = 10;

// Gera o hash de uma senha em texto puro (usar ao CADASTRAR um usuário).
async function hashSenha(senhaTextoPuro) {
    return bcrypt.hash(senhaTextoPuro, SALT_ROUNDS);
}

// Compara a senha digitada com o hash salvo no banco (usar no LOGIN).
// Devolve true se a senha confere.
async function compararSenha(senhaTextoPuro, hashSalvo) {
    return bcrypt.compare(senhaTextoPuro, hashSalvo);
}

// ------------------------------------------------------------
// CPF (criptografia reversível - AES-256-CBC)
// ------------------------------------------------------------

const ALGORITMO = "aes-256-cbc";

// Chave de 32 bytes (256 bits) e IV de 16 bytes (128 bits).
const SENHA_MESTRA = "saep2026-clinica-veterinaria-chave-secreta";
const CHAVE = crypto.scryptSync(SENHA_MESTRA, "salt-saep-cpf", 32);
const IV = Buffer.from("saep2026clinvet1", "utf-8"); // exatamente 16 caracteres

// Criptografa um CPF (ex: "111.222.333-44") antes de salvar no banco.
function criptografarCPF(cpfTextoPuro) {
    const cipher = crypto.createCipheriv(ALGORITMO, CHAVE, IV);
    let criptografado = cipher.update(cpfTextoPuro, "utf-8", "hex");
    criptografado += cipher.final("hex");
    return criptografado;
}

// Descriptografa um CPF que veio do banco, para exibir na tela.
function descriptografarCPF(cpfCriptografado) {
    const decipher = crypto.createDecipheriv(ALGORITMO, CHAVE, IV);
    let textoPuro = decipher.update(cpfCriptografado, "hex", "utf-8");
    textoPuro += decipher.final("utf-8");
    return textoPuro;
}

module.exports = {
    hashSenha,
    compararSenha,
    criptografarCPF,
    descriptografarCPF
}

const bcrypt = require("bcrypt");
const crypto = require("crypto");

const SALT_ROUNDS = 10;

async function hashSenha(senhaTextoPuro) {
    return bcrypt.hash(senhaTextoPuro, SALT_ROUNDS);
}

async function compararSenha(senhaTextoPuro, hashSalvo) {
    return bcrypt.compare(senhaTextoPuro, hashSalvo);
}

const ALGORITMO = "aes-256-cbc";

const SENHA_MESTRA = "saep2026-clinica-veterinaria-chave-secreta";
const CHAVE = crypto.scryptSync(SENHA_MESTRA, "salt-saep-cpf", 32);
const IV = Buffer.from("saep2026clinvet1", "utf-8");

function criptografarCPF(cpfTextoPuro) {
    const cipher = crypto.createCipheriv(ALGORITMO, CHAVE, IV);
    let criptografado = cipher.update(cpfTextoPuro, "utf-8", "hex");
    criptografado += cipher.final("hex");
    return criptografado;
}

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

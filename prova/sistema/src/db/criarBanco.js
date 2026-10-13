// ============================================================
// src/db/criarBanco.js
// ============================================================
// Este arquivo já está pronto (BASE FORNECIDA).
// Recria o arquivo src/db/clinica.db a partir do script
// saep_db.sql (que fica na raiz do projeto, fora de sistema/).
//
// Rode de dentro da pasta sistema/:  npm run criar-banco
// Sempre que alterar o saep_db.sql, rode de novo.
// ============================================================

const fs = require("fs");
const { conectarComBancoDeDados } = require("./conexao");

async function criarBanco() {
    const script = fs.readFileSync("../saep_db.sql", "utf-8");

    const conexao = await conectarComBancoDeDados();

    try {
        await conexao.exec("PRAGMA foreign_keys = OFF");
        await conexao.exec(script);
        console.log("Banco de dados criado em src/db/clinica.db");
    } catch (erro) {
        console.error("Erro ao executar o saep_db.sql:", erro.message);
    } finally {
        await conexao.close();
    }
}

criarBanco();

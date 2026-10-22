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

const { open } = require("sqlite");
const sqlite3 = require("sqlite3");

async function conectarComBancoDeDados() {
    const minhaConexaoComBancoDeDados = await open({
        filename: "./src/db/clinica.db",
        driver: sqlite3.Database
    })

    await minhaConexaoComBancoDeDados.exec("PRAGMA foreign_keys = ON");

    return minhaConexaoComBancoDeDados;
}

module.exports = {
    conectarComBancoDeDados
}

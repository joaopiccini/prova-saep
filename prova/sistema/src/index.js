// ============================================================
// src/index.js
// ============================================================
// QUASE TODO PRONTO (BASE FORNECIDA).
// Além de registrar as rotas, ele configura:
//   - express.json(): faz o req.body funcionar (POST/PUT em JSON)
//   - express.static("public"): entrega as telas HTML/CSS/JS
//   - session(): a sessão do usuário (express-session)
// ============================================================

const express = require("express");
const session = require("express-session");
const { roteadorAuth } = require("./routes/auth");
const { roteadorTutores } = require("./routes/tutores");
const { roteadorPets } = require("./routes/pets");
const { roteadorAgendamentos } = require("./routes/agendamentos");

const servidor = express();

servidor.use(express.json());

servidor.get("/", (req, res) => {
    res.redirect("/login.html");
});

servidor.use(express.static("public"));

servidor.use(session({
    secret: "saep-clinica-veterinaria-secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
        // TODO: defina o tempo de expiração da sessão (maxAge, em
        // milissegundos). Sem ele, a sessão não expira.
    }
}));

servidor.use(roteadorAuth)
servidor.use(roteadorTutores)
servidor.use(roteadorPets)
servidor.use(roteadorAgendamentos)

servidor.listen(3000, () => {
    console.log("Servidor iniciado em http://localhost:3000/")
});

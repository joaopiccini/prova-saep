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
        // TODO: defina o tempo de expiração da sessão (maxAge, em milissegundos).
    }
}));

servidor.use(roteadorAuth)
servidor.use(roteadorTutores)
servidor.use(roteadorPets)
servidor.use(roteadorAgendamentos)

servidor.listen(3000, () => {
    console.log("Servidor iniciado em http://localhost:3000/")
});

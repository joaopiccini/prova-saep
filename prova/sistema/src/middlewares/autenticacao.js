// ============================================================
// src/middlewares/autenticacao.js
// ============================================================
// Este arquivo já está pronto (BASE FORNECIDA).
//
// Roda ANTES da rota e decide se a requisição pode seguir
// (return next()) ou se já volta com erro.
//
// Ele confere se existe um usuário guardado na SESSÃO
// (req.session.usuario - criada no login, ver AuthController).
// Quando o tempo de expiração da sessão (maxAge, em src/index.js)
// acaba, o express-session apaga os dados da sessão e este
// middleware passa a barrar as rotas.
//
// Já está aplicado em todos os arquivos de src/routes/:
//
//   roteadorTutores.get("/api/tutores", verificarSessao, new TutorController().listar)
//
// No front-end (public/js/), sempre que fizer um fetch numa rota
// protegida, trate o 401 assim:
//
//   const resposta = await fetch("/api/tutores");
//   if (resposta.status === 401) {
//       window.location.href = "/login.html";
//       return;
//   }
// ============================================================

function verificarSessao(req, res, next) {
    if (req.session && req.session.usuario) {
        return next();
    }

    return res.status(401).json({ erro: "Sessão expirada ou usuário não autenticado." });
}

module.exports = {
    verificarSessao
}

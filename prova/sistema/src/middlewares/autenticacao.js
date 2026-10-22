function verificarSessao(req, res, next) {
    if (req.session && req.session.usuario) {
        return next();
    }

    return res.status(401).json({ erro: "Sessão expirada ou usuário não autenticado." });
}

module.exports = {
    verificarSessao
}

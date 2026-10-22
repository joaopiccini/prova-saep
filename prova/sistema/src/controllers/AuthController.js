const { UsuarioModel } = require("../models/Usuario");
const { compararSenha } = require("../utils/criptografia");

class AuthController {
    // POST /api/auth/login
    async entrar(req, res) {
        const { login, senha } = req.body;

        if (!login || !senha) {
            return res.status(400).json({ erro: "Informe usuário e senha." });
        }

        try {
            const usuario = await new UsuarioModel().buscarPorLogin(login);

            // TODO: validar a falha de autenticação (usuário não encontrado ou senha incorreta -> status 401). Use compararSenha().

            // TODO: criar a sessão em req.session.usuario, com id, nome e login.

            return res.status(200).json({ mensagem: "Login realizado com sucesso." });
        } catch (erro) {
            return res.status(500).json({ erro: erro.message });
        }
    }

    // GET /api/auth/sessao
    async buscarUsuarioDaSessao(req, res) {
        if (req.session && req.session.usuario) {
            return res.status(200).json({ usuario: req.session.usuario });
        }

        return res.status(401).json({ erro: "Sessão expirada ou usuário não autenticado." });
    }

    // POST /api/auth/logout
    async sair(req, res) {
        // TODO: destruir a sessão (req.session.destroy) e responder com status 200.
    }
}

module.exports = {
    AuthController
}

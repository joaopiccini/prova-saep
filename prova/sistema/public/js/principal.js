const nomeUsuarioEl = document.getElementById("nome-usuario");
const btnSair = document.getElementById("btn-sair");

inicializar();

async function inicializar() {
    await carregarUsuarioLogado();
}

async function carregarUsuarioLogado() {
    try {
        // TODO: buscar o usuário logado em GET /api/auth/sessao
        // (401 -> redirecionar para /login.html) e exibir o nome.

    } catch (erro) {
        console.error("Erro ao verificar sessão:", erro);
    }
}

btnSair.addEventListener("click", async () => {
    // TODO: chamar POST /api/auth/logout e redirecionar para /login.html
});

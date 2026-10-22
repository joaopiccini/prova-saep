const formLogin = document.getElementById("form-login");
const mensagemErro = document.getElementById("mensagem-erro");

formLogin.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    const login = document.getElementById("login").value.trim();
    const senha = document.getElementById("senha").value;

    mensagemErro.classList.add("escondido");

    try {
        const resposta = await fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ login, senha })
        });

        const dados = await resposta.json();

        if (!resposta.ok) {
            mensagemErro.textContent = dados.erro || "Não foi possível entrar.";
            mensagemErro.classList.remove("escondido");
            return;
        }

        window.location.href = "/principal.html";

    } catch (erro) {
        mensagemErro.textContent = "Erro ao conectar com o servidor.";
        mensagemErro.classList.remove("escondido");
        console.error(erro);
    }
});

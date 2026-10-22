const corpoTabela = document.getElementById("corpo-tabela-tutores");
const tabela = document.getElementById("tabela-tutores");
const mensagemTutores = document.getElementById("mensagem-tutores");

const inputBusca = document.getElementById("input-busca");
const btnBuscar = document.getElementById("btn-buscar");

const formTutor = document.getElementById("form-tutor");
const tituloFormulario = document.getElementById("titulo-formulario");
const tutorIdInput = document.getElementById("tutor-id");
const tutorNomeInput = document.getElementById("tutor-nome");
const tutorCpfInput = document.getElementById("tutor-cpf");
const tutorTelefoneInput = document.getElementById("tutor-telefone");
const tutorEmailInput = document.getElementById("tutor-email");
const btnCancelarEdicao = document.getElementById("btn-cancelar-edicao");

inicializar();

async function inicializar() {
    await carregarTutores();
}

async function carregarTutores(termoBusca = "") {
    try {
        // TODO: GET /api/tutores (ou /api/tutores?busca=termo,
        // usando encodeURIComponent). Trate o 401 e chame
        // renderizarTutores() com o resultado.

    } catch (erro) {
        mensagemTutores.textContent = "Erro ao carregar tutores.";
        console.error(erro);
    }
}

function renderizarTutores(tutores) {
    // TODO: lista vazia -> mensagem "Nenhum tutor encontrado." e
    // tabela escondida (classe "escondido").
    // Caso contrário: uma <tr> por tutor (nome, cpf, telefone,
    // email) com botões "Editar" e "Excluir" (data-id), e os
    // addEventListener desses botões.
}

btnBuscar.addEventListener("click", () => {
    // TODO: carregarTutores com o termo da busca.
});

formTutor.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    const tutor = {
        nome: tutorNomeInput.value.trim(),
        cpf: tutorCpfInput.value.trim(),
        telefone: tutorTelefoneInput.value.trim(),
        email: tutorEmailInput.value.trim()
    };

    const id = tutorIdInput.value;

    try {
        // TODO: id preenchido -> PUT /api/tutores/{id}
        //       id vazio      -> POST /api/tutores
        // Se der certo: limparFormulario() e carregarTutores().
        // Se der errado: exibir o erro devolvido pela API.

    } catch (erro) {
        alert("Erro ao salvar tutor.");
        console.error(erro);
    }
});

btnCancelarEdicao.addEventListener("click", limparFormulario);

function limparFormulario() {
    formTutor.reset();
    tutorIdInput.value = "";
    tituloFormulario.textContent = "Novo Tutor";
    btnCancelarEdicao.classList.add("escondido");
}

function preencherFormularioParaEdicao(tutor) {
    // TODO: preencher os campos do formulário (inclusive
    // tutorIdInput), trocar o tituloFormulario para "Editar Tutor"
    // e mostrar o btnCancelarEdicao.
}

async function excluirTutor(id) {
    if (!confirm("Deseja realmente excluir este tutor?")) return;

    try {
        // TODO: DELETE /api/tutores/{id}. Se der certo,
        // carregarTutores(); se não, exibir o erro da API.

    } catch (erro) {
        alert("Erro ao excluir tutor.");
        console.error(erro);
    }
}

const corpoTabela = document.getElementById("corpo-tabela-agendamentos");
const tabela = document.getElementById("tabela-agendamentos");
const mensagemAgendamentos = document.getElementById("mensagem-agendamentos");

inicializar();

async function inicializar() {
    await carregarAgendamentos();
}

function formatarData(dataAAAAMMDD) {
    const [ano, mes, dia] = dataAAAAMMDD.split("-");
    return `${dia}/${mes}/${ano}`;
}

async function carregarAgendamentos() {
    try {
        // TODO: GET /api/agendamentos, tratar o 401 e chamar
        // renderizarAgendamentos() com o resultado.

    } catch (erro) {
        mensagemAgendamentos.textContent = "Erro ao carregar agendamentos.";
        console.error(erro);
    }
}

function renderizarAgendamentos(agendamentos) {
    // TODO: lista vazia -> mensagem visível e tabela escondida.
    // Caso contrário: uma <tr> por agendamento com todas as
    // colunas da tabela (ver agendamentos.html). Na última coluna:
    //   <input type="date" value="${agendamento.data_agendamento}">
    //   <button data-id="${agendamento.id}">Salvar</button>
    // e o addEventListener de cada botão "Salvar".
}

async function atualizarDataAgendamento(id, novaData) {
    try {
        // TODO: PUT /api/agendamentos/{id} com { data_agendamento }.
        // Se der certo, carregarAgendamentos() de novo (a ordem da
        // lista pode mudar).

    } catch (erro) {
        alert("Erro ao atualizar a data do agendamento.");
        console.error(erro);
    }
}

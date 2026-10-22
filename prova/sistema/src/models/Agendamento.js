const { conectarComBancoDeDados } = require("../db/conexao");

class AgendamentoModel {
    async buscarTodos() {
        const conexaoComBanco = await conectarComBancoDeDados();

        // TODO: SELECT com JOIN (agendamentos -> pets -> tutores), ordenado por data. Campos: id, data_agendamento, horario, motivo, nome_pet, especie, raca, nome_tutor, cpf, telefone, email.

        return [];
    }

    async atualizarData(id, data_agendamento) {
        const conexaoComBanco = await conectarComBancoDeDados();

        // TODO: UPDATE e devolver as linhas alteradas (resultado.changes)
    }
}

module.exports = {
    AgendamentoModel
}

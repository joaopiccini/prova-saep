const formPet = document.getElementById("form-pet");
const petNomeInput = document.getElementById("pet-nome");
const petEspecieSelect = document.getElementById("pet-especie");
const petRacaInput = document.getElementById("pet-raca");
const selectTutor = document.getElementById("pet-tutor");
const mensagemPet = document.getElementById("mensagem-pet");

const corpoTabela = document.getElementById("corpo-tabela-pets");
const tabela = document.getElementById("tabela-pets");
const mensagemPets = document.getElementById("mensagem-pets");

inicializar();

async function inicializar() {
    await carregarTutores();
    await carregarPets();
}

async function carregarTutores() {
    try {
        const resposta = await fetch("/api/tutores");

        if (resposta.status === 401) {
            window.location.href = "/login.html";
            return;
        }

        const tutores = await resposta.json();

        selectTutor.innerHTML = '<option value="">Selecione um tutor...</option>';
        tutores.forEach((tutor) => {
            const option = document.createElement("option");
            option.value = tutor.id;
            option.textContent = tutor.nome;
            selectTutor.appendChild(option);
        });

    } catch (erro) {
        console.error("Erro ao carregar tutores:", erro);
        selectTutor.innerHTML = '<option value="">Erro ao carregar tutores</option>';
    }
}

async function carregarPets() {
    try {
        const resposta = await fetch("/api/pets");

        if (resposta.status === 401) {
            window.location.href = "/login.html";
            return;
        }

        const pets = await resposta.json();

        if (!resposta.ok || pets.length === 0) {
            mensagemPets.textContent = pets.erro || "Nenhum pet cadastrado.";
            mensagemPets.classList.remove("escondido");
            tabela.classList.add("escondido");
            return;
        }

        mensagemPets.classList.add("escondido");
        tabela.classList.remove("escondido");
        corpoTabela.innerHTML = "";

        pets.forEach((pet) => {
            const linha = document.createElement("tr");
            linha.innerHTML = `
                <td>${pet.nome}</td>
                <td>${pet.especie}</td>
                <td>${pet.raca || "-"}</td>
                <td>${pet.nome_tutor}</td>
            `;
            corpoTabela.appendChild(linha);
        });

    } catch (erro) {
        mensagemPets.textContent = "Erro ao carregar pets.";
        console.error(erro);
    }
}

formPet.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    const pet = {
        nome: petNomeInput.value.trim(),
        especie: petEspecieSelect.value,
        raca: petRacaInput.value.trim(),
        tutor_id: selectTutor.value
    };

    try {
        // TODO: POST /api/pets enviando "pet" como JSON.
        // Mostre o resultado em mensagemPet (classes "texto-sucesso"
        // ou "texto-erro"). Se der certo: formPet.reset() e
        // carregarPets().

    } catch (erro) {
        mensagemPet.textContent = "Erro ao cadastrar pet.";
        mensagemPet.className = "texto-erro";
        console.error(erro);
    }
});

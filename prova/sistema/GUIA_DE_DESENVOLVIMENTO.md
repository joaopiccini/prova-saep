# Guia de Desenvolvimento

O sistema segue o padrão **rota → controller → model**:

- **routes/** (prontos): ligam cada URL a um método do controller.
  Já passam pelo middleware `verificarSessao`.
- **controllers/**: recebem `req`, validam, criptografam o CPF,
  chamam o model e respondem com `res.status(...).json(...)`.
- **models/**: só o SQL, usando a conexão de `src/db/conexao.js`
  (`all`, `get`, `run`, com `?` no lugar dos valores).
- **public/js/**: o front-end, que chama a API com `fetch`.

Os pontos a completar estão marcados com `TODO` nos arquivos.

## Ordem recomendada

1. Banco de dados: `saep_db.sql` (tabelas `pets` e `agendamentos`)
2. Login: `src/index.js` e `src/controllers/AuthController.js`
3. Principal: `public/principal.html` e `public/js/principal.js`
4. Tutor: `Tutor.js`, `TutorController.js`, `tutores.js`
5. Pet: `Pet.js`, `PetController.js`, `pets.js`
6. Agendamento: `Agendamento.js`, `AgendamentoController.js`,
   `agendamentos.js`

## Rotas da API

| Método | URL | Uso |
|---|---|---|
| POST | `/api/auth/login` | autenticar (`{ login, senha }`) |
| GET | `/api/auth/sessao` | usuário logado |
| POST | `/api/auth/logout` | sair |
| GET | `/api/tutores` e `/api/tutores?busca=termo` | listar / buscar tutores |
| POST | `/api/tutores` | inserir tutor |
| PUT | `/api/tutores/:id` | editar tutor |
| DELETE | `/api/tutores/:id` | excluir tutor |
| GET | `/api/pets` | listar pets (com nome do tutor) |
| POST | `/api/pets` | inserir pet |
| GET | `/api/agendamentos` | listar agendamentos |
| PUT | `/api/agendamentos/:id` | atualizar data (`{ data_agendamento }`) |

## Pontos de atenção

- Depois de alterar o `saep_db.sql`, rode `npm run criar-banco`. Se
  houver erro de SQL, ele aparece no terminal.
- CPF: sempre criptografar antes de salvar e descriptografar antes
  de exibir (`src/utils/criptografia.js`) - inclusive na listagem
  de agendamentos.
- Datas são texto no formato `AAAA-MM-DD` (o mesmo do
  `<input type="date">`), então ordenar por elas funciona.
- `npm run rodar` usa nodemon: o servidor reinicia a cada arquivo
  salvo e, como a sessão fica na memória, é preciso logar de novo.
- Para testar a API sem a tela (Postman/Insomnia/Thunder Client),
  faça antes o `POST /api/auth/login` na mesma ferramenta.

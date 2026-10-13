# SAEP - Sistema de Gestão - Clínica Veterinária

Sistema de cadastro e gerenciamento de tutores, pets e agendamentos,
com autenticação de usuários e controle seguro de dados.

## Tecnologias

- Front-end: HTML, CSS e JavaScript puros (sem framework)
- Back-end: Node.js + Express 5 (CommonJS: `require` / `module.exports`)
- Banco de dados: SQLite (pacotes `sqlite` + `sqlite3`)
- Sessão: `express-session` | Senha: `bcrypt` | CPF: `crypto` (nativo do Node)

## Estrutura

```
sistema/
├── src/
│   ├── index.js                 # servidor (falta o tempo de expiração da sessão)
│   ├── db/
│   │   ├── conexao.js           # conectarComBancoDeDados() (pronto)
│   │   ├── criarBanco.js        # gera o clinica.db a partir do saep_db.sql (pronto)
│   │   └── clinica.db           # arquivo do banco SQLite
│   ├── routes/                  # URL + método HTTP -> controller (prontos)
│   ├── controllers/             # validação, criptografia, resposta JSON (VOCÊ COMPLETA)
│   ├── models/                  # SQL (VOCÊ COMPLETA)
│   ├── middlewares/
│   │   └── autenticacao.js      # verificarSessao (pronto)
│   └── utils/
│       └── criptografia.js      # hash de senha e criptografia de CPF (pronto)
└── public/                      # telas HTML/CSS/JS (VOCÊ COMPLETA)
```

## Como rodar

Dentro da pasta `sistema/`:

1. `npm install` (se a pasta `node_modules` ainda não existir)
2. `npm run criar-banco` (gera `src/db/clinica.db` a partir do
   `saep_db.sql` da raiz do projeto - rode de novo sempre que
   alterar o script)
3. `npm run rodar`
4. Acesse http://localhost:3000/

Usuários de teste:

| Usuário | Senha  |
|---------|--------|
| admin   | 123456 |
| camila  | 123456 |
| rafael  | 123456 |

Para conferir o banco, use a extensão **SQLite Viewer** (ou similar)
no VS Code e abra o arquivo `src/db/clinica.db`.

Veja **GUIA_DE_DESENVOLVIMENTO.md** para o roteiro do que falta.

# SAEP — Técnico em Desenvolvimento de Sistemas
## Avaliação Prática de Desempenho dos Estudantes — Caderno de Prova

Tempo total: 3 horas (180 minutos), após 30 minutos de ambientação.

---

## ORIENTAÇÕES GERAIS

- Desligue e guarde o seu telefone celular.
- Não é permitido o uso de internet durante a realização da prova.
- Antes de iniciar a prova, leia atentamente as instruções contidas
  neste caderno e esclareça as dúvidas com o avaliador, caso
  necessário. Para isso você terá os 30 minutos iniciais de
  ambientação para ler a prova na íntegra e reconhecer o posto de
  trabalho.
- Aguarde o avaliador sinalizar o fim da ambientação ou informe a ele
  que você quer iniciar a prova. A partir desse momento contará o
  tempo de 03 horas para que você realize as atividades.
- Ao final da avaliação, este caderno e demais itens disponibilizados
  devem ser devolvidos ao avaliador.
- Para registrar o final da sua prova, você deverá assinar o canhoto
  da prova junto com o seu avaliador.
- O avaliador está à disposição para dirimir qualquer dúvida, desde
  que não seja referente à resolução da prova.

Dê o seu melhor!

---

## CONTEXTUALIZAÇÃO

Uma clínica veterinária enfrenta dificuldades em sua rotina de
atendimentos devido à ausência de um sistema informatizado. O controle
manual dos agendamentos e dos registros de tutores e pets tem
ocasionado perda de consultas, duplicidade de informações e falhas no
armazenamento de dados. Além disso, a ausência de mecanismos adequados
de proteção dos dados pessoais dos tutores, como o CPF, pode
comprometer a segurança dessas informações e resultar no
descumprimento das disposições da Lei Geral de Proteção de Dados
(LGPD).

Para resolver essa situação, o gestor da clínica contratou sua equipe
para desenvolver uma solução de software que organize o processo de
agendamento e gestão de informações. Durante a reunião inicial, o
gestor destacou a importância da autenticação dos usuários com tempo
de expiração, da proteção dos dados pessoais armazenados e da
documentação técnica do sistema, incluindo requisitos funcionais e
geração do diagrama entidade relacionamento, a fim de garantir a
manutenção futura do sistema.

Após a reunião com o gestor da clínica, foram definidas algumas regras
de negócio:

- No script do banco de dados devem existir pelo menos três registros
  para todas as tabelas criadas, respeitando os tipos de dados, chaves
  primárias e estrangeiras.
- Na funcionalidade de login, fazer validação em caso de falha na
  autenticação.
- O CPF dos tutores deve ser armazenado de forma criptografada no
  banco de dados.
- A funcionalidade principal do sistema deve exibir: nome do usuário
  logado e uma forma de acessar os demais recursos, assim como uma
  maneira de sair do sistema.
- A funcionalidade de tutor deve conter: um recurso de busca para que
  o usuário possa inserir o termo, o qual, após inserção e
  confirmação, deverá exibir para o usuário a atualização da listagem
  dos valores da tabela com os registros que correspondem. A
  funcionalidade também deve permitir editar os dados de um tutor já
  cadastrado, salvando a alteração no banco de dados.
- A funcionalidade de agendamento deve exibir: listagem dos
  agendamentos cadastrados ordenada por dia de agendamento, trazendo
  todos os dados do tutor e do pet. A funcionalidade também deve
  permitir atualizar a data de um agendamento já cadastrado, salvando
  a alteração no banco de dados.
- Ao cadastrar um novo pet, o usuário deve associá-lo a um tutor.

---

## DESAFIO

Você, como desenvolvedor, deverá criar um sistema que permita o
cadastro e gerenciamento de tutores, pets e agendamentos, com
autenticação de usuários e controle seguro de dados.

---

## AMBIENTE DE DESENVOLVIMENTO

O projeto base está na pasta `sistema/` e já vem parcialmente
desenvolvido. Utilize obrigatoriamente as mesmas tecnologias e o mesmo
padrão de organização do código fornecido:

- Banco de dados: SQLite (arquivo `sistema/src/db/clinica.db`, gerado
  a partir do script `saep_db.sql` com `npm run criar-banco`)
- Back-end: Node.js + Express, organizado em rotas → controllers →
  models (`sistema/src/`)
- Front-end: HTML, CSS e JavaScript puros (`sistema/public/`), sem
  frameworks de interface

Consulte `sistema/README.md` para executar o projeto e
`sistema/GUIA_DE_DESENVOLVIMENTO.md` para o roteiro do que falta
desenvolver.

### Estrutura do banco de dados

O script `saep_db.sql` já traz as tabelas `usuarios` e `tutores`
criadas e populadas. Você deve completar o script criando e populando
as tabelas abaixo, com os nomes de tabela e coluna exatamente como
descritos (o código do sistema depende deles):

**Tabela `pets`** — cada pet pertence a um único tutor.

| Coluna | Tipo | Regra |
|---|---|---|
| id | INTEGER | chave primária, autoincremento |
| nome | TEXT | obrigatório |
| especie | TEXT | obrigatório (ex: Cão, Gato, Ave) |
| raca | TEXT | opcional |
| tutor_id | INTEGER | obrigatório, chave estrangeira para `tutores(id)` |

**Tabela `agendamentos`** — cada agendamento é de um único pet.

| Coluna | Tipo | Regra |
|---|---|---|
| id | INTEGER | chave primária, autoincremento |
| pet_id | INTEGER | obrigatório, chave estrangeira para `pets(id)` |
| data_agendamento | TEXT | obrigatório, formato `AAAA-MM-DD` |
| horario | TEXT | obrigatório, formato `HH:MM` |
| motivo | TEXT | opcional (ex: Vacinação, Consulta de rotina) |

---

## RESULTADOS E ENTREGAS ESPERADAS

Crie um diretório compactado na área de trabalho (formato .zip, .rar
ou .7zip) nomeado com seu nome completo, contendo os seguintes
arquivos (não inclua a pasta `sistema/node_modules`):

| Nº | Entrega | Tipo de Entrega | Tempo estimado (min) |
|---|---|---|---|
| 1 | Documentação de software (Anexo 1) | documentacao.pdf | 15 |
| 2 | Diagrama entidade relacionamento | der.png ou der.pdf | 5 |
| 3 | Script de criação e população do banco de dados | saep_db.sql | 20 |
| 4 | Código-fonte da funcionalidade do login | diretório `sistema/` | 20 |
| 5 | Código-fonte da funcionalidade principal do sistema | diretório `sistema/` | 20 |
| 6 | Código-fonte da funcionalidade do gerenciamento Tutor | diretório `sistema/` | 30 |
| 7 | Código-fonte da funcionalidade do gerenciamento Pet | diretório `sistema/` | 30 |
| 8 | Código-fonte da funcionalidade do gerenciamento de Agendamentos | diretório `sistema/` | 40 |

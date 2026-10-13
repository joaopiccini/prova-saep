-- ============================================================
-- SAEP - Técnico em Desenvolvimento de Sistemas
-- Sistema de Gestão - Clínica Veterinária
-- Script de criação e população do banco de dados (SQLite)
-- ============================================================
-- PARCIALMENTE PRONTO. As tabelas "usuarios" e "tutores" já
-- estão criadas e populadas. Vocês completam as tabelas "pets"
-- e "agendamentos" (estrutura no Caderno de Prova).
--
-- Para gerar o arquivo do banco (sistema/src/db/clinica.db),
-- rode dentro da pasta sistema/:  npm run criar-banco
-- ============================================================

DROP TABLE IF EXISTS agendamentos;
DROP TABLE IF EXISTS pets;
DROP TABLE IF EXISTS tutores;
DROP TABLE IF EXISTS usuarios;

-- ============================================================
-- TABELA: usuarios (funcionários da clínica que fazem login)
-- ============================================================
CREATE TABLE usuarios (
    id     INTEGER PRIMARY KEY AUTOINCREMENT,
    nome   TEXT NOT NULL,
    login  TEXT UNIQUE NOT NULL,
    senha  TEXT NOT NULL -- hash (bcrypt)
);

-- ============================================================
-- TABELA: tutores
-- ============================================================
CREATE TABLE tutores (
    id        INTEGER PRIMARY KEY AUTOINCREMENT,
    nome      TEXT NOT NULL,
    cpf       TEXT NOT NULL, -- criptografado (reversível)
    telefone  TEXT,
    email     TEXT
);

-- ============================================================
-- TABELA: pets (cada pet pertence a um único tutor)
-- ============================================================
-- TODO: criar a tabela pets


-- ============================================================
-- TABELA: agendamentos (cada agendamento é de um pet)
-- ============================================================
-- TODO: criar a tabela agendamentos


-- ============================================================
-- POPULAÇÃO - USUARIOS
-- Senha de todos os usuários abaixo: 123456 (hash bcrypt)
-- ============================================================
INSERT INTO usuarios (nome, login, senha) VALUES
('Administrador',     'admin',  '$2b$10$mGmdZTMfqtZ0LZDhi7S/f.AR8X1Bpemnyfe0kOjQaCKmrk6KQHFKu'),
('Dra. Camila Rocha', 'camila', '$2b$10$mGmdZTMfqtZ0LZDhi7S/f.AR8X1Bpemnyfe0kOjQaCKmrk6KQHFKu'),
('Rafael Souza',      'rafael', '$2b$10$mGmdZTMfqtZ0LZDhi7S/f.AR8X1Bpemnyfe0kOjQaCKmrk6KQHFKu');

-- ============================================================
-- POPULAÇÃO - TUTORES
-- CPFs já CRIPTOGRAFADOS com src/utils/criptografia.js.
-- Originais:
--   Ana Beatriz Costa     -> 123.456.789-01
--   Carlos Eduardo Mendes -> 234.567.890-12
--   Juliana Martins       -> 345.678.901-23
--   Pedro Henrique Alves  -> 456.789.012-34
-- ============================================================
INSERT INTO tutores (nome, cpf, telefone, email) VALUES
('Ana Beatriz Costa',     '0c590e8396aad7eb14e36467a17ffb62', '(49) 99901-1001', 'ana.costa@email.com'),
('Carlos Eduardo Mendes', 'fe97cc0b3d712db3eade470d4bf01422', '(49) 99902-2002', 'carlos.mendes@email.com'),
('Juliana Martins',       '437cf3310292ddd041255dc5762bdc04', '(49) 99903-3003', 'juliana.martins@email.com'),
('Pedro Henrique Alves',  '38c02d9a4763fb18ef3c3680155c9d95', '(49) 99904-4004', 'pedro.alves@email.com');

-- ============================================================
-- POPULAÇÃO - PETS
-- ============================================================
-- TODO: inserir pelo menos 3 pets


-- ============================================================
-- POPULAÇÃO - AGENDAMENTOS
-- ============================================================
-- TODO: inserir pelo menos 3 agendamentos

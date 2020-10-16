// Neste arquivo registramos todos os endpoints/rotas de nossa aplicação.

const express = require("express");
const EnderecoController = require("./app/controllers/EnderecoController");
const UsuarioController = require("./app/controllers/UsuarioController");
const PopulacaoController = require("./app/controllers/PopulacaoController");
const EstadoCivilController = require("./app/controllers/EstadoCivilController");
const RegistroController = require("./app/controllers/RegistroController");
const SessionsController = require("./app/controllers/SessionController");
const authMiddleware = require("./app/middlewares/auth");

const routes = express.Router();

const InfoController = require("./app/controllers/InfoController");

routes.get("/", InfoController.index);

// Rotas de criação de USUÁRIO e SESSÃO
routes.post("/usuarios", UsuarioController.store);
routes.post("/sessions", SessionsController.store);

// Todas as rotas que vem depois desse middleware entram na verificação de autorização.
routes.use(authMiddleware);

// Rotas referentes a ENDEREÇOS
routes.post("/enderecos", EnderecoController.store);
routes.get("/enderecos/:id", EnderecoController.show);
routes.put("/enderecos/:id", EnderecoController.update);
routes.get("/enderecos", EnderecoController.index);

// Rotas referentes a USUÁRIOS
routes.get("/usuarios/:id", UsuarioController.show);
routes.get("/usuarios", UsuarioController.index);

//Rotas referentes a POPULAÇÕES
routes.post("/populacoes", PopulacaoController.store);
routes.get("/populacoes/:id", PopulacaoController.show);
routes.get("/populacoes", PopulacaoController.index);

// Rotas referentes a ESTADO CIVIL
routes.post("/estados-civis", EstadoCivilController.store);
routes.get("/estados-civis", EstadoCivilController.index);
routes.put("/estados-civis/:id", EstadoCivilController.update);

// Rotas referentes a REGISTROS
routes.post("/registros", RegistroController.store);
routes.get("/registros", RegistroController.index);
routes.get("/registros/:id", RegistroController.show);

module.exports = routes;

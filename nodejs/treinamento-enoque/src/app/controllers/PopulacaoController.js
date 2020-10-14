const Populacao = require("../models/Populacao");
const Endereco = require("../models/Endereco");
const EstadoCivil = require("../models/EstadoCivil");

class PopulacaoController {
  async store(req, res) {
    const { nome, rg, cpf, endereco_id, estado_civil_id, email } = req.body;

    const usuario = await Populacao.create({
      nome,
      rg,
      cpf,
      endereco_id,
      estado_civil_id,
      email,
    });
    return res.status(200).json(usuario);
  }

  async show(req, res) {
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id, {
      attributes: ["nome", "email", "rg", "endereco_id", "estado_civil_id"],
      include: [
        {
          model: Endereco,
          as: "endereco",
          attributes: ["nome", "numero", "bairro"],
        },
        {
          model: EstadoCivil,
          as: "estado_civil",
          attributes: ["nome"],
        },
      ],
    });

    if (!usuario) {
      return res.status(404).json({
        error: "Usuários não encontrado",
      });
    }

    return res.status(200).json(usuario);
  }

  async index(req, res) {
    const populacoes = await Populacao.findAll({
      attributes: ["nome", "email", "rg", "endereco_id", "estado_civil_id"],
      include: [
        {
          model: Endereco,
          as: "endereco",
          attributes: ["nome", "numero", "bairro"],
        },
        {
          model: EstadoCivil,
          as: "estado_civil",
          attributes: ["nome"],
        },
      ],
    });

    if (!populacoes) {
      return res.status(404).json({
        error: "Populações não encontradas",
      });
    }

    return res.status(200).json(populacoes);
  }
}

module.exports = new PopulacaoController();

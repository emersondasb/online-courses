const Populacao = require("../models/Populacao");
const Endereco = require("../models/Endereco");
const EstadoCivil = require("../models/EstadoCivil");
const Yup = require("yup");

class PopulacaoController {
  async store(req, res) {
    // Realiza validação no cadastro de dados.
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      rg: Yup.string().required(),
      cpf: Yup.string().required().min(11).max(11),
      endereco_id: Yup.number().required(),
      estado_civil_id: Yup.number().required(),
      email: Yup.string().email().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ erro: "Erro de validação" });
    }

    const { nome, rg, cpf, endereco_id, estado_civil_id, email } = req.body;

    try {
      const usuario = await Populacao.create({
        nome,
        rg,
        cpf,
        endereco_id,
        estado_civil_id,
        email,
      });
      return res.status(200).json(usuario);
    } catch (err) {
      console.log(err);
    }
  }

  async show(req, res) {
    const { id } = req.params;
    const populacao = await Populacao.findByPk(id, {
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

    if (!populacao) {
      return res.status(404).json({
        error: "População não encontrada",
      });
    }

    return res.status(200).json(populacao);
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

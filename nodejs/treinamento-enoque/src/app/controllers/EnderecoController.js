const Endereco = require("../models/Endereco");
const Yup = require("yup");

class EnderecoController {
  async store(req, res) {
    // Realiza validação no cadastro de dados.
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      numero: Yup.string().required(),
      bairro: Yup.string().required(),
      cidade: Yup.string().required(),
      uf: Yup.string().required(),
      cep: Yup.string().required().min(8).max(8),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ erro: "Erro de validação" });
    }

    const { nome, numero, bairro, cidade, uf, cep } = req.body;
    const endereco = await Endereco.create({
      nome,
      numero,
      bairro,
      cidade,
      uf,
      cep,
    });
    return res.status(200).json(endereco);
  }

  async index(req, res) {
    const enderecos = await Endereco.findAll({
      attributes: ["id", "nome", "numero", "bairro", "cidade", "uf", "cep"],
    });
    return res.status(200).json(enderecos);
  }

  async show(req, res) {
    const { id } = req.params;
    const endereco = await Endereco.findByPk(id);
    if (!endereco) {
      return res.status(404).json({
        error: "Endereço não existe",
      });
    }
    return res.status(200).json(endereco);
  }

  async update(req, res) {
    const { id } = req.params;

    const { nome, numero, bairro, cidade, uf, cep } = req.body;

    const endereco = await Endereco.findByPk(id);

    if (!endereco) {
      return res.status(404).json({
        error: "Endereço não existe",
      });
    }
    const upEndereco = await endereco.update({
      nome,
      numero,
      bairro,
      cidade,
      uf,
      cep,
    });
    return res.status(200).json(upEndereco);
  }
}

module.exports = new EnderecoController();

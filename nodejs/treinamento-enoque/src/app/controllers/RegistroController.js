const Registro = require("../models/Registro");
const Populacao = require("../models/Populacao");
const Usuario = require("../models/Usuario");
const Yup = require("yup");

class RegistroController {
  async store(req, res) {
    // Realiza validação no cadastro de dados.
    const schema = Yup.object().shape({
      registro: Yup.string().required(),
      usuario_id: Yup.number().required(),
      populacao_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ erro: "Erro de validação" });
    }

    const { registro, usuario_id, populacao_id } = req.body;

    try {
      const registroStr = await Registro.create({
        registro,
        usuario_id,
        populacao_id,
      });
      return res.status(200).json(registroStr);
    } catch (err) {
      console.log(err);
    }
  }

  async show(req, res) {
    const { id } = req.params;
    const registro = await Registro.findByPk(id, {
      attributes: ["registro"],
    });

    if (!registro) {
      return res.status(404).json({
        error: "Registro não encontrado",
      });
    }

    return res.status(200).json(registro);
  }

  async index(req, res) {
    try {
      const registros = await Registro.findAll({
        attributes: ["id", "registro", "populacao_id", "usuario_id"],
      });

      if (!registros) {
        return res.status(404).json({
          error: "Registros não encontrados",
        });
      }

      return res.status(200).json(registros);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new RegistroController();

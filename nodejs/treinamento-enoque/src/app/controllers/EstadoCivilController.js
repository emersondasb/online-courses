const EstadoCivil = require("../models/EstadoCivil");

class EstadoCivilController {
  async store(req, res) {
    const { nome } = req.body;
    const estadoCivil = await EstadoCivil.create({ nome });
    return res.status(200).json(estadoCivil);
  }

  async index(req, res) {
    const estadosCivis = await EstadoCivil.findAll();
    return res.status(200).json(estadosCivis);
  }

  async update(req, res) {
    const { id } = req.params;

    const { nome } = req.body;

    const estadoCivil = await EstadoCivil.findByPk(id);

    if (!estadoCivil) {
      return res.status(404).json({
        error: "Estado civil não encontrado",
      });
    }
    const estadoCivilUp = await estadoCivil.update({ nome });
    return res.status(200).json(estadoCivilUp);
  }
}

module.exports = new EstadoCivilController();

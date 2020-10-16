const jwt = require("jsonwebtoken");
const authCongig = require("../../config/auth");
const User = require("../models/Usuario");
const Yup = require("yup");

class SessionController {
  async store(req, res) {
    // Realiza validação no cadastro de dados.
    const schema = Yup.object().shape({
      senha: Yup.string().required(),
      email: Yup.string().email().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ erro: "Erro de validação" });
    }

    const { email, senha } = req.body;
    const usuario = await User.findOne({
      where: { email },
    });

    if (!usuario || !(await usuario.checarSenha(senha))) {
      return res.status(400).json({ error: "Usuário ou senha inválidos" });
    }

    const { id, nome, admin } = usuario;

    return res.status(200).json({
      usuario: {
        id,
        nome,
        admin,
      },
      token: jwt.sign({ id }, authCongig.secret, {
        expiresIn: authCongig.expiresIn,
      }),
    });
  }
}

module.exports = new SessionController();

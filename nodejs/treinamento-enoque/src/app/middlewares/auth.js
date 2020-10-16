const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const authConfig = require("../../config/auth");

// Realiza a validação do token permitindo acesso a rotas restritas caso condição seja atendida.

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ erro: "Token não informado" });
  }

  const [, token] = authHeader.split(" ");
  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    req.userId = decoded.id;
    return next();
  } catch (err) {
    return res.status(401).json({ erro: "Token inválido" });
  }
};

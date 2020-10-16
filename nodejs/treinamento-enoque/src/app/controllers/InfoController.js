// Controller da rota raiz do sistema.

class InfoController {
  index(req, res) {
    return res.json({ sistema: "Treinamento easyCAJUP", version: "1.0.0" });
  }
}

module.exports = new InfoController();

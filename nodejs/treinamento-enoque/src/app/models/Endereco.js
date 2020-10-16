// Models são os objetos usados para registrar nossos dados no banco.

const { Sequelize, Model } = require("sequelize");

class Endereco extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        numero: Sequelize.STRING,
        bairro: Sequelize.STRING,
        cidade: Sequelize.STRING,
        uf: Sequelize.STRING,
        cep: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: "enderecos",
      }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Usuario, {
      as: "usuarios",
      foreignKey: "endereco_id",
    });
    this.hasMany(models.Populacao, {
      as: "populacoes",
      foreignKey: "endereco_id",
    });
  }
}

module.exports = Endereco;

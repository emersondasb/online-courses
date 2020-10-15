const { Sequelize, Model } = require("sequelize");

class Registro extends Model {
  static init(sequelize) {
    super.init(
      {
        registro: Sequelize.STRING,
        usuario_id: Sequelize.INTEGER,
        populacao_id: Sequelize.INTEGER,
      },
      {
        sequelize,
        tableName: "registros",
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Usuario, {
      as: "usuarios",
      foreignKey: "usuario_id",
    });
    this.belongsTo(models.Populacao, {
      as: "populacao",
      foreignKey: "populacao_id",
    });
  }
}

module.exports = Registro;

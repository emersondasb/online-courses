const { Sequelize, Model } = require("sequelize");

class Populacao extends Model {
  static init(sequelize) {
    super.init(
      {
        registro: Sequelize.TEXT,
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
    this.hasMany(models.Usuario, {
      as: "usuarios",
      foreignKey: "registro_id",
    });
  }
  static associate(models) {
    this.hasMany(models.Populacao, {
      as: "populacoes",
      foreignKey: "registro_id",
    });
  }
}

module.exports = Populacao;

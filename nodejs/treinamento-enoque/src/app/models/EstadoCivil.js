const { Sequelize, Model } = require("sequelize");

class EstadoCivil extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: "estados_civis",
      }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Populacao, {
      as: "populacoes",
      foreignKey: "estado_civil_id",
    });
  }
}

module.exports = EstadoCivil;

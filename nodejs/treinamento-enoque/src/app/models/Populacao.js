const { Sequelize, Model } = require("sequelize");

class Populacao extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        endereco_id: Sequelize.INTEGER,
        estado_civil_id: Sequelize.INTEGER,
        rg: Sequelize.STRING,
        cpf: Sequelize.STRING,
        email: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: "populacao",
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.EstadoCivil, {
      as: "estado_civil",
      foreignKey: "estado_civil_id",
    });
    this.belongsTo(models.Endereco, {
      as: "endereco",
      foreignKey: "endereco_id",
    });
    this.hasMany(models.Registro, {
      as: "registro",
      foreignKey: "populacao_id",
    });
  }
}

module.exports = Populacao;

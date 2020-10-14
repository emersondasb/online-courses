"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface
      .createTable("registros", {
        usuario_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "usuarios",
            key: "id",
          },
        },
        populacao_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "populacao",
            key: "id",
          },
        },
        registro: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        created_at: { type: Sequelize.DATE, allowNull: false },
        updated_at: { type: Sequelize.DATE, allowNull: false },
      })
      .then(() => {
        return queryInterface.sequelize.query(
          'ALTER TABLE "registros" ADD CONSTRAINT "id" PRIMARY KEY ("usuario_id", "populacao_id")'
        );
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("registros");
  },
};

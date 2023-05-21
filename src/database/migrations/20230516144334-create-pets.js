'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      birthdate: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      genre: {
        type: Sequelize.STRING
      },
      specie: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      race: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.FLOAT
      },
      height: {
        type: Sequelize.FLOAT
      },
      userId: {
        allowNull: false,
        field: 'user_id',
        type: Sequelize.INTEGER,
      },
      petimgUrl: {
        field: 'petimg_url',
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pets');
  }
};
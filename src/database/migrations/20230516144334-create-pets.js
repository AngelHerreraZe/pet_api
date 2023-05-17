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
        type: Sequelize.STRING(30),
        allowNull: false
      },
      birthdate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      genre: {
        type: Sequelize.ENUM("MALE","FEMALE")
      },
      specie: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      race: {
        type: Sequelize.STRING(20)
      },
      weight: {
        type: Sequelize.FLOAT
      },
      height: {
        type: Sequelize.FLOAT
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'user_id'
      },
      petimgUrl: {
        type: Sequelize.STRING,
        field: 'petimg_url'
      },
      status: {
        type: Sequelize.ENUM
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
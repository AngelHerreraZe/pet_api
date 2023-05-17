'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('treatments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      initDate: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'init_date'
      },
      endDate: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'end_date'
      },
      clinicHistoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'clinic_history_id'
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false
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
    await queryInterface.dropTable('treatments');
  }
};
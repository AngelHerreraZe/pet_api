'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('vets', 'user_id', { 
      type: Sequelize.INTEGER,
      unique: true,
      references: {
        model: 'users',
        key: 'id'
      }
     });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('vets', 'user_id');
  }
};

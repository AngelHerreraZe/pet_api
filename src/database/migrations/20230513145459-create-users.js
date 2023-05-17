'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(30)
      },
      username: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(80),
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      passwordChangeAt: {
        type: Sequelize.DATE
      },
      role: {
        type: Sequelize.ENUM("USER","ADMIN","EMPLOYE"),
        defaultValue: "USER",
      },
      profileImgUrl: {
        type: Sequelize.STRING,
        field: 'profile_img_url',
        defaultValue: 'https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png'  
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
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
    await queryInterface.dropTable('users');
  }
};
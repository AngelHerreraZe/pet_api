'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    id: {
      allowNull:false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING(30),
    },
    username: {
      types: DataTypes.STRING(30),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    passwordChangeAt: {
      type: DataTypes.DATE,
    },
    role: {
      type: DataTypes.ENUM("USER","ADMIN","EMPLOYE"),
      defaultValue: "USER",
    },
    profileImgUrl: {
      type: DataTypes.STRING,
      field: 'profile_img_url',
      defaultValue: 'https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png'
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    tableName: 'users',
    modelName: 'Users',
  });
  return Users;
};
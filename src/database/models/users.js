'use strict';
const bcrypt = require('bcrypt');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      Users.hasMany(models.Pets, {foreignKey: 'user_id'});
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
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password_change_at: {
      type: DataTypes.DATE,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: "USER",
    },
    profile_img_url: {
      type: DataTypes.STRING,
      defaultValue: 'https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png'
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    
  },{
    sequelize,
    tableName: 'users',
    modelName: 'Users',
    hooks: {
      beforeCreate: async (user) => {
        try {
          const salt = await bcrypt.genSalt(10);
          const passwordHash = await bcrypt.hash(user.password, salt);
          user.password = passwordHash;
        } catch (error) {
          throw error;
        }
      }
    }
  });
  return Users;
};
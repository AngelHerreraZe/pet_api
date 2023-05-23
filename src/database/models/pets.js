'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pets extends Model {
    static associate(models) {
      Pets.hasMany(models.Appoinment, {foreignKey: 'pet_id', as: 'appoinment'});
      Pets.hasMany(models.ClinicHistory, {foreignKey: 'pet_id', as: 'clinichistory'});
      Pets.belongsTo(models.Users, {foreignKey: 'user_id', as: 'user'});
    }
  }
  Pets.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    genre: {
      type: DataTypes.STRING
    },
    specie: {
      type: DataTypes.STRING,
      allowNull: false
    },
    race: {
      type: DataTypes.STRING
    },
    weight: {
      type: DataTypes.FLOAT
    },
    height: {
      type: DataTypes.FLOAT
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    petimg_url: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.STRING(20)
    }
  }, {
    sequelize,
    modelName: 'Pets',
    tableName: 'pets'
  });
  return Pets;
};
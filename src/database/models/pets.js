'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pets extends Model {
    static associate(models) {
      Pets.belongsTo(models.Users, {foreignKey: 'user_id'});
      Pets.hasMany(models.Appointment, {foreignKey: 'pet_id'});
      Pets.hasMany(models.ClinicHistory, {foreignKey: 'pet_id'});
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
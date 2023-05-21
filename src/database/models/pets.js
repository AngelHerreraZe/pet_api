'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pets extends Model {
    static associate(models) {
      Pets.hasMany(models.Appoinment, {as: 'appoinment', foreignKey: 'petId'});
      Pets.hasMany(models.ClinicHistory, {as: 'clinichistory', foreignKey: 'petId'});
      Pets.belongsTo(models.Users, {as: 'user', foreignKey: 'userId'});
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
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id'
    },
    petimgUrl: {
      type: DataTypes.STRING,
      field: 'petimg_url'
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
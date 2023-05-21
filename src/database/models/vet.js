'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vet extends Model {
    static associate(models) {
      Vet.hasMany(models.ClinicHistory, {as: 'clinichistory', foreignKey: 'vetId'});
      Vet.hasMany(models.Appoinment, {as: 'appoinment', foreignKey: 'vetId'});
    }
  }
  Vet.init({
    id: {
      allowNull:false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    specialty: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Vet',
    tableName: 'vets'
  });
  return Vet;
};
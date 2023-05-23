'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vet extends Model {
    static associate(models) {
      Vet.hasMany(models.ClinicHistory, {foreignKey: 'vet_id', as: 'clinichistory'});
      Vet.hasMany(models.Appoinment, {foreignKey: 'vet_id', as: 'appoinment'});
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
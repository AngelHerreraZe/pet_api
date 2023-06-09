'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vet extends Model {
    static associate(models) {
      Vet.hasMany(models.ClinicHistory, {foreignKey: 'vet_id'});
      Vet.hasMany(models.Appointment, {foreignKey: 'vet_id'});
      Vet.belongsTo(models.Users, {foreignKey: 'user_id'});
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
    user_id: {
      type: DataTypes.INTEGER,
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
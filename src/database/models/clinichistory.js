'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClinicHistory extends Model {
    static associate(models) {
      ClinicHistory.hasMany(models.Treatment, {foreignKey: 'clinic_history_id'});
      ClinicHistory.hasMany(models.ChImages, {foreignKey: 'clinic_history_id'});
      ClinicHistory.hasMany(models.Exams, {foreignKey: 'clinic_history_id'});
      ClinicHistory.belongsTo(models.Pets, {foreignKey: 'pet_id'});
      ClinicHistory.belongsTo(models.Vet, {foreignKey: 'vet_id'});
    }
  }
  ClinicHistory.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    pet_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    vet_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'ClinicHistory',
    tableName: 'clinic_histories'
  });
  return ClinicHistory;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClinicHistory extends Model {
    static associate(models) {
      ClinicHistory.hasMany(models.Treatment, {as: 'treatment', foreignKey: 'clinicHistoryId'});
      ClinicHistory.hasMany(models.ChImages, {as: 'chimages', foreignKey: 'clinicHistoryId'});
      ClinicHistory.hasMany(models.Exams, {as: 'exams', foreignKey: 'clinicHistoryId'});
      ClinicHistory.belongsTo(models.Pets, {as: 'pet', foreignKey: 'petId'});
      ClinicHistory.belongsTo(models.Vet, {as: 'vet', foreignKey: 'vetId'});
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
    petId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'pet_id'
    },
    vetId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'vet_id'
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
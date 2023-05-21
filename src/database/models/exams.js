'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exams extends Model {
    static associate(models) {
      Exams.belongsTo(models.ClinicHistory, {as: 'clinichistory', foreignKey: 'clinicHistoryId'});
      Exams.hasMany(models.ExamsImages, {as: 'exams', foreignKey: 'examsId'});
    }
  }
  Exams.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    exam: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    result: {
      type: DataTypes.STRING
    },
    clinicHistoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'clinic_history_id'
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Exams',
    tableName: 'exams'
  });
  return Exams;
};
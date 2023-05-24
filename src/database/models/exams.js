'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exams extends Model {
    static associate(models) {
      Exams.belongsTo(models.ClinicHistory, {foreignKey: 'clinic_history_id'});
      Exams.hasMany(models.ExamsImages, {foreignKey: 'exams_id'});
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
    clinic_history_id: {
      type: DataTypes.INTEGER,
      allowNull: false
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
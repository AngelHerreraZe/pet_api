'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ExamsImages extends Model {
    static associate(models) {
      ExamsImages.belongsTo(models.Exams,{as: 'exams', foreignKey: 'examsId'});
    }
  }
  ExamsImages.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING
    },
    examsId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'exams_id'
    },
    stats: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'ExamsImages',
    tableName: 'exams_images'
  });
  return ExamsImages;
};
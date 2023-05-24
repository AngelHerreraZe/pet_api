'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ExamsImages extends Model {
    static associate(models) {
      ExamsImages.belongsTo(models.Exams,{foreignKey: 'exams_id'});
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
    exams_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
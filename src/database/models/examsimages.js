'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ExamsImages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
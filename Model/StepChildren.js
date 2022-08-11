const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class StepChildren extends Model {}

StepChildren.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    stepName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'step_children',
  }
);

module.exports = StepChildren;

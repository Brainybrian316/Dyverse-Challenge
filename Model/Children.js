const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Children extends Model {}

Children.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Animal_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'animals',
        key: 'id',
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'children',
  }
);

module.exports = Children;
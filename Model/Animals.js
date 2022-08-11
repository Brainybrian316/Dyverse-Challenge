// modules 
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');



// create our animal model
class Animal extends Model {}

// defines a table in the database with the following columns and configurations
Animal.init(
  {
    // defines id column as primary key and auto increments
    id: {
      // defines the type of data in the column
      type: DataTypes.INTEGER,
      //  does not allow value to be empty
      allowNull: false,
      // makes it the primary key
      primaryKey: true,
      // auto increments the id by 1
      autoIncrement: true,
    },
    //  defines the label column
    label: {
      // defines the type of data in the column
      type: DataTypes.STRING,
      // does not allow value to be empty
      allowNull: false,
    },
    //  references the root column in the roots table
    rootId: {
      // defines the type of data in the column
      type: DataTypes.INTEGER,
      references: {
        model: 'root',
        key: 'id',
      }
    }
  },
  {
    sequelize,
    // will create timestamps for the createdAt and updatedAt columns
    timestamps: true,
    //  will set data to be stored in the database as snake_case
    underscored: true,
    // will set the table name to be animals
    modelName: 'animals',
  }
);

module.exports = Animal;
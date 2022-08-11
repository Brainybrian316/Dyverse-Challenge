
// Modules
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


// create our root model
class Root extends Model {}

// defines a table in the database with the following columns and configurations
Root.init(
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
    //  defines the name of the root column
    root: {
      // defines the type of data in the column
      type: DataTypes.STRING,
      // does not allow value to be empty
      allowNull: false,
    },
  },
  {
    sequelize,
    // will create timestamps for the createdAt and updatedAt columns
    timestamps: true,
    //  will set data to be stored in the database as snake_case
    underscored: true,
    // will set the table name to be roots
    modelName: 'root',
  }
)

module.exports = Root;
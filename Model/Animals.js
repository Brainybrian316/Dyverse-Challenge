// modules 
const { Model, DataTypes } = require('sequelize');


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
    }
  }
)
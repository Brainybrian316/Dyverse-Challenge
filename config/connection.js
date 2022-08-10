// modules 
const Sequelize = require('sequelize');
require('dotenv').config();


//  create a connection to our database 
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  // the purpose of this is to tell the db where to connect to
  host: localhost,
  // defines the dialect of the database
  dialect: 'mysql',
  // the port to connect to
  port: 3306,
});


// Modules to require
const express = require('express');
const routes = require('./Controller/index.js');
const sequelize = require('./config/connection');
const session = require('express-session');


//  initial variables declared for use in the server
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//  set up session with cookies and sequelize
const sess = {
  secret: 'keyboard cat',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
})
};

app.use(session(sess));
// use express json to parse json data
app.use(express.json());
//  use to parse urlencoded data
app.use(express.urlencoded({ extended: true }));
//  set up routes and controllers
app.use(routes);

// turn on connection to the database
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}`));
})

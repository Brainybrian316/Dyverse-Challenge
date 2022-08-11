
// import models
const Animals = require('./Animals');
const Root = require('./Root');
const Children = require('./Children');
const StepChildren = require('./StepChildren');

//  add associations to the models
Animals.belongsTo(Root); // by not passing in a second argument, sequelize will assume the name of the foreign key is the name of the model + Id

Root.hasMany(Animals);




// exports the models
module.exports = { Animals, Root, Children, StepChildren };
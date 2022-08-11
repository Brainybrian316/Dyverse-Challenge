
// import models
const Animals = require('./Animals');
const Root = require('./Root');
const Children = require('./Children');

//  add associations to the models
Animals.belongsTo(Root); // by not passing in a second argument, sequelize will assume the name of the foreign key is the name of the model + Id

Root.hasMany(Animals);

Animals.belongsToMany(Animals, {
  through: Children,
  as: 'children',
  foreignKey: 'Animal_id',
})



// exports the models
module.exports = { Animals, Root, Children };
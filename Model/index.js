
// import models
const Animals = require('./Animals');
const Root = require('./Root');

//  add associations to the models
Animals.belongsTo(Root); // by not passing in a second argument, sequelize will assume the name of the foreign key is the name of the model + Id

Root.hasMany(Animals);

Animals.belongsTo(Animals, { as: 'children' });

// exports the models
module.exports = { Animals, Root };
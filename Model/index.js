
// import models
const Animals = require('./Animals');
const Root = require('./Root');

//  add associations to the models
Animals.belongsTo(Root);

Root.hasMany(Animals);



// exports the models
module.exports = { Animals, Root };
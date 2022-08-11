
const { Root } = require('../Model');

const rootData = [
  {
    name: 'root',
  }
]

const seedRoot = () => Root.bulkCreate(rootData);

module.exports = seedRoot;
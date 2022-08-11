
const { Root } = require('../Model');

const rootData = [
  {
    root: 'root',
  }
]

const seedRoot = () => Root.bulkCreate(rootData);

module.exports = seedRoot;
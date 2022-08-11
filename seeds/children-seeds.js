
const { Children } = require('../Model');

const childrenData = [
  {
    children: 'cat',
  },
  {
    children: 'dog',
  },
]

const seedChildren = () => Children.bulkCreate(childrenData);

module.exports = seedChildren;

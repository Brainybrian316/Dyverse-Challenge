
const { Children } = require('../Model');

const childrenData = [
  {
    children: 'cat',
    animalId: 2,
  },
  {
    children: 'dog',
    animalId: 2,
  },
]

const seedChildren = () => Children.bulkCreate(childrenData);

module.exports = seedChildren;


const { Animals } = require('../Model');

const animalsData = [
  {
    label: 'ant',
    rootId: 1,
  },
  {
    label: 'bear',
    rootId: 1,
  },
  {
    label: 'cat',
    parentId: 2,
  },
  {
    label: 'dog',
  },
  {
    label: 'elephant',
  },
  {
    label: 'frog',
    rootId: 1,
  },
]

const seedAnimals = () => Animals.bulkCreate(animalsData);

module.exports = seedAnimals;

const { Animals } = require('../Model');

const animalsData = [
  {
    name: 'ant',
  },
  {
    name: 'bear',
  },
  {
    name: 'cat',
  },
  {
    name: 'dog',
  },
  {
    name: 'elephant',
  },
  {
    name: 'frog',
  },
]

const seedAnimals = () => Animals.bulkCreate(animalsData);

module.exports = seedAnimals;
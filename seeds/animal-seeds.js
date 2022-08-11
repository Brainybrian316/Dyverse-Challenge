
const { Animals } = require('../Model');

const animalsData = [
  {
    label: 'ant',
  },
  {
    label: 'bear',
  },
  {
    label: 'cat',
  },
  {
    label: 'dog',
  },
  {
    label: 'elephant',
  },
  {
    label: 'frog',
  },
]

const seedAnimals = () => Animals.bulkCreate(animalsData);

module.exports = seedAnimals;
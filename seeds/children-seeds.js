
const { Children } = require('../Model');

const childrenData = [
  {
    Animal_id: 1,
  },
  {
    Animal_id: 2,
  },
  {
    Animal_id: 3,
  },
  {
    Animal_id: 4,
  },
  {
    Animal_id: 5,
  },
  {
    Animal_id: 6,
  },
]

const seedChildren = () => Children.bulkCreate(childrenData);

module.exports = seedChildren;

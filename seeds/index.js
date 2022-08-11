// modules
const seedAnimals = require('./animal-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedAnimals();
  console.log('\n----- Animals Seeded -----\n');
}

seedAll();
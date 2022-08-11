// modules
const seedRoot = require('./root-seeds');
const seedAnimals = require('./animal-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedRoot();
  console.log('\n----- ROOT SEEDED -----\n');

  await seedAnimals();
  console.log('\n----- Animals Seeded -----\n');
}

seedAll();
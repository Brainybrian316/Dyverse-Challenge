// modules
const seedRoot = require('./root-seeds');
const seedAnimals = require('./animal-seeds');
const sequelize = require('../config/connection');
const seedChildren = require('./children-seeds');
const seedStepChildren = require('./stepChildren-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedRoot();
  console.log('\n----- ROOT SEEDED -----\n');

  await seedAnimals();
  console.log('\n----- Animals Seeded -----\n');

  await seedChildren();
  console.log('\n----- Children Seeded -----\n');

  await seedStepChildren();
  console.log('\n----- StepChildren Seeded -----\n');

  process.exit(0);
}

seedAll();
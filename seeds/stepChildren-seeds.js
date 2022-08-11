
const { StepChildren } = require('../Model');

const stepChildrenData = [
  {
    stepName: 'elephant',
  },
]

const seedStepChildren = () => StepChildren.bulkCreate(stepChildrenData);

module.exports = seedStepChildren;

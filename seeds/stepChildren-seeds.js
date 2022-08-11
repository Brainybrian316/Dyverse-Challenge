
const { StepChildren } = require('../Model');

const stepChildrenData = [
  {
    stepName: 'elephant',
    childId: 2,
  },
]

const seedStepChildren = () => StepChildren.bulkCreate(stepChildrenData);

module.exports = seedStepChildren;

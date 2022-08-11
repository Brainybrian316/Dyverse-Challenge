// modules
const router = require('express').Router();
const { Root, Animals } = require('../Model');

router.get('/tree', (req, res) => {
  Root.findAll({
    include: [{
      model: Animals,
      attributes: ['label'],
    }
  ]
  })
    .then(dbRootData => res.json(dbRootData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// check to make sure animal data is displaying correctly
router.get('/animals', (req, res) => {
  Animals.findAll()
    .then(dbAnimalData => res.json(dbAnimalData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    }
  );
}
);


module.exports = router;
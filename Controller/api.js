// modules
const router = require('express').Router();
const { Root, Animals, Children, StepChildren } = require('../Model');

router.get('/tree', (req, res) => {
  Root.findAll({
    // new id's are sent to the bottom of the tree
    order: [['id', 'DESC']],
    // we want to include the data for the animals and children
    include: [
      {
      model: Animals,
      // the data we want to include from the animals table
      attributes: ['label'],
      // we want to include the data for the children table
      include: [
        {
          model: Children,
          attributes: ['children'],
          include: [
            {
              model: StepChildren,
              attributes: ['stepName'],
            }
          ]
        }
      ]
    },
  ],
  })
  // send the data to the client
    .then(dbRootData => res.json(dbRootData))
    // if there is an error, catch the error
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// post a new animal/parent
router.post('/tree', (req, res) => {
  // create a new animal/parent with the data from the client
  Animals.create(req.body) // req.body takes in label and rootId
    .then(dbAnimalData => res.json(dbAnimalData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    }
  );
})

// // check to make sure animal data is displaying correctly
// router.get('/animals', (req, res) => {
//   Animals.findAll()
//     .then(dbAnimalData => res.json(dbAnimalData))
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   );
// }
// );




module.exports = router;
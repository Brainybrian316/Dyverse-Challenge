

# Data Schema Design

if you look in the model folder you will see the schema for the data. This is the data that will be stored in the database.
I have created 4 tables to store the data. The tables are: Root, Animals, Children, and StepChildren( in data terms its grandchildren).

The Root table has the following columns:
a unique id(primary key)
a name(string)

The Animals table has the following columns:
a unique id (primary key)
a name(string)

The Children table has the following columns:
a unique id (primary key)
a name(string)

the StepChildren table has the following columns:
a unique id (primary key)
a name(string)

Example SQL query to create a table:
```sql
CREATE TABLE Root (
    id INTEGER PRIMARY KEY,
    name TEXT
);
```

Example  sequelize schema:
```js
class Root extends Model {}
Root.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    root: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'root',
  })
```



 ## The tables will have the following relationships:

Root has many Animals and Animals will belong to Root (one to many) The root would be considered the parent. 

Animals have many Children and Children will belong to Animals (one to many) 

Children have many StepChildren and StepChildren will belong to Children (one to many)

By default, the tables will have the following constraints:
Primary key(id) is unique and not null


## Sample Queries

one query to get all the roots:

<!-- get all data -->
```sql
SELECT `root`.`id`, `root`.`root`, `animals`.`id` AS `animals.id`, `animals`.`label` AS `animals.label`, `animals->children`.`id` AS `animals.children.id`, `animals->children`.`children` AS `animals.children.children`, `animals->children->step_children`.`id` AS `animals.children.step_children.id`, `animals->children->step_children`.`step_name` AS `animals.children.step_children.stepName` FROM `roots` AS `root` LEFT OUTER JOIN `animals` AS `animals` ON `root`.`id` = `animals`.`root_id` LEFT OUTER JOIN `children` AS `animals->children` ON `animals`.`id` = `animals->children`.`animal_id` LEFT OUTER JOIN `step_children` AS `animals->children->step_children` ON `animals->children`.`id` = `animals->children->step_children`.`child_id` ORDER BY `root`.`id` DESC;
UPDATE `Sessions` SET `expires`=?,`updatedAt`=? WHERE `sid` = ?;
```
or sequelize query:

```js
router.get('/tree', (req, res) => {
  Root.findAll({
    order: [['id', 'DESC']],
    include: [
      {
      model: Animals,
      attributes: ['label'],
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
    .then(dbRootData => res.json(dbRootData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
```

<!-- post an animal and associate it with root-->
```sql
INSERT INTO Animals (name, rootId) VALUES ('Animal', 1);
```
or sequelize query:

```js
router.post('/tree', (req, res) => {
  Animals.create(req.body) 
    .then(dbAnimalData => res.json(dbAnimalData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    }
  );
})
```


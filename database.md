

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
SELECT * FROM Root;
```
or 

<!-- post an animal and associate it with root-->
```sql
INSERT INTO Animals (name, rootId) VALUES ('Animal', 1);
```


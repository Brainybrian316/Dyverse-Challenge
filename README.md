
<h1 align="center">Welcome to Dyverse-Challenge Application👋</h1>

#  How to set up your service

Please start by cloning the repository:

```bash
git clone
```
Then, install the dependencies. To install all dependencies you need only to run:
```bash
npm install
```
However, if you plan on editing data you may find it helpful to install Nodemon running: 
```
npm install --save-dev nodemon
```
Please review <a href ="https://www.npmjs.com/package/nodemon">Nodemon</a> documentation if you are unfamiliar with the package.


# How to run your service

Run the following command at the root of your project starting with:
```
mysql -u root -p
``` 
Next, enter your password for MySQL. Once you are in your server run: 
```
SOURCE db/schema.sql
quit
``` 
Then run:
```
npm run seeds
```
Finally, choose between running: 
```
npm run develop
OR
npm start
```
You can download <a href="https://insomnia.rest/download">Insomnia</a> to manipulate/test the data with the GET, POST, PUT, DELETE request.

# How to run the tests, if there are any

Not applicable to this project.

# Design choices

I designed the application to be as simple as possible. 
I used the MVC design pattern to separate the logic from the view. The reason for this is to make the application more scalable and easier to maintain. the logic is separated from the view to make it easier to test if testing is needed. 

Futhermore, I used the RESTful design pattern to generate the endpoints for the application. The RESTful design pattern makes it easier to create endpoints for the application. You can simply create a new endpoint and add it to the application. Using the CRUD design pattern, you can create endpoints for the application to create, read, update, and delete data. 

To configure the application I created a configuration directory with a configuration file. Using dotenv, I imported the configuration file and set the environment variables. This will allow other developers to access the connection with their own variables without having to change the code. Furthermore, I included seed data in the application to help with testing.

There are plenty of trade offs in the design choices I made. I could have used Mongo or PostgreSQL to store the data. However, I chose to use MySQL because the data tree requires strict relationships. Therefore, i decided to use a relational database. 

I used insomnia to test my endpoints. Insomnia is a tool that allows you to test your application with the GET, POST, PUT, and DELETE request. The reason I choose insomnia is my familiarity with the tool. There is also a functionality/feature that allows the user to share the insomnia document with others (think of it like github) where you can push your routes/tests to the document for others to see/manipulate. 

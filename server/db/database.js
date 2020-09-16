const Sequelize = require('sequelize');

//creating an instance of sequelize which is what creates the connection to our database. db now represents our database
//using DATABASE_URL helps with deployment to heroku
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/sams-boilermaker', {
  logging: false 
});

module.exports = db;
// var config = require("../knexfile");
// var env = "development";
// var knex = require("knex")(config[env]);

const cassandra = require('cassandra-driver');
const fs = require('fs');
const pathToFile = __dirname + '/cassandra.csv';
var cassanKnex = require("cassanknex")({
  connection: {
    contactPoints: ["127.0.0.1"]
  }
});

cassanKnex.on("ready", function (err) {

  if (err) {
    console.error("Error Connecting to Cassandra Cluster", err);
  }
  else console.log("Cassandra Connected");
});



// this is where we will add our queries for each request.

//get

//put

//post

//delete




//module.exports = knex;
//will need to export all of my query funcs here

// const Sequelize = require ('sequelize');

// const db = new Sequelize('reviews', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

// const Reviews = db.define('reviews', {
//   id: {
//     type: Sequelize.INTEGER(11),
//     allowNull: false,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   rating: Sequelize.INTEGER,
//   recommend: Sequelize.BOOLEAN,
//   size: Sequelize.INTEGER,
//   width: Sequelize.INTEGER,
//   comfort: Sequelize.INTEGER,
//   quality: Sequelize.INTEGER,
//   opinion: Sequelize.STRING(90),
//   review: Sequelize.STRING(16383),
//   nickname: Sequelize.STRING(20),
//   email: Sequelize.STRING(320)
// })

// //;

// module.exports.db = db
// module.exports.Reviews = Reviews
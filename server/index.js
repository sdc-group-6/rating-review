const express = require('express');
const app = express();
const cors = require("cors");
var bodyParser = require('body-parser')
const port = process.env.PORT || 8003;
var db = require('../database/index.js')
// const cassandra = require('cassandra-driver');
// const cassanKnex = require("cassanknex")({
//   connection: {
//     contactPoints: ["127.0.0.1"]
//   }
// });
var config = require("../knexfile.js");
var env = "development";
var knex = require("knex")(config[env]);

app.use(express.static(__dirname + '/../public'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/reviews/:id', (req, res) => {

  return knex
  .from("reviews")
    .where("index", req.params.id)
    .then(reviews => {
      res.send(reviews);
    })
    .catch((err)=>{console.log('Not quite, we are getting the following error: '), err})
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})
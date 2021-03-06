require('newrelic');
const express = require('express');
const app = express();
const cors = require("cors");
var bodyParser = require('body-parser')
const port = process.env.PORT || 8003;
var db = require('../database/index.js');

var config = require("../knexfile.js");
var env = "development";
var knex = require("knex")(config[env]);

app.use(express.static(__dirname + '/../public'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});



app.get('/reviews/:id', (req, res) => {

  return knex
    .from("reviews")
    .where("index", req.params.id)
    .then(reviews => {
      res.send(reviews);
    })
    .catch((err) => {
      console.log('Not quite, we are getting the following error on GET: '), err
    })
});


app.post('/postreview/:id', (req, res) => {

  knex("reviews")
    .insert({
      nickname: req.body.nickname,
      review: req.body.review,
      rating: req.body.rating,
      createdat: req.body.createdat,
      index: req.params.id,
      h_yes: req.body.h_yes,
      h_no: req.body.h_no
    })
    .then(response => {
      res.send('Post request completed')
    })
    .catch((err) => {
      console.log('Getting POST error: ', err)
    })

})

app.patch('updateCounter/:')

app.delete('/:id', (req, res) => {
  knex("reviews")
    .where({
      id: req.params.id
    })
    .del()
    .then(response => {
      res.send("Review Has Been Deleted")
    })
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})

module.exports = app;
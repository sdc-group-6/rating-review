const express = require('express');
const app = express();
const cors = require("cors");
var bodyParser = require('body-parser')
const port = process.env.PORT || 8003;
var db = require('../database/index.js')
const cassandra = require('cassandra-driver');
const cassanKnex = require("cassanknex")({
  connection: {
    contactPoints: ["127.0.0.1"]
  }
});
// var config = require("../knexfile.js");
// var env = "development";
// var knex = require("knex")(config[env]);

app.use(express.static(__dirname + '/../public'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/reviews/:id', (req, res) => {
  var startTime = Date.now();
  var query = cassanKnex("reviewsdb");

var startTime = Date.now();
         query
        .select()
        .where("reviewid","=", req.params.id)
        .from("reviews");
        query.exec((err, result)=>{ if (err) {
          console.log("error: ", err);
        } else { res.json(result.rows)}});
        console.log(`total time for Cassandra query: ${Date.now() - startTime} ms`);


    // .then(reviews => {
    //   var totalTime = Date.now()-startTime;
    //   console.log(`Query returned ${reviews.length} reviews in ${totalTime} ms.`);
    //   res.send(reviews);
    // })
    // .catch((err)=>{console.log('Getting error from server, error: '), err})
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})
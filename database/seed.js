// var config = require("../knexfile");
// var env = "development";
// var knex = require("knex")(config[env]);
const faker = require("faker");
const fs = require('fs');
const pathToFile = __dirname + '/testSeed.csv';
const cassandra = require('cassandra-driver');
const cassanKnex = require("cassanknex");


// const createFakeReviewId = () => {
//   return {
//     reviewid: Math.floor(Math.random() * (10000001))
//     }
// };

// const createFakeCreatedAt = () => {
//   return {
//    createdat: faker.date.past(),
//     }
// };

// const createFakeNickName = () => {
//   return {
//    nickname: faker.internet.userName()
//     }
// };

// const createFakeReview = () => {
//   return {
//    review: faker.lorem.sentences()
//     }
// };

// const createFakeRating = () => {
//   return {
//     rating: Math.floor(Math.random() * (5)),
//   }
// };

// const createFakeYesCount = () => {
//   return {
//    h_yes: Math.floor(Math.random()* (40)),
//     }
// };

// const createFakeNoCount = () => {
//   return {
//    h_no: Math.floor(Math.random()* (40)),
//     }
// };

function writeFakeData() {
  //empty the file first
  fs.writeFileSync(pathToFile, 'reviewid|createdat|h_yes|h_no|nickname|rating|review\n');


  var chunk = 0;
  var agregateQuery = '';
  for (var j = 0; j < 5; j++) {
    chunk++;
     agregateQuery +=
         Math.floor(Math.random() * (2000000))+ '|' +
        '"' + faker.date.past() + '"|' +
         + Math.floor(Math.random()* (40)) + '|' +
         + Math.floor(Math.random()* (40)) + '|' +
        '"' + faker.internet.userName() + '"|' +
        Math.floor(Math.random() * (5)) + '|' +
        '"' + faker.lorem.sentences() + '"\n'

       //  if (chunk >= 1000) {
         fs.appendFileSync(pathToFile, agregateQuery)
       //   chunk = 0;
       //   agregateQuery = '';
       // }

  }
  console.log('seeded')
}

writeFakeData();









// ********************************* SEEDING FOR POSTGRES *****************************
// const createFakeProduct = () => {

//   return { // need to make this serial? auto increase
//     name: faker.commerce.productName()
//   }

// }

// function seedProducts() {
//   const fakeProducts = [];
//   const total = 40000;
//   for (var j = 0; j < total; j++) {
//     fakeProducts.push(createFakeProduct());
//   }
//   return knex("items").insert(fakeProducts)
//     .then(() => {
//       console.log('seeding completed')
//     })

// }

// const createFakeReview = () => {


//   return {

//     nickname: faker.internet.userName(),
//     review: faker.lorem.sentences(),
//     rating: Math.floor(Math.random() * (5)),
//     recommend: faker.random.boolean(),
//     createdat: faker.date.past(),
//     index: Math.floor(Math.random() * (10000001)),
//     h_yes: Math.floor(Math.random()* (40)),
//     h_no: Math.floor(Math.random()* (40)),
//   }

// }

// const seedReviews= () => {
//   const fakeReviews = [];
//   const total = 10000;
//   for (var j = 0; j < total; j++) {
//     fakeReviews.push(createFakeReview());
//   }
//   return knex("reviews").insert(fakeReviews)
//     .then(() => {
//       console.log('seeding completed')
//     })

// }


//  /* Still needs to be optizimed in order to seed multiple batches one after another. Othewise we need to invoke each function far too many times in order to get 10M && 40M
//  */


// seedReviews(); //will need to run many times.
// seedProducts(); // will need to run many times.

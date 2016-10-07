var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient
var app = express();

app.set('port', (process.env.PORT || 3000));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect('mongodb://localhost/trolleysystem', (err, database) => {
  if (err) return console.log(err);
  db = database;
  app.listen(app.get('port'), function() {
    console.log(`running on 0.0.0.0:${app.get('port')}`);
  });
});





var collectionOne = 0;
var collectionTwo = 0;
var collectionThree = 0;
app.get('/', function(req, res){
      db.collection("b1", function(err, collection) {
      collection.find({"out": "x"}).toArray(function(err, result) {
        if (err) {
          throw err;
        } else {
          for (i=0; i<result.length; i++) {
          }
          collectionOne = i;
        }
      });
      db.collection("b2", function(err, collection) {
        collection.find({"out": "x"}).toArray(function(err, result) {
          if (err) {
            throw err;
          } else {
            for (i=0; i<result.length; i++) {}
            collectionTwo = i;
          }
        });
      });
      db.collection("b3", function(err, collection) {
        collection.find({"out": "x"}).toArray(function(err, result) {
          if (err) {
            throw err;
          } else {
            for (i=0; i<result.length; i++) {}
            collectionThree = i;
          }
        });
      });
      // Thank you aesed
      function workyabastard() {console.log(collectionOne+":"+collectionTwo +":"+collectionThree);
      res.render('index.ejs', {
        bay: collectionOne,
        bay2: collectionTwo,
        bay3: collectionThree
      });}
            setTimeout(workyabastard, 3000);
    });
  });




// app.get('/', (req, res) => {
//
//
//   //db.listCollections().toArray(function(err, collInfos) {
//       // collInfos is an array of collection info objects that look like:
//       // { name: 'test', options: {} }
//   //});
//   var elements = [];
//   db.collection("b1", function(err, collection) {
//     collection.find({"out": "x"}).toArray(function(err, result) {
//       res.render('index.ejs', {bay: result});
//     });
//   });
//   db.collection("b2", function(err, collection) {
//     collection.find({"out": "x"}).toArray(function(err, result) {
//       res.render('index.ejs', {bay2: result, bay3: result});
//     });
//   });
// //  res.render('index.ejs', {bay: elements});
// });

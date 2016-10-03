var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient
var app = express();

var port = 3000;
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect('mongodb://lelz:lolz@ds015995.mlab.com:15995/cruddly', (err, database) => {
  if (err) return console.log(err);
  db = database;
  app.listen(3000, function() {
    console.log(`running on 0.0.0.0:${port}`);
  });
});
app.get('/', (req, res) => {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err);
    // renders index.ejs
    res.render('index.ejs', {quotes: result});
  });
});
app.post('/quotes', (req, res) => {
  console.log(req.body);
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err);
    console.log('saved to db');
    res.redirect('/');
  });
});

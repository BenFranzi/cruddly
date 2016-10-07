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
app.get('/', (req, res) => {
  db.collection('b3').find().toArray((err, result) => {
    if (err) return console.log(err);
    // renders index.ejs
    res.render('index.ejs', {quotes: result});
  });
});

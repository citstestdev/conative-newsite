var express = require('express');
var router = express.Router();
// var jwt = require('jsonwebtoken');
// var checkLogin = require('../middleware/check');
router.get('/hello', function(req, res, next) {
       
   var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:2701/";
    var fullUrl = req.protocol + '://' + req.get('host');

     MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
       
         dbo.collection('customers').find().toArray(function (err, result1) {
          console.log(result1);
          if (err) {return};
          console.log(err);
             // res.send(result1);
            // res.render('newindex', {people: result1})
             res.render('addhome');
      });
    });
      // res.render('addhome');
     // res.send('success');
});


router.get('/home-show', function(req, res, next) {
   var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    var fullUrl = req.protocol + '://' + req.get('host');
    
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
       var reviewdata = [];
       dbo.collection('homes').findOne(function (err, result1) {
           reviewdata = result1;
         // reviewdata['review'] = result;
         res.status(200).send(result1);
       });
    });
  // res.render('showdata', { people : people });
});


module.exports = router;

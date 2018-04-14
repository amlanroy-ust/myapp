var express = require('express');
//var mongoose = require('mongoose');
var router = express.Router();
//var fs = require('fs');
//var path = require('path');

// Connect to mongoose
//mongoose.Promise = global.Promise;
//mongoose.connect("mongodb://localhost/mydatabase");

// MongoDB Users Schema (Used for Login and Registration)
//var userSchema = new mongoose.Schema({
  //username: String,
  //email: String,
  //password: String,
  //salt: String,
  //usergroup: 0,
//});
//var User = mongoose.model("User", userSchema);

/* GET api/register */
router.get('/', function(req, res, next) {
  res.status(503).send("Oh noes! You sent a GET request - please send your request as a POST request. K Thx Bye!");
});

/* POST api/register */
router.post('/imageUpload', function(req, res, next) {
  
  let imageFile = req.files.file;
  
    imageFile.mv(`${__dirname}/uploads/${req.body.filename}.jpg`, function(err) {
      if (err) {
        return res.status(500).send(err);
      }
  
      res.json({file: `uploads/${req.body.filename}.jpg`});
    });

    //res.status(200).send("Success, Your registration has been saved to the database!")
  
});

router.post('/postData', function(req, res, next) {
  console.log('req.body: ', req.body);
  if(req.body.name == 'Amlan')
  return res.status(200).send({name: "You are brilliant!"});
  else return res.status(400).send({error: "Name not valid"});
});

router.get('/getAllData', function(req, res, next) {
  //var jsondata = [{A: [{name: 'Amlan', address: 'kolkata 7'},{name: 'Arnab', address: 'kolkata 6'}]}, {B: [{name: 'Debarka', address: 'kolkata 5'},{name: 'Suman', address: 'kolkata 4'}]}];
  //res.json(jsondata);
  console.log('get data');
  var empData = {
    content: {
        employee: [
          {
            name: "Joe",
            Age: 30,
            id : 1007
          },
          {
            name: "Bill",
            Age: 35,
            id : 1008
          }
        ]
     }
  };

  var movieData = {
    "title": "The Basics - Networking",
    "description": "Your app fetched this from a remote endpoint!",
    "movies": [
      { "title": "Star Wars", "releaseYear": "1977"},
      { "title": "Back to the Future", "releaseYear": "1985"},
      { "title": "The Matrix", "releaseYear": "1999"},
      { "title": "Inception", "releaseYear": "2010"},
      { "title": "Interstellar", "releaseYear": "2014"}
    ]
  };

  var myData = [
    {
       "userId":001,
       "id":1,
       "title":"Ram",
       "body":"Test Doc1"
    },
    {
       "userId":002,
       "id":2,
       "title":"Debarka",
       "body":"Test Doc2"
    },
    {
       "userId":003,
       "id":3,
       "title":"Sanjib",
       "body":"Test Doc3"
    }
 ];

 var myData1 = [
    {
      title:"A",
      data:[{
        "id":1,
        "name":"Amlan",
        "age":"31"
      },
      {
        "id":2,
        "name":"Amlan1",
        "age":"31"
      }]
      
    },
    {
      title:"B",
      data:[{
        "id":1,
        "name":"Amlan",
        "age":"31"
      },
      {
        "id":2,
        "name":"Amlan1",
        "age":"31"
      }]
    }
  ];

  res.status(200).send(myData);
  //res.status(400).send({error: "Facing problem while fetching data from database."})  
});

module.exports = router;

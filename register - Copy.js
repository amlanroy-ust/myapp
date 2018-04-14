var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var formidable = require('formidable');

// Connect to mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/mydatabase");

// MongoDB Users Schema (Used for Login and Registration)
var userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  salt: String,
  usergroup: 0,

});
var User = mongoose.model("User", userSchema);

/* GET api/register */
router.get('/', function(req, res, next) {
  res.status(503).send("Oh noes! You sent a GET request - please send your request as a POST request. K Thx Bye!");
});

/* POST api/register */
router.post('/', function(req, res, next) {
  //console.log("req.body: ", req.body);
  //console.log("req.file: ", req.file);
  console.log('request: ', req);
  ////let imageFile = req.files.file;

  //console.log('file', file);
  var form = new formidable.IncomingForm();
    form.multiples = false;
    form.uploadDir = path.join(__dirname, '../uploads');
    form.on('file', function(field, file) {
        console.log('file', file);
        //var file_name = file.name;
        fs.rename(file.path, path.join(form.uploadDir, file.name));
        //console.log('file.name', file.name);
        var file_path = config.imagepath + file.name;
        console.log('file_path', file_path);
        //res.send(file.name);
    });
  
  res.status(200).send("Success, Your registration has been saved to the database!")
  
  // if (!req.body) return res.sendStatus(400)
  // var regdata = new User(req.body);
  // regdata.save()
  // .then(item => {
  //    res.status(200).send("Success, Your registration has been saved to the database!")
  //  })
  //  .catch(err => {
  //    res.status(400).send("Unable to save the item to the database!");
  //  });
});

module.exports = router;
require('rootpath')();
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const config = require('./config');
const mongoose = require("mongoose");
const cors = require('cors');
const ejs = require('ejs');

const app = express();

var http = require('http').Server(app);

var mongoosePaginate = require('mongoose-paginate');

mongoose.Promise = require('bluebird');
 
mongoosePaginate.paginate.options = { 
    lean:  true,
    limit: 10
};

mongoose.connect(config.database, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to the database");
    }
});

app.use(function(req, res, next) { //allow cross origin requests
        res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
        res.header("Access-Control-Allow-Origin", config.__site_url);
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Credentials", true);
        next();
    });

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(cookieParser());
app.use(fileUpload());
app.use('/public', express.static(__dirname + '/public'));

app.use('/uploads', express.static(__dirname + '/uploads'));

app.set("view options", {layout: false});
app.use(express.static(__dirname + '/views'));

// app.set('views', __dirname + '/views'); // general config
// app.set('view engine', 'html');

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

//app.set('views', __dirname + '/views')
app.engine('ejs', ejs.renderFile);
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index.html');
});

// app.get('/', function(req, res, next) {
//   res.status(200).send("Welcome to Node Projects...");
// });

const agent = require('./routes/agent/agentRoutes');
app.use('/api', agent);

var register = require('./routes/register');
app.use('/api/register', register);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log('error occurred 1...');
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  //// set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log('error occurred 2...');
  //// render the error page
  res.status(err.status || 500);
  //res.render('error');
  res.render('pageNotFound.ejs');
});

app.listen(config.port, () => {
  console.log('Server listening on port: ', config.port);
});

module.exports = app;

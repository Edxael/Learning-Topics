// ----- Requesting dependencies -----
var express = require('express');
var app = express();
var ejs = require('ejs');
var ejs_mate = require('ejs-mate');
var morgan = require('morgan');


// ----- MiddleWare -----
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/node_modules/bulma'));
app.use(express.static(__dirname + '/views'));
app.use(morgan('dev'));
app.engine('ejs', ejs_mate);



// ----- Pages to serve ------
app.get('/', function(req, res){
  res.render('pages/index.ejs');
});

app.get('/ayu', function(req, res){
  res.render('pages/ayu.ejs');
});

app.get('/bpink', function(req, res){
  res.render('pages/bpink.ejs');
});

app.get('/madc', function(req, res){
  res.render('pages/madc.ejs');
});



// ------ Server Listener ------
app.listen(3000, function(err){
  if(err){ throw err }
  console.log("Server Running.");
});



// Express Documentation Reading
// http://expressjs.com/en/guide/writing-middleware.html



// EJS Doc Reading
// https://scotch.io/tutorials/use-ejs-to-template-your-node-application
// http://ejs.co/

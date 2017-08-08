  // ----- Require Dependences ------
var express = require('express');
var app = express();
var ejs = require('ejs');
var morgan = require('morgan');


  // ----- Middle-Ware -------
app.set('vew engine', 'ejs');
app.use(morgan('dev'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/views'));




  // ------ Page Routes ------
app.get('/', function(req, res){
  res.render('pages/01-index.ejs');
});

app.get('/ah', function(req, res){
  res.render('pages/02-ayu.ejs');
});

app.get('/mc', function(req, res){
  res.render('pages/03-madc.ejs');
});

app.get('/bp', function(req, res){
  res.render('pages/04-bpink.ejs');
});

app.get('/ty', function(req, res){
  res.render('pages/05-tae.ejs');
});




  // ----- Server Listener -----
app.listen(3000, function(err){
  if(err){ throw err; }
  console.log("Star Server Up & Running.....");
});

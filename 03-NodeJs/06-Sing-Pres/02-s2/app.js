  // ------ Import Depenedencies -----
var express = require('express');
var app = express();
var ejs = require('ejs');
var morgan = require('morgan');


  // ------ Middle-Ware ------
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/views'));
app.use(morgan('dev'));


  // ----- Pages Routing -----
app.get('/', function(req, res){
  res.render('pages/ayu.ejs')
});

app.get('/bp', function(req, res){
  res.render('pages/bpink.ejs')
});

app.get('/st', function(req, res){
  res.render('pages/sistar.ejs')
});

app.get('/mc', function(req, res){
  res.render('pages/madc.ejs')
});

app.get('/sy', function(req, res){
  res.render('pages/soyu.ejs')
});



  // ----- Server Listener ------
app.listen(3000, function(err){
  if(err){ throw err; }
  console.log("The server is Running like a Bosssss.....");
});

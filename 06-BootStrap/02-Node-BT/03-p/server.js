// ----- Importing Dependencies ---

var express = require('express');
var app = express();
var ejs = require('ejs');
var ejs_mate = require('ejs-mate');
var morgan = require('morgan');
var body_parser = require('body-parser');


// ----- MiddleWare ------
app.set('vew engine', 'ejs');

// app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/views'));
app.use(morgan('dev'));
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
app.engine('ejs', ejs_mate);



// ------ Routing to pages -----
app.get('/', function(req, res){
  res.render('main/index.ejs');
});

app.get('/ayu', function(req, res){
  res.render('main/ayu.ejs');
});

app.get('/madc', function(req, res){
  res.render('main/madc.ejs');
});

app.get('/bpink', function(req, res){
  res.render('main/bpink.ejs');
});



// ----- Server Listener ------
app.listen(3000, function(err){
  if(err){ throw err; }
  console.log("Server en CHINGA.");
});

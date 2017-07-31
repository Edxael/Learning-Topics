  // ----- Dependencies -----
var express = require('express');
var app = express();
var body_parser = require('body-parser');
var ejs = require('ejs');
var ejs_mate = require('ejs-mate');
var morgan = require('morgan');


  // ----- MiddleWare Use -----
app.set('view engine', 'ejs');


app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(morgan('dev'));
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));

app.engine('ejs', ejs_mate);


  // ----- Pajes to Serve -----
app.get('/', function(req, res){
  res.render('main/home');
});

app.get('/ayu', function(req, res){
  res.render('main/ayu');
});

app.get('/bpink', function(req, res){
  res.render('main/bpink');
});

app.get('/exid', function(req, res){
  res.render('main/exid');
});



  // ----- Server listener -----
app.listen(3000, function(err){
  if(err){ throw err; }
  console.log("Server en CHINGA & AL 1000%");
});

  // ---- Dependencies -----
var body_parser = require('body-parser');
var ejs = require('ejs');
var ejs_mate = require('ejs-mate');
var express = require('express');
var app = express();
var morgan = require('morgan');


  // ---- MiddleWare ----
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(morgan('dev'));
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
app.engine('ejs', ejs_mate);


  //---- Pages to display -----
app.get('/', function(req, res){
  res.render('main/home');
});

app.get('/ayu', function(req, res){
  res.render('main/ayu');
});

app.get('/bpink', function(req, res){
  res.render('main/bpink');
});


  // ---- Server SetU -------
app.listen(3000, function(err){
  if(err){ throw err; }
  console.log("Server en Chinga y al 1000%");
});

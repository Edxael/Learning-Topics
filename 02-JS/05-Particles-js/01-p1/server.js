var express = require('express');
var app = express();
var morgan = require('morgan');
var ejs = require('ejs');
// var particlesJS = require('particlesjs');


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/views'));
app.use(morgan('dev'));


app.get('/', function(req, res){
  res.render('pages/index.ejs');
});

app.get('/cx', function(req, res){
  res.render('pages/cx.ejs');
});



app.listen(3000, function(err){
  if(err){ throw err; }
  console.log("Server Is Running....");
});

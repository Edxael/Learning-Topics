// ----- Load Dependencies -----
var express = require('express');
var app = express();
var morgan = require('morgan');
var ejs = require('ejs');
var ejs_mate = require('ejs-mate');



// ----- MiddleWare ------
app.set('view enginge', 'ejs');
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/views'));
app.use(morgan('dev'));
app.engine('ejs', ejs_mate);



// ------ Page Routes -----
app.get('/', function(req, res){
  res.render('pages/index.ejs');
});

app.get('/ayu', function(req, res){
  res.render('pages/ayu.ejs');
});

app.get('bpink', function(req, res){
  res.render('/pages/bpink.ejs');
});

app.get('/', function(req, res){
  res.render('pages/madc.ejs');
});



// ------ Server Listenere -----
app.listen(3000, function(err){
  if(err){ throw err }
  console.log("Server Up & Running...");
});

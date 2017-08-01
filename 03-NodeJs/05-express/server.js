var express = require('express');
var app = express();
var body_parser = require('body-parser');
var ejs = require('ejs');
var ejs_mate = require('ejs-mate');
var morgan = require('morgan');


// ----- MiddleWare  ------
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/views'));
app.use(morgan('dev'));
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
app.engine('ejs', ejs_mate);




// ----- Pages to serve -----
app.get('/', function(req, res){
  res.render('pages/index');
});

app.get('/ayu', function(req, res){
  res.render('pages/ayu');
});

app.get('/bpink', function(req, res){
  res.render('pages/bpink')
});



// ----- Server Listening -----
app.listen(3000, function(err){
  if(err){ return err; }
  console.log("Sever en CHINGA & al 1000%");
});

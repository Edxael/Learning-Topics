    // ----- Requres and Imports -----
var express = require('express');
var app = express();
var ejs = require('ejs');
var ejs_mate = require('ejs-mate');
var morgan = require('morgan');     // This library will log in the console all the request involign the server.  
var body_parser = require('body-parser');


    // ----- MiddleWare -----
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/views'));
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
app.use('ejs', ejs_mate);
app.use(morgan('dev'));





    // ----- page Request ------
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



    // ------ Server Listener -----
app.listen(3000, function(err){
  if(err){ throw err }
  console.log("Server UP & LISTENING. on port: 3000");
});

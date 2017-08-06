var express = require('express');
var app = express();
var morgan = require('morgan');
var ejs = require('express');
var ejs_mate = require('ejs-mate');
var mongoose = require('mongoose');
var Singer = require('./dbtemplates/01-temp.js');


// ----- Conecting to Database ------
mongoose.connect('mongodb://root:storeDB1@ds127163.mlab.com:27163/ecommerce', function(err){
if(err){
  console.log(err);
}else{
  console.log("Connected to DataBase");
}
});



app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/views'));
app.use(morgan('dev'));
app.engine('ejs', ejs_mate);


app.get('/', function(req,res){
  res.render('pages/index.ejs');
});

app.get('/ayu', function(req,res){
  res.render('pages/ayu.ejs');
});

app.get('/madc', function(req,res){
  res.render('pages/madc.ejs');
});




app.listen(3000, function(err){
  if(err){ throw err; }
  console.log("Server Up and Running");
});

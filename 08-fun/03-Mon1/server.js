var express = require('express');
var app = express();
var ejs = require('ejs');
var ejs_mate = require('ejs-mate');
var morgan = require('morgan');
var body_parser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./mongoSchemas/user.js');




  // ----- Conecting to Database ------
mongoose.connect('mongodb://root:storeDB1@ds127163.mlab.com:27163/ecommerce', function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Connected to DataBase");
  }
});


  // ------ Middle-Ware ------
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.engine('ejs', ejs_mate);



  // ----- Using Postman ------
app.post('/create-user', function(req, res){
      // --- Creating form  ----
  var user = new User();
      // --- Getting the data from POSTMAN ----
  user.profile.name =req.body.name;
  user.password = req.body.password;
  user.email = req.body.email;
      // ---- Saving data to the DataBase -----
  user.save(function(err){
    if(err) {
      console.log(err);
    }else{
      res.json("Success New user created in DataBase.")
    }
  });
});




  // ------ URL Routin ------

// app.use()

// app.get('/', function(req, res){
//   res.render('pages/index.ejs');
// });
//
// app.get('/ayu', function(req, res){
//   res.render('pages/ayu.ejs');
// });
//
// app.get('/madc', function(req, res){
//   res.render('pages/madc.ejs');
// });



  // ------ Server Listener ------
app.listen(3000, function(err){
  if(err){ throw err; }
  console.log("Server Up & Running");
});

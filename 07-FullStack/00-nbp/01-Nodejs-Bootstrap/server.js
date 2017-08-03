    // Requesting dependencies
var express = require('express');
var app = express();
var ejs = require('ejs');

    // Secondary dependencies
var body_parser = require('body-parser');
var morgan = require('morgan');
var ejs_mate = require('ejs-mate');
var ejsLayouts = require('express-ejs-layouts')



// ---------------------------------------------------
    // MiddleWare
app.set('view engine', 'ejs');

    // Secondary MiddleWare
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(morgan('dev'));
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
app.engine('ejs', ejs_mate);



// ---------------------------------------------------
  // Pages to display.
app.get('/', function(req, res){
  res.render('main/home')
});

app.get('/ayu', function(req, res){
  res.render('ayu')
});

app.get('/koda', function(req, res){
  res.render('main/koda')
});

app.get('/bpink', function(req, res){
  res.render('main/bpink');
});

app.get('/sistar', function(req, res){
  res.render('main/sistar')
});




// ---------------------------------------------------
  // Logg that server is up and Running
app.listen(3000, function(err){
  if(err){ throw err; }
  console.log("Server is Running on Port: 3000");
});





    // BootStrap Getting Started
// UDEMY: Learn to Build Websites using Twitter Bootstrap
// UDEMY: Web Development with BootStrap - 16 Instant
// http://getbootstrap.com/2.3.2/getting-started.html#file-structure


    // Node.js EJS
// https://www.npmjs.com/package/ejs
// https://www.youtube.com/watch?v=BmmJujNQvXw
// https://www.youtube.com/watch?v=RgAseumFyg8
// https://www.youtube.com/watch?v=EYKjBJDPvEU
// https://www.youtube.com/watch?v=zApLyrtYZvs
// https://www.youtube.com/watch?v=kTIUjG6myJ0

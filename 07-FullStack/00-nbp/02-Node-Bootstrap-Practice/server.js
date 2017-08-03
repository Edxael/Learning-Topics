// ------ Dependencies -----------------------------------
var express = require('express');
var app = express();
var ejs = require('ejs');

    // Secondary Dependencies
var ejs_mate = require('ejs-mate');
var morgan = require('morgan');
var body_parser = require('body-parser');



// ----- MiddleWare -----------------------------------------
app.set('view engine', 'ejs');

    // Secondary MiddleWare
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(morgan('dev'));
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
app.engine('ejs', ejs_mate);




// ----- Pages to display ------------------------------------
app.get('/', function(req, res){
  res.render('main/home')
});

app.get('/ayu', function(req, res){
  res.render('main/ayu')
});

app.get('/bpink', function(req, res){
  res.render('main/bpink')
});

app.get('/koda', function(req, res){
  res.render('main/koda')
});



// ----- Log that server is up an running ----------------------
app.listen(3000, function(err){
  if(err){ throw err; }
  console.log("The server is in CHINGA al 1000%");
});







// The CAST CHROME ERROS for Enbeded YOUTUBE Videos
// https://stackoverflow.com/questions/25814914/cast-sender-js-error-failed-to-load-resource-neterr-failed-in-chrome
// https://stackoverflow.com/questions/24490323/google-chrome-cast-sender-error-if-chrome-cast-extension-is-not-installed-or-usi

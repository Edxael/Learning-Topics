
// Basic Express app + Server
// https://expressjs.com/en/starter/hello-world.html
// https://expressjs.com/en/starter/basic-routing.html

  // Requiring dependencies
const express = require('express');
const app = express();


  // Pages to Route
app.get('/', function(req, res){
  res.send('This is the Home Page');
});

app.get('/ayu', function(req, res){
  res.send('Ayumi Hamasaki Page');
});

app.get('/ender', function(req, res){
  res.send('Anderw Ender Wiggin - Page');
});


  // Server Listening
app.listen(3000, function(){
  console.log("El Server en Chinga & al 1000%");
});

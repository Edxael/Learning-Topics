var express = require('express');
var app = express();
var morgan = require('morgan');
var ejs = require('ejs');
var ejs_mate = require('ejs-mate');
var mongoose = require('mongoose');
var body_parser = require('body-parser');
var Book = require('./dbtemps/01-temp1');





  // ----- Conecting to the DataBase ------
mongoose.connect('mongodb://bookuser:book123@ds013564.mlab.com:13564/books1', function(err){
  if(err){
    console.log(err);
  }else {
    console.log("Conected to DataBase.");
  }
});





  // ------ App Middle-Ware ------
app.set('vew engine', 'ejs');
app.use(express.static(__dirname + '/views'));
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.engine('ejs', ejs_mate);





// -------------- POSTING to Documents to the DataBase -------------------

app.post('/books', function(req, res){
  var papiro = new Book();

  papiro.title = req.body.title;
  papiro.author = req.body.author;
  papiro.category = req.body.category;

  console.log("To Send2: ", papiro);
  console.log(" ");

  papiro.save(function(err, data){
    if(err){
      console.log("Error inserting to Database.");
    }else {
      console.log("Data to Send to DataBase:");
      console.log(data);
      console.log("");

      res.send(data);
      console.log("Data Has Been Posted to Doatabase");
      console.log("");
    }
  });
});

    // ------ Another Way -------
      app.post('/book2', function(req, res) {
        Book.create(req.body, function(err, book) {
          if(err) {
            res.send('error saving book');
          } else {
            console.log(book);
            res.send(book);
          }
        });
      });






// --------- Getting Info from DataBase ------------

  // ------ Gettinga all Books in Data Base ------
app.get('/books', function(req, res){
  console.log('Getting all the Books from DB.');
  Book.find({})
  .exec(function(err, data){
    if(err){
      res.send('An Error has Ocurr');
    }else {
      console.log("No Error so Far");
      console.log(data);
      res.json(data);
    }
  });
});

  // ----- Getting ONE Book from DataBase ------
app.get('/one', function(req, res){
  console.log("----> Getting One Book");
  Book.findOne({
    _id:"5986760f2bfdd61bb9961ba7"
  })
  .exec(function(err, data){
    if(err){ throw err; }
    console.log(data);
    res.json(data);
  });
});





// --------- UPDATING A DOCUMENT ------------
app.put('/update', function(req, res){
  Book.findOneAndUpdate({ author: "Orson Scoot" }, {$set: { title: "Battle School 2" }}, { upset: true }, function(err, papiro){
    if(err){ console.log('Error Ocurred'); }
    else{
      console.log(papiro);
      res.send(papiro);
      console.log("Book Updated on Database");
      console.log("");
     }
  });
});






// --------- DELETING A DOCUMENT ------------
app.delete('/delete', function(req, res){
  Book.findOneAndRemove({ title: "Study of th Brain" }, function(err, papiro){
    if(err){ res.send('Error during Deleting'); }
    else{
      console.log(papiro);
      res.send(papiro);
      console.log("Book deleted from DataBase.");
      console.log("");
    }
  })
});




// -------------------- Pages Routing -----------------------
// app.get('/', function(req, res){
//   res.render('pages/index.ejs');
// });
//
// app.get('/ayu', function(req, res){
//   res.render('pages/ayu.ejs');
// });


  // ------ Running Server -------
app.listen(3000, function(err){
  if(err){ throw err; }
  console.log("Server Up & Running...");
});

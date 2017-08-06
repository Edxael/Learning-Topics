var mongoose = require('mongoose');

var SingerTemplate = new mongoose.Schema({
  name: String,
  country: String
});


module.exports = mongoose.model ('singer', SingerTemplate);

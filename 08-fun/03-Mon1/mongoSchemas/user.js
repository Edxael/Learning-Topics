var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
// var Schema = mongoose.Schema;


  // User schema fields
var UserTemplate = new mongoose.Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
  profile: { name: { type: String, default: '' }, picture: { type: String, default: '' } },
  address: String,
  history: [{ date: Date, paid: { type: Number, default: 0 } }]
});


  // Encrypt the Password before send it to DB
UserTemplate.pre('save', function(next){
  var user = this;
  if(!user.isModified('password')) { return next(); }

  bcrypt.genSalt(10, function(err, salt){
    if(err){ return next(err); }
    bcrypt.hash(user.password, salt, null, function(err, hash){
      if(err){ return next(err); }
      user.password = hash;
      next();
    });
  });
});


  // Compara paswords from DB vs User provided
UserTemplate.methods.myComparation = function(password){
  return bcrypt.compareSync(password, this.password);
}


  // Exporting this Schema
module.exports = mongoose.model('User', UserTemplate);

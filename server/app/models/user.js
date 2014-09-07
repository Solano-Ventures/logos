var db = require('../config');
var mongoose = require('mongoose');

var User = new mongoose.Schema({
	email: {
    type: String,
    unique: true,
    required: true
  },
 	password: {
    type: String,
    required: true
  },
 	logos: {
    type: Array
  }
});

// User.pre('save', function(next){
//   var user = this;

//   // User.findOne({email: this.email}, 'email', function(err, results){
//   //   if(err){
//   //     next(err);
//   //   } else if(results){
//   //     console.log('email must be unique!');
//   //   } else {
//   //     next();
//   //   }
//   // })
// })

module.exports = mongoose.model('users', User);

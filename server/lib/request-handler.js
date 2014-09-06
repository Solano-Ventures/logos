var generateLogo = require( '../app/logogen' );
var mongoose = require('mongoose');
var User = require('../app/models/user');

exports.renderIndex = function(req, res) {
  res.status(200).send('Sent to Home Page');
};

exports.redirToIndex = function(req, res) {
  res.redirect('/');
};

exports.sendData = function(req, res) {
	var firstName = req.body.firstname;
	var lastName = req.body.lastName;
	var definedBy = req.body.definedby;
	var color = req.body.color;

  var logo = { logo: generateLogo.logoGen(firstName, lastName, definedBy, color) };
  var jsonLogo = JSON.stringify(logo);
  res.status(201).send(jsonLogo);
};

exports.signup = function(req, res) {
  var email = req.body.email;
  var password = req.body.password;
  // var create;
  var newUser;

  // User.findOne({email: email})
  //   .then(function(email){
  //     if(email){
  //       console.log('email already exists!');
  //       next();
  //     } else {
  //       newUser = {
  //         email: email,
  //         password: password
  //       }
  //       User.create( newUser );
  //     }
  //   })
  newUser = {email: email, password: password};
  return User.create( newUser );
};


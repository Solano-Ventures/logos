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

exports.sendFeed = function(req, res) {
  //Get an Array of ~~20ish user public profiles
  //{firstname, lastname, value, rgba, picture}
  res.status(200).send('sendFeed Received Successfully');
};

exports.signup = function(req, res) {
  var email = req.body.email;
  var password = req.body.password;
  var userlogo = {
    firstname: req.body.firstName,
    lastname: req.body.lastName,
    definedBy: req.body.definedBy,
    color: req.body.color,
    generatedlogo: req.body.logo.logo
  };
  var newUser;
  newUser = {email: email, password: password, logos: [ userlogo ] };
  console.log(newUser);
  res.send('Saved in DB!');
  return User.create( newUser );
};

exports.login = function(req, res) {
  var email = req.body.email;
  var password = req.body.password;
  console.log(email, password);
};

exports.getAccountData = function(req, res){
  User.find({ email:req.body.email }, 'logos', function(err, userData){
    res.status(201).send(userData);
  });
};

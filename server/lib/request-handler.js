var generateLogo = require( '../app/logogen' );

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
  console.log(req.body);
};


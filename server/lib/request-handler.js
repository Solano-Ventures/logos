var generateLogo = require( '../app/logogen' );

exports.renderIndex = function(req, res) {
  res.status(200).send('Sent to Home Page');
};

exports.redirToIndex = function(req, res) {
  res.redirect('/');
};

exports.redirToLogo = function(req, res) {
  res.redirect('/signup')
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

// test post request in terminal using the following command:
// curl -H "Content-Type: application/json" -d '{"firstname":"Chris","lastname":"greatest","definedby":"cash money","color":"RGBA(123,123,123,1.0)"}' localhost:8000/logo

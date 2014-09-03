var generateLogo = require( '../app/logogen' );

exports.renderIndex = function(req, res) {
  res.status(200).send('Sent to Home Page');
};

exports.redirToIndex = function(req, res) {
  res.redirect('/');
};

exports.sendData = function(req, res) {
  var logo = { logo: generateLogo.logoGen() };
  var jsonLogo = JSON.stringify(logo);                                
  res.status(201).send(jsonLogo);
};

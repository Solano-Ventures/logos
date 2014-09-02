var express = require( 'express' );
var path = require( 'path' )

exports.renderIndex = function(req, res) {
  var newPath = path.resolve( __dirname + '/../../client/index.html' )
  console.log( newPath )
  res.sendFile( newPath );
};

exports.redirToIndex = function(req, res) {
  res.redirect('/');
};
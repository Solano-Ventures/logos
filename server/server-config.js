var express = require( 'express' );
var handler = require( './lib/request-handler' );

var app = express();

// serve up the webpage
app.use( express.static(__dirname + '/../client') );

app.get( '/', handler.renderIndex );
app.get( '/*', handler.redirToIndex );

app.post( '/', handler.sendData );

module.exports = app;

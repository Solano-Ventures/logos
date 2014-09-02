var express = require( 'express' );

var handler = require( './lib/request-handler' );

var app = express();

app.get( '/', handler.renderIndex );
app.get( '/*', handler.redirToIndex );

module.exports = app;
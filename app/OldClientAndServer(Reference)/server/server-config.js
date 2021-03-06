var express = require( 'express' );
var handler = require( './lib/request-handler' );
var bodyParser = require('body-parser');

var app = express();

// serve up the webpage
app.use( express.static(__dirname + '/../app') );
app.use( bodyParser.urlencoded({ extended: true }) );
app.use( bodyParser.json() );

app.get( '/', handler.renderIndex );
app.get( '/account', handler.getAccountData );
app.get( '/publicfeed', handler.sendFeed );
app.get( '/*', handler.redirToIndex );
app.post( '/signup', handler.signup );
app.post( '/login' , handler.login );
app.post( '/logo', handler.sendData );
module.exports = app;

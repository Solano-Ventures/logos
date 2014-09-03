var app = require( './server/server-config.js' );

var port = process.env.PORT || 8000;

app.listen( port );

console.log( 'Server now listening on port ' + port );

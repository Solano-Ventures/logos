var db = require('../config');

var User = db.Model.extend({
	email: String,
 	password: String,
 	logos: Array
});

module.exports = User;

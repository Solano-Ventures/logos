var db = require('../config');

var User = db.Model.extend({
	userName: String,
 	password: String,
 	logos: Array
});

module.exports = User;

var db = require('../config');
var mongoose = require('mongoose');

var logoSchema = mongoose.Schema({
 firstName: String,
 lastName: String,
 relatesTo: String,
 color: String,
 result: String // [RGBA(###,###,###,#), ..., RGBA(###,###,###,#)]
});

var Link = mongoose.model('Link', logoSchema);

module.exports = Link;

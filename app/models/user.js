var findOrCreate = require('mongoose-findorcreate');
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var userSchema = new Schema({
    username : { type: String, unique: true },
    email    : { type: String, },
    avatarUrl: { type: String, },
    createAt : { type: Date, default: Date.now }
});

/* load plugin */
userSchema.plugin( findOrCreate );

module.exports = mongoose.model('user', userSchema);
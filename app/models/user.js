var mongoose    = require('mongoose'),
    Schema      = mongoose.Schema,
    userSchema,
    user;

userSchema = new Schema({
    displayName: {
        type: String,
        require: true
    },
    userName: {
        type: String,
        require: true
    },
    email: {
        type: String,
    },
    profileUrl: {
        type: String,
    },
    avatarUrl: {
        type: String,
        require : true
    },
    createAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = user = mongoose.model('user', userSchema);

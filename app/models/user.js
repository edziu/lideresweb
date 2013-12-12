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
        require: true
    },
    profileUrl: {
        type: String,
        require: true
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

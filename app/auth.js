'use strict';
var GitHubStrategy = require('passport-github').Strategy;
var UserModel = require('./models').UserModel;

function findOrCreate ( username, profile, cb ) {
    UserModel.findOrCreate({ username: username }, profile, cb);
}

function parserProfile ( profile ) {
    return {
        username : profile.userName,
        email    : profile.email,
        avatarUrl: profile.avatarUrl
    };
}

exports.githubAuth = function ( app, passport ) {
    passport.use(new GitHubStrategy({
        clientID     : app.get('clientId'),
        clientSecret : app.get('clientSecret'),
        callbackURL  : '/auth/github/callback'
    }, function(accessToken, refreshToken, profile, done) {
        profile = parserProfile( profile );
        findOrCreate(profile.userName, profile, done);
    }));

    passport.serializeUser(function(user, done) {
        done(null, user._id);
    });

    passport.deserializeUser(function( id , done) {
        UserModel.findOne({ '_id': id }, done);
    });
};

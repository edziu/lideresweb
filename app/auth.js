'use strict';
var GitHubStrategy = require('passport-github').Strategy;
var UserModel = require('./models').UserModel;

function findOrCreate ( profile, cb ) {
    UserModel.findOrCreate({ username: profile.username }, profile, cb);
}

function parserProfile ( profile ) {
    return {
        username : profile.username,
        email    : profile.emails[0].value,
        avatarUrl: profile._json.avatar_url
    };
}

exports.githubAuth = function ( app, passport ) {
    passport.use(new GitHubStrategy({
        clientID     : app.get('clientId'),
        clientSecret : app.get('clientSecret'),
        callbackURL  : '/auth/github/callback'
    }, function(accessToken, refreshToken, profile, done) {
        profile = parserProfile( profile );
        findOrCreate(profile, done);
    }));

    passport.serializeUser(function(user, done) {
        done(null, user._id);
    });

    passport.deserializeUser(function( id , done) {
        UserModel.findOne({ '_id': id }, done);
    });
};

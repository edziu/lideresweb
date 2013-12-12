'use strict';

var path           = require('path'),
    express        = require('express'),
    passport       = require('passport'),
    GitHubStrategy = require('passport-github').Strategy;

var app = module.exports = express();

app.configure(function (){
    app.set('port', 3000);
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');
    app.set('view cache', false);
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.cookieParser());
    app.use(express.session({
        secret: 'SECRET'
    }));
    app.use(express.session({secret: 'SECRET'}));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, '..', 'public')));
});

passport.use(new GitHubStrategy({
    clientID: '',
    clientSecret: '',
    callbackURL: '/auth/github/callback'
}, function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
}));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

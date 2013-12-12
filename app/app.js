'use strict';

var path     = require('path');
var auth     = require('./auth');
var express  = require('express');
var passport = require('passport');

var app = module.exports = express();

app.configure(function (){
    app.set('port', 3000);
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');
    app.set('view cache', false);
    /* env */
    app.set('clientId', process.env.clientId);
    app.set('clientSecret', process.env.clientSecret);
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.cookieParser());
    app.use(express.session({ secret: 'SECRET' }));
    app.use(express.session({ secret: 'SECRET' }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, '..', 'public')));
});

/* authentication */
auth.githubAuth( app, passport );

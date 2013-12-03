'use strict';

var passport        = require('passport'), 
    indexController = require('../controller/index');

var logoutController = function(req, res){
    req.logout();
    res.redirect('/');
}

module.exports = function( app ){
    app.get('/', indexController);
    
    app.get('/logout', logoutController);
    app.get('/auth/github', passport.authenticate('github'));
    app.get('/auth/github/callback', passport.authenticate('github', {successRedirect: '/', failureRedirect: '/login' }));
}

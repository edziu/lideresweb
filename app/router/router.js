'use strict';

var passport = require('passport'),
    indexController = require('../controller/index'),
    userPostsController = require('../controller/userPosts'),
    recentsController = require('../controller/recents');

var logoutController = function(req, res) {
    req.logout();
    res.redirect('/');
};

module.exports = function(app) {
    app.get('/', indexController);
    app.get('/posts/:user', userPostsController);
    app.get('/recents', recentsController);
    
    //app.post('/post', createPostController);

    app.get('/logout', logoutController);
    app.get('/auth/github', passport.authenticate('github'));
    app.get('/auth/github/callback', passport.authenticate('github', {
        successRedirect: '/',
        failureRedirect: '/login'
    }));
};

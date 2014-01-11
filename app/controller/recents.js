'use strict';

var post = require('../models/post');

module.exports = function(req, res){
    post.find().sort({date: -1}).limit(5).exec(function( err, posts ){
        if(err) {
            return res.send(500);
        }
        res.send(posts);
    });
};
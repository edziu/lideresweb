var post = require('../models/post');

module.exports = function(req, res){
    post.find({author: req.params.user}, function(err, posts){
        if(err) return res.send(500);   
        res.send(posts);
    });
};

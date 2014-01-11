var post = require('..models/post');

module.exports = function(req, res){
    post.find().limit(20).exec(function( err, posts ){
        if(err) return res.send(500);
        res.send(posts);
    });
};

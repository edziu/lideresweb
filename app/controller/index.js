'use strict';

module.exports = function(req, res){
    res.render('index', {
        title: "Blog",
        user: req.user
    });
}

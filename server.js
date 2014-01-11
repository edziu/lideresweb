'use strict';

var http     = require('http');
var app      = require('./app/app');
var mongoose = require('mongoose');
var server   = http.createServer( app );
var router   = require('./app/router/router');

router( app );

mongoose.connect('mongodb://127.0.0.1:27017/blog');

function error( err ) {
    console.error(err);
    process.exit(-1);
}

server.listen(app.get('port'), function(err){
    if( err ) { error( err ); }
<<<<<<< HEAD
    console.log('Server running at http:127.0.0.1:'+app.get('port') + '/');
});
=======
    console.log('Server running at http:127.0.0.1:' + app.get('port') + '/');
});

>>>>>>> fd4edf9a61763e0ddc5f12a3e79581136e4d4623

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
    console.log('Server running at http:127.0.0.1:' + app.get('port') + '/');
});

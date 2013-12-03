'use strict';

var http    = require('http'),
    app     = require('./app/app'),
    server  = http.createServer( app );

var router = require('./app/router/router');
router( app );

server.listen(app.get('port'), function(err){
    if(err){
        console.error(err);
        process.exit(-1);
    }
    console.log('Server running at http:127.0.0.1:'+app.get('port') + '/');
});

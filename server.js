var http = require('http')

var server = http.createServer();

server.on('request', function (req, rsp) {

    console.log('request event');


    rsp.writeHead(200, {'Content-Type' : 'text/plain'});
    rsp.end('Hello World\n');

});

server.on('connection', function () {

    console.log('connection event');

});

server.listen(80, function(){
    console.log('listening event');
});

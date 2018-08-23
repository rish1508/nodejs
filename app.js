var http = require('http');
// method to create a server
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain' })
    // body
    res.end('Hello world\n');
}).listen(1337, '127,0,0,1');
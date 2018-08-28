var http = require('http');
// polling the file from ther server and sending it to response stream
var fs = require('fs');
// method to create a server
http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type': 'text/html' })
    // var html = fs.readFileSync(__dirname + '/index.htm','utf8');
    //var message = 'Hello World....';
    //html = html.replace('{message}', message);
    // body
    //res.end(html);
    // try to use streams as much as possible to improve performance if it is a big file
    // so instead of sending whole file, it send the file in chunks in stream 
    fs.createReadStream(__dirname + '/index.htm').pipe(res);
}).listen(8080, '127.0.0.1');
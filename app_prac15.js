var http = require('http');
// polling the file from ther server and sending it to response stream
var fs = require('fs');
// method to create a server
http.createServer(function(req, res){
    if(req.url === '/'){
        fs.createReadStream(__dirname + '/index.htm').pipe(res);
    }
    else if(req.url === '/api'){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var obj = {
            firstname : 'Rishabh',
            lastname : 'Gupta'
        };
        res.end(JSON.stringify(obj));
    }else{
        res.writeHead(404);
        res.end();
    }
}).listen(8080, '127.0.0.1');

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){

    // checking with path 
    switch(req.url){
        case '/':
        var file = fs.createReadStream(__dirname + '/index.html', 'utf-8');
        file.pipe(res);
        break;

        case '/api' :
        res.writeHead(200, { 'Content-Type': 'application/json'});
        var obj = {
            firstName: 'John',
            lastName: 'Doe'
        };

        res.end(JSON.stringify(obj));
        break;

        default:
        res.writeHead(404);
        res.end();
        break;
    }

    
}).listen(1337);
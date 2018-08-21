var http = require('http');
var fs = require('fs');

http.createServer(function(request, response){
  
    response.writeHead(200, { 'Content-Type': 'text/html'});
    var html = fs.readFileSync(__dirname + '/index.html', 'utf8');
    var message = 'Manish';
    html = html.replace('{Message}', message);
    response.end(html);
}).listen(1337);
var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/stream.txt', { encoding: 'utf-8' });

var writable = fs.createWriteStream(__dirname + '/streamscopy.txt');

var gzip = zlib.createGzip();

var compressed = fs.createWriteStream(__dirname + '/stream.txt.gz');

//pipe readable to writeable 
readable.pipe(writable);

//pipe readable to gzip and pipe outup to file
readable.pipe(gzip).pipe(compressed);
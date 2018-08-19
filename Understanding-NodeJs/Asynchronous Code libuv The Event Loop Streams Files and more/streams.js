var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/stream.mp4', { encoding: 'utf-8', highWaterMark: 16 * 1024});

var writable = fs.createWriteStream(__dirname + '/stream-copy.mp4');

readable.on('data', function(chunk){
  console.log(chunk);
  writable.write(chunk)
})
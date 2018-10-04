var fs = require('fs');

fs.readFile('app/temp.txt', function(err, buf) {
  console.log(buf.toString());
});
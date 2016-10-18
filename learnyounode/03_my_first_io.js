var fs = require("fs");

var args = process.argv[2];

var result = fs.readFileSync(args, 'utf8').split('\n').length - 1;

console.log(result);

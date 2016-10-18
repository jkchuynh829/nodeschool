var fs = require('fs');
var path = require('path');

var dirName = process.argv[2];
var filter = "." + process.argv[3];

fs.readdir(dirName, 'utf8', (err, data) => {
	err ?
		console.error(err) :
		data.filter(e => path.extname(e) === filter)
			.forEach(e => console.log(e));
});





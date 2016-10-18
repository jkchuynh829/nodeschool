module.exports = function(input, callback) {
	return input.reduce(function(acc, curr) {
		acc.push(callback(curr));
		return acc;
	}, []);
}


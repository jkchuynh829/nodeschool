module.exports = function(inputWords) {
	return inputWords.reduce(function(acc, curr) {
		acc[curr] ? ++acc[curr] : acc[curr] = 1;
		return acc;
	}, {});
}
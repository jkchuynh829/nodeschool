function repeat(operation, num) {
	if(num <= 0) {
		return
	}
	if(num % 2 === 0) {
		setTimeout(function() {
			operation();
		})
	}
	return repeat(operation, --num);
}

module.exports = repeat

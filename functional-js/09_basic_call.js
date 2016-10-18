module.exports = function() {
	return Array.prototype.slice.call(arguments)
	.filter(x => Object.prototype.hasOwnProperty.call(x, 'quack'))
	.length;
}

function() {
	poop = 'poop';
}
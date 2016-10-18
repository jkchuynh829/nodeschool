function Spy(target, method) {
	//old functionality
	let storeMethod = target[method];
    let spy = {count: 0};
 	//new functionality
    target[method] = function () {
        spy.count++;
        return storeMethod.apply(this, arguments);
    }
    return spy;
}

module.exports = Spy;

let operation = process.argv[2];
let num = process.argv[3];

function repeat(operation, num) {
    return function() {
        if (num <= 0) return
        operation()
        return repeat(operation, --num)
    }
}

function trampoline(fn) {
  if(fn instanceof Function) {
    fn = fn();
  }
}

module.exports = function(operation, num) {
    return trampoline(function() {
      return repeat(operation, num);
    });
}

var args = process.argv.slice(2).reduce((acc, curr) => +acc + +curr);
console.log(args);
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x => Number(x));

input.shift();
input.sort((a, b) => a-b);
let str = '';

input.forEach(x => str += `${x}\n`);
console.log(str.trim());
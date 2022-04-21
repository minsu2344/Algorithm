const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const count = input[0];
const num = input[1].split(' ');

const min = Math.min(...num);
const max = Math.max(...num);
console.log(`${min} ${max}`);
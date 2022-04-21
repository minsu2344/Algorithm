const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const count = Number(input[0]);
const numbers = input[1].split('');
console.log(numbers.reduce((a, b) => Number(a)+Number(b)));
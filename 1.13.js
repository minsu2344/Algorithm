const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.forEach(x => {
  let numbers = x.split(' ');
  console.log(Number(numbers[0])+Number(numbers[1]));
})
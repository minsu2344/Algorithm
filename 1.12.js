const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const count = Number(input[0]);
for(let i=1; i<=count; i++) {
  let numbers = input[i].split(' ');

  console.log(Number(numbers[0])+Number(numbers[1]));
}

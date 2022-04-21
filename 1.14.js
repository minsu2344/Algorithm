const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i of input) {
  let numbers = i.split(' ');
  if(!(Number(numbers[0])||Number(numbers[1]))) {
    break;
  }
  console.log(Number(numbers[0]) + Number(numbers[1]));
}
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const arr = [];
const count = Number(input[0]);
let result = ''
for(let i=1; i<=count; i++) {
  printCount = Number(input[i].split(' ')[0]);
  str = input[i].split(' ')[1];

  for(let j=0; j<str.length; j++) {
    result += str[j].repeat(printCount);
  }

  result += '\n';
}

console.log(result);
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.pop();

for(let i=0; i<input.length; i++) {
  const rev = input[i].split('').reverse().join('');
  console.log(rev === input[i] ? 'yes' : 'no');
}
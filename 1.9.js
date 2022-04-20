const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const count = Number(input[0]);
const arr = [];

for(let i=1; i<=count; i++) {
  arr.push(input[i]);
}

for(let i=0; i<arr.length; i++) {
  let cur = arr[i];
  let score = 1;
  let sum = 0;
  for(let j=0; j<cur.length; j++) {
    if(cur[j] === 'O') {
      sum += score;
      score++;
    }
    else {
      score = 1;
    }
  }
  console.log(sum);
}
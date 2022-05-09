// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input = ['4', '1 3 5 7'];

const num = input.pop().split(' ').map(x => Number(x));
let primeCount = 0;

num.forEach(x => {
  if(x===1) return;
  let isPrime = 1;
  for(let i=2; i<x; i++) {
    if(x%i === 0) {
      isPrime = 0
      break;
    }
  }
  if(isPrime === 1) primeCount++;
});

console.log(primeCount);
const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x => Number(x));

function commonFactor(a, b) {
  let i = a<b ? a : b;
  while(1) {
    if(i === 1) return i;
    if(a%i === 0 && b%i ===0) return i;
    i--;
  }
}

let result = commonFactor(a, b);

console.log(result);
console.log(a*b/result);
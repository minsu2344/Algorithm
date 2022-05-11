const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// const input = ['10 500', '93 181 245 214 315 36 185 138 216 295']

const result = Number(input[0].split(' ')[1]);
const card = input[1].split(' ').map(x => Number(x));
let answer = 0;

for(let i=0; i<card.length-2; i++) {
  for(let j=i+1; j<card.length-1; j++) {
    for(let k=j+1; k<card.length; k++) {
      let sum = card[i] + card[j] + card[k];
      if(sum <= result && sum > answer) answer = sum;
    }
  }
}

console.log(answer);
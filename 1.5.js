// 최대값 인덱스
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let n = 0;

rl.on('line', line => {
  n++;
  input.push(parseInt(line));
  if(n === 9) {
    rl.close();
  }
}).on('close', () => {
  let indexInput = [];
  input.forEach(item => indexInput.push(item));
  input.sort((a, b) => a-b);
  const max = input[input.length-1];
  console.log(max);
  console.log(indexInput.indexOf(max)+1);
  process.exit();
});
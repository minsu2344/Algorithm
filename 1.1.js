// 입력 받은 두 숫자 나누기
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', line => {
  input = line.split(' ');
  rl.close();
}).on('close', () => {
  console.log((input[0]/input[1]).toFixed(9));
  process.exit();
});
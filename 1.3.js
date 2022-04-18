// 카오링 스털
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
  let a = parseInt(input[0]);
  let b = parseInt(input[1]);
  if(a > b) {
    console.log('>');
  }
  else if(a === b) {
    console.log('==');
  }
  else {
    console.log('<');
  }
  process.exit();
});
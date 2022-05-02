const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = [
//   '9 8',
//   'WBWBWBWB',
//   'BWBWBWBW',
//   'WBWBWBWB',
//   'BWBWBWBW',
//   'WBWBWBWB',
//   'BWBWBWBW',
//   'WBWBWBWB',
//   'BWBWBWBW',
//   'BWBWBWBW'
// ];

const white = [
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
];
const black = [
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
];

const block = input.shift().split(' ');
const row = block.shift();
const col = block.shift();
const board = [];
const countBox = [];

for(let i=0; i<row; i++) {
  board[i] = input.shift();
}

for(let i=0; i<=row-8; i++) {
  for(let j=0; j<=col-8; j++) {
    check(i,j);
  }
}

console.log(Math.min(...countBox));

function check(x, y) {
  let blackCount = 0;
  let WhiteCount = 0;
  for(let i=x; i<x+8; i++) {
    for(let j=y; j<y+8; j++) {
      if(board[i][j] !== black[i-x][j-y]) blackCount++;
      if(board[i][j] !== white[i-x][j-y]) WhiteCount++;
    }
  }
  countBox.push(blackCount);
  countBox.push(WhiteCount);
}
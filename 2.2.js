const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// const input = [
//   '13',
//   'but',
//   'i',
//   'want',
//   'horese',
//   'no',
//   'more',
//   'no',
//   'more',
//   'it',
//   'cannot',
//   'wait',
//   'im',
//   'youres'
// ];

const count = Number(input.shift());
const setInput = new Set(input);
const noOverlapInput = [...setInput];

noOverlapInput.sort((a, b) => {
  if(a.length > b.length) return 1;
  else if(a.length === b.length) {
    if(a > b) return 1;
    return -1;
  }
  return -1;
})

for(let i=0; i<noOverlapInput.length; i++) {
  console.log(noOverlapInput[i]);
}
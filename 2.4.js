const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// const input = ['5', '4 1 5 2 3', '5', '1 3 7 9 5'];

// const [standardCount, standardArr, count, arr] = input.map(x => x.split(' ').map(x => Number(x)));

// standardArr.sort((a,b) => a-b);

// function binarySearch(list, target, left, right) {
//   while(left !== right) {
//     let mid = Math.floor((right+left)/2);
//     if(target === list[mid]) {
//       return 1;
//     }
//     else if(target < list[mid]) {
//       right = mid-1;
//       continue;
//     }
//     else {
//       left = mid+1;
//       continue;
//     }
//   }
//   return 0;
// }

// const result = arr.map(x => binarySearch(standardArr, x, 0, standardArr.length));

// console.log(result.join('\n'));

const [N, A, M, B] = input.map(x => x.split(' '));

const array = new Set(A);

const result = B.map(x => array.has(x) ? 1 : 0);

console.log(result.join('\n'));
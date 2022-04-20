const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const str = input.join('');
str === '12345678' ? console.log('ascending') : (str === '87654321' ? console.log('descending') : console.log('mixed'));
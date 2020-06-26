'use strict'

const fs = require('fs');
const challenge1 = require('./challenges');

let rawData = fs.readFileSync('testCases.json');
let data = JSON.parse(rawData);

let arr = data['challenge1']['case1'];
console.log('solution for challenge 1, test case 1:');
console.log(challenge1.solveChallenge1(arr), '\n');

arr = data['challenge1']['case2'];
console.log('solution for challenge 1, test case 2:');
console.log(challenge1.solveChallenge1(arr), '\n');

arr = data['challenge2']['case1'];
console.log('solution for challenge 2, test case 1:');
console.log(challenge1.solveChallenge2(arr), '\n');

arr = data['challenge3']['case1'];
console.log('solution for challenge 3, test case 1:');
console.log(challenge1.solveChallenge3(arr), '\n');
'use strict'

const fs = require('fs');
const challenge1 = require('./challenge1');

let rawData = fs.readFileSync('testCases.json');
let data = JSON.parse(rawData);

let arr = data['challenge1']['case1'];
console.log('solution for challenge 1, test case 1:');
console.log(challenge1.solveChallenge1(arr), '\n');

arr = data['challenge1']['case2'];
console.log('solution for challenge 1, test case 2:');
console.log(challenge1.solveChallenge1(arr), '\n');
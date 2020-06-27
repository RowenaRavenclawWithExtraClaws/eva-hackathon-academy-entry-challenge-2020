'use strict'

const fs = require('fs');
const challenges = require('./challenges');

let rawData = fs.readFileSync('testCases.json');
let data = JSON.parse(rawData);

function printMat(arr) {
    arr.forEach(element => {
        console.log(element);
    });
    console.log();
}

let arr = data['challenge1']['case1'];
console.log('challenge 1, test case 1:');
printMat(arr);
console.log('solution for challenge 1, test case 1:');
let sol = challenges.solveChallenge1(arr);
printMat(sol);
console.log('-------------------------------------------------------\n');

arr = data['challenge1']['case2'];
console.log('challenge 1, test case 2:');
printMat(arr);
console.log('solution for challenge 1, test case 2:');
sol = challenges.solveChallenge1(arr);
printMat(sol);
console.log('-------------------------------------------------------\n');

arr = data['challenge2']['case1'];
console.log('challenge 2, test case 1:');
printMat(arr);
console.log('solution for challenge 2, test case 1:');
sol = challenges.solveChallenge2(arr);
printMat(sol);
console.log('-------------------------------------------------------\n');

arr = data['challenge3']['case1'];
console.log('challenge 3, test case 1:');
printMat(arr);
console.log('solution for challenge 3, test case 1:');
sol = challenges.solveChallenge3(arr);
printMat(sol);
console.log('-------------------------------------------------------\n');

arr = data['challenge4']['case1'];
console.log('challenge 4, test case 1:');
printMat(arr);
console.log('solution for challenge 4, test case 1:');
sol = challenges.solveChallenge4(arr);
printMat(sol);
console.log('-------------------------------------------------------\n');

arr = data['challenge5']['case1'];
console.log('challenge 5, test case 1:');
printMat(arr);
console.log('solution for challenge 5, test case 1:');
sol = challenges.solveChallenge5(arr);
for (let entry in sol) {
    console.log(entry, ':');
    printMat(sol[entry]);
}
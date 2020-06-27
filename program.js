'use strict'

const readlineSync = require('readline-sync');
const challenges = require('./challenges');

function printMat(arr) {
    arr.forEach(element => {
        console.log(element);
    });
    console.log();
}

let challengeNum = readlineSync.questionInt('enter the number of challenge (1 through 5):\n');

switch (challengeNum) {
    case 1:
        let arr1 = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

        arr1[0][0] = readlineSync.questionInt('Enter entry at row 0, column 0 :\n');
        arr1[0][1] = readlineSync.questionInt('Enter entry at row 0, column 1 :\n');
        arr1[0][2] = readlineSync.questionInt('Enter entry at row 0, column 2 :\n');
        arr1[1][0] = readlineSync.questionInt('Enter entry at row 1, column 0 :\n');

        console.log('Your input is :');
        printMat(arr1);

        console.log('Solution is :');
        printMat(challenges.solveChallenge1(arr1));

        break;

    case 2:
        let arr2 = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

        arr2[0][1] = readlineSync.questionInt('Enter entry at row 0, column 1 :\n');
        arr2[0][2] = readlineSync.questionInt('Enter entry at row 0, column 2 :\n');
        arr2[1][0] = readlineSync.questionInt('Enter entry at row 1, column 0 :\n');
        arr2[2][2] = readlineSync.questionInt('Enter entry at row 2, column 2 :\n');

        console.log('Your input is :');
        printMat(arr2);

        console.log('Solution is :');
        printMat(challenges.solveChallenge2(arr2));

        break;

    case 3:
        let arr3 = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

        arr3[1][0] = readlineSync.questionInt('Enter entry at row 1, column 0 :\n');
        arr3[1][2] = readlineSync.questionInt('Enter entry at row 1, column 2 :\n');
        arr3[2][1] = readlineSync.questionInt('Enter entry at row 2, column 1 :\n');

        console.log('Your input is :');
        printMat(arr3);

        console.log('Solution is :');
        printMat(challenges.solveChallenge3(arr3));

        break;

    case 4:
        let arr4 = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

        arr4[1][2] = readlineSync.questionInt('Enter entry at row 1, column 2 :\n');
        arr4[2][1] = readlineSync.questionInt('Enter entry at row 2, column 1 :\n');

        console.log('Your input is :');
        printMat(arr4);

        console.log('Solution is :');
        printMat(challenges.solveChallenge4(arr4));

        break;

    case 5:
        let arr5 = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

        arr5[1][2] = readlineSync.questionInt('Enter entry at row 1, column 2 :\n');
        arr5[2][1] = readlineSync.questionInt('Enter entry at row 2, column 1 :\n');

        console.log('Your input is :');
        printMat(arr5);

        console.log('Solution is :');
        let sol = challenges.solveChallenge5(arr5);

        for (let entry in sol) {
            console.log(entry, ':');
            printMat(sol[entry]);
        }

        break;
}
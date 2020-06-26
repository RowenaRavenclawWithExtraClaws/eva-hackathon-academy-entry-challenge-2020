'use strict'

// input should be a 2d-array of size 3 x 3 with entries e00, e01, e02 and e10 has numbers, the rest is 0
// for eg: e01 is the entry at row 0 and column 1

// challenge 1
/*
input eg: 
[
    [e00, e01, e02]
    [e10,   0,   0]
    [0  ,   0,   0]
]
*/

/*
output eg:
[
    [e00, e01, e02]
    [e10, e11, e12]
    [e20, e21, e22]
]
*/

let solution1 = (arr) => {
    let e00 = arr[0][0];
    let e01 = arr[0][1];
    let e02 = arr[0][2];
    let e10 = arr[1][0];

    let sum = arr[0][0] + arr[0][1] + arr[0][2];

    let e20 = sum - (e00 + e10);
    let e11 = sum - (e02 + e20);
    let e12 = sum - (e10 + e11);
    let e22 = sum - (e02 + e12);
    let e21 = sum - (e20 + e22);

    arr[2][0] = e20;
    arr[1][1] = e11;
    arr[1][2] = e12;
    arr[2][2] = e22;
    arr[2][1] = e21;

    return arr;
}

// challenge 2
/*
input eg:
[
    [0  , e01, e02]
    [e10,   0,   0]
    [0  ,   0, e22]
]
*/

/*
output eg:
[
    [e00, e01, e02]
    [e10, e11, e12]
    [e20, e21, e22]
]
*/

let solution2 = (arr) => {
    let e01 = arr[0][1];
    let e02 = arr[0][2];
    let e10 = arr[1][0];
    let e22 = arr[2][2];

    let e11 = e01 + e02 - e22;
    let e21 = e11 + e02 - e22;
    let sum = e01 + e11 + e21;

    let e00 = sum - (e01 + e02);
    let e20 = sum - (e00 + e10);
    let e12 = sum - (e10 + e11);

    arr[0][0] = e00;
    arr[1][1] = e11;
    arr[1][2] = e12;
    arr[2][0] = e20;
    arr[2][1] = e21;

    return arr;
}

// challenge 3
/*
input eg:
[
    [0  ,   0,   0]
    [e10,   0, e12]
    [0  , e21,   0]
]
*/

/*
output eg:
[
    [e00, e01, e02]
    [e10, e11, e12]
    [e20, e21, e22]
]
*/

let solution3 = (arr) => {
    let e10 = arr[1][0];
    let e12 = arr[1][2];
    let e21 = arr[2][1];

    let e01 = e10 + e12 - e21;
    let e20 = (2 * e12 + e10 - e21) / 2;
    let e02 = e10 + e12 - e20;
    let sum = (e10 + e20 + e01 + e21 + e02 + e12) / 2;

    let e00 = sum - (e10 + e20);
    let e11 = sum - (e01 + e21);
    let e22 = sum - (e02 + e12);

    arr[0][1] = e01;
    arr[2][0] = e20;
    arr[0][2] = e02;
    arr[0][0] = e00;
    arr[1][1] = e11;
    arr[2][2] = e22;

    return arr;
}

exports.solveChallenge1 = solution1;
exports.solveChallenge2 = solution2;
exports.solveChallenge3 = solution3;
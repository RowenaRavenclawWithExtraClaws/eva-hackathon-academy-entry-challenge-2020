'use strict'

// input should be a 2d-array of size 3 x 3 with entries e00, e01, e02 and e10 has numbers, the rest is 0
// for eg: e01 is the entry at row 0 and column 1

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

exports.solveChallenge1 = solution1;


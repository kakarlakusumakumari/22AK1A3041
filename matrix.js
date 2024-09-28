// Function to add two matrices
function addMatrices(A, B) {
    let result = [];
    for (let i = 0; i < A.length; i++) {
        result[i] = [];
        for (let j = 0; j < A[0].length; j++) {
            result[i][j] = A[i][j] + B[i][j];
        }
    }
    return result;
}

// Function to subtract two matrices
function subtractMatrices(A, B) {
    let result = [];
    for (let i = 0; i < A.length; i++) {
        result[i] = [];
        for (let j = 0; j < A[0].length; j++) {
            result[i][j] = A[i][j] - B[i][j];
        }
    }
    return result;
}

// Function to multiply two matrices
function multiplyMatrices(A, B) {
    let result = [];
    for (let i = 0; i < A.length; i++) {
        result[i] = [];
        for (let j = 0; j < B[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < A[0].length; k++) {
                sum += A[i][k] * B[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}

// Function to calculate the trace of a matrix
function calculateTrace(A) {
    let trace = 0;
    for (let i = 0; i < A.length; i++) {
        trace += A[i][i];
    }
    return trace;
}

// Example usage:
let A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let B = [[9, 8, 7], [6, 5, 4], [3, 2, 1]];

console.log("Matrix A:");
console.log(A);
console.log("Matrix B:");
console.log(B);

console.log("Addition:");
console.log(addMatrices(A, B));

console.log("Subtraction:");
console.log(subtractMatrices(A, B));

console.log("Multiplication:");
console.log(multiplyMatrices(A, B));

console.log("Trace of Matrix A:");
console.log(calculateTrace(A));



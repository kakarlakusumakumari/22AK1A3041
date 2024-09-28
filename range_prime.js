function printPrimeNumbers(start, end) {
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
// Example usage:
let start = 1;
let end = 20;
console.log(`Prime numbers between ${start} and ${end}:`);
printPrimeNumbers(start, end);

function classifyNumber(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    if (sum === n) {
        return "Perfect";
    } else if (sum > n) {
        return "Abundant";
    } else {
        return "Deficient";
    }
}

// Example usage:
let num = 12;
console.log(num + " is a " + classifyNumber(num) + " number.");

num = 28;
console.log(num + " is a " + classifyNumber(num) + " number.");

num = 15;
console.log(num + " is a " + classifyNumber(num) + " number.");


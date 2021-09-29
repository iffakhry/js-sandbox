let numCalculations = 0;

function fibonacci(n) {
    numCalculations++;
    if (n < 2) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(50));
console.log(numCalculations);
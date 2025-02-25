// Recursive function to calculate factorial
const factorial = (n) => {
    if (n === 0 || n === 1) return 1; // Base case: factorial of 0 or 1 is 1
    return n * factorial(n - 1); // Recursive case
};

// Test cases
console.log(`Factorial of 0: ${factorial(0)}`);
console.log(`Factorial of 1: ${factorial(1)}`);
console.log(`Factorial of 5: ${factorial(5)}`);
console.log(`Factorial of 7: ${factorial(7)}`);



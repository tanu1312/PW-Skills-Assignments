// Function to curry another function
const curry = (fn) => {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args); // Execute the original function when all arguments are provided
        } else {
            return (...nextArgs) => curried(...args, ...nextArgs); // Return a function to collect more arguments
        }
    };
};

// Example function to add two numbers
const add = (a, b) => a + b;

// Creating a curried version of the add function
const curriedAdd = curry(add);

// Test cases
console.log(curriedAdd(5)(3)); // Output: 8
console.log(curriedAdd(10)(20)); // Output: 30


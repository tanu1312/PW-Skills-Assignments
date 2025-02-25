// Outer function that takes a parameter
const outerFunction = (outerParam) => {
    let outerVariable = "I'm inside outerFunction"; // Variable declared inside outerFunction

    // Inner function that accesses both outerParam and outerVariable
    return function innerFunction(innerParam) {
        console.log(`Outer Parameter: ${outerParam}`);
        console.log(`Outer Variable: ${outerVariable}`);
        console.log(`Inner Parameter: ${innerParam}`);
    };
};

// Create an instance of innerFunction with 'Hello' as the outer parameter
const closureExample = outerFunction("Hello");

// Call the inner function with an argument
closureExample("World");

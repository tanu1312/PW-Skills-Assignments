// Function to test a regex pattern against a string
const testRegex = (pattern, str) => {
    const regex = new RegExp(pattern); // Create a regex object
    return regex.test(str); // Check if the string matches the pattern
};

// Test cases
console.log(testRegex("\\d+", "The price is 100 dollars")); // true (matches numbers)
console.log(testRegex("hello", "Hello world")); // false (case-sensitive)
console.log(testRegex("hello", "hello world")); // true (matches "hello")
console.log(testRegex("^[A-Z]", "Hello")); // true (string starts with an uppercase letter)
console.log(testRegex("^[A-Z]", "hello")); // false (string starts with a lowercase letter)
console.log(testRegex("\\s", "Hello World")); // true (contains whitespace)
console.log(testRegex("apple|banana", "I love banana")); // true (matches "banana")

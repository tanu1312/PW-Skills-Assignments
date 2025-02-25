// Function to find matches for different character classes in a string
const findMatches = (pattern, str) => {
    const regex = new RegExp(pattern, "g"); // Create a global regex
    return str.match(regex) || []; // Return matches or an empty array if no matches found
};

// Test string
const testString = "Hello123!@# World_456$%^";

// Test cases
console.log("Digits:", findMatches("\\d", testString)); // Matches digits (0-9)
console.log("Uppercase Letters:", findMatches("[A-Z]", testString)); // Matches uppercase letters
console.log("Lowercase Letters:", findMatches("[a-z]", testString)); // Matches lowercase letters
console.log("Special Characters:", findMatches("[^a-zA-Z0-9\\s]", testString)); // Matches special characters

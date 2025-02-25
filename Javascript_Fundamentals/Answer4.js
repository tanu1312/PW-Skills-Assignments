// Function to extract specific groups from a matched regex pattern
const extractGroups = (pattern, str) => {
    const regex = new RegExp(pattern); // Create regex object
    const match = str.match(regex); // Find match
    
    if (match) {
        return {
            fullMatch: match[0], // Entire matched string
            day: match[1],       // First capturing group (Day)
            month: match[2],     // Second capturing group (Month)
            year: match[3]       // Third capturing group (Year)
        };
    } else {
        return "No match found.";
    }
};

// Test cases with date patterns
const datePattern = "(\\d{2})-(\\d{2})-(\\d{4})"; // Pattern for DD-MM-YYYY format
const testString1 = "Today's date is 25-02-2025";
const testString2 = "Event happened on 03-08-1998";

// Running tests
console.log(extractGroups(datePattern, testString1));
console.log(extractGroups(datePattern, testString2));

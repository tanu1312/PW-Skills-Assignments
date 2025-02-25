// Polyfill for Array.includes method
if (!Array.prototype.customIncludes) {
    Array.prototype.customIncludes = function (searchElement, fromIndex = 0) {
        // Handle negative fromIndex
        let start = fromIndex < 0 ? this.length + fromIndex : fromIndex;

        // Iterate through the array starting from start index
        for (let i = start; i < this.length; i++) {
            if (this[i] === searchElement) {
                return true; // Element found
            }
        }
        return false; // Element not found
    };
}

// Example usage
const arr = [1, 2, 3, 4, 5];

console.log(arr.customIncludes(3));  // Output: true
console.log(arr.customIncludes(6));  // Output: false
console.log(arr.customIncludes(2, 2)); // Output: false (starts checking from index 2)
console.log(arr.customIncludes(5, -1)); // Output: true (starts from last index)

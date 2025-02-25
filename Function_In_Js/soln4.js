// Function to calculate tax using a closure
const calculateTax = (income) => {
    // Inner function to determine tax rate
    const getTaxRate = (income) => {
        if (income <= 25000) return 0.1; // 10% tax for income up to 25,000
        if (income <= 50000) return 0.2; // 20% tax for income up to 50,000
        return 0.3; // 30% tax for income above 50,000
    };

    const taxRate = getTaxRate(income);
    return income * taxRate; // Calculate tax based on income
};

// Test cases
console.log(`Tax on $20,000: $${calculateTax(20000)}`);
console.log(`Tax on $35,000: $${calculateTax(35000)}`);
console.log(`Tax on $60,000: $${calculateTax(60000)}`);

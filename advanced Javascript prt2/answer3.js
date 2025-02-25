// Calculator object with method chaining
const Calculator = {
    value: 0, // Initial value

    // Add method
    add: function (num) {
        this.value += num;
        return this; // Return the object for chaining
    },

    // Subtract method
    subtract: function (num) {
        this.value -= num;
        return this;
    },

    // Multiply method
    multiply: function (num) {
        this.value *= num;
        return this;
    },

    // Divide method
    divide: function (num) {
        if (num !== 0) {
            this.value /= num;
        } else {
            console.log("Error: Division by zero is not allowed.");
        }
        return this;
    },

    // Method to get the current value
    getResult: function () {
        console.log(`Result: ${this.value}`);
        return this.value;
    },

    // Method to reset the value
    reset: function () {
        this.value = 0;
        return this;
    }
};

// Example usage with method chaining
Calculator.add(10).subtract(2).multiply(3).divide(4).getResult(); // ((10 - 2) * 3) / 4 = 6
Calculator.reset().add(50).divide(5).multiply(2).getResult(); // (50 / 5) * 2 = 20

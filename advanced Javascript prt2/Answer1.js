// Constructor function for Person
function Person(name, age) {
    this.name = name;
    this.age = age;

    // Method to greet the person
    this.sayHello = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
}

// Creating instances of Person
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

// Calling the sayHello method
person1.sayHello(); // Output: Hello, my name is Alice and I am 25 years old.
person2.sayHello(); // Output: Hello, my name is Bob and I am 30 years old.

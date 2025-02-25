// Person constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Employee constructor function inheriting from Person
function Employee(name, age, designation) {
    Person.call(this, name, age); // Inherit properties from Person
    this.designation = designation;

    // Method to display employee details
    this.getDetails = function() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Designation: ${this.designation}`);
    };
}

// Creating instances of Employee
const emp1 = new Employee("Alice", 28, "Software Engineer");
const emp2 = new Employee("Bob", 35, "Project Manager");

// Calling the getDetails method
emp1.getDetails(); // Output: Name: Alice, Age: 28, Designation: Software Engineer
emp2.getDetails(); // Output: Name: Bob, Age: 35, Designation: Project Manager

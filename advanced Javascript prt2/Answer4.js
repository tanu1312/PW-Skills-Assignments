// Base class Shape
class Shape {
    draw() {
        console.log("Drawing a shape...");
    }
}

// Subclass Circle overriding draw method
class Circle extends Shape {
    draw() {
        console.log("Drawing a circle...");
    }
}

// Subclass Rectangle overriding draw method
class Rectangle extends Shape {
    draw() {
        console.log("Drawing a rectangle...");
    }
}

// Function to demonstrate polymorphism
function renderShape(shape) {
    shape.draw(); // Calls the overridden draw method
}

// Creating instances of Circle and Rectangle
const circle = new Circle();
const rectangle = new Rectangle();

// Demonstrating polymorphism
renderShape(circle);    // Output: Drawing a circle...
renderShape(rectangle); // Output: Drawing a rectangle...

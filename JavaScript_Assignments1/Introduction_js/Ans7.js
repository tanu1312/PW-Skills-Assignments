// Function to calculate the area of a circle
function calculateCircleArea(radius) {
    // Area of a circle formula: π * radius^2
    let area = Math.PI * Math.pow(radius, 2);
    return area;
  }
  
  // Example usage
  let radius = 10; // Radius of the circle
  
  // Call the function to calculate the area
  let circleArea = calculateCircleArea(radius);
  
  // Display the result
  console.log('Radius:', radius);
  console.log('Area of the Circle:', circleArea);
  
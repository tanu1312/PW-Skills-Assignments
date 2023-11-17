// Function to calculate BMI
function calculateBMI(weight, height) {
    // BMI formula: weight (kg) / (height (m) * height (m))
    let heightInMeters = height / 100; // Convert height from cm to meters
    let bmi = weight / (heightInMeters * heightInMeters);
    return bmi;
  }
  
  // Example usage
  let weightInKg = 70; // Weight in kilograms
  let heightInCm = 175; // Height in centimeters
  
  // Call the function to calculate BMI
  let bmiResult = calculateBMI(weightInKg, heightInCm);
  
  // Display the result
  console.log('Weight:', weightInKg, 'kg');
  console.log('Height:', heightInCm, 'cm');
  console.log('BMI:', bmiResult);
  
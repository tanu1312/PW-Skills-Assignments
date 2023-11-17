// Function to calculate simple interest
function calculateSimpleInterest(principal, rate, time) {
    // Simple interest formula: (principal * rate * time) / 100
    let interest = (principal * rate * time) / 100;
    return interest;
  }
  
  // Example usage
  let principalAmount = 1000; // Principal amount
  let interestRate = 5; // Annual interest rate (in percentage)
  let timePeriod = 2; // Time period (in years)
  
  // Call the function to calculate simple interest
  let simpleInterest = calculateSimpleInterest(principalAmount, interestRate, timePeriod);
  
  // Display the result
  console.log('Principal Amount:', principalAmount);
  console.log('Interest Rate:', interestRate, '%');
  console.log('Time Period:', timePeriod, 'years');
  console.log('Simple Interest:', simpleInterest);
  
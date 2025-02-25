// Function to determine estimated delivery time based on package type
const getDeliveryTime = (packageType) => {
    let deliveryTime;

    switch (packageType.toLowerCase()) { // Convert input to lowercase for case insensitivity
        case "standard":
            deliveryTime = "3-5 days";
            break;
        case "express":
            deliveryTime = "1-2 days";
            break;
        case "overnight":
            deliveryTime = "Next day";
            break;
        default:
            deliveryTime = "Invalid package type. Please choose 'standard', 'express', or 'overnight'.";
    }

    console.log(`Estimated delivery time for ${packageType}: ${deliveryTime}`);
};

// Test cases
getDeliveryTime("standard");  // Expected output: 3-5 days
getDeliveryTime("express");   // Expected output: 1-2 days
getDeliveryTime("overnight"); // Expected output: Next day
getDeliveryTime("priority");  // Expected output: Invalid package type

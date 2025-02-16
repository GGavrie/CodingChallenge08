
// Task 1  Function Declaration 

function calculateSalary(baseSalary, bonus, taxRate) {
    // Calculate the net salary using the provided formula.
    const netSalary = (baseSalary + bonus) - (baseSalary * taxRate);
    // Return the net salary formatted as a string with two decimal places.
    return "Net Salary: $" + netSalary.toFixed(2);
  }

// Test Data:
console.log(calculateSalary(5000, 500, 0.1)); // Expected output: "Net Salary: $5000.00"
console.log(calculateSalary(7000, 1000, 0.15)); // Expected output: "Net Salary: $6950.00"





//Task 2 Product Price After Discount 
const calculateDiscount = function(price, discountRate) {
    // Calculate the final price after discount
    const finalPrice = price - (price * discountRate);
    // Return the final price formatted as a string
    return "Final Price: $" + finalPrice.toFixed(2);
  };
  
// Test Data:
console.log(calculateDiscount(100, 0.2)); 
console.log(calculateDiscount(250, 0.15)); 

// Task 3 
// Service Free Calculation 
const calculateServiceFee = (amount, serviceType) => {
    const feeRates = {
        'Premium': 0.15, // 15% discount 
        'Standard': 0.10, // 10% discount 
        'Basic': 0.05 // 5% discount 
    };
    
    const rate = feeRates[serviceType];
    const fee = amount * rate;
    
    return `Service Fee: $${fee.toFixed(2)}`;
};

// Test data
console.log(calculateServiceFee(200, "Premium")); // Service Fee: $30.00
console.log(calculateServiceFee(500, "Standard")); // Service Fee: $50.00



// Task 4 Car  rental cost 
function calculateRentalCost(days, carType, insurance = false) {
    // Define the base rental cost per day based on car type
    let rentalCostPerDay;

    // Determine the rental cost based on the car type
    switch (carType) {
        case "Economy":
            rentalCostPerDay = 40;
            break;
        case "Standard":
            rentalCostPerDay = 60;
            break;
        case "Luxury":
            rentalCostPerDay = 100;
            break;
        default:
            return "Invalid car type";
    }

    // Calculate the total cost without insurance
    let totalCost = rentalCostPerDay * days;

    // Add insurance cost if applicable
    if (insurance) {
        totalCost += 20 * days;
    }

    // Return the total rental cost formatted as a string
    return "Total Rental Cost: $" + totalCost;
}

//Test data
console.log(calculateRentalCost(3, "Economy", true)); // Expected output: "Total Rental Cost: $180"
console.log(calculateRentalCost(5, "Luxury", false)); // Expected output: "Total Rental Cost: $500"




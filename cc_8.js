
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



// Task 5 


// Task 5 Loan Payment Calculation
function calculateLoanPayment(principal, rate, time) {
    // Calculate the total loan payment using the provided formula
    const totalPayment = principal + (principal * rate * time);
    // Return the total payment formatted as a string with two decimal places
    return "Total Payment: $" + totalPayment.toFixed(2);
}

// Test Data:
console.log(calculateLoanPayment(1000, 0.05, 2)); // Expected output: "Total Payment: $1100.00"
console.log(calculateLoanPayment(5000, 0.07, 3)); // Expected output: "Total Payment: $6050.00"





// Task 6 
// Array of transactions
let transactions = [200, 1500, 3200, 800, 2500];


function filterLargeTransactions(transactions, filterFunction) {
    // Use the filter method to create a new array with transactions greater than $1000
    return transactions.filter(filterFunction);
}

// Test Data:
console.log(filterLargeTransactions(transactions, amount => amount > 1000));
// Expected output: [1500, 3200, 2500]




//Task 7 Shopping Car Tracker 
function createCartTracker() {
    let total = 0;

    return function(price) {
        total += price;
        return `Total Cart Value: $${total}`;
    };
}

// Test Data:
let cart = createCartTracker();
console.log(cart(20)); // Expected output: "Total Cart Value: $20"
console.log(cart(35)); // Expected output: "Total Cart Value: $55"

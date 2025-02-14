// Task 1  Function Declaration 
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